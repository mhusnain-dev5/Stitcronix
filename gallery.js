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
    { slug: 'hoodies',      label: 'Hoodies' },
    { slug: 'sweatshirts',  label: 'Sweatshirts' },
    { slug: 'knitwear',     label: 'Knitwear' },
    { slug: 'tshirts',      label: 'T-Shirts' },
    { slug: 'polo',         label: 'Polo Shirts' },
    { slug: 'shorts',       label: 'Shorts' },
    { slug: 'trousers',     label: 'Trousers' },
    { slug: 'tracksuits',   label: 'Tracksuits' },
    { slug: 'privatelabel', label: 'Private Label' },
  ];
  /* Singular badge label per slug */
  const BADGE = {
    hoodies: 'Hoodie', sweatshirts: 'Sweatshirt', knitwear: 'Knitwear',
    tshirts: 'T-Shirt', polo: 'Polo Shirt', shorts: 'Shorts',
    trousers: 'Trousers', tracksuits: 'Tracksuit', privatelabel: 'Private Label'
  };

  /* ────────────────────────────────────────────────────────────
     PRODUCTS — each matched to the real garment in its image
  ──────────────────────────────────────────────────────────── */
  const PRODUCTS = [
    {
      id: 1, name: 'Elite Pullover Hoodie', cats: ['hoodies', 'privatelabel'], image: 'https://res.cloudinary.com/fuh0ucvy/image/upload/v1784703583/WhatsApp_Image_2026-07-11_at_16.33.14_1_xzyvnc.jpg',
      fabric: '350 GSM Organic Cotton French Terry', gsm: 350,
      specs: ['350 GSM Heavy French Terry', 'Double-Lined Hood without Drawcords', 'Kangaroo Pocket with Bartacks', 'Ribbed Side Panels'],
      colors: ['#1b1c1e', '#5b636a', '#d7d8da'],
      colorNames: ['Obsidian Black', 'Melange Grey', 'Off-White'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · ODM · Private Label', isNew: false, isBestseller: true,
      description: 'Designed for premium streetwear brands. Constructed from 350 GSM pre-shrunk organic cotton French Terry, featuring double-needle construction and a clean, minimalist silhouette.',
      printingOptions: ['Screen Print', 'High-Density Print', 'Puff Print'],
      embroideryOptions: ['Flat Embroidery', '3D Puff Embroidery'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Custom Cardboard Box'],
      leadTime: '3–4 Weeks', exportCountries: 'USA · UK · Germany · Canada',
    },
    {
      id: 2, name: 'Heavyweight Boxy Hoodie', cats: ['hoodies'], image: 'https://res.cloudinary.com/fuh0ucvy/image/upload/v1784703580/WhatsApp_Image_2026-07-11_at_16.33.12_zn6uyv.jpg',
      fabric: '400 GSM Ultra-Heavy Cotton Fleece', gsm: 400,
      specs: ['400 GSM Loopback Cotton Fleece', 'Boxy Streetwear Fit', 'Drop Shoulder Construction', 'Thick Ribbed Hem and Cuffs'],
      colors: ['#2b2b2b', '#8f8f8f', '#e6e6e6'],
      colorNames: ['Charcoal', 'Heather Grey', 'Chalk'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · ODM', isNew: true, isBestseller: false,
      description: 'A heavy-duty 400 GSM loopback cotton fleece hoodie with a relaxed streetwear cut. Drop-shoulder styling and robust ribbing provide a premium handfeel and long-lasting durability.',
      printingOptions: ['Screen Print', 'DTG Print', 'Discharge Print'],
      embroideryOptions: ['Tonal Sleeve Embroidery', 'Hood Monogram'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag'],
      leadTime: '3–4 Weeks', exportCountries: 'USA · UK · France · Japan',
    },
    {
      id: 3, name: 'Signature French Terry Hoodie', cats: ['hoodies', 'privatelabel'], image: 'https://res.cloudinary.com/fuh0ucvy/image/upload/v1784703578/WhatsApp_Image_2026-07-11_at_16.33.17_y8woxe.jpg',
      fabric: '320 GSM Cotton French Terry', gsm: 320,
      specs: ['320 GSM 100% Cotton', 'Tonal Flat Drawcords', 'Metal Aglets and Eyelets', 'Hidden Zipper Pocket'],
      colors: ['#4c5844', '#1c1c1c', '#efece6'],
      colorNames: ['Olive Drab', 'Pitch Black', 'Oatmeal'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · ODM · Private Label', isNew: false, isBestseller: false,
      description: 'A mid-weight 320 GSM French Terry hoodie with active-lifestyle upgrades. Incorporates custom metal hardware, a hidden side pocket, and custom dye-to-match drawcords.',
      printingOptions: ['Water-based Print', 'Plastisol Print'],
      embroideryOptions: ['Applique Patch', 'Tonal Logo'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Hanger Pack'],
      leadTime: '3–4 Weeks', exportCountries: 'USA · Germany · Australia',
    },
    {
      id: 4, name: 'Athletic Fleece Hoodie', cats: ['hoodies'], image: 'https://res.cloudinary.com/fuh0ucvy/image/upload/v1784703576/WhatsApp_Image_2026-07-11_at_16.33.11_q6qpea.jpg',
      fabric: '300 GSM Performance Cotton-Poly', gsm: 300,
      specs: ['300 GSM Cotton-Poly Blend', 'Moisture-Wicking Brushed Back', 'Raglan Sleeves', 'Flatlock Stitching'],
      colors: ['#0f2240', '#0a0a0a', '#a31d1d'],
      colorNames: ['Navy Blue', 'Black', 'Crimson'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · Private Label', isNew: false, isBestseller: false,
      description: 'Designed for activewear and athletic training lines. Features a performance cotton-poly blend that combines cotton\'s softness with polyester\'s moisture-wicking and shape retention.',
      printingOptions: ['Sublimation Accent', 'Silicone Print'],
      embroideryOptions: ['Left Chest Logo'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag'],
      leadTime: '3–4 Weeks', exportCountries: 'UAE · Saudi Arabia · UK',
    },
    {
      id: 5, name: 'Minimalist Oversized Hoodie', cats: ['hoodies', 'privatelabel'], image: 'https://res.cloudinary.com/fuh0ucvy/image/upload/v1784703497/WhatsApp_Image_2026-07-11_at_18.38.38_aacf2o.jpg',
      fabric: '360 GSM Heavyweight Loopback', gsm: 360,
      specs: ['360 GSM Heavyweight Loopback', 'Clean No-Pocket Front', 'Double-Stitched Seams', 'Custom Inner Neck Taping'],
      colors: ['#9c836a', '#1e2d20', '#1a1a1a'],
      colorNames: ['Taupe', 'Forest Green', 'Black'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · ODM · Private Label', isNew: false, isBestseller: false,
      description: 'A clean, pocketless front hoodie that highlights the structure of 360 GSM loopback cotton. A preferred canvas for high-end streetwear labels and custom brand graphics.',
      printingOptions: ['Discharge Print', 'Screen Print', 'DTF Print'],
      embroideryOptions: ['Back Panel Embroidery', 'Center Chest Logo'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Custom Tissue Wrap'],
      leadTime: '4 Weeks', exportCountries: 'USA · UK · Netherlands · Sweden',
    },
    {
      id: 6, name: 'Tech Fleece Sweat Shorts', cats: ['shorts', 'privatelabel'], image: 'https://res.cloudinary.com/fuh0ucvy/image/upload/v1784703420/WhatsApp_Image_2026-07-11_at_18.32.35_zfexhs.jpg',
      fabric: '280 GSM Double-Knit Cotton-Poly', gsm: 280,
      specs: ['280 GSM Double-Knit Fabric', 'Elastic Waist with Drawcord', 'Zippered Side Pockets', 'Raw Edge / Clean Hem Option'],
      colors: ['#2c3539', '#1a1a1a', '#e5dfd3'],
      colorNames: ['Slate Grey', 'Black', 'Oatmeal'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · ODM · Private Label', isNew: true, isBestseller: false,
      description: 'Premium double-knit sweat shorts with technical details. Features structured zippered pockets, metal aglets, and clean flatlock side seams, perfect for premium active and leisure lines.',
      printingOptions: ['Reflective Print', 'Rubber Print'],
      embroideryOptions: ['Hem Logo'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag'],
      leadTime: '3 Weeks', exportCountries: 'USA · UK · UAE',
    },
    {
      id: 7, name: 'Lounge French Terry Shorts', cats: ['shorts'], image: 'https://res.cloudinary.com/fuh0ucvy/image/upload/v1784703419/WhatsApp_Image_2026-07-11_at_17.27.42_tcwkam.jpg',
      fabric: '240 GSM Soft Cotton Terry', gsm: 240,
      specs: ['240 GSM 100% Cotton', 'Side Slit Pockets', 'Ribbed Elastic Waistband', 'Back Patch Pocket'],
      colors: ['#c4a882', '#1a1a1a', '#5b7194'],
      colorNames: ['Camel', 'Black', 'Dusty Blue'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · Private Label', isNew: false, isBestseller: false,
      description: 'Lightweight and incredibly soft, these 240 GSM cotton French Terry shorts are built for summer lounge collections. Feature a supportive ribbed elastic waist and raw-edge details.',
      printingOptions: ['Water-based Screen Print', 'DTF Print'],
      embroideryOptions: ['Pocket Logo Embroidery'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag'],
      leadTime: '3 Weeks', exportCountries: 'USA · Germany · Australia',
    },
    {
      id: 8, name: 'Classic Crewneck Sweatshirt', cats: ['sweatshirts', 'privatelabel'], image: 'https://res.cloudinary.com/fuh0ucvy/image/upload/v1784703652/WhatsApp_Image_2026-07-11_at_16.33.11_1_lcibbs.jpg',
      fabric: '320 GSM Brushed-Back Fleece', gsm: 320,
      specs: ['320 GSM Cotton-Poly Fleece', 'V-Insert Rib at Collar', 'Ribbed Neckline and Side V-Panels', 'Double-Needle Flatlock Stitched'],
      colors: ['#5b636a', '#1a1a1a', '#ffffff'],
      colorNames: ['Heather Grey', 'Black', 'White'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · ODM · Private Label', isNew: false, isBestseller: true,
      description: 'A traditional athletic crewneck in a heavy 320 GSM brushed fleece. Enhanced with a rib V-insert at the neck and double-stitched seams to retain its silhouette over long-term wear.',
      printingOptions: ['Plastisol Print', 'Discharge Print', 'Screen Print'],
      embroideryOptions: ['Chest Text', 'Sleeve Cuff Icon'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Flat-Pack Box'],
      leadTime: '3–4 Weeks', exportCountries: 'USA · UK · France · Germany',
    },
    {
      id: 9, name: 'Premium Dropped Crewneck', cats: ['sweatshirts'], image: 'https://res.cloudinary.com/fuh0ucvy/image/upload/v1784703654/WhatsApp_Image_2026-07-11_at_16.33.19_yc4eyg.jpg',
      fabric: '420 GSM Luxury Loopback', gsm: 420,
      specs: ['420 GSM 100% Cotton', 'Drop Shoulder Style', 'Wide Structured Sleeves', 'Dye-to-Match Stitching'],
      colors: ['#efece6', '#1a1a1a', '#4a3f35'],
      colorNames: ['Off-White', 'Black', 'Mocha'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · ODM', isNew: false, isBestseller: false,
      description: 'An ultra-heavyweight 420 GSM luxury crewneck featuring wide sleeves and dropped shoulders. Cut from premium long-staple combed cotton loopback for an exceptionally clean drape.',
      printingOptions: ['Silicone Print', 'Puff Print'],
      embroideryOptions: ['Tonal Chest Embroidery'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Premium Gift Box'],
      leadTime: '4 Weeks', exportCountries: 'UK · Denmark · Germany · Japan',
    },
    {
      id: 10, name: 'Luxury Merino Blend Knitwear', cats: ['knitwear', 'privatelabel'], image: 'https://res.cloudinary.com/fuh0ucvy/image/upload/v1784703657/WhatsApp_Image_2026-07-11_at_16.33.15_l0plfg.jpg',
      fabric: '12GG Merino-Cotton Blend', gsm: 280,
      specs: ['12-Gauge Fine Knit', 'Fully Fashioned Sleeves', 'Ribbed Crew Collar', 'Linked Armholes'],
      colors: ['#1e3a8a', '#1f2937', '#b5a287'],
      colorNames: ['Navy', 'Charcoal', 'Oatmeal'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 120,
      manufacturingType: 'OEM · ODM · Private Label', isNew: false, isBestseller: true,
      description: 'A fine-gauge knit sweater crafted from a premium merino wool and long-staple cotton blend. Features fully fashioned armholes and linked seams for a high-end tailored fit.',
      printingOptions: ['Heat-Transfer Logo'],
      embroideryOptions: ['Chest Monogram'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Tissue Wrap', 'Gift Box'],
      leadTime: '4–5 Weeks', exportCountries: 'UK · Germany · Italy · USA',
    },
    {
      id: 11, name: 'Mock-Neck Ribbed Knit Sweater', cats: ['knitwear'], image: 'https://res.cloudinary.com/fuh0ucvy/image/upload/v1784703659/WhatsApp_Image_2026-07-11_at_16.33.13_1_iofuqw.jpg',
      fabric: '9GG Ribbed Cotton Knit', gsm: 320,
      specs: ['9-Gauge Rib Pattern', 'Mock-Neck Style', 'Seamless Side Construction', 'Tailored Cuffs'],
      colors: ['#111827', '#4b5563', '#d97706'],
      colorNames: ['Jet Black', 'Slate Grey', 'Amber'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 120,
      manufacturingType: 'OEM · ODM', isNew: false, isBestseller: false,
      description: 'A medium-weight mock-neck knit structured with a vertical rib pattern. Seamless side panels enhance comfort and drape, rendering it ideal for corporate-wear programs.',
      printingOptions: ['Woven Patch Placement'],
      embroideryOptions: ['Tonal Collar Embroidery'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Tissue Wrap'],
      leadTime: '4–5 Weeks', exportCountries: 'UK · Germany · France',
    },
    {
      id: 12, name: 'Heritage Cable-Knit Sweater', cats: ['knitwear', 'privatelabel'], image: 'https://res.cloudinary.com/fuh0ucvy/image/upload/v1784703662/WhatsApp_Image_2026-07-11_at_16.33.12_1_c0nbrh.jpg',
      fabric: '7GG Cotton-Acrylic Heavy Knit', gsm: 360,
      specs: ['7-Gauge Heritage Cable Knit', 'Thick Ribbed Crew Neck', 'Reinforced Collar Band', 'Linked Side Seams'],
      colors: ['#7f1d1d', '#111827', '#1e3a5f'],
      colorNames: ['Burgundy', 'Black', 'Navy'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 120,
      manufacturingType: 'OEM · ODM · Private Label', isNew: false, isBestseller: false,
      description: 'An authentic vertical cable-knit sweater featuring a heavy 7-gauge construction. Acrylic blending provides durability and warmth, while linked construction guarantees longevity.',
      printingOptions: ['Woven Badge'],
      embroideryOptions: ['Monogram'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Premium Gift Box'],
      leadTime: '4–5 Weeks', exportCountries: 'UK · Germany · USA · Canada',
    },
    {
      id: 13, name: 'Delicate Pointelle Open Knit', cats: ['knitwear'], image: 'https://res.cloudinary.com/fuh0ucvy/image/upload/v1784703664/WhatsApp_Image_2026-07-11_at_16.33.13_kebd57.jpg',
      fabric: '12GG Pointelle Cotton Knit', gsm: 250,
      specs: ['12-Gauge Pointelle Texture', 'Open-Work Breathable Knit', 'Slim Fitted Cuffs', 'Refined Collar Link'],
      colors: ['#e5e7eb', '#f59e0b', '#374151'],
      colorNames: ['Soft Cream', 'Gold', 'Charcoal'],
      sizes: ['S', 'M', 'L', 'XL'], moq: 120,
      manufacturingType: 'OEM · ODM', isNew: true, isBestseller: false,
      description: 'A lightweight, breathable 12-gauge pointelle knit designed with open-work geometrical textures. Highly breathable and refined, engineered for boutique fashion brands.',
      printingOptions: ['Woven Badge Link'],
      embroideryOptions: ['Left Hem Monogram'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Tissue Wrap'],
      leadTime: '4–5 Weeks', exportCountries: 'UK · France · Italy · USA',
    },
    {
      id: 14, name: 'Textured Rib-Stitch Crew', cats: ['knitwear', 'privatelabel'], image: 'https://res.cloudinary.com/fuh0ucvy/image/upload/v1784703667/WhatsApp_Image_2026-07-11_at_16.33.16_irqgyj.jpg',
      fabric: '9GG Rib-Stitch Cotton', gsm: 310,
      specs: ['9-Gauge Chunky Rib-Stitch', 'Heavy Collar Link', 'Linked Armholes', 'Extended Rib Cuffs'],
      colors: ['#d1fae5', '#3b82f6', '#111827'],
      colorNames: ['Sage', 'Royal Blue', 'Black'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 120,
      manufacturingType: 'OEM · ODM · Private Label', isNew: false, isBestseller: false,
      description: 'A modern crewneck sweater in structured 9-gauge rib-stitch. Extended ribbed cuffs and heavy-gauge neck links give this knitwear a highly technical and tailored aesthetic.',
      printingOptions: ['None'],
      embroideryOptions: ['Tonal Chest Logo'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Premium Carton'],
      leadTime: '4–5 Weeks', exportCountries: 'UK · USA · Germany',
    },
    {
      id: 15, name: 'Heavyweight Boxy Graphic Tee', cats: ['tshirts', 'privatelabel'], image: 'https://res.cloudinary.com/fuh0ucvy/image/upload/v1784704149/t03_z5zpur.jpg',
      fabric: '240 GSM Combed Jersey Cotton', gsm: 240,
      specs: ['240 GSM Heavy Cotton Jersey', 'Wide Thick Mock-Neck Rib', 'Relaxed Boxy Fit', 'Double-Needle Hem Stitching'],
      colors: ['#18181b', '#f4f4f5', '#a1a1aa'],
      colorNames: ['Carbon Black', 'White', 'Dusty Grey'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · ODM · Private Label', isNew: false, isBestseller: true,
      description: 'Our premium 240 GSM combed jersey cotton tee with a heavy mock-neck collar. Built to withstand extensive washes, making it a reliable streetwear staple.',
      printingOptions: ['Discharge Print', 'Screen Print', 'Puff Print'],
      embroideryOptions: ['Sleeve Logo', 'Chest Text'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Flat Box'],
      leadTime: '3 Weeks', exportCountries: 'USA · UK · Canada · UAE',
    },
    {
      id: 16, name: 'Classic Fit Supima Tee', cats: ['tshirts'], image: 'https://res.cloudinary.com/fuh0ucvy/image/upload/v1784704141/t04_qvfkpb.jpg',
      fabric: '180 GSM Supima Cotton Jersey', gsm: 180,
      specs: ['180 GSM 100% Supima Cotton', 'Interlock Bound Neckline', 'Fitted Sleeves', 'Reinforced Neck Seam'],
      colors: ['#ffffff', '#09090b', '#3f3f46'],
      colorNames: ['Pure White', 'Pitch Black', 'Charcoal'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · Private Label', isNew: false, isBestseller: false,
      description: 'Composed of 100% premium long-staple Supima cotton for an incredibly soft handfeel and natural silk-like luster. Interlock bound neck seam prevents collar stretching.',
      printingOptions: ['Water-based Screen Print', 'Discharge Print'],
      embroideryOptions: ['Small Chest Logo'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag'],
      leadTime: '3 Weeks', exportCountries: 'USA · Germany · Australia',
    },
    {
      id: 17, name: 'Heavyweight Box-Fit Tee', cats: ['tshirts', 'privatelabel'], image: 'https://res.cloudinary.com/fuh0ucvy/image/upload/v1784704146/t02_rz5xon.jpg',
      fabric: '220 GSM Carded Cotton', gsm: 220,
      specs: ['220 GSM Heavy Carded Jersey', 'Wide Cut Dropped Shoulder', 'Thick 1.2 inch Ribbed Collar', 'Double-Needle Cuffs'],
      colors: ['#1c1917', '#e7e5e4', '#78716c'],
      colorNames: ['Stone Black', 'Cream', 'Taupe'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · ODM · Private Label', isNew: false, isBestseller: false,
      description: 'A vintage-cut streetwear tee utilizing 220 GSM heavy carded jersey. Featuring a thick 1.2 inch ribbed collar and box-fit design for custom streetwear brands.',
      printingOptions: ['Acid Wash Option', 'Silicone Print', 'Puff Print'],
      embroideryOptions: ['Left Hem Text'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag'],
      leadTime: '3 Weeks', exportCountries: 'USA · UK · Germany · Denmark',
    },
    {
      id: 18, name: 'Luxury Modal-Cotton Blend Tee', cats: ['tshirts'], image: 'https://res.cloudinary.com/fuh0ucvy/image/upload/v1784704143/t01_w2q7sr.jpg',
      fabric: '160 GSM Modal-Cotton Blend', gsm: 160,
      specs: ['160 GSM 50/50 Modal-Cotton', 'Fluid Drape Fit', 'Blind Stitched Hems', 'Ultra-Soft Neckline'],
      colors: ['#44403c', '#fafaf9', '#a8a29e'],
      colorNames: ['Espresso', 'Ivory', 'Soft Grey'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · Private Label', isNew: false, isBestseller: false,
      description: 'A premium luxury basic shirt utilizing a 50/50 Modal and long-staple cotton blend. Features a fluid, lightweight drape and blind-stitched hem styling for modern menswear brands.',
      printingOptions: ['Water-based Screen Print', 'Heat-Transfer Logo'],
      embroideryOptions: ['Tonal Sleeve Cuff Monogram'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Tissue Wrapped Box'],
      leadTime: '3 Weeks', exportCountries: 'USA · UK · France',
    },
    {
      id: 19, name: 'Vintage Washed Heavy Tee', cats: ['tshirts', 'privatelabel'], image: 'https://res.cloudinary.com/fuh0ucvy/image/upload/v1784705867/WhatsApp_Image_2026-07-11_at_17.54.03_xulobf.jpg',
      fabric: '200 GSM Silicon Washed Cotton', gsm: 200,
      specs: ['200 GSM Jersey Cotton', 'Premium Silicon Softener Wash', 'Distressed Seam Option', 'Dye-to-Match Stitching'],
      colors: ['#27272a', '#52525b', '#e4e4e7'],
      colorNames: ['Faded Charcoal', 'Washed Grey', 'White'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · ODM · Private Label', isNew: true, isBestseller: false,
      description: 'Silicon washed for a premium vintage-wash handfeel and aesthetic. Perfect for brands seeking distressed seam designs and retail-ready graphic prints.',
      printingOptions: ['Discharge Print', 'Distressed Screen Print'],
      embroideryOptions: ['Distressed Patch'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag'],
      leadTime: '3–4 Weeks', exportCountries: 'USA · UK · Netherlands',
    },
    {
      id: 20, name: 'Premium Utility Cargo Trousers', cats: ['trousers', 'privatelabel'], image: 'https://res.cloudinary.com/fuh0ucvy/image/upload/v1784703703/WhatsApp_Image_2026-07-11_at_16.33.17_1_kzqidv.jpg',
      fabric: '240 GSM Cotton Ripstop', gsm: 240,
      specs: ['240 GSM Tough Ripstop', 'Double Cargo Flap Pockets', 'YKK Brass Zipper Fly', 'Reinforced Knee Panels'],
      colors: ['#1c1917', '#44403c', '#1b2d20'],
      colorNames: ['Coal Black', 'Khaki', 'Army Green'],
      sizes: ['28', '30', '32', '34', '36', '38'], moq: 150,
      manufacturingType: 'OEM · ODM · Private Label', isNew: false, isBestseller: true,
      description: 'Heavy utility trousers constructed in a tough 240 GSM cotton ripstop. Enhanced with YKK brass zippers, reinforced knees, and secure flap cargo pocket layouts.',
      printingOptions: ['Branding on cargo pocket'],
      embroideryOptions: ['Pocket Flap Logo'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Hanger Pack'],
      leadTime: '4–5 Weeks', exportCountries: 'UK · Germany · USA',
    },
    {
      id: 21, name: 'Relaxed Twill Chino Trousers', cats: ['trousers'], image: 'https://res.cloudinary.com/fuh0ucvy/image/upload/v1784703695/WhatsApp_Image_2026-07-11_at_16.33.18_krzyrk.jpg',
      fabric: '260 GSM Chino Twill', gsm: 260,
      specs: ['260 GSM 100% Cotton Twill', 'Slash Front Pockets', 'Double-Welt Back Pockets', 'Elasticated Pull-On Waist'],
      colors: ['#fafaf9', '#78716c', '#0c0a09'],
      colorNames: ['Bone Cream', 'Taupe Chino', 'Black'],
      sizes: ['28', '30', '32', '34', '36', '38'], moq: 150,
      manufacturingType: 'OEM · ODM', isNew: false, isBestseller: false,
      description: 'Comfortable pull-on trousers structured in a 260 GSM combed twill. Clean vertical creases and double-welt back pockets provide a polished business-casual fit.',
      printingOptions: ['None'],
      embroideryOptions: ['Monogram below waistband'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Hanger Pack'],
      leadTime: '4–5 Weeks', exportCountries: 'USA · UK · France · UAE',
    },
    {
      id: 22, name: 'Coordinated Tech Fleece Tracksuit', cats: ['tracksuits', 'privatelabel'], image: 'https://res.cloudinary.com/fuh0ucvy/image/upload/v1784705901/WhatsApp_Image_2026-07-11_at_17.17.03_ijlsea.jpg',
      fabric: '320 GSM French Terry Blend', gsm: 320,
      specs: ['320 GSM Loopback Jersey', 'Matching Set Hoodie & Jogger', 'Reflective Side Panels', 'Ankle Cuffs & Drawcords'],
      colors: ['#18181b', '#52525b', '#e4e4e7'],
      colorNames: ['Carbon Black', 'Zinc Grey', 'White'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · ODM · Private Label', isNew: true, isBestseller: false,
      description: 'A premium coordinated streetwear tracksuit set. Comprises a mid-weight 320 GSM French Terry hoodie and tapered joggers, fitted with technical reflective panel highlights.',
      printingOptions: ['Reflective Prints', 'High-Density silicone'],
      embroideryOptions: ['Leg Cuff Logo', 'Left Chest Emblem'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Custom Set Bag'],
      leadTime: '4 Weeks', exportCountries: 'USA · UK · Germany · UAE',
    },
    {
      id: 23, name: 'Premium Pique Knit Polo', cats: ['polo', 'privatelabel'], image: 'https://res.cloudinary.com/fuh0ucvy/image/upload/v1784705847/WhatsApp_Image_2026-07-11_at_17.53.19_uw0fie.jpg',
      fabric: '230 GSM Combed Cotton Pique', gsm: 230,
      specs: ['230 GSM 100% Combed Cotton', 'Flat-Knit Rib Collar & Cuffs', 'Two-Button Placket', 'Side Vents with Canvas Tape'],
      colors: ['#1e3a8a', '#ffffff', '#4b5563'],
      colorNames: ['Navy Blue', 'White', 'Slate Grey'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · ODM · Private Label', isNew: false, isBestseller: true,
      description: 'Traditional pique polo crafted from 230 GSM double-combed cotton. Ribbed collars and sleeve borders are custom knitted to resist curling and retain texture.',
      printingOptions: ['Subtle Collar Print'],
      embroideryOptions: ['Left Chest Crest', 'Sleeve Cuff Embroidery'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Hanger Pack'],
      leadTime: '3 Weeks', exportCountries: 'UK · USA · Germany · UAE',
    },
    {
      id: 24, name: 'Classic Mercerized Polo Shirt', cats: ['polo'], image: 'https://res.cloudinary.com/fuh0ucvy/image/upload/v1784705842/WhatsApp_Image_2026-07-11_at_17.53.06_jizcyl.jpg',
      fabric: '210 GSM Silk-Finish Cotton', gsm: 210,
      specs: ['210 GSM Mercerized Cotton Pique', 'Lustrous Smooth Handle', 'Genuine Shell Buttons', 'Ribbed Collar Band'],
      colors: ['#0f172a', '#e2e8f0', '#b45309'],
      colorNames: ['Obsidian', 'Chalk Grey', 'Cognac'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · ODM', isNew: false, isBestseller: false,
      description: 'Polished luxury polo shirt utilizing 210 GSM double-mercerized long-staple cotton. Featuring genuine shell buttons and a clean-bound collar seam, built for upscale retail brands.',
      printingOptions: ['Heat-Transfer Logo'],
      embroideryOptions: ['Tonal Chest Emblem'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Tissue Wrapped Premium Box'],
      leadTime: '3–4 Weeks', exportCountries: 'UK · UAE · Saudi Arabia · France',
    },
    {
      id: 25, name: 'Textured Knit Smart-Casual Polo', cats: ['polo', 'privatelabel'], image: 'https://res.cloudinary.com/fuh0ucvy/image/upload/v1784705835/WhatsApp_Image_2026-07-11_at_17.29.32_dfw7ck.jpg',
      fabric: '220 GSM Double-Knit Cotton Jacquard', gsm: 220,
      specs: ['220 GSM Double-Knit Jacquard', 'Textured Houndstooth Weave', 'Self-Fabric Collar', 'Three-Button Placket'],
      colors: ['#374151', '#f3f4f6', '#4b5563'],
      colorNames: ['Graphite', 'Ivory Cream', 'Sage'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'], moq: 100,
      manufacturingType: 'OEM · ODM · Private Label', isNew: false, isBestseller: false,
      description: 'Designed for smart-casual and resortwear programs. Constructed in a subtle houndstooth double-knit jacquard with three-button placket styling and self-fabric collars.',
      printingOptions: ['None'],
      embroideryOptions: ['Left Hem Text'],
      labelOptions: labelPack, packagingOptions: ['Poly Bag', 'Carton Pack'],
      leadTime: '3–4 Weeks', exportCountries: 'USA · UK · Australia',
    },
  ];

  /* Capability flags for each product */
  PRODUCTS.forEach(p => {
    p.category = p.category || p.cats[0];
    if (!p.productionTypes) {
      const mt = (p.manufacturingType || '').toLowerCase();
      p.productionTypes = [];
      if (mt.includes('oem')) p.productionTypes.push('oem');
      if (mt.includes('odm')) p.productionTypes.push('odm');
      if (mt.includes('private label') || p.cats.includes('privatelabel')) p.productionTypes.push('privatelabel');
      if (p.productionTypes.length === 0) p.productionTypes = ['oem', 'odm', 'privatelabel'];
    }
    p.oem = p.productionTypes.includes('oem');
    p.odm = p.productionTypes.includes('odm');
    p.privateLabel = p.productionTypes.includes('privatelabel');
    p.badge = BADGE[p.category] || p.category;
  });

  /* Two Independent Filter Groups */
  const CATEGORY_FILTERS = [
    { slug: 'all',         label: 'All' },
    { slug: 'hoodies',     label: 'Hoodies' },
    { slug: 'sweatshirts', label: 'Sweatshirts' },
    { slug: 'knitwear',    label: 'Knitwear' },
    { slug: 'tshirts',     label: 'T-Shirts' },
    { slug: 'polo',        label: 'Polo Shirts' },
    { slug: 'shorts',      label: 'Shorts' },
    { slug: 'trousers',    label: 'Trousers' },
    { slug: 'tracksuits',  label: 'Tracksuits' }
  ];

  const TYPE_FILTERS = [
    { slug: 'all',          label: 'All' },
    { slug: 'oem',          label: 'OEM' },
    { slug: 'odm',          label: 'ODM' },
    { slug: 'privatelabel', label: 'Private Label' }
  ];

  /* ────────────────────────────────────────────────────────────
     STATE
  ──────────────────────────────────────────────────────────── */
  const state = {
    category: 'all',
    productionType: 'all',
    searchQuery: '',
    filtered: [],
    modalIndex: 0,
    lbIndex: 0,
    zoom: 1,
    panX: 0,
    panY: 0
  };
  const PAGE_SIZE = 12;
  let shownCount = PAGE_SIZE;

  const $ = id => document.getElementById(id);

  const searchInput   = $('gallerySearch');
  const searchClear   = $('searchClearBtn');
  const categoryRow   = $('categoryFilters');
  const typeRow       = $('typeFilters');
  const clearBtn      = $('clearFiltersBtn');
  const grid          = $('galleryGrid');
  const emptyState    = $('galleryEmpty');
  const emptyReset    = $('emptyResetBtn');
  const countEl       = $('resultsCount');
  const viewMoreWrap  = $('galleryViewMore');
  const viewMoreBtn   = $('viewMoreBtn');

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
     FILTERING & SEARCH
  ──────────────────────────────────────────────────────────── */
  function getFiltered() {
    const q = (state.searchQuery || '').trim().toLowerCase();
    return PRODUCTS.filter(p => {
      const matchCat = state.category === 'all' || p.category === state.category || p.cats.includes(state.category);
      const matchType = state.productionType === 'all' || p.productionTypes.includes(state.productionType);
      let matchQuery = true;
      if (q) {
        const haystack = `${p.name} ${p.fabric} ${p.gsm} GSM ${p.description} ${p.specs.join(' ')} ${p.manufacturingType}`.toLowerCase();
        matchQuery = haystack.includes(q);
      }
      return matchCat && matchType && matchQuery;
    });
  }

  function countForCategory(slug) {
    const q = (state.searchQuery || '').trim().toLowerCase();
    return PRODUCTS.filter(p => {
      const matchCat = slug === 'all' || p.category === slug || p.cats.includes(slug);
      const matchType = state.productionType === 'all' || p.productionTypes.includes(state.productionType);
      let matchQuery = true;
      if (q) {
        const haystack = `${p.name} ${p.fabric} ${p.gsm} GSM ${p.description} ${p.specs.join(' ')} ${p.manufacturingType}`.toLowerCase();
        matchQuery = haystack.includes(q);
      }
      return matchCat && matchType && matchQuery;
    }).length;
  }

  function countForType(slug) {
    const q = (state.searchQuery || '').trim().toLowerCase();
    return PRODUCTS.filter(p => {
      const matchCat = state.category === 'all' || p.category === state.category || p.cats.includes(state.category);
      const matchType = slug === 'all' || p.productionTypes.includes(slug);
      let matchQuery = true;
      if (q) {
        const haystack = `${p.name} ${p.fabric} ${p.gsm} GSM ${p.description} ${p.specs.join(' ')} ${p.manufacturingType}`.toLowerCase();
        matchQuery = haystack.includes(q);
      }
      return matchCat && matchType && matchQuery;
    }).length;
  }

  /* ────────────────────────────────────────────────────────────
     FILTER BARS RENDERING
  ──────────────────────────────────────────────────────────── */
  function renderFilters() {
    // 1. Category Group
    if (categoryRow) {
      categoryRow.innerHTML = '';
      CATEGORY_FILTERS.forEach(c => {
        const count = countForCategory(c.slug);
        const btn = document.createElement('button');
        btn.className = 'gx-filter' + (state.category === c.slug ? ' active' : '');
        if (count === 0 && state.category !== c.slug) btn.classList.add('gx-filter--disabled');
        btn.dataset.slug = c.slug;
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-selected', state.category === c.slug ? 'true' : 'false');
        btn.innerHTML = `${c.label}<span class="gx-filter-count">${count}</span>`;
        btn.addEventListener('click', () => selectCategory(c.slug));
        categoryRow.appendChild(btn);
      });
    }

    // 2. Production Type Group
    if (typeRow) {
      typeRow.innerHTML = '';
      TYPE_FILTERS.forEach(t => {
        const count = countForType(t.slug);
        const btn = document.createElement('button');
        btn.className = 'gx-filter' + (state.productionType === t.slug ? ' active' : '');
        if (count === 0 && state.productionType !== t.slug) btn.classList.add('gx-filter--disabled');
        btn.dataset.slug = t.slug;
        btn.setAttribute('role', 'tab');
        btn.setAttribute('aria-selected', state.productionType === t.slug ? 'true' : 'false');
        btn.innerHTML = `${t.label}<span class="gx-filter-count">${count}</span>`;
        btn.addEventListener('click', () => selectProductionType(t.slug));
        typeRow.appendChild(btn);
      });
    }

    // Clear/Reset Button
    if (clearBtn) {
      const isFiltered = state.category !== 'all' || state.productionType !== 'all' || Boolean(state.searchQuery);
      if (isFiltered) clearBtn.removeAttribute('hidden');
      else clearBtn.setAttribute('hidden', '');
    }

    // Search clear icon
    if (searchClear) {
      if (state.searchQuery) searchClear.removeAttribute('hidden');
      else searchClear.setAttribute('hidden', '');
    }
  }

  function selectCategory(slug) {
    if (state.category === slug) return;
    state.category = slug;
    shownCount = PAGE_SIZE;
    applyFilterAnimation();
  }

  function selectProductionType(slug) {
    if (state.productionType === slug) return;
    state.productionType = slug;
    shownCount = PAGE_SIZE;
    applyFilterAnimation();
  }

  function resetAllFilters() {
    state.category = 'all';
    state.productionType = 'all';
    state.searchQuery = '';
    if (searchInput) searchInput.value = '';
    shownCount = PAGE_SIZE;
    applyFilterAnimation();
  }

  function applyFilterAnimation() {
    renderFilters();
    if (grid) grid.classList.add('gx-grid--filtering');
    setTimeout(() => {
      renderGallery();
      if (grid) grid.classList.remove('gx-grid--filtering');
    }, 140);
  }

  // Search input listeners
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      shownCount = PAGE_SIZE;
      applyFilterAnimation();
    });
  }
  if (searchClear) {
    searchClear.addEventListener('click', () => {
      state.searchQuery = '';
      if (searchInput) searchInput.value = '';
      shownCount = PAGE_SIZE;
      applyFilterAnimation();
    });
  }

  /* ────────────────────────────────────────────────────────────
     GRID
  ──────────────────────────────────────────────────────────── */
  function renderGallery() {
    const filtered = getFiltered();
    state.filtered = filtered;
    const visible = filtered.slice(0, shownCount);

    if (countEl) {
      const total = filtered.length;
      countEl.innerHTML = `Showing <strong>${total}</strong> ${total === 1 ? 'Product' : 'Products'}`;
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
    if (viewMoreBtn) viewMoreBtn.textContent = `Load More (${filtered.length - shownCount})`;
  }

  /* ────────────────────────────────────────────────────────────
     PRODUCT CARD
  ──────────────────────────────────────────────────────────── */
  function createCard(p, index) {
    const card = document.createElement('article');
    card.className = 'gx-card';
    card.style.setProperty('--d', `${Math.min(index, 11) * 40}ms`);

    const badge = p.isNew
      ? '<span class="gx-badge gx-badge--new">New Style</span>'
      : p.isBestseller
      ? '<span class="gx-badge gx-badge--best">Bestseller</span>'
      : '';

    const oemTags = p.productionTypes.map(t => {
      const label = t === 'privatelabel' ? 'Private Label' : t.toUpperCase();
      return `<span class="gx-tag-pill gx-tag-pill--${t}">${label}</span>`;
    }).join('');

    card.innerHTML = `
      <div class="gx-card-media" data-act="lightbox" data-id="${p.id}" role="button" tabindex="0"
           aria-label="View image of ${p.name}">
        <div class="gx-skeleton"></div>
        ${badge}
        <div class="gx-card-gsm-tag">${p.gsm} GSM</div>
        <img src="${p.image}" alt="${p.name} — ${p.badge} manufactured by Stitchronix"
             loading="lazy" decoding="async" width="600" height="750" />
        <div class="gx-card-hover" aria-hidden="true">
          <span class="gx-view-image">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
            Inspect Garment
          </span>
          <button class="gx-quick-view" data-act="modal" data-id="${p.id}">View Specifications</button>
        </div>
      </div>
      <div class="gx-card-body">
        <div class="gx-card-meta-top">
          <span class="gx-card-category">${p.badge}</span>
          <span class="gx-card-moq">MOQ: ${p.moq} pcs</span>
        </div>
        <h3 class="gx-card-name">${p.name}</h3>
        <p class="gx-card-fabric">${p.fabric}</p>
        
        <div class="gx-card-tags">
          ${oemTags}
        </div>

        <button class="gx-card-quote-btn" data-act="modal" data-id="${p.id}">
          <span>Request Bulk Quote</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
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

    const caps = [];
    if (p.oem) caps.push('OEM');
    if (p.odm) caps.push('ODM');
    if (p.privateLabel) caps.push('Private Label');
    caps.push('Export Ready');
    $('modalCaps').innerHTML = caps.map(c => `<span class="gx-cap gx-cap--lg">${c}</span>`).join('');

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

  if (emptyReset) emptyReset.addEventListener('click', resetAllFilters);
  if (clearBtn) clearBtn.addEventListener('click', resetAllFilters);

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
