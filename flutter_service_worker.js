'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4f045123d9c43b84878c6a47576824be",
"assets/AssetManifest.bin.json": "fdd989b0d04a71a4a2de0a4207829e0e",
"assets/AssetManifest.json": "9eb00b6e4151046f23900841acb3a7f2",
"assets/assets/favicon.png": "8fe968ef73eaac946f953a66e52c3660",
"assets/assets/fonts/century_gothic/CenturyGothicPaneuropeanBlack.ttf": "f4363317bc71bf2572daa835815b8fe2",
"assets/assets/fonts/century_gothic/CenturyGothicPaneuropeanBlackItalic.ttf": "c58acf6ee16efdfb5f236beed49821a2",
"assets/assets/fonts/century_gothic/CenturyGothicPaneuropeanBold.ttf": "2be1444585225d71a08f4064e810dfb3",
"assets/assets/fonts/century_gothic/CenturyGothicPaneuropeanBoldItalic.ttf": "55e547ef2b3924f695fd4331398dc862",
"assets/assets/fonts/century_gothic/CenturyGothicPaneuropeanExtraBold.ttf": "a51c145dcffd5c2afbac9c36fc552a8e",
"assets/assets/fonts/century_gothic/CenturyGothicPaneuropeanExtraBoldItalic.ttf": "84562f00e0f6e2afe4c17e86abbf1ec5",
"assets/assets/fonts/century_gothic/CenturyGothicPaneuropeanItalic.ttf": "d7a3a53bf1af0c8f07be17c012b6be1a",
"assets/assets/fonts/century_gothic/CenturyGothicPaneuropeanLight.ttf": "4f880ca1021e22b17fa17f8e04ea4e5e",
"assets/assets/fonts/century_gothic/CenturyGothicPaneuropeanLightItalic.ttf": "d64752a2b66aad6c7ee6a28757274141",
"assets/assets/fonts/century_gothic/CenturyGothicPaneuropeanRegular.ttf": "5dc16903b181408e631c99645a486d6e",
"assets/assets/fonts/century_gothic/CenturyGothicPaneuropeanSemiBold.ttf": "40c78336d23dd933627c7f00be84be49",
"assets/assets/fonts/century_gothic/CenturyGothicPaneuropeanSemiBoldItalic.ttf": "c37498671aebff9f1ee699dc938457cf",
"assets/assets/fonts/century_gothic/CenturyGothicPaneuropeanThin.ttf": "728e2d06c46a757723bf4b1932c739e7",
"assets/assets/fonts/century_gothic/CenturyGothicPaneuropeanThinItalic.ttf": "76ad06defcecb14b560b4c73ccaad5df",
"assets/assets/fonts/montserrat/Montserrat-Black.ttf": "6d1796a9f798ced8961baf3c79f894b6",
"assets/assets/fonts/montserrat/Montserrat-BlackItalic.ttf": "b5331c5f5aae974d18747a94659ed002",
"assets/assets/fonts/montserrat/Montserrat-Bold.ttf": "88932dadc42e1bba93b21a76de60ef7a",
"assets/assets/fonts/montserrat/Montserrat-BoldItalic.ttf": "781190aecb862fffe858d42b124658cc",
"assets/assets/fonts/montserrat/Montserrat-ExtraBold.ttf": "9bc77c3bca968c7490de95d1532d0e87",
"assets/assets/fonts/montserrat/Montserrat-ExtraBoldItalic.ttf": "09a2d2564ea85d25a3b3a7903159927b",
"assets/assets/fonts/montserrat/Montserrat-ExtraLight.ttf": "38bc5e073a0692a4eddd8e61c821d57a",
"assets/assets/fonts/montserrat/Montserrat-ExtraLightItalic.ttf": "6885cd4955ecc64975a122c3718976c1",
"assets/assets/fonts/montserrat/Montserrat-Italic.ttf": "6786546363c0261228fd66d68bbf27e9",
"assets/assets/fonts/montserrat/Montserrat-Light.ttf": "100b38fa184634fc89bd07a84453992c",
"assets/assets/fonts/montserrat/Montserrat-LightItalic.ttf": "428b2306e9c7444556058c70822d7d7c",
"assets/assets/fonts/montserrat/Montserrat-Medium.ttf": "a98626e1aef6ceba5dfc1ee7112e235a",
"assets/assets/fonts/montserrat/Montserrat-MediumItalic.ttf": "287208c81e03eaf08da630e1b04d80e8",
"assets/assets/fonts/montserrat/Montserrat-Regular.ttf": "9c46095118380d38f12e67c916b427f9",
"assets/assets/fonts/montserrat/Montserrat-SemiBold.ttf": "c88cecbffad6d8e731fd95de49561ebd",
"assets/assets/fonts/montserrat/Montserrat-SemiBoldItalic.ttf": "2d3cef91fbb6377e40398891b90d29bf",
"assets/assets/fonts/montserrat/Montserrat-Thin.ttf": "0052573bbf05658a18ba557303123533",
"assets/assets/fonts/montserrat/Montserrat-ThinItalic.ttf": "3cb621135b5f6fe15d7c2eba68f0ee37",
"assets/assets/Images/about_us.jpg": "157d54c1c1d4e69880fd3edc22488534",
"assets/assets/Images/ashtanga_yoga.jpg": "a53c592e6c6d10ed8fac28b1800ee4cf",
"assets/assets/Images/chakra_healing.jpg": "d8bbc58ee6722702173908f082816793",
"assets/assets/Images/home_page.png": "d811853253ede1e4640c85b7cfa8c231",
"assets/assets/Images/ice_bath_therapy.jpg": "d111751af33e5da053d95950037056ff",
"assets/assets/Images/kundalini_yoga.jpg": "775cb398a568d36cdee278c3937db2f9",
"assets/assets/Images/meditation.jpg": "2f14a1e043467f4cf2d5b08f12d3b43f",
"assets/assets/Images/nature_retreats.jpg": "f4457340dafc89039da14c5f90fadfa5",
"assets/assets/Images/our_services_1.jpg": "5ec28714888c14a183b5f90bd8db7e40",
"assets/assets/Images/our_services_2.jpg": "a4f23a0c7da5e354844b7db1ed7464c4",
"assets/assets/Images/pre_post_natal_yoga.jpg": "7d35c8a5c8ecd01119542e218fc43454",
"assets/assets/Images/quote.jpg": "b7b71444162a3470b5ec7975e7c29187",
"assets/assets/Images/reiki_healing.jpg": "7ab8546dd0c019dec4d001f9b91f0d96",
"assets/assets/Images/sound_healing.jpg": "26854d1e95d7f1a263e14cdc033a4d14",
"assets/assets/Images/sound_healing_gathering.jpg": "6685559a4835b92bb78cf9e4ffdf52f3",
"assets/assets/Images/why_choose_sarvam_yogalayam.jpg": "afea931f197adef71e49aeb9d9a6d13d",
"assets/assets/Images/yogic_lifestyle.jpg": "aa6550b0991fc8a6403b1fff3ecdb461",
"assets/FontManifest.json": "e0c7c917560cadc8492d477331056b8f",
"assets/fonts/MaterialIcons-Regular.otf": "d013847fb854eca63fc7a779c896f0e0",
"assets/NOTICES": "edfcfff47e9a4c1f18e573219a35af83",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "8fe968ef73eaac946f953a66e52c3660",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "79d93b60b7a8a6f5434a1fb355790e21",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b957a0f5902f9b3233d85d0c97dfa1cd",
"/": "b957a0f5902f9b3233d85d0c97dfa1cd",
"main.dart.js": "8dc9f9c53ed8ef547a8cfc5c3eb32b1a",
"manifest.json": "04170863f6528acb82136ac4c060e64f",
"version.json": "8aeb3d447581af8bc67047e105fd7204"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
