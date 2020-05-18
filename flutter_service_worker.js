'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "199b1450794d547961c2e54fba41cf5b",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/FontManifest.json": "32d3a3cafba761d20cb5d5992c813c83",
"assets/LICENSE": "34da31f697be5f2fcfacf877df9adb0a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/assets/fonts/Raleway-Regular.ttf": "580d0778ad254335be45bf58bb449f43",
"assets/assets/fonts/Raleway-Medium.ttf": "430a0518f5ff3b6c8968b759a29b36e2",
"assets/assets/fonts/Quicksand_Bold.otf": "c3bf00e585782373e1b601c07b513d85",
"assets/assets/fonts/Quicksand-Medium.ttf": "0c64233241ead44bffbec54eb9d1d164",
"assets/assets/ab.jpeg": "5f98c78d2fe7a226c2099ab9f2e97a39",
"assets/AssetManifest.json": "4107214d50e68e0e99acfc8f103e2e23",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "16903bfeca52a82e56468f3d1cf29796",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"index.html": "f4f2a057a92d4a6af5ceb59b1f88683f",
"/": "f4f2a057a92d4a6af5ceb59b1f88683f"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
