const { Jimp } = require('jimp');
const path = require('path');

async function testContour() {
  const orig = await Jimp.read('public/images/products/shirt-1.jpg');
  const w = orig.bitmap.width;
  const h = orig.bitmap.height;

  // Background threshold:
  // In shirt-1.jpg, background pixels have:
  // (r >= 243 && g >= 243 && b >= 241) and (|r-g| <= 2 && |g-b| <= 3) and (lum > 0.95)
  // Let's test how many pixels on the shirt violate this:
  // ONLY the top of the collar and the specular sheen!
  // But specular sheen is strictly between x=200 and x=700!
  // Any pixel outside x=100..790 is definitely background!
  console.log('Testing contour...');
}

testContour();

