/* ============================================================
   STITCHRONIX — MANUFACTURING PORTFOLIO
   Capability-based apparel catalog (flat category filter)
   ------------------------------------------------------------
   Products are matched to the actual garment in each image.
   Filters are derived from the categories that really exist,
   so no filter is ever empty and no card is a placeholder.
   ============================================================ */

(function () {
  'use strict';

  const labelPack = ['Woven Label', 'Printed Neck Tag', 'Heat-Transfer Label', 'Custom Size Tab', 'Hem Flag'];

  /* Full product-category list (order preserved).
     Any category with zero products is hidden automatically. */
  const CATEGORY_ORDER = [
    { slug: 'hoodies',     label: 'Hoodies' },
    { slug: 'tshirts',     label: 'T-Shirts' },
    { slug: 'polo',        label: 'Polo Shirts' },
    { slug: 'sweatshirts', label: 'Sweatshirts' },
    { slug: 'tracksuits',  label: 'Tracksuits' },
    { slug: 'sportswear',  label: 'Sportswear' },
    { slug: 'shorts',      label: 'Shorts' },
    { slug: 'trousers',    label: 'Trousers' },
    { slug: 'jackets',     label: 'Jackets' },
    { slug: 'knitwear',    label: 'Knitwear' },
  ];
  /* Singular badge label per slug */
  const BADGE = {
    hoodies: 'Hoodie', tshirts: 'T-Shirt', polo: 'Polo Shirt',
    sweatshirts: 'Sweatshirt', tracksuits: 'Tracksuit', sportswear: 'Sportswear',
    shorts: 'Shorts', trousers: 'Trousers', jackets: 'Jacket', knitwear: 'Knitwear',
  };

  /* ────────────────────────────────────────────────────────────
     PRODUCTS — each matched to the real garment in its image
  ──────────────────────────────────────────────────────────── */
  const PRODUCTS = [
    {
      id: 1, name: 'Essential Pullover Hoodie', cats: ['hoodies'], image: 'images/img-01.jpeg',
      fabric: '340 GSM Cotton Fleece', gsm: 340,
      specs: ['340 GSM Cotton Fleece', 'Drawcord Hood · Kangaroo Pocket', 'Ribbed Cuffs & Hem', 'Screen / DTF Logo Printing'],
      colors: ['#5b7194', '#1a1a1a', '#f5f5f5', '#1e3d20'],
      colorNames: ['Dusty Blue', 'Black', 'White', 'Forest'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · ODM · Private Label', isNew: false, isBestseller: true,
      description: 'A clean-lined pullover hoodie in 340 GSM brushed-back cotton fleece. Drawcord hood, kangaroo pocket and ribbed trims, finished with double-needle stitching for durable, repeatable production runs.',
      printingOptions: ['Screen Print', 'DTF Print', 'Puff Print', 'Sublimation'],
      embroideryOptions: ['Chest Logo', 'Sleeve Badge', 'Hood Interior'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Flat-Pack Box', 'Hanger Pack'],
      leadTime: '3–4 Weeks', exportCountries: 'USA · UK · Germany · France · Australia',
    },
    {
      id: 2, name: 'Boxy Graphic Sweatshirt', cats: ['sweatshirts'], image: 'images/img-02.jpeg',
      fabric: '320 GSM Loopback Cotton', gsm: 320,
      specs: ['320 GSM Loopback Cotton', 'Oversized Crew Neck', 'Ribbed Neck · Cuffs · Hem', 'Silicone Box Print'],
      colors: ['#f2efe9', '#1a1a1a', '#2c2c2c', '#c9b99a'],
      colorNames: ['Off-White', 'Black', 'Charcoal', 'Caramel'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · ODM · Private Label', isNew: false, isBestseller: false,
      description: 'Oversized crewneck sweatshirt in 320 GSM loopback cotton with a dropped shoulder and a placed silicone box print. A dependable blank for streetwear and premium-basics labels.',
      printingOptions: ['Screen Print', 'Silicone Print', 'DTF Print'],
      embroideryOptions: ['Chest Logo', 'Sleeve Text'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Flat-Pack Box'],
      leadTime: '3–4 Weeks', exportCountries: 'USA · UK · Netherlands · UAE',
    },
    {
      id: 3, name: 'Lightweight Terry Hoodie', cats: ['hoodies'], image: 'images/img-03.jpeg',
      fabric: '260 GSM Cotton Terry', gsm: 260,
      specs: ['260 GSM Cotton Terry', 'Slim Drawcord Hood', 'Kangaroo Pocket', 'Tonal Chest Embroidery'],
      colors: ['#4a4a4a', '#1a1a1a', '#2c3539', '#8b7355'],
      colorNames: ['Charcoal', 'Black', 'Slate', 'Taupe'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · ODM', isNew: false, isBestseller: false,
      description: 'A trans-seasonal hoodie in soft 260 GSM cotton terry with a lean silhouette. Tonal embroidery and clean flat-lock seams make it a refined layering piece for lifestyle brands.',
      printingOptions: ['Screen Print', 'DTF Print'],
      embroideryOptions: ['Chest Logo', 'Sleeve Logo'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Hanger Pack'],
      leadTime: '3–4 Weeks', exportCountries: 'USA · UK · Germany',
    },
    {
      id: 4, name: 'Textured Long-Sleeve Polo', cats: ['polo'], image: 'images/img-04.jpeg',
      fabric: '240 GSM Textured Piqué', gsm: 240,
      specs: ['240 GSM Textured Piqué', 'Two-Button Placket', 'Ribbed Collar & Cuffs', 'Embroidery / Woven Patch'],
      colors: ['#8a5a2b', '#1a1a1a', '#1e3a5f', '#3d3d3d'],
      colorNames: ['Tobacco', 'Black', 'Navy', 'Graphite'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · ODM · Private Label', isNew: true, isBestseller: false,
      description: 'A long-sleeve polo in 240 GSM textured piqué with a two-button placket and ribbed collar. Structured yet soft — ideal for elevated smart-casual and corporate programmes.',
      printingOptions: ['Embroidery', 'Woven Patch'],
      embroideryOptions: ['Left Chest Logo', 'Sleeve Band'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Hanger Pack', 'Box Pack'],
      leadTime: '3–4 Weeks', exportCountries: 'UAE · UK · Germany · Saudi Arabia',
    },
    {
      id: 5, name: 'Ribbed Mock-Neck Knit', cats: ['knitwear'], image: 'images/img-05.jpeg',
      fabric: 'Fine-Gauge Rib Knit', gsm: 260,
      specs: ['Fine-Gauge Rib Knit', 'Mock-Neck Collar', 'Slim Fit', 'Fully Fashioned Trims'],
      colors: ['#1a1a1a', '#3d3d3d', '#4a3f35', '#1e3a5f'],
      colorNames: ['Black', 'Graphite', 'Mocha', 'Navy'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 120,
      manufacturingType: 'OEM · ODM', isNew: false, isBestseller: true,
      description: 'A fine-gauge ribbed mock-neck in a slim, elongating fit. Fully-fashioned trims and a clean set-in sleeve give this knit a premium, tailored hand-feel.',
      printingOptions: ['Heat-Transfer Logo'],
      embroideryOptions: ['Tonal Chest Logo'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Tissue Wrap'],
      leadTime: '4–5 Weeks', exportCountries: 'UK · Germany · Italy · USA',
    },
    {
      id: 6, name: 'Cable-Knit Crew Sweater', cats: ['knitwear'], image: 'images/img-06.jpeg',
      fabric: '7GG Cotton-Acrylic Knit', gsm: 300,
      specs: ['7GG Cotton-Acrylic Knit', 'Vertical Cable Texture', 'Ribbed Crew Neck', 'Rib Hem & Cuffs'],
      colors: ['#6b2020', '#1a1a1a', '#1e3d20', '#2c3539'],
      colorNames: ['Burgundy', 'Black', 'Forest', 'Slate'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 120,
      manufacturingType: 'OEM · ODM · Private Label', isNew: false, isBestseller: false,
      description: 'A 7-gauge crewneck sweater with an all-over vertical cable texture. Balanced weight and structured ribbing make it a standout knit for autumn/winter collections.',
      printingOptions: ['Woven Badge'],
      embroideryOptions: ['Chest Monogram'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Premium Box'],
      leadTime: '4–5 Weeks', exportCountries: 'UK · Germany · France · USA',
    },
    {
      id: 7, name: 'Pointelle Knit Sweater', cats: ['knitwear'], image: 'images/img-07.jpeg',
      fabric: '12GG Pointelle Knit', gsm: 260,
      specs: ['12GG Pointelle Knit', 'Fine Open-Work Texture', 'Ribbed Crew Neck', 'Slim Tailored Fit'],
      colors: ['#c4a882', '#1a1a1a', '#e5dfd3', '#4a3f35'],
      colorNames: ['Camel', 'Black', 'Oatmeal', 'Mocha'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 120,
      manufacturingType: 'OEM · ODM', isNew: true, isBestseller: false,
      description: 'A refined 12-gauge crewneck with a delicate pointelle open-work texture. Lightweight and breathable, engineered for premium trans-seasonal knitwear ranges.',
      printingOptions: ['Woven Badge'],
      embroideryOptions: ['Tonal Chest Logo'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Tissue Wrap'],
      leadTime: '4–5 Weeks', exportCountries: 'UK · Germany · USA · Sweden',
    },
    {
      id: 8, name: 'Heather Pullover Hoodie', cats: ['hoodies'], image: 'images/img-08.jpeg',
      fabric: '300 GSM Melange Fleece', gsm: 300,
      specs: ['300 GSM Melange Fleece', 'Drawcord Hood', 'Kangaroo Pocket', 'Metallic Chest Print'],
      colors: ['#d8c9a8', '#1a1a1a', '#b5c0d0', '#8b7355'],
      colorNames: ['Oatmeal', 'Black', 'Slate Blue', 'Taupe'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · ODM · Private Label', isNew: false, isBestseller: true,
      description: 'A soft melange pullover hoodie in 300 GSM fleece with a natural heather finish. Clean drawcord hood and kangaroo pocket — a wardrobe staple for premium loungewear labels.',
      printingOptions: ['Screen Print', 'DTF Print', 'Metallic Print'],
      embroideryOptions: ['Chest Logo', 'Sleeve Badge'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Flat-Pack Box'],
      leadTime: '3–4 Weeks', exportCountries: 'USA · UK · Germany · Australia',
    },
    {
      id: 9, name: 'Ribbed Crew Sweater', cats: ['knitwear'], image: 'images/img-09.jpeg',
      fabric: '9GG Rib-Texture Knit', gsm: 280,
      specs: ['9GG Rib-Texture Knit', 'Vertical Rib Body', 'Ribbed Crew Neck', 'Rib Hem & Cuffs'],
      colors: ['#c4a882', '#1a1a1a', '#6b2020', '#2c3539'],
      colorNames: ['Camel', 'Black', 'Burgundy', 'Slate'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 120,
      manufacturingType: 'OEM · ODM', isNew: false, isBestseller: false,
      description: 'A 9-gauge crewneck sweater with a clean vertical-rib texture that reads premium at any price point. Consistent gauge and fully-fashioned trims for reliable bulk production.',
      printingOptions: ['Woven Badge'],
      embroideryOptions: ['Chest Monogram'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Premium Box'],
      leadTime: '4–5 Weeks', exportCountries: 'UK · Germany · USA · France',
    },
    {
      id: 10, name: 'Textured Mock-Neck Knit', cats: ['knitwear'], image: 'images/img-10.jpeg',
      fabric: 'Jacquard-Texture Knit', gsm: 270,
      specs: ['Jacquard-Texture Knit', 'Mock-Neck Collar', 'Relaxed Fit', 'Fully Fashioned Trims'],
      colors: ['#efe7d3', '#1a1a1a', '#c4a882', '#b5c0d0'],
      colorNames: ['Ivory', 'Black', 'Camel', 'Slate Blue'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 120,
      manufacturingType: 'OEM · ODM · Private Label', isNew: true, isBestseller: false,
      description: 'A relaxed mock-neck knit with a subtle jacquard surface texture. Refined and versatile — a considered layering piece for elevated men\'s ranges.',
      printingOptions: ['Heat-Transfer Logo'],
      embroideryOptions: ['Tonal Chest Logo'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Tissue Wrap'],
      leadTime: '4–5 Weeks', exportCountries: 'UK · Germany · USA · Denmark',
    },
    {
      id: 11, name: 'Colour-Block Oversized Hoodie', cats: ['hoodies'], image: 'images/img-11.jpeg',
      fabric: '380 GSM French Terry', gsm: 380,
      specs: ['380 GSM French Terry', 'Cut & Sew Colour Panels', 'Embroidered Branding', 'Oversized Drop Shoulder'],
      colors: ['#1a1a1a', '#c9c9c9', '#5b7194', '#6b2020'],
      colorNames: ['Black / Grey', 'Stone', 'Blue', 'Burgundy'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'], moq: 100,
      manufacturingType: 'OEM · ODM · Private Label', isNew: false, isBestseller: true,
      description: 'A heavyweight 380 GSM French Terry hoodie built with cut-and-sew colour panels and embroidered branding. A statement streetwear block that showcases full custom capability.',
      printingOptions: ['Screen Print', 'DTF Print', 'Puff Print'],
      embroideryOptions: ['Chest Logo', 'Back Panel', 'Sleeve Wordmark'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Flat-Pack Box', 'Custom Box'],
      leadTime: '4–5 Weeks', exportCountries: 'USA · UK · Germany · Netherlands',
    },
    {
      id: 12, name: 'Utility Cargo Trousers', cats: ['trousers'], image: 'images/img-12.jpeg',
      fabric: '240 GSM Ripstop', gsm: 240,
      specs: ['240 GSM Ripstop', 'Flap Cargo Pockets', 'Drawcord Waistband', 'Bar-Tacked Stress Points'],
      colors: ['#4b5320', '#1a1a1a', '#3d3d3d', '#8b7355'],
      colorNames: ['Olive', 'Black', 'Graphite', 'Taupe'],
      sizes: ['28', '30', '32', '34', '36', '38'], moq: 150,
      manufacturingType: 'OEM · ODM', isNew: false, isBestseller: false,
      description: 'Relaxed cargo trousers in durable 240 GSM ripstop with flap side pockets and a drawcord waistband. Bar-tacked stress points ensure hard-wearing, export-grade construction.',
      printingOptions: ['Heat-Transfer Branding'],
      embroideryOptions: ['Cargo Pocket Logo'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Hanger Pack'],
      leadTime: '4–5 Weeks', exportCountries: 'UK · Germany · USA · UAE',
    },
    {
      id: 13, name: 'Relaxed Pull-On Trousers', cats: ['trousers'], image: 'images/img-13.jpeg',
      fabric: '260 GSM Cotton Twill', gsm: 260,
      specs: ['260 GSM Cotton Twill', 'Elasticated Pull-On Waist', 'Front Pintuck Crease', 'Tapered Leg'],
      colors: ['#e5dfd3', '#1a1a1a', '#8b7355', '#2c3539'],
      colorNames: ['Stone', 'Black', 'Taupe', 'Slate'],
      sizes: ['28', '30', '32', '34', '36', '38'], moq: 150,
      manufacturingType: 'OEM · ODM · Private Label', isNew: true, isBestseller: false,
      description: 'Smart pull-on trousers in 260 GSM cotton twill with an elasticated waist and pressed pintuck crease. A comfort-tailored silhouette for modern smart-casual ranges.',
      printingOptions: ['Heat-Transfer Branding'],
      embroideryOptions: ['Back Pocket Logo'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Hanger Pack'],
      leadTime: '4–5 Weeks', exportCountries: 'UK · Germany · France · USA',
    },
    {
      id: 14, name: 'Colour-Block Raglan Sweatshirt', cats: ['sweatshirts'], image: 'images/img-14.jpeg',
      fabric: '340 GSM Brushed Fleece', gsm: 340,
      specs: ['340 GSM Brushed Fleece', 'Contrast Raglan Panels', 'Ribbed Neck · Cuffs · Hem', 'Cut & Sew Construction'],
      colors: ['#232a63', '#1a1a1a', '#6b2020', '#1e3d20'],
      colorNames: ['Navy', 'Black', 'Burgundy', 'Forest'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · ODM · Private Label', isNew: false, isBestseller: false,
      description: 'A crewneck sweatshirt in 340 GSM brushed fleece with contrast raglan sleeve panels. Cut-and-sew paneling demonstrates precise colour-blocking capability for sports and streetwear brands.',
      printingOptions: ['Screen Print', 'DTF Print'],
      embroideryOptions: ['Chest Logo', 'Sleeve Panel'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Flat-Pack Box'],
      leadTime: '3–4 Weeks', exportCountries: 'USA · UK · Germany · Australia',
    },
  ];

  /* Capability flags for each product */
  PRODUCTS.forEach(p => {
    const mt = p.manufacturingType.toLowerCase();
    p.oem = mt.includes('oem');
    p.odm = mt.includes('odm');
    p.privateLabel = mt.includes('private label');
    p.badge = BADGE[p.cats[0]] || p.cats[0];
  });

  /* Only show filters for categories that actually have products */
  const CATEGORIES = [{ slug: 'all', label: 'All Products' }].concat(
    CATEGORY_ORDER.filter(c => PRODUCTS.some(p => p.cats.includes(c.slug)))
  );

  /* ────────────────────────────────────────────────────────────
     STATE
  ──────────────────────────────────────────────────────────── */
  const state = { category: 'all', filtered: [], modalIndex: 0, lbIndex: 0, zoom: 1, panX: 0, panY: 0 };
  const PAGE_SIZE = 12;
  let shownCount = PAGE_SIZE;

  const $ = id => document.getElementById(id);

  const filtersRow  = $('galleryFilters');
  const grid        = $('galleryGrid');
  const emptyState  = $('galleryEmpty');
  const emptyReset  = $('emptyResetBtn');
  const countEl     = $('resultsCount');
  const viewMoreWrap= $('galleryViewMore');
  const viewMoreBtn = $('viewMoreBtn');

  const modalOverlay = $('productModalOverlay');
  const modalPanel   = $('productModal');
  const modalClose   = $('modalClose');
  const modalPrev    = $('modalPrev');
  const modalNext    = $('modalNext');

  const lb          = $('galleryLightbox');
  const lbImg       = $('lightboxImg');
  const lbStage     = $('lbStage');
  const lbCounter   = $('lbCounter');
  const lbName      = $('lbName');
  const lbCat       = $('lbCat');
  const lbDesc      = $('lbDesc');
  const lbPrev      = $('lbPrev');
  const lbNext      = $('lbNext');
  const lbClose     = $('lbClose');
  const lbZoomIn    = $('lbZoomIn');
  const lbZoomOut   = $('lbZoomOut');
  const lbFit       = $('lbFit');
  const lbFullscreen= $('lbFullscreen');

  /* ────────────────────────────────────────────────────────────
     FILTERING
  ──────────────────────────────────────────────────────────── */
  function getFiltered() {
    if (state.category === 'all') return PRODUCTS.slice();
    return PRODUCTS.filter(p => p.cats.includes(state.category));
  }
  function countFor(slug) {
    return slug === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => p.cats.includes(slug)).length;
  }

  /* ────────────────────────────────────────────────────────────
     FILTER BAR
  ──────────────────────────────────────────────────────────── */
  function renderFilters() {
    filtersRow.innerHTML = '';
    CATEGORIES.forEach(c => {
      const btn = document.createElement('button');
      btn.className = 'gx-filter' + (state.category === c.slug ? ' active' : '');
      btn.dataset.slug = c.slug;
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', state.category === c.slug ? 'true' : 'false');
      btn.innerHTML = `${c.label}<span class="gx-filter-count">${countFor(c.slug)}</span>`;
      btn.addEventListener('click', () => selectCategory(c.slug));
      filtersRow.appendChild(btn);
    });
  }
  function selectCategory(slug) {
    if (state.category === slug) return;
    state.category = slug;
    shownCount = PAGE_SIZE;
    filtersRow.querySelectorAll('.gx-filter').forEach(b => {
      const on = b.dataset.slug === slug;
      b.classList.toggle('active', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    renderGallery();
  }

  /* ────────────────────────────────────────────────────────────
     GRID
  ──────────────────────────────────────────────────────────── */
  function renderGallery() {
    const filtered = getFiltered();
    state.filtered = filtered;
    const visible = filtered.slice(0, shownCount);

    if (countEl) countEl.innerHTML = `<strong>${filtered.length}</strong> ${filtered.length === 1 ? 'product' : 'products'}`;

    grid.innerHTML = '';
    if (filtered.length === 0) {
      emptyState.removeAttribute('hidden');
      grid.setAttribute('hidden', '');
      viewMoreWrap.classList.remove('visible');
      return;
    }
    emptyState.setAttribute('hidden', '');
    grid.removeAttribute('hidden');

    visible.forEach((p, i) => grid.appendChild(createCard(p, i)));

    viewMoreWrap.classList.toggle('visible', filtered.length > shownCount);
    if (viewMoreBtn) viewMoreBtn.textContent = `Load More (${filtered.length - shownCount})`;
  }

  /* ────────────────────────────────────────────────────────────
     PRODUCT CARD
  ──────────────────────────────────────────────────────────── */
  function createCard(p, index) {
    const card = document.createElement('article');
    card.className = 'gx-card';
    card.style.setProperty('--d', `${Math.min(index, 11) * 45}ms`);

    const badge = p.isNew
      ? '<span class="gx-badge gx-badge--new">New</span>'
      : p.isBestseller
      ? '<span class="gx-badge gx-badge--best">Bestseller</span>'
      : '';

    const oem = [];
    if (p.oem) oem.push('OEM');
    if (p.odm) oem.push('ODM');
    if (p.privateLabel) oem.push('Private Label');

    card.innerHTML = `
      <div class="gx-card-media" data-act="lightbox" data-id="${p.id}" role="button" tabindex="0"
           aria-label="View image of ${p.name}">
        <div class="gx-skeleton"></div>
        ${badge}
        <img src="${p.image}" alt="${p.name} — ${p.badge} manufactured by Stitchronix"
             loading="lazy" decoding="async" width="600" height="750" />
        <div class="gx-card-hover" aria-hidden="true">
          <span class="gx-view-image">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
            View Image
          </span>
          <button class="gx-quick-view" data-act="modal" data-id="${p.id}">Quick View</button>
        </div>
      </div>
      <div class="gx-card-body">
        <span class="gx-card-badge">${p.badge}</span>
        <h3 class="gx-card-name">${p.name}</h3>
        <ul class="gx-card-specs">
          ${p.specs.slice(0, 3).map(s => `<li>${s}</li>`).join('')}
        </ul>
        <div class="gx-card-oem">
          ${oem.map(o => `<span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>${o}</span>`).join('')}
        </div>
      </div>
    `;

    const media = card.querySelector('.gx-card-media');
    const img = card.querySelector('img');
    const markLoaded = () => media.classList.add('is-loaded');
    if (img.complete) markLoaded();
    else { img.addEventListener('load', markLoaded); img.addEventListener('error', markLoaded); }

    card.addEventListener('click', (e) => {
      const actEl = e.target.closest('[data-act]');
      const act = actEl ? actEl.dataset.act : 'lightbox';
      if (act === 'modal') { e.stopPropagation(); openModal(p); }
      else openLightbox(state.filtered.findIndex(x => x.id === p.id));
    });
    media.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(state.filtered.findIndex(x => x.id === p.id)); }
    });
    return card;
  }

  /* ────────────────────────────────────────────────────────────
     PRODUCT MODAL (Quick View)
  ──────────────────────────────────────────────────────────── */
  let lastFocused = null;

  function openModal(p) {
    if (!modalOverlay) return;
    lastFocused = document.activeElement;
    state.modalIndex = state.filtered.findIndex(x => x.id === p.id);
    if (state.modalIndex < 0) { state.filtered = getFiltered(); state.modalIndex = state.filtered.findIndex(x => x.id === p.id); }
    populateModal(p);
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => modalClose && modalClose.focus(), 60);
  }
  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }
  function navModal(dir) {
    if (!state.filtered.length) return;
    state.modalIndex = (state.modalIndex + dir + state.filtered.length) % state.filtered.length;
    populateModal(state.filtered[state.modalIndex]);
    const body = modalPanel.querySelector('.gx-modal-body');
    if (body) body.scrollTop = 0;
  }
  function chipList(arr, empty) {
    if (!arr || !arr.length) return `<span class="gx-tag gx-tag--muted">${empty}</span>`;
    return arr.map(o => `<span class="gx-tag">${o}</span>`).join('');
  }
  function populateModal(p) {
    $('modalImg').src = p.image;
    $('modalImg').alt = `${p.name} — ${p.badge}`;
    $('modalEyebrow').textContent = p.badge;
    $('modalName').textContent = p.name;
    $('modalDesc').textContent = p.description;
    $('modalCounter').textContent = `${state.modalIndex + 1} / ${state.filtered.length}`;

    $('modalSpecs').innerHTML = [
      ['Fabric', p.fabric],
      ['Weight', `${p.gsm} GSM`],
      ['MOQ', `${p.moq} pcs`],
      ['Lead Time', p.leadTime],
      ['Manufacturing', p.manufacturingType],
      ['Export Markets', p.exportCountries],
    ].map(([k, v]) => `<div class="gx-spec"><span class="gx-spec-k">${k}</span><span class="gx-spec-v">${v}</span></div>`).join('');

    const caps = [];
    if (p.oem) caps.push('OEM');
    if (p.odm) caps.push('ODM');
    if (p.privateLabel) caps.push('Private Label');
    caps.push('Export Ready');
    $('modalCaps').innerHTML = caps.map(c => `<span class="gx-cap gx-cap--lg">${c}</span>`).join('');

    const colorsEl = $('modalColors');
    colorsEl.innerHTML = p.colors.map((c, i) =>
      `<button class="gx-color${i === 0 ? ' selected' : ''}" style="background:${c}" title="${p.colorNames[i]}" aria-label="${p.colorNames[i]}" data-name="${p.colorNames[i]}"></button>`
    ).join('') + `<span class="gx-color-name" id="modalColorName">${p.colorNames[0]}</span>`;
    colorsEl.querySelectorAll('.gx-color').forEach(sw => {
      sw.addEventListener('click', () => {
        colorsEl.querySelectorAll('.gx-color').forEach(s => s.classList.remove('selected'));
        sw.classList.add('selected');
        $('modalColorName').textContent = sw.dataset.name;
      });
    });

    $('modalSizes').innerHTML = p.sizes.map((s, i) => `<button class="gx-size${i === 0 ? ' active' : ''}">${s}</button>`).join('');
    $('modalSizes').querySelectorAll('.gx-size').forEach(chip => {
      chip.addEventListener('click', () => {
        $('modalSizes').querySelectorAll('.gx-size').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
      });
    });

    $('modalPrinting').innerHTML   = chipList(p.printingOptions, 'On request');
    $('modalEmbroidery').innerHTML = chipList(p.embroideryOptions, 'Not applicable');
    $('modalLabels').innerHTML     = chipList(p.labelOptions, 'Standard woven label');
    $('modalPackaging').innerHTML  = chipList(p.packagingOptions, 'Poly bag');

    $('modalZoomBtn').onclick = () => { const idx = state.filtered.findIndex(x => x.id === p.id); closeModal(); openLightbox(idx >= 0 ? idx : 0); };
    $('modalQuoteBtn').onclick = () => { closeModal(); scrollToQuote(p.name); };
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalPrev)  modalPrev.addEventListener('click', () => navModal(-1));
  if (modalNext)  modalNext.addEventListener('click', () => navModal(1));
  if (modalOverlay) modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });

  /* ────────────────────────────────────────────────────────────
     LIGHTBOX + ZOOM VIEWER
  ──────────────────────────────────────────────────────────── */
  function openLightbox(index) {
    if (!lb) return;
    lastFocused = document.activeElement;
    state.lbIndex = index < 0 ? 0 : index;
    resetZoom();
    updateLightbox(true);
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => lbClose && lbClose.focus(), 60);
  }
  function closeLightbox() {
    if (!lb) return;
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    lb.classList.remove('active');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }
  function navLightbox(dir) {
    const list = state.filtered;
    if (!list.length) return;
    state.lbIndex = (state.lbIndex + dir + list.length) % list.length;
    resetZoom();
    updateLightbox(false);
  }
  function updateLightbox(instant) {
    const p = state.filtered[state.lbIndex];
    if (!p || !lbImg) return;
    const apply = () => { lbImg.src = p.image; lbImg.alt = p.name; };
    if (instant) apply();
    else { lbImg.classList.add('fading'); setTimeout(() => { apply(); lbImg.classList.remove('fading'); }, 140); }
    if (lbName) lbName.textContent = p.name;
    if (lbCat) lbCat.textContent = p.badge;
    if (lbDesc) lbDesc.textContent = p.description;
    if (lbCounter) lbCounter.textContent = `${state.lbIndex + 1} / ${state.filtered.length}`;
    applyZoom();
  }
  function resetZoom() { state.zoom = 1; state.panX = 0; state.panY = 0; }
  function applyZoom() {
    if (!lbImg) return;
    lbImg.style.transform = `translate(${state.panX}px, ${state.panY}px) scale(${state.zoom})`;
    lbImg.style.cursor = state.zoom > 1 ? 'grab' : 'zoom-in';
    lbStage.classList.toggle('zoomed', state.zoom > 1);
  }
  function setZoom(z) { state.zoom = Math.min(Math.max(z, 1), 4); if (state.zoom === 1) { state.panX = 0; state.panY = 0; } applyZoom(); }

  function toggleFullscreen() {
    if (!lb) return;
    if (!document.fullscreenElement) lb.requestFullscreen && lb.requestFullscreen().catch(() => {});
    else document.exitFullscreen().catch(() => {});
  }

  if (lbPrev)  lbPrev.addEventListener('click', () => navLightbox(-1));
  if (lbNext)  lbNext.addEventListener('click', () => navLightbox(1));
  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbZoomIn)  lbZoomIn.addEventListener('click', () => setZoom(state.zoom + 0.5));
  if (lbZoomOut) lbZoomOut.addEventListener('click', () => setZoom(state.zoom - 0.5));
  if (lbFit)     lbFit.addEventListener('click', () => setZoom(1));
  if (lbFullscreen) lbFullscreen.addEventListener('click', toggleFullscreen);
  if (lb) lb.addEventListener('click', (e) => { if (e.target === lb || e.target === lbStage) closeLightbox(); });

  if (lbStage) {
    lbStage.addEventListener('wheel', (e) => {
      if (!lb.classList.contains('active')) return;
      e.preventDefault();
      setZoom(state.zoom + (e.deltaY < 0 ? 0.3 : -0.3));
    }, { passive: false });
  }
  if (lbImg) {
    lbImg.addEventListener('dblclick', (e) => { e.preventDefault(); setZoom(state.zoom > 1 ? 1 : 2.5); });
    lbImg.addEventListener('click', (e) => { if (state.zoom === 1) { e.stopPropagation(); setZoom(2); } });
  }
  let dragging = false, sx = 0, sy = 0, ox = 0, oy = 0;
  if (lbImg) {
    lbImg.addEventListener('pointerdown', (e) => {
      if (state.zoom <= 1) return;
      dragging = true; sx = e.clientX; sy = e.clientY; ox = state.panX; oy = state.panY;
      lbImg.setPointerCapture(e.pointerId); lbImg.style.cursor = 'grabbing';
    });
    lbImg.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      state.panX = ox + (e.clientX - sx); state.panY = oy + (e.clientY - sy); applyZoom();
    });
    lbImg.addEventListener('pointerup', () => { dragging = false; if (state.zoom > 1) lbImg.style.cursor = 'grab'; });
  }
  const pointers = new Map();
  let pinchStartDist = 0, pinchStartZoom = 1;
  if (lbStage) {
    lbStage.addEventListener('pointerdown', (e) => pointers.set(e.pointerId, e));
    lbStage.addEventListener('pointermove', (e) => {
      if (!pointers.has(e.pointerId)) return;
      pointers.set(e.pointerId, e);
      if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        const dist = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
        if (!pinchStartDist) { pinchStartDist = dist; pinchStartZoom = state.zoom; }
        else setZoom(pinchStartZoom * (dist / pinchStartDist));
      }
    });
    const clearPtr = (e) => { pointers.delete(e.pointerId); if (pointers.size < 2) pinchStartDist = 0; };
    lbStage.addEventListener('pointerup', clearPtr);
    lbStage.addEventListener('pointercancel', clearPtr);
  }

  function attachSwipe(el, onSwipe, guard) {
    let x0 = 0;
    el.addEventListener('touchstart', e => { x0 = e.changedTouches[0].screenX; }, { passive: true });
    el.addEventListener('touchend', e => {
      if (guard && guard()) return;
      const d = x0 - e.changedTouches[0].screenX;
      if (Math.abs(d) > 55) onSwipe(d > 0 ? 1 : -1);
    }, { passive: true });
  }
  if (lb) attachSwipe(lb, navLightbox, () => state.zoom > 1);
  if (modalOverlay) attachSwipe(modalOverlay, navModal);

  /* ────────────────────────────────────────────────────────────
     KEYBOARD
  ──────────────────────────────────────────────────────────── */
  document.addEventListener('keydown', (e) => {
    if (lb && lb.classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft')  navLightbox(-1);
      else if (e.key === 'ArrowRight') navLightbox(1);
      else if (e.key === '+' || e.key === '=') setZoom(state.zoom + 0.5);
      else if (e.key === '-') setZoom(state.zoom - 0.5);
      else if (e.key === '0') setZoom(1);
      else if (e.key === 'f' || e.key === 'F') toggleFullscreen();
      return;
    }
    if (modalOverlay && modalOverlay.classList.contains('active')) {
      if (e.key === 'Escape') closeModal();
      else if (e.key === 'ArrowLeft')  navModal(-1);
      else if (e.key === 'ArrowRight') navModal(1);
    }
  });

  /* ────────────────────────────────────────────────────────────
     PAGINATION / EMPTY / QUOTE
  ──────────────────────────────────────────────────────────── */
  if (viewMoreBtn) viewMoreBtn.addEventListener('click', () => {
    const before = grid.querySelectorAll('.gx-card').length;
    shownCount += PAGE_SIZE;
    renderGallery();
    const cards = grid.querySelectorAll('.gx-card');
    if (cards[before]) cards[before].querySelector('.gx-card-media').focus();
  });

  if (emptyReset) emptyReset.addEventListener('click', () => selectCategory('all'));

  function scrollToQuote(productName) {
    const contact = document.getElementById('contact');
    if (!contact) return;
    contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTimeout(() => {
      const msg = document.getElementById('fmsg');
      if (msg && productName) {
        msg.value = `I would like to request a manufacturing quote for: ${productName}.\n\nPlease share MOQ, pricing and lead time.`;
        msg.focus();
      }
    }, 650);
  }
  window.stitchronixQuote = scrollToQuote;

  /* ── Init ── */
  renderFilters();
  renderGallery();
})();
