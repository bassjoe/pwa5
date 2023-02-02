import{S as ot,i as it,s as st,a as lt,e as M,c as ct,b as z,g as pe,t as H,d as he,f as B,h as G,j as ft,o as Oe,k as ut,l as dt,m as pt,n as ke,p as C,q as ht,r as mt,u as _t,v as Y,w as X,x as Ne,y as Z,z as x,A as ue}from"./chunks/index-9ecbaa1c.js";import{S as tt,I as V,g as ze,f as We,a as Se,b as de,s as F,i as Ye,c as ae,P as Xe,d as gt,e as yt,h as wt}from"./chunks/singletons-837341a7.js";import{_ as te}from"./chunks/preload-helper-41c905a7.js";function vt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function bt(r){return r.split("%25").map(decodeURI).join("%25")}function Et(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const kt=["href","pathname","search","searchParams","toString","toJSON"];function St(r,e){const n=new URL(r);for(const s of kt){let o=n[s];Object.defineProperty(n,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return Rt(n),n}function Rt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const It="/__data.json";function Lt(r){return r.replace(/\/$/,"")+It}function At(...r){let e=5381;for(const n of r)if(typeof n=="string"){let s=n.length;for(;s;)e=e*33^n.charCodeAt(--s)}else if(ArrayBuffer.isView(n)){const s=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let o=s.length;for(;o;)e=e*33^s[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(r,e)=>((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"&&re.delete($e(r)),me(r,e));const re=new Map;function Ot(r,e){const n=$e(r,e),s=document.querySelector(n);if(s!=null&&s.textContent){const{body:o,...h}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&re.set(n,{body:o,init:h,ttl:1e3*Number(t)}),Promise.resolve(new Response(o,h))}return me(r,e)}function Pt(r,e,n){if(re.size>0){const s=$e(r,n),o=re.get(s);if(o){if(performance.now()<o.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(o.body,o.init);re.delete(s)}}return me(e,n)}function $e(r,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;if(e!=null&&e.headers||e!=null&&e.body){const o=[];e.headers&&o.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&o.push(e.body),s+=`[data-hash="${At(...o)}"]`}return s}const Ut=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Nt(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${jt(r).map(s=>{const o=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(o)return e.push({name:o[1],matcher:o[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const h=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(h)return e.push({name:h[1],matcher:h[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const t=s.split(/\[(.+?)\](?!\])/);return"/"+t.map((m,g)=>{if(g%2){if(m.startsWith("x+"))return Re(String.fromCharCode(parseInt(m.slice(2),16)));if(m.startsWith("u+"))return Re(String.fromCharCode(...m.slice(2).split("-").map(L=>parseInt(L,16))));const w=Ut.exec(m);if(!w)throw new Error(`Invalid param: ${m}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,E,S,$,D]=w;return e.push({name:$,matcher:D,optional:!!E,rest:!!S,chained:S?g===1&&t[0]==="":!1}),S?"(.*?)":E?"([^/]*)?":"([^/]+?)"}return Re(m)}).join("")}).join("")}/?$`),params:e}}function $t(r){return!/^\([^)]+\)$/.test(r)}function jt(r){return r.slice(1).split("/").filter($t)}function Tt(r,e,n){const s={},o=r.slice(1);let h=0;for(let t=0;t<e.length;t+=1){const f=e[t],m=o[t-h];if(f.chained&&f.rest&&h){s[f.name]=o.slice(t-h,t+1).filter(g=>g).join("/"),h=0;continue}if(m===void 0){f.rest&&(s[f.name]="");continue}if(!f.matcher||n[f.matcher](m)){s[f.name]=m;continue}if(f.optional&&f.chained){h++;continue}return}if(!h)return s}function Re(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Dt(r,e,n,s){const o=new Set(e);return Object.entries(n).map(([f,[m,g,w]])=>{const{pattern:E,params:S}=Nt(f),$={id:f,exec:D=>{const L=E.exec(D);if(L)return Tt(L,S,s)},errors:[1,...w||[]].map(D=>r[D]),layouts:[0,...g||[]].map(t),leaf:h(m)};return $.errors.length=$.layouts.length=Math.max($.errors.length,$.layouts.length),$});function h(f){const m=f<0;return m&&(f=~f),[m,r[f]]}function t(f){return f===void 0?f:[o.has(f),r[f]]}}function Vt(r){let e,n,s;var o=r[0][0];function h(t){return{props:{data:t[2],form:t[1]}}}return o&&(e=Y(o,h(r))),{c(){e&&X(e.$$.fragment),n=M()},l(t){e&&Ne(e.$$.fragment,t),n=M()},m(t,f){e&&Z(e,t,f),z(t,n,f),s=!0},p(t,f){const m={};if(f&4&&(m.data=t[2]),f&2&&(m.form=t[1]),o!==(o=t[0][0])){if(e){pe();const g=e;H(g.$$.fragment,1,0,()=>{x(g,1)}),he()}o?(e=Y(o,h(t)),X(e.$$.fragment),B(e.$$.fragment,1),Z(e,n.parentNode,n)):e=null}else o&&e.$set(m)},i(t){s||(e&&B(e.$$.fragment,t),s=!0)},o(t){e&&H(e.$$.fragment,t),s=!1},d(t){t&&G(n),e&&x(e,t)}}}function Ct(r){let e,n,s;var o=r[0][0];function h(t){return{props:{data:t[2],$$slots:{default:[qt]},$$scope:{ctx:t}}}}return o&&(e=Y(o,h(r))),{c(){e&&X(e.$$.fragment),n=M()},l(t){e&&Ne(e.$$.fragment,t),n=M()},m(t,f){e&&Z(e,t,f),z(t,n,f),s=!0},p(t,f){const m={};if(f&4&&(m.data=t[2]),f&523&&(m.$$scope={dirty:f,ctx:t}),o!==(o=t[0][0])){if(e){pe();const g=e;H(g.$$.fragment,1,0,()=>{x(g,1)}),he()}o?(e=Y(o,h(t)),X(e.$$.fragment),B(e.$$.fragment,1),Z(e,n.parentNode,n)):e=null}else o&&e.$set(m)},i(t){s||(e&&B(e.$$.fragment,t),s=!0)},o(t){e&&H(e.$$.fragment,t),s=!1},d(t){t&&G(n),e&&x(e,t)}}}function qt(r){let e,n,s;var o=r[0][1];function h(t){return{props:{data:t[3],form:t[1]}}}return o&&(e=Y(o,h(r))),{c(){e&&X(e.$$.fragment),n=M()},l(t){e&&Ne(e.$$.fragment,t),n=M()},m(t,f){e&&Z(e,t,f),z(t,n,f),s=!0},p(t,f){const m={};if(f&8&&(m.data=t[3]),f&2&&(m.form=t[1]),o!==(o=t[0][1])){if(e){pe();const g=e;H(g.$$.fragment,1,0,()=>{x(g,1)}),he()}o?(e=Y(o,h(t)),X(e.$$.fragment),B(e.$$.fragment,1),Z(e,n.parentNode,n)):e=null}else o&&e.$set(m)},i(t){s||(e&&B(e.$$.fragment,t),s=!0)},o(t){e&&H(e.$$.fragment,t),s=!1},d(t){t&&G(n),e&&x(e,t)}}}function Ze(r){let e,n=r[5]&&xe(r);return{c(){e=ut("div"),n&&n.c(),this.h()},l(s){e=dt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=pt(e);n&&n.l(o),o.forEach(G),this.h()},h(){ke(e,"id","svelte-announcer"),ke(e,"aria-live","assertive"),ke(e,"aria-atomic","true"),C(e,"position","absolute"),C(e,"left","0"),C(e,"top","0"),C(e,"clip","rect(0 0 0 0)"),C(e,"clip-path","inset(50%)"),C(e,"overflow","hidden"),C(e,"white-space","nowrap"),C(e,"width","1px"),C(e,"height","1px")},m(s,o){z(s,e,o),n&&n.m(e,null)},p(s,o){s[5]?n?n.p(s,o):(n=xe(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&G(e),n&&n.d()}}}function xe(r){let e;return{c(){e=ht(r[6])},l(n){e=mt(n,r[6])},m(n,s){z(n,e,s)},p(n,s){s&64&&_t(e,n[6])},d(n){n&&G(e)}}}function Ft(r){let e,n,s,o,h;const t=[Ct,Vt],f=[];function m(w,E){return w[0][1]?0:1}e=m(r),n=f[e]=t[e](r);let g=r[4]&&Ze(r);return{c(){n.c(),s=lt(),g&&g.c(),o=M()},l(w){n.l(w),s=ct(w),g&&g.l(w),o=M()},m(w,E){f[e].m(w,E),z(w,s,E),g&&g.m(w,E),z(w,o,E),h=!0},p(w,[E]){let S=e;e=m(w),e===S?f[e].p(w,E):(pe(),H(f[S],1,1,()=>{f[S]=null}),he(),n=f[e],n?n.p(w,E):(n=f[e]=t[e](w),n.c()),B(n,1),n.m(s.parentNode,s)),w[4]?g?g.p(w,E):(g=Ze(w),g.c(),g.m(o.parentNode,o)):g&&(g.d(1),g=null)},i(w){h||(B(n),h=!0)},o(w){H(n),h=!1},d(w){f[e].d(w),w&&G(s),g&&g.d(w),w&&G(o)}}}function Mt(r,e,n){let{stores:s}=e,{page:o}=e,{components:h}=e,{form:t}=e,{data_0:f=null}=e,{data_1:m=null}=e;ft(s.page.notify);let g=!1,w=!1,E=null;return Oe(()=>{const S=s.page.subscribe(()=>{g&&(n(5,w=!0),n(6,E=document.title||"untitled page"))});return n(4,g=!0),S}),r.$$set=S=>{"stores"in S&&n(7,s=S.stores),"page"in S&&n(8,o=S.page),"components"in S&&n(0,h=S.components),"form"in S&&n(1,t=S.form),"data_0"in S&&n(2,f=S.data_0),"data_1"in S&&n(3,m=S.data_1)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(o)},[h,t,f,m,g,w,E,s,o]}class Ht extends ot{constructor(e){super(),it(this,e,Mt,Ft,st,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Bt={},_e=[()=>te(()=>import("./chunks/0-49d172cf.js"),["./chunks/0-49d172cf.js","./chunks/_layout-79cb23d1.js","./components/pages/_layout.svelte-d2f03521.js","./chunks/preload-helper-41c905a7.js","./chunks/index-9ecbaa1c.js","./chunks/stores-7cb7ad72.js","./chunks/singletons-837341a7.js","./assets/_layout-ad4e4cfb.css"],import.meta.url),()=>te(()=>import("./chunks/1-b2bc0ba1.js"),["./chunks/1-b2bc0ba1.js","./components/pages/_error.svelte-79c596af.js","./chunks/index-9ecbaa1c.js"],import.meta.url),()=>te(()=>import("./chunks/2-86da29e0.js"),["./chunks/2-86da29e0.js","./components/pages/_page.svelte-77310f5d.js","./chunks/index-9ecbaa1c.js"],import.meta.url),()=>te(()=>import("./chunks/3-5096f649.js"),["./chunks/3-5096f649.js","./chunks/_page-3a52c0c1.js","./components/pages/about/_page.svelte-d6f2fefc.js","./chunks/index-9ecbaa1c.js","./chunks/stores-7cb7ad72.js","./chunks/singletons-837341a7.js"],import.meta.url),()=>te(()=>import("./chunks/4-88a06de1.js"),["./chunks/4-88a06de1.js","./components/pages/sign-up/_page.svelte-6d76f77a.js","./chunks/index-9ecbaa1c.js"],import.meta.url)],nt=[],Gt={"/":[2],"/about":[3],"/sign-up":[4]},Jt={handleError:({error:r})=>{console.error(r)}};let Pe=class{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}},Qe=class{constructor(e,n){this.status=e,this.location=n}};async function Kt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([s,o])=>[s,await o])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const zt=-1,Wt=-2,Yt=-3,Xt=-4,Zt=-5,xt=-6;function Qt(r){if(typeof r=="number")return s(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function s(o,h=!1){if(o===zt)return;if(o===Yt)return NaN;if(o===Xt)return 1/0;if(o===Zt)return-1/0;if(o===xt)return-0;if(h)throw new Error("Invalid input");if(o in n)return n[o];const t=e[o];if(!t||typeof t!="object")n[o]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[o]=new Date(t[1]);break;case"Set":const m=new Set;n[o]=m;for(let E=1;E<t.length;E+=1)m.add(s(t[E]));break;case"Map":const g=new Map;n[o]=g;for(let E=1;E<t.length;E+=2)g.set(s(t[E]),s(t[E+1]));break;case"RegExp":n[o]=new RegExp(t[1],t[2]);break;case"Object":n[o]=Object(t[1]);break;case"BigInt":n[o]=BigInt(t[1]);break;case"null":const w=Object.create(null);n[o]=w;for(let E=1;E<t.length;E+=2)w[t[E]]=s(t[E+1]);break}else{const f=new Array(t.length);n[o]=f;for(let m=0;m<t.length;m+=1){const g=t[m];g!==Wt&&(f[m]=s(g))}}else{const f={};n[o]=f;for(const m in t){const g=t[m];f[m]=s(g)}}return n[o]}return s(0)}function en(r){return r.filter(e=>e!=null)}const Ie=Dt(_e,nt,Gt,Bt),at=_e[0],Ue=_e[1];at();Ue();let W={};try{W=JSON.parse(sessionStorage[tt])}catch{}function Le(r){W[r]=ae()}function tn({target:r,base:e}){var Ge;const n=document.documentElement,s=[];let o=null;const h={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,m=!1,g=!0,w=!1,E=!1,S=!1,$=!1,D,L=(Ge=history.state)==null?void 0:Ge[V];L||(L=Date.now(),history.replaceState({...history.state,[V]:L},"",location.href));const ge=W[L];ge&&(history.scrollRestoration="manual",scrollTo(ge.x,ge.y));let J,je,oe;async function Te(){oe=oe||Promise.resolve(),await oe,oe=null;const a=new URL(location.href),i=le(a,!0);o=null,await Ve(i,a,[])}async function ye(a,{noScroll:i=!1,replaceState:c=!1,keepFocus:l=!1,state:d={},invalidateAll:u=!1},p,v){return typeof a=="string"&&(a=new URL(a,ze(document))),fe({url:a,scroll:i?ae():null,keepfocus:l,redirect_chain:p,details:{state:d,replaceState:c},nav_token:v,accepted:()=>{u&&($=!0)},blocked:()=>{},type:"goto"})}async function De(a){const i=le(a,!1);if(!i)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);return o={id:i.id,promise:Fe(i).then(c=>(c.type==="loaded"&&c.state.error&&(o=null),c))},o.promise}async function ie(...a){const c=Ie.filter(l=>a.some(d=>l.exec(d))).map(l=>Promise.all([...l.layouts,l.leaf].map(d=>d==null?void 0:d[1]())));await Promise.all(c)}async function Ve(a,i,c,l,d={},u){var v,y;je=d;let p=a&&await Fe(a);if(p||(p=await Be(i,{id:null},await ne(new Error(`Not found: ${i.pathname}`),{url:i,params:{},route:{id:null}}),404)),i=(a==null?void 0:a.url)||i,je!==d)return!1;if(p.type==="redirect")if(c.length>10||c.includes(i.pathname))p=await se({status:500,error:await ne(new Error("Redirect loop"),{url:i,params:{},route:{id:null}}),url:i,route:{id:null}});else return ye(new URL(p.location,i).href,{},[...c,i.pathname],d),!1;else((y=(v=p.props)==null?void 0:v.page)==null?void 0:y.status)>=400&&await F.updated.check()&&await ee(i);if(s.length=0,$=!1,w=!0,l&&l.details){const{details:_}=l,k=_.replaceState?0:1;_.state[V]=L+=k,history[_.replaceState?"replaceState":"pushState"](_.state,"",i)}if(o=null,m?(t=p.state,p.props.page&&(p.props.page.url=i),D.$set(p.props)):Ce(p),l){const{scroll:_,keepfocus:k}=l,{activeElement:O}=document;await ue();const j=document.activeElement!==O&&document.activeElement!==document.body;if(!k&&!j&&await Ae(),g){const I=i.hash&&document.getElementById(decodeURIComponent(i.hash.slice(1)));_?scrollTo(_.x,_.y):I?I.scrollIntoView():scrollTo(0,0)}}else await ue();g=!0,p.props.page&&(J=p.props.page),u&&u(),w=!1}function Ce(a){var l;t=a.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),J=a.props.page,D=new Ht({target:r,props:{...a.props,stores:F},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};h.after_navigate.forEach(d=>d(c)),m=!0}async function Q({url:a,params:i,branch:c,status:l,error:d,route:u,form:p}){let v="never";for(const I of c)(I==null?void 0:I.slash)!==void 0&&(v=I.slash);a.pathname=vt(a.pathname,v),a.search=a.search;const y={type:"loaded",state:{url:a,params:i,branch:c,error:d,route:u},props:{components:en(c).map(I=>I.node.component)}};p!==void 0&&(y.props.form=p);let _={},k=!J,O=0;for(let I=0;I<Math.max(c.length,t.branch.length);I+=1){const b=c[I],U=t.branch[I];(b==null?void 0:b.data)!==(U==null?void 0:U.data)&&(k=!0),b&&(_={..._,...b.data},k&&(y.props[`data_${O}`]=_),O+=1)}return(!t.url||a.href!==t.url.href||t.error!==d||p!==void 0&&p!==J.form||k)&&(y.props.page={error:d,params:i,route:{id:(u==null?void 0:u.id)??null},status:l,url:new URL(a),form:p??null,data:k?_:J.data}),y}async function we({loader:a,parent:i,url:c,params:l,route:d,server_data_node:u}){var _,k,O;let p=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},y=await a();if((_=y.universal)!=null&&_.load){let j=function(...b){for(const U of b){const{href:T}=new URL(U,c);v.dependencies.add(T)}};const I={route:{get id(){return v.route=!0,d.id}},params:new Proxy(l,{get:(b,U)=>(v.params.add(U),b[U])}),data:(u==null?void 0:u.data)??null,url:St(c,()=>{v.url=!0}),async fetch(b,U){let T;b instanceof Request?(T=b.url,U={body:b.method==="GET"||b.method==="HEAD"?void 0:await b.blob(),cache:b.cache,credentials:b.credentials,headers:b.headers,integrity:b.integrity,keepalive:b.keepalive,method:b.method,mode:b.mode,redirect:b.redirect,referrer:b.referrer,referrerPolicy:b.referrerPolicy,signal:b.signal,...U}):T=b;const q=new URL(T,c).href;return j(q),m?Pt(T,q,U):Ot(T,U)},setHeaders:()=>{},depends:j,parent(){return v.parent=!0,i()}};p=await y.universal.load.call(null,I)??null,p=p?await Kt(p):null}return{node:y,loader:a,server:u,universal:(k=y.universal)!=null&&k.load?{type:"data",data:p,uses:v}:null,data:p??(u==null?void 0:u.data)??null,slash:((O=y.universal)==null?void 0:O.trailingSlash)??(u==null?void 0:u.slash)}}function qe(a,i,c,l,d){if($)return!0;if(!l)return!1;if(l.parent&&a||l.route&&i||l.url&&c)return!0;for(const u of l.params)if(d[u]!==t.params[u])return!0;for(const u of l.dependencies)if(s.some(p=>p(new URL(u))))return!0;return!1}function ve(a,i){return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set(a.uses.dependencies??[]),params:new Set(a.uses.params??[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"?i??null:null}async function Fe({id:a,invalidating:i,url:c,params:l,route:d}){if((o==null?void 0:o.id)===a)return o.promise;const{errors:u,layouts:p,leaf:v}=d,y=[...p,v];u.forEach(R=>R==null?void 0:R().catch(()=>{})),y.forEach(R=>R==null?void 0:R[1]().catch(()=>{}));let _=null;const k=t.url?a!==t.url.pathname+t.url.search:!1,O=t.route?d.id!==t.route.id:!1;let j=!1;const I=y.map((R,N)=>{var K;const A=t.branch[N],P=!!(R!=null&&R[0])&&((A==null?void 0:A.loader)!==R[1]||qe(j,O,k,(K=A.server)==null?void 0:K.uses,l));return P&&(j=!0),P});if(I.some(Boolean)){try{_=await et(c,I)}catch(R){return se({status:500,error:await ne(R,{url:c,params:l,route:{id:d.id}}),url:c,route:d})}if(_.type==="redirect")return _}const b=_==null?void 0:_.nodes;let U=!1;const T=y.map(async(R,N)=>{var be;if(!R)return;const A=t.branch[N],P=b==null?void 0:b[N];if((!P||P.type==="skip")&&R[1]===(A==null?void 0:A.loader)&&!qe(U,O,k,(be=A.universal)==null?void 0:be.uses,l))return A;if(U=!0,(P==null?void 0:P.type)==="error")throw P;return we({loader:R[1],url:c,params:l,route:d,parent:async()=>{var Ke;const Je={};for(let Ee=0;Ee<N;Ee+=1)Object.assign(Je,(Ke=await T[Ee])==null?void 0:Ke.data);return Je},server_data_node:ve(P===void 0&&R[0]?{type:"skip"}:P??null,A==null?void 0:A.server)})});for(const R of T)R.catch(()=>{});const q=[];for(let R=0;R<y.length;R+=1)if(y[R])try{q.push(await T[R])}catch(N){if(N instanceof Qe)return{type:"redirect",location:N.location};let A=500,P;if(b!=null&&b.includes(N))A=N.status??A,P=N.error;else if(N instanceof Pe)A=N.status,P=N.body;else{if(await F.updated.check())return await ee(c);P=await ne(N,{params:l,url:c,route:{id:d.id}})}const K=await Me(R,q,u);return K?await Q({url:c,params:l,branch:q.slice(0,K.idx).concat(K.node),status:A,error:P,route:d}):await Be(c,{id:d.id},P,A)}else q.push(void 0);return await Q({url:c,params:l,branch:q,status:200,error:null,route:d,form:i?void 0:null})}async function Me(a,i,c){for(;a--;)if(c[a]){let l=a;for(;!i[l];)l-=1;try{return{idx:l+1,node:{node:await c[a](),loader:c[a],data:{},server:null,universal:null}}}catch{continue}}}async function se({status:a,error:i,url:c,route:l}){const d={};let u=null;if(nt[0]===0)try{const _=await et(c,[!0]);if(_.type!=="data"||_.nodes[0]&&_.nodes[0].type!=="data")throw 0;u=_.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await ee(c)}const v=await we({loader:at,url:c,params:d,route:l,parent:()=>Promise.resolve({}),server_data_node:ve(u)}),y={node:await Ue(),loader:Ue,universal:null,server:null,data:null};return await Q({url:c,params:d,branch:[v,y],status:a,error:i,route:null})}function le(a,i){if(Ye(a,e))return;const c=ce(a);for(const l of Ie){const d=l.exec(c);if(d)return{id:a.pathname+a.search,invalidating:i,route:l,params:Et(d),url:a}}}function ce(a){return bt(a.pathname.slice(e.length)||"/")}function He({url:a,type:i,intent:c,delta:l}){var v,y;let d=!1;const u={from:{params:t.params,route:{id:((v=t.route)==null?void 0:v.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((y=c==null?void 0:c.route)==null?void 0:y.id)??null},url:a},willUnload:!c,type:i};l!==void 0&&(u.delta=l);const p={...u,cancel:()=>{d=!0}};return E||h.before_navigate.forEach(_=>_(p)),d?null:u}async function fe({url:a,scroll:i,keepfocus:c,redirect_chain:l,details:d,type:u,delta:p,nav_token:v,accepted:y,blocked:_}){const k=le(a,!1),O=He({url:a,type:u,delta:p,intent:k});if(!O){_();return}Le(L),y(),E=!0,m&&F.navigating.set(O),await Ve(k,a,l,{scroll:i,keepfocus:c,details:d},v,()=>{E=!1,h.after_navigate.forEach(j=>j(O)),F.navigating.set(null)})}async function Be(a,i,c,l){return a.origin===location.origin&&a.pathname===location.pathname&&!f?await se({status:l,error:c,url:a,route:i}):await ee(a)}function ee(a){return location.href=a.href,new Promise(()=>{})}function rt(){let a;n.addEventListener("mousemove",u=>{const p=u.target;clearTimeout(a),a=setTimeout(()=>{l(p,2)},20)});function i(u){l(u.composedPath()[0],1)}n.addEventListener("mousedown",i),n.addEventListener("touchstart",i,{passive:!0});const c=new IntersectionObserver(u=>{for(const p of u)p.isIntersecting&&(ie(ce(new URL(p.target.href))),c.unobserve(p.target))},{threshold:0});function l(u,p){const v=We(u,n);if(!v)return;const{url:y,external:_}=Se(v,e);if(_)return;const k=de(v);k.reload||(p<=k.preload_data?De(y):p<=k.preload_code&&ie(ce(y)))}function d(){c.disconnect();for(const u of n.querySelectorAll("a")){const{url:p,external:v}=Se(u,e);if(v)continue;const y=de(u);y.reload||(y.preload_code===Xe.viewport&&c.observe(u),y.preload_code===Xe.eager&&ie(ce(p)))}}h.after_navigate.push(d),d()}return{after_navigate:a=>{Oe(()=>(h.after_navigate.push(a),()=>{const i=h.after_navigate.indexOf(a);h.after_navigate.splice(i,1)}))},before_navigate:a=>{Oe(()=>(h.before_navigate.push(a),()=>{const i=h.before_navigate.indexOf(a);h.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(w||!m)&&(g=!1)},goto:(a,i={})=>ye(a,i,[]),invalidate:a=>{if(typeof a=="function")s.push(a);else{const{href:i}=new URL(a,location.href);s.push(c=>c.href===i)}return Te()},invalidateAll:()=>($=!0,Te()),preload_data:async a=>{const i=new URL(a,ze(document));await De(i)},preload_code:ie,apply_action:async a=>{if(a.type==="error"){const i=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const d=await Me(t.branch.length,c,l.errors);if(d){const u=await Q({url:i,params:t.params,branch:c.slice(0,d.idx).concat(d.node),status:a.status??500,error:a.error,route:l});t=u.state,D.$set(u.props),ue().then(Ae)}}else if(a.type==="redirect")ye(a.location,{invalidateAll:!0},[]);else{const i={form:a.data,page:{...J,form:a.data,status:a.status}};D.$set(i),a.type==="success"&&ue().then(Ae)}},_start_router:()=>{var a;history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var l;let c=!1;if(!E){const d={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};h.before_navigate.forEach(u=>u(d))}c?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Le(L);try{sessionStorage[tt]=JSON.stringify(W)}catch{}}}),(a=navigator.connection)!=null&&a.saveData||rt(),n.addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const c=We(i.composedPath()[0],n);if(!c)return;const{url:l,external:d,target:u}=Se(c,e);if(!l)return;if(u==="_parent"||u==="_top"){if(window.parent!==window)return}else if(u&&u!=="_self")return;const p=de(c);if(!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:"))return;if(d||p.reload){He({url:l,type:"link"})||i.preventDefault(),E=!0;return}const[y,_]=l.href.split("#");if(_!==void 0&&y===location.href.split("#")[0]){S=!0,Le(L),t.url=l,F.page.set({...J,url:l}),F.page.notify();return}fe({url:l,scroll:p.noscroll?ae():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),n.addEventListener("submit",i=>{if(i.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(i.target),l=i.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const u=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(Ye(u,e))return;const p=i.target,{noscroll:v,reload:y}=de(p);if(y)return;i.preventDefault(),i.stopPropagation();const _=new FormData(p),k=l==null?void 0:l.getAttribute("name");k&&_.append(k,(l==null?void 0:l.getAttribute("value"))??""),u.search=new URLSearchParams(_).toString(),fe({url:u,scroll:v?ae():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",i=>{var c;if((c=i.state)!=null&&c[V]){if(i.state[V]===L)return;const l=W[i.state[V]];if(t.url.href.split("#")[0]===location.href.split("#")[0]){W[L]=ae(),L=i.state[V],scrollTo(l.x,l.y);return}const d=i.state[V]-L;fe({url:new URL(location.href),scroll:l,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{L=i.state[V]},blocked:()=>{history.go(-d)},type:"popstate",delta:d})}}),addEventListener("hashchange",()=>{S&&(S=!1,history.replaceState({...history.state,[V]:++L},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&F.navigating.set(null)})},_hydrate:async({status:a=200,error:i,node_ids:c,params:l,route:d,data:u,form:p})=>{f=!0;const v=new URL(location.href);({params:l={},route:d={id:null}}=le(v,!1)||{});let y;try{const _=c.map(async(k,O)=>{const j=u[O];return we({loader:_e[k],url:v,params:l,route:d,parent:async()=>{const I={};for(let b=0;b<O;b+=1)Object.assign(I,(await _[b]).data);return I},server_data_node:ve(j)})});y=await Q({url:v,params:l,branch:await Promise.all(_),status:a,error:i,form:p,route:Ie.find(({id:k})=>k===d.id)??null})}catch(_){if(_ instanceof Qe){await ee(new URL(_.location,location.href));return}y=await se({status:_ instanceof Pe?_.status:500,error:await ne(_,{url:v,params:l,route:d}),url:v,route:d})}Ce(y)}}}async function et(r,e){var h;const n=new URL(r);n.pathname=Lt(r.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const s=await me(n.href),o=await s.json();if(!s.ok)throw new Error(o);return(h=o.nodes)==null||h.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=Qt(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),o}function ne(r,e){return r instanceof Pe?r.body:Jt.handleError({error:r,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Ae(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(s=>{setTimeout(()=>{var o;s((o=getSelection())==null?void 0:o.removeAllRanges())})})}}async function ln({env:r,hydrate:e,paths:n,target:s,version:o}){gt(n),wt(o);const h=tn({target:s,base:n.base});yt({client:h}),e?await h._hydrate(e):h.goto(location.href,{replaceState:!0}),h._start_router()}export{ln as start};
