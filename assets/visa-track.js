/* My Spanish Student Visa — visa application click tracking.
   Sends visa_apply_click for every link to the student visa application
   (dashboard.platinumlegalspain.com/student-visa) that does not already send
   its own inline visa_apply_click. gtag only transmits the event once the
   visitor has accepted analytics; otherwise nothing is sent. */
(function () {
  'use strict';
  var TARGET = /^https:\/\/dashboard\.platinumlegalspain\.com\/student-visa/;

  function placement(a) {
    if (a.closest('.mobile-bar')) return 'sticky_bar';
    if (a.closest('.mobile-menu, [class*="mobile-menu"]')) return 'mobile_menu';
    if (a.closest('footer')) return 'footer';
    if (a.closest('nav, .nav-links')) return 'nav';
    if (a.closest('.hero-actions, .page-hero, .hero, [class*="hero"]')) return 'hero';
    if (a.closest('.cta-banner')) return 'cta_banner';
    return 'content';
  }

  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a || !TARGET.test(a.href)) return;
    // The 17 links that already fire visa_apply_click inline are left alone.
    if ((a.getAttribute('onclick') || '').indexOf('visa_apply_click') !== -1) return;
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', 'visa_apply_click', {
      source_page: location.pathname,
      placement: placement(a)
    });
  }, true);
})();
