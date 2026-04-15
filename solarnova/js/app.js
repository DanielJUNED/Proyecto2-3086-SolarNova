/* =============================================
   SolarNova — JavaScript
   SPA navigation, cookies, modal, formulario
   ============================================= */

(function () {
  'use strict';

  /* === SPA Navigation === */
  let currentSection = 'inicio';

  window.navigateTo = function (section) {
    if (section === 'privacidad') {
      openPrivacyModal();
      return;
    }

    // Toggle sections
    document.querySelectorAll('.sn-section').forEach(function (s) {
      s.classList.remove('active');
    });
    var target = document.getElementById('sec-' + section);
    if (target) target.classList.add('active');

    // Update nav links (desktop + mobile)
    document.querySelectorAll('[data-section]').forEach(function (btn) {
      if (btn.dataset.section === section) {
        btn.classList.add('active');
        btn.setAttribute('aria-current', 'page');
      } else {
        btn.classList.remove('active');
        btn.removeAttribute('aria-current');
      }
    });

    currentSection = section;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Close mobile menu
    var mm = document.getElementById('mobile-menu');
    if (mm) mm.classList.add('d-none');
    var toggle = document.getElementById('mobile-toggle');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  };

  /* === Mobile menu === */
  window.toggleMobile = function () {
    var mm = document.getElementById('mobile-menu');
    var btn = document.getElementById('mobile-toggle');
    var isOpen = !mm.classList.contains('d-none');
    mm.classList.toggle('d-none');
    btn.setAttribute('aria-expanded', String(!isOpen));
    btn.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
  };

  /* === Cookie Banner === */
  function initCookies() {
    var pref = localStorage.getItem('sn-cookies');
    if (!pref) {
      document.getElementById('cookie-banner').style.display = '';
    }
  }

  window.cookieAction = function (val) {
    localStorage.setItem('sn-cookies', val);
    document.getElementById('cookie-banner').style.display = 'none';
  };

  /* === Privacy Modal === */
  var lastFocusEl = null;

  window.openPrivacyModal = function () {
    lastFocusEl = document.activeElement;
    var modal = document.getElementById('privacy-modal');
    modal.style.display = '';
    var first = modal.querySelector('button');
    if (first) first.focus();
    document.addEventListener('keydown', privacyTrap);
  };

  window.closePrivacyModal = function () {
    document.getElementById('privacy-modal').style.display = 'none';
    document.removeEventListener('keydown', privacyTrap);
    if (lastFocusEl) lastFocusEl.focus();
  };

  function privacyTrap(e) {
    if (e.key === 'Escape') {
      closePrivacyModal();
      return;
    }
    if (e.key !== 'Tab') return;
    var modal = document.getElementById('privacy-modal-content');
    var focusable = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  /* === Contact Form === */
  function initForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!this.checkValidity()) {
        this.reportValidity();
        return;
      }
      this.style.display = 'none';
      document.getElementById('form-success').classList.remove('d-none');
    });
  }

  window.resetForm = function () {
    var form = document.getElementById('contact-form');
    form.reset();
    form.style.display = '';
    document.getElementById('form-success').classList.add('d-none');
  };

  /* === Dynamic Year === */
  function initYear() {
    var el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* === Init === */
  document.addEventListener('DOMContentLoaded', function () {
    initCookies();
    initForm();
    initYear();
  });
})();
