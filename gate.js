(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.PUGate = api;
})(typeof globalThis === 'object' ? globalThis : this, function () {
  'use strict';
  const FREE_LIMIT = 2;
  const KEY = 'pu_auth_guest_used_v1';
  function count(raw) {
    if (raw === null || raw === '' || !/^\d+$/.test(String(raw))) return 0;
    const n = Number(raw);
    return Number.isSafeInteger(n) ? Math.min(n, FREE_LIMIT) : 0;
  }
  function create(storage, signedIn = () => false, enabled = () => true) {
    let memory = 0;
    try { memory = count(storage.getItem(KEY)); } catch {}
    const used = () => { try { memory = count(storage.getItem(KEY)); } catch {} return memory; };
    const counted = kind => kind === 'generate' || kind === 'improve';
    const allowed = kind => !enabled() || signedIn() || !counted(kind) || used() < FREE_LIMIT;
    function commit(kind) {
      if (!enabled() || signedIn() || !counted(kind)) return;
      memory = Math.min(FREE_LIMIT, used() + 1);
      try { storage.setItem(KEY, String(memory)); } catch {}
    }
    function run(kind, work) {
      if (!allowed(kind)) return { blocked: true };
      const value = work();
      if (value !== false && value !== null) commit(kind);
      return { blocked: false, value };
    }
    return { used, left: () => Math.max(0, FREE_LIMIT - used()), allowed, commit, run };
  }
  return { FREE_LIMIT, KEY, count, create };
});
