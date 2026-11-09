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
const artDir = 'C:\\Users\\ADMIN\\.gemini\\antigravity\\brain\\069c1d20-f114-42b4-81e6-d6378742dd51';

async function saveImages(name, img2, img3) {
  const p2 = path.join(pubDir, `${name}-2.jpg`);
  const p3 = path.join(pubDir, `${name}-3.jpg`);
  await img2.write(p2);
  await img3.write(p3);
  if (fs.existsSync(buildDir)) {
    fs.copyFileSync(p2, path.join(buildDir, `${name}-2.jpg`));
    fs.copyFileSync(p3, path.join(buildDir, `${name}-3.jpg`));
  }
  fs.copyFileSync(p2, path.join(artDir, `test_${name}_2.jpg`));
  fs.copyFileSync(p3, path.join(artDir, `test_${name}_3.jpg`));
  console.log(`Saved ${name}-2 and ${name}-3`);
}

async function processCoat() {
  const coat = await Jimp.read(path.join(pubDir, 'coat-1.jpg'));
  const w = coat.bitmap.width, h = coat.bitmap.height;
  const cBlack = coat.clone();
  const cGrey = coat.clone();

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const r = coat.bitmap.data[idx], g = coat.bitmap.data[idx+1], b = coat.bitmap.data[idx+2];
      const diff = Math.max(r, g, b) - Math.min(r, g, b);
      const lum = (Math.max(r, g, b) + Math.min(r, g, b)) / 510;
      const isBg = (diff < 12 && lum > 0.85);

      if (!isBg) {
        // Black coat (Đen)
        const blackLum = Math.pow(lum, 1.1) * 0.35;
        const [br, bg, bb] = hslToRgb(0.6, 0.04, blackLum);
        cBlack.bitmap.data[idx] = br;
        cBlack.bitmap.data[idx+1] = bg;
        cBlack.bitmap.data[idx+2] = bb;

        // Grey coat (Xám)
        const greyLum = 0.38 + lum * 0.40;
        const [gr, gg, gb] = hslToRgb(0, 0, greyLum);
        cGrey.bitmap.data[idx] = gr;
        cGrey.bitmap.data[idx+1] = gg;
        cGrey.bitmap.data[idx+2] = gb;
      }
    }
  }

  await saveImages('coat', cBlack, cGrey);
}

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
      const isBg = (diff < 12 && lum > 0.88);

      if (!isBg) {
        const [hue, sat] = rgbToHsl(r, g, b);
        // Retain gold buckles if very shiny/bright yellow
        const isGoldHardware = (lum > 0.65 && sat > 0.40 && hue > 0.10 && hue < 0.16);

        if (!isGoldHardware) {
          // Black leather bag
          const blackLum = Math.pow(lum, 1.1) * 0.36;
          const [br, bg, bb] = hslToRgb(0.6, 0.05, blackLum);
          bBlack.bitmap.data[idx] = br;
          bBlack.bitmap.data[idx+1] = bg;
          bBlack.bitmap.data[idx+2] = bb;

          // Camel leather bag
          const camelLum = Math.min(0.92, lum * 1.15);
          const [cr, cg, cb] = hslToRgb(0.08, 0.55, camelLum);
          bCamel.bitmap.data[idx] = cr;
          bCamel.bitmap.data[idx+1] = cg;
          bCamel.bitmap.data[idx+2] = cb;
        }
      }
    }
  }

  await saveImages('bag', bBlack, bCamel);
}

async function processJeans() {
  const jeans = await Jimp.read(path.join(pubDir, 'jeans-1.jpg'));
  const w = jeans.bitmap.width, h = jeans.bitmap.height;
  const jLight = jeans.clone();
  const jBlack = jeans.clone();

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const r = jeans.bitmap.data[idx], g = jeans.bitmap.data[idx+1], b = jeans.bitmap.data[idx+2];
      const diff = Math.max(r, g, b) - Math.min(r, g, b);
      const lum = (Math.max(r, g, b) + Math.min(r, g, b)) / 510;
      const isBg = (diff < 12 && lum > 0.88);

      if (!isBg) {
        // Light blue jeans (Xanh nhạt)
        const lightLum = 0.42 + lum * 0.45;
        const [lr, lg, lb] = hslToRgb(0.57, 0.45, lightLum);
        jLight.bitmap.data[idx] = lr;
        jLight.bitmap.data[idx+1] = lg;
        jLight.bitmap.data[idx+2] = lb;

        // Black jeans (Đen)
        const blackLum = Math.pow(lum, 1.1) * 0.40;
        const [br, bg, bb] = hslToRgb(0.6, 0.04, blackLum);
        jBlack.bitmap.data[idx] = br;
        jBlack.bitmap.data[idx+1] = bg;
        jBlack.bitmap.data[idx+2] = bb;
      }
    }
  }

  await saveImages('jeans', jLight, jBlack);
}

async function run() {
  await processCoat();
  await processBag();
  await processJeans();
}

run().catch(console.error);

