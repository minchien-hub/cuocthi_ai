const fs = require('fs');
const path = require('path');

const updates = [
  {
    url: 'https://images.pexels.com/photos/15214041/pexels-photo-15214041.jpeg?auto=compress&cs=tinysrgb&w=600',
    prefix: 'croptop'
  },
  {
    url: 'https://images.pexels.com/photos/16550502/pexels-photo-16550502/free-photo-of-portrait-of-a-female-model-wearing-a-sequin-dress.jpeg?auto=compress&cs=tinysrgb&w=600',
    prefix: 'cocktail'
  }
];

async function run() {
  const targets = [
    path.join(__dirname, '..', 'public', 'images', 'products'),
    path.join(__dirname, '..', 'build', 'images', 'products')
  ];

  for (const item of updates) {
    const res = await fetch(item.url);
    if (!res.ok) {
      console.error('Failed to fetch', item.url);
      continue;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    for (let i = 1; i <= 3; i++) {
      const fileName = `${item.prefix}-${i}.jpg`;
      for (const dir of targets) {
        if (fs.existsSync(dir)) {
          fs.writeFileSync(path.join(dir, fileName), buffer);
          console.log(`Saved ${fileName} to ${dir}`);
        }
      }
    }
  }
  console.log('Done updating croptop & cocktail images!');
}

run();

