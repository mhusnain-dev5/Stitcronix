/* ============================================================
   STITCHRONIX APPAREL  script.js
   ============================================================ */

/* ── Custom Cursor ── */
(function () {
  const cursor = document.getElementById('customCursor');
  const cursorDot = document.getElementById('customCursorDot');
  if (!cursor || !cursorDot) return;

  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursorDot.style.left = e.clientX + 'px';
      cursorDot.style.top = e.clientY + 'px';
    });

    const updateInteractives = () => {
      const targets = document.querySelectorAll('a, button, select, input, textarea, .product-card, .service-card, .category-card, .step, .gallery-image-card, .social-btn');
      targets.forEach(el => {
        if (el.dataset.cursorBound) return;
        el.dataset.cursorBound = "true";
        el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
      });
    };

    updateInteractives();
    const obs = new MutationObserver(updateInteractives);
    obs.observe(document.body, { childList: true, subtree: true });
  }
})();

/* ── Ticker  seamless infinite scroll (requestAnimationFrame) ── */
(function () {
  const track = document.querySelector('.ticker-track');
  if (!track) return;
  const items = track.querySelectorAll('.ticker-item');
  if (items.length < 2) return;

  /* We have 4 identical copies. Measure distance for 2 copies
     (from item 0 to item at the halfway mark) for a seamless loop. */
  const halfIndex = Math.floor(items.length / 2);
  const distance = items[halfIndex].offsetLeft - items[0].offsetLeft;
  if (distance <= 0) return;

  const speed = 1;          /* pixels per frame (~60 px/s at 60 fps) */
  let pos = 0;
  let paused = false;

  track.addEventListener('mouseenter', function () { paused = true; });
  track.addEventListener('mouseleave', function () { paused = false; });

  function tick() {
    if (!paused) {
      pos = (pos + speed) % distance;
      track.style.transform = 'translateX(-' + pos + 'px)';
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();

/* ── Navbar scroll behaviour ── */
const navbar = document.getElementById('navbar');
const btt = document.getElementById('btt');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 60);
  btt.classList.toggle('show', y > 400);
});

/* ── Mobile menu ── */
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ── Active nav link on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');

function setActiveNav() {
  const scrollY = window.scrollY + 120;
  sections.forEach(sec => {
    if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${sec.id}`);
      });
    }
  });
}
window.addEventListener('scroll', setActiveNav);

/* ── Reveal on scroll (Intersection Observer) ── */
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const delay = e.target.dataset.delay || 0;
      setTimeout(() => e.target.classList.add('visible'), delay);
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObs.observe(el));

/* ── Counter animation ── */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const update = () => {
    current = Math.min(current + step, target);
    el.textContent = Math.round(current) + suffix;
    if (current < target) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      animateCounter(e.target);
      counterObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => counterObs.observe(el));

/* ── Back to top ── */
btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── Smooth scroll for anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
  });
});

/* ── Quote form submit  EmailJS ── */
const form = document.getElementById('quoteForm');
const success = document.getElementById('formSuccess');
const errorMsg = document.getElementById('formError');

// EmailJS configuration  replace these with your actual IDs
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // e.g. "template_xyz789"

/* ── Multi-step form navigation ── */
const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const progressBar = document.getElementById('progressBar');
const ind1 = document.getElementById('ind-1');
const ind2 = document.getElementById('ind-2');

function showStep(stepNum) {
  if (stepNum === 1) {
    step1.classList.add('active');
    step2.classList.remove('active');
    progressBar.style.width = '50%';
    ind1.classList.add('active');
    ind2.classList.remove('active');
  } else {
    step1.classList.remove('active');
    step2.classList.add('active');
    progressBar.style.width = '100%';
    ind1.classList.add('active');
    ind2.classList.add('active');
  }
}

// Basic field validation check for Step 1
function isStep1Valid() {
  const name = form.fname.value.trim();
  const email = form.femail.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name) {
    form.fname.reportValidity();
    return false;
  }
  if (!email || !emailRegex.test(email)) {
    form.femail.reportValidity();
    return false;
  }
  return true;
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    if (isStep1Valid()) {
      showStep(2);
    }
  });
}

if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    showStep(1);
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();

  // Validate Step 1 first
  if (!isStep1Valid()) {
    showStep(1);
    return;
  }

  // Validate Step 2 next
  const product = form.fproduct.value;
  if (!product) {
    form.fproduct.reportValidity();
    errorMsg.style.display = 'block';
    errorMsg.innerHTML = '&#10060; &nbsp;Please select a Product Type.';
    return;
  }

  const btn = form.querySelector('.form-submit');
  const originalText = btn.textContent;

  success.style.display = 'none';
  errorMsg.style.display = 'none';

  btn.textContent = 'Sending…';
  btn.disabled = true;

  const formData = {
    name: form.fname.value.trim(),
    email: form.femail.value.trim(),
    phone: form.fphone.value.trim(),
    country: form.fcountry.value.trim(),
    product: form.fproduct.value,
    quantity: form.fqty.value,
    fabric: form.ffabric.value.trim(),
    logo: form.flogo.value,
    message: form.fmsg.value.trim(),
    to_email: "mamoonahmad799@gmail.com"
  };

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData)
    .then(() => {
      form.reset();
      showStep(1); // Reset back to step 1
      success.style.display = 'block';
      btn.textContent = 'Sent Successfully ✓';
      setTimeout(() => {
        success.style.display = 'none';
        btn.textContent = originalText;
        btn.disabled = false;
      }, 5000);
    })
    .catch(err => {
      console.error('EmailJS error:', err);
      errorMsg.style.display = 'block';
      errorMsg.innerHTML = '&#10060; &nbsp;Something went wrong. Please try again or email us directly at <strong>mamoonahmad799@gmail.com</strong>';
      btn.textContent = originalText;
      btn.disabled = false;
    });
});

/* ── Staggered card delays ── */
document.querySelectorAll('.products-grid .product-card').forEach((card, i) => {
  card.dataset.delay = i * 80;
  card.classList.add('reveal');
});

document.querySelectorAll('.timeline-item').forEach((item, i) => {
  item.dataset.delay = i * 100;
  item.classList.add('reveal');
});

document.querySelectorAll('.why-bento .why-card').forEach((card, i) => {
  card.dataset.delay = i * 80;
  card.classList.add('reveal');
});

/* Re-observe after adding classes (must call after DOM is ready) */
document.querySelectorAll('.products-grid .product-card, .timeline-item, .why-bento .why-card').forEach(el => {
  revealObs.observe(el);
});

/* ── Services tab navigation ── */
const serviceTabs = document.querySelectorAll('.service-tab-btn');
const servicePanels = document.querySelectorAll('.service-panel');

serviceTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    serviceTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const target = tab.dataset.tab;
    servicePanels.forEach(p => {
      p.classList.toggle('active', p.id === `panel-${target}`);
    });
  });
});

// Auto-select product type in contact form when starting an inquiry from services
const productSelect = document.getElementById('fproduct');
document.querySelectorAll('.panel-cta-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedService = btn.dataset.serviceSelect;
    if (productSelect && selectedService) {
      productSelect.value = selectedService;
    }
  });
});
