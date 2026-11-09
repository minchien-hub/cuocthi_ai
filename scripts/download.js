const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '..', 'public', 'images');

const imageList = [
  // Products (16 products x 3 images = 48 images)
  // 1: Blazer
  { url: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80', dest: 'products/blazer-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?w=600&q=80', dest: 'products/blazer-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80', dest: 'products/blazer-3.jpg' },

  // 2: Dress
  { url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80', dest: 'products/dress-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80', dest: 'products/dress-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80', dest: 'products/dress-3.jpg' },

  // 3: Pants
  { url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80', dest: 'products/pants-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80', dest: 'products/pants-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=600&q=80', dest: 'products/pants-3.jpg' },

  // 4: Bag
  { url: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80', dest: 'products/bag-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=600&q=80', dest: 'products/bag-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80', dest: 'products/bag-3.jpg' },

  // 5: Shirt
  { url: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80', dest: 'products/shirt-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=80', dest: 'products/shirt-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80', dest: 'products/shirt-3.jpg' },

  // 6: Midi
  { url: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=600&q=80', dest: 'products/midi-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=600&q=80', dest: 'products/midi-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80', dest: 'products/midi-3.jpg' },

  // 7: Jeans
  { url: 'https://images.unsplash.com/photo-1542272604-780c96856592?w=600&q=80', dest: 'products/jeans-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=600&q=80', dest: 'products/jeans-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80', dest: 'products/jeans-3.jpg' },

  // 8: Scarf
  { url: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&q=80', dest: 'products/scarf-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=600&q=80', dest: 'products/scarf-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?w=600&q=80', dest: 'products/scarf-3.jpg' },

  // 9: Coat
  { url: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80', dest: 'products/coat-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=600&q=80', dest: 'products/coat-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80', dest: 'products/coat-3.jpg' },

  // 10: Maxi
  { url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80', dest: 'products/maxi-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=600&q=80', dest: 'products/maxi-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1523359346063-d879354c0ea5?w=600&q=80', dest: 'products/maxi-3.jpg' },

  // 11: Culottes
  { url: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80', dest: 'products/culottes-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=600&q=80', dest: 'products/culottes-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80', dest: 'products/culottes-3.jpg' },

  // 12: Sunglasses
  { url: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80', dest: 'products/sunglasses-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80', dest: 'products/sunglasses-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=600&q=80', dest: 'products/sunglasses-3.jpg' },

  // 13: Croptop
  { url: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80', dest: 'products/croptop-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80', dest: 'products/croptop-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=600&q=80', dest: 'products/croptop-3.jpg' },

  // 14: Cocktail
  { url: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80', dest: 'products/cocktail-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80', dest: 'products/cocktail-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80', dest: 'products/cocktail-3.jpg' },

  // 15: Palazzo
  { url: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=600&q=80', dest: 'products/palazzo-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80', dest: 'products/palazzo-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80', dest: 'products/palazzo-3.jpg' },

  // 16: Bracelet
  { url: 'https://images.unsplash.com/photo-1611591475152-477d8c6b7742?w=600&q=80', dest: 'products/bracelet-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80', dest: 'products/bracelet-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80', dest: 'products/bracelet-3.jpg' },

  // Categories
  { url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80', dest: 'categories/cat-ao.jpg' },
  { url: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80', dest: 'categories/cat-quan.jpg' },
  { url: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80', dest: 'categories/cat-dam.jpg' },
  { url: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80', dest: 'categories/cat-phukien.jpg' },

  // Banners & Hero
  { url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80', dest: 'banners/hero.jpg' },
  { url: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80', dest: 'banners/banner-winter.jpg' },
  { url: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80', dest: 'banners/banner-new.jpg' },

  // Models (VTON)
  { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&q=80', dest: 'models/model-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=700&q=80', dest: 'models/model-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=700&q=80', dest: 'models/model-3.jpg' },
  { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80', dest: 'models/model-4.jpg' },

  // About page
  { url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=80', dest: 'about/about-hero.jpg' },
  { url: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=700&q=80', dest: 'about/about-craft.jpg' },
  { url: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80', dest: 'about/team-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', dest: 'about/team-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80', dest: 'about/team-3.jpg' },

  // Instagram Lookbook
  { url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80', dest: 'instagram/insta-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500&q=80', dest: 'instagram/insta-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=500&q=80', dest: 'instagram/insta-3.jpg' },
  { url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80', dest: 'instagram/insta-4.jpg' },
  { url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&q=80', dest: 'instagram/insta-5.jpg' },
  { url: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&q=80', dest: 'instagram/insta-6.jpg' },

  // Avatars
  { url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80', dest: 'avatars/avatar-1.jpg' },
  { url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80', dest: 'avatars/avatar-2.jpg' },
  { url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&q=80', dest: 'avatars/avatar-3.jpg' },
];

async function downloadOne(item) {
  const fullPath = path.join(baseDir, item.dest);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  try {
    const res = await fetch(item.url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(fullPath, buffer);
    console.log(`[OK] ${item.dest} (${(buffer.length / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error(`[FAIL] ${item.dest}: ${err.message}`);
  }
}

async function run() {
  console.log(`Starting download of ${imageList.length} images...`);
  // Run with concurrency limit of 5
  for (let i = 0; i < imageList.length; i += 5) {
    const batch = imageList.slice(i, i + 5);
    await Promise.all(batch.map(downloadOne));
  }
  console.log('All downloads completed!');
}

run();

