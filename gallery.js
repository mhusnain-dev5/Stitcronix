/* ============================================================
   STITCHRONIX GALLERY — Category Modal & Lightbox
   ============================================================
   HOW TO ADD IMAGES (NO CODE CHANGES NEEDED):

   1. Place your images inside the appropriate category folder:
      gallery/polo-shirts/
      gallery/t-shirts/
      gallery/hoodies/
      gallery/tracksuits/
      gallery/sportswear/
      gallery/gym-wear/
      gallery/custom-apparel/

   2. Add the image filenames to the GALLERY_IMAGES object below.
      Example:
      't-shirts': ['img1.jpg', 'img2.jpg', 'img3.jpg']

   3. That's it! The gallery automatically displays all images
      listed for each category.

   Supported image formats: .jpg, .jpeg, .png, .webp
   ============================================================ */


(function() {
  'use strict';

  // ── Configuration ──
  // Base path where gallery folders are located (relative to index.html)
  const GALLERY_BASE = 'gallery';

  // ── IMAGE LISTS — Add your image filenames here ──
  // Just add filenames to each category array. No other code changes needed.
  const GALLERY_IMAGES = {
    'polo-shirts': [
      // Add polo shirt image filenames here, e.g.: 'polo1.jpg', 'polo2.jpg'
    ],
    't-shirts': [
      't01.jpg',
      't02.jpg',
      't03.jpg',
      't04.jpg'
    ],
    'hoodies': [
      // Add hoodie image filenames here
    ],
    'tracksuits': [
      // Add tracksuit image filenames here
    ],
    'sportswear': [
      // Add sportswear image filenames here
    ],
    'gym-wear': [
      // Add gym wear image filenames here
    ],
    'custom-apparel': [
      // Add custom apparel image filenames here
    ]
  };

  // Category display names (used in modal title)
  const CATEGORY_NAMES = {
    'polo-shirts': 'Polo Shirts',
    't-shirts': 'T-Shirts',
    'hoodies': 'Hoodies',
    'tracksuits': 'Tracksuits',
    'sportswear': 'Sportswear',
    'gym-wear': 'Gym Wear',
    'custom-apparel': 'Custom Apparel'
  };


  // ── DOM Elements ──
  const modal = document.getElementById('galleryModal');
  const modalTitle = document.getElementById('galleryModalTitle');
  const modalGrid = document.getElementById('galleryModalGrid');
  const modalEmpty = document.getElementById('galleryModalEmpty');
  const modalClose = document.querySelector('.gallery-modal-close');

  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCurrent = document.getElementById('lightboxCurrent');
  const lightboxTotal = document.getElementById('lightboxTotal');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');

  // ── State ──
  let currentImages = [];
  let currentIndex = 0;


  // ── Category Card Click Handlers ──
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const category = card.dataset.category;
      openCategoryGallery(category);
    });
  });


  // ── Open Category Gallery ──
  function openCategoryGallery(category) {
    const categoryName = CATEGORY_NAMES[category] || category;
    modalTitle.textContent = categoryName + ' Collection';

    // Get images from the GALLERY_IMAGES configuration
    const images = GALLERY_IMAGES[category] || [];

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (images.length === 0) {
      showEmptyState();
      return;
    }

    // Store images for lightbox navigation
    currentImages = images.map(img => `${GALLERY_BASE}/${category}/${img}`);
    currentIndex = 0;

    // Render image cards
    renderGalleryImages();
  }


  // ── Render Gallery Images ──
  function renderGalleryImages() {
    modalGrid.innerHTML = '';
    modalEmpty.style.display = 'none';

    currentImages.forEach((imgSrc, index) => {
      const card = document.createElement('div');
      card.className = 'gallery-image-card';
      card.innerHTML = `<img src="${imgSrc}" alt="Gallery image ${index + 1}" loading="lazy" />`;

      // Open lightbox on click
      card.addEventListener('click', () => {
        openLightbox(index);
      });

      modalGrid.appendChild(card);
    });
  }


  // ── Show Empty State ──
  function showEmptyState() {
    modalGrid.innerHTML = '';
    modalEmpty.style.display = 'block';
  }


  // ── Close Modal ──
  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    modalGrid.innerHTML = '';
    currentImages = [];
  }

  modalClose.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
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
    // Keep modal open, restore body scroll only if modal is also closed
    if (!modal.classList.contains('active')) {
      document.body.style.overflow = '';
    }
  }

  function updateLightboxImage() {
    lightboxImg.src = currentImages[currentIndex];
    lightboxCurrent.textContent = currentIndex + 1;
    lightboxTotal.textContent = currentImages.length;
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateLightboxImage();
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateLightboxImage();
  }


  // ── Lightbox Event Listeners ──
  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', prevImage);
  lightboxNext.addEventListener('click', nextImage);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });


  // ── Keyboard Navigation ──
  document.addEventListener('keydown', (e) => {
    // Lightbox controls
    if (lightbox.classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
      return;
    }

    // Modal controls
    if (modal.classList.contains('active')) {
      if (e.key === 'Escape') closeModal();
    }
  });


  // ── Touch/Swipe Support for Lightbox (Mobile) ──
  let touchStartX = 0;
  let touchEndX = 0;

  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

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
