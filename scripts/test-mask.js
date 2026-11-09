const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');

async function testMask() {
  const orig = await Jimp.read('public/images/products/shirt-1.jpg');
  const w = orig.bitmap.width;
  const h = orig.bitmap.height;

  const isBg = new Uint8Array(w * h);
  const queue = [];

  // Start BFS strictly from border pixels
  for (let x = 0; x < w; x++) {
    queue.push([x, 0]);
    queue.push([x, h - 1]);
    isBg[x] = 1;
    isBg[(h - 1) * w + x] = 1;
  }
  for (let y = 0; y < h; y++) {
    queue.push([0, y]);
    queue.push([w - 1, y]);
    isBg[y * w] = 1;
    isBg[y * w + (w - 1)] = 1;
  }

  let head = 0;
  while (head < queue.length) {
    const [cx, cy] = queue[head++];
    const cIdx = (cy * w + cx) * 4;
    const cr = orig.bitmap.data[cIdx];
    const cg = orig.bitmap.data[cIdx + 1];
    const cb = orig.bitmap.data[cIdx + 2];

    const neighbors = [
      [cx + 1, cy], [cx - 1, cy],
      [cx, cy + 1], [cx, cy - 1]
    ];

    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
        const nidx = ny * w + nx;
        if (!isBg[nidx]) {
          const npidx = nidx * 4;
          const nr = orig.bitmap.data[npidx];
          const ng = orig.bitmap.data[npidx + 1];
          const nb = orig.bitmap.data[npidx + 2];

          // Background pixel must be very close to border background (245, 245, 245)
          // AND difference from current pixel must be tiny (flat background)
          const isFlat = Math.abs(nr - cr) <= 2 && Math.abs(ng - cg) <= 2 && Math.abs(nb - cb) <= 2;
          const isNear245 = Math.abs(nr - 245) <= 4 && Math.abs(ng - 245) <= 4 && Math.abs(nb - 245) <= 4;

          if (isNear245 && isFlat) {
            isBg[nidx] = 1;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }

  // Create visual mask to check
  const debugMask = orig.clone();
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = y * w + x;
      const pidx = idx * 4;
      if (isBg[idx]) {
        debugMask.bitmap.data[pidx] = 0;
        debugMask.bitmap.data[pidx + 1] = 255;
        debugMask.bitmap.data[pidx + 2] = 0; // Green for background
      }
    }
  }

  await debugMask.write('C:\\Users\\ADMIN\\.gemini\\antigravity\\brain\\069c1d20-f114-42b4-81e6-d6378742dd51\\mask_debug.jpg');
  console.log('Mask saved for verification');
}

testMask().catch(e => console.error(e));
