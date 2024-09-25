'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f706814b5c948f659d86d3c3432fd9c3",
"assets/AssetManifest.bin.json": "b2b8696f4e6ab40c8e0e06760001138e",
"assets/AssetManifest.json": "1995ae6e7decb11c659139f3d2485e49",
"assets/assets/images/gamification/background/bg_1.jpg": "fb1197ec00a3f8ab62970276dc826ca6",
"assets/assets/images/gamification/background/bg_2.jpg": "cb03d5958be2de311da5e4012319e56d",
"assets/assets/images/gamification/background/bg_3.jpg": "a86f7a2972f79bc05443c993d5691da3",
"assets/assets/images/gamification/background/bg_4.png": "1a1713915eb9ec8d666742ce6f84c606",
"assets/assets/images/gamification/background/placeholder.jpg": "d6695d94970b1c7be36d41c84c2cdc93",
"assets/assets/images/gamification/background/placeholder_coming_soon.jpg": "fd4bd5d40b7ae6d361f9bb2cec7b51ac",
"assets/assets/images/gamification/buttons.png": "687cad0e630d10a2dd4576bb9cefc76d",
"assets/assets/images/gamification/ButtonText_Small_Blank_Round.png": "d444805dc0baf5828fd93103b4984df1",
"assets/assets/images/gamification/chest_anim_tex_pack.png": "2a27d4f5837742bfe0f226505fe39341",
"assets/assets/images/gamification/coin_ic_1.png": "f83012d9e07fb9b2da0058d7afec2c70",
"assets/assets/images/gamification/firework_anim_tex_pack.png": "cf4e4fc4350c8f381425dd4f7d1f9c0e",
"assets/assets/images/gamification/flare_1.png": "a8e0d4ff3db4986fa22a227a0cc4ec96",
"assets/assets/images/gamification/Fortune_Wheel.png": "1c5c318be9e43075af4c4832a7e8bacb",
"assets/assets/images/gamification/gems_ic.png": "cf912fe5b80560a2df3d558446778ea3",
"assets/assets/images/gamification/hammer_ic.png": "95b25c886110ad660d3ad878e1d84758",
"assets/assets/images/gamification/Icon_Small_Coin.png": "17fa2456faa5ca439e1a2f47ede6a2ff",
"assets/assets/images/gamification/Icon_Small_WhiteOutline_Diamond.png": "a2215fc7a0f793ee30319466fc90b71b",
"assets/assets/images/gamification/Icon_Small_WhiteOutline_Home.png": "e442fe7aaba75e4ddd2f79bb622f8a9d",
"assets/assets/images/gamification/Icon_Small_WhiteOutline_Key.png": "ddf540d8af7a98fa0a400ddd2596f1af",
"assets/assets/images/gamification/samurai_chara.png": "e9f23a772e2062e93ea955778bce9268",
"assets/assets/images/gamification/sky_bg.png": "2377092f2faabbd35ec138da466a7afb",
"assets/assets/images/gamification/TextBox_Blank_Side.png": "37d932a9b070a3324fd9f13a0b1492dd",
"assets/assets/images/gamification/treasure_chest.png": "a13e204673b406c511291b1e860a57a1",
"assets/assets/images/gamification/treasure_chest_icon.png": "19aca0fb1c091d01272cc8670d4edeba",
"assets/assets/images/gamification/wood_tex_1.png": "d9aa69b754ba167cdeb7e67b835799fa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8ea08ea2444cc58ec5807fd7669e488f",
"assets/NOTICES": "b955f7a5e2004d546e175ded580cf516",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "87a606d2cc1dd3b98e7bcd118ac5351a",
"/": "87a606d2cc1dd3b98e7bcd118ac5351a",
"main.dart.js": "708dc46cd100e4313bf81e34a49484be",
"manifest.json": "000f4676d7864452e10e7eb7f09d51fe",
"version.json": "ac318350482e278d6ed72c64c542867e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
