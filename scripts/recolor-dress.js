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

async function recolorDress() {
  const srcPath = path.join(__dirname, '..', 'public', 'images', 'products', 'dress-1.jpg');
  const blackOut = path.join(__dirname, '..', 'public', 'images', 'products', 'dress-2.jpg');
  const navyOut = path.join(__dirname, '..', 'public', 'images', 'products', 'dress-3.jpg');
  const buildDir = path.join(__dirname, '..', 'build', 'images', 'products');

  const orig = await Jimp.read(srcPath);
  const w = orig.bitmap.width;
  const h = orig.bitmap.height;

  const imgBlack = orig.clone();
  const imgNavy = orig.clone();

  const neckPts = [
    [358, 167], [370, 172], [380, 174], [390, 181], [400, 186],
    [410, 191], [420, 198], [430, 207], [440, 212], [450, 212],
    [460, 210], [470, 202], [480, 193], [490, 186], [500, 182],
    [510, 177], [520, 172], [535, 165]
  ];

  function getNeckY(x) {
    if (x <= 358) return 167;
    if (x >= 535) return 165;
    for (let i = 0; i < neckPts.length - 1; i++) {
      if (x >= neckPts[i][0] && x <= neckPts[i+1][0]) {
        const t = (x - neckPts[i][0]) / (neckPts[i+1][0] - neckPts[i][0]);
        return neckPts[i][1] + t * (neckPts[i+1][1] - neckPts[i][1]);
      }
    }
    return 212;
  }

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const r = orig.bitmap.data[idx];
      const g = orig.bitmap.data[idx + 1];
      const b = orig.bitmap.data[idx + 2];

      if (y < 125) continue;

      let alpha = 0;

      // Outer boundary check for upper torso / shoulders / flank
      if (y < 240 && (x < 348 || x > 547)) {
        continue;
      }

      if (y < 167) {
        // Upper strap region
        const isLeftStrap = (x >= 348 && x <= 358);
        const isRightStrap = (x >= 535 && x <= 545);
        if (isLeftStrap || isRightStrap) {
          const redExcess = r - (g + b) / 2;
          const lum = (r + g + b) / 765;
          if (redExcess >= 8 && lum < 0.85) {
            alpha = Math.max(0, Math.min(1, (redExcess - 6) / 26));
          }
        }
      } else {
        // Bodice, skirt, etc.
        const neckY = getNeckY(x);
        if (x >= 358 && x <= 535 && y < neckY - 1) {
          alpha = 0;
        } else {
          const redExcess = r - (g + b) / 2;
          const diff = Math.max(r, g, b) - Math.min(r, g, b);

          if (redExcess >= 5 && diff >= 6) {
            alpha = Math.max(0, Math.min(1, (redExcess - 5) / 26));

            // Soft blend right at the neckline contour to prevent hard step
            if (x >= 358 && x <= 535 && y < neckY + 3) {
              const dy = y - (neckY - 1);
              const neckWeight = Math.max(0, Math.min(1, dy / 4));
              alpha *= neckWeight;
            }
          }
        }
      }

      if (alpha > 0) {
        const [hue, sat, lum] = rgbToHsl(r, g, b);
        const bgVal = Math.round((r + g + b) / 3);

        // 1. BLACK SATIN DRESS (Đen) - deep lustrous black silk satin with smooth anti-aliased edge
        const blackLum = Math.pow(lum, 1.25) * 0.46 + 0.035;
        const targetB = Math.round(blackLum * 255);
        imgBlack.bitmap.data[idx] = Math.round(bgVal * (1 - alpha) + targetB * alpha);
        imgBlack.bitmap.data[idx + 1] = Math.round(bgVal * (1 - alpha) + targetB * alpha);
        imgBlack.bitmap.data[idx + 2] = Math.round(bgVal * (1 - alpha) + targetB * alpha);

        // 2. NAVY BLUE SATIN DRESS (Navy) - deep sapphire blue satin with smooth anti-aliased edge
        const navyLum = Math.pow(lum, 1.1) * 0.52 + 0.04;
        const [nr, ng, nb] = hslToRgb(0.61, 0.75, navyLum);
        imgNavy.bitmap.data[idx] = Math.round(bgVal * (1 - alpha) + nr * alpha);
        imgNavy.bitmap.data[idx + 1] = Math.round(bgVal * (1 - alpha) + ng * alpha);
        imgNavy.bitmap.data[idx + 2] = Math.round(bgVal * (1 - alpha) + nb * alpha);
      }
    }
  }

  await imgBlack.write(blackOut);
  await imgNavy.write(navyOut);

  if (fs.existsSync(buildDir)) {
    fs.copyFileSync(blackOut, path.join(buildDir, 'dress-2.jpg'));
    fs.copyFileSync(navyOut, path.join(buildDir, 'dress-3.jpg'));
  }

  console.log('Successfully generated anti-aliased smooth Black and Navy gala satin dresses!');
}

recolorDress().catch(e => console.error(e));
