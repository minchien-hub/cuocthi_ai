const fs = require('fs');
const path = require('path');

const urls = [
  'https://images.pexels.com/photos/6716445/pexels-photo-6716445.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.unsplash.com/photo-1645035930494-806712833ff0?w=600&q=80',
  'https://images.pexels.com/photos/32039109/pexels-photo-32039109/free-photo-of-elegant-pearl-bracelets-in-gift-boxes-on-display.jpeg?auto=compress&cs=tinysrgb&w=600'
];

async function updateBracelet() {
  const targets = [
    path.join(__dirname, '..', 'public', 'images', 'products'),
    path.join(__dirname, '..', 'build', 'images', 'products')
  ];

  for (let i = 0; i < urls.length; i++) {
    const res = await fetch(urls[i]);
    const buffer = Buffer.from(await res.arrayBuffer());
    const fileName = `bracelet-${i + 1}.jpg`;

    for (const targetDir of targets) {
      if (fs.existsSync(targetDir)) {
        const dest = path.join(targetDir, fileName);
        fs.writeFileSync(dest, buffer);
        console.log(`Saved ${fileName} to ${targetDir}`);
      }
    }
  }
  console.log('Pearl bracelet images successfully updated!');
}

updateBracelet();

