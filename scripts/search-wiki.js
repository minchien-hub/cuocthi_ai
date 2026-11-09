async function get() {
  try {
    const res = await fetch('https://commons.wikimedia.org/w/api.php?action=query&format=json&list=search&srsearch=pearl%20bracelet&srnamespace=6&srlimit=5', {
      headers: { 'User-Agent': 'FashionStore/1.0 (test@example.com)' }
    });
    const data = await res.json();
    console.log(JSON.stringify(data.query.search.map(s => s.title), null, 2));
  } catch(e) {
    console.error(e);
  }
}
get();
