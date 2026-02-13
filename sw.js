// ========== sw.js ==========
// Complete service worker for Immaculate Envilinks CBT
// Enables full offline functionality with cache-first strategy

const CACHE_NAME = 'envilinks-cbt-v1';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './subject.html',
    './results.html',
    './style.css',
    './index.js',
    './subject.js',
    './results.js',
    './logo.jpg',
    './manifest.json',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/webfonts/fa-solid-900.woff2',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/webfonts/fa-regular-400.woff2',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/webfonts/fa-brands-400.woff2',
    'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js',
    'https://cdn.jsdelivr.net/npm/mathjax@3/es5/input/tex.js',
    'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml.js',
    'https://cdn.jsdelivr.net/npm/mathjax@3/es5/ui/lazy.js'
];

// Install event - cache all static assets
self.addEventListener('install', event => {
    console.log('✅ Service Worker installing...');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('📦 Caching app assets...');
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(() => {
                console.log('✅ All assets cached successfully');
                return self.skipWaiting();
            })
            .catch(error => {
                console.error('❌ Cache installation failed:', error);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    console.log('🚀 Service Worker activating...');
    
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== CACHE_NAME) {
                            console.log('🗑️ Removing old cache:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('✅ Service Worker activated');
                return self.clients.claim();
            })
    );
});

// Fetch event - cache-first strategy for offline first
self.addEventListener('fetch', event => {
    // Skip cross-origin requests except allowed CDNs
    const url = new URL(event.request.url);
    
    // Allow our CDN resources
    const allowedOrigins = [
        'cdnjs.cloudflare.com',
        'cdn.jsdelivr.net'
    ];
    
    // Skip non-GET requests
    if (event.request.method !== 'GET') return;
    
    // Handle different request types
    if (url.origin === self.location.origin) {
        // Same origin - use cache-first strategy
        event.respondWith(
            caches.match(event.request)
                .then(cachedResponse => {
                    if (cachedResponse) {
                        // Return cached version
                        return cachedResponse;
                    }
                    
                    // Not in cache - fetch and cache
                    return fetch(event.request)
                        .then(networkResponse => {
                            // Cache valid responses
                            if (networkResponse && networkResponse.status === 200) {
                                const responseToCache = networkResponse.clone();
                                caches.open(CACHE_NAME)
                                    .then(cache => {
                                        cache.put(event.request, responseToCache);
                                    });
                            }
                            return networkResponse;
                        })
                        .catch(error => {
                            console.error('❌ Fetch failed:', error);
                            
                            // Return offline fallback for HTML requests
                            if (event.request.headers.get('accept').includes('text/html')) {
                                return caches.match('./index.html');
                            }
                        });
                })
        );
    } else if (allowedOrigins.some(origin => url.hostname.includes(origin))) {
        // CDN resources - cache-first
        event.respondWith(
            caches.match(event.request)
                .then(cachedResponse => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    
                    return fetch(event.request)
                        .then(networkResponse => {
                            const responseToCache = networkResponse.clone();
                            caches.open(CACHE_NAME)
                                .then(cache => {
                                    cache.put(event.request, responseToCache);
                                });
                            return networkResponse;
                        })
                        .catch(() => {
                            // Return a fallback for font requests if needed
                            if (event.request.url.includes('font-awesome')) {
                                // Return minimal CSS that won't break layout
                                return new Response('', {
                                    status: 200,
                                    headers: { 'Content-Type': 'text/css' }
                                });
                            }
                        });
                })
        );
    }
    // Let other requests go through normally
});

// Handle offline sync for future features
self.addEventListener('sync', event => {
    if (event.tag === 'sync-results') {
        // For future implementation - sync saved results when online
        console.log('🔄 Syncing results...');
    }
});

// Handle push notifications (for future use)
self.addEventListener('push', event => {
    const options = {
        body: event.data.text(),
        icon: './logo.jpg',
        badge: './logo.jpg',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'open',
                title: 'Open App'
            }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification('Immaculate Envilinks CBT', options)
    );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
    event.notification.close();
    
    event.waitUntil(
        clients.matchAll({ type: 'window' })
            .then(clientList => {
                if (clientList.length > 0) {
                    return clientList[0].focus();
                }
                return clients.openWindow('./index.html');
            })
    );
});