(function() {
  'use strict';

  // ── DOM Elements ──
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const imageCards = document.querySelectorAll('.gallery-image-card');
  
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCurrent = document.getElementById('lightboxCurrent');
  const lightboxTotal = document.getElementById('lightboxTotal');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');

  // ── State ──
  let activeImages = []; // List of image elements currently visible
  let currentIndex = 0;  // Index in the activeImages array

  // ── Filtering Logic ──
  function filterGallery(category) {
    activeImages = [];
    imageCards.forEach(card => {
      const cardCat = card.dataset.cat;
      if (category === 'all' || cardCat === category) {
        card.style.display = 'block';
        // Fade in animation transition
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        }, 50);
        activeImages.push(card);
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Initialize active images
  filterGallery('all');

  // Bind filter button click handlers
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.dataset.filter;
      filterGallery(filterValue);
    });
  });

  // ── Lightbox Functions ──
  function openLightbox(index) {
    currentIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightboxImage() {
    if (activeImages.length === 0) return;
    const activeCard = activeImages[currentIndex];
    const imgEl = activeCard.querySelector('img');
    if (imgEl) {
      lightboxImg.src = imgEl.src;
      lightboxImg.alt = imgEl.alt;
    }
    lightboxCurrent.textContent = currentIndex + 1;
    lightboxTotal.textContent = activeImages.length;
  }

  // Prev / Next actions
  function prevImage() {
    if (activeImages.length === 0) return;
    currentIndex = (currentIndex - 1 + activeImages.length) % activeImages.length;
    updateLightboxImage();
  }

  function nextImage() {
    if (activeImages.length === 0) return;
    currentIndex = (currentIndex + 1) % activeImages.length;
    updateLightboxImage();
  }

  // Bind click handlers to image cards for lightbox
  imageCards.forEach(card => {
    card.addEventListener('click', () => {
      const index = activeImages.indexOf(card);
      if (index !== -1) {
        openLightbox(index);
      }
    });
  });

  // Lightbox Event Listeners
  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', prevImage);
  if (lightboxNext) lightboxNext.addEventListener('click', nextImage);

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
        closeLightbox();
      }
    });
  }

  // Keyboard Controls
  document.addEventListener('keydown', (e) => {
    if (lightbox && lightbox.classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    }
  });

  // Touch Swipe Support for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  if (lightbox) {
    lightbox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextImage(); // Swipe left = next
      } else {
        prevImage(); // Swipe right = prev
      }
    }
  }

})();
