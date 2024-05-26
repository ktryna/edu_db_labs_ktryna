/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c7b6b5a41234f7851b0e2b49324a4276"
  },
  {
    "url": "assets/css/0.styles.0881fe58.css",
    "revision": "e924ab53153d8ee7bdb49f006a9a7f80"
  },
  {
    "url": "assets/img/Grant_add.598538c7.jpg",
    "revision": "598538c7aff39fa6000b7d52896f3afc"
  },
  {
    "url": "assets/img/Grant_delete.6219dab1.jpg",
    "revision": "6219dab1e011f1dd7a7f3b9d17145123"
  },
  {
    "url": "assets/img/Grant_get.10774c1e.jpg",
    "revision": "10774c1e7287c14f84562063185e6997"
  },
  {
    "url": "assets/img/Grant_getAll.acb9c271.jpg",
    "revision": "acb9c271552410eb926a34102bdd61fd"
  },
  {
    "url": "assets/img/Grant_update.5953b74f.jpg",
    "revision": "5953b74f39c8b3f19768c5c992cf851b"
  },
  {
    "url": "assets/img/Permission_add.13091df5.jpg",
    "revision": "13091df5fee8fead58535bbe19285b5a"
  },
  {
    "url": "assets/img/Permission_deleted.dc26dc2c.jpg",
    "revision": "dc26dc2c1537a00458d575458fea3148"
  },
  {
    "url": "assets/img/Permission_get.adfe8071.jpg",
    "revision": "adfe80712c9c3399524a06c6aebf6589"
  },
  {
    "url": "assets/img/Permission_getAll.8751e94c.jpg",
    "revision": "8751e94cbb3a7814359d274fb7948458"
  },
  {
    "url": "assets/img/Permission_update.d447a889.jpg",
    "revision": "d447a8899a3973b5b532d4d0ce5438b6"
  },
  {
    "url": "assets/img/Role_add.d90dd9b7.jpg",
    "revision": "d90dd9b7dbded279de74f4adcf48f2fd"
  },
  {
    "url": "assets/img/Role_delete.6b5c6580.jpg",
    "revision": "6b5c6580d5dc14934ae04600b3c33650"
  },
  {
    "url": "assets/img/Role_get.4a89ea3d.jpg",
    "revision": "4a89ea3dca0da9aae3d1823044c31664"
  },
  {
    "url": "assets/img/Role_getAll.2e3dfe39.jpg",
    "revision": "2e3dfe3904aebdd63c0df41b5875d31b"
  },
  {
    "url": "assets/img/Role_update.9eccd89e.jpg",
    "revision": "9eccd89e1e7909bf8721f6e7c381cf16"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.6559d651.js",
    "revision": "a852a375fdc4d308d26fede8555de361"
  },
  {
    "url": "assets/js/10.176ff2c8.js",
    "revision": "101b6ff14c68547df532e806b15de4da"
  },
  {
    "url": "assets/js/13.0cb61c15.js",
    "revision": "ac4f3fe749811b8e7322af0ac02b07a5"
  },
  {
    "url": "assets/js/14.7e85ed7e.js",
    "revision": "4e250e80988ab4f14f33a3d7c8dd16ca"
  },
  {
    "url": "assets/js/15.99633a4f.js",
    "revision": "86a28369a719249c9b78821ec49d13c9"
  },
  {
    "url": "assets/js/16.2bc577d7.js",
    "revision": "18e9a7b58be1e7e5f75822bfa14c22e0"
  },
  {
    "url": "assets/js/17.fe5a08a7.js",
    "revision": "b393006e3affe905bb94a66e74ea6c41"
  },
  {
    "url": "assets/js/18.bbb3bd3c.js",
    "revision": "0f8fcc5459702246f890a0e38ffafda6"
  },
  {
    "url": "assets/js/19.9b8f087f.js",
    "revision": "324990ca660d7ed766a310931c2b5664"
  },
  {
    "url": "assets/js/2.43deb5fa.js",
    "revision": "79254a0aaaf2e13aa236981f8a339470"
  },
  {
    "url": "assets/js/20.b4897303.js",
    "revision": "68bd5499e2467092ec314d37a8fc7830"
  },
  {
    "url": "assets/js/21.39425e04.js",
    "revision": "8b7c9b61e56f99d768ff23d21e9d935d"
  },
  {
    "url": "assets/js/22.d2077878.js",
    "revision": "9f6e9904ba0cfa4dc7bc50e47142a6e3"
  },
  {
    "url": "assets/js/23.3ec6ef11.js",
    "revision": "d0e91598f11e346698d9855ebb1cde0b"
  },
  {
    "url": "assets/js/24.c493e103.js",
    "revision": "0b6c628726994773217301d2be84dab5"
  },
  {
    "url": "assets/js/25.9b82b3b9.js",
    "revision": "2e9bc8583fc2d0dfe0e546a919f8359a"
  },
  {
    "url": "assets/js/26.590bbba7.js",
    "revision": "263fdeb3a6421d841b88e0d0908be681"
  },
  {
    "url": "assets/js/27.56ef0440.js",
    "revision": "88287e517299e15805be034bbef8df03"
  },
  {
    "url": "assets/js/28.82255b36.js",
    "revision": "2028d3a8569dd6ab4cfae2718ffd82c7"
  },
  {
    "url": "assets/js/29.0f027b3a.js",
    "revision": "24591ff2410c79551419409f8f0edf9b"
  },
  {
    "url": "assets/js/3.3a389e6a.js",
    "revision": "54c2d66a75926ab0b7e2caed46600a3e"
  },
  {
    "url": "assets/js/30.fa48615f.js",
    "revision": "ee6b250012ee089e254ece1d6deda5ea"
  },
  {
    "url": "assets/js/31.2935e377.js",
    "revision": "eaf64cf2a1d3fce87debb71704e1c138"
  },
  {
    "url": "assets/js/32.0280d268.js",
    "revision": "5e96f6372fe2542e92f667cafe867790"
  },
  {
    "url": "assets/js/33.a3adf9c5.js",
    "revision": "2f8ffa1711abd3e011ca0cf89f43de6a"
  },
  {
    "url": "assets/js/34.1eea7298.js",
    "revision": "69da6859cdc74c8fdff52a0bb2ac1f89"
  },
  {
    "url": "assets/js/35.d8638ece.js",
    "revision": "1938de698102ea2cad076a9f4e058fd8"
  },
  {
    "url": "assets/js/36.b0415eb6.js",
    "revision": "f3e4536c70a50b070213b42d56e0ed6f"
  },
  {
    "url": "assets/js/37.19920196.js",
    "revision": "ccbcb56e2dd7133467f4a2016b7a4b8f"
  },
  {
    "url": "assets/js/38.3fff9c13.js",
    "revision": "a3529ed3946e4ef68ea8bf22c274077c"
  },
  {
    "url": "assets/js/39.eaaa67ec.js",
    "revision": "5243bb34d8276e31a982c537b78c450f"
  },
  {
    "url": "assets/js/4.530a9cf7.js",
    "revision": "59a0ffe232d1381b30beff1867c6207e"
  },
  {
    "url": "assets/js/41.2cb9d444.js",
    "revision": "2649c90e5b852aa544cc0aea6c9494e0"
  },
  {
    "url": "assets/js/5.d2ff2cef.js",
    "revision": "7fec287e115c98eb79f3f38c0135d9c1"
  },
  {
    "url": "assets/js/6.69341d60.js",
    "revision": "1c2eccf47978ff4dd2ebe99d2e97bd70"
  },
  {
    "url": "assets/js/7.730d285a.js",
    "revision": "99c7c0c39721dd37b2a6e7dbd7746f0c"
  },
  {
    "url": "assets/js/8.5c799ab9.js",
    "revision": "07db1b215c9d8638aec1629246633ab2"
  },
  {
    "url": "assets/js/9.7778623f.js",
    "revision": "b4e0ff8c039a3aa8c52bdd4e25fa696b"
  },
  {
    "url": "assets/js/app.7a96ad38.js",
    "revision": "40a58b32601109536d0d5264465fc34a"
  },
  {
    "url": "assets/js/vendors~docsearch.cb5b450b.js",
    "revision": "6f0400671c803c57ce5c628f98a6fbbe"
  },
  {
    "url": "conclusion/index.html",
    "revision": "f6fdd71e3585426a2f1850963acd7c44"
  },
  {
    "url": "design/index.html",
    "revision": "ee9e71618712c40a882e24d3c4a0d633"
  },
  {
    "url": "index.html",
    "revision": "feb26df57d7aaf3f10e664d52ee1f2d1"
  },
  {
    "url": "intro/index.html",
    "revision": "6a634c1c922c76e472957347c084faa9"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "84578b80aab3f43fddbf661cbcf00518"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "6fac249fa41379aa06869ef54dac8638"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "87bb4e430dfb51187200ea835e1e976e"
  },
  {
    "url": "software/index.html",
    "revision": "c77881fb85101c6fe552496182f97864"
  },
  {
    "url": "test/index.html",
    "revision": "32590fa1ae14a1c401b585e936291329"
  },
  {
    "url": "use cases/index.html",
    "revision": "d0035b1cd06ab03619aa92474979e0d0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
