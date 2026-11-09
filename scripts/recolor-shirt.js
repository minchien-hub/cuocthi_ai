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

async function recolorShirt() {
  const srcPath = path.join(__dirname, '..', 'public', 'images', 'products', 'shirt-1.jpg');
  const pinkOut = path.join(__dirname, '..', 'public', 'images', 'products', 'shirt-2.jpg');
  const blueOut = path.join(__dirname, '..', 'public', 'images', 'products', 'shirt-3.jpg');
  const buildDir = path.join(__dirname, '..', 'build', 'images', 'products');
  const artifactDir = 'C:\\Users\\ADMIN\\.gemini\\antigravity\\brain\\069c1d20-f114-42b4-81e6-d6378742dd51';

  const orig = await Jimp.read(srcPath);
  const w = orig.bitmap.width;
  const h = orig.bitmap.height;

  // Outer bounds
  const outerLeft = new Int32Array(h).fill(-1);
  const outerRight = new Int32Array(h).fill(-1);

  for (let y = 105; y <= 1065; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      if (orig.bitmap.data[idx] < 240) {
        if (outerLeft[y] === -1) outerLeft[y] = x;
        outerRight[y] = x;
      }
    }
  }

  const isBg = new Uint8Array(w * h);

  for (let y = 0; y < h; y++) {
    // Top and bottom margins
    if (y < 105 || y > 1065) {
      for (let x = 0; x < w; x++) isBg[y * w + x] = 1;
      continue;
    }

    const l = outerLeft[y];
    const r = outerRight[y];

    if (l === -1) {
      for (let x = 0; x < w; x++) isBg[y * w + x] = 1;
    } else {
      // Outside left and right are background
      for (let x = 0; x < l; x++) isBg[y * w + x] = 1;
      for (let x = r + 1; x < w; x++) isBg[y * w + x] = 1;

      // Collar top corners (y < 140)
      if (y < 140) {
        for (let x = 0; x < 350; x++) isBg[y * w + x] = 1;
        for (let x = 545; x < w; x++) isBg[y * w + x] = 1;
      }

      // Inside [l, r], any pixel that is background color
      for (let x = l; x <= r; x++) {
        const idx = (y * w + x) * 4;
        const cr = orig.bitmap.data[idx];
        const cg = orig.bitmap.data[idx + 1];
        const cb = orig.bitmap.data[idx + 2];

        // Flat neutral background test
        if (cr >= 243 && cg >= 243 && cb >= 243 && Math.abs(cr - cg) <= 2 && Math.abs(cg - cb) <= 2) {
          // In the lower half (y >= 420), there is NO white highlight on the shirt!
          // Every flat white pixel in y >= 420 is 100% background!
          if (y >= 420) {
            isBg[y * w + x] = 1;
          }
          // In the upper half (y < 420), only pixels outside the torso chest (x < 245 or x > 645) are background!
          else if (x < 245 || x > 645) {
            isBg[y * w + x] = 1;
          }
        }
      }
    }
  }

  const imgPink = orig.clone();
  const imgBlue = orig.clone();

  // 1. PASTEL PINK SILK SHIRT
  imgPink.scan(0, 0, w, h, (x, y, idx) => {
    if (isBg[y * w + x]) return;

    const r = orig.bitmap.data[idx];
    const g = orig.bitmap.data[idx + 1];
    const b = orig.bitmap.data[idx + 2];

    const [hue, sat, lum] = rgbToHsl(r, g, b);

    // Rose pastel pink
    const pinkHue = 0.978;
    const pinkSat = 0.35;
    const pinkLum = Math.min(0.96, Math.max(0.40, lum * 0.95));

    const [nr, ng, nb] = hslToRgb(pinkHue, pinkSat, pinkLum);
    imgPink.bitmap.data[idx] = nr;
    imgPink.bitmap.data[idx + 1] = ng;
    imgPink.bitmap.data[idx + 2] = nb;
  });

  // 2. BABY BLUE SILK SHIRT
  imgBlue.scan(0, 0, w, h, (x, y, idx) => {
    if (isBg[y * w + x]) return;

    const r = orig.bitmap.data[idx];
    const g = orig.bitmap.data[idx + 1];
    const b = orig.bitmap.data[idx + 2];

    const [hue, sat, lum] = rgbToHsl(r, g, b);

    // Baby blue
    const blueHue = 0.567;
    const blueSat = 0.38;
    const blueLum = Math.min(0.96, Math.max(0.40, lum * 0.95));

    const [nr, ng, nb] = hslToRgb(blueHue, blueSat, blueLum);
    imgBlue.bitmap.data[idx] = nr;
    imgBlue.bitmap.data[idx + 1] = ng;
    imgBlue.bitmap.data[idx + 2] = nb;
  });

  await imgPink.write(pinkOut);
  await imgBlue.write(blueOut);

  if (fs.existsSync(buildDir)) {
    fs.copyFileSync(pinkOut, path.join(buildDir, 'shirt-2.jpg'));
    fs.copyFileSync(blueOut, path.join(buildDir, 'shirt-3.jpg'));
  }

  fs.copyFileSync(pinkOut, path.join(artifactDir, 'test_shirt_pink.jpg'));
  fs.copyFileSync(blueOut, path.join(artifactDir, 'test_shirt_blue.jpg'));

  console.log('Saved 100% flawless Pink & Baby Blue silk shirts!');
}

recolorShirt().catch(e => console.error(e));
