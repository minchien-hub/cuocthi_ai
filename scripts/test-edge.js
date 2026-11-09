const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');

async function testEdgeBarrier() {
  const orig = await Jimp.read('public/images/products/shirt-1.jpg');
  const w = orig.bitmap.width;
  const h = orig.bitmap.height;

  // 1. Compute gradient magnitude
  const isEdge = new Uint8Array(w * h);
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const idx = (y * w + x) * 4;
      const r = orig.bitmap.data[idx];
      const rx = orig.bitmap.data[(y * w + x + 1) * 4];
      const ry = orig.bitmap.data[((y + 1) * w + x) * 4];
      const grad = Math.abs(r - rx) + Math.abs(r - ry);
      if (grad >= 10) {
        isEdge[y * w + x] = 1;
      }
    }
  }

  // 2. Flood fill from borders
  const isBg = new Uint8Array(w * h);
  const queue = [];

  function pushBg(x, y) {
    const idx = y * w + x;
    if (!isBg[idx] && !isEdge[idx]) {
      isBg[idx] = 1;
      queue.push([x, y]);
    }
  }

  // Border seeds
  for (let x = 0; x < w; x++) {
    pushBg(x, 0);
    pushBg(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    pushBg(0, y);
    pushBg(w - 1, y);
  }

  // Armpit gap seeds
  const gapSeeds = [[210, 600], [210, 750], [680, 600], [680, 750]];
  for (const [gx, gy] of gapSeeds) pushBg(gx, gy);

  let head = 0;
  while (head < queue.length) {
    const [cx, cy] = queue[head++];
    const neighbors = [
      [cx + 1, cy], [cx - 1, cy],
      [cx, cy + 1], [cx, cy - 1]
    ];
    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
        const nidx = ny * w + nx;
        if (!isBg[nidx] && !isEdge[nidx]) {
          const npidx = nidx * 4;
          const nr = orig.bitmap.data[npidx];
          // Must still be light background color
          if (nr > 236) {
            isBg[nidx] = 1;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }

  // Also include the outer edges that were barriers
  // Dilate background by 1 pixel to cleanly meet the shirt edge
  const finalBg = new Uint8Array(isBg);
  for (let y = 1; y < h - 1; y++) {
    for (let x = 1; x < w - 1; x++) {
      const idx = y * w + x;
      if (isEdge[idx] && orig.bitmap.data[idx * 4] > 240) {
        if (isBg[idx - 1] || isBg[idx + 1] || isBg[idx - w] || isBg[idx + w]) {
          finalBg[idx] = 1;
        }
      }
    }
  }

  const debug = orig.clone();
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = y * w + x;
      if (finalBg[idx]) {
        debug.bitmap.data[idx * 4] = 0;
        debug.bitmap.data[idx * 4 + 1] = 255;
        debug.bitmap.data[idx * 4 + 2] = 0;
      }
    }
  }

  await debug.write('C:\\Users\\ADMIN\\.gemini\\antigravity\\brain\\069c1d20-f114-42b4-81e6-d6378742dd51\\edge_debug.jpg');
  console.log('Edge barrier mask saved');
}

testEdgeBarrier().catch(e => console.error(e));

