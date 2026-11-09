async function run() {
  const res = await fetch('https://unsplash.com/napi/photos/W7bXlqV8z5Y', {
    headers: { 'User-Agent': 'Mozilla/5.0' }
  });
  if (res.ok) {
    const data = await res.json();
    console.log('Regular URL:', data.urls && data.urls.regular);
    return;
  }
  console.log('NAPI status:', res.status);
}
run();
