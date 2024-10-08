const cacheName = 'monk-mode-cache-v1';
const assets = [
  '/',
  '/index.html',
  '/manifest.json',
//   '/icon-192x192.png',
//   '/icon-512x512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(assets))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
