const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
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

  if (s === 0) {
    r = g = b = l;
  } else {
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

function isInnerCollarLining(x, y) {
  if (y < 95 || y > 390) return false;
  // V shape
  const progress = (y - 95) / (390 - 95);
  const halfWidth = 55 * (1 - progress * 0.9);
  return Math.abs(x - 448) < Math.max(8, halfWidth);
}

async function run() {
  const srcPath = path.join(__dirname, '..', 'public', 'images', 'products', 'blazer-1.jpg');
  const beigeOut = path.join(__dirname, '..', 'public', 'images', 'products', 'blazer-2.jpg');
  const creamOut = path.join(__dirname, '..', 'public', 'images', 'products', 'blazer-3.jpg');
  const buildDir = path.join(__dirname, '..', 'build', 'images', 'products');
  const artifactDir = 'C:\\Users\\ADMIN\\.gemini\\antigravity\\brain\\069c1d20-f114-42b4-81e6-d6378742dd51';

  const orig = await Jimp.read(srcPath);
  const w = orig.bitmap.width;
  const h = orig.bitmap.height;

  const imgBeige = orig.clone();
  const imgCream = orig.clone();

  // 1. BEIGE / CAMEL TWEED
  imgBeige.scan(0, 0, w, h, (x, y, idx) => {
    const r = orig.bitmap.data[idx];
    const g = orig.bitmap.data[idx + 1];
    const b = orig.bitmap.data[idx + 2];

    // Background is pure white
    if (r > 248 && g > 248 && b > 248) return;

    // Preserve inner collar silk lining
    if (isInnerCollarLining(x, y)) return;

    const [hue, sat, lum] = rgbToHsl(r, g, b);

    // Keep gold buttons
    if (sat > 0.22 && hue >= 0.05 && hue <= 0.18) return;

    // Warm camel
    const targetLum = 0.42 + Math.pow(lum, 0.9) * 0.52;
    const targetHue = 0.095;
    const targetSat = 0.35;

    const [nr, ng, nb] = hslToRgb(targetHue, targetSat, targetLum);
    imgBeige.bitmap.data[idx] = nr;
    imgBeige.bitmap.data[idx + 1] = ng;
    imgBeige.bitmap.data[idx + 2] = nb;
  });

  // 2. CREAM WHITE TWEED
  imgCream.scan(0, 0, w, h, (x, y, idx) => {
    const r = orig.bitmap.data[idx];
    const g = orig.bitmap.data[idx + 1];
    const b = orig.bitmap.data[idx + 2];

    if (r > 248 && g > 248 && b > 248) return;
    if (isInnerCollarLining(x, y)) return;

    const [hue, sat, lum] = rgbToHsl(r, g, b);

    if (sat > 0.22 && hue >= 0.05 && hue <= 0.18) return;

    // Cream white:
    // Dark fibers become soft warm grey-beige
    // Light fibers become crisp cream ivory
    const targetLum = 0.62 + Math.pow(lum, 0.85) * 0.35;
    const targetHue = 0.11; // soft warm ivory
    const targetSat = 0.12;

    const [nr, ng, nb] = hslToRgb(targetHue, targetSat, targetLum);
    imgCream.bitmap.data[idx] = nr;
    imgCream.bitmap.data[idx + 1] = ng;
    imgCream.bitmap.data[idx + 2] = nb;
  });

  await imgBeige.write(beigeOut);
  await imgCream.write(creamOut);

  if (fs.existsSync(buildDir)) {
    fs.copyFileSync(beigeOut, path.join(buildDir, 'blazer-2.jpg'));
    fs.copyFileSync(creamOut, path.join(buildDir, 'blazer-3.jpg'));
  }

  fs.copyFileSync(beigeOut, path.join(artifactDir, 'test_blazer_beige.jpg'));
  fs.copyFileSync(creamOut, path.join(artifactDir, 'test_blazer_cream.jpg'));

  console.log('Saved perfect Beige and Cream blazers!');
}

run().catch(e => console.error(e));
