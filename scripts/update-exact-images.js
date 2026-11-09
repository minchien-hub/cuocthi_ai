const fs = require('fs');
const path = require('path');

const prodDir = path.join(__dirname, '..', 'public', 'images', 'products');

const extraDownloads = [
  { url: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80', dest: 'bracelet-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80', dest: 'bracelet-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80', dest: 'bracelet-3.jpg' },

  { url: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=600&q=80', dest: 'croptop-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80', dest: 'croptop-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80', dest: 'croptop-3.jpg' },

  { url: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80', dest: 'cocktail-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80', dest: 'cocktail-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80', dest: 'cocktail-3.jpg' },

  { url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80', dest: 'palazzo-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80', dest: 'palazzo-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=600&q=80', dest: 'palazzo-3.jpg' },
];

async function run() {
  for (const item of extraDownloads) {
    const fullPath = path.join(prodDir, item.dest);
    try {
      const res = await fetch(item.url);
      if (res.ok) {
        const buffer = Buffer.from(await res.arrayBuffer());
        fs.writeFileSync(fullPath, buffer);
        console.log(`[OK] ${item.dest}`);
      }
    } catch (e) {
      console.error(`[ERR] ${item.dest}: ${e.message}`);
    }
  }

  // Also synchronize generated products -2 and -3 with -1 if needed
  const prods = [
    'blazer', 'dress', 'pants', 'bag', 'shirt',
    'midi', 'jeans', 'scarf', 'coat', 'maxi',
    'culottes', 'sunglasses'
  ];

  for (const p of prods) {
    const p1 = path.join(prodDir, `${p}-1.jpg`);
    const p2 = path.join(prodDir, `${p}-2.jpg`);
    const p3 = path.join(prodDir, `${p}-3.jpg`);
    if (fs.existsSync(p1)) {
      if (!fs.existsSync(p2) || fs.statSync(p2).size < 1000) {
        fs.copyFileSync(p1, p2);
      }
      if (!fs.existsSync(p3) || fs.statSync(p3).size < 1000) {
        fs.copyFileSync(p1, p3);
      }
    }
  }

  console.log('Finished updating product images!');
}

run();

