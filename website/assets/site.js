/* ProGround website — lightweight vanilla interactions. No framework.
   Guards every feature so pages without a given widget are unaffected. */
(function () {
  'use strict';

  /* ---- Sticky header shrink ---- */
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 20); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.querySelector('.mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      var open = mobileNav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---- Before / after sliders ----
     The BEFORE layer sits at full width and is revealed with clip-path (never
     squished). Position is driven by the hidden range (keyboard/AT) AND by
     direct pointer/touch dragging anywhere on the slider. */
  document.querySelectorAll('.ba-slider').forEach(function (el) {
    var wrap = el.querySelector('.ba-before-wrap');
    var handle = el.querySelector('.ba-handle');
    var range = el.querySelector('input[type=range]');
    if (!wrap || !handle || !range) return;
    var set = function (v) {
      v = Math.max(0, Math.min(100, v));
      wrap.style.clipPath = 'inset(0 ' + (100 - v) + '% 0 0)';
      handle.style.left = v + '%';
      range.value = v;
    };
    range.addEventListener('input', function () { set(parseFloat(range.value)); });

    var dragging = false;
    var fromClientX = function (clientX) {
      var r = el.getBoundingClientRect();
      if (r.width <= 0) return;
      set(((clientX - r.left) / r.width) * 100);
    };
    el.addEventListener('pointerdown', function (e) {
      dragging = true;
      if (el.setPointerCapture) { try { el.setPointerCapture(e.pointerId); } catch (err) {} }
      fromClientX(e.clientX);
      e.preventDefault();
    });
    el.addEventListener('pointermove', function (e) { if (dragging) { fromClientX(e.clientX); e.preventDefault(); } });
    var stop = function () { dragging = false; };
    el.addEventListener('pointerup', stop);
    el.addEventListener('pointercancel', stop);
    el.addEventListener('lostpointercapture', stop);

    set(parseFloat(range.value || 50));
  });

  /* ---- Scroll reveal ---- */
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (r) { io.observe(r); });
  } else {
    reveals.forEach(function (r) { r.classList.add('in'); });
  }

  /* ---- Drainage diagnostic ---- */
  var diag = document.getElementById('pg-diagnostic');
  if (diag) {
    var QS = [
      { id: 'where', q: 'Where is the water collecting?', opts: ['A low spot in the middle of the yard', 'Along the foundation / near the slab', 'Across a wide area (sheets of water)', 'Near a downspout or gutter'] },
      { id: 'long', q: 'How long does water stay after rain?', opts: ['Gone within a few hours', 'A day or so', 'Several days — the ground stays soggy'] },
      { id: 'drain', q: 'Do you know where the water currently drains?', opts: ['Yes, there is an outlet', 'No, it just sits', 'Not sure'] },
      { id: 'tried', q: 'Has anything been attempted before?', opts: ['Nothing yet', 'Added topsoil to the low spot', 'A previous drain that failed'] }
    ];
    var step = 0, ans = {};
    var read = function () {
      var w = ans.where || '';
      if (w.indexOf('foundation') >= 0) return { cause: 'Water moving toward the slab', fam: 'Grading + downspout tie-ins', range: '$1,000 – $3,500' };
      if (w.indexOf('wide') >= 0 || (ans.long && ans.long.indexOf('Several') >= 0)) return { cause: 'Poor fall across clay soil holding water on the surface', fam: 'Regrading, sometimes with a catch-basin system', range: '$1,500 – $5,000' };
      if (w.indexOf('downspout') >= 0) return { cause: 'Roof water concentrating in one area', fam: 'Downspout tie-ins and buried drainage pipe', range: '$1,000 – $2,500' };
      return { cause: 'A low spot that will not percolate in clay soil', fam: 'A catch basin and pipe run to a suitable outlet', range: '$1,000 – $3,000' };
    };
    var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
    var render = function () {
      if (step >= QS.length) {
        var r = read();
        diag.innerHTML =
          '<div class="diag-inner">' +
          '<div class="diag-kicker">Starting read</div>' +
          '<h3>' + esc(r.cause) + '</h3>' +
          '<div class="diag-cols"><div><div class="diag-lab">LIKELY FIX</div><div class="diag-val">' + esc(r.fam) + '</div></div>' +
          '<div><div class="diag-lab">STARTING RANGE</div><div class="diag-range">' + esc(r.range) + '</div></div></div>' +
          '<p class="diag-note">This is a starting read based on what you described. Water problems are confirmed on the property, not on a screen — a free site visit is the next step.</p>' +
          '<div class="btn-row"><a class="btn btn-primary btn-md on-dark" href="/estimate/">Get my free estimate</a>' +
          '<button class="btn btn-secondary btn-md on-dark" id="diag-reset" type="button">Start over</button></div></div>';
        var rb = document.getElementById('diag-reset');
        if (rb) rb.addEventListener('click', function () { step = 0; ans = {}; render(); });
        return;
      }
      var cur = QS[step];
      var bars = QS.map(function (_, i) { return '<div class="diag-bar' + (i <= step ? ' on' : '') + '"></div>'; }).join('');
      var opts = cur.opts.map(function (o) { return '<button class="diag-opt" type="button" data-v="' + esc(o) + '">' + esc(o) + '</button>'; }).join('');
      diag.innerHTML =
        '<div class="diag-inner"><div class="diag-progress">' + bars + '</div>' +
        '<div class="diag-count">QUESTION ' + (step + 1) + ' OF ' + QS.length + '</div>' +
        '<h3>' + esc(cur.q) + '</h3><div class="diag-opts">' + opts + '</div></div>';
      diag.querySelectorAll('.diag-opt').forEach(function (b) {
        b.addEventListener('click', function () { ans[cur.id] = b.getAttribute('data-v'); step++; render(); });
      });
    };
    render();
  }

  /* ---- Multi-step estimate form ---- */
  var form = document.getElementById('pg-estimate-form');
  if (form) {
    var steps = Array.prototype.slice.call(form.querySelectorAll('[data-step]'));
    var total = steps.length;
    var cur = 0;
    var bars = form.querySelectorAll('.est-bar');
    var counter = form.querySelector('.est-counter');
    var backBtn = form.querySelector('[data-est-back]');
    var nextBtn = form.querySelector('[data-est-next]');
    var submitBtn = form.querySelector('[data-est-submit]');
    var svcSelect = form.querySelector('[name="service"]');
    var branches = form.querySelectorAll('[data-branch]');

    var showBranch = function () {
      if (!svcSelect) return;
      var v = svcSelect.value;
      var map = {
        'recurring': ['Annual Property Maintenance', 'Residential Lawn Maintenance', 'Commercial Property Maintenance', 'Large Property Mowing'],
        'landscape': ['Landscape Renovation', 'Landscape Installation'],
        'water': ['Drainage Solution', 'Grading & Yard Leveling'],
        'lights': ['Christmas Light Installation']
      };
      var active = '';
      Object.keys(map).forEach(function (k) { if (map[k].indexOf(v) >= 0) active = k; });
      branches.forEach(function (b) { b.hidden = (b.getAttribute('data-branch') !== active); });
    };
    if (svcSelect) svcSelect.addEventListener('change', showBranch);

    var update = function () {
      steps.forEach(function (s, i) { s.hidden = (i !== cur); });
      bars.forEach(function (b, i) { b.classList.toggle('on', i <= cur); });
      if (counter) counter.textContent = 'STEP ' + (cur + 1) + ' OF ' + total;
      if (backBtn) backBtn.style.visibility = cur === 0 ? 'hidden' : 'visible';
      if (nextBtn) nextBtn.hidden = cur === total - 1;
      if (submitBtn) submitBtn.hidden = cur !== total - 1;
    };
    var valid = function () {
      var s = steps[cur];
      var reqs = s.querySelectorAll('[required]');
      for (var i = 0; i < reqs.length; i++) { if (!reqs[i].reportValidity()) return false; }
      return true;
    };
    if (nextBtn) nextBtn.addEventListener('click', function () { if (valid() && cur < total - 1) { cur++; if (cur === 2) showBranch(); update(); } });
    if (backBtn) backBtn.addEventListener('click', function () { if (cur > 0) { cur--; update(); } });
    update();
  }

  /* ---- Conversion event tracking ----
     No-op until an analytics tag is present. Pushes standard events to dataLayer
     and to gtag()/plausible() if they exist, so calls, texts and form submits are
     measurable the moment a GA4/Plausible tag is added via the $ANALYTICS slot in
     build.ps1 (Render-Head). Nothing here loads a third-party script on its own. */
  var track = function (name, params) {
    params = params || {};
    try { window.dataLayer = window.dataLayer || []; var p = {}; for (var k in params) p[k] = params[k]; p.event = name; window.dataLayer.push(p); } catch (e) {}
    try { if (typeof window.gtag === 'function') window.gtag('event', name, params); } catch (e) {}
    try { if (typeof window.plausible === 'function') window.plausible(name, { props: params }); } catch (e) {}
  };
  document.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a') : null;
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (href.indexOf('tel:') === 0) track('call_click', { method: 'phone' });
    else if (href.indexOf('sms:') === 0) track('text_click', { method: 'sms' });
    else if (href.indexOf('mailto:') === 0) track('email_click', { method: 'email' });
    else if (href.indexOf('/estimate') === 0) track('estimate_cta_click', {});
  }, true);
  var estForm = document.getElementById('pg-estimate-form');
  if (estForm) {
    estForm.addEventListener('submit', function () {
      var svc = estForm.querySelector('[name="service"]');
      var tf = estForm.querySelector('[name="timeframe"]');
      track('generate_lead', { form: 'estimate', service: svc ? svc.value : '', timeframe: tf ? tf.value : '' });
    });
  }
})();
