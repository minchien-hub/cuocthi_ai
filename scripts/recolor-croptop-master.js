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

async function recolorCroptop() {
  const srcPath = 'C:\\Users\\ADMIN\\.gemini\\antigravity\\brain\\069c1d20-f114-42b4-81e6-d6378742dd51\\croptop_1_1794155459434.jpg';
  const pubDir = path.join(__dirname, '..', 'public', 'images', 'products');
  const buildDir = path.join(__dirname, '..', 'build', 'images', 'products');
  const artDir = 'C:\\Users\\ADMIN\\.gemini\\antigravity\\brain\\069c1d20-f114-42b4-81e6-d6378742dd51';

  // 1. Copy master image (Hồng pastel) to croptop-1.jpg
  fs.copyFileSync(srcPath, path.join(pubDir, 'croptop-1.jpg'));
  fs.copyFileSync(srcPath, path.join(buildDir, 'croptop-1.jpg'));
  console.log('Saved croptop-1.jpg (Hồng pastel)');

  const orig = await Jimp.read(srcPath);
  const w = orig.bitmap.width;
  const h = orig.bitmap.height;

  const imgCream = orig.clone();
  const imgMint = orig.clone();

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const r = orig.bitmap.data[idx];
      const g = orig.bitmap.data[idx + 1];
      const b = orig.bitmap.data[idx + 2];

      const diff = Math.max(r, g, b) - Math.min(r, g, b);
      const lum = (Math.max(r, g, b) + Math.min(r, g, b)) / 510;

      // Background is clean white (diff <= 5 && lum > 0.94)
      // Floor shadow is neutral grey (diff <= 5)
      const isBg = (diff <= 5);
      // Brand label tag (inside neck, neutral white/black)
      const isNeckTag = (y >= 270 && y <= 330 && x >= 400 && x <= 500 && diff <= 12);

      if (!isBg && !isNeckTag) {
        const [hue, sat, l] = rgbToHsl(r, g, b);

        // 2. CREAM WHITE (Trắng kem)
        // Soft warm ivory cream
        const creamLum = Math.min(0.98, l * 1.04);
        const [cr, cg, cb] = hslToRgb(0.12, 0.16, creamLum);
        imgCream.bitmap.data[idx] = cr;
        imgCream.bitmap.data[idx + 1] = cg;
        imgCream.bitmap.data[idx + 2] = cb;

        // 3. MINT GREEN (Xanh mint)
        // Fresh pastel mint green
        const mintLum = Math.min(0.96, l * 0.98);
        const [mr, mg, mb] = hslToRgb(0.38, 0.35, mintLum);
        imgMint.bitmap.data[idx] = mr;
        imgMint.bitmap.data[idx + 1] = mg;
        imgMint.bitmap.data[idx + 2] = mb;
      }
    }
  }

  const pCream = path.join(pubDir, 'croptop-2.jpg');
  const pMint = path.join(pubDir, 'croptop-3.jpg');

  await imgCream.write(pCream);
  await imgMint.write(pMint);

  fs.copyFileSync(pCream, path.join(buildDir, 'croptop-2.jpg'));
  fs.copyFileSync(pMint, path.join(buildDir, 'croptop-3.jpg'));

  fs.copyFileSync(pCream, path.join(artDir, 'test_croptop_cream.jpg'));
  fs.copyFileSync(pMint, path.join(artDir, 'test_croptop_mint.jpg'));

  console.log('Successfully generated and synced croptop-2 (Trắng kem) and croptop-3 (Xanh mint)!');
}

recolorCroptop().catch(console.error);

