import{_ as g}from"./preload-helper-b21cceae.js";function p(d={}){const{immediate:l=!1,onNeedRefresh:u,onOfflineReady:t,onRegistered:i,onRegisteredSW:o,onRegisterError:s}=d;let r,n;const c=async(a=!0)=>{await n};async function f(){if("serviceWorker"in navigator){const{Workbox:a,messageSW:v}=await g(()=>import("./workbox-window.prod.es5-5729c1a5.js"),[],import.meta.url);r=new a("./sw.js",{scope:"./",type:"classic"}),r.addEventListener("activated",e=>{e.isUpdate?window.location.reload():t==null||t()}),r.register({immediate:l}).then(e=>{o?o("./sw.js",e):i==null||i(e)}).catch(e=>{s==null||s(e)})}}return n=f(),c}export{p as registerSW};