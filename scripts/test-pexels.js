const fs = require('fs');

async function testFetch() {
  const url = 'https://www.pexels.com/search/white%20blazer/';
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
    }
  });
  console.log('Status:', res.status);
  const text = await res.text();
  console.log('Length:', text.length);
  // Match pexels image urls
  const matches = [...text.matchAll(/https:\/\/images\.pexels\.com\/photos\/\d+\/[^"'\s\?]+\.(?:jpeg|jpg)/g)];
  console.log('Matches:', matches.length);
  const unique = [...new Set(matches.map(m => m[0]))];
  console.log('Unique sample:', unique.slice(0, 10));
}

testFetch();

