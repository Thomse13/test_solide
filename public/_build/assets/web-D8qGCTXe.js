const c={context:void 0,registry:void 0};function M(e){c.context=e}function He(){return{...c.context,id:`${c.context.id}${c.context.count++}-`,count:0}}const De=(e,t)=>e===t,z=Symbol("solid-proxy"),qe=Symbol("solid-track"),Z={equals:De};let Y=null,Oe=Te;const v=1,G=2,Ce={owned:null,cleanups:null,context:null,owner:null},re={};var h=null;let u=null,_e=null,w=null,C=null,A=null,ne=0;function X(e,t){const n=w,s=h,i=e.length===0,r=t===void 0?s:t,o=i?Ce:{owned:null,cleanups:null,context:r?r.context:null,owner:r},l=i?e:()=>e(()=>E(()=>D(o)));h=o,w=null;try{return N(l,!0)}finally{w=n,h=s}}function I(e,t){t=t?Object.assign({},Z,t):Z;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(u&&u.running&&u.sources.has(n)?i=i(n.tValue):i=i(n.value)),Ne(n,i));return[Pe.bind(n),s]}function ge(e,t,n){const s=W(e,t,!0,v);K(s)}function q(e,t,n){const s=W(e,t,!1,v);K(s)}function Be(e,t,n){Oe=We;const s=W(e,t,!1,v),i=_&&de(_);i&&(s.suspense=i),(!n||!n.render)&&(s.user=!0),A?A.push(s):K(s)}function P(e,t,n){n=n?Object.assign({},Z,n):Z;const s=W(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,K(s),Pe.bind(s)}function Fe(e){return e&&typeof e=="object"&&"then"in e}function Re(e,t,n){let s,i,r;arguments.length===2&&typeof t=="object"||arguments.length===1?(s=!0,i=e,r=t||{}):(s=e,i=t,r=n||{});let o=null,l=re,a=null,d=!1,f=!1,g="initialValue"in r,y=typeof s=="function"&&P(s);const b=new Set,[S,$]=(r.storage||I)(r.initialValue),[T,j]=I(void 0),[O,k]=I(void 0,{equals:!1}),[L,V]=I(g?"ready":"unresolved");if(c.context){a=`${c.context.id}${c.context.count++}`;let m;r.ssrLoadFrom==="initial"?l=r.initialValue:c.load&&(m=c.load(a))&&(l=m)}function H(m,x,p,B){return o===m&&(o=null,B!==void 0&&(g=!0),(m===l||x===l)&&r.onHydrated&&queueMicrotask(()=>r.onHydrated(B,{value:x})),l=re,u&&m&&d?(u.promises.delete(m),d=!1,N(()=>{u.running=!0,he(x,p)},!1)):he(x,p)),x}function he(m,x){N(()=>{x===void 0&&$(()=>m),V(x!==void 0?"errored":g?"ready":"unresolved"),j(x);for(const p of b.keys())p.decrement();b.clear()},!1)}function se(){const m=_&&de(_),x=S(),p=T();if(p!==void 0&&!o)throw p;return w&&!w.user&&m&&ge(()=>{O(),o&&(m.resolved&&u&&d?u.promises.add(o):b.has(m)||(m.increment(),b.add(m)))}),x}function ie(m=!0){if(m!==!1&&f)return;f=!1;const x=y?y():s;if(d=u&&u.running,x==null||x===!1){H(o,E(S));return}u&&o&&u.promises.delete(o);const p=l!==re?l:E(()=>i(x,{value:S(),refetching:m}));return Fe(p)?(o=p,"value"in p?(p.status==="success"?H(o,p.value,void 0,x):H(o,void 0,void 0,x),p):(f=!0,queueMicrotask(()=>f=!1),N(()=>{V(g?"refreshing":"pending"),k()},!1),p.then(B=>H(p,B,void 0,x),B=>H(p,void 0,ve(B),x)))):(H(o,p,void 0,x),p)}return Object.defineProperties(se,{state:{get:()=>L()},error:{get:()=>T()},loading:{get(){const m=L();return m==="pending"||m==="refreshing"}},latest:{get(){if(!g)return se();const m=T();if(m&&!o)throw m;return S()}}}),y?ge(()=>ie(!1)):ie(!1),[se,{refetch:ie,mutate:$}]}function Ot(e){return N(e,!1)}function E(e){if(w===null)return e();const t=w;w=null;try{return e()}finally{w=t}}function Ct(e,t,n){const s=Array.isArray(e);let i,r=n&&n.defer;return o=>{let l;if(s){l=Array(e.length);for(let d=0;d<e.length;d++)l[d]=e[d]()}else l=e();if(r){r=!1;return}const a=E(()=>t(l,i,o));return i=l,a}}function $t(e){Be(()=>E(e))}function ae(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function Ue(e,t){Y||(Y=Symbol("error")),h=W(void 0,void 0,!0),h.context={...h.context,[Y]:[t]},u&&u.running&&u.sources.add(h);try{return e()}catch(n){Q(n)}finally{h=h.owner}}function kt(){return w}function Ke(){return h}function Pt(e,t){const n=h,s=w;h=e,w=null;try{return N(t,!0)}catch(i){Q(i)}finally{h=n,w=s}}function Nt(e){if(u&&u.running)return e(),u.done;const t=w,n=h;return Promise.resolve().then(()=>{w=t,h=n;let s;return _&&(s=u||(u={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),s.done||(s.done=new Promise(i=>s.resolve=i)),s.running=!0),N(e,!1),w=h=null,s?s.done:void 0})}const[Tt,ye]=I(!1);function Ye(e){A.push.apply(A,e),e.length=0}function $e(e,t){const n=Symbol("context");return{id:n,Provider:Qe(n),defaultValue:e}}function de(e){return h&&h.context&&h.context[e.id]!==void 0?h.context[e.id]:e.defaultValue}function ke(e){const t=P(e),n=P(()=>oe(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let _;function Xe(){return _||(_=$e())}function Pe(){const e=u&&u.running;if(this.sources&&(e?this.tState:this.state))if((e?this.tState:this.state)===v)K(this);else{const t=C;C=null,N(()=>te(this),!1),C=t}if(w){const t=this.observers?this.observers.length:0;w.sources?(w.sources.push(this),w.sourceSlots.push(t)):(w.sources=[this],w.sourceSlots=[t]),this.observers?(this.observers.push(w),this.observerSlots.push(w.sources.length-1)):(this.observers=[w],this.observerSlots=[w.sources.length-1])}return e&&u.sources.has(this)?this.tValue:this.value}function Ne(e,t,n){let s=u&&u.running&&u.sources.has(e)?e.tValue:e.value;if(!e.comparator||!e.comparator(s,t)){if(u){const i=u.running;(i||!n&&u.sources.has(e))&&(u.sources.add(e),e.tValue=t),i||(e.value=t)}else e.value=t;e.observers&&e.observers.length&&N(()=>{for(let i=0;i<e.observers.length;i+=1){const r=e.observers[i],o=u&&u.running;o&&u.disposed.has(r)||((o?!r.tState:!r.state)&&(r.pure?C.push(r):A.push(r),r.observers&&je(r)),o?r.tState=v:r.state=v)}if(C.length>1e6)throw C=[],new Error},!1)}return t}function K(e){if(!e.fn)return;D(e);const t=ne;we(e,u&&u.running&&u.sources.has(e)?e.tValue:e.value,t),u&&!u.running&&u.sources.has(e)&&queueMicrotask(()=>{N(()=>{u&&(u.running=!0),w=h=e,we(e,e.tValue,t),w=h=null},!1)})}function we(e,t,n){let s;const i=h,r=w;w=h=e;try{s=e.fn(t)}catch(o){return e.pure&&(u&&u.running?(e.tState=v,e.tOwned&&e.tOwned.forEach(D),e.tOwned=void 0):(e.state=v,e.owned&&e.owned.forEach(D),e.owned=null)),e.updatedAt=n+1,Q(o)}finally{w=r,h=i}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ne(e,s,!0):u&&u.running&&e.pure?(u.sources.add(e),e.tValue=s):e.value=s,e.updatedAt=n)}function W(e,t,n,s=v,i){const r={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:h,context:h?h.context:null,pure:n};return u&&u.running&&(r.state=0,r.tState=s),h===null||h!==Ce&&(u&&u.running&&h.pure?h.tOwned?h.tOwned.push(r):h.tOwned=[r]:h.owned?h.owned.push(r):h.owned=[r]),r}function ee(e){const t=u&&u.running;if((t?e.tState:e.state)===0)return;if((t?e.tState:e.state)===G)return te(e);if(e.suspense&&E(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<ne);){if(t&&u.disposed.has(e))return;(t?e.tState:e.state)&&n.push(e)}for(let s=n.length-1;s>=0;s--){if(e=n[s],t){let i=e,r=n[s+1];for(;(i=i.owner)&&i!==r;)if(u.disposed.has(i))return}if((t?e.tState:e.state)===v)K(e);else if((t?e.tState:e.state)===G){const i=C;C=null,N(()=>te(e,n[0]),!1),C=i}}}function N(e,t){if(C)return e();let n=!1;t||(C=[]),A?n=!0:A=[],ne++;try{const s=e();return Ge(n),s}catch(s){n||(A=null),C=null,Q(s)}}function Ge(e){if(C&&(Te(C),C=null),e)return;let t;if(u){if(!u.promises.size&&!u.queue.size){const s=u.sources,i=u.disposed;A.push.apply(A,u.effects),t=u.resolve;for(const r of A)"tState"in r&&(r.state=r.tState),delete r.tState;u=null,N(()=>{for(const r of i)D(r);for(const r of s){if(r.value=r.tValue,r.owned)for(let o=0,l=r.owned.length;o<l;o++)D(r.owned[o]);r.tOwned&&(r.owned=r.tOwned),delete r.tValue,delete r.tOwned,r.tState=0}ye(!1)},!1)}else if(u.running){u.running=!1,u.effects.push.apply(u.effects,A),A=null,ye(!0);return}}const n=A;A=null,n.length&&N(()=>Oe(n),!1),t&&t()}function Te(e){for(let t=0;t<e.length;t++)ee(e[t])}function We(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:ee(s)}if(c.context){if(c.count){c.effects||(c.effects=[]),c.effects.push(...e.slice(0,n));return}else c.effects&&(e=[...c.effects,...e],n+=c.effects.length,delete c.effects);M()}for(t=0;t<n;t++)ee(e[t])}function te(e,t){const n=u&&u.running;n?e.tState=0:e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];if(i.sources){const r=n?i.tState:i.state;r===v?i!==t&&(!i.updatedAt||i.updatedAt<ne)&&ee(i):r===G&&te(i,t)}}}function je(e){const t=u&&u.running;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(t?!s.tState:!s.state)&&(t?s.tState=G:s.state=G,s.pure?C.push(s):A.push(s),s.observers&&je(s))}}function D(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const r=i.pop(),o=n.observerSlots.pop();s<i.length&&(r.sourceSlots[o]=s,i[s]=r,n.observerSlots[s]=o)}}if(u&&u.running&&e.pure){if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)D(e.tOwned[t]);delete e.tOwned}Le(e,!0)}else if(e.owned){for(t=e.owned.length-1;t>=0;t--)D(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}u&&u.running?e.tState=0:e.state=0}function Le(e,t){if(t||(e.tState=0,u.disposed.add(e)),e.owned)for(let n=0;n<e.owned.length;n++)Le(e.owned[n])}function ve(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function be(e,t,n){try{for(const s of t)s(e)}catch(s){Q(s,n&&n.owner||null)}}function Q(e,t=h){const n=Y&&t&&t.context&&t.context[Y],s=ve(e);if(!n)throw s;A?A.push({fn(){be(s,n,t)},state:v}):be(s,n,t)}function oe(e){if(typeof e=="function"&&!e.length)return oe(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=oe(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function Qe(e,t){return function(s){let i;return q(()=>i=E(()=>(h.context={...h.context,[e]:s.value},ke(()=>s.children))),void 0),i}}const Je=Symbol("fallback");function me(e){for(let t=0;t<e.length;t++)e[t]()}function ze(e,t,n={}){let s=[],i=[],r=[],o=0,l=t.length>1?[]:null;return ae(()=>me(r)),()=>{let a=e()||[],d,f;return a[qe],E(()=>{let y=a.length,b,S,$,T,j,O,k,L,V;if(y===0)o!==0&&(me(r),r=[],s=[],i=[],o=0,l&&(l=[])),n.fallback&&(s=[Je],i[0]=X(H=>(r[0]=H,n.fallback())),o=1);else if(o===0){for(i=new Array(y),f=0;f<y;f++)s[f]=a[f],i[f]=X(g);o=y}else{for($=new Array(y),T=new Array(y),l&&(j=new Array(y)),O=0,k=Math.min(o,y);O<k&&s[O]===a[O];O++);for(k=o-1,L=y-1;k>=O&&L>=O&&s[k]===a[L];k--,L--)$[L]=i[k],T[L]=r[k],l&&(j[L]=l[k]);for(b=new Map,S=new Array(L+1),f=L;f>=O;f--)V=a[f],d=b.get(V),S[f]=d===void 0?-1:d,b.set(V,f);for(d=O;d<=k;d++)V=s[d],f=b.get(V),f!==void 0&&f!==-1?($[f]=i[d],T[f]=r[d],l&&(j[f]=l[d]),f=S[f],b.set(V,f)):r[d]();for(f=O;f<y;f++)f in $?(i[f]=$[f],r[f]=T[f],l&&(l[f]=j[f],l[f](f))):i[f]=X(g);i=i.slice(0,o=y),s=a.slice(0)}return i});function g(y){if(r[f]=y,l){const[b,S]=I(f);return l[f]=S,t(a[f],b)}return t(a[f])}}}let Me=!1;function Ze(){Me=!0}function et(e,t){if(Me&&c.context){const n=c.context;M(He());const s=E(()=>e(t||{}));return M(n),s}return E(()=>e(t||{}))}function J(){return!0}const fe={get(e,t,n){return t===z?n:e.get(t)},has(e,t){return t===z?!0:e.has(t)},set:J,deleteProperty:J,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:J,deleteProperty:J}},ownKeys(e){return e.keys()}};function le(e){return(e=typeof e=="function"?e():e)?e:{}}function tt(){for(let e=0,t=this.length;e<t;++e){const n=this[e]();if(n!==void 0)return n}}function jt(...e){let t=!1;for(let o=0;o<e.length;o++){const l=e[o];t=t||!!l&&z in l,e[o]=typeof l=="function"?(t=!0,P(l)):l}if(t)return new Proxy({get(o){for(let l=e.length-1;l>=0;l--){const a=le(e[l])[o];if(a!==void 0)return a}},has(o){for(let l=e.length-1;l>=0;l--)if(o in le(e[l]))return!0;return!1},keys(){const o=[];for(let l=0;l<e.length;l++)o.push(...Object.keys(le(e[l])));return[...new Set(o)]}},fe);const n={},s=Object.create(null);for(let o=e.length-1;o>=0;o--){const l=e[o];if(!l)continue;const a=Object.getOwnPropertyNames(l);for(let d=a.length-1;d>=0;d--){const f=a[d];if(f==="__proto__"||f==="constructor")continue;const g=Object.getOwnPropertyDescriptor(l,f);if(!s[f])s[f]=g.get?{enumerable:!0,configurable:!0,get:tt.bind(n[f]=[g.get.bind(l)])}:g.value!==void 0?g:void 0;else{const y=n[f];y&&(g.get?y.push(g.get.bind(l)):g.value!==void 0&&y.push(()=>g.value))}}}const i={},r=Object.keys(s);for(let o=r.length-1;o>=0;o--){const l=r[o],a=s[l];a&&a.get?Object.defineProperty(i,l,a):i[l]=a?a.value:void 0}return i}function Lt(e,...t){if(z in e){const i=new Set(t.length>1?t.flat():t[0]),r=t.map(o=>new Proxy({get(l){return o.includes(l)?e[l]:void 0},has(l){return o.includes(l)&&l in e},keys(){return o.filter(l=>l in e)}},fe));return r.push(new Proxy({get(o){return i.has(o)?void 0:e[o]},has(o){return i.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!i.has(o))}},fe)),r}const n={},s=t.map(()=>({}));for(const i of Object.getOwnPropertyNames(e)){const r=Object.getOwnPropertyDescriptor(e,i),o=!r.get&&!r.set&&r.enumerable&&r.writable&&r.configurable;let l=!1,a=0;for(const d of t)d.includes(i)&&(l=!0,o?s[a][i]=r.value:Object.defineProperty(s[a],i,r)),++a;l||(o?n[i]=r.value:Object.defineProperty(n,i,r))}return[...s,n]}function vt(e){let t,n;const s=i=>{const r=c.context;if(r){const[l,a]=I();c.count||(c.count=0),c.count++,(n||(n=e())).then(d=>{M(r),c.count--,a(()=>d.default),M()}),t=l}else if(!t){const[l]=Re(()=>(n||(n=e())).then(a=>a.default));t=l}let o;return P(()=>(o=t())&&E(()=>{if(!r)return o(i);const l=c.context;M(r);const a=o(i);return M(l),a}))};return s.preload=()=>n||((n=e()).then(i=>t=()=>i.default),n),s}const Ie=e=>`Stale read from <${e}>.`;function Mt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return P(ze(()=>e.each,e.children,t||void 0))}function It(e){const t=e.keyed,n=P(()=>e.when,void 0,{equals:(s,i)=>t?s===i:!s==!i});return P(()=>{const s=n();if(s){const i=e.children;return typeof i=="function"&&i.length>0?E(()=>i(t?s:()=>{if(!E(n))throw Ie("Show");return e.when})):i}return e.fallback},void 0,void 0)}function Vt(e){let t=!1;const n=(r,o)=>(t?r[1]===o[1]:!r[1]==!o[1])&&r[2]===o[2],s=ke(()=>e.children),i=P(()=>{let r=s();Array.isArray(r)||(r=[r]);for(let o=0;o<r.length;o++){const l=r[o].when;if(l)return t=!!r[o].keyed,[o,l,r[o]]}return[-1]},void 0,{equals:n});return P(()=>{const[r,o,l]=i();if(r<0)return e.fallback;const a=l.children;return typeof a=="function"&&a.length>0?E(()=>a(t?o:()=>{if(E(i)[0]!==r)throw Ie("Match");return l.when})):a},void 0,void 0)}function Ht(e){return e}let R;function Dt(){R&&[...R].forEach(e=>e())}function qt(e){let t;c.context&&c.load&&(t=c.load(c.context.id+c.context.count));const[n,s]=I(t,void 0);return R||(R=new Set),R.add(s),ae(()=>R.delete(s)),P(()=>{let i;if(i=n()){const r=e.fallback;return typeof r=="function"&&r.length?E(()=>r(i,()=>s())):r}return Ue(()=>e.children,s)},void 0,void 0)}const nt=$e();function _t(e){let t=0,n,s,i,r,o;const[l,a]=I(!1),d=Xe(),f={increment:()=>{++t===1&&a(!0)},decrement:()=>{--t===0&&a(!1)},inFallback:l,effects:[],resolved:!1},g=Ke();if(c.context&&c.load){const S=c.context.id+c.context.count;let $=c.load(S);if($&&(typeof $!="object"||$.status!=="success"?i=$:c.gather(S)),i&&i!=="$$f"){const[T,j]=I(void 0,{equals:!1});r=T,i.then(()=>{if(c.done)return j();c.gather(S),M(s),j(),M()},O=>{o=O,j()})}}const y=de(nt);y&&(n=y.register(f.inFallback));let b;return ae(()=>b&&b()),et(d.Provider,{value:f,get children(){return P(()=>{if(o)throw o;if(s=c.context,r)return r(),r=void 0;s&&i==="$$f"&&M();const S=P(()=>e.children);return P($=>{const T=f.inFallback(),{showContent:j=!0,showFallback:O=!0}=n?n():{};if((!T||i&&i!=="$$f")&&j)return f.resolved=!0,b&&b(),b=s=i=void 0,Ye(f.effects),S();if(O)return b?$:X(k=>(b=k,s&&(M({id:s.id+"f",count:0}),s=void 0),e.fallback),g)})})}})}const st=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],it=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...st]),rt=new Set(["innerHTML","textContent","innerText","children"]),lt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),ot=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function ft(e,t){const n=ot[e];return typeof n=="object"?n[t]?n.$:void 0:n}const ut=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),ct={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function at(e,t,n){let s=n.length,i=t.length,r=s,o=0,l=0,a=t[i-1].nextSibling,d=null;for(;o<i||l<r;){if(t[o]===n[l]){o++,l++;continue}for(;t[i-1]===n[r-1];)i--,r--;if(i===o){const f=r<s?l?n[l-1].nextSibling:n[r-l]:a;for(;l<r;)e.insertBefore(n[l++],f)}else if(r===l)for(;o<i;)(!d||!d.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[r-1]&&n[l]===t[i-1]){const f=t[--i].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--r],f),t[i]=n[r]}else{if(!d){d=new Map;let g=l;for(;g<r;)d.set(n[g],g++)}const f=d.get(t[o]);if(f!=null)if(l<f&&f<r){let g=o,y=1,b;for(;++g<i&&g<r&&!((b=d.get(t[g]))==null||b!==f+y);)y++;if(y>f-l){const S=t[o];for(;l<f;)e.insertBefore(n[l++],S)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const xe="_$DX_DELEGATE";function dt(e,t,n,s={}){let i;return X(r=>{i=r,t===document?e():xt(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function Bt(e,t,n){let s;const i=()=>{const o=document.createElement("template");return o.innerHTML=e,n?o.content.firstChild.firstChild:o.content.firstChild},r=t?()=>E(()=>document.importNode(s||(s=i()),!0)):()=>(s||(s=i())).cloneNode(!0);return r.cloneNode=r,r}function ht(e,t=window.document){const n=t[xe]||(t[xe]=new Set);for(let s=0,i=e.length;s<i;s++){const r=e[s];n.has(r)||(n.add(r),t.addEventListener(r,Ve))}}function Ft(e,t,n){!c.context&&(e[t]=n)}function ue(e,t,n){c.context||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function gt(e,t,n,s){c.context||(s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s))}function yt(e,t){c.context||(t==null?e.removeAttribute("class"):e.className=t)}function wt(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=r=>i.call(e,n[1],r))}else e.addEventListener(t,n)}function bt(e,t,n={}){const s=Object.keys(t||{}),i=Object.keys(n);let r,o;for(r=0,o=i.length;r<o;r++){const l=i[r];!l||l==="undefined"||t[l]||(pe(e,l,!1),delete n[l])}for(r=0,o=s.length;r<o;r++){const l=s[r],a=!!t[l];!l||l==="undefined"||n[l]===a||!a||(pe(e,l,!0),n[l]=a)}return n}function mt(e,t,n){if(!t)return n?ue(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let i,r;for(r in n)t[r]==null&&s.removeProperty(r),delete n[r];for(r in t)i=t[r],i!==n[r]&&(s.setProperty(r,i),n[r]=i);return n}function Rt(e,t={},n,s){const i={};return s||q(()=>i.children=U(e,t.children,i.children)),q(()=>t.ref&&t.ref(e)),q(()=>pt(e,t,n,!0,i,!0)),i}function Ut(e,t,n){return E(()=>e(t,n))}function xt(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return U(e,t,s,n);q(i=>U(e,t(),i,n),s)}function pt(e,t,n,s,i={},r=!1){t||(t={});for(const o in i)if(!(o in t)){if(o==="children")continue;i[o]=Se(e,o,null,i[o],n,r)}for(const o in t){if(o==="children"){s||U(e,t.children);continue}const l=t[o];i[o]=Se(e,o,l,i[o],n,r)}}function St(e,t,n={}){c.completed=globalThis._$HY.completed,c.events=globalThis._$HY.events,c.load=i=>globalThis._$HY.r[i],c.has=i=>i in globalThis._$HY.r,c.gather=i=>Ee(t,i),c.registry=new Map,c.context={id:n.renderId||"",count:0},Ee(t,n.renderId);const s=dt(e,t,[...t.childNodes],n);return c.context=null,s}function Kt(e){let t,n;return!c.context||!(t=c.registry.get(n=Et()))?e():(c.completed&&c.completed.add(t),c.registry.delete(n),t)}function Yt(e){let t=e,n=0,s=[];if(c.context)for(;t;){if(t.nodeType===8){const i=t.nodeValue;if(i==="$")n++;else if(i==="/"){if(n===0)return[t,s];n--}}s.push(t),t=t.nextSibling}return[t,s]}function Xt(){c.events&&!c.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=c;for(t.queued=!1;t.length;){const[n,s]=t[0];if(!e.has(n))return;Ve(s),t.shift()}}),c.events.queued=!0)}function At(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function pe(e,t,n){const s=t.trim().split(/\s+/);for(let i=0,r=s.length;i<r;i++)e.classList.toggle(s[i],n)}function Se(e,t,n,s,i,r){let o,l,a,d,f;if(t==="style")return mt(e,n,s);if(t==="classList")return bt(e,n,s);if(n===s)return s;if(t==="ref")r||n(e);else if(t.slice(0,3)==="on:"){const g=t.slice(3);s&&e.removeEventListener(g,s),n&&e.addEventListener(g,n)}else if(t.slice(0,10)==="oncapture:"){const g=t.slice(10);s&&e.removeEventListener(g,s,!0),n&&e.addEventListener(g,n,!0)}else if(t.slice(0,2)==="on"){const g=t.slice(2).toLowerCase(),y=ut.has(g);if(!y&&s){const b=Array.isArray(s)?s[0]:s;e.removeEventListener(g,b)}(y||n)&&(wt(e,g,n,y),y&&ht([g]))}else if(t.slice(0,5)==="attr:")ue(e,t.slice(5),n);else if((f=t.slice(0,5)==="prop:")||(a=rt.has(t))||!i&&((d=ft(t,e.tagName))||(l=it.has(t)))||(o=e.nodeName.includes("-"))){if(f)t=t.slice(5),l=!0;else if(c.context)return n;t==="class"||t==="className"?yt(e,n):o&&!l&&!a?e[At(t)]=n:e[d||t]=n}else{const g=i&&t.indexOf(":")>-1&&ct[t.split(":")[0]];g?gt(e,g,t,n):ue(e,lt[t]||t,n)}return n}function Ve(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),c.registry&&!c.done&&(c.done=_$HY.done=!0);n;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function U(e,t,n,s,i){if(c.context){!n&&(n=[...e.childNodes]);let l=[];for(let a=0;a<n.length;a++){const d=n[a];d.nodeType===8&&d.data.slice(0,2)==="!$"?d.remove():l.push(d)}n=l}for(;typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,o=s!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,r==="string"||r==="number"){if(c.context)return n;if(r==="number"&&(t=t.toString()),o){let l=n[0];l&&l.nodeType===3?l.data!==t&&(l.data=t):l=document.createTextNode(t),n=F(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||r==="boolean"){if(c.context)return n;n=F(e,n,s)}else{if(r==="function")return q(()=>{let l=t();for(;typeof l=="function";)l=l();n=U(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[],a=n&&Array.isArray(n);if(ce(l,t,n,i))return q(()=>n=U(e,l,n,s,!0)),()=>n;if(c.context){if(!l.length)return n;if(s===void 0)return[...e.childNodes];let d=l[0],f=[d];for(;(d=d.nextSibling)!==s;)f.push(d);return n=f}if(l.length===0){if(n=F(e,n,s),o)return n}else a?n.length===0?Ae(e,l,s):at(e,n,l):(n&&F(e),Ae(e,l));n=l}else if(t.nodeType){if(c.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=F(e,n,s,t);F(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ce(e,t,n,s){let i=!1;for(let r=0,o=t.length;r<o;r++){let l=t[r],a=n&&n[e.length],d;if(!(l==null||l===!0||l===!1))if((d=typeof l)=="object"&&l.nodeType)e.push(l);else if(Array.isArray(l))i=ce(e,l,a)||i;else if(d==="function")if(s){for(;typeof l=="function";)l=l();i=ce(e,Array.isArray(l)?l:[l],Array.isArray(a)?a:[a])||i}else e.push(l),i=!0;else{const f=String(l);a&&a.nodeType===3&&a.data===f?e.push(a):e.push(document.createTextNode(f))}}return i}function Ae(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function F(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let r=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(i!==l){const a=l.parentNode===e;!r&&!o?a?e.replaceChild(i,l):e.insertBefore(i,n):a&&l.remove()}else r=!0}}else e.insertBefore(i,n);return[i]}function Ee(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const i=n[s],r=i.getAttribute("data-hk");(!t||r.startsWith(t))&&!c.registry.has(r)&&c.registry.set(r,i)}}function Et(){const e=c.context;return`${e.id}${e.count++}`}const Gt=()=>{},Wt=!1,Qt=(...e)=>(Ze(),St(...e));export{z as $,mt as A,qe as B,kt as C,Ot as D,qt as E,E as F,Mt as G,Vt as H,Ut as I,Lt as J,Pt as K,de as L,Ht as M,$e as N,Dt as O,Nt as P,Wt as Q,Gt as R,It as S,P as a,et as b,ke as c,X as d,I as e,ae as f,Ke as g,ht as h,Kt as i,xt as j,Yt as k,vt as l,jt as m,ue as n,Ct as o,_t as p,Qt as q,Xt as r,Rt as s,Bt as t,q as u,Be as v,Ft as w,yt as x,wt as y,$t as z};
