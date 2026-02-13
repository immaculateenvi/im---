// ========== ENHANCED SERVICE WORKER WITH VERSION CONTROL ==========
const CACHE_NAME = 'envilinks-cache-v3'; // INCREMENT WHEN UPDATING
const urlsToCache = [
  './',
  './index.html',
  './subject.html',
  './results.html',
  './style.css',
  './subject.js',
  './results.js',
  './index.js',
  './version.js',
  './manifest.json',
  './logo.jpg',
  './offline.html',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js'
];

// Install event - cache all static assets
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing new version:', CACHE_NAME);
  self.skipWaiting(); // Force activate immediately
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Caching all assets');
        return cache.addAll(urlsToCache).catch(error => {
          console.error('[Service Worker] Cache addAll failed:', error);
          // Still resolve so installation completes
          return Promise.resolve();
        });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating new version');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('[Service Worker] Claiming clients for new version');
      return self.clients.claim(); // Take control of all pages immediately
    })
  );
});

// Fetch event - network first, then cache, with offline fallback
self.addEventListener('fetch', event => {
  // Skip cross-origin requests like CDN
  if (!event.request.url.startsWith(self.location.origin) && 
      !event.request.url.includes('cdnjs') && 
      !event.request.url.includes('mathjax')) {
    return;
  }

  // For HTML navigation requests - network first, then cache
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Cache the latest version
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          return caches.match(event.request).then(cached => {
            if (cached) return cached;
            return caches.match('./offline.html');
          });
        })
    );
    return;
  }

  // For other assets - cache first, then network (faster offline)
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        if (cachedResponse) {
          // Update cache in background for next time
          fetch(event.request)
            .then(networkResponse => {
              if (networkResponse && networkResponse.status === 200) {
                caches.open(CACHE_NAME).then(cache => {
                  cache.put(event.request, networkResponse);
                });
              }
            })
            .catch(() => {});
          return cachedResponse;
        }

        // Not in cache - get from network
        return fetch(event.request)
          .then(networkResponse => {
            if (!networkResponse || networkResponse.status !== 200) {
              return networkResponse;
            }
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });
            return networkResponse;
          })
          .catch(() => {
            if (event.request.url.includes('.css') || event.request.url.includes('.js')) {
              return new Response('', { status: 200, statusText: 'OK' });
            }
            return new Response('Offline', { status: 503 });
          });
      })
  );
});