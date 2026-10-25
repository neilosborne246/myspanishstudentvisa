/* My Spanish Student Visa — cookie consent.
   Google Analytics (G-GKWVF027FK) is the only non-essential cookie on this site.
   gtag.js is NOT requested until the visitor accepts; the head snippet loads it
   straight away on later visits when the stored choice is "granted".
   Choice cookie: mssv_consent=granted|denied, 12 months, first-party. */
(function () {
  'use strict';
  var NAME = 'mssv_consent';
  var MAX_AGE = 31536000; // 12 months
  var GA_ID = 'G-GKWVF027FK';

  function read() {
    var m = document.cookie.match(/(?:^|;\s*)mssv_consent=(granted|denied)/);
    return m ? m[1] : null;
  }

  function store(value) {
    document.cookie = NAME + '=' + value + '; Max-Age=' + MAX_AGE + '; Path=/; SameSite=Lax' +
      (location.protocol === 'https:' ? '; Secure' : '');
  }

  function loadGa() {
    if (window.__mssvGaLoaded) return;
    window.__mssvGaLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }

  function clearGaCookies() {
    var host = location.hostname.replace(/^www\./, '');
    document.cookie.split(';').forEach(function (c) {
      var n = c.split('=')[0].trim();
      if (!/^_ga(_|$)|^_gid$|^_gat/.test(n)) return;
      ['', '; domain=' + host, '; domain=.' + host].forEach(function (d) {
        document.cookie = n + '=; Max-Age=0; Path=/' + d;
      });
    });
  }

  function accept() {
    store('granted');
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', { analytics_storage: 'granted' });
    }
    loadGa();
    hide();
  }

  function reject() {
    var wasLoaded = window.__mssvGaLoaded;
    store('denied');
    clearGaCookies();
    hide();
    // Withdrawal: Google's script is already running on this page, so reload
    // to stop it. Next page view never requests it.
    if (wasLoaded) location.reload();
  }

  var CSS =
    '#mssv-consent{position:fixed;left:1rem;bottom:1rem;z-index:10050;max-width:26rem;' +
    'background:#0c1930;color:#fff;border:1px solid rgba(250,207,57,.45);border-radius:14px;' +
    'box-shadow:0 12px 32px rgba(0,0,0,.28);padding:1.15rem 1.2rem 1.05rem;font:400 .9rem/1.5 Inter,system-ui,sans-serif}' +
    '#mssv-consent[hidden]{display:none}' +
    '#mssv-consent h2{margin:0 0 .35rem;font:600 1rem/1.3 "Bricolage Grotesque",Inter,system-ui,sans-serif;color:#facf39}' +
    '#mssv-consent p{margin:0 0 .9rem;color:rgba(255,255,255,.88)}' +
    '#mssv-consent a{color:#facf39;text-decoration:underline}' +
    '#mssv-consent .mssv-c-btns{display:flex;gap:.6rem}' +
    '#mssv-consent button{flex:1;min-height:44px;border-radius:40px;font:600 .88rem/1 Inter,system-ui,sans-serif;cursor:pointer;padding:.7rem 1rem}' +
    '#mssv-consent .mssv-c-yes{background:#facf39;color:#0c1930;border:2px solid #facf39}' +
    '#mssv-consent .mssv-c-no{background:transparent;color:#fff;border:2px solid #fff}' +
    '#mssv-consent button:focus-visible{outline:3px solid #fff;outline-offset:2px}' +
    '@media(max-width:580px){#mssv-consent{left:.75rem;right:.75rem;bottom:calc(.75rem + 64px);max-width:none}}' +
    '.mssv-cookie-settings{background:none;border:0;padding:0;font:inherit;color:inherit;text-decoration:inherit;cursor:pointer;opacity:inherit}' +
    '.mssv-cookie-settings:hover{text-decoration:underline}';

  var box, styled;

  // Needed on every page view: the footer "Cookie settings" button uses
  // these rules even when the banner is not shown.
  function injectCss() {
    if (styled) return;
    styled = true;
    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);
  }

  function build() {
    if (box) return box;
    injectCss();

    box = document.createElement('div');
    box.id = 'mssv-consent';
    box.setAttribute('role', 'region');
    box.setAttribute('aria-label', 'Cookie choice');
    box.hidden = true;
    box.innerHTML =
      '<h2>Analytics cookies</h2>' +
      '<p>We would like to use Google Analytics cookies to see how visitors use this site, so we can improve it. ' +
      'They stay off unless you accept. <a href="/legal/cookies-policy/">Cookie policy</a></p>' +
      '<div class="mssv-c-btns">' +
      '<button type="button" class="mssv-c-no">Reject</button>' +
      '<button type="button" class="mssv-c-yes">Accept</button>' +
      '</div>';
    box.querySelector('.mssv-c-yes').addEventListener('click', accept);
    box.querySelector('.mssv-c-no').addEventListener('click', reject);
    document.body.appendChild(box);
    return box;
  }

  function show() {
    build().hidden = false;
  }

  function hide() {
    if (box) box.hidden = true;
  }

  // "Cookie settings" next to every footer cookie-policy link, plus any
  // [data-cookie-settings] control placed in page content.
  function wireSettings() {
    var links = document.querySelectorAll(
      'footer a[href="/legal/cookies-policy/"], footer a[href="/cookies/"]');
    Array.prototype.forEach.call(links, function (a) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'mssv-cookie-settings';
      b.setAttribute('data-cookie-settings', '');
      b.textContent = 'Cookie settings';
      // Match the neighbouring footer link, whatever the page template.
      var s = window.getComputedStyle(a);
      b.style.color = s.color;
      b.style.fontSize = s.fontSize;
      b.style.marginLeft = s.marginLeft;
      a.parentNode.insertBefore(b, a.nextSibling);
    });
    document.addEventListener('click', function (e) {
      var t = e.target.closest && e.target.closest('[data-cookie-settings]');
      if (!t) return;
      e.preventDefault();
      show();
      var first = box.querySelector('button');
      if (first) first.focus();
    });
  }

  function init() {
    injectCss();
    wireSettings();
    if (!read()) show();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
