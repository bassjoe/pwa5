import{s as A,n as R,c as w}from"./scheduler.b0c1c2c3.js";import{S as U,i as j,e as S,a as k,f as m,g as v,s as W,h,j as x,c as E,x as y,k as b,z as g,C as z}from"./index.25e51d9b.js";import{_ as D}from"./preload-helper.a4192956.js";import{w as P}from"./singletons.4bf2178f.js";function I(l={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:s,onRegistered:n,onRegisteredSW:r,onRegisterError:a}=l;let c,d;const p=async(i=!0)=>{await d};async function _(){if("serviceWorker"in navigator){const{Workbox:i}=await D(()=>import("./workbox-window.prod.es5.a7b12eab.js"),[],import.meta.url);c=new i("./sw.js",{scope:"./",type:"classic"}),c.addEventListener("activated",o=>{(o.isUpdate||o.isExternal)&&window.location.reload()}),c.addEventListener("installed",o=>{o.isUpdate||s==null||s()}),c.register({immediate:e}).then(o=>{r?r("./sw.js",o):n==null||n(o)}).catch(o=>{a==null||a(o)})}}return d=_(),p}function L(l={}){const{immediate:e=!0,onNeedRefresh:t,onOfflineReady:s,onRegistered:n,onRegisteredSW:r,onRegisterError:a}=l,c=P(!1),d=P(!1),p=I({immediate:e,onOfflineReady(){d.set(!0),s==null||s()},onNeedRefresh(){c.set(!0),t==null||t()},onRegistered:n,onRegisteredSW:r,onRegisterError:a});return{needRefresh:c,offlineReady:d,updateServiceWorker:p}}function N(l){let e,t,s,n,r,a="Close",c,d;function p(f,u){return f[1]?q:V}let _=p(l),i=_(l),o=l[0]&&T(l);return{c(){e=v("div"),t=v("div"),i.c(),s=W(),o&&o.c(),n=W(),r=v("button"),r.textContent=a,this.h()},l(f){e=h(f,"DIV",{class:!0,role:!0});var u=x(e);t=h(u,"DIV",{class:!0});var C=x(t);i.l(C),C.forEach(m),s=E(u),o&&o.l(u),n=E(u),r=h(u,"BUTTON",{class:!0,"data-svelte-h":!0}),y(r)!=="svelte-1uyymab"&&(r.textContent=a),u.forEach(m),this.h()},h(){b(t,"class","message svelte-141ior1"),b(r,"class","svelte-141ior1"),b(e,"class","pwa-toast svelte-141ior1"),b(e,"role","alert")},m(f,u){k(f,e,u),g(e,t),i.m(t,null),g(e,s),o&&o.m(e,null),g(e,n),g(e,r),c||(d=z(r,"click",l[6]),c=!0)},p(f,u){_!==(_=p(f))&&(i.d(1),i=_(f),i&&(i.c(),i.m(t,null))),f[0]?o?o.p(f,u):(o=T(f),o.c(),o.m(e,n)):o&&(o.d(1),o=null)},d(f){f&&m(e),i.d(),o&&o.d(),c=!1,d()}}}function V(l){let e,t="New content available, click on reload button to update.";return{c(){e=v("span"),e.textContent=t},l(s){e=h(s,"SPAN",{"data-svelte-h":!0}),y(e)!=="svelte-z4spzz"&&(e.textContent=t)},m(s,n){k(s,e,n)},d(s){s&&m(e)}}}function q(l){let e,t="App ready to work offline";return{c(){e=v("span"),e.textContent=t},l(s){e=h(s,"SPAN",{"data-svelte-h":!0}),y(e)!=="svelte-1q9i8w6"&&(e.textContent=t)},m(s,n){k(s,e,n)},d(s){s&&m(e)}}}function T(l){let e,t="Reload",s,n;return{c(){e=v("button"),e.textContent=t,this.h()},l(r){e=h(r,"BUTTON",{class:!0,"data-svelte-h":!0}),y(e)!=="svelte-5n2h77"&&(e.textContent=t),this.h()},h(){b(e,"class","svelte-141ior1")},m(r,a){k(r,e,a),s||(n=z(e,"click",l[7]),s=!0)},p:R,d(r){r&&m(e),s=!1,n()}}}function B(l){let e,t=l[2]&&N(l);return{c(){t&&t.c(),e=S()},l(s){t&&t.l(s),e=S()},m(s,n){t&&t.m(s,n),k(s,e,n)},p(s,[n]){s[2]?t?t.p(s,n):(t=N(s),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:R,o:R,d(s){s&&m(e),t&&t.d(s)}}}function O(l,e,t){let s,n,r;const{needRefresh:a,updateServiceWorker:c,offlineReady:d}=L({onRegistered(i){console.log(`SW Registered: ${i}`)},onRegisterError(i){console.log("SW registration error",i)}});w(l,a,i=>t(0,n=i)),w(l,d,i=>t(1,r=i));const p=()=>{d.set(!1),a.set(!1)},_=()=>c(!0);return l.$$.update=()=>{l.$$.dirty&3&&t(2,s=r||n)},[n,r,s,a,c,d,p,_]}class K extends U{constructor(e){super(),j(this,e,O,B,A,{})}}export{K as default};
