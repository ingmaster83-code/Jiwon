const CACHE_NAME = 'jiwon-v1';
const CACHE_URLS = ['/', '/css/style.css', '/js/pwa-install.js'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(CACHE_URLS))));
self.addEventListener('fetch', e => e.respondWith(fetch(e.request).catch(() => caches.match(e.request))));
