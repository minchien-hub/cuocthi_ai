const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');

async function processBlazer() {
  const srcPath = path.join(__dirname, '..', 'public', 'images', 'products', 'blazer-1.jpg');
  const beigeOut = path.join(__dirname, '..', 'public', 'images', 'products', 'blazer-2.jpg');
  const creamOut = path.join(__dirname, '..', 'public', 'images', 'products', 'blazer-3.jpg');
  const buildDir = path.join(__dirname, '..', 'build', 'images', 'products');
  const artifactDir = 'C:\\Users\\ADMIN\\.gemini\\antigravity\\brain\\069c1d20-f114-42b4-81e6-d6378742dd51';

  const orig = await Jimp.read(srcPath);
  const w = orig.bitmap.width;
  const h = orig.bitmap.height;

  // Clone for variants
  const imgBeige = orig.clone();
  const imgCream = orig.clone();

  // Helper to check if pixel is inside the inner collar / silk lining V area
  function isInnerCollar(x, y) {
    // V-neck triangular lining area
    if (y < 95 || y > 380) return false;
    // Tapering V: wider at top (around y=110, x between 365 and 530), narrowing down to y=380 (x around 435..450)
    const midX = 448;
    const halfWidth = 78 * (1 - (y - 95) / (380 - 95));
    return Math.abs(x - midX) < Math.max(12, halfWidth);
  }

  // Button areas to protect
  function isNearButton(x, y) {
    // Center buttons
    const centerButtons = [440, 525, 605, 685];
    for (const cy of centerButtons) {
      const dx = x - 440;
      const dy = y - cy;
      if (dx * dx + dy * dy < 24 * 24) return true;
    }
    // Left sleeve buttons
    if (x < 110 && y > 730 && y < 910) return true;
    // Right sleeve buttons
    if (x > 785 && y > 730 && y < 910) return true;
    return false;
  }

  // 1. BEIGE VARIANT
  imgBeige.scan(0, 0, w, h, (x, y, idx) => {
    const r = orig.bitmap.data[idx];
    const g = orig.bitmap.data[idx + 1];
    const b = orig.bitmap.data[idx + 2];

    // Background
    if (r > 248 && g > 248 && b > 248) return;

    // Preserve inner collar lining & label
    if (isInnerCollar(x, y)) return;

    // Preserve buttons
    if (isNearButton(x, y)) {
      // If it looks gold or dark button shadow, preserve
      if ((r - b > 15 && r > 40) || (r < 60 && g < 60 && b < 60)) return;
    }

    const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    const t = Math.pow(lum, 0.85);

    // Rich warm camel/beige
    const newR = Math.round(155 + t * (246 - 155));
    const newG = Math.round(124 + t * (232 - 124));
    const newB = Math.round(88 + t * (205 - 88));

    imgBeige.bitmap.data[idx] = Math.min(255, Math.max(0, newR));
    imgBeige.bitmap.data[idx + 1] = Math.min(255, Math.max(0, newG));
    imgBeige.bitmap.data[idx + 2] = Math.min(255, Math.max(0, newB));
  });

  // 2. CREAM WHITE VARIANT
  imgCream.scan(0, 0, w, h, (x, y, idx) => {
    const r = orig.bitmap.data[idx];
    const g = orig.bitmap.data[idx + 1];
    const b = orig.bitmap.data[idx + 2];

    if (r > 248 && g > 248 && b > 248) return;
    if (isInnerCollar(x, y)) return;

    if (isNearButton(x, y)) {
      if ((r - b > 15 && r > 40) || (r < 60 && g < 60 && b < 60)) return;
    }

    const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    const t = Math.pow(lum, 0.8);

    // Crisp luxury cream/ivory with soft warm undertone
    const newR = Math.round(180 + t * (255 - 180));
    const newG = Math.round(175 + t * (252 - 175));
    const newB = Math.round(162 + t * (242 - 162));

    imgCream.bitmap.data[idx] = Math.min(255, Math.max(0, newR));
    imgCream.bitmap.data[idx + 1] = Math.min(255, Math.max(0, newG));
    imgCream.bitmap.data[idx + 2] = Math.min(255, Math.max(0, newB));
  });

  await imgBeige.write(beigeOut);
  await imgCream.write(creamOut);

  if (fs.existsSync(buildDir)) {
    fs.copyFileSync(beigeOut, path.join(buildDir, 'blazer-2.jpg'));
    fs.copyFileSync(creamOut, path.join(buildDir, 'blazer-3.jpg'));
  }

  fs.copyFileSync(beigeOut, path.join(artifactDir, 'test_blazer_beige.jpg'));
  fs.copyFileSync(creamOut, path.join(artifactDir, 'test_blazer_cream.jpg'));

  console.log('Successfully generated perfection for Beige and Cream blazers!');
}

processBlazer().catch(e => console.error(e));
