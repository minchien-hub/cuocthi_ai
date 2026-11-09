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

async function generateMaxiVariants() {
  const inputPath = 'public/images/products/maxi-1.jpg';
  console.log('Reading base image:', inputPath);
  const img = await Jimp.read(inputPath);
  const w = img.bitmap.width, h = img.bitmap.height;

  // 1. Build background mask using BFS flood fill from outer borders
  const bg = new Uint8Array(w * h);
  const qx = new Int32Array(w * h);
  const qy = new Int32Array(w * h);
  let qHead = 0, qTail = 0;

  function push(x, y) {
    if (x < 0 || x >= w || y < 0 || y >= h) return;
    const idx = y * w + x;
    if (bg[idx]) return;

    // Hard boundary outside dress silhouette
    if (x < 260 || x > 635 || y < 75 || y > 1116) {
      bg[idx] = 1;
      qx[qTail] = x; qy[qTail] = y; qTail++;
      return;
    }

    const pIdx = idx * 4;
    const r = img.bitmap.data[pIdx];
    const g = img.bitmap.data[pIdx+1];
    const b = img.bitmap.data[pIdx+2];
    const diff = Math.max(r, g, b) - Math.min(r, g, b);
    const lum = (r + g + b) / 765;

    // Studio white background
    if (diff < 7 && lum > 0.90) {
      bg[idx] = 1;
      qx[qTail] = x; qy[qTail] = y; qTail++;
    }
  }

  // Seed all borders
  for (let x = 0; x < w; x++) {
    push(x, 0);
    push(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    push(0, y);
    push(w - 1, y);
  }

  // Flood fill
  while (qHead < qTail) {
    const cx = qx[qHead];
    const cy = qy[qHead];
    qHead++;

    push(cx + 1, cy);
    push(cx - 1, cy);
    push(cx, cy + 1);
    push(cx, cy - 1);
  }

  function isBeyondHem(x, y) {
    if (x < 265 || x > 632) return true;
    if (x <= 300 && y > 1093) return true;
    if (x >= 605 && y > 1089) return true;
    if (y > 1115) return true;
    return false;
  }

  const greenImg = img.clone();
  const orangeImg = img.clone();

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const r = img.bitmap.data[idx];
      const g = img.bitmap.data[idx+1];
      const b = img.bitmap.data[idx+2];

      // Skip background, borders, floor shadow
      if (bg[y * w + x]) continue;
      if (isBeyondHem(x, y)) continue;

      const diff = Math.max(r, g, b) - Math.min(r, g, b);
      const lum = (r + g + b) / 3;

      // Skip pure studio white
      if (diff < 8 && lum > 230) continue;

      // In valleys below y=1105, valley floor shadow has diff <= 12 and (r - b) <= 10
      if (y > 1105 && diff <= 12 && (r - b) <= 10) continue;

      // Preserve inner neck silk lining
      if (x >= 425 && x <= 475 && y >= 95 && y <= 170) {
        if (diff < 14 && lum > 215) continue;
      }

      const [origH, origS, origL] = rgbToHsl(r, g, b);

      // Multi-tonal botanical separation
      const patternWeight = Math.min(1, Math.max(0, (0.86 - origL) / 0.30 + (origS - 0.16) * 1.8));

      // 1. Olive / Moss Green Vintage (Xanh rêu)
      const gH = 0.22 * (1 - patternWeight) + 0.205 * patternWeight;
      const gS = 0.22 * (1 - patternWeight) + 0.52 * patternWeight;
      const gPatternL = Math.pow(origL, 1.45) * 0.48 + 0.07;
      const gBaseL = Math.min(0.92, origL * 0.94);
      const gL = patternWeight * gPatternL + (1 - patternWeight) * gBaseL;
      const [gr, gg, gb] = hslToRgb(gH, gS, gL);

      greenImg.bitmap.data[idx] = gr;
      greenImg.bitmap.data[idx+1] = gg;
      greenImg.bitmap.data[idx+2] = gb;

      // 2. Terracotta Vintage (Cam đất)
      const oH = 0.068 * (1 - patternWeight) + 0.045 * patternWeight;
      const oS = 0.26 * (1 - patternWeight) + 0.70 * patternWeight;
      const oPatternL = Math.pow(origL, 1.3) * 0.55 + 0.08;
      const oBaseL = Math.min(0.93, origL * 0.95);
      const oL = patternWeight * oPatternL + (1 - patternWeight) * oBaseL;
      const [or, og, ob] = hslToRgb(oH, oS, oL);

      orangeImg.bitmap.data[idx] = or;
      orangeImg.bitmap.data[idx+1] = og;
      orangeImg.bitmap.data[idx+2] = ob;
    }
  }

  // Target paths
  const targets = [
    { img: greenImg, file: 'maxi-2.jpg', label: 'Xanh rêu' },
    { img: orangeImg, file: 'maxi-3.jpg', label: 'Cam đất' }
  ];

  for (const { img, file, label } of targets) {
    const pubPath = path.join('public/images/products', file);
    await img.write(pubPath);
    console.log(`Saved ${label} to ${pubPath}`);

    const buildDir = path.join('build/images/products');
    if (fs.existsSync(buildDir)) {
      const buildPath = path.join(buildDir, file);
      fs.copyFileSync(pubPath, buildPath);
      console.log(`Copied ${label} to ${buildPath}`);
    }
  }

  console.log('Done recoloring Đầm Maxi Boho variants!');
}

generateMaxiVariants();

