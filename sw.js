if(!self.define){let e,l={};const s=(s,i)=>(s=new URL(s+".js",i).href,l[s]||new Promise((l=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=l,document.head.appendChild(e)}else e=s,importScripts(s),l()})).then((()=>{let e=l[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const u=e||("document"in self?document.currentScript.src:"")||location.href;if(l[u])return;let a={};const r=e=>s(e,u),o={module:{uri:u},exports:a,require:r};l[u]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(n(...e),a)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_app/immutable/assets/_layout-ad4e4cfb.css",revision:null},{url:"_app/immutable/assets/ReloadPrompt-8b6f04a5.css",revision:null},{url:"_app/immutable/chunks/_layout-8d2a742b.js",revision:null},{url:"_app/immutable/chunks/_page-8026c7ef.js",revision:null},{url:"_app/immutable/chunks/0-7c9cf31b.js",revision:null},{url:"_app/immutable/chunks/1-4007f4e5.js",revision:null},{url:"_app/immutable/chunks/2-e6fccc7e.js",revision:null},{url:"_app/immutable/chunks/3-1737d9f8.js",revision:null},{url:"_app/immutable/chunks/4-060f3a2c.js",revision:null},{url:"_app/immutable/chunks/index-46fdc337.js",revision:null},{url:"_app/immutable/chunks/preload-helper-b21cceae.js",revision:null},{url:"_app/immutable/chunks/ReloadPrompt-7d2feb45.js",revision:null},{url:"_app/immutable/chunks/singletons-0ed100d2.js",revision:null},{url:"_app/immutable/chunks/stores-139da4fa.js",revision:null},{url:"_app/immutable/chunks/virtual_pwa-register-cef01f95.js",revision:null},{url:"_app/immutable/chunks/workbox-window.prod.es5-5729c1a5.js",revision:null},{url:"_app/immutable/components/pages/_error.svelte-3ac37433.js",revision:null},{url:"_app/immutable/components/pages/_layout.svelte-93232366.js",revision:null},{url:"_app/immutable/components/pages/_page.svelte-b37a0a04.js",revision:null},{url:"_app/immutable/components/pages/about/_page.svelte-a5cf4fe7.js",revision:null},{url:"_app/immutable/components/pages/sign-up/_page.svelte-09eedd44.js",revision:null},{url:"_app/immutable/modules/pages/_layout.js-7b9cbfbc.js",revision:null},{url:"_app/immutable/modules/pages/about/_page.js-f286e6b9.js",revision:null},{url:"_app/immutable/start-aaf50d27.js",revision:null},{url:"favicon.png",revision:"3a387408ecc6cc283f724b39ca5fffb4"},{url:"icon-192.png",revision:"53f52bbb64eafcdc1c0e54016f241c2e"},{url:"icon-512.png",revision:"17af23f71d0fdc25c1f27c41420deeea"},{url:"./about",revision:"6b42312d12e9a776afab254d6d530967"},{url:"./",revision:"82f6fa8b2aa419b5a50a0c0b829c0745"},{url:"./sign-up",revision:"060527562e3efb8cf189c9ac276759e7"},{url:"icon-192.png",revision:"53f52bbb64eafcdc1c0e54016f241c2e"},{url:"icon-512.png",revision:"17af23f71d0fdc25c1f27c41420deeea"},{url:"manifest.webmanifest",revision:"da5b1e7595708ae84e3b424b5f513dfc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("./")))}));
