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

async function updateBagVariants() {
  const origPath = path.resolve('public/images/products/bag-1.jpg');
  const bag = await Jimp.read(origPath);
  const w = bag.bitmap.width, h = bag.bitmap.height;

  // 1. Precise gold hardware mask to preserve 100% original gold metal
  const isGold = new Uint8Array(w * h);

  // Center lock: exact envelope (y: 536..648)
  for (let y = 536; y <= 648; y++) {
    for (let x = 598; x <= 682; x++) {
      if (y < 558) {
        if (x >= 610 && x <= 680) isGold[y * w + x] = 1;
      } else if (y <= 628) {
        if (x >= 598 && x <= 682) isGold[y * w + x] = 1;
      } else {
        const dy = y - 628;
        if (x >= 598 + dy * 1.5 && x <= 682 - dy * 1.4) isGold[y * w + x] = 1;
      }
    }
  }

  // Exact studs & rivets with local color detection
  const studCenters = [
    { cx: 497, cy: 509, r: 8 }, // left flap stud
    { cx: 754, cy: 487, r: 8 }, // right flap stud
    { cx: 409, cy: 234, r: 8 }, // left handle rivet
    { cx: 602, cy: 244, r: 8 }  // right handle rivet
  ];
  for (const c of studCenters) {
    for (let dy = -c.r; dy <= c.r; dy++) {
      for (let dx = -c.r; dx <= c.r; dx++) {
        if (dx * dx + dy * dy <= c.r * c.r) {
          const idx = ((c.cy + dy) * w + (c.cx + dx)) * 4;
          const r = bag.bitmap.data[idx], g = bag.bitmap.data[idx+1], b = bag.bitmap.data[idx+2];
          if (b >= 80 || (r > 190 && g/r >= 0.66)) {
            isGold[(c.cy + dy) * w + (c.cx + dx)] = 1;
          }
        }
      }
    }
  }

  // Bottom feet
  for (let y = 880; y <= 915; y++) {
    for (let x = 250; x <= 285; x++) {
      const idx = (y * w + x) * 4;
      if (bag.bitmap.data[idx] > 160 && bag.bitmap.data[idx+1] > 130 && bag.bitmap.data[idx+2] > 60) isGold[y * w + x] = 1;
    }
    for (let x = 370; x <= 415; x++) {
      const idx = (y * w + x) * 4;
      if (bag.bitmap.data[idx] > 160 && bag.bitmap.data[idx+1] > 130 && bag.bitmap.data[idx+2] > 60) isGold[y * w + x] = 1;
    }
  }
  for (let y = 815; y <= 840; y++) {
    for (let x = 725; x <= 760; x++) {
      const idx = (y * w + x) * 4;
      if (bag.bitmap.data[idx] > 160 && bag.bitmap.data[idx+1] > 130 && bag.bitmap.data[idx+2] > 60) isGold[y * w + x] = 1;
    }
  }

  // Handle rings (D-rings & brackets)
  for (let y = 265; y <= 338; y++) {
    for (let x = 350; x <= 445; x++) {
      const idx = (y * w + x) * 4;
      const r = bag.bitmap.data[idx], g = bag.bitmap.data[idx+1], b = bag.bitmap.data[idx+2];
      const gr = r > 0 ? g / r : 0;
      if ((gr >= 0.74 && b >= 90) || (r >= 220 && g >= 190 && b >= 120)) {
        isGold[y * w + x] = 1;
      }
    }
    for (let x = 595; x <= 680; x++) {
      const idx = (y * w + x) * 4;
      const r = bag.bitmap.data[idx], g = bag.bitmap.data[idx+1], b = bag.bitmap.data[idx+2];
      const gr = r > 0 ? g / r : 0;
      if ((gr >= 0.74 && b >= 90) || (r >= 220 && g >= 190 && b >= 120)) {
        isGold[y * w + x] = 1;
      }
    }
  }

  // Left buckle (x: 475..550, y: 530..649)
  // Right buckle (x: 731..805, y: 504..630)
  for (let y = 530; y <= 649; y++) {
    for (let x = 475; x <= 550; x++) {
      const idx = (y * w + x) * 4;
      const r = bag.bitmap.data[idx], g = bag.bitmap.data[idx+1], b = bag.bitmap.data[idx+2];
      const gr = r > 0 ? g / r : 0;
      if ((gr >= 0.72 && b >= 85) || (r >= 220 && g >= 190 && b >= 120)) {
        isGold[y * w + x] = 1;
      }
    }
  }
  for (let y = 504; y <= 630; y++) {
    for (let x = 731; x <= 805; x++) {
      const idx = (y * w + x) * 4;
      const r = bag.bitmap.data[idx], g = bag.bitmap.data[idx+1], b = bag.bitmap.data[idx+2];
      const gr = r > 0 ? g / r : 0;
      if ((gr >= 0.72 && b >= 85) || (r >= 220 && g >= 190 && b >= 120)) {
        isGold[y * w + x] = 1;
      }
    }
  }

  const bBlack = bag.clone();
  const bCamel = bag.clone();

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;

      if (isGold[y * w + x]) continue;

      const r = bag.bitmap.data[idx];
      const g = bag.bitmap.data[idx+1];
      const b = bag.bitmap.data[idx+2];
      const diff = Math.max(r, g, b) - Math.min(r, g, b);
      const lum = (r + g + b) / 3;

      // Studio background protection
      if (diff < 12 && lum > 230) continue;
      // Studio floor shadow protection
      if (y > 850 && diff < 20) continue;
      if (y > 820 && x > 650 && diff < 25 && lum > 100) continue;

      const [hue, sat, origL] = rgbToHsl(r, g, b);

      // Warm brown leather criteria
      const isLeather = (sat > 0.15) && (diff > 18) && (hue >= 0.012 && hue <= 0.085) && (r > 48);

      if (isLeather) {
        // 1. Black leather variant (bag-2.jpg)
        const blackLum = Math.pow(origL, 1.15) * 0.32;
        const [br, bgVal, bb] = hslToRgb(0.60, 0.04, blackLum);
        bBlack.bitmap.data[idx] = br;
        bBlack.bitmap.data[idx+1] = bgVal;
        bBlack.bitmap.data[idx+2] = bb;

        // 2. Camel leather variant (bag-3.jpg)
        const camelLum = Math.min(0.92, origL * 1.12);
        const [cr, cgVal, cb] = hslToRgb(0.08, 0.52, camelLum);
        bCamel.bitmap.data[idx] = cr;
        bCamel.bitmap.data[idx+1] = cgVal;
        bCamel.bitmap.data[idx+2] = cb;
      }
    }
  }

  const targets = [
    { name: 'bag-2.jpg', img: bBlack },
    { name: 'bag-3.jpg', img: bCamel }
  ];

  for (const t of targets) {
    const pubOut = path.resolve('public/images/products', t.name);
    const buildOut = path.resolve('build/images/products', t.name);
    await t.img.write(pubOut);
    console.log(`Saved ${pubOut}`);
    if (fs.existsSync('build/images/products')) {
      await t.img.write(buildOut);
      console.log(`Saved ${buildOut}`);
    }
  }

  console.log('Successfully updated bag variants!');
}

updateBagVariants();

