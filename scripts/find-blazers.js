const fs = require('fs');

async function searchUnsplash(query) {
  try {
    const url = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=10`;
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    if (!res.ok) {
      console.log('Error status:', res.status);
      return [];
    }
    const data = await res.json();
    console.log(`=== Query: ${query} (Total: ${data.total}) ===`);
    const results = (data.results || []).map(r => ({
      id: r.id,
      alt: r.alt_description,
      raw: r.urls.raw,
      regular: r.urls.regular
    }));
    results.forEach((r, idx) => {
      console.log(`${idx + 1}. [${r.id}] ${r.alt}`);
      console.log(`   ${r.regular}`);
    });
    return results;
  } catch (e) {
    console.error(e.message);
    return [];
  }
}

(async () => {
  await searchUnsplash('beige blazer product');
  await searchUnsplash('white blazer product');
  await searchUnsplash('tweed blazer');
})();
