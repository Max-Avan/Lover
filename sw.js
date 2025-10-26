const cacheName='romantic-choice-v1';
const assetsToCache=['./index.html','./manifest.json','./','https://i.pinimg.com/originals/b6/a6/d5/b6a6d50de7eb36065b98ebd254d46cd5.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(cacheName).then(cache=>cache.addAll(assetsToCache)));});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(response=>response||fetch(e.request)));});