const fs = require('fs');
const path = require('path');

const candidates = [
  { name: 'c1-594938298603.jpg', url: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80' },
  { name: 'c2-574201635302.jpg', url: 'https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?w=800&q=80' },
  { name: 'c3-1684262855346.jpg', url: 'https://images.unsplash.com/photo-1684262855346-cc759471e3ea?w=800&q=80' },
  { name: 'c4-1792542070199.jpg', url: 'https://images.unsplash.com/photo-1792542070199-19656851b49d?w=800&q=80' },
  { name: 'c5-1747817230321.jpg', url: 'https://images.unsplash.com/photo-1747817230321-4ad317ac0809?w=800&q=80' }
];

async function check() {
  for (const c of candidates) {
    try {
      const res = await fetch(c.url);
      if (res.ok) {
        const buf = Buffer.from(await res.arrayBuffer());
        fs.writeFileSync(path.join(__dirname, c.name), buf);
        console.log(`[OK] ${c.name}: ${buf.length} bytes`);
      } else {
        console.log(`[FAIL] ${c.name}: ${res.status}`);
      }
    } catch (e) {
      console.log(`[ERROR] ${c.name}: ${e.message}`);
    }
  }
}

check();

