const cacheVersion = 'v1';
const filesToCache = ['index.html', '/css/style.css', '/main.js'];
self.addEventListener('install', event => {
    console.log('Service worker install event fired');
    event.waitUntil(
        caches.open(cacheVersion).then(cache => {
            return cache.addAll(filesToCache);
        })
    );
});
self.addEventListener('fetch', event => {
    console.log('Fetch intercepted for:', event.request.url);
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        })
    );
});
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(
                keyList.map(key => {
                    if (key !== cacheVersion) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});