/* ============================================================
   STITCHRONIX PREMIUM GALLERY & B2B PRODUCT CATALOG
   ============================================================ */

(function () {
  'use strict';

  /* ── Product Data ─────────────────────────────────────────── */
  const PRODUCTS = [
    {
      id: 1,
      name: 'Heavyweight Pullover Hoodie',
      gender: 'men',
      category: 'hoodies',
      image: 'images/img-01.jpeg',
      fabric: 'French Terry',
      gsm: 380,
      colors: ['#1a1a1a','#f5f5f5','#1e3a5f','#6b2020','#1e3d20'],
      colorNames: ['Jet Black','White','Navy','Burgundy','Forest Green'],
      sizes: ['XS','S','M','L','XL','XXL','XXXL'],
      moq: 100,
      manufacturingType: 'OEM / ODM',
      isNew: false,
      isBestseller: true,
      description: 'Premium heavyweight pullover hoodie built from 380 GSM brushed-back French Terry. Features a kangaroo pocket, ribbed cuffs, and double-needle stitching throughout. Available in custom colorways on Pantone match.',
      printingOptions: ['Screen Print','DTF Print','Puff Print','Embroidery','Sublimation'],
      embroideryOptions: ['Chest Logo','Sleeve Badge','Back Panel','Hood Interior'],
      packagingOptions: ['Poly Bag','Flat-Pack Box','Hanger Pack','Custom Branded Box'],
      leadTime: '3–4 Weeks',
      exportCountries: 'USA, UK, Germany, France, Australia',
      tag: 'Bestseller',
    },
    {
      id: 2,
      name: 'Full-Zip Streetwear Hoodie',
      gender: 'men',
      category: 'hoodies',
      image: 'images/img-02.jpeg',
      fabric: 'Fleece Cotton',
      gsm: 350,
      colors: ['#1a1a1a','#2c2c2c','#3b2f4a','#2a3a2a'],
      colorNames: ['Jet Black','Charcoal','Deep Plum','Olive'],
      sizes: ['S','M','L','XL','XXL'],
      moq: 100,
      manufacturingType: 'OEM / ODM',
      isNew: true,
      isBestseller: false,
      description: 'Precision-cut full-zip hoodie with YKK zippers, drawcord hood, and flat-lock seams. A staple for streetwear private labels with consistent sizing and clean finishing.',
      printingOptions: ['Screen Print','DTF Print','Embroidery'],
      embroideryOptions: ['Chest Logo','Sleeve Stripe','Back Panel'],
      packagingOptions: ['Poly Bag','Hanger Pack','Box Pack'],
      leadTime: '3–4 Weeks',
      exportCountries: 'UK, Netherlands, UAE, Canada',
      tag: 'New In',
    },
    {
      id: 3,
      name: 'Minimalist Lounge Hoodie',
      gender: 'men',
      category: 'hoodies',
      image: 'images/img-03.jpeg',
      fabric: 'Fleece Cotton',
      gsm: 320,
      colors: ['#e8e0d0','#d4c5a9','#c9b99a','#a8a39e'],
      colorNames: ['Sand','Warm Linen','Caramel','Ash'],
      sizes: ['S','M','L','XL','XXL'],
      moq: 100,
      manufacturingType: 'OEM / ODM',
      isNew: false,
      isBestseller: false,
      description: 'Clean-line minimalist hoodie in neutral toned yarns. Designed for luxury loungewear and lifestyle brands who prioritize fabric hand-feel and refined silhouette over embellishment.',
      printingOptions: ['Tonal Embroidery','Woven Label','Suede Print'],
      embroideryOptions: ['Small Chest Logo','Hem Label','Sleeve Text'],
      packagingOptions: ['Premium Box','Tissue Wrap','Poly Bag'],
      leadTime: '3–4 Weeks',
      exportCountries: 'USA, UK, Germany, Sweden, Denmark',
      tag: null,
    },
    {
      id: 4,
      name: 'Oversized Fleece Hoodie',
      gender: 'men',
      category: 'hoodies',
      image: 'images/img-04.jpeg',
      fabric: 'Polar Fleece',
      gsm: 400,
      colors: ['#1a1a1a','#ffffff','#2d4a8a','#8b4513'],
      colorNames: ['Black','White','Royal Blue','Brown'],
      sizes: ['M','L','XL','XXL','XXXL'],
      moq: 150,
      manufacturingType: 'ODM / Private Label',
      isNew: false,
      isBestseller: false,
      description: 'Boxy oversized silhouette in 400 GSM polar fleece. Extra-deep kangaroo pocket, dropped shoulders, and extended back hem. A high-demand style for streetwear and fashion brands.',
      printingOptions: ['Screen Print','DTF Print','Vinyl Graphics','Embroidery'],
      embroideryOptions: ['Oversized Back Logo','Chest Patch','Sleeve Wordmark'],
      packagingOptions: ['Poly Bag','Flat-Pack Box'],
      leadTime: '4–5 Weeks',
      exportCountries: 'USA, Germany, Italy, Australia',
      tag: null,
    },
    {
      id: 5,
      name: 'Oversized Supima Cotton Tee',
      gender: 'men',
      category: 'tshirts',
      image: 'images/img-05.jpeg',
      fabric: 'Supima Cotton',
      gsm: 220,
      colors: ['#1a1a1a','#f5f5f5','#b8c4bb','#c4a882','#8b7355'],
      colorNames: ['Black','White','Sage','Sand','Camel'],
      sizes: ['XS','S','M','L','XL','XXL'],
      moq: 100,
      manufacturingType: 'OEM / ODM',
      isNew: false,
      isBestseller: true,
      description: '220 GSM 100% Supima Cotton oversized tee with garment-dyed finish. Features a boxy fit, dropped shoulders, and clean hemline. Perfect for premium basics brands.',
      printingOptions: ['Screen Print','DTF','Discharge Print','Pigment Dye'],
      embroideryOptions: ['Small Chest Logo','Left Chest','Sleeve Brand'],
      packagingOptions: ['Poly Bag','Box Pack','Folded & Tagged'],
      leadTime: '2–3 Weeks',
      exportCountries: 'USA, UK, UAE, France',
      tag: 'Bestseller',
    },
    {
      id: 6,
      name: 'Merino Piqué Polo Shirt',
      gender: 'men',
      category: 'polo',
      image: 'images/img-06.jpeg',
      fabric: 'Piqué Cotton',
      gsm: 200,
      colors: ['#1a1a1a','#f5f5f5','#1e3a5f','#1e3d20','#8b0000'],
      colorNames: ['Black','White','Navy','Green','Burgundy'],
      sizes: ['S','M','L','XL','XXL'],
      moq: 100,
      manufacturingType: 'OEM / ODM',
      isNew: false,
      isBestseller: false,
      description: 'Classic piqué polo shirt with 2-button placket, ribbed collar, and branded heat-transfer neck label. Suitable for corporate uniforms, sports clubs, and retail brands.',
      printingOptions: ['Embroidery','Screen Print','Woven Patch'],
      embroideryOptions: ['Left Chest Logo','Right Chest','Sleeve Band'],
      packagingOptions: ['Poly Bag','Hanger Pack','Box Pack'],
      leadTime: '2–3 Weeks',
      exportCountries: 'UAE, Saudi Arabia, UK, Netherlands',
      tag: null,
    },
    {
      id: 7,
      name: 'Graphic Drop-Shoulder Tee',
      gender: 'men',
      category: 'tshirts',
      image: 'images/img-07.jpeg',
      fabric: 'Ring-Spun Cotton',
      gsm: 200,
      colors: ['#1a1a1a','#2c2c2c','#4a3f35','#3d3d3d'],
      colorNames: ['Black','Charcoal','Mocha','Graphite'],
      sizes: ['S','M','L','XL','XXL'],
      moq: 100,
      manufacturingType: 'OEM / ODM',
      isNew: true,
      isBestseller: false,
      description: 'Drop-shoulder boxy tee in 200 GSM ring-spun cotton with a lived-in texture. Pairs with all decoration methods for streetwear and graphic tee brands.',
      printingOptions: ['Screen Print','DTF','Discharge Print'],
      embroideryOptions: ['Chest Patch','Sleeve Wordmark'],
      packagingOptions: ['Poly Bag','Flat-Pack Box'],
      leadTime: '2–3 Weeks',
      exportCountries: 'USA, UK, Germany, Australia',
      tag: 'New In',
    },
    {
      id: 8,
      name: 'Performance Athletic Wear',
      gender: 'men',
      category: 'sportswear',
      image: 'images/img-08.jpeg',
      fabric: 'Interlock Polyester',
      gsm: 160,
      colors: ['#1a1a1a','#1e3a5f','#cc0000','#004d00','#ff6600'],
      colorNames: ['Black','Navy','Red','Green','Orange'],
      sizes: ['S','M','L','XL','XXL'],
      moq: 150,
      manufacturingType: 'OEM / Sublimation',
      isNew: false,
      isBestseller: true,
      description: '160 GSM 100% polyester interlock fabric with moisture-wicking and anti-microbial treatment. Flatlock seams for reduced chafing. Designed for team kits, clubs, and performance brands.',
      printingOptions: ['Sublimation','Screen Print','Heat Transfer','Vinyl Graphics'],
      embroideryOptions: ['Club Badge','Sponsor Logo','Name & Number'],
      packagingOptions: ['Poly Bag','Individual Label','Bulk Carton'],
      leadTime: '3–4 Weeks',
      exportCountries: 'UK, USA, UAE, Australia, Saudi Arabia',
      tag: 'Bestseller',
    },
    {
      id: 9,
      name: 'Athletic Compression Shorts',
      gender: 'men',
      category: 'shorts',
      image: 'images/img-09.jpeg',
      fabric: 'Spandex Blend',
      gsm: 180,
      colors: ['#1a1a1a','#1e3a5f','#cc0000'],
      colorNames: ['Black','Navy','Red'],
      sizes: ['S','M','L','XL','XXL'],
      moq: 100,
      manufacturingType: 'OEM',
      isNew: false,
      isBestseller: false,
      description: '4-way stretch compression shorts in 80% polyester / 20% spandex. Moisture-wicking, breathable mesh panels at the inseam for ventilation. Elastic waistband with inner cord.',
      printingOptions: ['Sublimation','Screen Print','Woven Patch'],
      embroideryOptions: ['Side Panel Logo','Waistband Brand'],
      packagingOptions: ['Poly Bag','Hanger Pack'],
      leadTime: '2–3 Weeks',
      exportCountries: 'UK, UAE, Australia, Canada',
      tag: null,
    },
    {
      id: 10,
      name: 'Dry-Fit Training Kit',
      gender: 'men',
      category: 'sportswear',
      image: 'images/img-10.jpeg',
      fabric: 'Dry-Fit Polyester',
      gsm: 140,
      colors: ['#1a1a1a','#ffffff','#1e3a5f','#2a3a2a'],
      colorNames: ['Black','White','Navy','Olive'],
      sizes: ['S','M','L','XL','XXL'],
      moq: 100,
      manufacturingType: 'OEM / ODM',
      isNew: true,
      isBestseller: false,
      description: '140 GSM ultra-lightweight dry-fit polyester training shirt. Designed for gym wear and performance brands. Features raglan sleeves, underarm mesh gusset, and clean DTF logo application.',
      printingOptions: ['Screen Print','DTF','Sublimation'],
      embroideryOptions: ['Left Chest Logo'],
      packagingOptions: ['Poly Bag','Folded Flat-Pack'],
      leadTime: '2–3 Weeks',
      exportCountries: 'USA, UK, UAE, Australia',
      tag: 'New In',
    },
    {
      id: 11,
      name: 'Sublimated Team Kit',
      gender: 'men',
      category: 'sportswear',
      image: 'images/img-11.jpeg',
      fabric: 'Sublimation Polyester',
      gsm: 150,
      colors: ['#cc0000','#1e3a5f','#1a1a1a','#006633'],
      colorNames: ['Red','Navy','Black','Green'],
      sizes: ['XS','S','M','L','XL','XXL','XXXL'],
      moq: 150,
      manufacturingType: 'Full Sublimation',
      isNew: false,
      isBestseller: false,
      description: 'All-over sublimation printed team kit. Unlimited colour and design capability across panels. Consistent print registration guaranteed. Ideal for football, cricket, and esports teams.',
      printingOptions: ['Full Sublimation All-Over','Cut & Sew Panel Design'],
      embroideryOptions: ['Badge Only (post-sublimation)'],
      packagingOptions: ['Poly Bag','Individual Label'],
      leadTime: '3–4 Weeks',
      exportCountries: 'UK, UAE, Australia, Qatar, Kuwait',
      tag: null,
    },
    {
      id: 12,
      name: 'Coordinated Tracksuit Set',
      gender: 'men',
      category: 'tracksuits',
      image: 'images/img-12.jpeg',
      fabric: 'French Terry',
      gsm: 300,
      colors: ['#1a1a1a','#f5f5f5','#1e3a5f','#2a3a2a'],
      colorNames: ['Black','White','Navy','Olive'],
      sizes: ['S','M','L','XL','XXL'],
      moq: 150,
      manufacturingType: 'OEM / ODM',
      isNew: false,
      isBestseller: true,
      description: 'Premium coordinated tracksuit in 300 GSM French Terry. Zip-up jacket with tape detailing and matching jogger. Features custom dye-to-match zippers, ribbed waistband, and custom cuffs.',
      printingOptions: ['Embroidery','Screen Print','Chenille Patch','DTF'],
      embroideryOptions: ['Chest Logo','Leg Stripe','Back Panel Text'],
      packagingOptions: ['Poly Bag (Set)','Flat-Pack Box','Hanger Pack'],
      leadTime: '4–5 Weeks',
      exportCountries: 'USA, UK, Germany, France, Italy',
      tag: 'Bestseller',
    },
    {
      id: 13,
      name: 'Streetwear Jogger Set',
      gender: 'men',
      category: 'tracksuits',
      image: 'images/img-13.jpeg',
      fabric: 'Brushed Fleece',
      gsm: 320,
      colors: ['#1a1a1a','#2c2c2c','#3b2f4a','#4a3527'],
      colorNames: ['Black','Charcoal','Plum','Brown'],
      sizes: ['S','M','L','XL','XXL','XXXL'],
      moq: 100,
      manufacturingType: 'OEM / Private Label',
      isNew: false,
      isBestseller: false,
      description: 'Streetwear-ready brushed fleece jogger set with side taping, custom cord tips, and zip pockets. Coordinated crewneck top with matching jogger. High demand for streetwear and luxury sportswear labels.',
      printingOptions: ['Screen Print','Embroidery','Chenille Patch'],
      embroideryOptions: ['Chest Logo','Hip Logo','Back Wordmark'],
      packagingOptions: ['Poly Bag (Set)','Premium Box'],
      leadTime: '3–4 Weeks',
      exportCountries: 'UK, USA, Netherlands, Belgium',
      tag: null,
    },
    {
      id: 14,
      name: 'Premium Two-Piece Tracksuit',
      gender: 'men',
      category: 'tracksuits',
      image: 'images/img-14.jpeg',
      fabric: 'Terry Cotton',
      gsm: 340,
      colors: ['#1a1a1a','#f5f5f5','#cc8800','#8b0000'],
      colorNames: ['Black','White','Gold','Burgundy'],
      sizes: ['S','M','L','XL','XXL'],
      moq: 150,
      manufacturingType: 'ODM / Private Label',
      isNew: true,
      isBestseller: false,
      description: 'High-end two-piece tracksuit in 340 GSM terry cotton blend. Features structured shoulder seams, branded drawcord ends, and premium YKK hardware. Ideal for luxury athleisure collections.',
      printingOptions: ['Embroidery','Woven Label','Metal Badge'],
      embroideryOptions: ['Chest Logo','Arm Stripe','Back Graphic'],
      packagingOptions: ['Premium Box','Tissue Wrap','Hanger Pack'],
      leadTime: '4–5 Weeks',
      exportCountries: 'USA, UK, Germany, France, Switzerland',
      tag: 'New In',
    },
    {
      id: 15,
      name: 'Premium Women\'s Fleece Hoodie',
      gender: 'women',
      category: 'hoodies',
      image: 'images/img-03.jpeg',
      fabric: 'Fleece Cotton',
      gsm: 320,
      colors: ['#f5f5f5', '#1a1a1a', '#e6c3c3', '#b5c0d0'],
      colorNames: ['Off-White', 'Black', 'Dusty Rose', 'Slate Blue'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      moq: 100,
      manufacturingType: 'OEM / ODM',
      isNew: true,
      isBestseller: false,
      description: 'Premium women\'s cropped fleece hoodie, constructed from 320 GSM fleece cotton. Features a relaxed hood, drop shoulders, and customized ribbing.',
      printingOptions: ['Screen Print', 'DTF Print', 'Embroidery'],
      embroideryOptions: ['Chest Print', 'Sleeve Logo'],
      packagingOptions: ['Poly Bag', 'Custom Branded Box'],
      leadTime: '3–4 Weeks',
      exportCountries: 'USA, Germany, UK',
      tag: 'New In',
    },
    {
      id: 16,
      name: 'Women\'s Oversized Crop Tee',
      gender: 'women',
      category: 'tshirts',
      image: 'images/img-05.jpeg',
      fabric: 'Organic Cotton',
      gsm: 180,
      colors: ['#f5f5f5', '#1a1a1a', '#e5dfd3'],
      colorNames: ['Off-White', 'Black', 'Oatmeal'],
      sizes: ['XS', 'S', 'M', 'L'],
      moq: 100,
      manufacturingType: 'OEM / ODM',
      isNew: false,
      isBestseller: true,
      description: 'Organic cotton boxy crop tee with premium hand-feel. Heavyweight single jersey fabric with custom garment dye options.',
      printingOptions: ['Screen Print', 'Discharge Print'],
      embroideryOptions: ['Tonal Chest Logo'],
      packagingOptions: ['Poly Bag'],
      leadTime: '2–3 Weeks',
      exportCountries: 'USA, UK, France',
      tag: 'Bestseller',
    },
    {
      id: 17,
      name: 'Women\'s Squat-Proof Leggings',
      gender: 'women',
      category: 'leggings',
      image: 'images/img-09.jpeg',
      fabric: 'Nylon Spandex',
      gsm: 240,
      colors: ['#1a1a1a', '#2c3539', '#4b2a4a'],
      colorNames: ['Black', 'Charcoal', 'Deep Plum'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      moq: 150,
      manufacturingType: 'OEM',
      isNew: false,
      isBestseller: true,
      description: 'High-performance squat-proof gym leggings. Features 4-way stretch fabric, high-waisted bands, and flatlock anti-chafing seams.',
      printingOptions: ['Heat Transfer Logo', 'Silicone Print'],
      embroideryOptions: [],
      packagingOptions: ['Poly Bag'],
      leadTime: '3–4 Weeks',
      exportCountries: 'UK, Australia, Germany',
      tag: 'Bestseller',
    },
    {
      id: 18,
      name: 'Women\'s Seamless Sport Bra',
      gender: 'women',
      category: 'sportswear',
      image: 'images/img-10.jpeg',
      fabric: 'Polyester Blend',
      gsm: 220,
      colors: ['#1a1a1a', '#f5f5f5', '#a3b5a2'],
      colorNames: ['Black', 'Off-White', 'Sage Green'],
      sizes: ['XS', 'S', 'M', 'L'],
      moq: 100,
      manufacturingType: 'OEM / ODM',
      isNew: true,
      isBestseller: false,
      description: 'Seamless high-support gym bra with moisture-wicking and removable cups. Designed for sportswear private labels.',
      printingOptions: ['Heat Transfer'],
      embroideryOptions: [],
      packagingOptions: ['Poly Bag'],
      leadTime: '3–4 Weeks',
      exportCountries: 'USA, UAE, Australia',
      tag: 'New In',
    },
    {
      id: 19,
      name: 'Women\'s Coordinated Lounge Set',
      gender: 'women',
      category: 'tracksuits',
      image: 'images/img-12.jpeg',
      fabric: 'French Terry',
      gsm: 300,
      colors: ['#e5dfd3', '#2c2c2c', '#d1c2bc'],
      colorNames: ['Oatmeal', 'Charcoal', 'Taupe'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      moq: 100,
      manufacturingType: 'OEM / ODM',
      isNew: false,
      isBestseller: false,
      description: 'Coordinated women\'s lounge set featuring wide-leg pants and a mock neck sweatshirt. Brushed French Terry interior for supreme softness.',
      printingOptions: ['Embroidery', 'Screen Print'],
      embroideryOptions: ['Left Chest Logo', 'Hip Branding'],
      packagingOptions: ['Poly Bag (Set)', 'Custom Box'],
      leadTime: '4–5 Weeks',
      exportCountries: 'USA, UK, Sweden',
      tag: null,
    },
    {
      id: 20,
      name: 'Women\'s Piqué Polo',
      gender: 'women',
      category: 'polo',
      image: 'images/img-06.jpeg',
      fabric: 'Piqué Cotton',
      gsm: 180,
      colors: ['#f5f5f5', '#1a1a1a', '#1e3a5f'],
      colorNames: ['White', 'Black', 'Navy'],
      sizes: ['S', 'M', 'L', 'XL'],
      moq: 100,
      manufacturingType: 'OEM / ODM',
      isNew: false,
      isBestseller: false,
      description: 'Tailored fit women\'s piqué polo shirt. Features a narrow 3-button placket and custom flat-knit collar.',
      printingOptions: ['Embroidery', 'Screen Print'],
      embroideryOptions: ['Left Chest Logo'],
      packagingOptions: ['Poly Bag'],
      leadTime: '2–3 Weeks',
      exportCountries: 'UK, Netherlands, UAE',
      tag: null,
    },
    {
      id: 21,
      name: 'Kids Fleece Pullover Hoodie',
      gender: 'kids',
      category: 'hoodies',
      image: 'images/img-01.jpeg',
      fabric: 'Brushed Fleece',
      gsm: 280,
      colors: ['#2c4a8a', '#cc0000', '#ffaa00', '#1a1a1a'],
      colorNames: ['Royal Blue', 'Red', 'Yellow', 'Black'],
      sizes: ['2T', '4T', 'YS', 'YM', 'YL'],
      moq: 150,
      manufacturingType: 'OEM / ODM',
      isNew: false,
      isBestseller: true,
      description: 'Soft, heavyweight children\'s hoodie with brushed fleece interior. No drawcord for safety compliance.',
      printingOptions: ['Screen Print', 'DTF Print'],
      embroideryOptions: ['Chest Applique'],
      packagingOptions: ['Poly Bag'],
      leadTime: '3–4 Weeks',
      exportCountries: 'USA, UK, Canada',
      tag: 'Bestseller',
    },
    {
      id: 22,
      name: 'Kids Everyday Cotton Tee',
      gender: 'kids',
      category: 'tshirts',
      image: 'images/img-07.jpeg',
      fabric: 'Combed Cotton',
      gsm: 160,
      colors: ['#ffffff', '#2c2c2c', '#89cff0', '#f4c2c2'],
      colorNames: ['White', 'Charcoal', 'Baby Blue', 'Baby Pink'],
      sizes: ['2T', '4T', 'YS', 'YM', 'YL'],
      moq: 100,
      manufacturingType: 'OEM',
      isNew: true,
      isBestseller: false,
      description: '100% combed cotton jersey kids crewneck tee. Soft seaming prevents irritation on children\'s skin.',
      printingOptions: ['Water-based Screen Print', 'DTF'],
      embroideryOptions: [],
      packagingOptions: ['Poly Bag'],
      leadTime: '2–3 Weeks',
      exportCountries: 'USA, UK, Australia',
      tag: 'New In',
    },
    {
      id: 23,
      name: 'Primary School Polo Shirt',
      gender: 'kids',
      category: 'school',
      image: 'images/img-06.jpeg',
      fabric: 'Piqué Poly-Cotton',
      gsm: 200,
      colors: ['#ffffff', '#1e3a5f', '#004d00', '#8b0000'],
      colorNames: ['White', 'Navy', 'Bottle Green', 'Burgundy'],
      sizes: ['YS', 'YM', 'YL', 'YXL'],
      moq: 200,
      manufacturingType: 'OEM / School Contract',
      isNew: false,
      isBestseller: true,
      description: 'Durable school uniform piqué polo shirt. Hard-wearing poly-cotton blend resistant to shrinkage and color fading.',
      printingOptions: ['Embroidery'],
      embroideryOptions: ['School Crest'],
      packagingOptions: ['Poly Bag', 'Bulk Box'],
      leadTime: '3–4 Weeks',
      exportCountries: 'UK, Australia, Canada, Ireland',
      tag: 'Bestseller',
    },
    {
      id: 24,
      name: 'Kids Dry-Fit Sport Tee',
      gender: 'kids',
      category: 'sportswear',
      image: 'images/img-10.jpeg',
      fabric: 'Dry-Fit Polyester',
      gsm: 130,
      colors: ['#1a1a1a', '#cc0000', '#1e3a5f'],
      colorNames: ['Black', 'Red', 'Navy'],
      sizes: ['YS', 'YM', 'YL'],
      moq: 150,
      manufacturingType: 'OEM / Sublimation',
      isNew: false,
      isBestseller: false,
      description: 'Lightweight kids performance activewear tee. Quick-drying and highly breathable for youth sports clubs.',
      printingOptions: ['Sublimation', 'Heat Transfer'],
      embroideryOptions: [],
      packagingOptions: ['Poly Bag'],
      leadTime: '3–4 Weeks',
      exportCountries: 'UK, Germany, UAE',
      tag: null,
    },
    {
      id: 25,
      name: 'Kids Fleece Tracksuit Set',
      gender: 'kids',
      category: 'tracksuits',
      image: 'images/img-13.jpeg',
      fabric: 'French Terry',
      gsm: 280,
      colors: ['#1a1a1a', '#e5dfd3', '#2c4a8a'],
      colorNames: ['Black', 'Oatmeal', 'Royal Blue'],
      sizes: ['2T', '4T', 'YS', 'YM', 'YL'],
      moq: 150,
      manufacturingType: 'OEM / ODM',
      isNew: true,
      isBestseller: false,
      description: 'Two-piece matching tracksuit set for children. Heavyweight French Terry provides durability and insulation.',
      printingOptions: ['Screen Print', 'Embroidery'],
      embroideryOptions: ['Left Chest Logo', 'Leg Logo'],
      packagingOptions: ['Poly Bag (Set)'],
      leadTime: '4–5 Weeks',
      exportCountries: 'USA, UK, Sweden',
      tag: 'New In',
    },
    {
      id: 26,
      name: 'Kids Cozy Fleece Shorts',
      gender: 'kids',
      category: 'shorts',
      image: 'images/img-09.jpeg',
      fabric: 'Fleece Cotton',
      gsm: 240,
      colors: ['#2c2c2c', '#e5dfd3', '#2c4a8a'],
      colorNames: ['Charcoal', 'Oatmeal', 'Royal Blue'],
      sizes: ['2T', '4T', 'YS', 'YM', 'YL'],
      moq: 100,
      manufacturingType: 'OEM',
      isNew: false,
      isBestseller: false,
      description: 'Comfortable kids fleece shorts with elastic waistband and internal safety drawstring. Perfect for summer playwear.',
      printingOptions: ['Screen Print', 'DTF'],
      embroideryOptions: [],
      packagingOptions: ['Poly Bag'],
      leadTime: '2–3 Weeks',
      exportCountries: 'USA, UK, Canada',
      tag: null,
    },
  ];

  /* ── Category mapping for display ── */
  const CAT_MAP = {
    hoodies: 'Hoodies',
    tshirts: 'T-Shirts',
    polo: 'Polo Shirts',
    sportswear: 'Sportswear',
    tracksuits: 'Tracksuits',
    school: 'School Uniforms',
    shorts: 'Shorts',
    leggings: 'Leggings',
  };

  /* ── Level 2 Subcategory Config ── */
  const SUBCATS = {
    men: [
      { label: 'T-Shirts', slug: 'tshirts' },
      { label: 'Polo Shirts', slug: 'polo' },
      { label: 'Hoodies', slug: 'hoodies' },
      { label: 'Tracksuits', slug: 'tracksuits' },
      { label: 'Sportswear', slug: 'sportswear' },
      { label: 'Shorts', slug: 'shorts' }
    ],
    women: [
      { label: 'T-Shirts', slug: 'tshirts' },
      { label: 'Polo Shirts', slug: 'polo' },
      { label: 'Hoodies', slug: 'hoodies' },
      { label: 'Leggings', slug: 'leggings' },
      { label: 'Tracksuits', slug: 'tracksuits' },
      { label: 'Sportswear', slug: 'sportswear' }
    ],
    kids: [
      { label: 'School Uniform', slug: 'school' },
      { label: 'Hoodies', slug: 'hoodies' },
      { label: 'Tracksuits', slug: 'tracksuits' },
      { label: 'Shorts', slug: 'shorts' },
      { label: 'T-Shirts', slug: 'tshirts' },
      { label: 'Sportswear', slug: 'sportswear' }
    ]
  };

  /* ── State Management ── */
  const state = {
    gender: 'all',      /* 'all', 'men', 'women', 'kids', 'sportswear', 'oem', 'odm', 'private' */
    subcat: 'all',      /* Level 2 filter */
    search: '',
    sort: 'default',
    filteredList: [],   /* Cached filtered products list */
    limit: 12,          /* Pagination shown size */
    currentModalIndex: 0,
    lightboxIndex: 0,
    zoomLevel: 1,
    panX: 0,
    panY: 0,
    isDragging: false,
    dragStartX: 0,
    dragStartY: 0
  };

  /* ── DOM References ── */
  const tabL1Buttons     = document.querySelectorAll('.gc-tab-l1');
  const tabsL2Wrap       = document.getElementById('gcTabsL2');
  const gcGrid           = document.getElementById('gcGrid');
  const gcCount          = document.getElementById('gcCount');
  const gcSearch         = document.getElementById('gcSearch');
  const gcSort           = document.getElementById('gcSort');
  const gcEmpty          = document.getElementById('gcEmpty');
  const gcEmptyReset     = document.getElementById('gcEmptyReset');
  const gcLoadMore       = document.getElementById('gcLoadMore');
  const gcLoadMoreBtn    = document.getElementById('gcLoadMoreBtn');

  /* Modal DOM */
  const gcModal          = document.getElementById('gcModal');
  const gcModalBackdrop  = document.getElementById('gcModalBackdrop');
  const gcModalPrev      = document.getElementById('gcModalPrev');
  const gcModalNext      = document.getElementById('gcModalNext');
  const gcModalClose     = document.getElementById('gcModalClose');
  const gcmImg           = document.getElementById('gcmImg');
  const gcmFullscreenBtn = document.getElementById('gcmFullscreenBtn');
  const gcmColors        = document.getElementById('gcmColors');
  const gcmSizes         = document.getElementById('gcmSizes');
  const gcmCatLabel      = document.getElementById('gcmCatLabel');
  const gcmProductName   = document.getElementById('gcmProductName');
  const gcmProductDesc   = document.getElementById('gcmProductDesc');
  const gcmFabric        = document.getElementById('gcmFabric');
  const gcmGSM           = document.getElementById('gcmGSM');
  const gcmMOQ           = document.getElementById('gcmMOQ');
  const gcmLeadTime      = document.getElementById('gcmLeadTime');
  const gcmMfg           = document.getElementById('gcmMfg');
  const gcmExport        = document.getElementById('gcmExport');
  const gcmPrinting      = document.getElementById('gcmPrinting');
  const gcmEmbroidery    = document.getElementById('gcmEmbroidery');
  const gcmLabels        = document.getElementById('gcmLabels');
  const gcmPackaging     = document.getElementById('gcmPackaging');
  const gcmMfgType       = document.getElementById('gcmMfgType');
  const gcmBadge         = document.getElementById('gcmBadge');
  const gcmLightboxBtn   = document.getElementById('gcmLightboxBtn');
  const gcmQuoteBtn      = document.getElementById('gcmQuoteBtn');

  /* Lightbox DOM */
  const gcLightbox       = document.getElementById('gcLightbox');
  const gclbName         = document.getElementById('gclbName');
  const gclbCounter      = document.getElementById('gclbCounter');
  const gclbZoomIn       = document.getElementById('gclbZoomIn');
  const gclbZoomOut      = document.getElementById('gclbZoomOut');
  const gclbFit          = document.getElementById('gclbFit');
  const gclbClose        = document.getElementById('gclbClose');
  const gclbImg          = document.getElementById('gclbImg');
  const gclbPrev         = document.getElementById('gclbPrev');
  const gclbNext         = document.getElementById('gclbNext');
  const gclbThumbs       = document.getElementById('gclbThumbs');

  /* ── Filter Logic ─────────────────────────────────────────── */
  function applyFiltering() {
    let list = [...PRODUCTS];

    // Primary Tab Filters (Level 1)
    if (state.gender === 'men') {
      list = list.filter(p => p.gender === 'men');
    } else if (state.gender === 'women') {
      list = list.filter(p => p.gender === 'women');
    } else if (state.gender === 'kids') {
      list = list.filter(p => p.gender === 'kids');
    } else if (state.gender === 'sportswear') {
      list = list.filter(p => p.category === 'sportswear');
    } else if (state.gender === 'oem') {
      list = list.filter(p => p.manufacturingType.toLowerCase().includes('oem'));
    } else if (state.gender === 'odm') {
      list = list.filter(p => p.manufacturingType.toLowerCase().includes('odm'));
    } else if (state.gender === 'private') {
      list = list.filter(p => p.manufacturingType.toLowerCase().includes('private'));
    }

    // Subcategory Filters (Level 2)
    if (state.subcat !== 'all') {
      list = list.filter(p => p.category === state.subcat);
    }

    // Search Query
    if (state.search.trim()) {
      const q = state.search.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.fabric.toLowerCase().includes(q) ||
        (CAT_MAP[p.category] || '').toLowerCase().includes(q)
      );
    }

    // Sort Logic
    if (state.sort === 'moq-asc') {
      list.sort((a, b) => a.moq - b.moq);
    } else if (state.sort === 'moq-desc') {
      list.sort((a, b) => b.moq - a.moq);
    } else if (state.sort === 'gsm-asc') {
      list.sort((a, b) => a.gsm - b.gsm);
    } else if (state.sort === 'gsm-desc') {
      list.sort((a, b) => b.gsm - a.gsm);
    } else if (state.sort === 'name-asc') {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (state.sort === 'new') {
      list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    state.filteredList = list;
  }

  /* ── Render Grid ──────────────────────────────────────────── */
  function renderCatalog(resetLimit = false) {
    if (resetLimit) state.limit = 12;
    applyFiltering();

    // Update count display
    if (gcCount) {
      gcCount.innerHTML = `<strong>${state.filteredList.length}</strong> Product${state.filteredList.length !== 1 ? 's' : ''}`;
    }

    gcGrid.innerHTML = '';

    if (state.filteredList.length === 0) {
      gcEmpty.removeAttribute('hidden');
      gcLoadMore.setAttribute('hidden', '');
      return;
    }

    gcEmpty.setAttribute('hidden', '');

    const visibleProducts = state.filteredList.slice(0, state.limit);

    visibleProducts.forEach((product, i) => {
      const card = createCardElement(product, i);
      gcGrid.appendChild(card);
    });

    // Handle Pagination Load More button
    if (state.filteredList.length > state.limit) {
      gcLoadMore.removeAttribute('hidden');
    } else {
      gcLoadMore.setAttribute('hidden', '');
    }
  }

  /* ── Create B2B Product Card Element ──────────────────────── */
  function createCardElement(product, animIndex) {
    const cat = CAT_MAP[product.category] || product.category;
    const card = document.createElement('article');
    card.className = 'gc-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'listitem');
    card.setAttribute('aria-label', `${product.name} - Catalog Card`);

    // Lazy load wrapper with fade-in logic
    const badge = product.isNew
      ? `<span class="gc-card-badge">New Arrival</span>`
      : product.isBestseller
      ? `<span class="gc-card-badge">Bestseller</span>`
      : '';

    card.innerHTML = `
      <div class="gc-card-img-box">
        ${badge}
        <img
          src="${product.image}"
          alt="${product.name}"
          class="gc-card-img gc-loading-img"
          loading="lazy"
          width="320"
          height="400"
          onload="this.classList.remove('gc-loading-img')"
        />
        <div class="gc-card-overlay"></div>
        <div class="gc-card-hover-info">
          <div class="gc-card-hover-tags">
            <span class="gc-card-hover-tag">${product.manufacturingType}</span>
            <span class="gc-card-hover-tag">Pan-Export</span>
          </div>
          <div class="gc-card-hover-buttons">
            <button class="gc-card-btn gc-card-btn--view" data-action="view">View Specs</button>
            <button class="gc-card-btn gc-card-btn--quote" data-action="quote">Quote</button>
          </div>
        </div>
      </div>
      <div class="gc-card-body">
        <span class="gc-card-cat">${cat}</span>
        <h3 class="gc-card-name">${product.name}</h3>
        <p class="gc-card-fabric">${product.fabric} - ${product.gsm} GSM</p>
      </div>
      <div class="gc-card-footer">
        <span class="gc-card-moq">MOQ: <strong>${product.moq} pcs</strong></span>
        <span class="gc-card-footer-link">B2B Details &rarr;</span>
      </div>
    `;

    // Hook events inside card
    const imgBox = card.querySelector('.gc-card-img-box');
    imgBox.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (btn) {
        e.stopPropagation();
        if (btn.dataset.action === 'quote') {
          scrollToQuote(product.name);
        } else {
          openDetailsModal(product);
        }
      } else {
        openDetailsModal(product);
      }
    });

    card.addEventListener('click', (e) => {
      if (!e.target.closest('.gc-card-img-box')) {
        openDetailsModal(product);
      }
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openDetailsModal(product);
      }
    });

    return card;
  }

  /* ── Level 2 Filter Pills Render ───────────────────────────── */
  function updateLevel2Filters(gender) {
    tabsL2Wrap.innerHTML = '';
    if (gender === 'all' || !SUBCATS[gender]) {
      tabsL2Wrap.setAttribute('hidden', '');
      state.subcat = 'all';
      return;
    }

    tabsL2Wrap.removeAttribute('hidden');

    // Create an "All Subcategories" pill
    const allPill = document.createElement('button');
    allPill.className = 'gc-tab-l2 active';
    allPill.textContent = 'All Categories';
    allPill.dataset.slug = 'all';
    allPill.addEventListener('click', () => {
      document.querySelectorAll('.gc-tab-l2').forEach(p => p.classList.remove('active'));
      allPill.classList.add('active');
      state.subcat = 'all';
      renderCatalog(true);
    });
    tabsL2Wrap.appendChild(allPill);

    // Create category specific pills
    SUBCATS[gender].forEach(sub => {
      const pill = document.createElement('button');
      pill.className = 'gc-tab-l2';
      pill.textContent = sub.label;
      pill.dataset.slug = sub.slug;
      pill.addEventListener('click', () => {
        document.querySelectorAll('.gc-tab-l2').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.subcat = sub.slug;
        renderCatalog(true);
      });
      tabsL2Wrap.appendChild(pill);
    });
  }

  /* ── Setup Event Listeners for Filters ─────────────────────── */
  tabL1Buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabL1Buttons.forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      state.gender = btn.dataset.filter;
      state.subcat = 'all';
      updateLevel2Filters(state.gender);
      renderCatalog(true);
    });
  });

  // Search input with basic debounce
  let searchDebounce;
  if (gcSearch) {
    gcSearch.addEventListener('input', () => {
      clearTimeout(searchDebounce);
      searchDebounce = setTimeout(() => {
        state.search = gcSearch.value;
        renderCatalog(true);
      }, 200);
    });
  }

  // Sort dropdown
  if (gcSort) {
    gcSort.addEventListener('change', () => {
      state.sort = gcSort.value;
      renderCatalog(true);
    });
  }

  // Empty state reset
  if (gcEmptyReset) {
    gcEmptyReset.addEventListener('click', () => {
      gcSearch.value = '';
      gcSort.value = 'default';
      state.search = '';
      state.sort = 'default';
      state.gender = 'all';
      state.subcat = 'all';
      tabL1Buttons.forEach(t => t.classList.toggle('active', t.dataset.filter === 'all'));
      updateLevel2Filters('all');
      renderCatalog(true);
    });
  }

  // Pagination Load More button click
  if (gcLoadMoreBtn) {
    gcLoadMoreBtn.addEventListener('click', () => {
      state.limit += 8;
      renderCatalog(false);
    });
  }

  /* ── Quote Redirection ────────────────────────────────────── */
  function scrollToQuote(productName) {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        const msgArea = document.getElementById('fmsg');
        if (msgArea && productName) {
          msgArea.value = `Hello Stitchronix team, I would like to request a custom manufacturing quote for: ${productName}`;
        }
      }, 600);
    }
  }

  /* ================================================================
     QUICK VIEW MODAL MANAGEMENT
     ================================================================ */
  function openDetailsModal(product) {
    const idx = state.filteredList.findIndex(p => p.id === product.id);
    state.currentModalIndex = idx >= 0 ? idx : 0;
    populateModalData(product);
    gcModal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      const closeBtn = document.getElementById('gcModalClose');
      if (closeBtn) closeBtn.focus();
    }, 50);
  }

  function closeDetailsModal() {
    gcModal.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  function navigateModal(dir) {
    if (!state.filteredList.length) return;
    state.currentModalIndex = (state.currentModalIndex + dir + state.filteredList.length) % state.filteredList.length;
    populateModalData(state.filteredList[state.currentModalIndex]);
  }

  function populateModalData(p) {
    const cat = CAT_MAP[p.category] || p.category;

    // Direct texts
    gcmImg.src = p.image;
    gcmImg.alt = p.name;
    gcmProductName.textContent = p.name;
    gcmProductDesc.textContent = p.description;
    gcmCatLabel.textContent = `${p.gender.toUpperCase()} · ${cat}`;
    gcmMfgType.textContent = p.manufacturingType;

    // Specs
    gcmFabric.textContent = p.fabric;
    gcmGSM.textContent = `${p.gsm} GSM`;
    gcmMOQ.textContent = `${p.moq} pcs`;
    gcmLeadTime.textContent = p.leadTime;
    gcmMfg.textContent = p.manufacturingType;
    gcmExport.textContent = p.exportCountries;

    // Badge tag (New / Bestseller)
    if (p.tag) {
      gcmBadge.textContent = p.tag;
      gcmBadge.removeAttribute('hidden');
    } else {
      gcmBadge.setAttribute('hidden', '');
    }

    // Color Swatches
    gcmColors.innerHTML = p.colors.map((c, i) =>
      `<button class="gcm-swatch${i === 0 ? ' selected' : ''}" style="background:${c}" title="${p.colorNames[i]}" aria-label="${p.colorNames[i]}" data-color-name="${p.colorNames[i]}"></button>`
    ).join('') + `<span class="gcm-color-name" id="gcmColorName">${p.colorNames[0]}</span>`;

    gcmColors.querySelectorAll('.gcm-swatch').forEach(sw => {
      sw.addEventListener('click', () => {
        gcmColors.querySelectorAll('.gcm-swatch').forEach(s => s.classList.remove('selected'));
        sw.classList.add('selected');
        const label = document.getElementById('gcmColorName');
        if (label) label.textContent = sw.dataset.colorName;
      });
    });

    // Sizes
    gcmSizes.innerHTML = p.sizes.map(s => `<span class="gcm-size-chip">${s}</span>`).join('');

    // Customize Options
    const wrapTags = (arr) => arr.map(t => `<span class="gcm-custom-tag">${t}</span>`).join('');
    gcmPrinting.innerHTML = wrapTags(p.printingOptions || ['Screen Print', 'Embroidery']);
    gcmEmbroidery.innerHTML = wrapTags(p.embroideryOptions && p.embroideryOptions.length ? p.embroideryOptions : ['Chest Patch', 'Applique']);
    gcmLabels.innerHTML = wrapTags(['Woven Neck Labels', 'Pantone Tags', 'Size Tabs']);
    gcmPackaging.innerHTML = wrapTags(p.packagingOptions || ['Standard Poly Bags', 'Export Carton Box']);

    // Hook CTAs
    gcmLightboxBtn.onclick = () => {
      closeDetailsModal();
      const lbIdx = state.filteredList.indexOf(p);
      openFullscreenLightbox(lbIdx >= 0 ? lbIdx : 0);
    };

    gcmFullscreenBtn.onclick = gcmLightboxBtn.onclick;

    gcmQuoteBtn.onclick = () => {
      closeDetailsModal();
      scrollToQuote(p.name);
    };
  }

  // Hook Modal navigation controls
  if (gcModalClose)    gcModalClose.addEventListener('click', closeDetailsModal);
  if (gcModalBackdrop) gcModalBackdrop.addEventListener('click', closeDetailsModal);
  if (gcModalPrev)     gcModalPrev.addEventListener('click', () => navigateModal(-1));
  if (gcModalNext)     gcModalNext.addEventListener('click', () => navigateModal(1));

  // Touch Swipe for Modal panel
  let modalTouchStartX = 0;
  gcModal.addEventListener('touchstart', e => {
    modalTouchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  gcModal.addEventListener('touchend', e => {
    const diff = modalTouchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 60) {
      navigateModal(diff > 0 ? 1 : -1);
    }
  }, { passive: true });


  /* ================================================================
     FULLSCREEN PREMIUM LIGHTBOX
     ================================================================ */
  function openFullscreenLightbox(index) {
    state.lightboxIndex = index;
    state.zoomLevel = 1;
    state.panX = 0;
    state.panY = 0;

    buildLightboxThumbs();
    updateLightboxStage(true);
    gcLightbox.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    if (gclbImg) gclbImg.focus();
  }

  function closeFullscreenLightbox() {
    gcLightbox.setAttribute('hidden', '');
    document.body.style.overflow = '';
  }

  function navigateLightbox(dir) {
    const size = state.filteredList.length;
    if (!size) return;
    state.lightboxIndex = (state.lightboxIndex + dir + size) % size;
    state.zoomLevel = 1;
    state.panX = 0;
    state.panY = 0;
    updateLightboxStage(false);
  }

  function updateLightboxStage(instant) {
    const p = state.filteredList[state.lightboxIndex];
    if (!p) return;

    if (!instant) {
      gclbImg.style.opacity = '0.3';
      setTimeout(() => {
        gclbImg.src = p.image;
        gclbImg.alt = p.name;
        gclbImg.style.opacity = '1';
      }, 100);
    } else {
      gclbImg.src = p.image;
      gclbImg.alt = p.name;
      gclbImg.style.opacity = '1';
    }

    gclbName.textContent = p.name;
    gclbCounter.textContent = `${state.lightboxIndex + 1} / ${state.filteredList.length}`;

    applyZoomPanTransform();

    // Toggle active thumbnail
    document.querySelectorAll('.gclb-thumb').forEach((th, i) => {
      th.classList.toggle('active', i === state.lightboxIndex);
    });
  }

  function buildLightboxThumbs() {
    gclbThumbs.innerHTML = '';
    state.filteredList.forEach((p, i) => {
      const th = document.createElement('button');
      th.className = 'gclb-thumb' + (i === state.lightboxIndex ? ' active' : '');
      th.setAttribute('aria-label', `Thumbnail view ${p.name}`);
      th.innerHTML = `<img src="${p.image}" alt="" />`;
      th.addEventListener('click', () => {
        state.lightboxIndex = i;
        state.zoomLevel = 1;
        state.panX = 0;
        state.panY = 0;
        updateLightboxStage(false);
      });
      gclbThumbs.appendChild(th);
    });
  }

  function applyZoomPanTransform() {
    if (!gclbImg) return;
    gclbImg.style.transform = `translate(${state.panX}px, ${state.panY}px) scale(${state.zoomLevel})`;
  }

  // Zoom button handlers
  if (gclbZoomIn) {
    gclbZoomIn.addEventListener('click', () => {
      state.zoomLevel = Math.min(state.zoomLevel + 0.5, 4);
      applyZoomPanTransform();
    });
  }
  if (gclbZoomOut) {
    gclbZoomOut.addEventListener('click', () => {
      state.zoomLevel = Math.max(state.zoomLevel - 0.5, 0.8);
      if (state.zoomLevel <= 1) {
        state.panX = 0;
        state.panY = 0;
      }
      applyZoomPanTransform();
    });
  }
  if (gclbFit) {
    gclbFit.addEventListener('click', () => {
      state.zoomLevel = 1;
      state.panX = 0;
      state.panY = 0;
      applyZoomPanTransform();
    });
  }

  // Double click to zoom toggle
  gclbImg.addEventListener('dblclick', (e) => {
    if (state.zoomLevel > 1) {
      state.zoomLevel = 1;
      state.panX = 0;
      state.panY = 0;
    } else {
      state.zoomLevel = 2.5;
    }
    applyZoomPanTransform();
  });

  // Mouse wheel zoom support
  gclbImg.addEventListener('wheel', (e) => {
    e.preventDefault();
    const factor = e.deltaY < 0 ? 0.2 : -0.2;
    state.zoomLevel = Math.max(0.8, Math.min(state.zoomLevel + factor, 4));
    if (state.zoomLevel <= 1) {
      state.panX = 0;
      state.panY = 0;
    }
    applyZoomPanTransform();
  }, { passive: false });

  // Lightbox close and navigation events
  if (gclbClose) gclbClose.addEventListener('click', closeFullscreenLightbox);
  if (gclbPrev)  gclbPrev.addEventListener('click', () => navigateLightbox(-1));
  if (gclbNext)  gclbNext.addEventListener('click', () => navigateLightbox(1));

  // Close lightbox on clicking dark background stage
  gcLightbox.addEventListener('click', (e) => {
    if (e.target.closest('.gclb-stage') && !e.target.closest('#gclbImg') && !e.target.closest('.gclb-nav')) {
      closeFullscreenLightbox();
    }
  });

  // Mouse Drag to Pan zoom
  gclbImg.addEventListener('mousedown', (e) => {
    if (state.zoomLevel <= 1) return;
    state.isDragging = true;
    state.dragStartX = e.clientX - state.panX;
    state.dragStartY = e.clientY - state.panY;
    gclbImg.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', (e) => {
    if (!state.isDragging) return;
    state.panX = e.clientX - state.dragStartX;
    state.panY = e.clientY - state.dragStartY;
    applyZoomPanTransform();
  });

  window.addEventListener('mouseup', () => {
    state.isDragging = false;
    if (gclbImg) {
      gclbImg.style.cursor = state.zoomLevel > 1 ? 'move' : 'default';
    }
  });

  // Mobile pinch / drag pan support
  let touchStartDist = 0;
  let initialZoom = 1;
  gclbImg.addEventListener('touchstart', (e) => {
    if (e.touches.length === 2) {
      touchStartDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      initialZoom = state.zoomLevel;
    } else if (e.touches.length === 1 && state.zoomLevel > 1) {
      state.isDragging = true;
      state.dragStartX = e.touches[0].clientX - state.panX;
      state.dragStartY = e.touches[0].clientY - state.panY;
    }
  }, { passive: true });

  gclbImg.addEventListener('touchmove', (e) => {
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const factor = dist / touchStartDist;
      state.zoomLevel = Math.max(0.8, Math.min(initialZoom * factor, 4));
      applyZoomPanTransform();
    } else if (e.touches.length === 1 && state.isDragging) {
      state.panX = e.touches[0].clientX - state.dragStartX;
      state.panY = e.touches[0].clientY - state.dragStartY;
      applyZoomPanTransform();
    }
  }, { passive: true });

  gclbImg.addEventListener('touchend', () => {
    state.isDragging = false;
  }, { passive: true });

  // Swipe gesture to slide lightbox on mobile
  let lbTouchStartX = 0;
  gcLightbox.addEventListener('touchstart', e => {
    lbTouchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  gcLightbox.addEventListener('touchend', e => {
    // Only trigger navigate if not currently zoomed in
    if (state.zoomLevel > 1.1) return;
    const diff = lbTouchStartX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
      navigateLightbox(diff > 0 ? 1 : -1);
    }
  }, { passive: true });


  /* ================================================================
     KEYBOARD NAVIGATION SUPPORT
     ================================================================ */
  document.addEventListener('keydown', (e) => {
    // Lightbox open hotkeys
    if (gcLightbox && !gcLightbox.hasAttribute('hidden')) {
      if (e.key === 'Escape')     closeFullscreenLightbox();
      if (e.key === 'ArrowLeft')  navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
      if (e.key === '+' || e.key === '=') {
        state.zoomLevel = Math.min(state.zoomLevel + 0.5, 4);
        applyZoomPanTransform();
      }
      if (e.key === '-') {
        state.zoomLevel = Math.max(state.zoomLevel - 0.5, 0.8);
        if (state.zoomLevel <= 1) {
          state.panX = 0;
          state.panY = 0;
        }
        applyZoomPanTransform();
      }
    }
    // Modal open hotkeys
    else if (gcModal && !gcModal.hasAttribute('hidden')) {
      if (e.key === 'Escape')     closeDetailsModal();
      if (e.key === 'ArrowLeft')  navigateModal(-1);
      if (e.key === 'ArrowRight') navigateModal(1);
    }
  });


  /* ── Init ─────────────────────────────────────────────────── */
  renderCatalog(true);

})();
