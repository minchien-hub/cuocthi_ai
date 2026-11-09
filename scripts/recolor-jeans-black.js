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

async function fixBlackJeans() {
  const srcPath = path.join(__dirname, '..', 'public', 'images', 'products', 'jeans-1.jpg');
  const pubOut = path.join(__dirname, '..', 'public', 'images', 'products', 'jeans-3.jpg');
  const buildOut = path.join(__dirname, '..', 'build', 'images', 'products', 'jeans-3.jpg');
  const artOut = 'C:\\Users\\ADMIN\\.gemini\\antigravity\\brain\\069c1d20-f114-42b4-81e6-d6378742dd51\\test_jeans_black_clean.jpg';

  const orig = await Jimp.read(srcPath);
  const w = orig.bitmap.width;
  const h = orig.bitmap.height;
  const black = orig.clone();

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const r = orig.bitmap.data[idx];
      const g = orig.bitmap.data[idx + 1];
      const b = orig.bitmap.data[idx + 2];
      const diff = Math.max(r, g, b) - Math.min(r, g, b);
      const lum = (Math.max(r, g, b) + Math.min(r, g, b)) / 510;

      // Exact jeans mask
      let isJeans = false;
      // Jeans is strictly between y = 75 and y = 1125 (waistband to hem)
      // Any y < 75 is mannequin torso; any y > 1125 is floor drop shadow
      if (y >= 75 && y <= 1125) {
        if (y < 95) {
          // Top waistband seam: only actual denim blue or brass button
          if (b > r + 6 || r > b + 15) isJeans = true;
        } else {
          // Neutral light pixels (mannequin / background) are excluded
          const isNeutralLight = (diff <= 6 && lum > 0.78);
          if (!isNeutralLight && lum < 0.88) {
            isJeans = true;
          }
        }
      }

      if (isJeans) {
        const [hue, sat, l] = rgbToHsl(r, g, b);

        // Keep brass button & rivets
        const isBrass = (r > b + 25 && sat > 0.25 && l > 0.35 && l < 0.75);

        if (!isBrass) {
          // Deep authentic black denim
          const blackLum = Math.pow(l, 1.1) * 0.35;
          const [br, bg, bb] = hslToRgb(0.60, 0.04, blackLum);
          black.bitmap.data[idx] = br;
          black.bitmap.data[idx + 1] = bg;
          black.bitmap.data[idx + 2] = bb;
        }
      }
    }
  }

  await black.write(pubOut);
  await black.write(buildOut);
  await black.write(artOut);

  console.log('Successfully generated clean jeans-3.jpg (Đen)!');
}

fixBlackJeans().catch(console.error);

