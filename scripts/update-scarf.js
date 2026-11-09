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

async function updateScarf() {
  const origPath = path.resolve('public/images/products/scarf-1.jpg');
  const orig = await Jimp.read(origPath);
  const w = orig.bitmap.width, h = orig.bitmap.height;

  const grey = orig.clone();
  const red = orig.clone();

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const r = orig.bitmap.data[idx];
      const g = orig.bitmap.data[idx+1];
      const b = orig.bitmap.data[idx+2];
      const diff = Math.max(r, g, b) - Math.min(r, g, b);
      const lum = (r + g + b) / 3;

      // Scarf bounding box
      if (x < 208 || x > 801 || y < 174 || y > 875) continue;

      // White studio background protection
      if (lum > 225 && diff < 30) continue;
      if (diff < 15) continue;

      const [hue, sat, origL] = rgbToHsl(r, g, b);

      // Scarf wool condition:
      // Wool is warm camel: hue in [0.045, 0.12], sat > 0.16, diff > 22
      const isScarf = (sat > 0.16) && (diff > 22) && (hue >= 0.045 && hue <= 0.12);

      if (isScarf) {
        // 1. Grey cashmere (scarf-2.jpg): soft elegant heather grey
        const greyLum = 0.18 + origL * 0.68;
        const [gr, gg, gb] = hslToRgb(0.60, 0.02, greyLum);
        grey.bitmap.data[idx] = gr;
        grey.bitmap.data[idx+1] = gg;
        grey.bitmap.data[idx+2] = gb;

        // 2. Đỏ đô (scarf-3.jpg): deep rich luxury wine red / burgundy
        const burgundyLum = 0.06 + origL * 0.38;
        const [rr, rg, rb] = hslToRgb(0.985, 0.72, burgundyLum);
        red.bitmap.data[idx] = rr;
        red.bitmap.data[idx+1] = rg;
        red.bitmap.data[idx+2] = rb;
      }
    }
  }

  const targets = [
    { name: 'scarf-2.jpg', img: grey },
    { name: 'scarf-3.jpg', img: red }
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

  console.log('Successfully updated scarf variants!');
}

updateScarf();

