function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/cart-CPZykOb-.js","assets/web-D8qGCTXe.js","assets/Footer-CazmUOC7.js","assets/product-BIrgGnpd.js","assets/LoaderIcon-aE-qRZbu.js","assets/components-CBlfzv1Q.js","assets/routing-B4bTVxWt.js","assets/catalog-BPcOHE23.js","assets/Base-B57mFvZQ.js","assets/checkout-GJgyrJOI.js","assets/index-fOczvcKO.js","assets/favorites-C0CyK_fX.js","assets/index-Em_zRj3o.js","assets/Card2-Ch_ta0W4.js","assets/index-Cd5ZnWH_.css","assets/login-DcxKm-JB.js","assets/productinfo-DTubpYpe.js","assets/profile-BesJcHBg.js","assets/reg-B-_rmmxr.js","assets/thank-Br0Ta-gx.js","assets/_...404_-DUA12w7Q.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{c as Q,a as $,b as w,g as tt,o as et,S as U,d as rt,e as B,f as Z,h as z,i as k,s as A,m as R,j as I,r as P,t as b,l as it,k as st,n as y,p as nt,E as ot,q as at}from"./web-D8qGCTXe.js";import{c as lt,a as ct,R as ut,g as dt,b as ht,d as W,e as pt,m as ft,k as mt,s as gt,f as wt,n as Ct,u as _t}from"./routing-B4bTVxWt.js";const vt="modulepreload",xt=function(t){return"/_build/"+t},N={},p=function(r,e,i){let s=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link");s=Promise.all(e.map(n=>{if(n=xt(n),n in N)return;N[n]=!0;const o=n.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!i)for(let d=a.length-1;d>=0;d--){const C=a[d];if(C.href===n&&(!o||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${l}`))return;const h=document.createElement("link");if(h.rel=o?"stylesheet":vt,o||(h.as="script",h.crossOrigin=""),h.href=n,document.head.appendChild(h),o)return new Promise((d,C)=>{h.addEventListener("load",d),h.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${n}`)))})}))}return s.then(()=>r()).catch(a=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=a,window.dispatchEvent(n),!n.defaultPrevented)throw a})},T="Invariant Violation",{setPrototypeOf:kt=function(t,r){return t.__proto__=r,t}}=Object;class D extends Error{framesToPop=1;name=T;constructor(r=T){super(typeof r=="number"?`${T}: ${r} (see https://github.com/apollographql/invariant-packages)`:r),kt(this,D.prototype)}}function O(t,r){if(!t)throw new D(r)}const Et=/^[A-Za-z]:\//;function bt(t=""){return t&&t.replace(/\\/g,"/").replace(Et,r=>r.toUpperCase())}const Lt=/^[/\\]{2}/,$t=/^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,Ft=/^[A-Za-z]:$/,yt=function(t){if(t.length===0)return".";t=bt(t);const r=t.match(Lt),e=S(t),i=t[t.length-1]==="/";return t=Pt(t,!e),t.length===0?e?"/":i?"./":".":(i&&(t+="/"),Ft.test(t)&&(t+="/"),r?e?`//${t}`:`//./${t}`:e&&!S(t)?`/${t}`:t)},q=function(...t){if(t.length===0)return".";let r;for(const e of t)e&&e.length>0&&(r===void 0?r=e:r+=`/${e}`);return r===void 0?".":yt(r.replace(/\/\/+/g,"/"))};function Pt(t,r){let e="",i=0,s=-1,a=0,n=null;for(let o=0;o<=t.length;++o){if(o<t.length)n=t[o];else{if(n==="/")break;n="/"}if(n==="/"){if(!(s===o-1||a===1))if(a===2){if(e.length<2||i!==2||e[e.length-1]!=="."||e[e.length-2]!=="."){if(e.length>2){const l=e.lastIndexOf("/");l===-1?(e="",i=0):(e=e.slice(0,l),i=e.length-1-e.lastIndexOf("/")),s=o,a=0;continue}else if(e.length>0){e="",i=0,s=o,a=0;continue}}r&&(e+=e.length>0?"/..":"..",i=2)}else e.length>0?e+=`/${t.slice(s+1,o)}`:e=t.slice(s+1,o),i=o-s-1;s=o,a=0}else n==="."&&a!==-1?++a:a=-1}return e}const S=function(t){return $t.test(t)};function At(t){return`virtual:${t}`}function Rt(t){return t.handler?.endsWith(".html")?S(t.handler)?t.handler:q(t.root,t.handler):`#vinxi/handler/${t.name}`}const Tt=new Proxy({},{get(t,r){return O(typeof r=="string","Bundler name should be a string"),{name:r,type:"client",handler:At(Rt({name:r})),baseURL:"/_build",chunks:new Proxy({},{get(e,i){O(typeof i=="string","Chunk expected");let s=q("/_build",i+".mjs");return{import(){return p(()=>import(s),__vite__mapDeps([]))},output:{path:s}}}}),inputs:new Proxy({},{get(e,i){O(typeof i=="string","Input must be string");let s=window.manifest[i].output;return{async import(){return p(()=>import(s),__vite__mapDeps([]))},async assets(){return window.manifest[i].assets},output:{path:s}}}})}}});globalThis.MANIFEST=Tt;const Ot=t=>r=>{const{base:e}=r,i=Q(()=>r.children),s=$(()=>lt(r.root?{component:r.root,load:r.rootLoad,children:i()}:i(),r.base||""));let a;const n=ct(t,()=>a,s,{base:e,singleFlight:r.singleFlight});return t.create&&t.create(n),w(ut.Provider,{value:n,get children(){return[$(()=>(a=tt())&&null),w(St,{routerState:n,get branches(){return s()}})]}})};function St(t){const r=$(()=>dt(t.branches,t.routerState.location.pathname)),e=ht(()=>{const n=r(),o={};for(let l=0;l<n.length;l++)Object.assign(o,n[l].params);return o}),i=[];let s;const a=$(et(r,(n,o,l)=>{let m=o&&n.length===o.length;const h=[];for(let d=0,C=n.length;d<C;d++){const v=o&&o[d],c=n[d];l&&v&&c.route.key===v.route.key?h[d]=l[d]:(m=!1,i[d]&&i[d](),rt(u=>{i[d]=u,h[d]=pt(t.routerState,h[d-1]||t.routerState.base,It(()=>a()[d+1]),()=>r()[d],e)}))}return i.splice(n.length).forEach(d=>d()),l&&m?l:(s=h[0],h)}));return w(U,{get when(){return a()&&s},keyed:!0,children:n=>w(W.Provider,{value:n,get children(){return n.outlet()}})})}const It=t=>()=>w(U,{get when(){return t()},keyed:!0,children:r=>w(W.Provider,{value:r,get children(){return r.outlet()}})});function Dt([t,r],e,i){return[e?()=>e(t()):t,i?s=>r(i(s)):r]}function Nt(t){if(t==="#")return null;try{return document.querySelector(t)}catch{return null}}function Mt(t){let r=!1;const e=s=>typeof s=="string"?{value:s}:s,i=Dt(B(e(t.get()),{equals:(s,a)=>s.value===a.value}),void 0,s=>(!r&&t.set(s),s));return t.init&&Z(t.init((s=t.get())=>{r=!0,i[1](e(s)),r=!1})),Ot({signal:i,create:t.create,utils:t.utils})}function Vt(t,r,e){return t.addEventListener(r,e),()=>t.removeEventListener(r,e)}function jt(t,r){const e=Nt(`#${t}`);e?e.scrollIntoView():r&&window.scrollTo(0,0)}const Ut=new Map;function Bt(t=!0,r=!1,e="/_server"){return i=>{const s=i.base.path(),a=i.navigatorFactory(i.base);let n={};function o(c){return c.namespaceURI==="http://www.w3.org/2000/svg"}function l(c){if(c.defaultPrevented||c.button!==0||c.metaKey||c.altKey||c.ctrlKey||c.shiftKey)return;const u=c.composedPath().find(L=>L instanceof Node&&L.nodeName.toUpperCase()==="A");if(!u||r&&!u.hasAttribute("link"))return;const g=o(u),f=g?u.href.baseVal:u.href;if((g?u.target.baseVal:u.target)||!f&&!u.hasAttribute("state"))return;const _=(u.getAttribute("rel")||"").split(/\s+/);if(u.hasAttribute("download")||_&&_.includes("external"))return;const x=g?new URL(f,document.baseURI):new URL(f);if(!(x.origin!==window.location.origin||s&&x.pathname&&!x.pathname.toLowerCase().startsWith(s.toLowerCase())))return[u,x]}function m(c){const u=l(c);if(!u)return;const[g,f]=u,F=i.parsePath(f.pathname+f.search+f.hash),_=g.getAttribute("state");c.preventDefault(),a(F,{resolve:!1,replace:g.hasAttribute("replace"),scroll:!g.hasAttribute("noscroll"),state:_&&JSON.parse(_)})}function h(c){const u=l(c);if(!u)return;const[g,f]=u;n[f.pathname]||i.preloadRoute(f,g.getAttribute("preload")!=="false")}function d(c){const u=l(c);if(!u)return;const[g,f]=u;n[f.pathname]||(n[f.pathname]=setTimeout(()=>{i.preloadRoute(f,g.getAttribute("preload")!=="false"),delete n[f.pathname]},200))}function C(c){const u=l(c);if(!u)return;const[,g]=u;n[g.pathname]&&(clearTimeout(n[g.pathname]),delete n[g.pathname])}function v(c){let u=c.submitter&&c.submitter.hasAttribute("formaction")?c.submitter.getAttribute("formaction"):c.target.getAttribute("action");if(!u)return;if(!u.startsWith("https://action/")){const f=new URL(u,ft);if(u=i.parsePath(f.pathname+f.search),!u.startsWith(e))return}if(c.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const g=Ut.get(u);if(g){c.preventDefault();const f=new FormData(c.target);c.submitter&&c.submitter.name&&f.append(c.submitter.name,c.submitter.value),g.call(i,f)}}z(["click","submit"]),document.addEventListener("click",m),t&&(document.addEventListener("mouseover",d),document.addEventListener("mouseout",C),document.addEventListener("focusin",h),document.addEventListener("touchstart",h)),document.addEventListener("submit",v),Z(()=>{document.removeEventListener("click",m),t&&(document.removeEventListener("mouseover",d),document.removeEventListener("mouseout",C),document.removeEventListener("focusin",h),document.removeEventListener("touchstart",h)),document.removeEventListener("submit",v)})}}function Zt(t){const r=()=>({value:window.location.pathname+window.location.search+window.location.hash,state:window.history.state}),e=wt();return Mt({get:r,set({value:i,replace:s,scroll:a,state:n}){s?window.history.replaceState(mt(n),"",i):window.history.pushState(n,"",i),jt(window.location.hash.slice(1),a),gt()},init:i=>Vt(window,"popstate",Ct(i,s=>{if(s&&s<0)return!e.confirm(s);{const a=r();return!e.confirm(a.value,{state:a.state})}})),create:Bt(t.preload,t.explicitLinks,t.actionBase),utils:{go:i=>window.history.go(i),beforeLeave:e}})(t)}function zt(t){t.forEach(r=>{if(!r.attrs.href)return;let e=document.head.querySelector(`link[href="${r.attrs.href}"]`);e||(e=document.createElement("link"),e.setAttribute("rel","preload"),e.setAttribute("as","style"),e.setAttribute("href",r.attrs.href),document.head.appendChild(e))})}var Wt=b("<style>"),qt=b("<link>"),Ht=b("<script> ");const Kt={style:t=>(()=>{var r=k(Wt);return A(r,R(()=>t.attrs),!1,!0),I(r,()=>t.children),P(),r})(),link:t=>(()=>{var r=k(qt);return A(r,R(()=>t.attrs),!1,!1),P(),r})(),script:t=>t.attrs.src?(()=>{var r=k(Ht);return A(r,R(()=>t.attrs,{get id(){return t.key}}),!1,!0),P(),r})():null};function Gt(t){let{tag:r,attrs:{key:e,...i}={key:void 0},children:s}=t;return Kt[r]({attrs:i,key:e,children:s})}function Jt(t,r,e,i="default"){return it(async()=>{{const a=(await t.import())[i],o=(await r.inputs?.[t.src].assets()).filter(m=>m.tag==="style"||m.attrs.rel==="stylesheet");return typeof window<"u"&&zt(o),{default:m=>[...o.map(h=>Gt(h)),w(a,m)]}}})}const E={NORMAL:0,WILDCARD:1,PLACEHOLDER:2};function Xt(t={}){const r={options:t,rootNode:H(),staticRoutesMap:{}},e=i=>t.strictTrailingSlash?i:i.replace(/\/$/,"")||"/";if(t.routes)for(const i in t.routes)M(r,e(i),t.routes[i]);return{ctx:r,lookup:i=>Yt(r,e(i)),insert:(i,s)=>M(r,e(i),s),remove:i=>Qt(r,e(i))}}function Yt(t,r){const e=t.staticRoutesMap[r];if(e)return e.data;const i=r.split("/"),s={};let a=!1,n=null,o=t.rootNode,l=null;for(let m=0;m<i.length;m++){const h=i[m];o.wildcardChildNode!==null&&(n=o.wildcardChildNode,l=i.slice(m).join("/"));const d=o.children.get(h);if(d!==void 0)o=d;else if(o=o.placeholderChildNode,o!==null)s[o.paramName]=h,a=!0;else break}return(o===null||o.data===null)&&n!==null&&(o=n,s[o.paramName||"_"]=l,a=!0),o?a?{...o.data,params:a?s:void 0}:o.data:null}function M(t,r,e){let i=!0;const s=r.split("/");let a=t.rootNode,n=0;for(const o of s){let l;if(l=a.children.get(o))a=l;else{const m=te(o);l=H({type:m,parent:a}),a.children.set(o,l),m===E.PLACEHOLDER?(l.paramName=o==="*"?`_${n++}`:o.slice(1),a.placeholderChildNode=l,i=!1):m===E.WILDCARD&&(a.wildcardChildNode=l,l.paramName=o.slice(3)||"_",i=!1),a=l}}return a.data=e,i===!0&&(t.staticRoutesMap[r]=a),a}function Qt(t,r){let e=!1;const i=r.split("/");let s=t.rootNode;for(const a of i)if(s=s.children.get(a),!s)return e;if(s.data){const a=i[i.length-1];if(s.data=null,Object.keys(s.children).length===0){const n=s.parent;n.children.delete(a),n.wildcardChildNode=null,n.placeholderChildNode=null}e=!0}return e}function H(t={}){return{type:t.type||E.NORMAL,parent:t.parent||null,children:new Map,data:t.data||null,paramName:t.paramName||null,wildcardChildNode:null,placeholderChildNode:null}}function te(t){return t.startsWith("**")?E.WILDCARD:t[0]===":"||t==="*"?E.PLACEHOLDER:E.NORMAL}const K=[{$component:{src:"src/routes/cart.tsx?pick=default&pick=$css",build:()=>p(()=>import("./cart-CPZykOb-.js"),__vite__mapDeps([0,1,2,3,4,5,6])),import:()=>{const t="src/routes/cart.tsx?pick=default&pick=$css";return p(()=>import(globalThis.MANIFEST.client.inputs[t].output.path),__vite__mapDeps([]))}},path:"/cart",filePath:"C:/Users/эльдорадо/OneDrive/Рабочий стол/diplomeproject2 — копия/src/routes/cart.tsx"},{$component:{src:"src/routes/catalog.tsx?pick=default&pick=$css",build:()=>p(()=>import("./catalog-BPcOHE23.js"),__vite__mapDeps([7,1,2,8,6,4,5])),import:()=>{const t="src/routes/catalog.tsx?pick=default&pick=$css";return p(()=>import(globalThis.MANIFEST.client.inputs[t].output.path),__vite__mapDeps([]))}},path:"/catalog",filePath:"C:/Users/эльдорадо/OneDrive/Рабочий стол/diplomeproject2 — копия/src/routes/catalog.tsx"},{$component:{src:"src/routes/checkout.tsx?pick=default&pick=$css",build:()=>p(()=>import("./checkout-GJgyrJOI.js"),__vite__mapDeps([9,1,2,10,5,6])),import:()=>{const t="src/routes/checkout.tsx?pick=default&pick=$css";return p(()=>import(globalThis.MANIFEST.client.inputs[t].output.path),__vite__mapDeps([]))}},path:"/checkout",filePath:"C:/Users/эльдорадо/OneDrive/Рабочий стол/diplomeproject2 — копия/src/routes/checkout.tsx"},{$component:{src:"src/routes/favorites.tsx?pick=default&pick=$css",build:()=>p(()=>import("./favorites-C0CyK_fX.js"),__vite__mapDeps([11,1,2,6,4,5])),import:()=>{const t="src/routes/favorites.tsx?pick=default&pick=$css";return p(()=>import(globalThis.MANIFEST.client.inputs[t].output.path),__vite__mapDeps([]))}},path:"/favorites",filePath:"C:/Users/эльдорадо/OneDrive/Рабочий стол/diplomeproject2 — копия/src/routes/favorites.tsx"},{$component:{src:"src/routes/index.tsx?pick=default&pick=$css",build:()=>p(()=>import("./index-Em_zRj3o.js"),__vite__mapDeps([12,1,13,6,4,8,2,14])),import:()=>{const t="src/routes/index.tsx?pick=default&pick=$css";return p(()=>import(globalThis.MANIFEST.client.inputs[t].output.path),__vite__mapDeps([]))}},path:"/",filePath:"C:/Users/эльдорадо/OneDrive/Рабочий стол/diplomeproject2 — копия/src/routes/index.tsx"},{$component:{src:"src/routes/login.tsx?pick=default&pick=$css",build:()=>p(()=>import("./login-DcxKm-JB.js"),__vite__mapDeps([15,1,2,5,6])),import:()=>{const t="src/routes/login.tsx?pick=default&pick=$css";return p(()=>import(globalThis.MANIFEST.client.inputs[t].output.path),__vite__mapDeps([]))}},path:"/login",filePath:"C:/Users/эльдорадо/OneDrive/Рабочий стол/diplomeproject2 — копия/src/routes/login.tsx"},{$component:{src:"src/routes/productinfo.tsx?pick=default&pick=$css",build:()=>p(()=>import("./productinfo-DTubpYpe.js"),__vite__mapDeps([16,1,2,3,13,6,4,5])),import:()=>{const t="src/routes/productinfo.tsx?pick=default&pick=$css";return p(()=>import(globalThis.MANIFEST.client.inputs[t].output.path),__vite__mapDeps([]))}},path:"/productinfo",filePath:"C:/Users/эльдорадо/OneDrive/Рабочий стол/diplomeproject2 — копия/src/routes/productinfo.tsx"},{$component:{src:"src/routes/profile.tsx?pick=default&pick=$css",build:()=>p(()=>import("./profile-BesJcHBg.js"),__vite__mapDeps([17,1,2,10,6,4,5])),import:()=>{const t="src/routes/profile.tsx?pick=default&pick=$css";return p(()=>import(globalThis.MANIFEST.client.inputs[t].output.path),__vite__mapDeps([]))}},path:"/profile",filePath:"C:/Users/эльдорадо/OneDrive/Рабочий стол/diplomeproject2 — копия/src/routes/profile.tsx"},{$component:{src:"src/routes/reg.tsx?pick=default&pick=$css",build:()=>p(()=>import("./reg-B-_rmmxr.js"),__vite__mapDeps([18,1,2])),import:()=>{const t="src/routes/reg.tsx?pick=default&pick=$css";return p(()=>import(globalThis.MANIFEST.client.inputs[t].output.path),__vite__mapDeps([]))}},path:"/reg",filePath:"C:/Users/эльдорадо/OneDrive/Рабочий стол/diplomeproject2 — копия/src/routes/reg.tsx"},{$component:{src:"src/routes/thank.tsx?pick=default&pick=$css",build:()=>p(()=>import("./thank-Br0Ta-gx.js"),__vite__mapDeps([19,1,2])),import:()=>{const t="src/routes/thank.tsx?pick=default&pick=$css";return p(()=>import(globalThis.MANIFEST.client.inputs[t].output.path),__vite__mapDeps([]))}},path:"/thank",filePath:"C:/Users/эльдорадо/OneDrive/Рабочий стол/diplomeproject2 — копия/src/routes/thank.tsx"},{$component:{src:"src/routes/[...404].tsx?pick=default&pick=$css",build:()=>p(()=>import("./_...404_-DUA12w7Q.js"),__vite__mapDeps([20,1,2])),import:()=>{const t="src/routes/[...404].tsx?pick=default&pick=$css";return p(()=>import(globalThis.MANIFEST.client.inputs[t].output.path),__vite__mapDeps([]))}},path:"/*404",filePath:"C:/Users/эльдорадо/OneDrive/Рабочий стол/diplomeproject2 — копия/src/routes/[...404].tsx"}],ee=re(K.filter(t=>t.$component));function re(t){function r(e,i,s,a){const n=Object.values(e).find(o=>s.startsWith(o.id+"/"));return n?(r(n.children||(n.children=[]),i,s.slice(n.id.length)),e):(e.push({...i,id:s,path:s.replace(/\/\([^)/]+\)/g,"")}),e)}return t.sort((e,i)=>e.path.length-i.path.length).reduce((e,i)=>r(e,i,i.path,i.path),[])}function ie(t){return t.$GET||t.$POST||t.$PUT||t.$PATCH||t.$DELETE}Xt({routes:K.reduce((t,r)=>{if(!ie(r))return t;let e=r.path.replace(/\(.*\)\/?/g,"").replace(/\*([^/]*)/g,(i,s)=>`**:${s}`);if(/:[^/]*\?/g.test(e))throw new Error(`Optional parameters are not supported in API routes: ${e}`);if(t[e])throw new Error(`Duplicate API routes for "${e}" found at "${t[e].route.path}" and "${r.path}"`);return t[e]={route:r},t},{})});function se(){function t(e){return{...e,...e.$$route?e.$$route.require().route:void 0,info:{...e.$$route?e.$$route.require().route.info:{},filesystem:!0},component:Jt(e.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:e.children?e.children.map(t):void 0}}return ee.map(t)}let V;const ne=()=>V||(V=se()),oe=t=>null,ae="/_build/assets/logo-HaIiWWCp.svg",le="data:image/svg+xml,%3csvg%20width='40.000000'%20height='40.000000'%20viewBox='0%200%2044%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdesc%3e%20Created%20with%20Pixso.%20%3c/desc%3e%3cdefs%3e%3cclipPath%20id='clip11_955'%3e%3crect%20id='cart'%20rx='5.000000'%20width='43.000000'%20height='43.000000'%20transform='translate(0.500000%200.500000)'%20fill='white'%20fill-opacity='0'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20clip-path='url(%23clip11_955)'%3e%3cpath%20id='Vector'%20d='M18.8421%2031.9999C18.8421%2033.1044%2017.9938%2033.9999%2016.9473%2033.9999C15.9009%2033.9999%2015.0526%2033.1044%2015.0526%2031.9999C15.0526%2030.8954%2015.9009%2029.9999%2016.9473%2029.9999C17.9938%2029.9999%2018.8421%2030.8954%2018.8421%2031.9999Z'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='2.000000'/%3e%3cpath%20id='Vector'%20d='M30.2106%2032C30.2106%2033.1046%2029.3623%2034%2028.3159%2034C27.2695%2034%2026.4211%2033.1046%2026.4211%2032C26.4211%2030.8954%2027.2695%2030%2028.3159%2030C29.3623%2030%2030.2106%2030.8954%2030.2106%2032Z'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='2.000000'/%3e%3cpath%20id='Vector'%20d='M10%2010L10.33%2010.1225C11.9741%2010.7326%2012.7961%2011.0377%2013.2663%2011.764C13.7365%2012.4903%2013.7365%2013.455%2013.7365%2015.3845L13.7365%2019.0133C13.7365%2022.9354%2013.8164%2024.2297%2014.9108%2025.4482C16.0052%2026.6666%2017.7666%2026.6666%2021.2895%2026.6666L22.6316%2026.6666M27.9879%2026.6666C29.9597%2026.6666%2030.9456%2026.6666%2031.6425%2026.0671C32.3394%2025.4677%2032.5384%2024.4485%2032.9365%2022.4099L33.5677%2019.1769C34.0062%2016.8582%2034.2253%2015.6989%2033.6647%2014.9294C33.1039%2014.16%2031.188%2014.16%2029.0596%2014.16L21.3981%2014.16M13.7365%2014.16L16.3158%2014.16'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='2.500000'/%3e%3c/g%3e%3crect%20id='cart'%20rx='5.000000'%20width='43.000000'%20height='43.000000'%20transform='translate(0.500000%200.500000)'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='1.000000'/%3e%3c/svg%3e",ce="data:image/svg+xml,%3csvg%20width='40.000000'%20height='40.000000'%20viewBox='0%200%2044%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdesc%3e%20Created%20with%20Pixso.%20%3c/desc%3e%3cdefs%3e%3cclipPath%20id='clip11_958'%3e%3crect%20id='favourites'%20rx='5.000000'%20width='43.000000'%20height='43.000000'%20transform='translate(0.500000%200.500000)'%20fill='white'%20fill-opacity='0'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20clip-path='url(%23clip11_958)'%3e%3cpath%20id='Vector'%20d='M12.5856%2011.7192C9.57959%2014.6052%209.15637%2019.4305%2011.517%2022.8438C13.4798%2025.6817%2019.4197%2031.6672%2021.3665%2033.6045C21.5843%2033.8213%2021.6932%2033.9296%2021.8203%2033.9722C21.9311%2034.0093%2022.0524%2034.0093%2022.1633%2033.9722C22.2904%2033.9296%2022.3992%2033.8213%2022.6171%2033.6045C24.5639%2031.6672%2030.5038%2025.6817%2032.4666%2022.8438C34.8272%2019.4305%2034.4556%2014.5748%2031.3979%2011.7192C28.3401%208.86347%2024.3992%209.80713%2022%2012.9589C19.6008%209.80713%2015.5917%208.83311%2012.5856%2011.7192Z'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='2.500000'%20stroke-linejoin='round'/%3e%3c/g%3e%3crect%20id='favourites'%20rx='5.000000'%20width='43.000000'%20height='43.000000'%20transform='translate(0.500000%200.500000)'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='1.000000'/%3e%3c/svg%3e",ue="data:image/svg+xml,%3csvg%20width='40.000000'%20height='40.000000'%20viewBox='0%200%2044%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdesc%3e%20Created%20with%20Pixso.%20%3c/desc%3e%3cdefs%3e%3cclipPath%20id='clip11_962'%3e%3crect%20id='account'%20rx='5.000000'%20width='43.000000'%20height='43.000000'%20transform='translate(0.500000%200.500000)'%20fill='white'%20fill-opacity='0'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20clip-path='url(%23clip11_962)'%3e%3cpath%20id='Vector'%20d='M21.9999%2022.5132C18.3832%2022.5132%2015.4513%2019.712%2015.4513%2016.2566C15.4513%2012.8012%2018.3832%2010%2021.9999%2010C25.6165%2010%2028.5485%2012.8012%2028.5485%2016.2566C28.5485%2019.712%2025.6165%2022.5132%2021.9999%2022.5132Z'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='2.500000'/%3e%3cpath%20id='Vector'%20d='M10%2033.9782L10.4229%2031.7398C10.9224%2029.1547%2012.354%2026.8185%2014.4689%2025.1369C16.5839%2023.4554%2019.2485%2022.5348%2022%2022.5351C24.7548%2022.5357%2027.422%2023.4594%2029.5374%2025.1453C31.6528%2026.8312%2033.0823%2029.1726%2033.5771%2031.7617L34%2034.0001'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='2.500000'/%3e%3c/g%3e%3crect%20id='account'%20rx='5.000000'%20width='43.000000'%20height='43.000000'%20transform='translate(0.500000%200.500000)'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='1.000000'/%3e%3c/svg%3e";var de=b('<header class="bg-orange py-3"><div class="container mx-auto max-w-[1200px] pl-[16px] pr-[16px]"><div class="flex justify-between items-center"><div class="flex items-center gap-16"><a href=/><img alt=Logo></a><nav class="hidden sm:block"><ul class="flex items-center space-x-10"><li><a href=/catalog class="text-white hover:text-hover-header duration-150 font-semibold font-montserrat text-base font-bold leading-5">Каталог</a></li><li><p class="text-white cursor-pointer relative font-semibold hover:text-hover-header duration-150">Контакты<svg class="h-4 w-4 inline-block ml-1"fill=none stroke=currentColor viewBox="0 0 24 24"xmlns=http://www.w3.org/2000/svg><path stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M19 9l-7 7-7-7"></path></svg><!$><!/></p></li></ul></nav></div><div class="flex items-center space-x-2"><a href=/cart class="text-gray-200 hover:text-white"><img alt=cart></a><a href=/favorites class="text-gray-200 hover:text-white"><img alt=favourites></a><a href=/login class="text-gray-200 hover:text-white"><img alt=cart>'),he=b('<ul class="absolute w-[230px] shadow-lg top-full right-0 bg-white py-[30px] px-[20px] mt-3 rounded-[10px] cursor-auto z-50"><li class="flex gap-4 items-center pb-[10px]"><svg width=17.001221 height=18.254242 viewBox="0 0 17.0012 18.2542"fill=none xmlns=http://www.w3.org/2000/svg><path id=Vector d="M5.12451 12.785C7.07727 14.9009 9.51904 16.4092 12.1942 17.1521C14.2524 17.7198 16.0012 15.8021 16.0012 13.5L16.0012 12.4583C16.0012 11.8833 15.5696 11.4219 15.0417 11.3646C14.1664 11.2711 13.3071 11.0471 12.4884 10.699L11.0271 12.2823C8.64771 11.0465 6.72913 8.96762 5.5885 6.38958L7.0498 4.80625C6.72815 3.91911 6.52112 2.9881 6.43457 2.03958C6.38269 1.46667 5.95679 1 5.42603 1L4.46472 1C2.34009 1 0.57019 2.89479 1.09412 5.125C1.77979 8.02357 3.17175 10.6692 5.12451 12.785Z"stroke=#FF6006 stroke-opacity=1.000000 stroke-width=2.000000 stroke-linejoin=round></path></svg><a href=tel:+79615259191 class="text-black font-medium text-ms hover:text-orange duration-150">+7 961-525-91-91</a></li><li class="flex gap-4 items-center pb-[10px]"><svg width=18.000000 height=15.000000 viewBox="0 0 18 15"fill=none xmlns=http://www.w3.org/2000/svg><desc>Created with Pixso.</desc><defs></defs><path id=Vector d="M18 1.875C18 0.84375 17.1899 0 16.2 0L1.80005 0C0.810059 0 0 0.84375 0 1.875L0 13.125C0 14.1562 0.810059 15 1.80005 15L16.2 15C17.1899 15 18 14.1562 18 13.125L18 1.875ZM16.2 1.875L9 6.5625L1.80005 1.875L16.2 1.875ZM16.2 13.125L1.80005 13.125L1.80005 3.75L9 8.4375L16.2 3.75L16.2 13.125Z"fill=#FF5F04 fill-opacity=1.000000 fill-rule=nonzero></path></svg><a href=mailto:zooxpress@mail.ru class="text-black font-medium text-ms hover:text-orange duration-150">Zooxpress@mail.ru</a></li><li class="flex gap-4 items-center pb-[10px]"><svg width=20.833374 height=20.833328 viewBox="0 0 20.8334 20.8333"fill=none xmlns=http://www.w3.org/2000/svg><desc>Created with Pixso.</desc><defs></defs><path id=Vector d="M10.4166 0C16.1698 0 20.8334 4.66354 20.8334 10.4167C20.8334 16.1698 16.1698 20.8333 10.4166 20.8333C4.66357 20.8333 0 16.1698 0 10.4167C0 4.66354 4.66357 0 10.4166 0ZM10.4166 2.08333C8.20654 2.08333 6.08691 2.9613 4.52417 4.52411C2.9613 6.08691 2.08337 8.20653 2.08337 10.4167C2.08337 12.6268 2.9613 14.7464 4.52417 16.3092C6.08691 17.872 8.20654 18.75 10.4166 18.75C12.6268 18.75 14.7465 17.872 16.3092 16.3092C17.8721 14.7464 18.75 12.6268 18.75 10.4167C18.75 8.20653 17.8721 6.08691 16.3092 4.52411C14.7465 2.9613 12.6268 2.08333 10.4166 2.08333ZM10.4166 4.16667C10.6718 4.1667 10.9181 4.26038 11.1088 4.42992C11.2994 4.59946 11.4211 4.83307 11.451 5.08646L11.4584 5.20833L11.4584 9.98541L14.2781 12.8052C14.465 12.9927 14.5734 13.2442 14.5815 13.5087C14.5896 13.7733 14.4967 14.0309 14.3217 14.2295C14.1466 14.428 13.9026 14.5524 13.639 14.5775C13.3756 14.6026 13.1125 14.5265 12.9031 14.3646L12.8052 14.2781L9.68018 11.1531C9.51831 10.9911 9.41431 10.7802 9.3844 10.5531L9.375 10.4167L9.375 5.20833C9.375 4.93207 9.48474 4.66711 9.68005 4.47177C9.87549 4.27641 10.1404 4.16667 10.4166 4.16667Z"fill=#FF5F04 fill-opacity=1.000000 fill-rule=nonzero></path></svg><p class="text-black font-medium text-ms">График работы: <br>Пн-Сб 9:00-18:00</p></li><li class="flex gap-4 items-center pb-[10px]"><svg width=16.000000 height=21.333328 viewBox="0 0 16 21.3333"fill=none xmlns=http://www.w3.org/2000/svg><desc>Created with Pixso.</desc><defs></defs><path id=Vector d="M13.5547 11.92C12.856 13.336 11.9093 14.7467 10.9413 16.0133C10.0221 17.2067 9.04028 18.3505 8 19.44C6.95972 18.3505 5.97791 17.2067 5.05872 16.0133C4.0907 14.7467 3.14404 13.336 2.44531 11.92C1.73865 10.4893 1.33337 9.14934 1.33337 7.99998C1.33337 6.23189 2.03577 4.53621 3.28601 3.28596C4.53625 2.03571 6.23193 1.33333 8 1.33333C9.76807 1.33333 11.4637 2.03571 12.714 3.28596C13.9642 4.53621 14.6666 6.23189 14.6666 7.99998C14.6666 9.14934 14.26 10.4893 13.5547 11.92ZM8 21.3333C8 21.3333 16 13.752 16 7.99998C16 5.87828 15.1571 3.84343 13.6569 2.34314C12.1566 0.84285 10.1217 0 8 0C5.8783 0 3.84338 0.84285 2.34314 2.34314C0.842896 3.84343 0 5.87828 0 7.99998C0 13.752 8 21.3333 8 21.3333Z"fill=#FF5F04 fill-opacity=1.000000 fill-rule=nonzero></path><path id=Vector d="M8 10.6666C7.29272 10.6666 6.6145 10.3857 6.11438 9.8856C5.61426 9.38551 5.33337 8.70723 5.33337 7.99998C5.33337 7.29274 5.61426 6.61446 6.11438 6.11436C6.6145 5.61427 7.29272 5.33333 8 5.33333C8.70728 5.33333 9.3855 5.61427 9.88562 6.11436C10.3857 6.61446 10.6666 7.29274 10.6666 7.99998C10.6666 8.70723 10.3857 9.38551 9.88562 9.8856C9.3855 10.3857 8.70728 10.6666 8 10.6666ZM8 12C9.06091 12 10.0782 11.5786 10.8284 10.8284C11.5786 10.0783 12 9.06084 12 7.99998C12 6.93913 11.5786 5.92171 10.8284 5.17155C10.0782 4.4214 9.06091 3.99998 8 3.99998C6.93909 3.99998 5.92175 4.4214 5.17163 5.17155C4.42139 5.92171 4 6.93913 4 7.99998C4 9.06084 4.42139 10.0783 5.17163 10.8284C5.92175 11.5786 6.93909 12 8 12Z"fill=#FF5F04 fill-opacity=1.000000 fill-rule=nonzero></path></svg><p class="text-black font-medium text-ms">г. Самара, <br>Ленинградская 114</p></li><div class="flex gap-[10px] mt-[40px]"><a href=""><svg width=35.000000 height=35.000000 viewBox="0 0 35 35"fill=none xmlns=http://www.w3.org/2000/svg><desc>Created with Pixso.</desc><defs><clipPath id=clip404_2018><rect id="Frame 4"rx=9.500000 width=34.000000 height=34.000000 transform="translate(0.500000 0.500000)"fill=white fill-opacity=0></rect></clipPath></defs><g clip-path=url(#clip404_2018)><path id=Vector d="M18.8206 20.1487C21.1077 20.4974 21.8308 22.2974 23.2872 23.5538L27 23.5538C26.0718 21.4815 24.6868 19.646 22.9487 18.1846C24.2821 16.3487 25.6974 14.6205 26.3898 12L23.0154 12C21.6923 14.0051 20.9949 16.3539 18.8206 17.9026L18.8206 12L13.9231 12L15.0923 13.4462L15.0923 18.6C13.1948 18.3795 11.9128 14.9077 10.5231 12L7 12C8.2821 15.9282 10.9795 24.5487 18.8206 23.5538L18.8206 20.1487Z"stroke=#FF6006 stroke-opacity=1.000000 stroke-width=2.000000 stroke-linejoin=round></path></g><rect id="Frame 4"rx=9.500000 width=34.000000 height=34.000000 transform="translate(0.500000 0.500000)"stroke=#FF6006 stroke-opacity=1.000000 stroke-width=1.000000></rect></svg></a><a href=""><svg width=35.000000 height=35.000000 viewBox="0 0 35 35"fill=none xmlns=http://www.w3.org/2000/svg><desc>Created with Pixso.</desc><defs><clipPath id=clip404_2015><rect id="Frame 34"rx=9.500000 width=34.000000 height=34.000000 transform="translate(0.500000 0.500000)"fill=white fill-opacity=0></rect></clipPath></defs><g clip-path=url(#clip404_2015)><path id=Vector d="M25.9419 10.5665L23.3777 24.9721C23.1985 25.9964 22.6792 26.2429 21.9624 25.7664L15.8459 20.3821C15.8223 20.3618 15.803 20.3351 15.7896 20.3041C15.7762 20.2731 15.7693 20.2389 15.7693 20.204C15.7693 20.1693 15.7762 20.1349 15.7896 20.104C15.803 20.0731 15.8223 20.0463 15.8459 20.026L22.9091 12.4234C23.2307 12.0838 22.8401 11.9195 22.4174 12.2262L13.5529 18.8922C13.526 18.9131 13.4955 18.9264 13.4636 18.9312C13.4318 18.9359 13.3994 18.932 13.3691 18.9196L9.60547 17.5009C8.76917 17.2106 8.76917 16.526 9.79395 16.0385L24.8528 9.11502C24.9723 9.04672 25.1019 9.00763 25.2343 9C25.7581 9 26.1533 9.54773 25.9419 10.5665Z"stroke=#FF6006 stroke-opacity=1.000000 stroke-width=2.000000 stroke-linejoin=round></path></g><rect id="Frame 34"rx=9.500000 width=34.000000 height=34.000000 transform="translate(0.500000 0.500000)"stroke=#FF6006 stroke-opacity=1.000000 stroke-width=1.000000></rect></svg></a>');function pe(){_t();const[t,r]=B(!1);return(()=>{var e=k(de),i=e.firstChild,s=i.firstChild,a=s.firstChild,n=a.firstChild,o=n.firstChild,l=n.nextSibling,m=l.firstChild,h=m.firstChild,d=h.nextSibling,C=d.firstChild,v=C.firstChild,c=v.nextSibling,u=c.nextSibling,[g,f]=st(u.nextSibling),F=a.nextSibling,_=F.firstChild,x=_.firstChild,L=_.nextSibling,G=L.firstChild,J=L.nextSibling,X=J.firstChild;return y(o,"src",ae),C.$$click=()=>r(!t()),I(C,(()=>{var Y=$(()=>!!t());return()=>Y()&&k(he)})(),g,f),y(x,"src",le),y(G,"src",ce),y(X,"src",ue),P(),e})()}z(["click"]);function fe(){return w(Zt,{root:t=>[w(pe,{}),w(nt,{get children(){return t.children}})],get children(){return w(ne,{})}})}var me=b("<span style=font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;>");const ge=t=>{const r="Error | Uncaught Client Exception";return w(ot,{get fallback(){return[(()=>{var e=k(me);return I(e,r),e})(),w(oe,{code:500})]},get children(){return t.children}})};function we(t,r){return at(t,r)}function j(t){return t.children}function Ce(){return w(j,{get children(){return w(j,{get children(){return w(ge,{get children(){return w(fe,{})}})}})}})}we(()=>w(Ce,{}),document.getElementById("app"));const xe=void 0;export{xe as default};