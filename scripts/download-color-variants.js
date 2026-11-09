const fs = require('fs');
const path = require('path');

const variants = [
  // 1: Blazer
  { url: 'https://images.pexels.com/photos/7959681/pexels-photo-7959681.jpeg?auto=compress&cs=tinysrgb&w=700', dest: 'blazer-2.jpg' }, // Be / Tan blazer
  { url: 'https://images.pexels.com/photos/8484005/pexels-photo-8484005.jpeg?auto=compress&cs=tinysrgb&w=700', dest: 'blazer-3.jpg' }, // Trắng kem blazer

  // 2: Dress (Đỏ đô, Đen, Navy)
  { url: 'https://images.pexels.com/photos/7520587/pexels-photo-7520587.jpeg?auto=compress&cs=tinysrgb&w=700', dest: 'dress-2.jpg' }, // Đen dạ hội
  { url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=700&q=80', dest: 'dress-3.jpg' }, // Navy/Dark blue dạ hội

  // 3: Pants (Đen, Xám, Navy)
  { url: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=700&q=80', dest: 'pants-2.jpg' }, // Xám trousers
  { url: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=700&q=80', dest: 'pants-3.jpg' }, // Navy trousers

  // 4: Bag (Nâu, Đen, Camel)
  { url: 'https://images.pexels.com/photos/7953286/pexels-photo-7953286.jpeg?auto=compress&cs=tinysrgb&w=700', dest: 'bag-2.jpg' }, // Đen túi xách
  { url: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&q=80', dest: 'bag-3.jpg' }, // Camel túi xách

  // 5: Shirt (Trắng, Hồng nhạt, Xanh baby)
  { url: 'https://images.pexels.com/photos/5861343/pexels-photo-5861343.jpeg?auto=compress&cs=tinysrgb&w=700', dest: 'shirt-2.jpg' }, // Hồng nhạt
  { url: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=700&q=80', dest: 'shirt-3.jpg' }, // Xanh baby

  // 6: Midi (Hoa đỏ, Hoa xanh, Hoa vàng)
  { url: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=700&q=80', dest: 'midi-2.jpg' }, // Hoa xanh
  { url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=700&q=80', dest: 'midi-3.jpg' }, // Hoa vàng

  // 7: Jeans (Xanh đậm, Xanh nhạt, Đen)
  { url: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=700&q=80', dest: 'jeans-2.jpg' }, // Xanh nhạt
  { url: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=700&q=80', dest: 'jeans-3.jpg' }, // Đen

  // 8: Scarf (Camel, Xám, Đỏ đô)
  { url: 'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=700&q=80', dest: 'scarf-2.jpg' }, // Xám
  { url: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?w=700&q=80', dest: 'scarf-3.jpg' }, // Đỏ đô

  // 9: Coat (Camel, Đen, Xám)
  { url: 'https://images.unsplash.com/photo-1544441893-675973e31985?w=700&q=80', dest: 'coat-2.jpg' }, // Đen
  { url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&q=80', dest: 'coat-3.jpg' }, // Xám

  // 10: Maxi (Nâu đất, Xanh rêu, Cam đất)
  { url: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=700&q=80', dest: 'maxi-2.jpg' }, // Xanh rêu
  { url: 'https://images.unsplash.com/photo-1523359346063-d879354c0ea5?w=700&q=80', dest: 'maxi-3.jpg' }, // Cam đất

  // 11: Culottes (Trắng ngà, Be, Xanh nhạt)
  { url: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=700&q=80', dest: 'culottes-2.jpg' }, // Be
  { url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=80', dest: 'culottes-3.jpg' }, // Xanh nhạt

  // 12: Sunglasses (Vàng gold, Bạc, Đen)
  { url: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=700&q=80', dest: 'sunglasses-2.jpg' }, // Bạc
  { url: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=700&q=80', dest: 'sunglasses-3.jpg' }, // Đen

  // 13: Croptop (Hồng pastel, Trắng kem, Xanh mint)
  { url: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=700&q=80', dest: 'croptop-2.jpg' }, // Trắng kem
  { url: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=700&q=80', dest: 'croptop-3.jpg' }, // Xanh mint

  // 14: Cocktail (Vàng champagne, Bạc lấp lánh, Đen huyền bí)
  { url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=700&q=80', dest: 'cocktail-2.jpg' }, // Bạc
  { url: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=700&q=80', dest: 'cocktail-3.jpg' }, // Đen

  // 15: Palazzo (Hồng phấn, Đen, Trắng)
  { url: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=700&q=80', dest: 'palazzo-2.jpg' }, // Đen
  { url: 'https://images.unsplash.com/photo-1551803091-e20673f15770?w=700&q=80', dest: 'palazzo-3.jpg' }, // Trắng

  // 16: Pearl Bracelet (Trắng ngọc, Hồng ngọc)
  { url: 'https://images.pexels.com/photos/6716445/pexels-photo-6716445.jpeg?auto=compress&cs=tinysrgb&w=700', dest: 'bracelet-1.jpg' }, // Trắng ngọc
  { url: 'https://images.pexels.com/photos/32039109/pexels-photo-32039109/free-photo-of-elegant-pearl-bracelets-in-gift-boxes-on-display.jpeg?auto=compress&cs=tinysrgb&w=700', dest: 'bracelet-2.jpg' }, // Hồng ngọc
  { url: 'https://images.unsplash.com/photo-1611591475152-477d8c6b7742?w=700&q=80', dest: 'bracelet-3.jpg' }
];

async function run() {
  const dirs = [
    path.join(__dirname, '..', 'public', 'images', 'products'),
    path.join(__dirname, '..', 'build', 'images', 'products')
  ];

  for (const item of variants) {
    try {
      const res = await fetch(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      if (res.ok) {
        const buf = Buffer.from(await res.arrayBuffer());
        for (const dir of dirs) {
          if (fs.existsSync(dir)) {
            fs.writeFileSync(path.join(dir, item.dest), buf);
            console.log(`[OK] Saved ${item.dest} (${(buf.length / 1024).toFixed(1)} KB) -> ${dir}`);
          }
        }
      } else {
        console.error(`[FAIL] ${item.dest}: HTTP ${res.status}`);
      }
    } catch (e) {
      console.error(`[ERROR] ${item.dest}: ${e.message}`);
    }
  }
  console.log('Finished updating color variant images!');
}

run();
