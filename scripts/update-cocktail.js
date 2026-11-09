const { Jimp } = require('jimp');
const fs = require('fs');
const path = require('path');

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
      if (t > 1) t += 1;
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

async function updateCocktail() {
  const goldPath = 'C:/Users/ADMIN/.gemini/antigravity/brain/069c1d20-f114-42b4-81e6-d6378742dd51/dam_cocktail_sequin_gold_1794162193787.jpg';
  console.log('Reading base gold sequin image:', goldPath);
  const goldImg = await Jimp.read(goldPath);
  const w = goldImg.bitmap.width, h = goldImg.bitmap.height;

  // 1. BFS flood fill to detect background
  const bg = new Uint8Array(w * h);
  const qx = new Int32Array(w * h);
  const qy = new Int32Array(w * h);
  let qHead = 0, qTail = 0;

  function push(x, y) {
    if (x < 0 || x >= w || y < 0 || y >= h) return;
    const idx = y * w + x;
    if (bg[idx]) return;

    const pIdx = idx * 4;
    const r = goldImg.bitmap.data[pIdx];
    const g = goldImg.bitmap.data[pIdx+1];
    const b = goldImg.bitmap.data[pIdx+2];
    const diff = Math.max(r, g, b) - Math.min(r, g, b);
    const lum = (r + g + b) / 3;

    if (lum >= 242 && diff <= 10) {
      bg[idx] = 1;
      qx[qTail] = x; qy[qTail] = y; qTail++;
    }
  }

  // Seed borders
  for (let x = 0; x < w; x++) { push(x, 0); push(x, h - 1); }
  for (let y = 0; y < h; y++) { push(0, y); push(w - 1, y); }

  while (qHead < qTail) {
    const cx = qx[qHead]; const cy = qy[qHead]; qHead++;
    push(cx + 1, cy); push(cx - 1, cy); push(cx, cy + 1); push(cx, cy - 1);
  }

  const silverImg = goldImg.clone();
  const blackImg = goldImg.clone();

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      if (bg[y * w + x]) continue;

      const r = goldImg.bitmap.data[idx];
      const g = goldImg.bitmap.data[idx+1];
      const b = goldImg.bitmap.data[idx+2];
      const diff = Math.max(r, g, b) - Math.min(r, g, b);
      const lum = (r + g + b) / 3;

      if (lum >= 248 && diff <= 6) continue;

      const [origH, origS, origL] = rgbToHsl(r, g, b);

      // --- 1. BẠC LẤP LÁNH (Silver Sequin) ---
      const sH = 0.58;
      const sS = Math.min(0.04, origS * 0.1);
      let sL;
      if (origL > 0.8) {
        sL = Math.min(0.98, origL * 1.02);
      } else if (origL < 0.35) {
        sL = origL * 0.90;
      } else {
        sL = origL;
      }
      const [sr, sg, sb] = hslToRgb(sH, sS, sL);
      silverImg.bitmap.data[idx] = sr;
      silverImg.bitmap.data[idx+1] = sg;
      silverImg.bitmap.data[idx+2] = sb;

      // --- 2. ĐEN HUYỀN BÍ (Midnight Black Sequin) ---
      let bL;
      if (origL > 0.85) {
        bL = 0.40 + (origL - 0.85) * 2.5;
      } else if (origL > 0.65) {
        bL = 0.18 + (origL - 0.65) * 1.1;
      } else {
        bL = Math.max(0.06, Math.pow(origL, 1.6) * 0.28);
      }

      const [br, bgVal, bb] = hslToRgb(0.6, 0.03, bL);
      blackImg.bitmap.data[idx] = br;
      blackImg.bitmap.data[idx+1] = bgVal;
      blackImg.bitmap.data[idx+2] = bb;
    }
  }

  // Save all 3 images
  const targets = [
    { img: goldImg, filename: 'cocktail-1.jpg', label: 'Vàng champagne' },
    { img: silverImg, filename: 'cocktail-2.jpg', label: 'Bạc lấp lánh' },
    { img: blackImg, filename: 'cocktail-3.jpg', label: 'Đen huyền bí' }
  ];

  const pubDir = path.join(__dirname, '..', 'public', 'images', 'products');
  const buildDir = path.join(__dirname, '..', 'build', 'images', 'products');

  for (const { img, filename, label } of targets) {
    const pubFile = path.join(pubDir, filename);
    await img.write(pubFile);
    console.log(`Saved ${label} to ${pubFile}`);

    if (fs.existsSync(buildDir)) {
      const buildFile = path.join(buildDir, filename);
      fs.copyFileSync(pubFile, buildFile);
      console.log(`Copied ${label} to ${buildFile}`);
    }
  }

  console.log('All Đầm Cocktail Sequin images updated successfully!');
}

updateCocktail();

