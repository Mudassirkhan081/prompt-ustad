/* Optional page-view measurement. Prompt text and form fields are never collected here. */
(() => {
  'use strict';
  const ID = 'G-7063PLJYMM';
  const KEY = 'pu_analytics_consent_v1';
  const MAX_AGE = 180 * 24 * 60 * 60 * 1000;
  const allowedPages = new Set(['', 'index.html', 'studio.html', 'about.html', 'examples.html', 'guides.html', 'guides-check-and-refine.html', 'guides-roman-urdu-prompts.html', 'guides-write-a-clear-prompt.html', 'privacy.html', 'terms.html']);
  const pageName = location.pathname.replace(/^\/prompt-ustad\//, '');
  if (!location.pathname.startsWith('/prompt-ustad/') || !allowedPages.has(pageName)) return;
  const production = location.hostname === 'mudassirkhan081.github.io';
  let started = false;
  function readChoice() {
    try {
      const record = JSON.parse(localStorage.getItem(KEY));
      if (record?.version === 1 && ['accepted', 'denied'].includes(record.choice) && Number.isFinite(record.at) && record.at <= Date.now() && Date.now() - record.at < MAX_AGE) return record.choice;
    } catch { /* Storage may be unavailable. Keep analytics off until a fresh choice. */ }
    return null;
  }
  function saveChoice(choice) {
    try { localStorage.setItem(KEY, JSON.stringify({version: 1, choice, at: Date.now()})); } catch { /* This choice still applies to this page. */ }
  }
  function referrerOrigin() {
    try { return new URL(document.referrer).origin + '/'; } catch { return ''; }
  }
  function start() {
    if (started || !production) return;
    started = true;
    window['ga-disable-' + ID] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', {analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'});
    window.gtag('consent', 'update', {analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'});
    window.gtag('js', new Date());
    window.gtag('config', ID, {
      send_page_view: true,
      page_location: location.origin + location.pathname,
      page_referrer: referrerOrigin(),
      page_title: document.title,
      cookie_domain: 'none',
      cookie_path: '/prompt-ustad/',
      cookie_expires: 15552000,
      cookie_update: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });
    const tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
    tag.id = 'pu-google-analytics';
    document.head.append(tag);
  }
  function stop() {
    // Google's opt-out flag also stops a tag already loaded on this page.
    window['ga-disable-' + ID] = true;
    for (const name of ['_ga', '_ga_' + ID.slice(2).replace(/-/g, '_')]) {
      document.cookie = name + '=; Max-Age=0; Path=/prompt-ustad/; SameSite=Lax; Secure';
    }
  }
  const panel = document.createElement('aside');
  panel.id = 'pu-analytics-consent';
  panel.className = 'pu-analytics-consent';
  panel.setAttribute('aria-labelledby', 'pu-analytics-title');
  panel.hidden = true;
  panel.innerHTML = '<h2 id="pu-analytics-title">Optional analytics</h2><p>May we use Google Analytics to understand visits and improve Prompt Ustad? Prompt text and study questions are not included. The tool works either way.</p><p class="pu-analytics-detail" lang="ur-Latn">Analytics optional hai. Mana karne par bhi tool free chalta rahega.</p><div class="pu-analytics-actions"><button type="button" data-choice="denied">Continue without</button><button type="button" data-choice="accepted">Allow analytics</button></div><a href="/prompt-ustad/privacy.html">Privacy details</a>';
  const settings = document.createElement('button');
  settings.type = 'button';
  settings.className = 'pu-analytics-settings';
  settings.textContent = 'Analytics preferences';
  settings.setAttribute('aria-controls', panel.id);
  settings.setAttribute('aria-expanded', 'false');
  document.body.append(panel);
  (document.querySelector('footer') || document.body).append(settings);
  function show() {
    panel.hidden = false;
    settings.setAttribute('aria-expanded', 'true');
  }
  function hide() {
    const focused = panel.contains(document.activeElement);
    panel.hidden = true;
    settings.setAttribute('aria-expanded', 'false');
    if (focused) settings.focus({preventScroll: true});
  }
  settings.addEventListener('click', () => {
    if (panel.hidden) { show(); panel.querySelector('button').focus({preventScroll: true}); } else hide();
  });
  panel.addEventListener('click', event => {
    const choice = event.target.closest('button[data-choice]')?.dataset.choice;
    if (!choice) return;
    saveChoice(choice);
    if (choice === 'accepted') {
      // A previously opted-out loaded tag stays disabled until the next page load.
      if (!started) start();
    } else stop();
    hide();
  });
  addEventListener('storage', event => {
    if (event.key !== KEY && event.key !== null) return;
    const choice = readChoice();
    if (choice !== 'accepted') stop();
    if (!choice) show(); else hide();
  });
  const initial = readChoice();
  if (initial === 'accepted') start(); else { stop(); if (!initial) show(); }
})();
