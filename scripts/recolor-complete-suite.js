const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) h = s = 0;
  else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return [h, s, l];
}

function hslToRgb(h, s, l) {
  let r, g, b;
  if (s === 0) r = g = b = l;
  else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

const pubDir = path.join(__dirname, '..', 'public', 'images', 'products');
const buildDir = path.join(__dirname, '..', 'build', 'images', 'products');

async function saveImages(name, img2, img3) {
  const p2 = path.join(pubDir, `${name}-2.jpg`);
  const p3 = path.join(pubDir, `${name}-3.jpg`);
  await img2.write(p2);
  await img3.write(p3);
  if (fs.existsSync(buildDir)) {
    fs.copyFileSync(p2, path.join(buildDir, `${name}-2.jpg`));
    fs.copyFileSync(p3, path.join(buildDir, `${name}-3.jpg`));
  }
  console.log(`[OK] Generated and synced ${name}-2 and ${name}-3`);
}

// 1. BAG (bag-1 -> bag-2: Black, bag-3: Camel)
async function processBag() {
  const bag = await Jimp.read(path.join(pubDir, 'bag-1.jpg'));
  const w = bag.bitmap.width, h = bag.bitmap.height;
  const bBlack = bag.clone();
  const bCamel = bag.clone();

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const r = bag.bitmap.data[idx], g = bag.bitmap.data[idx+1], b = bag.bitmap.data[idx+2];
      const diff = Math.max(r, g, b) - Math.min(r, g, b);
      const lum = (Math.max(r, g, b) + Math.min(r, g, b)) / 510;
      const [hue, sat] = rgbToHsl(r, g, b);

      // Bag is warm brown leather: diff > 15, sat > 0.15, hue in [0.03, 0.16]
      const isLeather = (diff > 18) && (sat > 0.18) && (hue >= 0.02 && hue <= 0.18) && (lum < 0.82);
      const isGoldHardware = (lum > 0.65 && sat > 0.45 && hue > 0.10 && hue < 0.18);

      if (isLeather && !isGoldHardware) {
        // Black leather bag
        const blackLum = Math.pow(lum, 1.1) * 0.35;
        const [br, bg, bb] = hslToRgb(0.6, 0.05, blackLum);
        bBlack.bitmap.data[idx] = br;
        bBlack.bitmap.data[idx+1] = bg;
        bBlack.bitmap.data[idx+2] = bb;

        // Camel leather bag
        const camelLum = Math.min(0.92, lum * 1.12);
        const [cr, cg, cb] = hslToRgb(0.08, 0.52, camelLum);
        bCamel.bitmap.data[idx] = cr;
        bCamel.bitmap.data[idx+1] = cg;
        bCamel.bitmap.data[idx+2] = cb;
      }
    }
  }

  await saveImages('bag', bBlack, bCamel);
}

// 2. JEANS (jeans-1 -> jeans-2: Light Blue, jeans-3: Black)
async function processJeans() {
  const jeans = await Jimp.read(path.join(pubDir, 'jeans-1.jpg'));
  const w = jeans.bitmap.width, h = jeans.bitmap.height;
  const jLight = jeans.clone();
  const jBlack = jeans.clone();

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      // Jeans waistband starts at y >= 72
      if (y < 72) continue;
      const idx = (y * w + x) * 4;
      const r = jeans.bitmap.data[idx], g = jeans.bitmap.data[idx+1], b = jeans.bitmap.data[idx+2];
      const diff = Math.max(r, g, b) - Math.min(r, g, b);
      const lum = (Math.max(r, g, b) + Math.min(r, g, b)) / 510;
      const isBg = (diff < 12 && lum > 0.88);

      if (!isBg) {
        // Light blue jeans (Xanh nhạt)
        const lightLum = 0.45 + lum * 0.42;
        const [lr, lg, lb] = hslToRgb(0.57, 0.42, lightLum);
        jLight.bitmap.data[idx] = lr;
        jLight.bitmap.data[idx+1] = lg;
        jLight.bitmap.data[idx+2] = lb;

        // Black jeans (Đen)
        const blackLum = Math.pow(lum, 1.1) * 0.38;
        const [br, bg, bb] = hslToRgb(0.6, 0.04, blackLum);
        jBlack.bitmap.data[idx] = br;
        jBlack.bitmap.data[idx+1] = bg;
        jBlack.bitmap.data[idx+2] = bb;
      }
    }
  }

  await saveImages('jeans', jLight, jBlack);
}

// 3. CULOTTES (culottes-1 -> culottes-2: Be, culottes-3: Xanh nhạt)
async function processCulottes() {
  const cul = await Jimp.read(path.join(pubDir, 'culottes-1.jpg'));
  const w = cul.bitmap.width, h = cul.bitmap.height;
  const cBeige = cul.clone();
  const cBlue = cul.clone();

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (y < 80) continue;
      const idx = (y * w + x) * 4;
      const r = cul.bitmap.data[idx], g = cul.bitmap.data[idx+1], b = cul.bitmap.data[idx+2];
      const diff = Math.max(r, g, b) - Math.min(r, g, b);
      const lum = (Math.max(r, g, b) + Math.min(r, g, b)) / 510;
      const isBg = (diff < 10 && lum > 0.94);

      if (!isBg) {
        // Beige linen (Be)
        const beigeLum = lum * 0.92;
        const [br, bg, bb] = hslToRgb(0.09, 0.38, beigeLum);
        cBeige.bitmap.data[idx] = br;
        cBeige.bitmap.data[idx+1] = bg;
        cBeige.bitmap.data[idx+2] = bb;

        // Light blue linen (Xanh nhạt)
        const blueLum = lum * 0.92;
        const [lr, lg, lb] = hslToRgb(0.57, 0.40, blueLum);
        cBlue.bitmap.data[idx] = lr;
        cBlue.bitmap.data[idx+1] = lg;
        cBlue.bitmap.data[idx+2] = lb;
      }
    }
  }

  await saveImages('culottes', cBeige, cBlue);
}

// 4. CROPTOP (croptop-1 -> croptop-2: Trắng kem, croptop-3: Xanh mint)
async function processCroptop() {
  const crop = await Jimp.read(path.join(pubDir, 'croptop-1.jpg'));
  const w = crop.bitmap.width, h = crop.bitmap.height;
  const cCream = crop.clone();
  const cMint = crop.clone();

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const r = crop.bitmap.data[idx], g = crop.bitmap.data[idx+1], b = crop.bitmap.data[idx+2];
      const diff = Math.max(r, g, b) - Math.min(r, g, b);
      const lum = (Math.max(r, g, b) + Math.min(r, g, b)) / 510;
      const isBg = (diff < 12 && lum > 0.90);

      if (!isBg) {
        // Cream white (Trắng kem)
        const creamLum = 0.65 + lum * 0.32;
        const [cr, cg, cb] = hslToRgb(0.12, 0.22, creamLum);
        cCream.bitmap.data[idx] = cr;
        cCream.bitmap.data[idx+1] = cg;
        cCream.bitmap.data[idx+2] = cb;

        // Mint green (Xanh mint)
        const mintLum = 0.55 + lum * 0.40;
        const [mr, mg, mb] = hslToRgb(0.38, 0.45, mintLum);
        cMint.bitmap.data[idx] = mr;
        cMint.bitmap.data[idx+1] = mg;
        cMint.bitmap.data[idx+2] = mb;
      }
    }
  }

  await saveImages('croptop', cCream, cMint);
}

// 5. COCKTAIL DRESS (cocktail-1 -> cocktail-2: Silver Bạc, cocktail-3: Black Đen)
async function processCocktail() {
  const ckt = await Jimp.read(path.join(pubDir, 'cocktail-1.jpg'));
  const w = ckt.bitmap.width, h = ckt.bitmap.height;
  const cSilver = ckt.clone();
  const cBlack = ckt.clone();

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const r = ckt.bitmap.data[idx], g = ckt.bitmap.data[idx+1], b = ckt.bitmap.data[idx+2];
      const diff = Math.max(r, g, b) - Math.min(r, g, b);
      const lum = (Math.max(r, g, b) + Math.min(r, g, b)) / 510;
      const isBg = (diff < 15 && lum > 0.90);

      if (!isBg) {
        // Silver sequin (Bạc lấp lánh)
        const silverLum = lum * 0.95;
        const [sr, sg, sb] = hslToRgb(0.6, 0.05, silverLum);
        cSilver.bitmap.data[idx] = sr;
        cSilver.bitmap.data[idx+1] = sg;
        cSilver.bitmap.data[idx+2] = sb;

        // Black sequin (Đen huyền bí)
        const blackLum = Math.pow(lum, 1.2) * 0.45;
        const [br, bg, bb] = hslToRgb(0.6, 0.06, blackLum);
        cBlack.bitmap.data[idx] = br;
        cBlack.bitmap.data[idx+1] = bg;
        cBlack.bitmap.data[idx+2] = bb;
      }
    }
  }

  await saveImages('cocktail', cSilver, cBlack);
}

// 6. PALAZZO (palazzo-1 -> palazzo-2: Black Đen, palazzo-3: White Trắng)
async function processPalazzo() {
  const pal = await Jimp.read(path.join(pubDir, 'palazzo-1.jpg'));
  const w = pal.bitmap.width, h = pal.bitmap.height;
  const pBlack = pal.clone();
  const pWhite = pal.clone();

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const r = pal.bitmap.data[idx], g = pal.bitmap.data[idx+1], b = pal.bitmap.data[idx+2];
      const diff = Math.max(r, g, b) - Math.min(r, g, b);
      const lum = (Math.max(r, g, b) + Math.min(r, g, b)) / 510;
      const isBg = (diff < 12 && lum > 0.92);

      if (!isBg) {
        // Black palazzo (Đen)
        const blackLum = Math.pow(lum, 1.1) * 0.38;
        const [br, bg, bb] = hslToRgb(0.6, 0.04, blackLum);
        pBlack.bitmap.data[idx] = br;
        pBlack.bitmap.data[idx+1] = bg;
        pBlack.bitmap.data[idx+2] = bb;

        // White palazzo (Trắng)
        const whiteLum = 0.70 + lum * 0.28;
        const [wr, wg, wb] = hslToRgb(0, 0, whiteLum);
        pWhite.bitmap.data[idx] = wr;
        pWhite.bitmap.data[idx+1] = wg;
        pWhite.bitmap.data[idx+2] = wb;
      }
    }
  }

  await saveImages('palazzo', pBlack, pWhite);
}

// 7. SCARF (scarf-1 -> scarf-2: Xám, scarf-3: Đỏ đô)
async function processScarf() {
  const scf = await Jimp.read(path.join(pubDir, 'scarf-1.jpg'));
  const w = scf.bitmap.width, h = scf.bitmap.height;
  const sGrey = scf.clone();
  const sRed = scf.clone();

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const r = scf.bitmap.data[idx], g = scf.bitmap.data[idx+1], b = scf.bitmap.data[idx+2];
      const diff = Math.max(r, g, b) - Math.min(r, g, b);
      const lum = (Math.max(r, g, b) + Math.min(r, g, b)) / 510;
      const isBg = (diff < 12 && lum > 0.90);

      if (!isBg) {
        // Grey cashmere (Xám)
        const greyLum = 0.40 + lum * 0.45;
        const [gr, gg, gb] = hslToRgb(0, 0, greyLum);
        sGrey.bitmap.data[idx] = gr;
        sGrey.bitmap.data[idx+1] = gg;
        sGrey.bitmap.data[idx+2] = gb;

        // Burgundy cashmere (Đỏ đô)
        const redLum = lum * 0.65;
        const [rr, rg, rb] = hslToRgb(0.98, 0.65, redLum);
        sRed.bitmap.data[idx] = rr;
        sRed.bitmap.data[idx+1] = rg;
        sRed.bitmap.data[idx+2] = rb;
      }
    }
  }

  await saveImages('scarf', sGrey, sRed);
}

// 8. MIDI DRESS (midi-1 -> midi-2: Blue Floral, midi-3: Yellow Floral)
async function processMidi() {
  const midi = await Jimp.read(path.join(pubDir, 'midi-1.jpg'));
  const w = midi.bitmap.width, h = midi.bitmap.height;
  const mBlue = midi.clone();
  const mYellow = midi.clone();

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (y < 90) continue;
      const idx = (y * w + x) * 4;
      const r = midi.bitmap.data[idx], g = midi.bitmap.data[idx+1], b = midi.bitmap.data[idx+2];
      const diff = Math.max(r, g, b) - Math.min(r, g, b);
      const lum = (Math.max(r, g, b) + Math.min(r, g, b)) / 510;
      const isBg = (diff < 12 && lum > 0.88);

      if (!isBg) {
        const [hue, sat, l] = rgbToHsl(r, g, b);
        // Shift hue for floral pattern
        // Blue floral
        const [br, bg, bb] = hslToRgb((hue + 0.50) % 1.0, sat, l);
        mBlue.bitmap.data[idx] = br;
        mBlue.bitmap.data[idx+1] = bg;
        mBlue.bitmap.data[idx+2] = bb;

        // Yellow floral
        const [yr, yg, yb] = hslToRgb(0.12, Math.min(1, sat * 1.2), Math.min(0.9, l * 1.08));
        mYellow.bitmap.data[idx] = yr;
        mYellow.bitmap.data[idx+1] = yg;
        mYellow.bitmap.data[idx+2] = yb;
      }
    }
  }

  await saveImages('midi', mBlue, mYellow);
}

// 9. MAXI DRESS (maxi-1 -> maxi-2: Xanh rêu, maxi-3: Cam đất)
async function processMaxi() {
  const maxi = await Jimp.read(path.join(pubDir, 'maxi-1.jpg'));
  const w = maxi.bitmap.width, h = maxi.bitmap.height;
  const mGreen = maxi.clone();
  const mOrange = maxi.clone();

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (y < 90) continue;
      const idx = (y * w + x) * 4;
      const r = maxi.bitmap.data[idx], g = maxi.bitmap.data[idx+1], b = maxi.bitmap.data[idx+2];
      const diff = Math.max(r, g, b) - Math.min(r, g, b);
      const lum = (Math.max(r, g, b) + Math.min(r, g, b)) / 510;
      const isBg = (diff < 12 && lum > 0.88);

      if (!isBg) {
        // Moss Green (Xanh rêu)
        const [gr, gg, gb] = hslToRgb(0.24, 0.45, lum * 0.85);
        mGreen.bitmap.data[idx] = gr;
        mGreen.bitmap.data[idx+1] = gg;
        mGreen.bitmap.data[idx+2] = gb;

        // Rust Orange (Cam đất)
        const [or, og, ob] = hslToRgb(0.06, 0.65, lum * 0.90);
        mOrange.bitmap.data[idx] = or;
        mOrange.bitmap.data[idx+1] = og;
        mOrange.bitmap.data[idx+2] = ob;
      }
    }
  }

  await saveImages('maxi', mGreen, mOrange);
}

// 10. SUNGLASSES (sunglasses-1 -> sunglasses-2: Bạc, sunglasses-3: Đen)
async function processSunglasses() {
  const sg = await Jimp.read(path.join(pubDir, 'sunglasses-1.jpg'));
  const w = sg.bitmap.width, h = sg.bitmap.height;
  const sSilver = sg.clone();
  const sBlack = sg.clone();

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const r = sg.bitmap.data[idx], g = sg.bitmap.data[idx+1], b = sg.bitmap.data[idx+2];
      const diff = Math.max(r, g, b) - Math.min(r, g, b);
      const lum = (Math.max(r, g, b) + Math.min(r, g, b)) / 510;
      const isBg = (diff < 12 && lum > 0.90);

      if (!isBg) {
        // Silver frame (Bạc)
        const [sr, sg2, sb] = hslToRgb(0.6, 0.05, lum);
        sSilver.bitmap.data[idx] = sr;
        sSilver.bitmap.data[idx+1] = sg2;
        sSilver.bitmap.data[idx+2] = sb;

        // Black frame (Đen)
        const blackLum = Math.pow(lum, 1.1) * 0.35;
        const [br, bg, bb] = hslToRgb(0.6, 0.04, blackLum);
        sBlack.bitmap.data[idx] = br;
        sBlack.bitmap.data[idx+1] = bg;
        sBlack.bitmap.data[idx+2] = bb;
      }
    }
  }

  await saveImages('sunglasses', sSilver, sBlack);
}

async function runAll() {
  console.log('--- Starting Complete Suite Generation ---');
  await processBag();
  await processJeans();
  await processCulottes();
  await processCroptop();
  await processCocktail();
  await processPalazzo();
  await processScarf();
  await processMidi();
  await processMaxi();
  await processSunglasses();
  console.log('--- ALL PRODUCTS FINISHED SUCCESSFULLY! ---');
}

runAll().catch(console.error);

