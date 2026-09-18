// ========================================
// ACTIVE ENGLISH — Scripts
// Minimal, lightweight, no dependencies
// ========================================

(function () {
  'use strict';

  // Set current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile menu toggle
  var toggle = document.querySelector('.mobile-menu-toggle');
  var mobileNav = document.getElementById('mobileNav');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileNav.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    });

    // Close mobile nav when a link is clicked
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
      });
    });
  }

  // Hide mobile sticky CTA when hero CTA is visible (optional refinement)
  var stickyCta = document.getElementById('mobileStickyCta');
  var hero = document.querySelector('.hero');

  if (stickyCta && hero && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          stickyCta.style.opacity = '0';
          stickyCta.style.pointerEvents = 'none';
        } else {
          stickyCta.style.opacity = '1';
          stickyCta.style.pointerEvents = 'auto';
        }
      });
    }, { threshold: 0.3 });

    observer.observe(hero);
  }
})();