import{_ as j}from"../chunks/preload-helper.41c905a7.js";import{S as F,i as G,s as J,k as b,r as T,a as L,l as w,m as E,u as V,h as p,c as M,p as R,D as I,b as S,E as _,v as Y,n as q,F as Z,G as x,H as ee,e as D,z as N,I as te,J as ae,A as K,B as W,K as se,L as ne,M as re,g as k,d as H,f as Q,C as O,o as oe,y as z,w as X}from"../chunks/index.17e9b1a2.js";import{p as le}from"../chunks/stores.3b5e5120.js";import{e as v}from"../chunks/singletons.b2d7985b.js";const y={pwaInDevEnvironment:!1,webManifest:{href:"./manifest.webmanifest",useCredentials:!1,linkTag:'<link rel="manifest" href="./manifest.webmanifest">'}};function ie(f){let e,n,u,s=f[0].url.pathname+"",m,r,o,c,$,h,d,A,i,l;return{c(){e=b("nav"),n=b("p"),u=T("Current URL: "),m=T(s),r=L(),o=b("a"),c=T("Home"),$=L(),h=b("a"),d=T("About"),A=L(),i=b("a"),l=T("Sign up"),this.h()},l(t){e=w(t,"NAV",{class:!0});var a=E(e);n=w(a,"P",{});var g=E(n);u=V(g,"Current URL: "),m=V(g,s),g.forEach(p),r=M(a),o=w(a,"A",{href:!0});var C=E(o);c=V(C,"Home"),C.forEach(p),$=M(a),h=w(a,"A",{href:!0});var P=E(h);d=V(P,"About"),P.forEach(p),A=M(a),i=w(a,"A",{href:!0});var U=E(i);l=V(U,"Sign up"),U.forEach(p),a.forEach(p),this.h()},h(){R(o,"href",v+"/"),I(o,"nav-active-route",f[0].url.pathname===`${v}/`),R(h,"href",v+"/about/"),I(h,"nav-active-route",f[0].url.pathname===`${v}/about/`),R(i,"href",v+"/sign-up/"),I(i,"nav-active-route",f[0].url.pathname===`${v}/sign-up/`),R(e,"class","flex justify-center gap-16 p-4")},m(t,a){S(t,e,a),_(e,n),_(n,u),_(n,m),_(e,r),_(e,o),_(o,c),_(e,$),_(e,h),_(h,d),_(e,A),_(e,i),_(i,l)},p(t,[a]){a&1&&s!==(s=t[0].url.pathname+"")&&Y(m,s),a&1&&I(o,"nav-active-route",t[0].url.pathname===`${v}/`),a&1&&I(h,"nav-active-route",t[0].url.pathname===`${v}/about/`),a&1&&I(i,"nav-active-route",t[0].url.pathname===`${v}/sign-up/`)},i:q,o:q,d(t){t&&p(e)}}}function fe(f,e,n){let u;return Z(f,le,s=>n(0,u=s)),[u]}class ue extends F{constructor(e){super(),G(this,e,fe,ie,J,{})}}function B(f){let e,n,u;var s=f[0];function m(r){return{}}return s&&(e=z(s,m())),{c(){e&&N(e.$$.fragment),n=D()},l(r){e&&K(e.$$.fragment,r),n=D()},m(r,o){e&&W(e,r,o),S(r,n,o),u=!0},p(r,o){if(s!==(s=r[0])){if(e){X();const c=e;H(c.$$.fragment,1,0,()=>{O(c,1)}),Q()}s?(e=z(s,m()),N(e.$$.fragment),k(e.$$.fragment,1),W(e,n.parentNode,n)):e=null}},i(r){u||(e&&k(e.$$.fragment,r),u=!0)},o(r){e&&H(e.$$.fragment,r),u=!1},d(r){r&&p(n),e&&O(e,r)}}}function me(f){let e,n,u,s,m,r,o,c,$,h,d;m=new ue({});const A=f[3].default,i=x(A,f,f[2],null);let l=f[0]&&B(f);return{c(){e=new ee(!1),n=D(),u=L(),s=b("div"),N(m.$$.fragment),r=L(),o=b("div"),c=b("main"),i&&i.c(),$=L(),l&&l.c(),h=D(),this.h()},l(t){const a=te("svelte-13srx9e",document.head);e=ae(a,!1),n=D(),a.forEach(p),u=M(t),s=w(t,"DIV",{class:!0});var g=E(s);K(m.$$.fragment,g),r=M(g),o=w(g,"DIV",{class:!0});var C=E(o);c=w(C,"MAIN",{});var P=E(c);i&&i.l(P),P.forEach(p),C.forEach(p),g.forEach(p),$=M(t),l&&l.l(t),h=D(),this.h()},h(){e.a=n,R(o,"class","max-w-max mx-auto"),R(s,"class","bg-slate-100 h-screen")},m(t,a){e.m(f[1],document.head),_(document.head,n),S(t,u,a),S(t,s,a),W(m,s,null),_(s,r),_(s,o),_(o,c),i&&i.m(c,null),S(t,$,a),l&&l.m(t,a),S(t,h,a),d=!0},p(t,[a]){(!d||a&2)&&e.p(t[1]),i&&i.p&&(!d||a&4)&&se(i,A,t,t[2],d?re(A,t[2],a,null):ne(t[2]),null),t[0]?l?(l.p(t,a),a&1&&k(l,1)):(l=B(t),l.c(),k(l,1),l.m(h.parentNode,h)):l&&(X(),H(l,1,1,()=>{l=null}),Q())},i(t){d||(k(m.$$.fragment,t),k(i,t),k(l),d=!0)},o(t){H(m.$$.fragment,t),H(i,t),H(l),d=!1},d(t){p(n),t&&e.d(),t&&p(u),t&&p(s),O(m),i&&i.d(t),t&&p($),l&&l.d(t),t&&p(h)}}}function ce(f,e,n){let u,{$$slots:s={},$$scope:m}=e,r;return oe(async()=>{if(y){n(0,r=(await j(()=>import("../chunks/ReloadPrompt.d34895d4.js"),["../chunks/ReloadPrompt.d34895d4.js","../chunks/index.17e9b1a2.js","../chunks/preload-helper.41c905a7.js","../chunks/singletons.b2d7985b.js","../assets/ReloadPrompt.8b6f04a5.css"],import.meta.url)).default);const{registerSW:o}=await j(()=>import("../chunks/virtual_pwa-register.5077c739.js"),["../chunks/virtual_pwa-register.5077c739.js","../chunks/preload-helper.41c905a7.js"],import.meta.url);o({immediate:!0,onRegistered(c){console.log(`SW Registered: ${c}`)},onRegisterError(c){console.log("SW registration error",c)}})}}),f.$$set=o=>{"$$scope"in o&&n(2,m=o.$$scope)},n(1,u=y?y.webManifest.linkTag:""),[r,u,m,s]}class ve extends F{constructor(e){super(),G(this,e,ce,me,J,{})}}export{ve as default};
