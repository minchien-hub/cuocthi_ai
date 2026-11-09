const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');

async function updatePalazzo() {
  const srcPath = 'C:/Users/ADMIN/.gemini/antigravity/brain/069c1d20-f114-42b4-81e6-d6378742dd51/palazzo_1_1794120300081.jpg';
  const pubDir = path.join(__dirname, '..', 'public', 'images', 'products');
  const buildDir = path.join(__dirname, '..', 'build', 'images', 'products');

  const orig = await Jimp.read(srcPath);
  const w = orig.bitmap.width, h = orig.bitmap.height;

  // 1. PALAZZO-1: HỒNG PHẤN
  const p1Pub = path.join(pubDir, 'palazzo-1.jpg');
  await orig.write(p1Pub);
  if (fs.existsSync(buildDir)) {
    fs.copyFileSync(p1Pub, path.join(buildDir, 'palazzo-1.jpg'));
  }
  console.log('Saved palazzo-1.jpg (Hồng phấn)');

  // 2. PALAZZO-2 (ĐEN) & PALAZZO-3 (TRẮNG)
  const black = orig.clone();
  const white = orig.clone();

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const r = orig.bitmap.data[idx];
      const g = orig.bitmap.data[idx+1];
      const b = orig.bitmap.data[idx+2];

      const diffG = r - g;
      const diffB = r - b;
      const diff = Math.min(diffG, diffB);
      const lum = (r * 0.299 + g * 0.587 + b * 0.114) / 255;

      // Skip mannequin at top
      if (y < 50) continue;

      // Floor shadow vs fabric
      const isFloor = (y >= 1115 && lum >= 0.78);
      if (isFloor) {
        const grey = Math.round((r + g + b) / 3);
        black.bitmap.data[idx] = grey;
        black.bitmap.data[idx+1] = grey;
        black.bitmap.data[idx+2] = grey;

        white.bitmap.data[idx] = grey;
        white.bitmap.data[idx+1] = grey;
        white.bitmap.data[idx+2] = grey;
        continue;
      }

      // Fabric recoloring
      if (diff >= 12) {
        // Pure fabric
        // Black
        const bLum = Math.pow(lum, 1.35) * 0.28 + 0.035;
        const tb = Math.round(bLum * 255);
        black.bitmap.data[idx] = tb;
        black.bitmap.data[idx+1] = tb;
        black.bitmap.data[idx+2] = tb;

        // White
        const wLum = 0.84 + Math.pow(lum, 1.1) * 0.14;
        white.bitmap.data[idx] = Math.round(wLum * 255);
        white.bitmap.data[idx+1] = Math.round(wLum * 255);
        white.bitmap.data[idx+2] = Math.round(Math.max(0, (wLum - 0.012) * 255));
      } else if (diff >= 5) {
        // Anti-aliased boundary
        const weight = (diff - 5) / 7;
        const bg = Math.round((r + g + b) / 3);

        // Black
        const bLum = Math.pow(lum, 1.35) * 0.28 + 0.035;
        const tb = Math.round(bLum * 255);
        black.bitmap.data[idx] = Math.round(bg * (1 - weight) + tb * weight);
        black.bitmap.data[idx+1] = Math.round(bg * (1 - weight) + tb * weight);
        black.bitmap.data[idx+2] = Math.round(bg * (1 - weight) + tb * weight);

        // White
        const wLum = 0.84 + Math.pow(lum, 1.1) * 0.14;
        const twr = Math.round(wLum * 255);
        const twg = Math.round(wLum * 255);
        const twb = Math.round(Math.max(0, (wLum - 0.012) * 255));
        white.bitmap.data[idx] = Math.round(bg * (1 - weight) + twr * weight);
        white.bitmap.data[idx+1] = Math.round(bg * (1 - weight) + twg * weight);
        white.bitmap.data[idx+2] = Math.round(bg * (1 - weight) + twb * weight);
      }
    }
  }

  const p2Pub = path.join(pubDir, 'palazzo-2.jpg');
  const p3Pub = path.join(pubDir, 'palazzo-3.jpg');

  await black.write(p2Pub);
  await white.write(p3Pub);

  if (fs.existsSync(buildDir)) {
    fs.copyFileSync(p2Pub, path.join(buildDir, 'palazzo-2.jpg'));
    fs.copyFileSync(p3Pub, path.join(buildDir, 'palazzo-3.jpg'));
  }

  console.log('Successfully updated palazzo-1, palazzo-2, and palazzo-3!');
}

updatePalazzo().catch(console.error);
