if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,a)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let n={};const u=e=>r(e,l),o={module:{uri:l},exports:n,require:u};s[l]=Promise.all(i.map((e=>o[e]||u(e)))).then((e=>(a(...e),n)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_app/immutable/assets/_layout-ad4e4cfb.css",revision:null},{url:"_app/immutable/assets/ReloadPrompt-8b6f04a5.css",revision:null},{url:"_app/immutable/chunks/_layout-8d2a742b.js",revision:null},{url:"_app/immutable/chunks/_page-8026c7ef.js",revision:null},{url:"_app/immutable/chunks/0-6ec131a1.js",revision:null},{url:"_app/immutable/chunks/1-4007f4e5.js",revision:null},{url:"_app/immutable/chunks/2-e6fccc7e.js",revision:null},{url:"_app/immutable/chunks/3-b5550136.js",revision:null},{url:"_app/immutable/chunks/4-060f3a2c.js",revision:null},{url:"_app/immutable/chunks/index-46fdc337.js",revision:null},{url:"_app/immutable/chunks/preload-helper-b21cceae.js",revision:null},{url:"_app/immutable/chunks/ReloadPrompt-bd9243af.js",revision:null},{url:"_app/immutable/chunks/singletons-faa898c9.js",revision:null},{url:"_app/immutable/chunks/stores-ca988445.js",revision:null},{url:"_app/immutable/chunks/virtual_pwa-register-ac08b08f.js",revision:null},{url:"_app/immutable/chunks/workbox-window.prod.es5-5729c1a5.js",revision:null},{url:"_app/immutable/components/pages/_error.svelte-3ac37433.js",revision:null},{url:"_app/immutable/components/pages/_layout.svelte-f2c9904f.js",revision:null},{url:"_app/immutable/components/pages/_page.svelte-b37a0a04.js",revision:null},{url:"_app/immutable/components/pages/about/_page.svelte-51d64b6c.js",revision:null},{url:"_app/immutable/components/pages/sign-up/_page.svelte-09eedd44.js",revision:null},{url:"_app/immutable/modules/pages/_layout.js-7b9cbfbc.js",revision:null},{url:"_app/immutable/modules/pages/about/_page.js-f286e6b9.js",revision:null},{url:"_app/immutable/start-51664f81.js",revision:null},{url:"favicon.png",revision:"3a387408ecc6cc283f724b39ca5fffb4"},{url:"icon-192.png",revision:"53f52bbb64eafcdc1c0e54016f241c2e"},{url:"icon-512.png",revision:"17af23f71d0fdc25c1f27c41420deeea"},{url:"./about",revision:"cd4a6a8dbcfbdc821e9d018b09ba16e3"},{url:"./",revision:"aa43466ef10eff030a1a03d3988de2e5"},{url:"./sign-up",revision:"8a05faef4a00e160dc9526d3ea80e990"},{url:"server/chunks/hooks.js",revision:"68b329da9893e34099c7d8ad5cb9c940"},{url:"server/chunks/index.js",revision:"30ce3af18490385b91fdb5035b9734c0"},{url:"server/chunks/paths.js",revision:"8b45a436ee8aedfcd92fe8f3b30fac02"},{url:"server/chunks/stores.js",revision:"26a276fff4f426a3c91c72e0429771fa"},{url:"server/entries/pages/_error.svelte.js",revision:"dcbc4d1cf71a6a09d50e0dcc1f73c4eb"},{url:"server/entries/pages/_layout.js",revision:"f7757b54a6b112502957d2ce841c426e"},{url:"server/entries/pages/_layout.svelte.js",revision:"a809751ffe7b5f9860f19ed3b6b8b139"},{url:"server/entries/pages/_page.svelte.js",revision:"d8717fe46b40295d4d071934c873d90e"},{url:"server/entries/pages/about/_page.js",revision:"408709821cbd91893aba27b77e370e74"},{url:"server/entries/pages/about/_page.svelte.js",revision:"fb633ae77cc787c2563df59652362af6"},{url:"server/entries/pages/sign-up/_page.svelte.js",revision:"d687230f2bf334b948b6783517678b87"},{url:"server/index.js",revision:"f8d66bb8918db6661338e3e2984398a8"},{url:"server/manifest-full.js",revision:"bbab3c621e247ae8b49866c527f42b2d"},{url:"server/manifest.js",revision:"5aada0f967ff2d60171fc245dd04b0c3"},{url:"server/nodes/0.js",revision:"3994289e4aa9bf6d42c521543eac182d"},{url:"server/nodes/1.js",revision:"a7e754b4043dd13844fe74413237038f"},{url:"server/nodes/2.js",revision:"100624ed84446f8c1bb6b500e695faa9"},{url:"server/nodes/3.js",revision:"c4e09bec23b0a8d6fdc7539191b2221f"},{url:"server/nodes/4.js",revision:"8a1eb690dbe513bdd7eeaacda6bc9877"},{url:"icon-192.png",revision:"53f52bbb64eafcdc1c0e54016f241c2e"},{url:"icon-512.png",revision:"17af23f71d0fdc25c1f27c41420deeea"},{url:"manifest.webmanifest",revision:"da5b1e7595708ae84e3b424b5f513dfc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("./")))}));
