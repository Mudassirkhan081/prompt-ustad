(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.PUAuthClient = api;
})(typeof globalThis === 'object' ? globalThis : this, function () {
  'use strict';
  const SESSION_KEY = 'pu_auth_session_v1';
  const RECOVERY_KEY = 'pu_auth_recovery_v1';
  class AuthError extends Error { constructor(kind) { super(kind); this.kind = kind; } }
  function create(config, { storage, fetcher = fetch, online = () => navigator.onLine } = {}) {
    if (!storage) { try { storage = globalThis.localStorage; } catch {} }
    let session = null, refreshing = null, revision = 0;
    const listeners = new Set();
    const base = String(config.supabaseUrl || '').replace(/\/$/, '');
    let configured = false;
    try { configured = new URL(base).protocol === 'https:' && !!config.anonKey && !String(config.anonKey).startsWith('sb_secret_'); } catch {}
    const confirmed = user => !!(user && user.id && user.email && (user.email_confirmed_at || user.confirmed_at));
    try {
      const raw = JSON.parse(storage.getItem(SESSION_KEY) || 'null');
      if (raw && typeof raw.access_token === 'string' && typeof raw.refresh_token === 'string' && confirmed(raw.user)) session = raw;
    } catch {}
    const emit = () => listeners.forEach(fn => fn(session));
    function save(raw, user = raw.user) {
      if (!raw || !raw.access_token || !raw.refresh_token || !confirmed(user)) throw new AuthError('credentials');
      revision++;
      session = { access_token: raw.access_token, refresh_token: raw.refresh_token, expires_at: Number(raw.expires_at) || Math.floor(Date.now()/1000) + (Number(raw.expires_in) || 3600), user: { id: user.id, email: user.email, email_confirmed_at: user.email_confirmed_at || user.confirmed_at, user_metadata: { marketing_opt_in: user.user_metadata?.marketing_opt_in === true } } };
      try { storage.setItem(SESSION_KEY, JSON.stringify(session)); } catch {}
      emit(); return session;
    }
    function clear() { revision++; session = null; try { storage.removeItem(SESSION_KEY); storage.removeItem(RECOVERY_KEY); } catch {} emit(); }
    async function request(path, { method = 'GET', body, token, generic = false } = {}) {
      if (!configured) throw new AuthError('setup');
      const headers = { apikey: config.anonKey, 'Content-Type': 'application/json' };
      if (token) headers.Authorization = 'Bearer ' + token;
      let response; const controller = new AbortController(); const timeout = setTimeout(() => controller.abort(), 15000);
      try { response = await fetcher(base + path, { method, headers, body: body === undefined ? undefined : JSON.stringify(body), cache: 'no-store', credentials: 'omit', referrerPolicy: 'no-referrer', signal: controller.signal }); }
      catch { throw new AuthError('network'); }
      finally { clearTimeout(timeout); }
      let data = {}; try { data = await response.json(); } catch {}
      if (!response.ok) {
        if (response.status === 429) throw new AuthError('rate');
        if (generic && [400,401,403,422].includes(response.status)) return {};
        throw new AuthError(response.status >= 500 ? 'network' : 'credentials');
      }
      return data;
    }
    const redirect = () => new URL('auth-callback.html', config.siteUrl.replace(/\/$/,'') + '/').href;
    async function signup(email, password, marketing) {
      if (password.length < 8) throw new AuthError('password');
      await request('/auth/v1/signup?redirect_to=' + encodeURIComponent(redirect()), { method: 'POST', body: { email: String(email).trim(), password, data: { marketing_opt_in: marketing === true } }, generic: true });
      // A signup response never grants unlimited use: confirmation and login are required.
    }
    async function login(email, password) {
      const raw = await request('/auth/v1/token?grant_type=password', { method: 'POST', body: { email: String(email).trim(), password } });
      const user = await request('/auth/v1/user', { token: raw.access_token });
      return save(raw, user);
    }
    async function recover(email) {
      await request('/auth/v1/recover?redirect_to=' + encodeURIComponent(redirect()), { method: 'POST', body: { email: String(email).trim() }, generic: true });
    }
    async function validate() {
      if (!session || !online()) return session;
      const raw = session, started = revision;
      try {
        const user = await request('/auth/v1/user', { token: raw.access_token });
        if (started !== revision) return session;
        if (!confirmed(user)) { clear(); return null; }
        if (raw.expires_at <= Date.now()/1000 + 90) return refresh();
        return save(raw,user);
      } catch (err) {
        if (started !== revision) return session;
        if (err.kind === 'credentials') return refresh();
        return session; // Network errors do not destroy an offline-capable session.
      }
    }
    async function refresh() {
      if (!session || !online()) return session;
      if (refreshing) return refreshing;
      const started = revision, token = session.refresh_token;
      refreshing = (async () => {
        try {
          const raw = await request('/auth/v1/token?grant_type=refresh_token', { method: 'POST', body: { refresh_token: token } });
          const user = await request('/auth/v1/user', { token: raw.access_token });
          if (started !== revision) return session;
          return save(raw,user);
        } catch (err) { if (started === revision && err.kind === 'credentials') clear(); return session; }
        finally { refreshing = null; }
      })();
      return refreshing;
    }
    async function logout() {
      const token = session?.access_token;
      clear();
      if (token && online()) { try { await request('/auth/v1/logout?scope=local', { method: 'POST', token }); } catch {} }
    }
    async function callback(hash) {
      const params = new URLSearchParams(hash.replace(/^#/,''));
      if (params.has('error') || params.has('error_description')) throw new AuthError('credentials');
      const token = params.get('access_token'), refreshToken = params.get('refresh_token');
      if (!token || !refreshToken) throw new AuthError('credentials');
      const user = await request('/auth/v1/user', { token });
      save({ access_token: token, refresh_token: refreshToken, expires_in: params.get('expires_in') },user);
      if (params.get('type') === 'recovery') { try { storage.setItem(RECOVERY_KEY,'1'); } catch {} return 'recovery'; }
      return 'confirmed';
    }
    async function reset(password) {
      if (password.length < 8 || !session) throw new AuthError('password');
      await request('/auth/v1/user', { method: 'PUT', token: session.access_token, body: { password } });
      await logout();
    }
    async function deleteAccount() {
      if (!session || !config.deleteFunctionReady) throw new AuthError('setup');
      const result = await request('/functions/v1/delete-account', { method: 'POST', token: session.access_token, body: { confirm: true } });
      if (!result.deleted) throw new AuthError('network');
      clear();
    }
    return { configured, getSession: () => session, isSignedIn: () => confirmed(session?.user), subscribe(fn) { listeners.add(fn); return () => listeners.delete(fn); }, signup, login, recover, validate, refresh, logout, callback, reset, deleteAccount, clear, request };
  }
  return { create, SESSION_KEY, RECOVERY_KEY, AuthError };
});
