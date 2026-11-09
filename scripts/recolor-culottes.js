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

async function recolorCulottes() {
  const srcPath = path.join(__dirname, '..', 'public', 'images', 'products', 'culottes-1.jpg');
  const beigeOut = path.join(__dirname, '..', 'public', 'images', 'products', 'culottes-2.jpg');
  const blueOut = path.join(__dirname, '..', 'public', 'images', 'products', 'culottes-3.jpg');
  const buildDir = path.join(__dirname, '..', 'build', 'images', 'products');

  const orig = await Jimp.read(srcPath);
  const w = orig.bitmap.width;
  const h = orig.bitmap.height;

  // 1. Waistband top: [x, y]
  const waistPts = [
    [300, 92], [320, 88], [350, 85], [400, 83], [448, 82],
    [490, 82], [530, 83], [560, 85], [580, 88], [600, 92]
  ];

  // 2. Left hip outer: [y, x]
  const leftPts = [
    [92, 300], [105, 296], [120, 290], [140, 282], [170, 274],
    [210, 267], [250, 260], [350, 252], [500, 244], [650, 236],
    [800, 225], [950, 212], [1030, 205], [1065, 205]
  ];

  // 3. Right hip outer: [y, x]
  const rightPts = [
    [92, 600], [105, 604], [120, 610], [140, 618], [170, 626],
    [210, 632], [250, 637], [350, 646], [500, 655], [650, 665],
    [800, 676], [950, 689], [1030, 699], [1065, 701]
  ];

  // 4. Left hem: [x, y] from 205 to 445
  const leftHemPts = [
    [205, 1065], [230, 1072], [260, 1081], [300, 1095], [330, 1100],
    [360, 1098], [390, 1091], [420, 1085], [445, 1078]
  ];

  // 5. Right hem: [x, y] from 455 to 701
  const rightHemPts = [
    [455, 1081], [480, 1088], [510, 1095], [550, 1102], [580, 1101],
    [610, 1093], [640, 1081], [670, 1072], [701, 1065]
  ];

  function interpolate(pts, val) {
    if (val <= pts[0][0]) return pts[0][1];
    if (val >= pts[pts.length - 1][0]) return pts[pts.length - 1][1];
    for (let i = 0; i < pts.length - 1; i++) {
      if (val >= pts[i][0] && val <= pts[i+1][0]) {
        const t = (val - pts[i][0]) / (pts[i+1][0] - pts[i][0]);
        return pts[i][1] + t * (pts[i+1][1] - pts[i][1]);
      }
    }
    return pts[pts.length - 1][1];
  }

  const waistY = new Float32Array(w);
  for (let x = 300; x <= 600; x++) waistY[x] = interpolate(waistPts, x);

  const leftX = new Float32Array(h);
  for (let y = 92; y <= 1065; y++) leftX[y] = interpolate(leftPts, y);

  const rightX = new Float32Array(h);
  for (let y = 92; y <= 1065; y++) rightX[y] = interpolate(rightPts, y);

  const hemY = new Float32Array(w);
  for (let x = 205; x <= 445; x++) hemY[x] = interpolate(leftHemPts, x);
  for (let x = 455; x <= 701; x++) hemY[x] = interpolate(rightHemPts, x);

  const isFabric = new Uint8Array(w * h);

  for (let y = 82; y <= 1102; y++) {
    for (let x = 205; x <= 701; x++) {
      // 1. Top waistband boundary
      if (x >= 300 && x <= 600) {
        if (y < waistY[x]) continue;
      } else {
        if (y < 92) continue;
      }

      // 2. Hip outer boundaries
      if (y <= 1065) {
        if (x < leftX[y] || x > rightX[y]) continue;
      } else {
        if (x < 205 || x > 701) continue;
      }

      // 3. Hem bottom boundaries
      if (x >= 205 && x <= 445) {
        if (y > hemY[x]) continue;
      } else if (x >= 455 && x <= 701) {
        if (y > hemY[x]) continue;
      } else if (x > 445 && x < 455) {
        if (y > 450) {
          const idx = (y * w + x) * 4;
          const lum = (orig.bitmap.data[idx] + orig.bitmap.data[idx+1] + orig.bitmap.data[idx+2]) / 765;
          if (lum >= 0.93) continue;
        }
      }

      // 4. Inseam slit between y=460 and 1081
      if (y >= 460 && y <= 1081 && x >= 445 && x <= 457) {
        const idx = (y * w + x) * 4;
        const lum = (orig.bitmap.data[idx] + orig.bitmap.data[idx+1] + orig.bitmap.data[idx+2]) / 765;
        if (lum >= 0.93) continue;
      }

      isFabric[y * w + x] = 1;
    }
  }

  const imgBeige = orig.clone();
  const imgBlue = orig.clone();

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      if (!isFabric[y * w + x]) continue;

      const r = orig.bitmap.data[idx];
      const g = orig.bitmap.data[idx + 1];
      const b = orig.bitmap.data[idx + 2];
      const [hue, sat, lum] = rgbToHsl(r, g, b);

      // 1. BEIGE LINEN (Be)
      const beigeLum = Math.min(0.95, lum * 0.92);
      const [br, bg, bb] = hslToRgb(0.095, 0.38, beigeLum);
      imgBeige.bitmap.data[idx] = br;
      imgBeige.bitmap.data[idx + 1] = bg;
      imgBeige.bitmap.data[idx + 2] = bb;

      // 2. LIGHT BLUE LINEN (Xanh nhạt)
      const blueLum = Math.min(0.95, lum * 0.92);
      const [lr, lg, lb] = hslToRgb(0.575, 0.40, blueLum);
      imgBlue.bitmap.data[idx] = lr;
      imgBlue.bitmap.data[idx + 1] = lg;
      imgBlue.bitmap.data[idx + 2] = lb;
    }
  }

  await imgBeige.write(beigeOut);
  await imgBlue.write(blueOut);

  if (fs.existsSync(buildDir)) {
    fs.copyFileSync(beigeOut, path.join(buildDir, 'culottes-2.jpg'));
    fs.copyFileSync(blueOut, path.join(buildDir, 'culottes-3.jpg'));
  }

  console.log('Successfully generated clean culottes-2.jpg (Be) and culottes-3.jpg (Xanh nhạt)!');
}

recolorCulottes().catch(console.error);