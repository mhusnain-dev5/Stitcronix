/* ============================================================
   STITCHRONIX  MANUFACTURING PORTFOLIO
   Premium B2B Apparel Catalog
   ------------------------------------------------------------
   Modular vanilla-JS build. Logical "components":
     · buildTaxonomy / renderLevel1 / renderLevel2  (GalleryFilter + CategoryTabs)
     · createCard                                    (ProductCard + SkeletonLoader)
     · renderGallery                                 (Gallery grid + EmptyState + Pagination)
     · openModal / populateModal                     (ProductModal)
     · openLightbox                                  (Lightbox + ZoomViewer)
   ============================================================ */

(function () {
  'use strict';

  /* ────────────────────────────────────────────────────────────
     TAXONOMY
     Level-1 chips are either a GENDER (reveals a Level-2 row) or a
     CROSS-CUTTING capability filter (Sportswear / OEM / ODM / Private Label).
     Level-2 labels are curated per gender; chips with zero matching
     products are hidden automatically so the catalog never shows an
     empty sub-category.
  ──────────────────────────────────────────────────────────── */
  const LEVEL1 = [
    { key: 'all', label: 'All', type: 'all' },
    { key: 'men', label: 'Men', type: 'gender' },
    { key: 'women', label: 'Women', type: 'gender' },
    { key: 'kids', label: 'Kids', type: 'gender' },
    { key: 'sportswear', label: 'Sportswear', type: 'capability' },
    { key: 'oem', label: 'OEM', type: 'capability' },
    { key: 'odm', label: 'ODM', type: 'capability' },
    { key: 'privatelabel', label: 'Private Label', type: 'capability' },
  ];

  const SUBCATS = {
    men: ['T-Shirts', 'Polo Shirts', 'Hoodies', 'Sweatshirts', 'Tracksuits', 'Shorts', 'Joggers', 'Trousers', 'Denim'],
    women: ['T-Shirts', 'Polo Shirts', 'Hoodies', 'Crop Tops', 'Leggings', 'Tracksuits', 'Sports Bras', 'Activewear', 'Dresses', 'Tank Tops', 'Pajamas'],
    kids: ['School Uniform', 'Hoodies', 'Tracksuits', 'T-Shirts', 'Shorts', 'Baby Wear', 'Pajamas'],
  };

  /* label → slug + slug → label (single source of truth) */
  const LABEL_TO_SLUG = {
    'T-Shirts': 'tshirts', 'Polo Shirts': 'polo', 'Hoodies': 'hoodies',
    'Sweatshirts': 'sweatshirts', 'Tracksuits': 'tracksuits', 'Shorts': 'shorts',
    'Joggers': 'joggers', 'Trousers': 'trousers', 'Denim': 'denim',
    'Crop Tops': 'croptops', 'Leggings': 'leggings', 'Sports Bras': 'sportsbra',
    'Activewear': 'activewear', 'Dresses': 'dresses', 'Tank Tops': 'tanktops',
    'Pajamas': 'pajamas', 'School Uniform': 'school', 'Baby Wear': 'babywear',
    'Sportswear': 'sportswear',
  };
  const SLUG_TO_LABEL = Object.fromEntries(
    Object.entries(LABEL_TO_SLUG).map(([l, s]) => [s, l])
  );

  /* ────────────────────────────────────────────────────────────
     PRODUCT DATA
  ──────────────────────────────────────────────────────────── */
  const labelPack = ['Woven Label', 'Printed Neck Tag', 'Heat-Transfer Label', 'Custom Size Tab', 'Hem Flag'];

  const PRODUCTS = [
    /* ── MEN ─────────────────────────────────────────────── */
    {
      id: 1, name: 'Heavyweight Pullover Hoodie', gender: 'men', category: 'hoodies',
      image: 'images/img-01.jpeg', fabric: '380 GSM French Terry', gsm: 380,
      colors: ['#1a1a1a', '#f5f5f5', '#1e3a5f', '#6b2020', '#1e3d20'],
      colorNames: ['Jet Black', 'White', 'Navy', 'Burgundy', 'Forest Green'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'], moq: 100,
      manufacturingType: 'OEM · ODM · Private Label', isNew: false, isBestseller: true, sport: false,
      description: 'A signature heavyweight pullover hoodie built from 380 GSM brushed-back French Terry. Kangaroo pocket, ribbed cuffs and double-needle stitching throughout. Fully customisable colourways on Pantone match.',
      printingOptions: ['Screen Print', 'DTF Print', 'Puff Print', 'Sublimation'],
      embroideryOptions: ['Chest Logo', 'Sleeve Badge', 'Back Panel', 'Hood Interior'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Flat-Pack Box', 'Hanger Pack', 'Custom Branded Box'],
      leadTime: '3–4 Weeks', exportCountries: 'USA · UK · Germany · France · Australia',
    },
    {
      id: 2, name: 'Full-Zip Streetwear Hoodie', gender: 'men', category: 'hoodies',
      image: 'images/img-02.jpeg', fabric: '350 GSM Fleece Cotton', gsm: 350,
      colors: ['#1a1a1a', '#2c2c2c', '#3b2f4a', '#2a3a2a'],
      colorNames: ['Jet Black', 'Charcoal', 'Deep Plum', 'Olive'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · ODM', isNew: true, isBestseller: false, sport: false,
      description: 'Precision-cut full-zip hoodie with YKK zippers, drawcord hood and flat-lock seams. A dependable staple for streetwear private labels with consistent sizing and clean finishing.',
      printingOptions: ['Screen Print', 'DTF Print', 'Reflective Print'],
      embroideryOptions: ['Chest Logo', 'Sleeve Stripe', 'Back Panel'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Hanger Pack', 'Box Pack'],
      leadTime: '3–4 Weeks', exportCountries: 'UK · Netherlands · UAE · Canada',
    },
    {
      id: 3, name: 'Minimalist Lounge Sweatshirt', gender: 'men', category: 'sweatshirts',
      image: 'images/img-03.jpeg', fabric: '320 GSM Loopback', gsm: 320,
      colors: ['#e8e0d0', '#d4c5a9', '#c9b99a', '#a8a39e'],
      colorNames: ['Sand', 'Warm Linen', 'Caramel', 'Ash'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · ODM', isNew: false, isBestseller: false, sport: false,
      description: 'Clean-line crew sweatshirt in neutral-toned yarns. Designed for luxury loungewear and lifestyle brands who prioritise fabric hand-feel and refined silhouette over embellishment.',
      printingOptions: ['Tonal Print', 'Suede Print'],
      embroideryOptions: ['Small Chest Logo', 'Hem Label', 'Sleeve Text'],
      labelOptions: labelPack, packagingOptions: ['Premium Box', 'Tissue Wrap', 'Poly Bag'],
      leadTime: '3–4 Weeks', exportCountries: 'USA · UK · Germany · Sweden · Denmark',
    },
    {
      id: 4, name: 'Oversized Fleece Hoodie', gender: 'men', category: 'hoodies',
      image: 'images/img-04.jpeg', fabric: '400 GSM Polar Fleece', gsm: 400,
      colors: ['#1a1a1a', '#ffffff', '#2d4a8a', '#8b4513'],
      colorNames: ['Black', 'White', 'Royal Blue', 'Brown'],
      sizes: ['M', 'L', 'XL', 'XXL', 'XXXL'], moq: 150,
      manufacturingType: 'ODM · Private Label', isNew: false, isBestseller: false, sport: false,
      description: 'Boxy oversized silhouette in 400 GSM polar fleece. Extra-deep kangaroo pocket, dropped shoulders and extended back hem  a high-demand block for streetwear and fashion houses.',
      printingOptions: ['Screen Print', 'DTF Print', 'Vinyl Graphics'],
      embroideryOptions: ['Oversized Back Logo', 'Chest Patch', 'Sleeve Wordmark'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Flat-Pack Box'],
      leadTime: '4–5 Weeks', exportCountries: 'USA · Germany · Italy · Australia',
    },
    {
      id: 5, name: 'Oversized Supima Cotton Tee', gender: 'men', category: 'tshirts',
      image: 'images/img-05.jpeg', fabric: '220 GSM Supima Cotton', gsm: 220,
      colors: ['#1a1a1a', '#f5f5f5', '#b8c4bb', '#c4a882', '#8b7355'],
      colorNames: ['Black', 'White', 'Sage', 'Sand', 'Camel'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · ODM · Private Label', isNew: false, isBestseller: true, sport: false,
      description: '220 GSM 100% Supima Cotton oversized tee with a garment-dyed finish. Boxy fit, dropped shoulders and a clean hemline  the definitive premium-basics blank.',
      printingOptions: ['Screen Print', 'DTF', 'Discharge Print', 'Pigment Dye'],
      embroideryOptions: ['Small Chest Logo', 'Left Chest', 'Sleeve Brand'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Box Pack', 'Folded & Tagged'],
      leadTime: '2–3 Weeks', exportCountries: 'USA · UK · UAE · France',
    },
    {
      id: 6, name: 'Merino Piqué Polo Shirt', gender: 'men', category: 'polo',
      image: 'images/img-06.jpeg', fabric: '200 GSM Piqué Cotton', gsm: 200,
      colors: ['#1a1a1a', '#f5f5f5', '#1e3a5f', '#1e3d20', '#8b0000'],
      colorNames: ['Black', 'White', 'Navy', 'Green', 'Burgundy'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · ODM', isNew: false, isBestseller: false, sport: false,
      description: 'Classic piqué polo with a 2-button placket, ribbed collar and branded heat-transfer neck label. Ideal for corporate uniforms, sports clubs and retail brands.',
      printingOptions: ['Screen Print', 'Woven Patch'],
      embroideryOptions: ['Left Chest Logo', 'Right Chest', 'Sleeve Band'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Hanger Pack', 'Box Pack'],
      leadTime: '2–3 Weeks', exportCountries: 'UAE · Saudi Arabia · UK · Netherlands',
    },
    {
      id: 7, name: 'Graphic Drop-Shoulder Tee', gender: 'men', category: 'tshirts',
      image: 'images/img-07.jpeg', fabric: '200 GSM Ring-Spun Cotton', gsm: 200,
      colors: ['#1a1a1a', '#2c2c2c', '#4a3f35', '#3d3d3d'],
      colorNames: ['Black', 'Charcoal', 'Mocha', 'Graphite'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · ODM', isNew: true, isBestseller: false, sport: false,
      description: 'Drop-shoulder boxy tee in 200 GSM ring-spun cotton with a lived-in texture. Takes every decoration method beautifully  a favourite for graphic-tee labels.',
      printingOptions: ['Screen Print', 'DTF', 'Discharge Print'],
      embroideryOptions: ['Chest Patch', 'Sleeve Wordmark'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Flat-Pack Box'],
      leadTime: '2–3 Weeks', exportCountries: 'USA · UK · Germany · Australia',
    },
    {
      id: 8, name: 'Performance Training Shirt', gender: 'men', category: 'activewear',
      image: 'images/img-08.jpeg', fabric: '160 GSM Interlock Polyester', gsm: 160,
      colors: ['#1a1a1a', '#1e3a5f', '#cc0000', '#004d00', '#ff6600'],
      colorNames: ['Black', 'Navy', 'Red', 'Green', 'Orange'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 150,
      manufacturingType: 'OEM · Sublimation', isNew: false, isBestseller: true, sport: true,
      description: '160 GSM 100% polyester interlock with moisture-wicking and anti-microbial treatment. Flat-lock seams reduce chafing  engineered for team kits, clubs and performance brands.',
      printingOptions: ['Sublimation', 'Heat Transfer', 'Vinyl Graphics'],
      embroideryOptions: ['Club Badge', 'Sponsor Logo', 'Name & Number'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Individual Label', 'Bulk Carton'],
      leadTime: '3–4 Weeks', exportCountries: 'UK · USA · UAE · Australia · Saudi Arabia',
    },
    {
      id: 9, name: 'Athletic Compression Shorts', gender: 'men', category: 'shorts',
      image: 'images/img-09.jpeg', fabric: '180 GSM Spandex Blend', gsm: 180,
      colors: ['#1a1a1a', '#1e3a5f', '#cc0000'], colorNames: ['Black', 'Navy', 'Red'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM', isNew: false, isBestseller: false, sport: true,
      description: '4-way stretch compression shorts in 80/20 poly-spandex. Breathable mesh inseam panels for ventilation and an elastic waistband with an inner cord.',
      printingOptions: ['Sublimation', 'Silicone Print'],
      embroideryOptions: ['Side Panel Logo', 'Waistband Brand'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Hanger Pack'],
      leadTime: '2–3 Weeks', exportCountries: 'UK · UAE · Australia · Canada',
    },
    {
      id: 10, name: 'Dry-Fit Training Set', gender: 'men', category: 'activewear',
      image: 'images/img-10.jpeg', fabric: '140 GSM Dry-Fit Polyester', gsm: 140,
      colors: ['#1a1a1a', '#ffffff', '#1e3a5f', '#2a3a2a'],
      colorNames: ['Black', 'White', 'Navy', 'Olive'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · ODM', isNew: true, isBestseller: false, sport: true,
      description: '140 GSM ultra-lightweight dry-fit training shirt with raglan sleeves and an underarm mesh gusset. Clean DTF or sublimated logo application for gym-wear labels.',
      printingOptions: ['DTF', 'Sublimation'],
      embroideryOptions: ['Left Chest Logo'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Folded Flat-Pack'],
      leadTime: '2–3 Weeks', exportCountries: 'USA · UK · UAE · Australia',
    },
    {
      id: 11, name: 'Sublimated Team Kit', gender: 'men', category: 'sportswear',
      image: 'images/img-11.jpeg', fabric: '150 GSM Sublimation Polyester', gsm: 150,
      colors: ['#cc0000', '#1e3a5f', '#1a1a1a', '#006633'],
      colorNames: ['Red', 'Navy', 'Black', 'Green'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'], moq: 150,
      manufacturingType: 'Full Sublimation · OEM', isNew: false, isBestseller: false, sport: true,
      description: 'All-over sublimation-printed team kit with unlimited colour and panel design capability. Guaranteed print registration for football, cricket and esports teams.',
      printingOptions: ['Full Sublimation', 'Cut & Sew Panels'],
      embroideryOptions: ['Badge (post-sublimation)'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Individual Label'],
      leadTime: '3–4 Weeks', exportCountries: 'UK · UAE · Australia · Qatar · Kuwait',
    },
    {
      id: 12, name: 'Coordinated Tracksuit Set', gender: 'men', category: 'tracksuits',
      image: 'images/img-12.jpeg', fabric: '300 GSM French Terry', gsm: 300,
      colors: ['#1a1a1a', '#f5f5f5', '#1e3a5f', '#2a3a2a'],
      colorNames: ['Black', 'White', 'Navy', 'Olive'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 150,
      manufacturingType: 'OEM · ODM', isNew: false, isBestseller: true, sport: false,
      description: 'Premium coordinated tracksuit in 300 GSM French Terry. Zip-up jacket with tape detailing and matching jogger, dye-to-match zippers, ribbed waistband and custom cuffs.',
      printingOptions: ['Screen Print', 'DTF'],
      embroideryOptions: ['Chest Logo', 'Leg Stripe', 'Back Panel Text'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag (Set)', 'Flat-Pack Box', 'Hanger Pack'],
      leadTime: '4–5 Weeks', exportCountries: 'USA · UK · Germany · France · Italy',
    },
    {
      id: 13, name: 'Streetwear Jogger', gender: 'men', category: 'joggers',
      image: 'images/img-13.jpeg', fabric: '320 GSM Brushed Fleece', gsm: 320,
      colors: ['#1a1a1a', '#2c2c2c', '#3b2f4a', '#4a3527'],
      colorNames: ['Black', 'Charcoal', 'Plum', 'Brown'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL'], moq: 100,
      manufacturingType: 'OEM · Private Label', isNew: false, isBestseller: false, sport: false,
      description: 'Brushed-fleece jogger with side taping, custom cord tips and zip pockets. Tapered leg and ribbed cuff  a high-turnover block for streetwear and athleisure labels.',
      printingOptions: ['Screen Print', 'Reflective Print'],
      embroideryOptions: ['Hip Logo', 'Leg Wordmark'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Premium Box'],
      leadTime: '3–4 Weeks', exportCountries: 'UK · USA · Netherlands · Belgium',
    },
    {
      id: 14, name: 'Premium Two-Piece Tracksuit', gender: 'men', category: 'tracksuits',
      image: 'images/img-14.jpeg', fabric: '340 GSM Terry Cotton', gsm: 340,
      colors: ['#1a1a1a', '#f5f5f5', '#cc8800', '#8b0000'],
      colorNames: ['Black', 'White', 'Gold', 'Burgundy'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 150,
      manufacturingType: 'ODM · Private Label', isNew: true, isBestseller: false, sport: false,
      description: 'High-end two-piece tracksuit in 340 GSM terry cotton. Structured shoulder seams, branded drawcord ends and premium YKK hardware for luxury athleisure collections.',
      printingOptions: ['Metal Badge', 'Woven Label'],
      embroideryOptions: ['Chest Logo', 'Arm Stripe', 'Back Graphic'],
      labelOptions: labelPack, packagingOptions: ['Premium Box', 'Tissue Wrap', 'Hanger Pack'],
      leadTime: '4–5 Weeks', exportCountries: 'USA · UK · Germany · France · Switzerland',
    },
    {
      id: 15, name: 'Tapered Chino Trouser', gender: 'men', category: 'trousers',
      image: 'images/img-12.jpeg', fabric: '260 GSM Cotton Twill', gsm: 260,
      colors: ['#2c2c2c', '#4a3f35', '#1e3a5f', '#3d3d3d'],
      colorNames: ['Charcoal', 'Stone', 'Navy', 'Graphite'],
      sizes: ['28', '30', '32', '34', '36', '38'], moq: 150,
      manufacturingType: 'OEM · ODM', isNew: false, isBestseller: false, sport: false,
      description: 'Tapered cotton-twill chino with a clean flat front, YKK zip fly and reinforced pocketing. Colour-matched topstitching and a branded leather-look patch option.',
      printingOptions: ['Heat-Transfer Branding'],
      embroideryOptions: ['Back Pocket Logo', 'Coin Pocket'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Hanger Pack'],
      leadTime: '4–5 Weeks', exportCountries: 'UK · Germany · France',
    },
    {
      id: 16, name: 'Selvedge Denim Jacket', gender: 'men', category: 'denim',
      image: 'images/img-04.jpeg', fabric: '12 oz Selvedge Denim', gsm: 340,
      colors: ['#26374a', '#1a1a1a', '#5b6b7a'],
      colorNames: ['Indigo', 'Washed Black', 'Stone Wash'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 200,
      manufacturingType: 'OEM · Private Label', isNew: true, isBestseller: false, sport: false,
      description: 'Structured trucker jacket in 12 oz selvedge denim with chain-stitch hems, custom rivets and branded shank buttons. Enzyme, stone and rinse wash packages available.',
      printingOptions: ['Laser Wash Graphics'],
      embroideryOptions: ['Chest Pocket Logo', 'Back Yoke'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Hanger Pack', 'Custom Box'],
      leadTime: '5–6 Weeks', exportCountries: 'USA · Japan · Germany · UK',
    },

    /* ── WOMEN ───────────────────────────────────────────── */
    {
      id: 17, name: 'Cropped Fleece Hoodie', gender: 'women', category: 'hoodies',
      image: 'images/img-03.jpeg', fabric: '320 GSM Fleece Cotton', gsm: 320,
      colors: ['#f5f5f5', '#1a1a1a', '#e6c3c3', '#b5c0d0'],
      colorNames: ['Off-White', 'Black', 'Dusty Rose', 'Slate Blue'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'], moq: 100,
      manufacturingType: 'OEM · ODM', isNew: true, isBestseller: false, sport: false,
      description: 'Cropped fleece hoodie in 320 GSM brushed cotton with a relaxed hood, dropped shoulders and custom ribbing. A best-selling silhouette for women\'s lifestyle brands.',
      printingOptions: ['Screen Print', 'DTF Print'],
      embroideryOptions: ['Chest Print', 'Sleeve Logo'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Custom Branded Box'],
      leadTime: '3–4 Weeks', exportCountries: 'USA · Germany · UK',
    },
    {
      id: 18, name: 'Oversized Crop Tee', gender: 'women', category: 'croptops',
      image: 'images/img-05.jpeg', fabric: '180 GSM Organic Cotton', gsm: 180,
      colors: ['#f5f5f5', '#1a1a1a', '#e5dfd3'],
      colorNames: ['Off-White', 'Black', 'Oatmeal'],
      sizes: ['XS', 'S', 'M', 'L'], moq: 100,
      manufacturingType: 'OEM · ODM', isNew: false, isBestseller: true, sport: false,
      description: 'Boxy organic-cotton crop tee with a premium hand-feel. Heavyweight single jersey with custom garment-dye options and a raw or rolled hem finish.',
      printingOptions: ['Screen Print', 'Discharge Print'],
      embroideryOptions: ['Tonal Chest Logo'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag'],
      leadTime: '2–3 Weeks', exportCountries: 'USA · UK · France',
    },
    {
      id: 19, name: 'Squat-Proof Leggings', gender: 'women', category: 'leggings',
      image: 'images/img-09.jpeg', fabric: '240 GSM Nylon Spandex', gsm: 240,
      colors: ['#1a1a1a', '#2c3539', '#4b2a4a'],
      colorNames: ['Black', 'Charcoal', 'Deep Plum'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'], moq: 150,
      manufacturingType: 'OEM · Private Label', isNew: false, isBestseller: true, sport: true,
      description: 'High-performance squat-proof leggings with 4-way stretch, a high-waisted contour band and flat-lock anti-chafing seams. Optional side pockets and gusset lining.',
      printingOptions: ['Heat-Transfer Logo', 'Silicone Print'],
      embroideryOptions: [],
      labelOptions: labelPack, packagingOptions: ['Poly Bag'],
      leadTime: '3–4 Weeks', exportCountries: 'UK · Australia · Germany',
    },
    {
      id: 20, name: 'Seamless Sports Bra', gender: 'women', category: 'sportsbra',
      image: 'images/img-10.jpeg', fabric: '220 GSM Polyester Blend', gsm: 220,
      colors: ['#1a1a1a', '#f5f5f5', '#a3b5a2'],
      colorNames: ['Black', 'Off-White', 'Sage Green'],
      sizes: ['XS', 'S', 'M', 'L'], moq: 100,
      manufacturingType: 'OEM · ODM', isNew: true, isBestseller: false, sport: true,
      description: 'Seamless high-support sports bra with moisture-wicking knit and removable cups. Bonded straps and a wide underband for all-day comfort.',
      printingOptions: ['Heat Transfer'],
      embroideryOptions: [],
      labelOptions: labelPack, packagingOptions: ['Poly Bag'],
      leadTime: '3–4 Weeks', exportCountries: 'USA · UAE · Australia',
    },
    {
      id: 21, name: 'Coordinated Lounge Set', gender: 'women', category: 'tracksuits',
      image: 'images/img-12.jpeg', fabric: '300 GSM French Terry', gsm: 300,
      colors: ['#e5dfd3', '#2c2c2c', '#d1c2bc'],
      colorNames: ['Oatmeal', 'Charcoal', 'Taupe'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'], moq: 100,
      manufacturingType: 'OEM · ODM', isNew: false, isBestseller: false, sport: false,
      description: 'Coordinated lounge set with wide-leg pants and a mock-neck sweatshirt. Brushed French Terry interior for supreme softness, with tonal branding options.',
      printingOptions: ['Screen Print'],
      embroideryOptions: ['Left Chest Logo', 'Hip Branding'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag (Set)', 'Custom Box'],
      leadTime: '4–5 Weeks', exportCountries: 'USA · UK · Sweden',
    },
    {
      id: 22, name: 'Ribbed Activewear Set', gender: 'women', category: 'activewear',
      image: 'images/img-10.jpeg', fabric: '260 GSM Ribbed Nylon', gsm: 260,
      colors: ['#3b3b3b', '#8b6f5c', '#5a6b5a', '#1a1a1a'],
      colorNames: ['Slate', 'Mocha', 'Moss', 'Black'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'], moq: 120,
      manufacturingType: 'OEM · ODM', isNew: true, isBestseller: false, sport: true,
      description: 'Matching ribbed activewear set  a scoop-back top with built-in shelf bra and high-waist leggings. Buttery-soft ribbed knit with a sculpting fit.',
      printingOptions: ['Heat-Transfer Logo'],
      embroideryOptions: ['Waistband Logo'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag (Set)'],
      leadTime: '3–4 Weeks', exportCountries: 'USA · UK · UAE · Australia',
    },
    {
      id: 23, name: 'Fitted Piqué Polo', gender: 'women', category: 'polo',
      image: 'images/img-06.jpeg', fabric: '180 GSM Piqué Cotton', gsm: 180,
      colors: ['#f5f5f5', '#1a1a1a', '#1e3a5f'],
      colorNames: ['White', 'Black', 'Navy'],
      sizes: ['S', 'M', 'L', 'XL'], moq: 100,
      manufacturingType: 'OEM · ODM', isNew: false, isBestseller: false, sport: false,
      description: 'Tailored-fit women\'s piqué polo with a narrow 3-button placket and a custom flat-knit collar. Ideal for hospitality, retail and club uniforms.',
      printingOptions: ['Screen Print'],
      embroideryOptions: ['Left Chest Logo'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag'],
      leadTime: '2–3 Weeks', exportCountries: 'UK · Netherlands · UAE',
    },
    {
      id: 24, name: 'Everyday Slub Tee', gender: 'women', category: 'tshirts',
      image: 'images/img-05.jpeg', fabric: '160 GSM Slub Cotton', gsm: 160,
      colors: ['#f5f5f5', '#1a1a1a', '#c9a9a6', '#a8b0a0'],
      colorNames: ['White', 'Black', 'Rose Clay', 'Sage'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'], moq: 100,
      manufacturingType: 'OEM · Private Label', isNew: false, isBestseller: false, sport: false,
      description: 'Relaxed everyday tee in 160 GSM slub cotton with a soft drape and a flattering crew neckline. A dependable colour-drop blank for capsule collections.',
      printingOptions: ['Screen Print', 'DTF'],
      embroideryOptions: ['Small Chest Logo'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Folded & Tagged'],
      leadTime: '2–3 Weeks', exportCountries: 'USA · UK · Germany',
    },
    {
      id: 25, name: 'Ribbed Tank Top', gender: 'women', category: 'tanktops',
      image: 'images/img-05.jpeg', fabric: '200 GSM Ribbed Cotton', gsm: 200,
      colors: ['#1a1a1a', '#f5f5f5', '#c9b99a', '#7a8b7a'],
      colorNames: ['Black', 'White', 'Caramel', 'Fern'],
      sizes: ['XS', 'S', 'M', 'L'], moq: 100,
      manufacturingType: 'OEM · ODM', isNew: false, isBestseller: false, sport: false,
      description: 'Fitted ribbed tank in 200 GSM cotton with bound neckline and armholes. A layering essential that holds shape wash after wash.',
      printingOptions: ['Screen Print', 'Tonal Print'],
      embroideryOptions: ['Chest Logo'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag'],
      leadTime: '2–3 Weeks', exportCountries: 'USA · UK · France',
    },
    {
      id: 26, name: 'Satin Slip Dress', gender: 'women', category: 'dresses',
      image: 'images/img-03.jpeg', fabric: '120 GSM Matte Satin', gsm: 120,
      colors: ['#1a1a1a', '#4b2a4a', '#3a4a5a', '#6b2020'],
      colorNames: ['Black', 'Plum', 'Steel', 'Wine'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'], moq: 120,
      manufacturingType: 'ODM · Private Label', isNew: true, isBestseller: false, sport: false,
      description: 'Bias-cut matte satin slip dress with adjustable straps and a French-seam finish. A refined occasion piece with custom-length and lining options.',
      printingOptions: ['All-Over Print'],
      embroideryOptions: ['Hem Monogram'],
      labelOptions: labelPack, packagingOptions: ['Tissue Wrap', 'Hanger Pack', 'Custom Box'],
      leadTime: '4–5 Weeks', exportCountries: 'USA · UK · Italy · France',
    },
    {
      id: 27, name: 'Brushed Cotton Pajama Set', gender: 'women', category: 'pajamas',
      image: 'images/img-03.jpeg', fabric: '180 GSM Brushed Cotton', gsm: 180,
      colors: ['#e6c3c3', '#b5c0d0', '#e5dfd3', '#1a1a1a'],
      colorNames: ['Dusty Rose', 'Slate Blue', 'Oatmeal', 'Black'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'], moq: 120,
      manufacturingType: 'OEM · ODM', isNew: false, isBestseller: false, sport: false,
      description: 'Two-piece brushed-cotton pajama set with piped edges and a relaxed fit. Long-sleeve button shirt with matching wide-leg pant  a giftable loungewear staple.',
      printingOptions: ['All-Over Print', 'Screen Print'],
      embroideryOptions: ['Chest Pocket Monogram'],
      labelOptions: labelPack, packagingOptions: ['Tissue Wrap', 'Gift Box'],
      leadTime: '3–4 Weeks', exportCountries: 'USA · UK · Germany',
    },

    /* ── KIDS ────────────────────────────────────────────── */
    {
      id: 28, name: 'Kids Fleece Pullover Hoodie', gender: 'kids', category: 'hoodies',
      image: 'images/img-01.jpeg', fabric: '280 GSM Brushed Fleece', gsm: 280,
      colors: ['#2c4a8a', '#cc0000', '#ffaa00', '#1a1a1a'],
      colorNames: ['Royal Blue', 'Red', 'Yellow', 'Black'],
      sizes: ['2T', '4T', 'YS', 'YM', 'YL'], moq: 150,
      manufacturingType: 'OEM · ODM', isNew: false, isBestseller: true, sport: false,
      description: 'Soft heavyweight children\'s hoodie with a brushed fleece interior. Drawcord-free hood for safety compliance and reinforced seams for active wear.',
      printingOptions: ['Screen Print', 'DTF Print'],
      embroideryOptions: ['Chest Applique'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag'],
      leadTime: '3–4 Weeks', exportCountries: 'USA · UK · Canada',
    },
    {
      id: 29, name: 'Kids Everyday Cotton Tee', gender: 'kids', category: 'tshirts',
      image: 'images/img-07.jpeg', fabric: '160 GSM Combed Cotton', gsm: 160,
      colors: ['#ffffff', '#2c2c2c', '#89cff0', '#f4c2c2'],
      colorNames: ['White', 'Charcoal', 'Baby Blue', 'Baby Pink'],
      sizes: ['2T', '4T', 'YS', 'YM', 'YL'], moq: 100,
      manufacturingType: 'OEM', isNew: true, isBestseller: false, sport: false,
      description: '100% combed-cotton jersey crewneck tee. Soft-seam construction prevents irritation on children\'s skin, with OEKO-TEX certified inks available.',
      printingOptions: ['Water-Based Screen Print', 'DTF'],
      embroideryOptions: [],
      labelOptions: labelPack, packagingOptions: ['Poly Bag'],
      leadTime: '2–3 Weeks', exportCountries: 'USA · UK · Australia',
    },
    {
      id: 30, name: 'Primary School Polo Shirt', gender: 'kids', category: 'school',
      image: 'images/img-06.jpeg', fabric: '200 GSM Piqué Poly-Cotton', gsm: 200,
      colors: ['#ffffff', '#1e3a5f', '#004d00', '#8b0000'],
      colorNames: ['White', 'Navy', 'Bottle Green', 'Burgundy'],
      sizes: ['YS', 'YM', 'YL', 'YXL'], moq: 200,
      manufacturingType: 'OEM · School Contract', isNew: false, isBestseller: true, sport: false,
      description: 'Durable school-uniform piqué polo. Hard-wearing poly-cotton blend resistant to shrinkage and colour fade, engineered for daily institutional laundering.',
      printingOptions: ['Woven Crest Patch'],
      embroideryOptions: ['School Crest', 'Sleeve Badge'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Bulk Box'],
      leadTime: '3–4 Weeks', exportCountries: 'UK · Australia · Canada · Ireland',
    },
    {
      id: 31, name: 'Kids Fleece Tracksuit Set', gender: 'kids', category: 'tracksuits',
      image: 'images/img-13.jpeg', fabric: '280 GSM French Terry', gsm: 280,
      colors: ['#1a1a1a', '#e5dfd3', '#2c4a8a'],
      colorNames: ['Black', 'Oatmeal', 'Royal Blue'],
      sizes: ['2T', '4T', 'YS', 'YM', 'YL'], moq: 150,
      manufacturingType: 'OEM · ODM', isNew: true, isBestseller: false, sport: false,
      description: 'Two-piece matching tracksuit set for children. Heavyweight French Terry provides durability and insulation, with elasticated cuffs and a drawcord-free waist.',
      printingOptions: ['Screen Print'],
      embroideryOptions: ['Left Chest Logo', 'Leg Logo'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag (Set)'],
      leadTime: '4–5 Weeks', exportCountries: 'USA · UK · Sweden',
    },
    {
      id: 32, name: 'Kids Cozy Fleece Shorts', gender: 'kids', category: 'shorts',
      image: 'images/img-09.jpeg', fabric: '240 GSM Fleece Cotton', gsm: 240,
      colors: ['#2c2c2c', '#e5dfd3', '#2c4a8a'],
      colorNames: ['Charcoal', 'Oatmeal', 'Royal Blue'],
      sizes: ['2T', '4T', 'YS', 'YM', 'YL'], moq: 100,
      manufacturingType: 'OEM', isNew: false, isBestseller: false, sport: false,
      description: 'Comfortable kids fleece shorts with an elastic waistband and internal safety drawstring. Perfect for warm-weather playwear and school PE kits.',
      printingOptions: ['Screen Print', 'DTF'],
      embroideryOptions: [],
      labelOptions: labelPack, packagingOptions: ['Poly Bag'],
      leadTime: '2–3 Weeks', exportCountries: 'USA · UK · Canada',
    },
    {
      id: 33, name: 'Organic Baby Bodysuit Set', gender: 'kids', category: 'babywear',
      image: 'images/img-07.jpeg', fabric: '180 GSM Organic Cotton', gsm: 180,
      colors: ['#f4c2c2', '#89cff0', '#e5dfd3', '#a8b0a0'],
      colorNames: ['Blush', 'Baby Blue', 'Cream', 'Sage'],
      sizes: ['0-3M', '3-6M', '6-12M', '12-18M'], moq: 200,
      manufacturingType: 'OEM · Private Label', isNew: true, isBestseller: false, sport: false,
      description: 'GOTS-certified organic-cotton baby bodysuit set with nickel-free snap fastenings and envelope shoulders. Flat-lock seams and low-impact dyes for delicate skin.',
      printingOptions: ['Water-Based Print'],
      embroideryOptions: ['Chest Motif'],
      labelOptions: ['Tear-Away Printed Label', 'Woven Label'], packagingOptions: ['Poly Bag', 'Gift Box'],
      leadTime: '4–5 Weeks', exportCountries: 'USA · UK · Germany · Australia',
    },
    {
      id: 34, name: 'Kids Cotton Pajama Set', gender: 'kids', category: 'pajamas',
      image: 'images/img-03.jpeg', fabric: '160 GSM Combed Cotton', gsm: 160,
      colors: ['#89cff0', '#f4c2c2', '#e5dfd3', '#2c2c2c'],
      colorNames: ['Baby Blue', 'Baby Pink', 'Cream', 'Charcoal'],
      sizes: ['2T', '4T', 'YS', 'YM', 'YL'], moq: 150,
      manufacturingType: 'OEM · ODM', isNew: false, isBestseller: false, sport: false,
      description: 'Snug-fit two-piece cotton pajama set meeting children\'s sleepwear safety standards. Long-sleeve top and cuffed pant with all-over print options.',
      printingOptions: ['All-Over Print', 'Screen Print'],
      embroideryOptions: [],
      labelOptions: ['Tear-Away Printed Label'], packagingOptions: ['Poly Bag', 'Gift Box'],
      leadTime: '3–4 Weeks', exportCountries: 'USA · UK · Canada',
    },
  ];

  /* Derive capability tags once */
  PRODUCTS.forEach(p => {
    const mt = p.manufacturingType.toLowerCase();
    p.tags = {
      oem: mt.includes('oem'),
      odm: mt.includes('odm'),
      privatelabel: mt.includes('private label'),
      sportswear: !!p.sport || p.category === 'sportswear',
    };
  });

  /* ────────────────────────────────────────────────────────────
     STATE
  ──────────────────────────────────────────────────────────── */
  const state = {
    level1: 'all',      // all | men | women | kids | sportswear | oem | odm | privatelabel
    level1type: 'all',  // all | gender | capability
    subcat: 'all',      // level-2 slug
    filtered: [],       // current result set (for modal / lightbox navigation)
    modalIndex: 0,
    lbIndex: 0,
    zoom: 1,
    panX: 0,
    panY: 0,
  };

  const PAGE_SIZE = 12;
  let shownCount = PAGE_SIZE;

  /* ────────────────────────────────────────────────────────────
     DOM REFS
  ──────────────────────────────────────────────────────────── */
  const $ = id => document.getElementById(id);

  const level1Wrap = $('galleryLevel1');
  const level2Wrap = $('galleryLevel2');
  const grid = $('galleryGrid');
  const emptyState = $('galleryEmpty');
  const emptyReset = $('emptyResetBtn');
  const countEl = $('resultsCount');
  const viewMoreWrap = $('galleryViewMore');
  const viewMoreBtn = $('viewMoreBtn');

  /* Modal */
  const modalOverlay = $('productModalOverlay');
  const modalPanel = $('productModal');
  const modalClose = $('modalClose');
  const modalPrev = $('modalPrev');
  const modalNext = $('modalNext');

  /* Lightbox */
  const lb = $('galleryLightbox');
  const lbImg = $('lightboxImg');
  const lbStage = $('lbStage');
  const lbCounter = $('lbCounter');
  const lbName = $('lbName');
  const lbPrev = $('lbPrev');
  const lbNext = $('lbNext');
  const lbClose = $('lbClose');
  const lbZoomIn = $('lbZoomIn');
  const lbZoomOut = $('lbZoomOut');
  const lbFit = $('lbFit');

  /* ────────────────────────────────────────────────────────────
     FILTERING
  ──────────────────────────────────────────────────────────── */
  function getFiltered() {
    let list = PRODUCTS;

    if (state.level1type === 'gender') {
      list = list.filter(p => p.gender === state.level1);
      if (state.subcat !== 'all') list = list.filter(p => p.category === state.subcat);
    } else if (state.level1type === 'capability') {
      if (state.level1 === 'sportswear') list = list.filter(p => p.tags.sportswear);
      else list = list.filter(p => p.tags[state.level1]);
    }
    return list;
  }

  /* Count products for a given gender + subcat slug (to hide empty chips) */
  function countFor(gender, slug) {
    return PRODUCTS.reduce((n, p) =>
      n + (p.gender === gender && (slug === 'all' || p.category === slug) ? 1 : 0), 0);
  }

  /* ────────────────────────────────────────────────────────────
     LEVEL-1 FILTER  (GalleryFilter)
  ──────────────────────────────────────────────────────────── */
  function renderLevel1() {
    level1Wrap.innerHTML = '';
    LEVEL1.forEach(item => {
      const btn = document.createElement('button');
      btn.className = 'gx-chip gx-chip--l1' + (state.level1 === item.key ? ' active' : '');
      btn.dataset.key = item.key;
      btn.dataset.type = item.type;
      btn.setAttribute('role', 'tab');
      btn.setAttribute('aria-selected', state.level1 === item.key ? 'true' : 'false');
      btn.innerHTML = item.type === 'capability' && item.key !== 'sportswear'
        ? `<span>${item.label}</span>`
        : item.label;
      btn.addEventListener('click', () => selectLevel1(item));
      level1Wrap.appendChild(btn);
    });
  }

  function selectLevel1(item) {
    state.level1 = item.key;
    state.level1type = item.type;
    state.subcat = 'all';
    shownCount = PAGE_SIZE;
    level1Wrap.querySelectorAll('.gx-chip--l1').forEach(b => {
      const on = b.dataset.key === item.key;
      b.classList.toggle('active', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    renderLevel2();
    renderGallery();
  }

  /* ────────────────────────────────────────────────────────────
     LEVEL-2 SUBCATEGORY TABS  (CategoryTabs)
     Revealed only for gender selections; empty chips are hidden.
  ──────────────────────────────────────────────────────────── */
  function renderLevel2() {
    level2Wrap.innerHTML = '';
    if (state.level1type !== 'gender') {
      level2Wrap.classList.remove('open');
      return;
    }
    const gender = state.level1;
    const labels = SUBCATS[gender] || [];

    // "All" chip first
    addSubcatChip('All', 'all', countFor(gender, 'all'));
    labels.forEach(label => {
      const slug = LABEL_TO_SLUG[label];
      const c = countFor(gender, slug);
      if (c > 0) addSubcatChip(label, slug, c);
    });
    level2Wrap.classList.add('open');
  }

  function addSubcatChip(label, slug, count) {
    const btn = document.createElement('button');
    btn.className = 'gx-chip gx-chip--l2' + (state.subcat === slug ? ' active' : '');
    btn.dataset.slug = slug;
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', state.subcat === slug ? 'true' : 'false');
    btn.innerHTML = `${label}<span class="gx-chip-count">${count}</span>`;
    btn.addEventListener('click', () => {
      state.subcat = slug;
      shownCount = PAGE_SIZE;
      level2Wrap.querySelectorAll('.gx-chip--l2').forEach(b => {
        const on = b.dataset.slug === slug;
        b.classList.toggle('active', on);
        b.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      renderGallery();
    });
    level2Wrap.appendChild(btn);
  }

  /* ────────────────────────────────────────────────────────────
     GALLERY GRID  (Gallery + Pagination + EmptyState)
  ──────────────────────────────────────────────────────────── */
  function renderGallery() {
    const filtered = getFiltered();
    state.filtered = filtered;
    const visible = filtered.slice(0, shownCount);

    if (countEl) {
      countEl.innerHTML = `<strong>${filtered.length}</strong> ${filtered.length === 1 ? 'Style' : 'Styles'}`;
    }

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
    if (viewMoreBtn) {
      viewMoreBtn.textContent = `Load More Styles (${filtered.length - shownCount})`;
    }

    revealCards();
  }

  /* ────────────────────────────────────────────────────────────
     PRODUCT CARD  (ProductCard + SkeletonLoader)
  ──────────────────────────────────────────────────────────── */
  function createCard(p, index) {
    const catLabel = SLUG_TO_LABEL[p.category] || p.category;
    const card = document.createElement('article');
    card.className = 'gx-card reveal-card';
    card.style.setProperty('--i', Math.min(index, 8));
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `${p.name}, ${catLabel}. View details.`);

    const badge = p.isNew
      ? '<span class="gx-badge gx-badge--new">New</span>'
      : p.isBestseller
        ? '<span class="gx-badge gx-badge--best">Bestseller</span>'
        : '';

    // Capability pills (OEM / ODM / Private Label)
    const caps = [];
    if (p.tags.oem) caps.push('OEM');
    if (p.tags.odm) caps.push('ODM');
    if (p.tags.privatelabel) caps.push('Private Label');
    const capsHtml = caps.map(c => `<span class="gx-cap">${c}</span>`).join('');

    card.innerHTML = `
      <div class="gx-card-media">
        <div class="gx-skeleton"></div>
        ${badge}
        <img src="${p.image}" alt="${p.name}  ${catLabel} manufactured by Stitchronix"
             loading="lazy" decoding="async" width="600" height="750" />
        <div class="gx-card-hover" aria-hidden="true">
          <span class="gx-hover-eyebrow">${catLabel}</span>
          <div class="gx-hover-actions">
            <button class="gx-hover-btn gx-hover-btn--view" data-act="view" data-id="${p.id}">View Details</button>
            <button class="gx-hover-btn gx-hover-btn--quote" data-act="quote" data-name="${p.name}">Quick Quote</button>
          </div>
        </div>
        <button class="gx-zoom-btn" data-act="zoom" data-id="${p.id}" aria-label="Open fullscreen image">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
        </button>
      </div>
      <div class="gx-card-body">
        <span class="gx-card-cat">${catLabel}</span>
        <h3 class="gx-card-name">${p.name}</h3>
        <p class="gx-card-fabric">${p.fabric}</p>
        <div class="gx-card-caps">${capsHtml}</div>
        <div class="gx-card-foot">
          <div class="gx-moq">
            <span class="gx-moq-label">MOQ</span>
            <span class="gx-moq-val">${p.moq} pcs</span>
          </div>
          <div class="gx-swatches" aria-label="Available colours">
            ${p.colors.slice(0, 4).map((c, ci) => `<span class="gx-swatch" style="background:${c}" title="${p.colorNames[ci]}"></span>`).join('')}
            ${p.colors.length > 4 ? `<span class="gx-swatch-more">+${p.colors.length - 4}</span>` : ''}
          </div>
        </div>
        <div class="gx-card-btns">
          <button class="gx-btn gx-btn--ghost" data-act="view" data-id="${p.id}">View Details</button>
          <button class="gx-btn gx-btn--gold" data-act="quote" data-name="${p.name}">Request Quote</button>
        </div>
      </div>
    `;

    // Fade image in once loaded
    const img = card.querySelector('img');
    const markLoaded = () => card.querySelector('.gx-card-media').classList.add('is-loaded');
    if (img.complete) markLoaded();
    else { img.addEventListener('load', markLoaded); img.addEventListener('error', markLoaded); }

    // Delegated interactions
    card.addEventListener('click', (e) => {
      const actEl = e.target.closest('[data-act]');
      if (actEl) {
        e.stopPropagation();
        const act = actEl.dataset.act;
        if (act === 'quote') return scrollToQuote(actEl.dataset.name);
        if (act === 'zoom') return openLightbox(state.filtered.findIndex(x => x.id === p.id));
        if (act === 'view') return openModal(p);
      }
      openModal(p);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(p); }
    });

    return card;
  }

  /* ────────────────────────────────────────────────────────────
     SCROLL REVEAL  (100ms stagger, ≤300ms transitions)
  ──────────────────────────────────────────────────────────── */
  const cardObserver = ('IntersectionObserver' in window)
    ? new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })
    : null;

  function revealCards() {
    const cards = grid.querySelectorAll('.reveal-card:not(.revealed)');
    if (!cardObserver) { cards.forEach(c => c.classList.add('revealed')); return; }
    cards.forEach(c => cardObserver.observe(c));
  }

  /* ────────────────────────────────────────────────────────────
     PRODUCT MODAL  (ProductModal)
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
    modalPanel.scrollTop = 0;
    const body = modalPanel.querySelector('.gx-modal-body');
    if (body) body.scrollTop = 0;
  }

  function chipList(arr, empty) {
    if (!arr || !arr.length) return `<span class="gx-tag gx-tag--muted">${empty}</span>`;
    return arr.map(o => `<span class="gx-tag">${o}</span>`).join('');
  }

  function populateModal(p) {
    const catLabel = SLUG_TO_LABEL[p.category] || p.category;
    const genderLabel = p.gender.charAt(0).toUpperCase() + p.gender.slice(1);

    $('modalImg').src = p.image;
    $('modalImg').alt = `${p.name}  ${catLabel}`;
    $('modalEyebrow').textContent = `${genderLabel} · ${catLabel}`;
    $('modalName').textContent = p.name;
    $('modalDesc').textContent = p.description;
    $('modalCounter').textContent = `${state.modalIndex + 1} / ${state.filtered.length}`;

    // Spec table
    $('modalSpecs').innerHTML = [
      ['Fabric', p.fabric.replace(/^\d+\s*GSM\s*/i, '')],
      ['Weight', `${p.gsm} GSM`],
      ['MOQ', `${p.moq} pcs`],
      ['Lead Time', p.leadTime],
      ['Manufacturing', p.manufacturingType],
      ['Export Markets', p.exportCountries],
    ].map(([k, v]) => `
      <div class="gx-spec">
        <span class="gx-spec-k">${k}</span>
        <span class="gx-spec-v">${v}</span>
      </div>`).join('');

    // Capability badges
    const caps = [];
    if (p.tags.oem) caps.push('OEM');
    if (p.tags.odm) caps.push('ODM');
    if (p.tags.privatelabel) caps.push('Private Label');
    caps.push('Export Ready');
    $('modalCaps').innerHTML = caps.map(c => `<span class="gx-cap gx-cap--lg">${c}</span>`).join('');

    // Colours
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

    // Sizes
    $('modalSizes').innerHTML = p.sizes.map((s, i) =>
      `<button class="gx-size${i === 0 ? ' active' : ''}">${s}</button>`).join('');
    $('modalSizes').querySelectorAll('.gx-size').forEach(chip => {
      chip.addEventListener('click', () => {
        $('modalSizes').querySelectorAll('.gx-size').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
      });
    });

    // Customization groups
    $('modalPrinting').innerHTML = chipList(p.printingOptions, 'On request');
    $('modalEmbroidery').innerHTML = chipList(p.embroideryOptions, 'Not applicable');
    $('modalLabels').innerHTML = chipList(p.labelOptions, 'Standard woven label');
    $('modalPackaging').innerHTML = chipList(p.packagingOptions, 'Poly bag');

    // Footer actions
    $('modalZoomBtn').onclick = () => {
      const idx = state.filtered.findIndex(x => x.id === p.id);
      closeModal();
      openLightbox(idx >= 0 ? idx : 0);
    };
    $('modalQuoteBtn').onclick = () => { closeModal(); scrollToQuote(p.name); };
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalPrev) modalPrev.addEventListener('click', () => navModal(-1));
  if (modalNext) modalNext.addEventListener('click', () => navModal(1));
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
    else {
      lbImg.classList.add('fading');
      setTimeout(() => { apply(); lbImg.classList.remove('fading'); }, 140);
    }
    if (lbName) lbName.textContent = p.name;
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

  if (lbPrev) lbPrev.addEventListener('click', () => navLightbox(-1));
  if (lbNext) lbNext.addEventListener('click', () => navLightbox(1));
  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lbZoomIn) lbZoomIn.addEventListener('click', () => setZoom(state.zoom + 0.5));
  if (lbZoomOut) lbZoomOut.addEventListener('click', () => setZoom(state.zoom - 0.5));
  if (lbFit) lbFit.addEventListener('click', () => setZoom(1));
  if (lb) lb.addEventListener('click', (e) => { if (e.target === lb || e.target === lbStage) closeLightbox(); });

  // Wheel zoom
  if (lbStage) {
    lbStage.addEventListener('wheel', (e) => {
      if (!lb.classList.contains('active')) return;
      e.preventDefault();
      setZoom(state.zoom + (e.deltaY < 0 ? 0.3 : -0.3));
    }, { passive: false });
  }
  // Double-click zoom
  if (lbImg) {
    lbImg.addEventListener('dblclick', (e) => { e.preventDefault(); setZoom(state.zoom > 1 ? 1 : 2.5); });
    lbImg.addEventListener('click', (e) => { if (state.zoom === 1) { e.stopPropagation(); setZoom(2); } });
  }
  // Drag to pan when zoomed
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
  // Pinch zoom (two-pointer)
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

  /* Swipe navigation (lightbox + modal) */
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
     GLOBAL KEYBOARD
  ──────────────────────────────────────────────────────────── */
  document.addEventListener('keydown', (e) => {
    if (lb && lb.classList.contains('active')) {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') navLightbox(-1);
      else if (e.key === 'ArrowRight') navLightbox(1);
      else if (e.key === '+' || e.key === '=') setZoom(state.zoom + 0.5);
      else if (e.key === '-') setZoom(state.zoom - 0.5);
      else if (e.key === '0') setZoom(1);
      return;
    }
    if (modalOverlay && modalOverlay.classList.contains('active')) {
      if (e.key === 'Escape') closeModal();
      else if (e.key === 'ArrowLeft') navModal(-1);
      else if (e.key === 'ArrowRight') navModal(1);
    }
  });

  /* ────────────────────────────────────────────────────────────
     PAGINATION / EMPTY STATE / QUOTE SCROLL
  ──────────────────────────────────────────────────────────── */
  if (viewMoreBtn) viewMoreBtn.addEventListener('click', () => {
    const before = grid.querySelectorAll('.gx-card').length;
    shownCount += PAGE_SIZE;
    renderGallery();
    // focus first newly added card for keyboard users
    const cards = grid.querySelectorAll('.gx-card');
    if (cards[before]) cards[before].focus();
  });

  function resetAll() {
    state.level1 = 'all'; state.level1type = 'all'; state.subcat = 'all';
    shownCount = PAGE_SIZE;
    renderLevel1();
    renderLevel2();
    renderGallery();
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  if (emptyReset) emptyReset.addEventListener('click', resetAll);

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
      const sel = document.getElementById('fproduct');
      if (sel && productName) {
        const match = [...sel.options].find(o => productName.toLowerCase().includes(o.value.toLowerCase()) && o.value);
        if (match) sel.value = match.value;
      }
    }, 650);
  }
  // Expose for the CTA button in markup
  window.stitchronixQuote = scrollToQuote;

  /* ────────────────────────────────────────────────────────────
     INIT
  ──────────────────────────────────────────────────────────── */
  renderLevel1();
  renderLevel2();
  renderGallery();
})();
