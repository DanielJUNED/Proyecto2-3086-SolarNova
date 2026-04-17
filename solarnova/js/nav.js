/* =============================================
   SolarNova — Navegación multi-página + cookies + modal + form
   ============================================= */

(function () {
  'use strict';

  /* === Marcar enlace activo === */
  var path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if (path === '') path = 'index.html';
  document.querySelectorAll('[data-page]').forEach(function (a) {
    if (a.dataset.page === path) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });

  /* === Menú móvil === */
  window.toggleMobile = function () {
    var mm = document.getElementById('mobile-menu');
    var btn = document.getElementById('mobile-toggle');
    if (!mm || !btn) return;
    var isOpen = !mm.classList.contains('d-none');
    mm.classList.toggle('d-none');
    btn.setAttribute('aria-expanded', String(!isOpen));
    btn.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
  };

  /* === Cookie banner === */
  function initCookies() {
    var banner = document.getElementById('cookie-banner');
    if (!banner) return;
    if (!localStorage.getItem('sn-cookies')) banner.style.display = '';
  }
  window.cookieAction = function (val) {
    localStorage.setItem('sn-cookies', val);
    var b = document.getElementById('cookie-banner');
    if (b) b.style.display = 'none';
  };

  /* === Modal de privacidad con focus trap === */
  var lastFocusEl = null;
  window.openPrivacyModal = function () {
    lastFocusEl = document.activeElement;
    var modal = document.getElementById('privacy-modal');
    if (!modal) return;
    modal.style.display = '';
    var first = modal.querySelector('button');
    if (first) first.focus();
    document.addEventListener('keydown', privacyTrap);
  };
  window.closePrivacyModal = function () {
    var modal = document.getElementById('privacy-modal');
    if (modal) modal.style.display = 'none';
    document.removeEventListener('keydown', privacyTrap);
    if (lastFocusEl) lastFocusEl.focus();
  };
  function privacyTrap(e) {
    if (e.key === 'Escape') { window.closePrivacyModal(); return; }
    if (e.key !== 'Tab') return;
    var modal = document.getElementById('privacy-modal-content');
    if (!modal) return;
    var focusable = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    var first = focusable[0];
    var last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }

  /* === Formulario de contacto === */
  function initForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!this.checkValidity()) { this.reportValidity(); return; }
      this.style.display = 'none';
      var ok = document.getElementById('form-success');
      if (ok) ok.classList.remove('d-none');
    });
  }
  window.resetForm = function () {
    var form = document.getElementById('contact-form');
    if (!form) return;
    form.reset();
    form.style.display = '';
    var ok = document.getElementById('form-success');
    if (ok) ok.classList.add('d-none');
  };

  /* === Año dinámico === */
  function initYear() {
    var el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  }

  document.addEventListener('DOMContentLoaded', function () {
    initCookies();
    initForm();
    initYear();
  });
})();
