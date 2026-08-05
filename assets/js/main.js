/**
 * Ebenezer Junior School Nampunge — Main Scripts
 * -------------------------------------------------
 * Vanilla JavaScript. All interactive behaviours are grouped below:
 *   1. Sticky navbar & back-to-top
 *   2. Mobile navigation (drawer + dropdowns)
 *   3. Scroll reveal animations
 *   4. Counter animations
 *   5. Hero slider
 *   6. Parallax
 *   7. Gallery filter + lightbox
 *   8. Testimonials slider
 *   9. FAQ accordion
 *  10. Button ripple
 *  11. Active navigation (scrollspy)
 *  12. Form validation & newsletter
 *
 * Works with progressive enhancement: content remains visible without JS.
 */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  /* ------------------------------------------------ *
   * Helpers
   * ------------------------------------------------ */
  var $  = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  /* ================================================ *
   * 1. Sticky navbar & back to top
   * ================================================ */
  var navbar  = $('#navbar');
  var toTop   = $('#backToTop');
  var scrolled = false;

  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    scrolled = y > 40;
    if (navbar) navbar.classList.toggle('scrolled', scrolled);
    if (toTop) toTop.classList.toggle('show', y > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ================================================ *
   * 2. Mobile navigation
   * ================================================ */
  var hamburger = $('#hamburger');
  var mobileNav = $('#mobileNav');
  var scrim     = $('#scrim');

  function setMobileNav(open) {
    if (!mobileNav || !hamburger) return;
    mobileNav.classList.toggle('open', open);
    if (scrim) scrim.classList.toggle('show', open);
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.classList.toggle('no-scroll', open);
  }

  if (hamburger) hamburger.addEventListener('click', function () {
    setMobileNav(!mobileNav.classList.contains('open'));
  });
  if (scrim) scrim.addEventListener('click', function () { setMobileNav(false); });

  // Close drawer when a mobile link is tapped
  if (mobileNav) {
    $$('a', mobileNav).forEach(function (link) {
      link.addEventListener('click', function () { setMobileNav(false); });
    });
    // Mobile dropdown groups
    $$('.mobile-drop', mobileNav).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var sub = btn.nextElementSibling;
        var open = btn.getAttribute('aria-expanded') === 'true';
        sub.style.display = open ? 'none' : 'block';
        btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      });
    });
  }

  // Close mobile nav with Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMobileNav(false);
  });

  /* ================================================ *
   * 3. Scroll reveal animations
   * ================================================ */
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  $$('.reveal').forEach(function (el) { revealObserver.observe(el); });

  /* ================================================ *
   * 4. Counter animations
   * ================================================ */
  function animateCounter(el) {
    var target = parseInt(el.getAttribute('data-target'), 10) || 0;
    var duration = 1800;
    var startTime = performance.now();

    var tick = setInterval(function () {
      var elapsed = performance.now() - startTime;
      var progress = Math.min(elapsed / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.floor(eased * target);
      if (progress >= 1) {
        el.textContent = target;
        clearInterval(tick);
      }
    }, 16);
  }

  var counterObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  $$('.counter').forEach(function (el) { counterObserver.observe(el); });

  /* ================================================ *
   * 5. Parallax (hero card + background layers)
   * ================================================ */
  var parallaxEls = $$('[data-parallax]');

  function onParallax() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var y = window.scrollY || 0;
    parallaxEls.forEach(function (el) {
      var factor = parseFloat(el.getAttribute('data-parallax')) || 0;
      el.style.transform = 'translateY(' + (y * factor) + 'px)';
    });
  }
  window.addEventListener('scroll', onParallax, { passive: true });

  /* ================================================ *
   * 7. Gallery filter + lightbox
   * ================================================ */
  var filterBtns = $$('.filter-btn');
  var galleryItems = $$('.gallery-item');

  // Filtering
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');
      galleryItems.forEach(function (item) {
        var cat = item.getAttribute('data-cat');
        var show = filter === 'All' || cat === filter;
        item.classList.toggle('hidden', !show);
      });
    });
  });

  // Lightbox
  var lightbox   = $('#lightbox');
  var lbImage    = $('#lbImage');
  var lbTitle    = $('#lbTitle');
  var lbCat      = $('#lbCat');
  var lbPrev     = $('#lbPrev');
  var lbNext     = $('#lbNext');
  var lbClose    = $('#lbClose');
  var lbItems    = [];
  var lbCurrent  = 0;

  function collectLightboxItems() {
    lbItems = galleryItems.filter(function (item) {
      return !item.classList.contains('hidden');
    });
  }

  function openLightbox(item) {
    if (!lightbox) return;
    collectLightboxItems();
    lbCurrent = lbItems.indexOf(item);
    renderLightbox();
    lightbox.classList.add('open');
    document.body.classList.add('lightbox-locked');
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    document.body.classList.remove('lightbox-locked');
  }

  function renderLightbox() {
    var item = lbItems[lbCurrent];
    if (!item) return;
    lbImage.src = item.getAttribute('data-full');
    lbImage.alt = item.getAttribute('data-title');
    lbTitle.textContent = item.getAttribute('data-title');
    lbCat.textContent = item.getAttribute('data-cat');
  }

  galleryItems.forEach(function (item) {
    item.addEventListener('click', function () { openLightbox(item); });
  });

  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbPrev) lbPrev.addEventListener('click', function () {
    if (lbItems.length) { lbCurrent = (lbCurrent - 1 + lbItems.length) % lbItems.length; renderLightbox(); }
  });
  if (lbNext) lbNext.addEventListener('click', function () {
    if (lbItems.length) { lbCurrent = (lbCurrent + 1) % lbItems.length; renderLightbox(); }
  });
  if (lightbox) lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', function (e) {
    if (!lightbox || !lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft' && lbPrev) lbPrev.click();
    if (e.key === 'ArrowRight' && lbNext) lbNext.click();
  });

  /* ================================================ *
   * 8. Testimonials carousel (infinite circular loop)
   * ================================================ */
  var tCarousel = $('[data-tcarousel]');
  if (tCarousel) {
    var tViewport = $('[data-tviewport]', tCarousel);
    var tTrack    = $('[data-ttrack]', tCarousel);
    var tPrev     = $('[data-tprev]', tCarousel);
    var tNext     = $('[data-tnext]', tCarousel);
    var tTimer    = null;
    var touchX    = null;

    // Clone the slides once so the track can wrap around seamlessly
    // (going off the last slide slides smoothly back onto the first).
    $$('[data-tslide]', tCarousel).forEach(function (s) {
      var clone = s.cloneNode(true);
      clone.classList.remove('is-active');
      clone.setAttribute('aria-hidden', 'true');
      tTrack.appendChild(clone);
    });
    var tSlides = $$('[data-tslide]', tCarousel);
    var tCount  = tSlides.length / 2;
    var tIndex  = 0; // position inside the doubled track

    function tPosition() {
      if (!tSlides.length) return;
      var active = tSlides[tIndex];
      var offset = active.offsetLeft + tTrack.offsetLeft - (tViewport.clientWidth - active.offsetWidth) / 2;
      tTrack.style.transform = 'translateX(' + (-offset) + 'px)';
      tSlides.forEach(function (s, i) {
        s.classList.toggle('is-active', i === tIndex);
        s.setAttribute('aria-hidden', i === tIndex ? 'false' : 'true');
      });
    }

    // After a transition lands on a clone, instantly jump back to the
    // matching real slide (content is identical, so it is invisible).
    function tSnapBack() {
      if (tIndex < tCount) return;
      tTrack.classList.add('is-snapping');
      tIndex -= tCount;
      tPosition();
      void tTrack.offsetWidth;
      tTrack.classList.remove('is-snapping');
    }

    function tGoNext() {
      tIndex = (tIndex + 1) % (tCount * 2);
      tPosition();
      tTrack.addEventListener('transitionend', function (e) {
        if (e.target !== tTrack || e.propertyName !== 'transform') return;
        tSnapBack();
      }, { once: true });
      setTimeout(tSnapBack, 700);
    }

    function tGoPrev() {
      tIndex = (tIndex - 1 + tCount * 2) % (tCount * 2);
      tPosition();
      tTrack.addEventListener('transitionend', function (e) {
        if (e.target !== tTrack || e.propertyName !== 'transform') return;
        tSnapBack();
      }, { once: true });
      setTimeout(tSnapBack, 700);
    }

    function tPlay() {
      tStop();
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      tTimer = setInterval(tGoNext, 5000);
    }
    function tStop() {
      if (tTimer) { clearInterval(tTimer); tTimer = null; }
    }

    if (tPrev) tPrev.addEventListener('click', function () { tGoPrev(); tPlay(); });
    if (tNext) tNext.addEventListener('click', function () { tGoNext(); tPlay(); });

    tCarousel.addEventListener('mouseenter', tStop);
    tCarousel.addEventListener('mouseleave', tPlay);
    tCarousel.addEventListener('focusin', tStop);
    tCarousel.addEventListener('focusout', tPlay);
    tCarousel.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); tGoPrev(); tPlay(); }
      if (e.key === 'ArrowRight') { e.preventDefault(); tGoNext(); tPlay(); }
    });

    tViewport.addEventListener('touchstart', function (e) { touchX = e.touches[0].clientX; tStop(); }, { passive: true });
    tViewport.addEventListener('touchend', function (e) {
      if (touchX === null) return;
      var dx = e.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 40) { (dx < 0 ? tGoNext : tGoPrev)(); tPlay(); }
      touchX = null;
    }, { passive: true });

    var tResize;
    window.addEventListener('resize', function () {
      clearTimeout(tResize);
      tResize = setTimeout(function () { tSnapBack(); tPosition(); }, 150);
    });

    tPosition();
    tPlay();
  }

  /* ================================================ *
   * 9. FAQ accordion
   * ================================================ */
  $$('.faq-item').forEach(function (item) {
    var q = $('.faq-q', item);
    var a = $('.faq-a', item);
    if (!q || !a) return;
    q.addEventListener('click', function () {
      var open = item.classList.contains('open');
      // Close others
      $$('.faq-item.open').forEach(function (other) {
        if (other !== item) {
          other.classList.remove('open');
          $('.faq-a', other).style.maxHeight = null;
          $('.faq-q', other).setAttribute('aria-expanded', 'false');
        }
      });
      item.classList.toggle('open', !open);
      a.style.maxHeight = open ? null : a.scrollHeight + 'px';
      q.setAttribute('aria-expanded', open ? 'false' : 'true');
    });
  });

  /* ================================================ *
   * 10. Button ripple
   * ================================================ */
  $$('.btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      var rect = btn.getBoundingClientRect();
      var ink = document.createElement('span');
      ink.className = 'ink';
      var size = Math.max(rect.width, rect.height);
      ink.style.width = ink.style.height = size + 'px';
      ink.style.left = (e.clientX - rect.left - size / 2) + 'px';
      ink.style.top = (e.clientY - rect.top - size / 2) + 'px';
      btn.appendChild(ink);
      setTimeout(function () { ink.remove(); }, 700);
    });
  });

  /* ================================================ *
   * 11. Active navigation (scrollspy) — same-page anchors
   * ================================================ */
  var pageAnchors = $$('.nav-links a[href^="#"]');
  var sections = pageAnchors
    .map(function (a) { return $(a.getAttribute('href')); })
    .filter(Boolean);

  var spyObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        pageAnchors.forEach(function (a) {
          a.parentElement.classList.remove('active');
          if (a.getAttribute('href') === '#' + entry.target.id) {
            a.parentElement.classList.add('active');
          }
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(function (s) { spyObserver.observe(s); });

  /* ================================================ *
   * 12. Form validation (contact) & newsletter
   * ================================================ */
  var contactForm = $('#contactForm');
  if (contactForm) {
    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    contactForm.addEventListener('submit', function (e) {
      var valid = true;

      var field = function (id) { return $('#' + id); };

      var name = field('name');
      var email = field('email');
      var phone = field('phone');
      var message = field('message');

      function check(input, ok, msg) {
        var parent = input.closest('.field');
        var errorMsg = $('.error-msg', parent);
        parent.classList.toggle('error', !ok);
        if (errorMsg) errorMsg.textContent = ok ? '' : msg;
        if (!ok) valid = false;
        return ok;
      }

      check(name, name.value.trim().length >= 2, 'Please enter the parent / guardian name.');
      check(email, emailRe.test(email.value.trim()), 'Please enter a valid email address.');
      if (phone.value.trim() !== '') {
        check(phone, /^[0-9+\-\s]{9,15}$/.test(phone.value.trim()), 'Please enter a valid phone number.');
      } else {
        check(phone, true, '');
      }
      check(message, message.value.trim().length >= 10, 'Please write a message of at least 10 characters.');

      if (!valid) e.preventDefault();
    });
  }

  var newsletterForm = $('#newsletterForm');
  var newsletterMsg  = $('#newsletterMsg');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = $('#newsletterEmail');
      var val = input.value.trim();
      if (!emailRe.test(val)) {
        newsletterMsg.textContent = 'Please enter a valid email address.';
        newsletterMsg.style.color = '#F2C14E';
        return;
      }
      newsletterMsg.textContent = 'Thank you! You have been subscribed to our newsletter.';
      newsletterMsg.style.color = '#7ED9A0';
      input.value = '';
      setTimeout(function () { newsletterMsg.textContent = ''; }, 5000);
    });
  }
})();
