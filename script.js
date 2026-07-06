/* ============================================================
   STITCHRONIX APPAREL — script.js
   ============================================================ */

/* ── Ticker — seamless infinite scroll (requestAnimationFrame) ── */
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
const btt    = document.getElementById('btt');

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navbar.classList.toggle('scrolled', y > 60);
  btt.classList.toggle('show', y > 400);
});

/* ── Mobile menu ── */
const hamburger  = document.querySelector('.hamburger');
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
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a, .mobile-menu a');

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

/* ── Quote form submit — EmailJS ── */
const form        = document.getElementById('quoteForm');
const success     = document.getElementById('formSuccess');
const errorMsg    = document.getElementById('formError');

// EmailJS configuration — replace these with your actual IDs
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // e.g. "template_xyz789"

form.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('.form-submit');
  const originalText = btn.textContent;

  // Hide previous messages
  success.style.display  = 'none';
  errorMsg.style.display = 'none';

  btn.textContent = 'Sending…';
  btn.disabled    = true;

  // Gather form data
  const formData = {
    name:     form.fname.value.trim(),
    email:    form.femail.value.trim(),
    phone:    form.fphone.value.trim(),
    country:  form.fcountry.value.trim(),
    product:  form.fproduct.value,
    quantity: form.fqty.value,
    fabric:   form.ffabric.value.trim(),
    logo:     form.flogo.value,
    message:  form.fmsg.value.trim(),
    to_email: "mamoonahmad799@gmail.com"
  };

  // Basic required-field validation
  if (!formData.name || !formData.email || !formData.product) {
    errorMsg.style.display = 'block';
    errorMsg.innerHTML     = '&#10060; &nbsp;Please fill in all required fields (Name, Email, Product Type).';
    btn.textContent = originalText;
    btn.disabled    = false;
    return;
  }

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData)
    .then(() => {
      form.reset();
      success.style.display = 'block';
      btn.textContent = 'Sent Successfully ✓';
      setTimeout(() => {
        success.style.display = 'none';
        btn.textContent = originalText;
        btn.disabled    = false;
      }, 5000);
    })
    .catch(err => {
      console.error('EmailJS error:', err);
      errorMsg.style.display = 'block';
      errorMsg.innerHTML     = '&#10060; &nbsp;Something went wrong. Please try again or email us directly at <strong>mamoonahmad799@gmail.com</strong>';
      btn.textContent = originalText;
      btn.disabled    = false;
    });
});

/* ── Staggered card delays ── */
document.querySelectorAll('.products-grid .product-card').forEach((card, i) => {
  card.dataset.delay = i * 80;
  card.classList.add('reveal');
});

document.querySelectorAll('.services-grid .service-card').forEach((card, i) => {
  card.dataset.delay = i * 100;
  card.classList.add('reveal');
});

document.querySelectorAll('.process-steps .step').forEach((step, i) => {
  step.dataset.delay = i * 120;
  step.classList.add('reveal');
});

/* Re-observe after adding classes (must call after DOM is ready) */
document.querySelectorAll('.products-grid .product-card, .services-grid .service-card, .process-steps .step').forEach(el => {
  revealObs.observe(el);
});
