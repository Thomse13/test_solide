globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import * as http$1 from 'node:http';
import http__default$1, { Server as Server$1 } from 'node:http';
import * as node_https from 'node:https';
import node_https__default, { Server } from 'node:https';
import * as node_zlib from 'node:zlib';
import * as node_stream from 'node:stream';
import * as node_buffer from 'node:buffer';
import * as node_util from 'node:util';
import * as node_url from 'node:url';
import { pathToFileURL, fileURLToPath } from 'node:url';
import * as node_net from 'node:net';
import * as node_fs$1 from 'node:fs';
import { promises as promises$1 } from 'node:fs';
import * as node_path$1 from 'node:path';
import { promises, existsSync } from 'fs';
import { dirname as dirname$1, resolve as resolve$1, join } from 'path';
import { AsyncLocalStorage } from 'node:async_hooks';
import invariant from 'vinxi/lib/invariant';
import { join as join$1, virtualId, handlerModule } from 'vinxi/lib/path';
import { fromJSON, crossSerializeStream, getCrossReferenceHeader } from 'seroval';
import { CustomEventPlugin, DOMExceptionPlugin, EventPlugin, FormDataPlugin, HeadersPlugin, ReadableStreamPlugin, RequestPlugin, ResponsePlugin, URLSearchParamsPlugin, URLPlugin } from 'seroval-plugins/web';
import { createContext as createContext$1, sharedConfig, Suspense, useContext, createMemo, createSignal, onCleanup, lazy, createComponent as createComponent$1, children, getOwner, on, createRoot, Show, runWithOwner, createRenderEffect, untrack, startTransition, resetErrorBoundaries, ErrorBoundary } from 'solid-js';
import { isServer, renderToString, createComponent, getRequestEvent, ssr, ssrHydrationKey, ssrAttribute, escape, delegateEvents, ssrElement, mergeProps, renderToStream, NoHydration, useAssets, HydrationScript, Hydration } from 'solid-js/web';
import { provideRequestEvent } from 'solid-js/web/storage';

var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : "undefined" !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

var node$1 = {};

const require$$3 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(http$1);

const require$$4$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_https);

const require$$5 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_zlib);

const require$$6 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_stream);

const require$$7 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_buffer);

const require$$8 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_util);

var nodeFetchNative_61758d11 = {};

var l$1=Object.defineProperty;var o=(e,t)=>l$1(e,"name",{value:t,configurable:!0});var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof commonjsGlobal$1<"u"?commonjsGlobal$1:typeof self<"u"?self:{};function getDefaultExportFromCjs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}o(getDefaultExportFromCjs,"getDefaultExportFromCjs"),nodeFetchNative_61758d11.commonjsGlobal=commonjsGlobal,nodeFetchNative_61758d11.getDefaultExportFromCjs=getDefaultExportFromCjs;

const require$$10 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_url);

const require$$11 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_net);

const require$$0$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_fs$1);

const require$$1$2 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_path$1);

var hs=Object.defineProperty;var u=(c,l)=>hs(c,"name",{value:l,configurable:!0});var To=(c,l,d)=>{if(!l.has(c))throw TypeError("Cannot "+d)};var D$2=(c,l,d)=>(To(c,l,"read from private field"),d?d.call(c):l.get(c)),ye$1=(c,l,d)=>{if(l.has(c))throw TypeError("Cannot add the same private member more than once");l instanceof WeakSet?l.add(c):l.set(c,d);},ne$1=(c,l,d,b)=>(To(c,l,"write to private field"),b?b.call(c,d):l.set(c,d),d);var Ce,mt$1,ot$1,Zt$2,Ue,yt$1,gt$1,_t$2,oe,St$2,Me$1,xe$1,wt$1;Object.defineProperty(node$1,"__esModule",{value:!0});const http=require$$3,https=require$$4$1,zlib=require$$5,Stream=require$$6,require$$0=require$$7,require$$1=require$$8,_commonjsHelpers=nodeFetchNative_61758d11,require$$1$1=require$$10,require$$4=require$$11,node_fs=require$$0$1,node_path=require$$1$2;function _interopDefaultCompat(c){return c&&typeof c=="object"&&"default"in c?c.default:c}u(_interopDefaultCompat,"_interopDefaultCompat");const http__default=_interopDefaultCompat(http),https__default=_interopDefaultCompat(https),zlib__default=_interopDefaultCompat(zlib),Stream__default=_interopDefaultCompat(Stream);function dataUriToBuffer(c){if(!/^data:/i.test(c))throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');c=c.replace(/\r?\n/g,"");const l=c.indexOf(",");if(l===-1||l<=4)throw new TypeError("malformed data: URI");const d=c.substring(5,l).split(";");let b="",g=!1;const S=d[0]||"text/plain";let T=S;for(let Q=1;Q<d.length;Q++)d[Q]==="base64"?g=!0:d[Q]&&(T+=`;${d[Q]}`,d[Q].indexOf("charset=")===0&&(b=d[Q].substring(8)));!d[0]&&!b.length&&(T+=";charset=US-ASCII",b="US-ASCII");const R=g?"base64":"ascii",F=unescape(c.substring(l+1)),B=Buffer.from(F,R);return B.type=S,B.typeFull=T,B.charset=b,B}u(dataUriToBuffer,"dataUriToBuffer");var ponyfill_es2018={exports:{}};/**
 * @license
 * web-streams-polyfill v3.3.2
 * Copyright 2024 Mattias Buelens, Diwank Singh Tomer and other contributors.
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */var hasRequiredPonyfill_es2018;function requirePonyfill_es2018(){return hasRequiredPonyfill_es2018||(hasRequiredPonyfill_es2018=1,function(c,l){(function(d,b){b(l);})(_commonjsHelpers.commonjsGlobal,function(d){const b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol:n=>`Symbol(${n})`;function g(){}u(g,"noop");function S(n){return typeof n=="object"&&n!==null||typeof n=="function"}u(S,"typeIsObject");const T=g;function R(n,o){try{Object.defineProperty(n,"name",{value:o,configurable:!0});}catch{}}u(R,"setFunctionName");const F=Promise,B=Promise.prototype.then,Q=Promise.reject.bind(F);function j(n){return new F(n)}u(j,"newPromise");function A(n){return j(o=>o(n))}u(A,"promiseResolvedWith");function C(n){return Q(n)}u(C,"promiseRejectedWith");function q(n,o,a){return B.call(n,o,a)}u(q,"PerformPromiseThen");function $(n,o,a){q(q(n,o,a),void 0,T);}u($,"uponPromise");function N(n,o){$(n,o);}u(N,"uponFulfillment");function J(n,o){$(n,void 0,o);}u(J,"uponRejection");function G(n,o,a){return q(n,o,a)}u(G,"transformPromiseWith");function Pe(n){q(n,void 0,T);}u(Pe,"setPromiseIsHandledToTrue");let M=u(n=>{if(typeof queueMicrotask=="function")M=queueMicrotask;else {const o=A(void 0);M=u(a=>q(o,a),"_queueMicrotask");}return M(n)},"_queueMicrotask");function H(n,o,a){if(typeof n!="function")throw new TypeError("Argument is not a function");return Function.prototype.apply.call(n,o,a)}u(H,"reflectCall");function U(n,o,a){try{return A(H(n,o,a))}catch(p){return C(p)}}u(U,"promiseCall");const it=16384,jr=class jr{constructor(){this._cursor=0,this._size=0,this._front={_elements:[],_next:void 0},this._back=this._front,this._cursor=0,this._size=0;}get length(){return this._size}push(o){const a=this._back;let p=a;a._elements.length===it-1&&(p={_elements:[],_next:void 0}),a._elements.push(o),p!==a&&(this._back=p,a._next=p),++this._size;}shift(){const o=this._front;let a=o;const p=this._cursor;let y=p+1;const _=o._elements,w=_[p];return y===it&&(a=o._next,y=0),--this._size,this._cursor=y,o!==a&&(this._front=a),_[p]=void 0,w}forEach(o){let a=this._cursor,p=this._front,y=p._elements;for(;(a!==y.length||p._next!==void 0)&&!(a===y.length&&(p=p._next,y=p._elements,a=0,y.length===0));)o(y[a]),++a;}peek(){const o=this._front,a=this._cursor;return o._elements[a]}};u(jr,"SimpleQueue");let Y=jr;const nn=b("[[AbortSteps]]"),on=b("[[ErrorSteps]]"),er=b("[[CancelSteps]]"),tr=b("[[PullSteps]]"),rr=b("[[ReleaseSteps]]");function sn(n,o){n._ownerReadableStream=o,o._reader=n,o._state==="readable"?or(n):o._state==="closed"?Co(n):an(n,o._storedError);}u(sn,"ReadableStreamReaderGenericInitialize");function nr(n,o){const a=n._ownerReadableStream;return le(a,o)}u(nr,"ReadableStreamReaderGenericCancel");function ge(n){const o=n._ownerReadableStream;o._state==="readable"?ir(n,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")):Po(n,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")),o._readableStreamController[rr](),o._reader=void 0,n._ownerReadableStream=void 0;}u(ge,"ReadableStreamReaderGenericRelease");function Rt(n){return new TypeError("Cannot "+n+" a stream using a released reader")}u(Rt,"readerLockException");function or(n){n._closedPromise=j((o,a)=>{n._closedPromise_resolve=o,n._closedPromise_reject=a;});}u(or,"defaultReaderClosedPromiseInitialize");function an(n,o){or(n),ir(n,o);}u(an,"defaultReaderClosedPromiseInitializeAsRejected");function Co(n){or(n),un(n);}u(Co,"defaultReaderClosedPromiseInitializeAsResolved");function ir(n,o){n._closedPromise_reject!==void 0&&(Pe(n._closedPromise),n._closedPromise_reject(o),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0);}u(ir,"defaultReaderClosedPromiseReject");function Po(n,o){an(n,o);}u(Po,"defaultReaderClosedPromiseResetToRejected");function un(n){n._closedPromise_resolve!==void 0&&(n._closedPromise_resolve(void 0),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0);}u(un,"defaultReaderClosedPromiseResolve");const ln=Number.isFinite||function(n){return typeof n=="number"&&isFinite(n)},vo=Math.trunc||function(n){return n<0?Math.ceil(n):Math.floor(n)};function Eo(n){return typeof n=="object"||typeof n=="function"}u(Eo,"isDictionary");function ce(n,o){if(n!==void 0&&!Eo(n))throw new TypeError(`${o} is not an object.`)}u(ce,"assertDictionary");function ee(n,o){if(typeof n!="function")throw new TypeError(`${o} is not a function.`)}u(ee,"assertFunction");function Ao(n){return typeof n=="object"&&n!==null||typeof n=="function"}u(Ao,"isObject");function fn(n,o){if(!Ao(n))throw new TypeError(`${o} is not an object.`)}u(fn,"assertObject");function _e(n,o,a){if(n===void 0)throw new TypeError(`Parameter ${o} is required in '${a}'.`)}u(_e,"assertRequiredArgument");function sr(n,o,a){if(n===void 0)throw new TypeError(`${o} is required in '${a}'.`)}u(sr,"assertRequiredField");function ar(n){return Number(n)}u(ar,"convertUnrestrictedDouble");function cn(n){return n===0?0:n}u(cn,"censorNegativeZero");function Bo(n){return cn(vo(n))}u(Bo,"integerPart");function ur(n,o){const p=Number.MAX_SAFE_INTEGER;let y=Number(n);if(y=cn(y),!ln(y))throw new TypeError(`${o} is not a finite number`);if(y=Bo(y),y<0||y>p)throw new TypeError(`${o} is outside the accepted range of 0 to ${p}, inclusive`);return !ln(y)||y===0?0:y}u(ur,"convertUnsignedLongLongWithEnforceRange");function lr(n,o){if(!qe(n))throw new TypeError(`${o} is not a ReadableStream.`)}u(lr,"assertReadableStream");function Ne(n){return new de(n)}u(Ne,"AcquireReadableStreamDefaultReader");function dn(n,o){n._reader._readRequests.push(o);}u(dn,"ReadableStreamAddReadRequest");function fr(n,o,a){const y=n._reader._readRequests.shift();a?y._closeSteps():y._chunkSteps(o);}u(fr,"ReadableStreamFulfillReadRequest");function Tt(n){return n._reader._readRequests.length}u(Tt,"ReadableStreamGetNumReadRequests");function hn(n){const o=n._reader;return !(o===void 0||!ve(o))}u(hn,"ReadableStreamHasDefaultReader");const Ir=class Ir{constructor(o){if(_e(o,1,"ReadableStreamDefaultReader"),lr(o,"First parameter"),ke(o))throw new TypeError("This stream has already been locked for exclusive reading by another reader");sn(this,o),this._readRequests=new Y;}get closed(){return ve(this)?this._closedPromise:C(Ct("closed"))}cancel(o=void 0){return ve(this)?this._ownerReadableStream===void 0?C(Rt("cancel")):nr(this,o):C(Ct("cancel"))}read(){if(!ve(this))return C(Ct("read"));if(this._ownerReadableStream===void 0)return C(Rt("read from"));let o,a;const p=j((_,w)=>{o=_,a=w;});return st(this,{_chunkSteps:_=>o({value:_,done:!1}),_closeSteps:()=>o({value:void 0,done:!0}),_errorSteps:_=>a(_)}),p}releaseLock(){if(!ve(this))throw Ct("releaseLock");this._ownerReadableStream!==void 0&&qo(this);}};u(Ir,"ReadableStreamDefaultReader");let de=Ir;Object.defineProperties(de.prototype,{cancel:{enumerable:!0},read:{enumerable:!0},releaseLock:{enumerable:!0},closed:{enumerable:!0}}),R(de.prototype.cancel,"cancel"),R(de.prototype.read,"read"),R(de.prototype.releaseLock,"releaseLock"),typeof b.toStringTag=="symbol"&&Object.defineProperty(de.prototype,b.toStringTag,{value:"ReadableStreamDefaultReader",configurable:!0});function ve(n){return !S(n)||!Object.prototype.hasOwnProperty.call(n,"_readRequests")?!1:n instanceof de}u(ve,"IsReadableStreamDefaultReader");function st(n,o){const a=n._ownerReadableStream;a._disturbed=!0,a._state==="closed"?o._closeSteps():a._state==="errored"?o._errorSteps(a._storedError):a._readableStreamController[tr](o);}u(st,"ReadableStreamDefaultReaderRead");function qo(n){ge(n);const o=new TypeError("Reader was released");pn(n,o);}u(qo,"ReadableStreamDefaultReaderRelease");function pn(n,o){const a=n._readRequests;n._readRequests=new Y,a.forEach(p=>{p._errorSteps(o);});}u(pn,"ReadableStreamDefaultReaderErrorReadRequests");function Ct(n){return new TypeError(`ReadableStreamDefaultReader.prototype.${n} can only be used on a ReadableStreamDefaultReader`)}u(Ct,"defaultReaderBrandCheckException");const bn=Object.getPrototypeOf(Object.getPrototypeOf(async function*(){}).prototype),Lr=class Lr{constructor(o,a){this._ongoingPromise=void 0,this._isFinished=!1,this._reader=o,this._preventCancel=a;}next(){const o=u(()=>this._nextSteps(),"nextSteps");return this._ongoingPromise=this._ongoingPromise?G(this._ongoingPromise,o,o):o(),this._ongoingPromise}return(o){const a=u(()=>this._returnSteps(o),"returnSteps");return this._ongoingPromise?G(this._ongoingPromise,a,a):a()}_nextSteps(){if(this._isFinished)return Promise.resolve({value:void 0,done:!0});const o=this._reader;let a,p;const y=j((w,P)=>{a=w,p=P;});return st(o,{_chunkSteps:w=>{this._ongoingPromise=void 0,M(()=>a({value:w,done:!1}));},_closeSteps:()=>{this._ongoingPromise=void 0,this._isFinished=!0,ge(o),a({value:void 0,done:!0});},_errorSteps:w=>{this._ongoingPromise=void 0,this._isFinished=!0,ge(o),p(w);}}),y}_returnSteps(o){if(this._isFinished)return Promise.resolve({value:o,done:!0});this._isFinished=!0;const a=this._reader;if(!this._preventCancel){const p=nr(a,o);return ge(a),G(p,()=>({value:o,done:!0}))}return ge(a),A({value:o,done:!0})}};u(Lr,"ReadableStreamAsyncIteratorImpl");let Pt=Lr;const mn={next(){return yn(this)?this._asyncIteratorImpl.next():C(gn("next"))},return(n){return yn(this)?this._asyncIteratorImpl.return(n):C(gn("return"))}};bn!==void 0&&Object.setPrototypeOf(mn,bn);function ko(n,o){const a=Ne(n),p=new Pt(a,o),y=Object.create(mn);return y._asyncIteratorImpl=p,y}u(ko,"AcquireReadableStreamAsyncIterator");function yn(n){if(!S(n)||!Object.prototype.hasOwnProperty.call(n,"_asyncIteratorImpl"))return !1;try{return n._asyncIteratorImpl instanceof Pt}catch{return !1}}u(yn,"IsReadableStreamAsyncIterator");function gn(n){return new TypeError(`ReadableStreamAsyncIterator.${n} can only be used on a ReadableSteamAsyncIterator`)}u(gn,"streamAsyncIteratorBrandCheckException");const _n=Number.isNaN||function(n){return n!==n};function at(n){return n.slice()}u(at,"CreateArrayFromList");function Sn(n,o,a,p,y){new Uint8Array(n).set(new Uint8Array(a,p,y),o);}u(Sn,"CopyDataBlockBytes");let Se=u(n=>(typeof n.transfer=="function"?Se=u(o=>o.transfer(),"TransferArrayBuffer"):typeof structuredClone=="function"?Se=u(o=>structuredClone(o,{transfer:[o]}),"TransferArrayBuffer"):Se=u(o=>o,"TransferArrayBuffer"),Se(n)),"TransferArrayBuffer"),Ee=u(n=>(typeof n.detached=="boolean"?Ee=u(o=>o.detached,"IsDetachedBuffer"):Ee=u(o=>o.byteLength===0,"IsDetachedBuffer"),Ee(n)),"IsDetachedBuffer");function wn(n,o,a){if(n.slice)return n.slice(o,a);const p=a-o,y=new ArrayBuffer(p);return Sn(y,0,n,o,p),y}u(wn,"ArrayBufferSlice");function vt(n,o){const a=n[o];if(a!=null){if(typeof a!="function")throw new TypeError(`${String(o)} is not a function`);return a}}u(vt,"GetMethod");function Wo(n){const o={[b.iterator]:()=>n.iterator},a=async function*(){return yield*o}(),p=a.next;return {iterator:a,nextMethod:p,done:!1}}u(Wo,"CreateAsyncFromSyncIterator");function Rn(n,o="sync",a){if(a===void 0)if(o==="async"){if(a=vt(n,b.asyncIterator),a===void 0){const _=vt(n,b.iterator),w=Rn(n,"sync",_);return Wo(w)}}else a=vt(n,b.iterator);if(a===void 0)throw new TypeError("The object is not iterable");const p=H(a,n,[]);if(!S(p))throw new TypeError("The iterator method must return an object");const y=p.next;return {iterator:p,nextMethod:y,done:!1}}u(Rn,"GetIterator");function Oo(n){const o=H(n.nextMethod,n.iterator,[]);if(!S(o))throw new TypeError("The iterator.next() method must return an object");return o}u(Oo,"IteratorNext");function zo(n){return !!n.done}u(zo,"IteratorComplete");function Fo(n){return n.value}u(Fo,"IteratorValue");function jo(n){return !(typeof n!="number"||_n(n)||n<0)}u(jo,"IsNonNegativeNumber");function Tn(n){const o=wn(n.buffer,n.byteOffset,n.byteOffset+n.byteLength);return new Uint8Array(o)}u(Tn,"CloneAsUint8Array");function cr(n){const o=n._queue.shift();return n._queueTotalSize-=o.size,n._queueTotalSize<0&&(n._queueTotalSize=0),o.value}u(cr,"DequeueValue");function dr(n,o,a){if(!jo(a)||a===1/0)throw new RangeError("Size must be a finite, non-NaN, non-negative number.");n._queue.push({value:o,size:a}),n._queueTotalSize+=a;}u(dr,"EnqueueValueWithSize");function Io(n){return n._queue.peek().value}u(Io,"PeekQueueValue");function Ae(n){n._queue=new Y,n._queueTotalSize=0;}u(Ae,"ResetQueue");function Cn(n){return n===DataView}u(Cn,"isDataViewConstructor");function Lo(n){return Cn(n.constructor)}u(Lo,"isDataView");function $o(n){return Cn(n)?1:n.BYTES_PER_ELEMENT}u($o,"arrayBufferViewElementSize");const $r=class $r{constructor(){throw new TypeError("Illegal constructor")}get view(){if(!hr(this))throw gr("view");return this._view}respond(o){if(!hr(this))throw gr("respond");if(_e(o,1,"respond"),o=ur(o,"First parameter"),this._associatedReadableByteStreamController===void 0)throw new TypeError("This BYOB request has been invalidated");if(Ee(this._view.buffer))throw new TypeError("The BYOB request's buffer has been detached and so cannot be used as a response");qt(this._associatedReadableByteStreamController,o);}respondWithNewView(o){if(!hr(this))throw gr("respondWithNewView");if(_e(o,1,"respondWithNewView"),!ArrayBuffer.isView(o))throw new TypeError("You can only respond with array buffer views");if(this._associatedReadableByteStreamController===void 0)throw new TypeError("This BYOB request has been invalidated");if(Ee(o.buffer))throw new TypeError("The given view's buffer has been detached and so cannot be used as a response");kt(this._associatedReadableByteStreamController,o);}};u($r,"ReadableStreamBYOBRequest");let we=$r;Object.defineProperties(we.prototype,{respond:{enumerable:!0},respondWithNewView:{enumerable:!0},view:{enumerable:!0}}),R(we.prototype.respond,"respond"),R(we.prototype.respondWithNewView,"respondWithNewView"),typeof b.toStringTag=="symbol"&&Object.defineProperty(we.prototype,b.toStringTag,{value:"ReadableStreamBYOBRequest",configurable:!0});const Dr=class Dr{constructor(){throw new TypeError("Illegal constructor")}get byobRequest(){if(!Oe(this))throw lt("byobRequest");return yr(this)}get desiredSize(){if(!Oe(this))throw lt("desiredSize");return zn(this)}close(){if(!Oe(this))throw lt("close");if(this._closeRequested)throw new TypeError("The stream has already been closed; do not close it again!");const o=this._controlledReadableByteStream._state;if(o!=="readable")throw new TypeError(`The stream (in ${o} state) is not in the readable state and cannot be closed`);ut(this);}enqueue(o){if(!Oe(this))throw lt("enqueue");if(_e(o,1,"enqueue"),!ArrayBuffer.isView(o))throw new TypeError("chunk must be an array buffer view");if(o.byteLength===0)throw new TypeError("chunk must have non-zero byteLength");if(o.buffer.byteLength===0)throw new TypeError("chunk's buffer must have non-zero byteLength");if(this._closeRequested)throw new TypeError("stream is closed or draining");const a=this._controlledReadableByteStream._state;if(a!=="readable")throw new TypeError(`The stream (in ${a} state) is not in the readable state and cannot be enqueued to`);Bt(this,o);}error(o=void 0){if(!Oe(this))throw lt("error");te(this,o);}[er](o){Pn(this),Ae(this);const a=this._cancelAlgorithm(o);return At(this),a}[tr](o){const a=this._controlledReadableByteStream;if(this._queueTotalSize>0){On(this,o);return}const p=this._autoAllocateChunkSize;if(p!==void 0){let y;try{y=new ArrayBuffer(p);}catch(w){o._errorSteps(w);return}const _={buffer:y,bufferByteLength:p,byteOffset:0,byteLength:p,bytesFilled:0,minimumFill:1,elementSize:1,viewConstructor:Uint8Array,readerType:"default"};this._pendingPullIntos.push(_);}dn(a,o),ze(this);}[rr](){if(this._pendingPullIntos.length>0){const o=this._pendingPullIntos.peek();o.readerType="none",this._pendingPullIntos=new Y,this._pendingPullIntos.push(o);}}};u(Dr,"ReadableByteStreamController");let ie=Dr;Object.defineProperties(ie.prototype,{close:{enumerable:!0},enqueue:{enumerable:!0},error:{enumerable:!0},byobRequest:{enumerable:!0},desiredSize:{enumerable:!0}}),R(ie.prototype.close,"close"),R(ie.prototype.enqueue,"enqueue"),R(ie.prototype.error,"error"),typeof b.toStringTag=="symbol"&&Object.defineProperty(ie.prototype,b.toStringTag,{value:"ReadableByteStreamController",configurable:!0});function Oe(n){return !S(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledReadableByteStream")?!1:n instanceof ie}u(Oe,"IsReadableByteStreamController");function hr(n){return !S(n)||!Object.prototype.hasOwnProperty.call(n,"_associatedReadableByteStreamController")?!1:n instanceof we}u(hr,"IsReadableStreamBYOBRequest");function ze(n){if(!No(n))return;if(n._pulling){n._pullAgain=!0;return}n._pulling=!0;const a=n._pullAlgorithm();$(a,()=>(n._pulling=!1,n._pullAgain&&(n._pullAgain=!1,ze(n)),null),p=>(te(n,p),null));}u(ze,"ReadableByteStreamControllerCallPullIfNeeded");function Pn(n){br(n),n._pendingPullIntos=new Y;}u(Pn,"ReadableByteStreamControllerClearPendingPullIntos");function pr(n,o){let a=!1;n._state==="closed"&&(a=!0);const p=vn(o);o.readerType==="default"?fr(n,p,a):Zo(n,p,a);}u(pr,"ReadableByteStreamControllerCommitPullIntoDescriptor");function vn(n){const o=n.bytesFilled,a=n.elementSize;return new n.viewConstructor(n.buffer,n.byteOffset,o/a)}u(vn,"ReadableByteStreamControllerConvertPullIntoDescriptor");function Et(n,o,a,p){n._queue.push({buffer:o,byteOffset:a,byteLength:p}),n._queueTotalSize+=p;}u(Et,"ReadableByteStreamControllerEnqueueChunkToQueue");function En(n,o,a,p){let y;try{y=wn(o,a,a+p);}catch(_){throw te(n,_),_}Et(n,y,0,p);}u(En,"ReadableByteStreamControllerEnqueueClonedChunkToQueue");function An(n,o){o.bytesFilled>0&&En(n,o.buffer,o.byteOffset,o.bytesFilled),He(n);}u(An,"ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue");function Bn(n,o){const a=Math.min(n._queueTotalSize,o.byteLength-o.bytesFilled),p=o.bytesFilled+a;let y=a,_=!1;const w=p%o.elementSize,P=p-w;P>=o.minimumFill&&(y=P-o.bytesFilled,_=!0);const k=n._queue;for(;y>0;){const v=k.peek(),W=Math.min(y,v.byteLength),O=o.byteOffset+o.bytesFilled;Sn(o.buffer,O,v.buffer,v.byteOffset,W),v.byteLength===W?k.shift():(v.byteOffset+=W,v.byteLength-=W),n._queueTotalSize-=W,qn(n,W,o),y-=W;}return _}u(Bn,"ReadableByteStreamControllerFillPullIntoDescriptorFromQueue");function qn(n,o,a){a.bytesFilled+=o;}u(qn,"ReadableByteStreamControllerFillHeadPullIntoDescriptor");function kn(n){n._queueTotalSize===0&&n._closeRequested?(At(n),bt(n._controlledReadableByteStream)):ze(n);}u(kn,"ReadableByteStreamControllerHandleQueueDrain");function br(n){n._byobRequest!==null&&(n._byobRequest._associatedReadableByteStreamController=void 0,n._byobRequest._view=null,n._byobRequest=null);}u(br,"ReadableByteStreamControllerInvalidateBYOBRequest");function mr(n){for(;n._pendingPullIntos.length>0;){if(n._queueTotalSize===0)return;const o=n._pendingPullIntos.peek();Bn(n,o)&&(He(n),pr(n._controlledReadableByteStream,o));}}u(mr,"ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue");function Do(n){const o=n._controlledReadableByteStream._reader;for(;o._readRequests.length>0;){if(n._queueTotalSize===0)return;const a=o._readRequests.shift();On(n,a);}}u(Do,"ReadableByteStreamControllerProcessReadRequestsUsingQueue");function Mo(n,o,a,p){const y=n._controlledReadableByteStream,_=o.constructor,w=$o(_),{byteOffset:P,byteLength:k}=o,v=a*w;let W;try{W=Se(o.buffer);}catch(I){p._errorSteps(I);return}const O={buffer:W,bufferByteLength:W.byteLength,byteOffset:P,byteLength:k,bytesFilled:0,minimumFill:v,elementSize:w,viewConstructor:_,readerType:"byob"};if(n._pendingPullIntos.length>0){n._pendingPullIntos.push(O),In(y,p);return}if(y._state==="closed"){const I=new _(O.buffer,O.byteOffset,0);p._closeSteps(I);return}if(n._queueTotalSize>0){if(Bn(n,O)){const I=vn(O);kn(n),p._chunkSteps(I);return}if(n._closeRequested){const I=new TypeError("Insufficient bytes to fill elements in the given buffer");te(n,I),p._errorSteps(I);return}}n._pendingPullIntos.push(O),In(y,p),ze(n);}u(Mo,"ReadableByteStreamControllerPullInto");function xo(n,o){o.readerType==="none"&&He(n);const a=n._controlledReadableByteStream;if(_r(a))for(;Ln(a)>0;){const p=He(n);pr(a,p);}}u(xo,"ReadableByteStreamControllerRespondInClosedState");function Uo(n,o,a){if(qn(n,o,a),a.readerType==="none"){An(n,a),mr(n);return}if(a.bytesFilled<a.minimumFill)return;He(n);const p=a.bytesFilled%a.elementSize;if(p>0){const y=a.byteOffset+a.bytesFilled;En(n,a.buffer,y-p,p);}a.bytesFilled-=p,pr(n._controlledReadableByteStream,a),mr(n);}u(Uo,"ReadableByteStreamControllerRespondInReadableState");function Wn(n,o){const a=n._pendingPullIntos.peek();br(n),n._controlledReadableByteStream._state==="closed"?xo(n,a):Uo(n,o,a),ze(n);}u(Wn,"ReadableByteStreamControllerRespondInternal");function He(n){return n._pendingPullIntos.shift()}u(He,"ReadableByteStreamControllerShiftPendingPullInto");function No(n){const o=n._controlledReadableByteStream;return o._state!=="readable"||n._closeRequested||!n._started?!1:!!(hn(o)&&Tt(o)>0||_r(o)&&Ln(o)>0||zn(n)>0)}u(No,"ReadableByteStreamControllerShouldCallPull");function At(n){n._pullAlgorithm=void 0,n._cancelAlgorithm=void 0;}u(At,"ReadableByteStreamControllerClearAlgorithms");function ut(n){const o=n._controlledReadableByteStream;if(!(n._closeRequested||o._state!=="readable")){if(n._queueTotalSize>0){n._closeRequested=!0;return}if(n._pendingPullIntos.length>0){const a=n._pendingPullIntos.peek();if(a.bytesFilled%a.elementSize!==0){const p=new TypeError("Insufficient bytes to fill elements in the given buffer");throw te(n,p),p}}At(n),bt(o);}}u(ut,"ReadableByteStreamControllerClose");function Bt(n,o){const a=n._controlledReadableByteStream;if(n._closeRequested||a._state!=="readable")return;const{buffer:p,byteOffset:y,byteLength:_}=o;if(Ee(p))throw new TypeError("chunk's buffer is detached and so cannot be enqueued");const w=Se(p);if(n._pendingPullIntos.length>0){const P=n._pendingPullIntos.peek();if(Ee(P.buffer))throw new TypeError("The BYOB request's buffer has been detached and so cannot be filled with an enqueued chunk");br(n),P.buffer=Se(P.buffer),P.readerType==="none"&&An(n,P);}if(hn(a))if(Do(n),Tt(a)===0)Et(n,w,y,_);else {n._pendingPullIntos.length>0&&He(n);const P=new Uint8Array(w,y,_);fr(a,P,!1);}else _r(a)?(Et(n,w,y,_),mr(n)):Et(n,w,y,_);ze(n);}u(Bt,"ReadableByteStreamControllerEnqueue");function te(n,o){const a=n._controlledReadableByteStream;a._state==="readable"&&(Pn(n),Ae(n),At(n),uo(a,o));}u(te,"ReadableByteStreamControllerError");function On(n,o){const a=n._queue.shift();n._queueTotalSize-=a.byteLength,kn(n);const p=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);o._chunkSteps(p);}u(On,"ReadableByteStreamControllerFillReadRequestFromQueue");function yr(n){if(n._byobRequest===null&&n._pendingPullIntos.length>0){const o=n._pendingPullIntos.peek(),a=new Uint8Array(o.buffer,o.byteOffset+o.bytesFilled,o.byteLength-o.bytesFilled),p=Object.create(we.prototype);Vo(p,n,a),n._byobRequest=p;}return n._byobRequest}u(yr,"ReadableByteStreamControllerGetBYOBRequest");function zn(n){const o=n._controlledReadableByteStream._state;return o==="errored"?null:o==="closed"?0:n._strategyHWM-n._queueTotalSize}u(zn,"ReadableByteStreamControllerGetDesiredSize");function qt(n,o){const a=n._pendingPullIntos.peek();if(n._controlledReadableByteStream._state==="closed"){if(o!==0)throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream")}else {if(o===0)throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");if(a.bytesFilled+o>a.byteLength)throw new RangeError("bytesWritten out of range")}a.buffer=Se(a.buffer),Wn(n,o);}u(qt,"ReadableByteStreamControllerRespond");function kt(n,o){const a=n._pendingPullIntos.peek();if(n._controlledReadableByteStream._state==="closed"){if(o.byteLength!==0)throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream")}else if(o.byteLength===0)throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");if(a.byteOffset+a.bytesFilled!==o.byteOffset)throw new RangeError("The region specified by view does not match byobRequest");if(a.bufferByteLength!==o.buffer.byteLength)throw new RangeError("The buffer of view has different capacity than byobRequest");if(a.bytesFilled+o.byteLength>a.byteLength)throw new RangeError("The region specified by view is larger than byobRequest");const y=o.byteLength;a.buffer=Se(o.buffer),Wn(n,y);}u(kt,"ReadableByteStreamControllerRespondWithNewView");function Fn(n,o,a,p,y,_,w){o._controlledReadableByteStream=n,o._pullAgain=!1,o._pulling=!1,o._byobRequest=null,o._queue=o._queueTotalSize=void 0,Ae(o),o._closeRequested=!1,o._started=!1,o._strategyHWM=_,o._pullAlgorithm=p,o._cancelAlgorithm=y,o._autoAllocateChunkSize=w,o._pendingPullIntos=new Y,n._readableStreamController=o;const P=a();$(A(P),()=>(o._started=!0,ze(o),null),k=>(te(o,k),null));}u(Fn,"SetUpReadableByteStreamController");function Ho(n,o,a){const p=Object.create(ie.prototype);let y,_,w;o.start!==void 0?y=u(()=>o.start(p),"startAlgorithm"):y=u(()=>{},"startAlgorithm"),o.pull!==void 0?_=u(()=>o.pull(p),"pullAlgorithm"):_=u(()=>A(void 0),"pullAlgorithm"),o.cancel!==void 0?w=u(k=>o.cancel(k),"cancelAlgorithm"):w=u(()=>A(void 0),"cancelAlgorithm");const P=o.autoAllocateChunkSize;if(P===0)throw new TypeError("autoAllocateChunkSize must be greater than 0");Fn(n,p,y,_,w,a,P);}u(Ho,"SetUpReadableByteStreamControllerFromUnderlyingSource");function Vo(n,o,a){n._associatedReadableByteStreamController=o,n._view=a;}u(Vo,"SetUpReadableStreamBYOBRequest");function gr(n){return new TypeError(`ReadableStreamBYOBRequest.prototype.${n} can only be used on a ReadableStreamBYOBRequest`)}u(gr,"byobRequestBrandCheckException");function lt(n){return new TypeError(`ReadableByteStreamController.prototype.${n} can only be used on a ReadableByteStreamController`)}u(lt,"byteStreamControllerBrandCheckException");function Qo(n,o){ce(n,o);const a=n?.mode;return {mode:a===void 0?void 0:Go(a,`${o} has member 'mode' that`)}}u(Qo,"convertReaderOptions");function Go(n,o){if(n=`${n}`,n!=="byob")throw new TypeError(`${o} '${n}' is not a valid enumeration value for ReadableStreamReaderMode`);return n}u(Go,"convertReadableStreamReaderMode");function Yo(n,o){var a;ce(n,o);const p=(a=n?.min)!==null&&a!==void 0?a:1;return {min:ur(p,`${o} has member 'min' that`)}}u(Yo,"convertByobReadOptions");function jn(n){return new he(n)}u(jn,"AcquireReadableStreamBYOBReader");function In(n,o){n._reader._readIntoRequests.push(o);}u(In,"ReadableStreamAddReadIntoRequest");function Zo(n,o,a){const y=n._reader._readIntoRequests.shift();a?y._closeSteps(o):y._chunkSteps(o);}u(Zo,"ReadableStreamFulfillReadIntoRequest");function Ln(n){return n._reader._readIntoRequests.length}u(Ln,"ReadableStreamGetNumReadIntoRequests");function _r(n){const o=n._reader;return !(o===void 0||!Fe(o))}u(_r,"ReadableStreamHasBYOBReader");const Mr=class Mr{constructor(o){if(_e(o,1,"ReadableStreamBYOBReader"),lr(o,"First parameter"),ke(o))throw new TypeError("This stream has already been locked for exclusive reading by another reader");if(!Oe(o._readableStreamController))throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");sn(this,o),this._readIntoRequests=new Y;}get closed(){return Fe(this)?this._closedPromise:C(Wt("closed"))}cancel(o=void 0){return Fe(this)?this._ownerReadableStream===void 0?C(Rt("cancel")):nr(this,o):C(Wt("cancel"))}read(o,a={}){if(!Fe(this))return C(Wt("read"));if(!ArrayBuffer.isView(o))return C(new TypeError("view must be an array buffer view"));if(o.byteLength===0)return C(new TypeError("view must have non-zero byteLength"));if(o.buffer.byteLength===0)return C(new TypeError("view's buffer must have non-zero byteLength"));if(Ee(o.buffer))return C(new TypeError("view's buffer has been detached"));let p;try{p=Yo(a,"options");}catch(v){return C(v)}const y=p.min;if(y===0)return C(new TypeError("options.min must be greater than 0"));if(Lo(o)){if(y>o.byteLength)return C(new RangeError("options.min must be less than or equal to view's byteLength"))}else if(y>o.length)return C(new RangeError("options.min must be less than or equal to view's length"));if(this._ownerReadableStream===void 0)return C(Rt("read from"));let _,w;const P=j((v,W)=>{_=v,w=W;});return $n(this,o,y,{_chunkSteps:v=>_({value:v,done:!1}),_closeSteps:v=>_({value:v,done:!0}),_errorSteps:v=>w(v)}),P}releaseLock(){if(!Fe(this))throw Wt("releaseLock");this._ownerReadableStream!==void 0&&Ko(this);}};u(Mr,"ReadableStreamBYOBReader");let he=Mr;Object.defineProperties(he.prototype,{cancel:{enumerable:!0},read:{enumerable:!0},releaseLock:{enumerable:!0},closed:{enumerable:!0}}),R(he.prototype.cancel,"cancel"),R(he.prototype.read,"read"),R(he.prototype.releaseLock,"releaseLock"),typeof b.toStringTag=="symbol"&&Object.defineProperty(he.prototype,b.toStringTag,{value:"ReadableStreamBYOBReader",configurable:!0});function Fe(n){return !S(n)||!Object.prototype.hasOwnProperty.call(n,"_readIntoRequests")?!1:n instanceof he}u(Fe,"IsReadableStreamBYOBReader");function $n(n,o,a,p){const y=n._ownerReadableStream;y._disturbed=!0,y._state==="errored"?p._errorSteps(y._storedError):Mo(y._readableStreamController,o,a,p);}u($n,"ReadableStreamBYOBReaderRead");function Ko(n){ge(n);const o=new TypeError("Reader was released");Dn(n,o);}u(Ko,"ReadableStreamBYOBReaderRelease");function Dn(n,o){const a=n._readIntoRequests;n._readIntoRequests=new Y,a.forEach(p=>{p._errorSteps(o);});}u(Dn,"ReadableStreamBYOBReaderErrorReadIntoRequests");function Wt(n){return new TypeError(`ReadableStreamBYOBReader.prototype.${n} can only be used on a ReadableStreamBYOBReader`)}u(Wt,"byobReaderBrandCheckException");function ft(n,o){const{highWaterMark:a}=n;if(a===void 0)return o;if(_n(a)||a<0)throw new RangeError("Invalid highWaterMark");return a}u(ft,"ExtractHighWaterMark");function Ot(n){const{size:o}=n;return o||(()=>1)}u(Ot,"ExtractSizeAlgorithm");function zt(n,o){ce(n,o);const a=n?.highWaterMark,p=n?.size;return {highWaterMark:a===void 0?void 0:ar(a),size:p===void 0?void 0:Jo(p,`${o} has member 'size' that`)}}u(zt,"convertQueuingStrategy");function Jo(n,o){return ee(n,o),a=>ar(n(a))}u(Jo,"convertQueuingStrategySize");function Xo(n,o){ce(n,o);const a=n?.abort,p=n?.close,y=n?.start,_=n?.type,w=n?.write;return {abort:a===void 0?void 0:ei(a,n,`${o} has member 'abort' that`),close:p===void 0?void 0:ti(p,n,`${o} has member 'close' that`),start:y===void 0?void 0:ri(y,n,`${o} has member 'start' that`),write:w===void 0?void 0:ni(w,n,`${o} has member 'write' that`),type:_}}u(Xo,"convertUnderlyingSink");function ei(n,o,a){return ee(n,a),p=>U(n,o,[p])}u(ei,"convertUnderlyingSinkAbortCallback");function ti(n,o,a){return ee(n,a),()=>U(n,o,[])}u(ti,"convertUnderlyingSinkCloseCallback");function ri(n,o,a){return ee(n,a),p=>H(n,o,[p])}u(ri,"convertUnderlyingSinkStartCallback");function ni(n,o,a){return ee(n,a),(p,y)=>U(n,o,[p,y])}u(ni,"convertUnderlyingSinkWriteCallback");function Mn(n,o){if(!Ve(n))throw new TypeError(`${o} is not a WritableStream.`)}u(Mn,"assertWritableStream");function oi(n){if(typeof n!="object"||n===null)return !1;try{return typeof n.aborted=="boolean"}catch{return !1}}u(oi,"isAbortSignal");const ii=typeof AbortController=="function";function si(){if(ii)return new AbortController}u(si,"createAbortController");const xr=class xr{constructor(o={},a={}){o===void 0?o=null:fn(o,"First parameter");const p=zt(a,"Second parameter"),y=Xo(o,"First parameter");if(Un(this),y.type!==void 0)throw new RangeError("Invalid type is specified");const w=Ot(p),P=ft(p,1);Si(this,y,P,w);}get locked(){if(!Ve(this))throw $t("locked");return Qe(this)}abort(o=void 0){return Ve(this)?Qe(this)?C(new TypeError("Cannot abort a stream that already has a writer")):Ft(this,o):C($t("abort"))}close(){return Ve(this)?Qe(this)?C(new TypeError("Cannot close a stream that already has a writer")):be(this)?C(new TypeError("Cannot close an already-closing stream")):Nn(this):C($t("close"))}getWriter(){if(!Ve(this))throw $t("getWriter");return xn(this)}};u(xr,"WritableStream");let pe=xr;Object.defineProperties(pe.prototype,{abort:{enumerable:!0},close:{enumerable:!0},getWriter:{enumerable:!0},locked:{enumerable:!0}}),R(pe.prototype.abort,"abort"),R(pe.prototype.close,"close"),R(pe.prototype.getWriter,"getWriter"),typeof b.toStringTag=="symbol"&&Object.defineProperty(pe.prototype,b.toStringTag,{value:"WritableStream",configurable:!0});function xn(n){return new se(n)}u(xn,"AcquireWritableStreamDefaultWriter");function ai(n,o,a,p,y=1,_=()=>1){const w=Object.create(pe.prototype);Un(w);const P=Object.create(Be.prototype);return Zn(w,P,n,o,a,p,y,_),w}u(ai,"CreateWritableStream");function Un(n){n._state="writable",n._storedError=void 0,n._writer=void 0,n._writableStreamController=void 0,n._writeRequests=new Y,n._inFlightWriteRequest=void 0,n._closeRequest=void 0,n._inFlightCloseRequest=void 0,n._pendingAbortRequest=void 0,n._backpressure=!1;}u(Un,"InitializeWritableStream");function Ve(n){return !S(n)||!Object.prototype.hasOwnProperty.call(n,"_writableStreamController")?!1:n instanceof pe}u(Ve,"IsWritableStream");function Qe(n){return n._writer!==void 0}u(Qe,"IsWritableStreamLocked");function Ft(n,o){var a;if(n._state==="closed"||n._state==="errored")return A(void 0);n._writableStreamController._abortReason=o,(a=n._writableStreamController._abortController)===null||a===void 0||a.abort(o);const p=n._state;if(p==="closed"||p==="errored")return A(void 0);if(n._pendingAbortRequest!==void 0)return n._pendingAbortRequest._promise;let y=!1;p==="erroring"&&(y=!0,o=void 0);const _=j((w,P)=>{n._pendingAbortRequest={_promise:void 0,_resolve:w,_reject:P,_reason:o,_wasAlreadyErroring:y};});return n._pendingAbortRequest._promise=_,y||wr(n,o),_}u(Ft,"WritableStreamAbort");function Nn(n){const o=n._state;if(o==="closed"||o==="errored")return C(new TypeError(`The stream (in ${o} state) is not in the writable state and cannot be closed`));const a=j((y,_)=>{const w={_resolve:y,_reject:_};n._closeRequest=w;}),p=n._writer;return p!==void 0&&n._backpressure&&o==="writable"&&Br(p),wi(n._writableStreamController),a}u(Nn,"WritableStreamClose");function ui(n){return j((a,p)=>{const y={_resolve:a,_reject:p};n._writeRequests.push(y);})}u(ui,"WritableStreamAddWriteRequest");function Sr(n,o){if(n._state==="writable"){wr(n,o);return}Rr(n);}u(Sr,"WritableStreamDealWithRejection");function wr(n,o){const a=n._writableStreamController;n._state="erroring",n._storedError=o;const p=n._writer;p!==void 0&&Vn(p,o),!hi(n)&&a._started&&Rr(n);}u(wr,"WritableStreamStartErroring");function Rr(n){n._state="errored",n._writableStreamController[on]();const o=n._storedError;if(n._writeRequests.forEach(y=>{y._reject(o);}),n._writeRequests=new Y,n._pendingAbortRequest===void 0){jt(n);return}const a=n._pendingAbortRequest;if(n._pendingAbortRequest=void 0,a._wasAlreadyErroring){a._reject(o),jt(n);return}const p=n._writableStreamController[nn](a._reason);$(p,()=>(a._resolve(),jt(n),null),y=>(a._reject(y),jt(n),null));}u(Rr,"WritableStreamFinishErroring");function li(n){n._inFlightWriteRequest._resolve(void 0),n._inFlightWriteRequest=void 0;}u(li,"WritableStreamFinishInFlightWrite");function fi(n,o){n._inFlightWriteRequest._reject(o),n._inFlightWriteRequest=void 0,Sr(n,o);}u(fi,"WritableStreamFinishInFlightWriteWithError");function ci(n){n._inFlightCloseRequest._resolve(void 0),n._inFlightCloseRequest=void 0,n._state==="erroring"&&(n._storedError=void 0,n._pendingAbortRequest!==void 0&&(n._pendingAbortRequest._resolve(),n._pendingAbortRequest=void 0)),n._state="closed";const a=n._writer;a!==void 0&&eo(a);}u(ci,"WritableStreamFinishInFlightClose");function di(n,o){n._inFlightCloseRequest._reject(o),n._inFlightCloseRequest=void 0,n._pendingAbortRequest!==void 0&&(n._pendingAbortRequest._reject(o),n._pendingAbortRequest=void 0),Sr(n,o);}u(di,"WritableStreamFinishInFlightCloseWithError");function be(n){return !(n._closeRequest===void 0&&n._inFlightCloseRequest===void 0)}u(be,"WritableStreamCloseQueuedOrInFlight");function hi(n){return !(n._inFlightWriteRequest===void 0&&n._inFlightCloseRequest===void 0)}u(hi,"WritableStreamHasOperationMarkedInFlight");function pi(n){n._inFlightCloseRequest=n._closeRequest,n._closeRequest=void 0;}u(pi,"WritableStreamMarkCloseRequestInFlight");function bi(n){n._inFlightWriteRequest=n._writeRequests.shift();}u(bi,"WritableStreamMarkFirstWriteRequestInFlight");function jt(n){n._closeRequest!==void 0&&(n._closeRequest._reject(n._storedError),n._closeRequest=void 0);const o=n._writer;o!==void 0&&Er(o,n._storedError);}u(jt,"WritableStreamRejectCloseAndClosedPromiseIfNeeded");function Tr(n,o){const a=n._writer;a!==void 0&&o!==n._backpressure&&(o?Ai(a):Br(a)),n._backpressure=o;}u(Tr,"WritableStreamUpdateBackpressure");const Ur=class Ur{constructor(o){if(_e(o,1,"WritableStreamDefaultWriter"),Mn(o,"First parameter"),Qe(o))throw new TypeError("This stream has already been locked for exclusive writing by another writer");this._ownerWritableStream=o,o._writer=this;const a=o._state;if(a==="writable")!be(o)&&o._backpressure?Mt(this):to(this),Dt(this);else if(a==="erroring")Ar(this,o._storedError),Dt(this);else if(a==="closed")to(this),vi(this);else {const p=o._storedError;Ar(this,p),Xn(this,p);}}get closed(){return je(this)?this._closedPromise:C(Ie("closed"))}get desiredSize(){if(!je(this))throw Ie("desiredSize");if(this._ownerWritableStream===void 0)throw dt("desiredSize");return _i(this)}get ready(){return je(this)?this._readyPromise:C(Ie("ready"))}abort(o=void 0){return je(this)?this._ownerWritableStream===void 0?C(dt("abort")):mi(this,o):C(Ie("abort"))}close(){if(!je(this))return C(Ie("close"));const o=this._ownerWritableStream;return o===void 0?C(dt("close")):be(o)?C(new TypeError("Cannot close an already-closing stream")):Hn(this)}releaseLock(){if(!je(this))throw Ie("releaseLock");this._ownerWritableStream!==void 0&&Qn(this);}write(o=void 0){return je(this)?this._ownerWritableStream===void 0?C(dt("write to")):Gn(this,o):C(Ie("write"))}};u(Ur,"WritableStreamDefaultWriter");let se=Ur;Object.defineProperties(se.prototype,{abort:{enumerable:!0},close:{enumerable:!0},releaseLock:{enumerable:!0},write:{enumerable:!0},closed:{enumerable:!0},desiredSize:{enumerable:!0},ready:{enumerable:!0}}),R(se.prototype.abort,"abort"),R(se.prototype.close,"close"),R(se.prototype.releaseLock,"releaseLock"),R(se.prototype.write,"write"),typeof b.toStringTag=="symbol"&&Object.defineProperty(se.prototype,b.toStringTag,{value:"WritableStreamDefaultWriter",configurable:!0});function je(n){return !S(n)||!Object.prototype.hasOwnProperty.call(n,"_ownerWritableStream")?!1:n instanceof se}u(je,"IsWritableStreamDefaultWriter");function mi(n,o){const a=n._ownerWritableStream;return Ft(a,o)}u(mi,"WritableStreamDefaultWriterAbort");function Hn(n){const o=n._ownerWritableStream;return Nn(o)}u(Hn,"WritableStreamDefaultWriterClose");function yi(n){const o=n._ownerWritableStream,a=o._state;return be(o)||a==="closed"?A(void 0):a==="errored"?C(o._storedError):Hn(n)}u(yi,"WritableStreamDefaultWriterCloseWithErrorPropagation");function gi(n,o){n._closedPromiseState==="pending"?Er(n,o):Ei(n,o);}u(gi,"WritableStreamDefaultWriterEnsureClosedPromiseRejected");function Vn(n,o){n._readyPromiseState==="pending"?ro(n,o):Bi(n,o);}u(Vn,"WritableStreamDefaultWriterEnsureReadyPromiseRejected");function _i(n){const o=n._ownerWritableStream,a=o._state;return a==="errored"||a==="erroring"?null:a==="closed"?0:Kn(o._writableStreamController)}u(_i,"WritableStreamDefaultWriterGetDesiredSize");function Qn(n){const o=n._ownerWritableStream,a=new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");Vn(n,a),gi(n,a),o._writer=void 0,n._ownerWritableStream=void 0;}u(Qn,"WritableStreamDefaultWriterRelease");function Gn(n,o){const a=n._ownerWritableStream,p=a._writableStreamController,y=Ri(p,o);if(a!==n._ownerWritableStream)return C(dt("write to"));const _=a._state;if(_==="errored")return C(a._storedError);if(be(a)||_==="closed")return C(new TypeError("The stream is closing or closed and cannot be written to"));if(_==="erroring")return C(a._storedError);const w=ui(a);return Ti(p,o,y),w}u(Gn,"WritableStreamDefaultWriterWrite");const Yn={},Nr=class Nr{constructor(){throw new TypeError("Illegal constructor")}get abortReason(){if(!Cr(this))throw vr("abortReason");return this._abortReason}get signal(){if(!Cr(this))throw vr("signal");if(this._abortController===void 0)throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");return this._abortController.signal}error(o=void 0){if(!Cr(this))throw vr("error");this._controlledWritableStream._state==="writable"&&Jn(this,o);}[nn](o){const a=this._abortAlgorithm(o);return It(this),a}[on](){Ae(this);}};u(Nr,"WritableStreamDefaultController");let Be=Nr;Object.defineProperties(Be.prototype,{abortReason:{enumerable:!0},signal:{enumerable:!0},error:{enumerable:!0}}),typeof b.toStringTag=="symbol"&&Object.defineProperty(Be.prototype,b.toStringTag,{value:"WritableStreamDefaultController",configurable:!0});function Cr(n){return !S(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledWritableStream")?!1:n instanceof Be}u(Cr,"IsWritableStreamDefaultController");function Zn(n,o,a,p,y,_,w,P){o._controlledWritableStream=n,n._writableStreamController=o,o._queue=void 0,o._queueTotalSize=void 0,Ae(o),o._abortReason=void 0,o._abortController=si(),o._started=!1,o._strategySizeAlgorithm=P,o._strategyHWM=w,o._writeAlgorithm=p,o._closeAlgorithm=y,o._abortAlgorithm=_;const k=Pr(o);Tr(n,k);const v=a(),W=A(v);$(W,()=>(o._started=!0,Lt(o),null),O=>(o._started=!0,Sr(n,O),null));}u(Zn,"SetUpWritableStreamDefaultController");function Si(n,o,a,p){const y=Object.create(Be.prototype);let _,w,P,k;o.start!==void 0?_=u(()=>o.start(y),"startAlgorithm"):_=u(()=>{},"startAlgorithm"),o.write!==void 0?w=u(v=>o.write(v,y),"writeAlgorithm"):w=u(()=>A(void 0),"writeAlgorithm"),o.close!==void 0?P=u(()=>o.close(),"closeAlgorithm"):P=u(()=>A(void 0),"closeAlgorithm"),o.abort!==void 0?k=u(v=>o.abort(v),"abortAlgorithm"):k=u(()=>A(void 0),"abortAlgorithm"),Zn(n,y,_,w,P,k,a,p);}u(Si,"SetUpWritableStreamDefaultControllerFromUnderlyingSink");function It(n){n._writeAlgorithm=void 0,n._closeAlgorithm=void 0,n._abortAlgorithm=void 0,n._strategySizeAlgorithm=void 0;}u(It,"WritableStreamDefaultControllerClearAlgorithms");function wi(n){dr(n,Yn,0),Lt(n);}u(wi,"WritableStreamDefaultControllerClose");function Ri(n,o){try{return n._strategySizeAlgorithm(o)}catch(a){return ct(n,a),1}}u(Ri,"WritableStreamDefaultControllerGetChunkSize");function Kn(n){return n._strategyHWM-n._queueTotalSize}u(Kn,"WritableStreamDefaultControllerGetDesiredSize");function Ti(n,o,a){try{dr(n,o,a);}catch(y){ct(n,y);return}const p=n._controlledWritableStream;if(!be(p)&&p._state==="writable"){const y=Pr(n);Tr(p,y);}Lt(n);}u(Ti,"WritableStreamDefaultControllerWrite");function Lt(n){const o=n._controlledWritableStream;if(!n._started||o._inFlightWriteRequest!==void 0)return;if(o._state==="erroring"){Rr(o);return}if(n._queue.length===0)return;const p=Io(n);p===Yn?Ci(n):Pi(n,p);}u(Lt,"WritableStreamDefaultControllerAdvanceQueueIfNeeded");function ct(n,o){n._controlledWritableStream._state==="writable"&&Jn(n,o);}u(ct,"WritableStreamDefaultControllerErrorIfNeeded");function Ci(n){const o=n._controlledWritableStream;pi(o),cr(n);const a=n._closeAlgorithm();It(n),$(a,()=>(ci(o),null),p=>(di(o,p),null));}u(Ci,"WritableStreamDefaultControllerProcessClose");function Pi(n,o){const a=n._controlledWritableStream;bi(a);const p=n._writeAlgorithm(o);$(p,()=>{li(a);const y=a._state;if(cr(n),!be(a)&&y==="writable"){const _=Pr(n);Tr(a,_);}return Lt(n),null},y=>(a._state==="writable"&&It(n),fi(a,y),null));}u(Pi,"WritableStreamDefaultControllerProcessWrite");function Pr(n){return Kn(n)<=0}u(Pr,"WritableStreamDefaultControllerGetBackpressure");function Jn(n,o){const a=n._controlledWritableStream;It(n),wr(a,o);}u(Jn,"WritableStreamDefaultControllerError");function $t(n){return new TypeError(`WritableStream.prototype.${n} can only be used on a WritableStream`)}u($t,"streamBrandCheckException$2");function vr(n){return new TypeError(`WritableStreamDefaultController.prototype.${n} can only be used on a WritableStreamDefaultController`)}u(vr,"defaultControllerBrandCheckException$2");function Ie(n){return new TypeError(`WritableStreamDefaultWriter.prototype.${n} can only be used on a WritableStreamDefaultWriter`)}u(Ie,"defaultWriterBrandCheckException");function dt(n){return new TypeError("Cannot "+n+" a stream using a released writer")}u(dt,"defaultWriterLockException");function Dt(n){n._closedPromise=j((o,a)=>{n._closedPromise_resolve=o,n._closedPromise_reject=a,n._closedPromiseState="pending";});}u(Dt,"defaultWriterClosedPromiseInitialize");function Xn(n,o){Dt(n),Er(n,o);}u(Xn,"defaultWriterClosedPromiseInitializeAsRejected");function vi(n){Dt(n),eo(n);}u(vi,"defaultWriterClosedPromiseInitializeAsResolved");function Er(n,o){n._closedPromise_reject!==void 0&&(Pe(n._closedPromise),n._closedPromise_reject(o),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0,n._closedPromiseState="rejected");}u(Er,"defaultWriterClosedPromiseReject");function Ei(n,o){Xn(n,o);}u(Ei,"defaultWriterClosedPromiseResetToRejected");function eo(n){n._closedPromise_resolve!==void 0&&(n._closedPromise_resolve(void 0),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0,n._closedPromiseState="resolved");}u(eo,"defaultWriterClosedPromiseResolve");function Mt(n){n._readyPromise=j((o,a)=>{n._readyPromise_resolve=o,n._readyPromise_reject=a;}),n._readyPromiseState="pending";}u(Mt,"defaultWriterReadyPromiseInitialize");function Ar(n,o){Mt(n),ro(n,o);}u(Ar,"defaultWriterReadyPromiseInitializeAsRejected");function to(n){Mt(n),Br(n);}u(to,"defaultWriterReadyPromiseInitializeAsResolved");function ro(n,o){n._readyPromise_reject!==void 0&&(Pe(n._readyPromise),n._readyPromise_reject(o),n._readyPromise_resolve=void 0,n._readyPromise_reject=void 0,n._readyPromiseState="rejected");}u(ro,"defaultWriterReadyPromiseReject");function Ai(n){Mt(n);}u(Ai,"defaultWriterReadyPromiseReset");function Bi(n,o){Ar(n,o);}u(Bi,"defaultWriterReadyPromiseResetToRejected");function Br(n){n._readyPromise_resolve!==void 0&&(n._readyPromise_resolve(void 0),n._readyPromise_resolve=void 0,n._readyPromise_reject=void 0,n._readyPromiseState="fulfilled");}u(Br,"defaultWriterReadyPromiseResolve");function qi(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof _commonjsHelpers.commonjsGlobal<"u")return _commonjsHelpers.commonjsGlobal}u(qi,"getGlobals");const qr=qi();function ki(n){if(!(typeof n=="function"||typeof n=="object")||n.name!=="DOMException")return !1;try{return new n,!0}catch{return !1}}u(ki,"isDOMExceptionConstructor");function Wi(){const n=qr?.DOMException;return ki(n)?n:void 0}u(Wi,"getFromGlobal");function Oi(){const n=u(function(a,p){this.message=a||"",this.name=p||"Error",Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor);},"DOMException");return R(n,"DOMException"),n.prototype=Object.create(Error.prototype),Object.defineProperty(n.prototype,"constructor",{value:n,writable:!0,configurable:!0}),n}u(Oi,"createPolyfill");const zi=Wi()||Oi();function no(n,o,a,p,y,_){const w=Ne(n),P=xn(o);n._disturbed=!0;let k=!1,v=A(void 0);return j((W,O)=>{let I;if(_!==void 0){if(I=u(()=>{const E=_.reason!==void 0?_.reason:new zi("Aborted","AbortError"),z=[];p||z.push(()=>o._state==="writable"?Ft(o,E):A(void 0)),y||z.push(()=>n._state==="readable"?le(n,E):A(void 0)),K(()=>Promise.all(z.map(L=>L())),!0,E);},"abortAlgorithm"),_.aborted){I();return}_.addEventListener("abort",I);}function fe(){return j((E,z)=>{function L(X){X?E():q(et(),L,z);}u(L,"next"),L(!1);})}u(fe,"pipeLoop");function et(){return k?A(!0):q(P._readyPromise,()=>j((E,z)=>{st(w,{_chunkSteps:L=>{v=q(Gn(P,L),void 0,g),E(!1);},_closeSteps:()=>E(!0),_errorSteps:z});}))}if(u(et,"pipeStep"),Re(n,w._closedPromise,E=>(p?re(!0,E):K(()=>Ft(o,E),!0,E),null)),Re(o,P._closedPromise,E=>(y?re(!0,E):K(()=>le(n,E),!0,E),null)),Z(n,w._closedPromise,()=>(a?re():K(()=>yi(P)),null)),be(o)||o._state==="closed"){const E=new TypeError("the destination writable stream closed before all data could be piped to it");y?re(!0,E):K(()=>le(n,E),!0,E);}Pe(fe());function We(){const E=v;return q(v,()=>E!==v?We():void 0)}u(We,"waitForWritesToFinish");function Re(E,z,L){E._state==="errored"?L(E._storedError):J(z,L);}u(Re,"isOrBecomesErrored");function Z(E,z,L){E._state==="closed"?L():N(z,L);}u(Z,"isOrBecomesClosed");function K(E,z,L){if(k)return;k=!0,o._state==="writable"&&!be(o)?N(We(),X):X();function X(){return $(E(),()=>Te(z,L),tt=>Te(!0,tt)),null}u(X,"doTheRest");}u(K,"shutdownWithAction");function re(E,z){k||(k=!0,o._state==="writable"&&!be(o)?N(We(),()=>Te(E,z)):Te(E,z));}u(re,"shutdown");function Te(E,z){return Qn(P),ge(w),_!==void 0&&_.removeEventListener("abort",I),E?O(z):W(void 0),null}u(Te,"finalize");})}u(no,"ReadableStreamPipeTo");const Hr=class Hr{constructor(){throw new TypeError("Illegal constructor")}get desiredSize(){if(!xt(this))throw Nt("desiredSize");return kr(this)}close(){if(!xt(this))throw Nt("close");if(!Ye(this))throw new TypeError("The stream is not in a state that permits close");Le(this);}enqueue(o=void 0){if(!xt(this))throw Nt("enqueue");if(!Ye(this))throw new TypeError("The stream is not in a state that permits enqueue");return Ge(this,o)}error(o=void 0){if(!xt(this))throw Nt("error");ue(this,o);}[er](o){Ae(this);const a=this._cancelAlgorithm(o);return Ut(this),a}[tr](o){const a=this._controlledReadableStream;if(this._queue.length>0){const p=cr(this);this._closeRequested&&this._queue.length===0?(Ut(this),bt(a)):ht(this),o._chunkSteps(p);}else dn(a,o),ht(this);}[rr](){}};u(Hr,"ReadableStreamDefaultController");let ae=Hr;Object.defineProperties(ae.prototype,{close:{enumerable:!0},enqueue:{enumerable:!0},error:{enumerable:!0},desiredSize:{enumerable:!0}}),R(ae.prototype.close,"close"),R(ae.prototype.enqueue,"enqueue"),R(ae.prototype.error,"error"),typeof b.toStringTag=="symbol"&&Object.defineProperty(ae.prototype,b.toStringTag,{value:"ReadableStreamDefaultController",configurable:!0});function xt(n){return !S(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledReadableStream")?!1:n instanceof ae}u(xt,"IsReadableStreamDefaultController");function ht(n){if(!oo(n))return;if(n._pulling){n._pullAgain=!0;return}n._pulling=!0;const a=n._pullAlgorithm();$(a,()=>(n._pulling=!1,n._pullAgain&&(n._pullAgain=!1,ht(n)),null),p=>(ue(n,p),null));}u(ht,"ReadableStreamDefaultControllerCallPullIfNeeded");function oo(n){const o=n._controlledReadableStream;return !Ye(n)||!n._started?!1:!!(ke(o)&&Tt(o)>0||kr(n)>0)}u(oo,"ReadableStreamDefaultControllerShouldCallPull");function Ut(n){n._pullAlgorithm=void 0,n._cancelAlgorithm=void 0,n._strategySizeAlgorithm=void 0;}u(Ut,"ReadableStreamDefaultControllerClearAlgorithms");function Le(n){if(!Ye(n))return;const o=n._controlledReadableStream;n._closeRequested=!0,n._queue.length===0&&(Ut(n),bt(o));}u(Le,"ReadableStreamDefaultControllerClose");function Ge(n,o){if(!Ye(n))return;const a=n._controlledReadableStream;if(ke(a)&&Tt(a)>0)fr(a,o,!1);else {let p;try{p=n._strategySizeAlgorithm(o);}catch(y){throw ue(n,y),y}try{dr(n,o,p);}catch(y){throw ue(n,y),y}}ht(n);}u(Ge,"ReadableStreamDefaultControllerEnqueue");function ue(n,o){const a=n._controlledReadableStream;a._state==="readable"&&(Ae(n),Ut(n),uo(a,o));}u(ue,"ReadableStreamDefaultControllerError");function kr(n){const o=n._controlledReadableStream._state;return o==="errored"?null:o==="closed"?0:n._strategyHWM-n._queueTotalSize}u(kr,"ReadableStreamDefaultControllerGetDesiredSize");function Fi(n){return !oo(n)}u(Fi,"ReadableStreamDefaultControllerHasBackpressure");function Ye(n){const o=n._controlledReadableStream._state;return !n._closeRequested&&o==="readable"}u(Ye,"ReadableStreamDefaultControllerCanCloseOrEnqueue");function io(n,o,a,p,y,_,w){o._controlledReadableStream=n,o._queue=void 0,o._queueTotalSize=void 0,Ae(o),o._started=!1,o._closeRequested=!1,o._pullAgain=!1,o._pulling=!1,o._strategySizeAlgorithm=w,o._strategyHWM=_,o._pullAlgorithm=p,o._cancelAlgorithm=y,n._readableStreamController=o;const P=a();$(A(P),()=>(o._started=!0,ht(o),null),k=>(ue(o,k),null));}u(io,"SetUpReadableStreamDefaultController");function ji(n,o,a,p){const y=Object.create(ae.prototype);let _,w,P;o.start!==void 0?_=u(()=>o.start(y),"startAlgorithm"):_=u(()=>{},"startAlgorithm"),o.pull!==void 0?w=u(()=>o.pull(y),"pullAlgorithm"):w=u(()=>A(void 0),"pullAlgorithm"),o.cancel!==void 0?P=u(k=>o.cancel(k),"cancelAlgorithm"):P=u(()=>A(void 0),"cancelAlgorithm"),io(n,y,_,w,P,a,p);}u(ji,"SetUpReadableStreamDefaultControllerFromUnderlyingSource");function Nt(n){return new TypeError(`ReadableStreamDefaultController.prototype.${n} can only be used on a ReadableStreamDefaultController`)}u(Nt,"defaultControllerBrandCheckException$1");function Ii(n,o){return Oe(n._readableStreamController)?$i(n):Li(n)}u(Ii,"ReadableStreamTee");function Li(n,o){const a=Ne(n);let p=!1,y=!1,_=!1,w=!1,P,k,v,W,O;const I=j(Z=>{O=Z;});function fe(){return p?(y=!0,A(void 0)):(p=!0,st(a,{_chunkSteps:K=>{M(()=>{y=!1;const re=K,Te=K;_||Ge(v._readableStreamController,re),w||Ge(W._readableStreamController,Te),p=!1,y&&fe();});},_closeSteps:()=>{p=!1,_||Le(v._readableStreamController),w||Le(W._readableStreamController),(!_||!w)&&O(void 0);},_errorSteps:()=>{p=!1;}}),A(void 0))}u(fe,"pullAlgorithm");function et(Z){if(_=!0,P=Z,w){const K=at([P,k]),re=le(n,K);O(re);}return I}u(et,"cancel1Algorithm");function We(Z){if(w=!0,k=Z,_){const K=at([P,k]),re=le(n,K);O(re);}return I}u(We,"cancel2Algorithm");function Re(){}return u(Re,"startAlgorithm"),v=pt(Re,fe,et),W=pt(Re,fe,We),J(a._closedPromise,Z=>(ue(v._readableStreamController,Z),ue(W._readableStreamController,Z),(!_||!w)&&O(void 0),null)),[v,W]}u(Li,"ReadableStreamDefaultTee");function $i(n){let o=Ne(n),a=!1,p=!1,y=!1,_=!1,w=!1,P,k,v,W,O;const I=j(E=>{O=E;});function fe(E){J(E._closedPromise,z=>(E!==o||(te(v._readableStreamController,z),te(W._readableStreamController,z),(!_||!w)&&O(void 0)),null));}u(fe,"forwardReaderError");function et(){Fe(o)&&(ge(o),o=Ne(n),fe(o)),st(o,{_chunkSteps:z=>{M(()=>{p=!1,y=!1;const L=z;let X=z;if(!_&&!w)try{X=Tn(z);}catch(tt){te(v._readableStreamController,tt),te(W._readableStreamController,tt),O(le(n,tt));return}_||Bt(v._readableStreamController,L),w||Bt(W._readableStreamController,X),a=!1,p?Re():y&&Z();});},_closeSteps:()=>{a=!1,_||ut(v._readableStreamController),w||ut(W._readableStreamController),v._readableStreamController._pendingPullIntos.length>0&&qt(v._readableStreamController,0),W._readableStreamController._pendingPullIntos.length>0&&qt(W._readableStreamController,0),(!_||!w)&&O(void 0);},_errorSteps:()=>{a=!1;}});}u(et,"pullWithDefaultReader");function We(E,z){ve(o)&&(ge(o),o=jn(n),fe(o));const L=z?W:v,X=z?v:W;$n(o,E,1,{_chunkSteps:rt=>{M(()=>{p=!1,y=!1;const nt=z?w:_;if(z?_:w)nt||kt(L._readableStreamController,rt);else {let Ro;try{Ro=Tn(rt);}catch(Kr){te(L._readableStreamController,Kr),te(X._readableStreamController,Kr),O(le(n,Kr));return}nt||kt(L._readableStreamController,rt),Bt(X._readableStreamController,Ro);}a=!1,p?Re():y&&Z();});},_closeSteps:rt=>{a=!1;const nt=z?w:_,Yt=z?_:w;nt||ut(L._readableStreamController),Yt||ut(X._readableStreamController),rt!==void 0&&(nt||kt(L._readableStreamController,rt),!Yt&&X._readableStreamController._pendingPullIntos.length>0&&qt(X._readableStreamController,0)),(!nt||!Yt)&&O(void 0);},_errorSteps:()=>{a=!1;}});}u(We,"pullWithBYOBReader");function Re(){if(a)return p=!0,A(void 0);a=!0;const E=yr(v._readableStreamController);return E===null?et():We(E._view,!1),A(void 0)}u(Re,"pull1Algorithm");function Z(){if(a)return y=!0,A(void 0);a=!0;const E=yr(W._readableStreamController);return E===null?et():We(E._view,!0),A(void 0)}u(Z,"pull2Algorithm");function K(E){if(_=!0,P=E,w){const z=at([P,k]),L=le(n,z);O(L);}return I}u(K,"cancel1Algorithm");function re(E){if(w=!0,k=E,_){const z=at([P,k]),L=le(n,z);O(L);}return I}u(re,"cancel2Algorithm");function Te(){}return u(Te,"startAlgorithm"),v=ao(Te,Re,K),W=ao(Te,Z,re),fe(o),[v,W]}u($i,"ReadableByteStreamTee");function Di(n){return S(n)&&typeof n.getReader<"u"}u(Di,"isReadableStreamLike");function Mi(n){return Di(n)?Ui(n.getReader()):xi(n)}u(Mi,"ReadableStreamFrom");function xi(n){let o;const a=Rn(n,"async"),p=g;function y(){let w;try{w=Oo(a);}catch(k){return C(k)}const P=A(w);return G(P,k=>{if(!S(k))throw new TypeError("The promise returned by the iterator.next() method must fulfill with an object");if(zo(k))Le(o._readableStreamController);else {const W=Fo(k);Ge(o._readableStreamController,W);}})}u(y,"pullAlgorithm");function _(w){const P=a.iterator;let k;try{k=vt(P,"return");}catch(O){return C(O)}if(k===void 0)return A(void 0);let v;try{v=H(k,P,[w]);}catch(O){return C(O)}const W=A(v);return G(W,O=>{if(!S(O))throw new TypeError("The promise returned by the iterator.return() method must fulfill with an object")})}return u(_,"cancelAlgorithm"),o=pt(p,y,_,0),o}u(xi,"ReadableStreamFromIterable");function Ui(n){let o;const a=g;function p(){let _;try{_=n.read();}catch(w){return C(w)}return G(_,w=>{if(!S(w))throw new TypeError("The promise returned by the reader.read() method must fulfill with an object");if(w.done)Le(o._readableStreamController);else {const P=w.value;Ge(o._readableStreamController,P);}})}u(p,"pullAlgorithm");function y(_){try{return A(n.cancel(_))}catch(w){return C(w)}}return u(y,"cancelAlgorithm"),o=pt(a,p,y,0),o}u(Ui,"ReadableStreamFromDefaultReader");function Ni(n,o){ce(n,o);const a=n,p=a?.autoAllocateChunkSize,y=a?.cancel,_=a?.pull,w=a?.start,P=a?.type;return {autoAllocateChunkSize:p===void 0?void 0:ur(p,`${o} has member 'autoAllocateChunkSize' that`),cancel:y===void 0?void 0:Hi(y,a,`${o} has member 'cancel' that`),pull:_===void 0?void 0:Vi(_,a,`${o} has member 'pull' that`),start:w===void 0?void 0:Qi(w,a,`${o} has member 'start' that`),type:P===void 0?void 0:Gi(P,`${o} has member 'type' that`)}}u(Ni,"convertUnderlyingDefaultOrByteSource");function Hi(n,o,a){return ee(n,a),p=>U(n,o,[p])}u(Hi,"convertUnderlyingSourceCancelCallback");function Vi(n,o,a){return ee(n,a),p=>U(n,o,[p])}u(Vi,"convertUnderlyingSourcePullCallback");function Qi(n,o,a){return ee(n,a),p=>H(n,o,[p])}u(Qi,"convertUnderlyingSourceStartCallback");function Gi(n,o){if(n=`${n}`,n!=="bytes")throw new TypeError(`${o} '${n}' is not a valid enumeration value for ReadableStreamType`);return n}u(Gi,"convertReadableStreamType");function Yi(n,o){return ce(n,o),{preventCancel:!!n?.preventCancel}}u(Yi,"convertIteratorOptions");function so(n,o){ce(n,o);const a=n?.preventAbort,p=n?.preventCancel,y=n?.preventClose,_=n?.signal;return _!==void 0&&Zi(_,`${o} has member 'signal' that`),{preventAbort:!!a,preventCancel:!!p,preventClose:!!y,signal:_}}u(so,"convertPipeOptions");function Zi(n,o){if(!oi(n))throw new TypeError(`${o} is not an AbortSignal.`)}u(Zi,"assertAbortSignal");function Ki(n,o){ce(n,o);const a=n?.readable;sr(a,"readable","ReadableWritablePair"),lr(a,`${o} has member 'readable' that`);const p=n?.writable;return sr(p,"writable","ReadableWritablePair"),Mn(p,`${o} has member 'writable' that`),{readable:a,writable:p}}u(Ki,"convertReadableWritablePair");const Vr=class Vr{constructor(o={},a={}){o===void 0?o=null:fn(o,"First parameter");const p=zt(a,"Second parameter"),y=Ni(o,"First parameter");if(Wr(this),y.type==="bytes"){if(p.size!==void 0)throw new RangeError("The strategy for a byte stream cannot have a size function");const _=ft(p,0);Ho(this,y,_);}else {const _=Ot(p),w=ft(p,1);ji(this,y,w,_);}}get locked(){if(!qe(this))throw $e("locked");return ke(this)}cancel(o=void 0){return qe(this)?ke(this)?C(new TypeError("Cannot cancel a stream that already has a reader")):le(this,o):C($e("cancel"))}getReader(o=void 0){if(!qe(this))throw $e("getReader");return Qo(o,"First parameter").mode===void 0?Ne(this):jn(this)}pipeThrough(o,a={}){if(!qe(this))throw $e("pipeThrough");_e(o,1,"pipeThrough");const p=Ki(o,"First parameter"),y=so(a,"Second parameter");if(ke(this))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");if(Qe(p.writable))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");const _=no(this,p.writable,y.preventClose,y.preventAbort,y.preventCancel,y.signal);return Pe(_),p.readable}pipeTo(o,a={}){if(!qe(this))return C($e("pipeTo"));if(o===void 0)return C("Parameter 1 is required in 'pipeTo'.");if(!Ve(o))return C(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));let p;try{p=so(a,"Second parameter");}catch(y){return C(y)}return ke(this)?C(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")):Qe(o)?C(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")):no(this,o,p.preventClose,p.preventAbort,p.preventCancel,p.signal)}tee(){if(!qe(this))throw $e("tee");const o=Ii(this);return at(o)}values(o=void 0){if(!qe(this))throw $e("values");const a=Yi(o,"First parameter");return ko(this,a.preventCancel)}static from(o){return Mi(o)}};u(Vr,"ReadableStream");let V=Vr;Object.defineProperties(V,{from:{enumerable:!0}}),Object.defineProperties(V.prototype,{cancel:{enumerable:!0},getReader:{enumerable:!0},pipeThrough:{enumerable:!0},pipeTo:{enumerable:!0},tee:{enumerable:!0},values:{enumerable:!0},locked:{enumerable:!0}}),R(V.from,"from"),R(V.prototype.cancel,"cancel"),R(V.prototype.getReader,"getReader"),R(V.prototype.pipeThrough,"pipeThrough"),R(V.prototype.pipeTo,"pipeTo"),R(V.prototype.tee,"tee"),R(V.prototype.values,"values"),typeof b.toStringTag=="symbol"&&Object.defineProperty(V.prototype,b.toStringTag,{value:"ReadableStream",configurable:!0}),typeof b.asyncIterator=="symbol"&&Object.defineProperty(V.prototype,b.asyncIterator,{value:V.prototype.values,writable:!0,configurable:!0});function pt(n,o,a,p=1,y=()=>1){const _=Object.create(V.prototype);Wr(_);const w=Object.create(ae.prototype);return io(_,w,n,o,a,p,y),_}u(pt,"CreateReadableStream");function ao(n,o,a){const p=Object.create(V.prototype);Wr(p);const y=Object.create(ie.prototype);return Fn(p,y,n,o,a,0,void 0),p}u(ao,"CreateReadableByteStream");function Wr(n){n._state="readable",n._reader=void 0,n._storedError=void 0,n._disturbed=!1;}u(Wr,"InitializeReadableStream");function qe(n){return !S(n)||!Object.prototype.hasOwnProperty.call(n,"_readableStreamController")?!1:n instanceof V}u(qe,"IsReadableStream");function ke(n){return n._reader!==void 0}u(ke,"IsReadableStreamLocked");function le(n,o){if(n._disturbed=!0,n._state==="closed")return A(void 0);if(n._state==="errored")return C(n._storedError);bt(n);const a=n._reader;if(a!==void 0&&Fe(a)){const y=a._readIntoRequests;a._readIntoRequests=new Y,y.forEach(_=>{_._closeSteps(void 0);});}const p=n._readableStreamController[er](o);return G(p,g)}u(le,"ReadableStreamCancel");function bt(n){n._state="closed";const o=n._reader;if(o!==void 0&&(un(o),ve(o))){const a=o._readRequests;o._readRequests=new Y,a.forEach(p=>{p._closeSteps();});}}u(bt,"ReadableStreamClose");function uo(n,o){n._state="errored",n._storedError=o;const a=n._reader;a!==void 0&&(ir(a,o),ve(a)?pn(a,o):Dn(a,o));}u(uo,"ReadableStreamError");function $e(n){return new TypeError(`ReadableStream.prototype.${n} can only be used on a ReadableStream`)}u($e,"streamBrandCheckException$1");function lo(n,o){ce(n,o);const a=n?.highWaterMark;return sr(a,"highWaterMark","QueuingStrategyInit"),{highWaterMark:ar(a)}}u(lo,"convertQueuingStrategyInit");const fo=u(n=>n.byteLength,"byteLengthSizeFunction");R(fo,"size");const Qr=class Qr{constructor(o){_e(o,1,"ByteLengthQueuingStrategy"),o=lo(o,"First parameter"),this._byteLengthQueuingStrategyHighWaterMark=o.highWaterMark;}get highWaterMark(){if(!ho(this))throw co("highWaterMark");return this._byteLengthQueuingStrategyHighWaterMark}get size(){if(!ho(this))throw co("size");return fo}};u(Qr,"ByteLengthQueuingStrategy");let Ze=Qr;Object.defineProperties(Ze.prototype,{highWaterMark:{enumerable:!0},size:{enumerable:!0}}),typeof b.toStringTag=="symbol"&&Object.defineProperty(Ze.prototype,b.toStringTag,{value:"ByteLengthQueuingStrategy",configurable:!0});function co(n){return new TypeError(`ByteLengthQueuingStrategy.prototype.${n} can only be used on a ByteLengthQueuingStrategy`)}u(co,"byteLengthBrandCheckException");function ho(n){return !S(n)||!Object.prototype.hasOwnProperty.call(n,"_byteLengthQueuingStrategyHighWaterMark")?!1:n instanceof Ze}u(ho,"IsByteLengthQueuingStrategy");const po=u(()=>1,"countSizeFunction");R(po,"size");const Gr=class Gr{constructor(o){_e(o,1,"CountQueuingStrategy"),o=lo(o,"First parameter"),this._countQueuingStrategyHighWaterMark=o.highWaterMark;}get highWaterMark(){if(!mo(this))throw bo("highWaterMark");return this._countQueuingStrategyHighWaterMark}get size(){if(!mo(this))throw bo("size");return po}};u(Gr,"CountQueuingStrategy");let Ke=Gr;Object.defineProperties(Ke.prototype,{highWaterMark:{enumerable:!0},size:{enumerable:!0}}),typeof b.toStringTag=="symbol"&&Object.defineProperty(Ke.prototype,b.toStringTag,{value:"CountQueuingStrategy",configurable:!0});function bo(n){return new TypeError(`CountQueuingStrategy.prototype.${n} can only be used on a CountQueuingStrategy`)}u(bo,"countBrandCheckException");function mo(n){return !S(n)||!Object.prototype.hasOwnProperty.call(n,"_countQueuingStrategyHighWaterMark")?!1:n instanceof Ke}u(mo,"IsCountQueuingStrategy");function Ji(n,o){ce(n,o);const a=n?.cancel,p=n?.flush,y=n?.readableType,_=n?.start,w=n?.transform,P=n?.writableType;return {cancel:a===void 0?void 0:rs(a,n,`${o} has member 'cancel' that`),flush:p===void 0?void 0:Xi(p,n,`${o} has member 'flush' that`),readableType:y,start:_===void 0?void 0:es(_,n,`${o} has member 'start' that`),transform:w===void 0?void 0:ts(w,n,`${o} has member 'transform' that`),writableType:P}}u(Ji,"convertTransformer");function Xi(n,o,a){return ee(n,a),p=>U(n,o,[p])}u(Xi,"convertTransformerFlushCallback");function es(n,o,a){return ee(n,a),p=>H(n,o,[p])}u(es,"convertTransformerStartCallback");function ts(n,o,a){return ee(n,a),(p,y)=>U(n,o,[p,y])}u(ts,"convertTransformerTransformCallback");function rs(n,o,a){return ee(n,a),p=>U(n,o,[p])}u(rs,"convertTransformerCancelCallback");const Yr=class Yr{constructor(o={},a={},p={}){o===void 0&&(o=null);const y=zt(a,"Second parameter"),_=zt(p,"Third parameter"),w=Ji(o,"First parameter");if(w.readableType!==void 0)throw new RangeError("Invalid readableType specified");if(w.writableType!==void 0)throw new RangeError("Invalid writableType specified");const P=ft(_,0),k=Ot(_),v=ft(y,1),W=Ot(y);let O;const I=j(fe=>{O=fe;});ns(this,I,v,W,P,k),is(this,w),w.start!==void 0?O(w.start(this._transformStreamController)):O(void 0);}get readable(){if(!yo(this))throw wo("readable");return this._readable}get writable(){if(!yo(this))throw wo("writable");return this._writable}};u(Yr,"TransformStream");let Je=Yr;Object.defineProperties(Je.prototype,{readable:{enumerable:!0},writable:{enumerable:!0}}),typeof b.toStringTag=="symbol"&&Object.defineProperty(Je.prototype,b.toStringTag,{value:"TransformStream",configurable:!0});function ns(n,o,a,p,y,_){function w(){return o}u(w,"startAlgorithm");function P(I){return us(n,I)}u(P,"writeAlgorithm");function k(I){return ls(n,I)}u(k,"abortAlgorithm");function v(){return fs(n)}u(v,"closeAlgorithm"),n._writable=ai(w,P,v,k,a,p);function W(){return cs(n)}u(W,"pullAlgorithm");function O(I){return ds(n,I)}u(O,"cancelAlgorithm"),n._readable=pt(w,W,O,y,_),n._backpressure=void 0,n._backpressureChangePromise=void 0,n._backpressureChangePromise_resolve=void 0,Ht(n,!0),n._transformStreamController=void 0;}u(ns,"InitializeTransformStream");function yo(n){return !S(n)||!Object.prototype.hasOwnProperty.call(n,"_transformStreamController")?!1:n instanceof Je}u(yo,"IsTransformStream");function go(n,o){ue(n._readable._readableStreamController,o),Or(n,o);}u(go,"TransformStreamError");function Or(n,o){Qt(n._transformStreamController),ct(n._writable._writableStreamController,o),zr(n);}u(Or,"TransformStreamErrorWritableAndUnblockWrite");function zr(n){n._backpressure&&Ht(n,!1);}u(zr,"TransformStreamUnblockWrite");function Ht(n,o){n._backpressureChangePromise!==void 0&&n._backpressureChangePromise_resolve(),n._backpressureChangePromise=j(a=>{n._backpressureChangePromise_resolve=a;}),n._backpressure=o;}u(Ht,"TransformStreamSetBackpressure");const Zr=class Zr{constructor(){throw new TypeError("Illegal constructor")}get desiredSize(){if(!Vt(this))throw Gt("desiredSize");const o=this._controlledTransformStream._readable._readableStreamController;return kr(o)}enqueue(o=void 0){if(!Vt(this))throw Gt("enqueue");_o(this,o);}error(o=void 0){if(!Vt(this))throw Gt("error");ss(this,o);}terminate(){if(!Vt(this))throw Gt("terminate");as(this);}};u(Zr,"TransformStreamDefaultController");let me=Zr;Object.defineProperties(me.prototype,{enqueue:{enumerable:!0},error:{enumerable:!0},terminate:{enumerable:!0},desiredSize:{enumerable:!0}}),R(me.prototype.enqueue,"enqueue"),R(me.prototype.error,"error"),R(me.prototype.terminate,"terminate"),typeof b.toStringTag=="symbol"&&Object.defineProperty(me.prototype,b.toStringTag,{value:"TransformStreamDefaultController",configurable:!0});function Vt(n){return !S(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledTransformStream")?!1:n instanceof me}u(Vt,"IsTransformStreamDefaultController");function os(n,o,a,p,y){o._controlledTransformStream=n,n._transformStreamController=o,o._transformAlgorithm=a,o._flushAlgorithm=p,o._cancelAlgorithm=y,o._finishPromise=void 0,o._finishPromise_resolve=void 0,o._finishPromise_reject=void 0;}u(os,"SetUpTransformStreamDefaultController");function is(n,o){const a=Object.create(me.prototype);let p,y,_;o.transform!==void 0?p=u(w=>o.transform(w,a),"transformAlgorithm"):p=u(w=>{try{return _o(a,w),A(void 0)}catch(P){return C(P)}},"transformAlgorithm"),o.flush!==void 0?y=u(()=>o.flush(a),"flushAlgorithm"):y=u(()=>A(void 0),"flushAlgorithm"),o.cancel!==void 0?_=u(w=>o.cancel(w),"cancelAlgorithm"):_=u(()=>A(void 0),"cancelAlgorithm"),os(n,a,p,y,_);}u(is,"SetUpTransformStreamDefaultControllerFromTransformer");function Qt(n){n._transformAlgorithm=void 0,n._flushAlgorithm=void 0,n._cancelAlgorithm=void 0;}u(Qt,"TransformStreamDefaultControllerClearAlgorithms");function _o(n,o){const a=n._controlledTransformStream,p=a._readable._readableStreamController;if(!Ye(p))throw new TypeError("Readable side is not in a state that permits enqueue");try{Ge(p,o);}catch(_){throw Or(a,_),a._readable._storedError}Fi(p)!==a._backpressure&&Ht(a,!0);}u(_o,"TransformStreamDefaultControllerEnqueue");function ss(n,o){go(n._controlledTransformStream,o);}u(ss,"TransformStreamDefaultControllerError");function So(n,o){const a=n._transformAlgorithm(o);return G(a,void 0,p=>{throw go(n._controlledTransformStream,p),p})}u(So,"TransformStreamDefaultControllerPerformTransform");function as(n){const o=n._controlledTransformStream,a=o._readable._readableStreamController;Le(a);const p=new TypeError("TransformStream terminated");Or(o,p);}u(as,"TransformStreamDefaultControllerTerminate");function us(n,o){const a=n._transformStreamController;if(n._backpressure){const p=n._backpressureChangePromise;return G(p,()=>{const y=n._writable;if(y._state==="erroring")throw y._storedError;return So(a,o)})}return So(a,o)}u(us,"TransformStreamDefaultSinkWriteAlgorithm");function ls(n,o){const a=n._transformStreamController;if(a._finishPromise!==void 0)return a._finishPromise;const p=n._readable;a._finishPromise=j((_,w)=>{a._finishPromise_resolve=_,a._finishPromise_reject=w;});const y=a._cancelAlgorithm(o);return Qt(a),$(y,()=>(p._state==="errored"?Xe(a,p._storedError):(ue(p._readableStreamController,o),Fr(a)),null),_=>(ue(p._readableStreamController,_),Xe(a,_),null)),a._finishPromise}u(ls,"TransformStreamDefaultSinkAbortAlgorithm");function fs(n){const o=n._transformStreamController;if(o._finishPromise!==void 0)return o._finishPromise;const a=n._readable;o._finishPromise=j((y,_)=>{o._finishPromise_resolve=y,o._finishPromise_reject=_;});const p=o._flushAlgorithm();return Qt(o),$(p,()=>(a._state==="errored"?Xe(o,a._storedError):(Le(a._readableStreamController),Fr(o)),null),y=>(ue(a._readableStreamController,y),Xe(o,y),null)),o._finishPromise}u(fs,"TransformStreamDefaultSinkCloseAlgorithm");function cs(n){return Ht(n,!1),n._backpressureChangePromise}u(cs,"TransformStreamDefaultSourcePullAlgorithm");function ds(n,o){const a=n._transformStreamController;if(a._finishPromise!==void 0)return a._finishPromise;const p=n._writable;a._finishPromise=j((_,w)=>{a._finishPromise_resolve=_,a._finishPromise_reject=w;});const y=a._cancelAlgorithm(o);return Qt(a),$(y,()=>(p._state==="errored"?Xe(a,p._storedError):(ct(p._writableStreamController,o),zr(n),Fr(a)),null),_=>(ct(p._writableStreamController,_),zr(n),Xe(a,_),null)),a._finishPromise}u(ds,"TransformStreamDefaultSourceCancelAlgorithm");function Gt(n){return new TypeError(`TransformStreamDefaultController.prototype.${n} can only be used on a TransformStreamDefaultController`)}u(Gt,"defaultControllerBrandCheckException");function Fr(n){n._finishPromise_resolve!==void 0&&(n._finishPromise_resolve(),n._finishPromise_resolve=void 0,n._finishPromise_reject=void 0);}u(Fr,"defaultControllerFinishPromiseResolve");function Xe(n,o){n._finishPromise_reject!==void 0&&(Pe(n._finishPromise),n._finishPromise_reject(o),n._finishPromise_resolve=void 0,n._finishPromise_reject=void 0);}u(Xe,"defaultControllerFinishPromiseReject");function wo(n){return new TypeError(`TransformStream.prototype.${n} can only be used on a TransformStream`)}u(wo,"streamBrandCheckException"),d.ByteLengthQueuingStrategy=Ze,d.CountQueuingStrategy=Ke,d.ReadableByteStreamController=ie,d.ReadableStream=V,d.ReadableStreamBYOBReader=he,d.ReadableStreamBYOBRequest=we,d.ReadableStreamDefaultController=ae,d.ReadableStreamDefaultReader=de,d.TransformStream=Je,d.TransformStreamDefaultController=me,d.WritableStream=pe,d.WritableStreamDefaultController=Be,d.WritableStreamDefaultWriter=se;});}(ponyfill_es2018,ponyfill_es2018.exports)),ponyfill_es2018.exports}u(requirePonyfill_es2018,"requirePonyfill_es2018");const POOL_SIZE$1=65536;if(!globalThis.ReadableStream)try{const c=require("node:process"),{emitWarning:l}=c;try{c.emitWarning=()=>{},Object.assign(globalThis,require("node:stream/web")),c.emitWarning=l;}catch(d){throw c.emitWarning=l,d}}catch{Object.assign(globalThis,requirePonyfill_es2018());}try{const{Blob:c}=require("buffer");c&&!c.prototype.stream&&(c.prototype.stream=u(function(d){let b=0;const g=this;return new ReadableStream({type:"bytes",async pull(S){const R=await g.slice(b,Math.min(g.size,b+POOL_SIZE$1)).arrayBuffer();b+=R.byteLength,S.enqueue(new Uint8Array(R)),b===g.size&&S.close();}})},"name"));}catch{}/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */const POOL_SIZE=65536;async function*toIterator(c,l=!0){for(const d of c)if("stream"in d)yield*d.stream();else if(ArrayBuffer.isView(d))if(l){let b=d.byteOffset;const g=d.byteOffset+d.byteLength;for(;b!==g;){const S=Math.min(g-b,POOL_SIZE),T=d.buffer.slice(b,b+S);b+=T.byteLength,yield new Uint8Array(T);}}else yield d;else {let b=0,g=d;for(;b!==g.size;){const T=await g.slice(b,Math.min(g.size,b+POOL_SIZE)).arrayBuffer();b+=T.byteLength,yield new Uint8Array(T);}}}u(toIterator,"toIterator");const _Blob=(Ue=class{constructor(l=[],d={}){ye$1(this,Ce,[]);ye$1(this,mt$1,"");ye$1(this,ot$1,0);ye$1(this,Zt$2,"transparent");if(typeof l!="object"||l===null)throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");if(typeof l[Symbol.iterator]!="function")throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");if(typeof d!="object"&&typeof d!="function")throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");d===null&&(d={});const b=new TextEncoder;for(const S of l){let T;ArrayBuffer.isView(S)?T=new Uint8Array(S.buffer.slice(S.byteOffset,S.byteOffset+S.byteLength)):S instanceof ArrayBuffer?T=new Uint8Array(S.slice(0)):S instanceof Ue?T=S:T=b.encode(`${S}`),ne$1(this,ot$1,D$2(this,ot$1)+(ArrayBuffer.isView(T)?T.byteLength:T.size)),D$2(this,Ce).push(T);}ne$1(this,Zt$2,`${d.endings===void 0?"transparent":d.endings}`);const g=d.type===void 0?"":String(d.type);ne$1(this,mt$1,/^[\x20-\x7E]*$/.test(g)?g:"");}get size(){return D$2(this,ot$1)}get type(){return D$2(this,mt$1)}async text(){const l=new TextDecoder;let d="";for await(const b of toIterator(D$2(this,Ce),!1))d+=l.decode(b,{stream:!0});return d+=l.decode(),d}async arrayBuffer(){const l=new Uint8Array(this.size);let d=0;for await(const b of toIterator(D$2(this,Ce),!1))l.set(b,d),d+=b.length;return l.buffer}stream(){const l=toIterator(D$2(this,Ce),!0);return new globalThis.ReadableStream({type:"bytes",async pull(d){const b=await l.next();b.done?d.close():d.enqueue(b.value);},async cancel(){await l.return();}})}slice(l=0,d=this.size,b=""){const{size:g}=this;let S=l<0?Math.max(g+l,0):Math.min(l,g),T=d<0?Math.max(g+d,0):Math.min(d,g);const R=Math.max(T-S,0),F=D$2(this,Ce),B=[];let Q=0;for(const A of F){if(Q>=R)break;const C=ArrayBuffer.isView(A)?A.byteLength:A.size;if(S&&C<=S)S-=C,T-=C;else {let q;ArrayBuffer.isView(A)?(q=A.subarray(S,Math.min(C,T)),Q+=q.byteLength):(q=A.slice(S,Math.min(C,T)),Q+=q.size),T-=C,B.push(q),S=0;}}const j=new Ue([],{type:String(b).toLowerCase()});return ne$1(j,ot$1,R),ne$1(j,Ce,B),j}get[Symbol.toStringTag](){return "Blob"}static[Symbol.hasInstance](l){return l&&typeof l=="object"&&typeof l.constructor=="function"&&(typeof l.stream=="function"||typeof l.arrayBuffer=="function")&&/^(Blob|File)$/.test(l[Symbol.toStringTag])}},Ce=new WeakMap,mt$1=new WeakMap,ot$1=new WeakMap,Zt$2=new WeakMap,u(Ue,"Blob"),Ue);Object.defineProperties(_Blob.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});const Blob=_Blob,r$1=Blob,_File=(_t$2=class extends r$1{constructor(d,b,g={}){if(arguments.length<2)throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);super(d,g);ye$1(this,yt$1,0);ye$1(this,gt$1,"");g===null&&(g={});const S=g.lastModified===void 0?Date.now():Number(g.lastModified);Number.isNaN(S)||ne$1(this,yt$1,S),ne$1(this,gt$1,String(b));}get name(){return D$2(this,gt$1)}get lastModified(){return D$2(this,yt$1)}get[Symbol.toStringTag](){return "File"}static[Symbol.hasInstance](d){return !!d&&d instanceof r$1&&/^(File)$/.test(d[Symbol.toStringTag])}},yt$1=new WeakMap,gt$1=new WeakMap,u(_t$2,"File"),_t$2),File=_File,File$1=File;/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */var{toStringTag:t$1,iterator:i$2,hasInstance:h}=Symbol,r=Math.random,m="append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(","),f=u((c,l,d)=>(c+="",/^(Blob|File)$/.test(l&&l[t$1])?[(d=d!==void 0?d+"":l[t$1]=="File"?l.name:"blob",c),l.name!==d||l[t$1]=="blob"?new File$1([l],d,l):l]:[c,l+""]),"f"),e$1=u((c,l)=>(l?c:c.replace(/\r?\n|\r/g,`\r
`)).replace(/\n/g,"%0A").replace(/\r/g,"%0D").replace(/"/g,"%22"),"e$1"),x=u((c,l,d)=>{if(l.length<d)throw new TypeError(`Failed to execute '${c}' on 'FormData': ${d} arguments required, but only ${l.length} present.`)},"x");const FormData$1=(St$2=class{constructor(...l){ye$1(this,oe,[]);if(l.length)throw new TypeError("Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.")}get[t$1](){return "FormData"}[i$2](){return this.entries()}static[h](l){return l&&typeof l=="object"&&l[t$1]==="FormData"&&!m.some(d=>typeof l[d]!="function")}append(...l){x("append",arguments,2),D$2(this,oe).push(f(...l));}delete(l){x("delete",arguments,1),l+="",ne$1(this,oe,D$2(this,oe).filter(([d])=>d!==l));}get(l){x("get",arguments,1),l+="";for(var d=D$2(this,oe),b=d.length,g=0;g<b;g++)if(d[g][0]===l)return d[g][1];return null}getAll(l,d){return x("getAll",arguments,1),d=[],l+="",D$2(this,oe).forEach(b=>b[0]===l&&d.push(b[1])),d}has(l){return x("has",arguments,1),l+="",D$2(this,oe).some(d=>d[0]===l)}forEach(l,d){x("forEach",arguments,1);for(var[b,g]of this)l.call(d,g,b,this);}set(...l){x("set",arguments,2);var d=[],b=!0;l=f(...l),D$2(this,oe).forEach(g=>{g[0]===l[0]?b&&(b=!d.push(l)):d.push(g);}),b&&d.push(l),ne$1(this,oe,d);}*entries(){yield*D$2(this,oe);}*keys(){for(var[l]of this)yield l;}*values(){for(var[,l]of this)yield l;}},oe=new WeakMap,u(St$2,"FormData"),St$2);function formDataToBlob(c,l=r$1){var d=`${r()}${r()}`.replace(/\./g,"").slice(-28).padStart(32,"-"),b=[],g=`--${d}\r
Content-Disposition: form-data; name="`;return c.forEach((S,T)=>typeof S=="string"?b.push(g+e$1(T)+`"\r
\r
${S.replace(/\r(?!\n)|(?<!\r)\n/g,`\r
`)}\r
`):b.push(g+e$1(T)+`"; filename="${e$1(S.name,1)}"\r
Content-Type: ${S.type||"application/octet-stream"}\r
\r
`,S,`\r
`)),b.push(`--${d}--`),new l(b,{type:"multipart/form-data; boundary="+d})}u(formDataToBlob,"formDataToBlob");const Jr=class Jr extends Error{constructor(l,d){super(l),Error.captureStackTrace(this,this.constructor),this.type=d;}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};u(Jr,"FetchBaseError");let FetchBaseError=Jr;const Xr=class Xr extends FetchBaseError{constructor(l,d,b){super(l,d),b&&(this.code=this.errno=b.code,this.erroredSysCall=b.syscall);}};u(Xr,"FetchError");let FetchError$1=Xr;const NAME=Symbol.toStringTag,isURLSearchParameters=u(c=>typeof c=="object"&&typeof c.append=="function"&&typeof c.delete=="function"&&typeof c.get=="function"&&typeof c.getAll=="function"&&typeof c.has=="function"&&typeof c.set=="function"&&typeof c.sort=="function"&&c[NAME]==="URLSearchParams","isURLSearchParameters"),isBlob=u(c=>c&&typeof c=="object"&&typeof c.arrayBuffer=="function"&&typeof c.type=="string"&&typeof c.stream=="function"&&typeof c.constructor=="function"&&/^(Blob|File)$/.test(c[NAME]),"isBlob"),isAbortSignal=u(c=>typeof c=="object"&&(c[NAME]==="AbortSignal"||c[NAME]==="EventTarget"),"isAbortSignal"),isDomainOrSubdomain=u((c,l)=>{const d=new URL(l).hostname,b=new URL(c).hostname;return d===b||d.endsWith(`.${b}`)},"isDomainOrSubdomain"),isSameProtocol=u((c,l)=>{const d=new URL(l).protocol,b=new URL(c).protocol;return d===b},"isSameProtocol"),pipeline=require$$1.promisify(Stream__default.pipeline),INTERNALS$2=Symbol("Body internals"),en$1=class en{constructor(l,{size:d=0}={}){let b=null;l===null?l=null:isURLSearchParameters(l)?l=require$$0.Buffer.from(l.toString()):isBlob(l)||require$$0.Buffer.isBuffer(l)||(require$$1.types.isAnyArrayBuffer(l)?l=require$$0.Buffer.from(l):ArrayBuffer.isView(l)?l=require$$0.Buffer.from(l.buffer,l.byteOffset,l.byteLength):l instanceof Stream__default||(l instanceof FormData$1?(l=formDataToBlob(l),b=l.type.split("=")[1]):l=require$$0.Buffer.from(String(l))));let g=l;require$$0.Buffer.isBuffer(l)?g=Stream__default.Readable.from(l):isBlob(l)&&(g=Stream__default.Readable.from(l.stream())),this[INTERNALS$2]={body:l,stream:g,boundary:b,disturbed:!1,error:null},this.size=d,l instanceof Stream__default&&l.on("error",S=>{const T=S instanceof FetchBaseError?S:new FetchError$1(`Invalid response body while trying to fetch ${this.url}: ${S.message}`,"system",S);this[INTERNALS$2].error=T;});}get body(){return this[INTERNALS$2].stream}get bodyUsed(){return this[INTERNALS$2].disturbed}async arrayBuffer(){const{buffer:l,byteOffset:d,byteLength:b}=await consumeBody(this);return l.slice(d,d+b)}async formData(){const l=this.headers.get("content-type");if(l.startsWith("application/x-www-form-urlencoded")){const b=new FormData$1,g=new URLSearchParams(await this.text());for(const[S,T]of g)b.append(S,T);return b}const{toFormData:d}=await import('./_/multipart-parser.mjs').then(function (n) { return n.m; });return d(this.body,l)}async blob(){const l=this.headers&&this.headers.get("content-type")||this[INTERNALS$2].body&&this[INTERNALS$2].body.type||"",d=await this.arrayBuffer();return new r$1([d],{type:l})}async json(){const l=await this.text();return JSON.parse(l)}async text(){const l=await consumeBody(this);return new TextDecoder().decode(l)}buffer(){return consumeBody(this)}};u(en$1,"Body");let Body=en$1;Body.prototype.buffer=require$$1.deprecate(Body.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer"),Object.defineProperties(Body.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:require$$1.deprecate(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function consumeBody(c){if(c[INTERNALS$2].disturbed)throw new TypeError(`body used already for: ${c.url}`);if(c[INTERNALS$2].disturbed=!0,c[INTERNALS$2].error)throw c[INTERNALS$2].error;const{body:l}=c;if(l===null||!(l instanceof Stream__default))return require$$0.Buffer.alloc(0);const d=[];let b=0;try{for await(const g of l){if(c.size>0&&b+g.length>c.size){const S=new FetchError$1(`content size at ${c.url} over limit: ${c.size}`,"max-size");throw l.destroy(S),S}b+=g.length,d.push(g);}}catch(g){throw g instanceof FetchBaseError?g:new FetchError$1(`Invalid response body while trying to fetch ${c.url}: ${g.message}`,"system",g)}if(l.readableEnded===!0||l._readableState.ended===!0)try{return d.every(g=>typeof g=="string")?require$$0.Buffer.from(d.join("")):require$$0.Buffer.concat(d,b)}catch(g){throw new FetchError$1(`Could not create Buffer from response body for ${c.url}: ${g.message}`,"system",g)}else throw new FetchError$1(`Premature close of server response while trying to fetch ${c.url}`)}u(consumeBody,"consumeBody");const clone=u((c,l)=>{let d,b,{body:g}=c[INTERNALS$2];if(c.bodyUsed)throw new Error("cannot clone body after it is used");return g instanceof Stream__default&&typeof g.getBoundary!="function"&&(d=new Stream.PassThrough({highWaterMark:l}),b=new Stream.PassThrough({highWaterMark:l}),g.pipe(d),g.pipe(b),c[INTERNALS$2].stream=d,g=b),g},"clone"),getNonSpecFormDataBoundary=require$$1.deprecate(c=>c.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),extractContentType=u((c,l)=>c===null?null:typeof c=="string"?"text/plain;charset=UTF-8":isURLSearchParameters(c)?"application/x-www-form-urlencoded;charset=UTF-8":isBlob(c)?c.type||null:require$$0.Buffer.isBuffer(c)||require$$1.types.isAnyArrayBuffer(c)||ArrayBuffer.isView(c)?null:c instanceof FormData$1?`multipart/form-data; boundary=${l[INTERNALS$2].boundary}`:c&&typeof c.getBoundary=="function"?`multipart/form-data;boundary=${getNonSpecFormDataBoundary(c)}`:c instanceof Stream__default?null:"text/plain;charset=UTF-8","extractContentType"),getTotalBytes=u(c=>{const{body:l}=c[INTERNALS$2];return l===null?0:isBlob(l)?l.size:require$$0.Buffer.isBuffer(l)?l.length:l&&typeof l.getLengthSync=="function"&&l.hasKnownLength&&l.hasKnownLength()?l.getLengthSync():null},"getTotalBytes"),writeToStream=u(async(c,{body:l})=>{l===null?c.end():await pipeline(l,c);},"writeToStream"),validateHeaderName=typeof http__default.validateHeaderName=="function"?http__default.validateHeaderName:c=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(c)){const l=new TypeError(`Header name must be a valid HTTP token [${c}]`);throw Object.defineProperty(l,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),l}},validateHeaderValue=typeof http__default.validateHeaderValue=="function"?http__default.validateHeaderValue:(c,l)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(l)){const d=new TypeError(`Invalid character in header content ["${c}"]`);throw Object.defineProperty(d,"code",{value:"ERR_INVALID_CHAR"}),d}},Kt$2=class Kt extends URLSearchParams{constructor(l){let d=[];if(l instanceof Kt){const b=l.raw();for(const[g,S]of Object.entries(b))d.push(...S.map(T=>[g,T]));}else if(l!=null)if(typeof l=="object"&&!require$$1.types.isBoxedPrimitive(l)){const b=l[Symbol.iterator];if(b==null)d.push(...Object.entries(l));else {if(typeof b!="function")throw new TypeError("Header pairs must be iterable");d=[...l].map(g=>{if(typeof g!="object"||require$$1.types.isBoxedPrimitive(g))throw new TypeError("Each header pair must be an iterable object");return [...g]}).map(g=>{if(g.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return [...g]});}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return d=d.length>0?d.map(([b,g])=>(validateHeaderName(b),validateHeaderValue(b,String(g)),[String(b).toLowerCase(),String(g)])):void 0,super(d),new Proxy(this,{get(b,g,S){switch(g){case"append":case"set":return (T,R)=>(validateHeaderName(T),validateHeaderValue(T,String(R)),URLSearchParams.prototype[g].call(b,String(T).toLowerCase(),String(R)));case"delete":case"has":case"getAll":return T=>(validateHeaderName(T),URLSearchParams.prototype[g].call(b,String(T).toLowerCase()));case"keys":return ()=>(b.sort(),new Set(URLSearchParams.prototype.keys.call(b)).keys());default:return Reflect.get(b,g,S)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(l){const d=this.getAll(l);if(d.length===0)return null;let b=d.join(", ");return /^content-encoding$/i.test(l)&&(b=b.toLowerCase()),b}forEach(l,d=void 0){for(const b of this.keys())Reflect.apply(l,d,[this.get(b),b,this]);}*values(){for(const l of this.keys())yield this.get(l);}*entries(){for(const l of this.keys())yield [l,this.get(l)];}[Symbol.iterator](){return this.entries()}raw(){return [...this.keys()].reduce((l,d)=>(l[d]=this.getAll(d),l),{})}[Symbol.for("nodejs.util.inspect.custom")](){return [...this.keys()].reduce((l,d)=>{const b=this.getAll(d);return d==="host"?l[d]=b[0]:l[d]=b.length>1?b:b[0],l},{})}};u(Kt$2,"Headers");let Headers$2=Kt$2;Object.defineProperties(Headers$2.prototype,["get","entries","forEach","values"].reduce((c,l)=>(c[l]={enumerable:!0},c),{}));function fromRawHeaders(c=[]){return new Headers$2(c.reduce((l,d,b,g)=>(b%2===0&&l.push(g.slice(b,b+2)),l),[]).filter(([l,d])=>{try{return validateHeaderName(l),validateHeaderValue(l,String(d)),!0}catch{return !1}}))}u(fromRawHeaders,"fromRawHeaders");const redirectStatus=new Set([301,302,303,307,308]),isRedirect=u(c=>redirectStatus.has(c),"isRedirect"),INTERNALS$1=Symbol("Response internals"),De$1=class De extends Body{constructor(l=null,d={}){super(l,d);const b=d.status!=null?d.status:200,g=new Headers$2(d.headers);if(l!==null&&!g.has("Content-Type")){const S=extractContentType(l,this);S&&g.append("Content-Type",S);}this[INTERNALS$1]={type:"default",url:d.url,status:b,statusText:d.statusText||"",headers:g,counter:d.counter,highWaterMark:d.highWaterMark};}get type(){return this[INTERNALS$1].type}get url(){return this[INTERNALS$1].url||""}get status(){return this[INTERNALS$1].status}get ok(){return this[INTERNALS$1].status>=200&&this[INTERNALS$1].status<300}get redirected(){return this[INTERNALS$1].counter>0}get statusText(){return this[INTERNALS$1].statusText}get headers(){return this[INTERNALS$1].headers}get highWaterMark(){return this[INTERNALS$1].highWaterMark}clone(){return new De(clone(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(l,d=302){if(!isRedirect(d))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new De(null,{headers:{location:new URL(l).toString()},status:d})}static error(){const l=new De(null,{status:0,statusText:""});return l[INTERNALS$1].type="error",l}static json(l=void 0,d={}){const b=JSON.stringify(l);if(b===void 0)throw new TypeError("data is not JSON serializable");const g=new Headers$2(d&&d.headers);return g.has("content-type")||g.set("content-type","application/json"),new De(b,{...d,headers:g})}get[Symbol.toStringTag](){return "Response"}};u(De$1,"Response");let Response$1=De$1;Object.defineProperties(Response$1.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});const getSearch=u(c=>{if(c.search)return c.search;const l=c.href.length-1,d=c.hash||(c.href[l]==="#"?"#":"");return c.href[l-d.length]==="?"?"?":""},"getSearch");function stripURLForUseAsAReferrer(c,l=!1){return c==null||(c=new URL(c),/^(about|blob|data):$/.test(c.protocol))?"no-referrer":(c.username="",c.password="",c.hash="",l&&(c.pathname="",c.search=""),c)}u(stripURLForUseAsAReferrer,"stripURLForUseAsAReferrer");const ReferrerPolicy=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),DEFAULT_REFERRER_POLICY="strict-origin-when-cross-origin";function validateReferrerPolicy(c){if(!ReferrerPolicy.has(c))throw new TypeError(`Invalid referrerPolicy: ${c}`);return c}u(validateReferrerPolicy,"validateReferrerPolicy");function isOriginPotentiallyTrustworthy(c){if(/^(http|ws)s:$/.test(c.protocol))return !0;const l=c.host.replace(/(^\[)|(]$)/g,""),d=require$$4.isIP(l);return d===4&&/^127\./.test(l)||d===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(l)?!0:c.host==="localhost"||c.host.endsWith(".localhost")?!1:c.protocol==="file:"}u(isOriginPotentiallyTrustworthy,"isOriginPotentiallyTrustworthy");function isUrlPotentiallyTrustworthy(c){return /^about:(blank|srcdoc)$/.test(c)||c.protocol==="data:"||/^(blob|filesystem):$/.test(c.protocol)?!0:isOriginPotentiallyTrustworthy(c)}u(isUrlPotentiallyTrustworthy,"isUrlPotentiallyTrustworthy");function determineRequestsReferrer(c,{referrerURLCallback:l,referrerOriginCallback:d}={}){if(c.referrer==="no-referrer"||c.referrerPolicy==="")return null;const b=c.referrerPolicy;if(c.referrer==="about:client")return "no-referrer";const g=c.referrer;let S=stripURLForUseAsAReferrer(g),T=stripURLForUseAsAReferrer(g,!0);S.toString().length>4096&&(S=T),l&&(S=l(S)),d&&(T=d(T));const R=new URL(c.url);switch(b){case"no-referrer":return "no-referrer";case"origin":return T;case"unsafe-url":return S;case"strict-origin":return isUrlPotentiallyTrustworthy(S)&&!isUrlPotentiallyTrustworthy(R)?"no-referrer":T.toString();case"strict-origin-when-cross-origin":return S.origin===R.origin?S:isUrlPotentiallyTrustworthy(S)&&!isUrlPotentiallyTrustworthy(R)?"no-referrer":T;case"same-origin":return S.origin===R.origin?S:"no-referrer";case"origin-when-cross-origin":return S.origin===R.origin?S:T;case"no-referrer-when-downgrade":return isUrlPotentiallyTrustworthy(S)&&!isUrlPotentiallyTrustworthy(R)?"no-referrer":S;default:throw new TypeError(`Invalid referrerPolicy: ${b}`)}}u(determineRequestsReferrer,"determineRequestsReferrer");function parseReferrerPolicyFromHeader(c){const l=(c.get("referrer-policy")||"").split(/[,\s]+/);let d="";for(const b of l)b&&ReferrerPolicy.has(b)&&(d=b);return d}u(parseReferrerPolicyFromHeader,"parseReferrerPolicyFromHeader");const INTERNALS=Symbol("Request internals"),isRequest=u(c=>typeof c=="object"&&typeof c[INTERNALS]=="object","isRequest"),doBadDataWarn=require$$1.deprecate(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),Jt$1=class Jt extends Body{constructor(l,d={}){let b;if(isRequest(l)?b=new URL(l.url):(b=new URL(l),l={}),b.username!==""||b.password!=="")throw new TypeError(`${b} is an url with embedded credentials.`);let g=d.method||l.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(g)&&(g=g.toUpperCase()),!isRequest(d)&&"data"in d&&doBadDataWarn(),(d.body!=null||isRequest(l)&&l.body!==null)&&(g==="GET"||g==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");const S=d.body?d.body:isRequest(l)&&l.body!==null?clone(l):null;super(S,{size:d.size||l.size||0});const T=new Headers$2(d.headers||l.headers||{});if(S!==null&&!T.has("Content-Type")){const B=extractContentType(S,this);B&&T.set("Content-Type",B);}let R=isRequest(l)?l.signal:null;if("signal"in d&&(R=d.signal),R!=null&&!isAbortSignal(R))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let F=d.referrer==null?l.referrer:d.referrer;if(F==="")F="no-referrer";else if(F){const B=new URL(F);F=/^about:(\/\/)?client$/.test(B)?"client":B;}else F=void 0;this[INTERNALS]={method:g,redirect:d.redirect||l.redirect||"follow",headers:T,parsedURL:b,signal:R,referrer:F},this.follow=d.follow===void 0?l.follow===void 0?20:l.follow:d.follow,this.compress=d.compress===void 0?l.compress===void 0?!0:l.compress:d.compress,this.counter=d.counter||l.counter||0,this.agent=d.agent||l.agent,this.highWaterMark=d.highWaterMark||l.highWaterMark||16384,this.insecureHTTPParser=d.insecureHTTPParser||l.insecureHTTPParser||!1,this.referrerPolicy=d.referrerPolicy||l.referrerPolicy||"";}get method(){return this[INTERNALS].method}get url(){return require$$1$1.format(this[INTERNALS].parsedURL)}get headers(){return this[INTERNALS].headers}get redirect(){return this[INTERNALS].redirect}get signal(){return this[INTERNALS].signal}get referrer(){if(this[INTERNALS].referrer==="no-referrer")return "";if(this[INTERNALS].referrer==="client")return "about:client";if(this[INTERNALS].referrer)return this[INTERNALS].referrer.toString()}get referrerPolicy(){return this[INTERNALS].referrerPolicy}set referrerPolicy(l){this[INTERNALS].referrerPolicy=validateReferrerPolicy(l);}clone(){return new Jt(this)}get[Symbol.toStringTag](){return "Request"}};u(Jt$1,"Request");let Request$1=Jt$1;Object.defineProperties(Request$1.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});const getNodeRequestOptions=u(c=>{const{parsedURL:l}=c[INTERNALS],d=new Headers$2(c[INTERNALS].headers);d.has("Accept")||d.set("Accept","*/*");let b=null;if(c.body===null&&/^(post|put)$/i.test(c.method)&&(b="0"),c.body!==null){const R=getTotalBytes(c);typeof R=="number"&&!Number.isNaN(R)&&(b=String(R));}b&&d.set("Content-Length",b),c.referrerPolicy===""&&(c.referrerPolicy=DEFAULT_REFERRER_POLICY),c.referrer&&c.referrer!=="no-referrer"?c[INTERNALS].referrer=determineRequestsReferrer(c):c[INTERNALS].referrer="no-referrer",c[INTERNALS].referrer instanceof URL&&d.set("Referer",c.referrer),d.has("User-Agent")||d.set("User-Agent","node-fetch"),c.compress&&!d.has("Accept-Encoding")&&d.set("Accept-Encoding","gzip, deflate, br");let{agent:g}=c;typeof g=="function"&&(g=g(l));const S=getSearch(l),T={path:l.pathname+S,method:c.method,headers:d[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:c.insecureHTTPParser,agent:g};return {parsedURL:l,options:T}},"getNodeRequestOptions"),tn$1=class tn extends FetchBaseError{constructor(l,d="aborted"){super(l,d);}};u(tn$1,"AbortError");let AbortError=tn$1;/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */if(!globalThis.DOMException)try{const{MessageChannel:c}=require("worker_threads"),l=new c().port1,d=new ArrayBuffer;l.postMessage(d,[d,d]);}catch(c){c.constructor.name==="DOMException"&&(globalThis.DOMException=c.constructor);}var nodeDomexception=globalThis.DOMException;const DOMException=_commonjsHelpers.getDefaultExportFromCjs(nodeDomexception),{stat}=node_fs.promises,blobFromSync=u((c,l)=>fromBlob(node_fs.statSync(c),c,l),"blobFromSync"),blobFrom=u((c,l)=>stat(c).then(d=>fromBlob(d,c,l)),"blobFrom"),fileFrom=u((c,l)=>stat(c).then(d=>fromFile(d,c,l)),"fileFrom"),fileFromSync=u((c,l)=>fromFile(node_fs.statSync(c),c,l),"fileFromSync"),fromBlob=u((c,l,d="")=>new r$1([new BlobDataItem({path:l,size:c.size,lastModified:c.mtimeMs,start:0})],{type:d}),"fromBlob"),fromFile=u((c,l,d="")=>new File$1([new BlobDataItem({path:l,size:c.size,lastModified:c.mtimeMs,start:0})],node_path.basename(l),{type:d,lastModified:c.mtimeMs}),"fromFile"),Xt$2=class Xt{constructor(l){ye$1(this,Me$1,void 0);ye$1(this,xe$1,void 0);ne$1(this,Me$1,l.path),ne$1(this,xe$1,l.start),this.size=l.size,this.lastModified=l.lastModified;}slice(l,d){return new Xt({path:D$2(this,Me$1),lastModified:this.lastModified,size:d-l,start:D$2(this,xe$1)+l})}async*stream(){const{mtimeMs:l}=await stat(D$2(this,Me$1));if(l>this.lastModified)throw new DOMException("The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.","NotReadableError");yield*node_fs.createReadStream(D$2(this,Me$1),{start:D$2(this,xe$1),end:D$2(this,xe$1)+this.size-1});}get[Symbol.toStringTag](){return "Blob"}};Me$1=new WeakMap,xe$1=new WeakMap,u(Xt$2,"BlobDataItem");let BlobDataItem=Xt$2;const supportedSchemas=new Set(["data:","http:","https:"]);async function fetch$1(c,l){return new Promise((d,b)=>{const g=new Request$1(c,l),{parsedURL:S,options:T}=getNodeRequestOptions(g);if(!supportedSchemas.has(S.protocol))throw new TypeError(`node-fetch cannot load ${c}. URL scheme "${S.protocol.replace(/:$/,"")}" is not supported.`);if(S.protocol==="data:"){const q=dataUriToBuffer(g.url),$=new Response$1(q,{headers:{"Content-Type":q.typeFull}});d($);return}const R=(S.protocol==="https:"?https__default:http__default).request,{signal:F}=g;let B=null;const Q=u(()=>{const q=new AbortError("The operation was aborted.");b(q),g.body&&g.body instanceof Stream__default.Readable&&g.body.destroy(q),!(!B||!B.body)&&B.body.emit("error",q);},"abort");if(F&&F.aborted){Q();return}const j=u(()=>{Q(),C();},"abortAndFinalize"),A=R(S.toString(),T);F&&F.addEventListener("abort",j);const C=u(()=>{A.abort(),F&&F.removeEventListener("abort",j);},"finalize");A.on("error",q=>{b(new FetchError$1(`request to ${g.url} failed, reason: ${q.message}`,"system",q)),C();}),fixResponseChunkedTransferBadEnding(A,q=>{B&&B.body&&B.body.destroy(q);}),process.version<"v14"&&A.on("socket",q=>{let $;q.prependListener("end",()=>{$=q._eventsCount;}),q.prependListener("close",N=>{if(B&&$<q._eventsCount&&!N){const J=new Error("Premature close");J.code="ERR_STREAM_PREMATURE_CLOSE",B.body.emit("error",J);}});}),A.on("response",q=>{A.setTimeout(0);const $=fromRawHeaders(q.rawHeaders);if(isRedirect(q.statusCode)){const M=$.get("Location");let H=null;try{H=M===null?null:new URL(M,g.url);}catch{if(g.redirect!=="manual"){b(new FetchError$1(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),C();return}}switch(g.redirect){case"error":b(new FetchError$1(`uri requested responds with a redirect, redirect mode is set to error: ${g.url}`,"no-redirect")),C();return;case"manual":break;case"follow":{if(H===null)break;if(g.counter>=g.follow){b(new FetchError$1(`maximum redirect reached at: ${g.url}`,"max-redirect")),C();return}const U={headers:new Headers$2(g.headers),follow:g.follow,counter:g.counter+1,agent:g.agent,compress:g.compress,method:g.method,body:clone(g),signal:g.signal,size:g.size,referrer:g.referrer,referrerPolicy:g.referrerPolicy};if(!isDomainOrSubdomain(g.url,H)||!isSameProtocol(g.url,H))for(const Y of ["authorization","www-authenticate","cookie","cookie2"])U.headers.delete(Y);if(q.statusCode!==303&&g.body&&l.body instanceof Stream__default.Readable){b(new FetchError$1("Cannot follow redirect with body being a readable stream","unsupported-redirect")),C();return}(q.statusCode===303||(q.statusCode===301||q.statusCode===302)&&g.method==="POST")&&(U.method="GET",U.body=void 0,U.headers.delete("content-length"));const it=parseReferrerPolicyFromHeader($);it&&(U.referrerPolicy=it),d(fetch$1(new Request$1(H,U))),C();return}default:return b(new TypeError(`Redirect option '${g.redirect}' is not a valid value of RequestRedirect`))}}F&&q.once("end",()=>{F.removeEventListener("abort",j);});let N=Stream.pipeline(q,new Stream.PassThrough,M=>{M&&b(M);});process.version<"v12.10"&&q.on("aborted",j);const J={url:g.url,status:q.statusCode,statusText:q.statusMessage,headers:$,size:g.size,counter:g.counter,highWaterMark:g.highWaterMark},G=$.get("Content-Encoding");if(!g.compress||g.method==="HEAD"||G===null||q.statusCode===204||q.statusCode===304){B=new Response$1(N,J),d(B);return}const Pe={flush:zlib__default.Z_SYNC_FLUSH,finishFlush:zlib__default.Z_SYNC_FLUSH};if(G==="gzip"||G==="x-gzip"){N=Stream.pipeline(N,zlib__default.createGunzip(Pe),M=>{M&&b(M);}),B=new Response$1(N,J),d(B);return}if(G==="deflate"||G==="x-deflate"){const M=Stream.pipeline(q,new Stream.PassThrough,H=>{H&&b(H);});M.once("data",H=>{(H[0]&15)===8?N=Stream.pipeline(N,zlib__default.createInflate(),U=>{U&&b(U);}):N=Stream.pipeline(N,zlib__default.createInflateRaw(),U=>{U&&b(U);}),B=new Response$1(N,J),d(B);}),M.once("end",()=>{B||(B=new Response$1(N,J),d(B));});return}if(G==="br"){N=Stream.pipeline(N,zlib__default.createBrotliDecompress(),M=>{M&&b(M);}),B=new Response$1(N,J),d(B);return}B=new Response$1(N,J),d(B);}),writeToStream(A,g).catch(b);})}u(fetch$1,"fetch$1");function fixResponseChunkedTransferBadEnding(c,l){const d=require$$0.Buffer.from(`0\r
\r
`);let b=!1,g=!1,S;c.on("response",T=>{const{headers:R}=T;b=R["transfer-encoding"]==="chunked"&&!R["content-length"];}),c.on("socket",T=>{const R=u(()=>{if(b&&!g){const B=new Error("Premature close");B.code="ERR_STREAM_PREMATURE_CLOSE",l(B);}},"onSocketClose"),F=u(B=>{g=require$$0.Buffer.compare(B.slice(-5),d)===0,!g&&S&&(g=require$$0.Buffer.compare(S.slice(-3),d.slice(0,3))===0&&require$$0.Buffer.compare(B.slice(-2),d.slice(3))===0),S=B;},"onData");T.prependListener("close",R),T.on("data",F),c.on("close",()=>{T.removeListener("close",R),T.removeListener("data",F);});});}u(fixResponseChunkedTransferBadEnding,"fixResponseChunkedTransferBadEnding");const privateData=new WeakMap,wrappers=new WeakMap;function pd(c){const l=privateData.get(c);return console.assert(l!=null,"'this' is expected an Event object, but got",c),l}u(pd,"pd");function setCancelFlag(c){if(c.passiveListener!=null){typeof console<"u"&&typeof console.error=="function"&&console.error("Unable to preventDefault inside passive event listener invocation.",c.passiveListener);return}c.event.cancelable&&(c.canceled=!0,typeof c.event.preventDefault=="function"&&c.event.preventDefault());}u(setCancelFlag,"setCancelFlag");function Event(c,l){privateData.set(this,{eventTarget:c,event:l,eventPhase:2,currentTarget:c,canceled:!1,stopped:!1,immediateStopped:!1,passiveListener:null,timeStamp:l.timeStamp||Date.now()}),Object.defineProperty(this,"isTrusted",{value:!1,enumerable:!0});const d=Object.keys(l);for(let b=0;b<d.length;++b){const g=d[b];g in this||Object.defineProperty(this,g,defineRedirectDescriptor(g));}}u(Event,"Event"),Event.prototype={get type(){return pd(this).event.type},get target(){return pd(this).eventTarget},get currentTarget(){return pd(this).currentTarget},composedPath(){const c=pd(this).currentTarget;return c==null?[]:[c]},get NONE(){return 0},get CAPTURING_PHASE(){return 1},get AT_TARGET(){return 2},get BUBBLING_PHASE(){return 3},get eventPhase(){return pd(this).eventPhase},stopPropagation(){const c=pd(this);c.stopped=!0,typeof c.event.stopPropagation=="function"&&c.event.stopPropagation();},stopImmediatePropagation(){const c=pd(this);c.stopped=!0,c.immediateStopped=!0,typeof c.event.stopImmediatePropagation=="function"&&c.event.stopImmediatePropagation();},get bubbles(){return !!pd(this).event.bubbles},get cancelable(){return !!pd(this).event.cancelable},preventDefault(){setCancelFlag(pd(this));},get defaultPrevented(){return pd(this).canceled},get composed(){return !!pd(this).event.composed},get timeStamp(){return pd(this).timeStamp},get srcElement(){return pd(this).eventTarget},get cancelBubble(){return pd(this).stopped},set cancelBubble(c){if(!c)return;const l=pd(this);l.stopped=!0,typeof l.event.cancelBubble=="boolean"&&(l.event.cancelBubble=!0);},get returnValue(){return !pd(this).canceled},set returnValue(c){c||setCancelFlag(pd(this));},initEvent(){}},Object.defineProperty(Event.prototype,"constructor",{value:Event,configurable:!0,writable:!0});function defineRedirectDescriptor(c){return {get(){return pd(this).event[c]},set(l){pd(this).event[c]=l;},configurable:!0,enumerable:!0}}u(defineRedirectDescriptor,"defineRedirectDescriptor");function defineCallDescriptor(c){return {value(){const l=pd(this).event;return l[c].apply(l,arguments)},configurable:!0,enumerable:!0}}u(defineCallDescriptor,"defineCallDescriptor");function defineWrapper(c,l){const d=Object.keys(l);if(d.length===0)return c;function b(g,S){c.call(this,g,S);}u(b,"CustomEvent"),b.prototype=Object.create(c.prototype,{constructor:{value:b,configurable:!0,writable:!0}});for(let g=0;g<d.length;++g){const S=d[g];if(!(S in c.prototype)){const R=typeof Object.getOwnPropertyDescriptor(l,S).value=="function";Object.defineProperty(b.prototype,S,R?defineCallDescriptor(S):defineRedirectDescriptor(S));}}return b}u(defineWrapper,"defineWrapper");function getWrapper(c){if(c==null||c===Object.prototype)return Event;let l=wrappers.get(c);return l==null&&(l=defineWrapper(getWrapper(Object.getPrototypeOf(c)),c),wrappers.set(c,l)),l}u(getWrapper,"getWrapper");function wrapEvent(c,l){const d=getWrapper(Object.getPrototypeOf(l));return new d(c,l)}u(wrapEvent,"wrapEvent");function isStopped(c){return pd(c).immediateStopped}u(isStopped,"isStopped");function setEventPhase(c,l){pd(c).eventPhase=l;}u(setEventPhase,"setEventPhase");function setCurrentTarget(c,l){pd(c).currentTarget=l;}u(setCurrentTarget,"setCurrentTarget");function setPassiveListener(c,l){pd(c).passiveListener=l;}u(setPassiveListener,"setPassiveListener");const listenersMap=new WeakMap,CAPTURE=1,BUBBLE=2,ATTRIBUTE=3;function isObject(c){return c!==null&&typeof c=="object"}u(isObject,"isObject");function getListeners(c){const l=listenersMap.get(c);if(l==null)throw new TypeError("'this' is expected an EventTarget object, but got another value.");return l}u(getListeners,"getListeners");function defineEventAttributeDescriptor(c){return {get(){let d=getListeners(this).get(c);for(;d!=null;){if(d.listenerType===ATTRIBUTE)return d.listener;d=d.next;}return null},set(l){typeof l!="function"&&!isObject(l)&&(l=null);const d=getListeners(this);let b=null,g=d.get(c);for(;g!=null;)g.listenerType===ATTRIBUTE?b!==null?b.next=g.next:g.next!==null?d.set(c,g.next):d.delete(c):b=g,g=g.next;if(l!==null){const S={listener:l,listenerType:ATTRIBUTE,passive:!1,once:!1,next:null};b===null?d.set(c,S):b.next=S;}},configurable:!0,enumerable:!0}}u(defineEventAttributeDescriptor,"defineEventAttributeDescriptor");function defineEventAttribute(c,l){Object.defineProperty(c,`on${l}`,defineEventAttributeDescriptor(l));}u(defineEventAttribute,"defineEventAttribute");function defineCustomEventTarget(c){function l(){EventTarget.call(this);}u(l,"CustomEventTarget"),l.prototype=Object.create(EventTarget.prototype,{constructor:{value:l,configurable:!0,writable:!0}});for(let d=0;d<c.length;++d)defineEventAttribute(l.prototype,c[d]);return l}u(defineCustomEventTarget,"defineCustomEventTarget");function EventTarget(){if(this instanceof EventTarget){listenersMap.set(this,new Map);return}if(arguments.length===1&&Array.isArray(arguments[0]))return defineCustomEventTarget(arguments[0]);if(arguments.length>0){const c=new Array(arguments.length);for(let l=0;l<arguments.length;++l)c[l]=arguments[l];return defineCustomEventTarget(c)}throw new TypeError("Cannot call a class as a function")}u(EventTarget,"EventTarget"),EventTarget.prototype={addEventListener(c,l,d){if(l==null)return;if(typeof l!="function"&&!isObject(l))throw new TypeError("'listener' should be a function or an object.");const b=getListeners(this),g=isObject(d),T=(g?!!d.capture:!!d)?CAPTURE:BUBBLE,R={listener:l,listenerType:T,passive:g&&!!d.passive,once:g&&!!d.once,next:null};let F=b.get(c);if(F===void 0){b.set(c,R);return}let B=null;for(;F!=null;){if(F.listener===l&&F.listenerType===T)return;B=F,F=F.next;}B.next=R;},removeEventListener(c,l,d){if(l==null)return;const b=getListeners(this),S=(isObject(d)?!!d.capture:!!d)?CAPTURE:BUBBLE;let T=null,R=b.get(c);for(;R!=null;){if(R.listener===l&&R.listenerType===S){T!==null?T.next=R.next:R.next!==null?b.set(c,R.next):b.delete(c);return}T=R,R=R.next;}},dispatchEvent(c){if(c==null||typeof c.type!="string")throw new TypeError('"event.type" should be a string.');const l=getListeners(this),d=c.type;let b=l.get(d);if(b==null)return !0;const g=wrapEvent(this,c);let S=null;for(;b!=null;){if(b.once?S!==null?S.next=b.next:b.next!==null?l.set(d,b.next):l.delete(d):S=b,setPassiveListener(g,b.passive?b.listener:null),typeof b.listener=="function")try{b.listener.call(this,g);}catch(T){typeof console<"u"&&typeof console.error=="function"&&console.error(T);}else b.listenerType!==ATTRIBUTE&&typeof b.listener.handleEvent=="function"&&b.listener.handleEvent(g);if(isStopped(g))break;b=b.next;}return setPassiveListener(g,null),setEventPhase(g,0),setCurrentTarget(g,null),!g.defaultPrevented}},Object.defineProperty(EventTarget.prototype,"constructor",{value:EventTarget,configurable:!0,writable:!0});const rn$1=class rn extends EventTarget{constructor(){throw super(),new TypeError("AbortSignal cannot be constructed directly")}get aborted(){const l=abortedFlags.get(this);if(typeof l!="boolean")throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this===null?"null":typeof this}`);return l}};u(rn$1,"AbortSignal");let AbortSignal=rn$1;defineEventAttribute(AbortSignal.prototype,"abort");function createAbortSignal(){const c=Object.create(AbortSignal.prototype);return EventTarget.call(c),abortedFlags.set(c,!1),c}u(createAbortSignal,"createAbortSignal");function abortSignal(c){abortedFlags.get(c)===!1&&(abortedFlags.set(c,!0),c.dispatchEvent({type:"abort"}));}u(abortSignal,"abortSignal");const abortedFlags=new WeakMap;Object.defineProperties(AbortSignal.prototype,{aborted:{enumerable:!0}}),typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(AbortSignal.prototype,Symbol.toStringTag,{configurable:!0,value:"AbortSignal"});let AbortController$1$1=(wt$1=class{constructor(){signals.set(this,createAbortSignal());}get signal(){return getSignal(this)}abort(){abortSignal(getSignal(this));}},u(wt$1,"AbortController"),wt$1);const signals=new WeakMap;function getSignal(c){const l=signals.get(c);if(l==null)throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${c===null?"null":typeof c}`);return l}u(getSignal,"getSignal"),Object.defineProperties(AbortController$1$1.prototype,{signal:{enumerable:!0},abort:{enumerable:!0}}),typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(AbortController$1$1.prototype,Symbol.toStringTag,{configurable:!0,value:"AbortController"});var t$2=Object.defineProperty,e$2=u((c,l)=>t$2(c,"name",{value:l,configurable:!0}),"e");const fetch$2=fetch$1;s$1();function s$1(){!globalThis.process?.versions?.node&&!globalThis.process?.env.DISABLE_NODE_FETCH_NATIVE_WARN&&console.warn("[node-fetch-native] Node.js compatible build of `node-fetch-native` is being used in a non-Node.js environment. Please make sure you are using proper export conditions or report this issue to https://github.com/unjs/node-fetch-native. You can set `process.env.DISABLE_NODE_FETCH_NATIVE_WARN` to disable this warning.");}u(s$1,"s"),e$2(s$1,"checkNodeEnvironment"),node$1.AbortController=AbortController$1$1,node$1.AbortError=AbortError,node$1.Blob=r$1,node$1.FetchError=FetchError$1,node$1.File=File$1,node$1.FormData=FormData$1,node$1.Headers=Headers$2,node$1.Request=Request$1,node$1.Response=Response$1,node$1.blobFrom=blobFrom,node$1.blobFromSync=blobFromSync,node$1.default=fetch$2,node$1.fetch=fetch$2,node$1.fileFrom=fileFrom,node$1.fileFromSync=fileFromSync,node$1.isRedirect=isRedirect;

var n=Object.defineProperty;var i$1=(r,o)=>n(r,"name",{value:o,configurable:!0});const node=node$1;var t=Object.defineProperty,a=i$1((r,o)=>t(r,"name",{value:o,configurable:!0}),"a");function e(r,o){if(!(r in globalThis))try{globalThis[r]=o;}catch{}}i$1(e,"e"),a(e,"polyfill"),e("fetch",node.fetch),e("Blob",node.Blob),e("File",node.File),e("FormData",node.FormData),e("Headers",node.Headers),e("Request",node.Request),e("Response",node.Response),e("AbortController",node.AbortController);

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' && value.endsWith('"') && !value.includes("\\")
  ) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
function encode$1(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode$1(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode$1(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode$1(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const TRAILING_SLASH_RE = /\/$|\/\?|\/#/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex >= 0) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
  }
  const [s0, ...s] = path.split("?");
  return (s0.slice(0, -1) || "/") + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  if (!respectQueryAndFragment) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  let path = input;
  let fragment = "";
  const fragmentIndex = input.indexOf("#");
  if (fragmentIndex >= 0) {
    path = input.slice(0, fragmentIndex);
    fragment = input.slice(fragmentIndex);
    if (!path) {
      return fragment;
    }
  }
  const [s0, ...s] = path.split("?");
  return s0 + "/" + (s.length > 0 ? `?${s.join("?")}` : "") + fragment;
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  const [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  const { pathname, search, hash } = parsePath(
    path.replace(/\/(?=[A-Za-z]:)/, "")
  );
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

const fieldContentRegExp = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function parse(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = {};
  const opt = options || {};
  const dec = opt.decode || decode;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function serialize(name, value, options) {
  const opt = options || {};
  const enc = opt.encode || encode;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  const encodedValue = enc(value);
  if (encodedValue && !fieldContentRegExp.test(encodedValue)) {
    throw new TypeError("argument val is invalid");
  }
  let str = name + "=" + encodedValue;
  if (void 0 !== opt.maxAge && opt.maxAge !== null) {
    const maxAge = opt.maxAge - 0;
    if (Number.isNaN(maxAge) || !Number.isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    if (!isDate(opt.expires) || Number.isNaN(opt.expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + opt.expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    const priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low":
        str += "; Priority=Low";
        break;
      case "medium":
        str += "; Priority=Medium";
        break;
      case "high":
        str += "; Priority=High";
        break;
      default:
        throw new TypeError("option priority is invalid");
    }
  }
  if (opt.sameSite) {
    const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += "; SameSite=Strict";
        break;
      case "lax":
        str += "; SameSite=Lax";
        break;
      case "strict":
        str += "; SameSite=Strict";
        break;
      case "none":
        str += "; SameSite=None";
        break;
      default:
        throw new TypeError("option sameSite is invalid");
    }
  }
  return str;
}
function isDate(val) {
  return Object.prototype.toString.call(val) === "[object Date]" || val instanceof Date;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}
function decode(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function encode(val) {
  return encodeURIComponent(val);
}

const defaults = Object.freeze({
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0
});
function objectHash(object, options) {
  if (options) {
    options = { ...defaults, ...options };
  } else {
    options = defaults;
  }
  const hasher = createHasher(options);
  hasher.dispatch(object);
  return hasher.toString();
}
const defaultPrototypesKeys = Object.freeze([
  "prototype",
  "__proto__",
  "constructor"
]);
function createHasher(options) {
  let buff = "";
  let context = /* @__PURE__ */ new Map();
  const write = (str) => {
    buff += str;
  };
  return {
    toString() {
      return buff;
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    },
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      if (objectLength < 10) {
        objType = "unknown:[" + objString + "]";
      } else {
        objType = objString.slice(8, objectLength - 1);
      }
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = context.get(object)) === void 0) {
        context.set(object, context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write("buffer:");
        return write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else if (!options.ignoreUnknown) {
          this.unkown(object, objType);
        }
      } else {
        let keys = Object.keys(object);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        let extraKeys = [];
        if (options.respectType !== false && !isNativeFunction(object)) {
          extraKeys = defaultPrototypesKeys;
        }
        if (options.excludeKeys) {
          keys = keys.filter((key) => {
            return !options.excludeKeys(key);
          });
          extraKeys = extraKeys.filter((key) => {
            return !options.excludeKeys(key);
          });
        }
        write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object[key]);
          }
          write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    },
    array(arr, unordered) {
      unordered = unordered === void 0 ? options.unorderedArrays !== false : unordered;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = createHasher(options);
        hasher.dispatch(entry);
        for (const [key, value] of hasher.getContext()) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    },
    date(date) {
      return write("date:" + date.toJSON());
    },
    symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    unkown(value, type) {
      write(type);
      if (!value) {
        return;
      }
      write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          Array.from(value.entries()),
          true
          /* ordered */
        );
      }
    },
    error(err) {
      return write("error:" + err.toString());
    },
    boolean(bool) {
      return write("bool:" + bool);
    },
    string(string) {
      write("string:" + string.length + ":");
      write(string);
    },
    function(fn) {
      write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn.name));
      }
      if (options.respectFunctionProperties) {
        this.object(fn);
      }
    },
    number(number) {
      return write("number:" + number);
    },
    xml(xml) {
      return write("xml:" + xml.toString());
    },
    null() {
      return write("Null");
    },
    undefined() {
      return write("Undefined");
    },
    regexp(regex) {
      return write("regex:" + regex.toString());
    },
    uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    url(url) {
      return write("url:" + url.toString());
    },
    map(map) {
      write("map:");
      const arr = [...map];
      return this.array(arr, options.unorderedSets !== false);
    },
    set(set) {
      write("set:");
      const arr = [...set];
      return this.array(arr, options.unorderedSets !== false);
    },
    file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error(
        'Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n'
      );
    },
    domwindow() {
      return write("domwindow");
    },
    bigint(number) {
      return write("bigint:" + number.toString());
    },
    /* Node.js standard native objects */
    process() {
      return write("process");
    },
    timer() {
      return write("timer");
    },
    pipe() {
      return write("pipe");
    },
    tcp() {
      return write("tcp");
    },
    udp() {
      return write("udp");
    },
    tty() {
      return write("tty");
    },
    statwatcher() {
      return write("statwatcher");
    },
    securecontext() {
      return write("securecontext");
    },
    connection() {
      return write("connection");
    },
    zlib() {
      return write("zlib");
    },
    context() {
      return write("context");
    },
    nodescript() {
      return write("nodescript");
    },
    httpparser() {
      return write("httpparser");
    },
    dataview() {
      return write("dataview");
    },
    signal() {
      return write("signal");
    },
    fsevent() {
      return write("fsevent");
    },
    tlswrap() {
      return write("tlswrap");
    }
  };
}
const nativeFunc = "[native code] }";
const nativeFuncLength = nativeFunc.length;
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  return Function.prototype.toString.call(f).slice(-nativeFuncLength) === nativeFunc;
}

class WordArray {
  constructor(words, sigBytes) {
    words = this.words = words || [];
    this.sigBytes = sigBytes === void 0 ? words.length * 4 : sigBytes;
  }
  toString(encoder) {
    return (encoder || Hex).stringify(this);
  }
  concat(wordArray) {
    this.clamp();
    if (this.sigBytes % 4) {
      for (let i = 0; i < wordArray.sigBytes; i++) {
        const thatByte = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        this.words[this.sigBytes + i >>> 2] |= thatByte << 24 - (this.sigBytes + i) % 4 * 8;
      }
    } else {
      for (let j = 0; j < wordArray.sigBytes; j += 4) {
        this.words[this.sigBytes + j >>> 2] = wordArray.words[j >>> 2];
      }
    }
    this.sigBytes += wordArray.sigBytes;
    return this;
  }
  clamp() {
    this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8;
    this.words.length = Math.ceil(this.sigBytes / 4);
  }
  clone() {
    return new WordArray([...this.words]);
  }
}
const Hex = {
  stringify(wordArray) {
    const hexChars = [];
    for (let i = 0; i < wordArray.sigBytes; i++) {
      const bite = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      hexChars.push((bite >>> 4).toString(16), (bite & 15).toString(16));
    }
    return hexChars.join("");
  }
};
const Base64 = {
  stringify(wordArray) {
    const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const base64Chars = [];
    for (let i = 0; i < wordArray.sigBytes; i += 3) {
      const byte1 = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      const byte2 = wordArray.words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
      const byte3 = wordArray.words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
      const triplet = byte1 << 16 | byte2 << 8 | byte3;
      for (let j = 0; j < 4 && i * 8 + j * 6 < wordArray.sigBytes * 8; j++) {
        base64Chars.push(keyStr.charAt(triplet >>> 6 * (3 - j) & 63));
      }
    }
    return base64Chars.join("");
  }
};
const Latin1 = {
  parse(latin1Str) {
    const latin1StrLength = latin1Str.length;
    const words = [];
    for (let i = 0; i < latin1StrLength; i++) {
      words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
    }
    return new WordArray(words, latin1StrLength);
  }
};
const Utf8 = {
  parse(utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  }
};
class BufferedBlockAlgorithm {
  constructor() {
    this._data = new WordArray();
    this._nDataBytes = 0;
    this._minBufferSize = 0;
    this.blockSize = 512 / 32;
  }
  reset() {
    this._data = new WordArray();
    this._nDataBytes = 0;
  }
  _append(data) {
    if (typeof data === "string") {
      data = Utf8.parse(data);
    }
    this._data.concat(data);
    this._nDataBytes += data.sigBytes;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _doProcessBlock(_dataWords, _offset) {
  }
  _process(doFlush) {
    let processedWords;
    let nBlocksReady = this._data.sigBytes / (this.blockSize * 4);
    if (doFlush) {
      nBlocksReady = Math.ceil(nBlocksReady);
    } else {
      nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    }
    const nWordsReady = nBlocksReady * this.blockSize;
    const nBytesReady = Math.min(nWordsReady * 4, this._data.sigBytes);
    if (nWordsReady) {
      for (let offset = 0; offset < nWordsReady; offset += this.blockSize) {
        this._doProcessBlock(this._data.words, offset);
      }
      processedWords = this._data.words.splice(0, nWordsReady);
      this._data.sigBytes -= nBytesReady;
    }
    return new WordArray(processedWords, nBytesReady);
  }
}
class Hasher extends BufferedBlockAlgorithm {
  update(messageUpdate) {
    this._append(messageUpdate);
    this._process();
    return this;
  }
  finalize(messageUpdate) {
    if (messageUpdate) {
      this._append(messageUpdate);
    }
  }
}

const H$1 = [
  1779033703,
  -1150833019,
  1013904242,
  -1521486534,
  1359893119,
  -1694144372,
  528734635,
  1541459225
];
const K$2 = [
  1116352408,
  1899447441,
  -1245643825,
  -373957723,
  961987163,
  1508970993,
  -1841331548,
  -1424204075,
  -670586216,
  310598401,
  607225278,
  1426881987,
  1925078388,
  -2132889090,
  -1680079193,
  -1046744716,
  -459576895,
  -272742522,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  -1740746414,
  -1473132947,
  -1341970488,
  -1084653625,
  -958395405,
  -710438585,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  -2117940946,
  -1838011259,
  -1564481375,
  -1474664885,
  -1035236496,
  -949202525,
  -778901479,
  -694614492,
  -200395387,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  -2067236844,
  -1933114872,
  -1866530822,
  -1538233109,
  -1090935817,
  -965641998
];
const W$2 = [];
class SHA256 extends Hasher {
  constructor() {
    super(...arguments);
    this._hash = new WordArray([...H$1]);
  }
  reset() {
    super.reset();
    this._hash = new WordArray([...H$1]);
  }
  _doProcessBlock(M, offset) {
    const H2 = this._hash.words;
    let a = H2[0];
    let b = H2[1];
    let c = H2[2];
    let d = H2[3];
    let e = H2[4];
    let f = H2[5];
    let g = H2[6];
    let h = H2[7];
    for (let i = 0; i < 64; i++) {
      if (i < 16) {
        W$2[i] = M[offset + i] | 0;
      } else {
        const gamma0x = W$2[i - 15];
        const gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
        const gamma1x = W$2[i - 2];
        const gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
        W$2[i] = gamma0 + W$2[i - 7] + gamma1 + W$2[i - 16];
      }
      const ch = e & f ^ ~e & g;
      const maj = a & b ^ a & c ^ b & c;
      const sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
      const sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
      const t1 = h + sigma1 + ch + K$2[i] + W$2[i];
      const t2 = sigma0 + maj;
      h = g;
      g = f;
      f = e;
      e = d + t1 | 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 | 0;
    }
    H2[0] = H2[0] + a | 0;
    H2[1] = H2[1] + b | 0;
    H2[2] = H2[2] + c | 0;
    H2[3] = H2[3] + d | 0;
    H2[4] = H2[4] + e | 0;
    H2[5] = H2[5] + f | 0;
    H2[6] = H2[6] + g | 0;
    H2[7] = H2[7] + h | 0;
  }
  finalize(messageUpdate) {
    super.finalize(messageUpdate);
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = this._data.sigBytes * 8;
    this._data.words[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(
      nBitsTotal / 4294967296
    );
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
    this._data.sigBytes = this._data.words.length * 4;
    this._process();
    return this._hash;
  }
}
function sha256base64(message) {
  return new SHA256().finalize(message).toString(Base64);
}

function hash(object, options = {}) {
  const hashed = typeof object === "string" ? object : objectHash(object, options);
  return sha256base64(hashed).slice(0, 10);
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    // @ts-ignore
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode !== void 0) {
      node = nextNode;
    } else {
      node = node.placeholderChildNode;
      if (node !== null) {
        params[node.paramName] = section;
        paramsFound = true;
      } else {
        break;
      }
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildNode = childNode;
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      node = childNode;
    }
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections[sections.length - 1];
    node.data = null;
    if (Object.keys(node.children).length === 0) {
      const parentNode = node.parent;
      parentNode.children.delete(lastSection);
      parentNode.wildcardChildNode = null;
      parentNode.placeholderChildNode = null;
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildNode: null
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table);
}
function _createMatcher(table) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table) {
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path.startsWith(key)) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        table.static.set(path, node.data);
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

function rawHeaders(headers) {
  const rawHeaders2 = [];
  for (const key in headers) {
    if (Array.isArray(headers[key])) {
      for (const h of headers[key]) {
        rawHeaders2.push(key, h);
      }
    } else {
      rawHeaders2.push(key, headers[key]);
    }
  }
  return rawHeaders2;
}
function mergeFns(...functions) {
  return function(...args) {
    for (const fn of functions) {
      fn(...args);
    }
  };
}
function createNotImplementedError(name) {
  throw new Error(`[unenv] ${name} is not implemented yet!`);
}

let defaultMaxListeners = 10;
let EventEmitter$1 = class EventEmitter {
  __unenv__ = true;
  _events = /* @__PURE__ */ Object.create(null);
  _maxListeners;
  static get defaultMaxListeners() {
    return defaultMaxListeners;
  }
  static set defaultMaxListeners(arg) {
    if (typeof arg !== "number" || arg < 0 || Number.isNaN(arg)) {
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + "."
      );
    }
    defaultMaxListeners = arg;
  }
  setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || Number.isNaN(n)) {
      throw new RangeError(
        'The value of "n" is out of range. It must be a non-negative number. Received ' + n + "."
      );
    }
    this._maxListeners = n;
    return this;
  }
  getMaxListeners() {
    return _getMaxListeners(this);
  }
  emit(type, ...args) {
    if (!this._events[type] || this._events[type].length === 0) {
      return false;
    }
    if (type === "error") {
      let er;
      if (args.length > 0) {
        er = args[0];
      }
      if (er instanceof Error) {
        throw er;
      }
      const err = new Error(
        "Unhandled error." + (er ? " (" + er.message + ")" : "")
      );
      err.context = er;
      throw err;
    }
    for (const _listener of this._events[type]) {
      (_listener.listener || _listener).apply(this, args);
    }
    return true;
  }
  addListener(type, listener) {
    return _addListener(this, type, listener, false);
  }
  on(type, listener) {
    return _addListener(this, type, listener, false);
  }
  prependListener(type, listener) {
    return _addListener(this, type, listener, true);
  }
  once(type, listener) {
    return this.on(type, _wrapOnce(this, type, listener));
  }
  prependOnceListener(type, listener) {
    return this.prependListener(type, _wrapOnce(this, type, listener));
  }
  removeListener(type, listener) {
    return _removeListener(this, type, listener);
  }
  off(type, listener) {
    return this.removeListener(type, listener);
  }
  removeAllListeners(type) {
    return _removeAllListeners(this, type);
  }
  listeners(type) {
    return _listeners(this, type, true);
  }
  rawListeners(type) {
    return _listeners(this, type, false);
  }
  listenerCount(type) {
    return this.rawListeners(type).length;
  }
  eventNames() {
    return Object.keys(this._events);
  }
};
function _addListener(target, type, listener, prepend) {
  _checkListener(listener);
  if (target._events.newListener !== void 0) {
    target.emit("newListener", type, listener.listener || listener);
  }
  if (!target._events[type]) {
    target._events[type] = [];
  }
  if (prepend) {
    target._events[type].unshift(listener);
  } else {
    target._events[type].push(listener);
  }
  const maxListeners = _getMaxListeners(target);
  if (maxListeners > 0 && target._events[type].length > maxListeners && !target._events[type].warned) {
    target._events[type].warned = true;
    const warning = new Error(
      `[unenv] Possible EventEmitter memory leak detected. ${target._events[type].length} ${type} listeners added. Use emitter.setMaxListeners() to increase limit`
    );
    warning.name = "MaxListenersExceededWarning";
    warning.emitter = target;
    warning.type = type;
    warning.count = target._events[type]?.length;
    console.warn(warning);
  }
  return target;
}
function _removeListener(target, type, listener) {
  _checkListener(listener);
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  const lenBeforeFilter = target._events[type].length;
  target._events[type] = target._events[type].filter((fn) => fn !== listener);
  if (lenBeforeFilter === target._events[type].length) {
    return target;
  }
  if (target._events.removeListener) {
    target.emit("removeListener", type, listener.listener || listener);
  }
  if (target._events[type].length === 0) {
    delete target._events[type];
  }
  return target;
}
function _removeAllListeners(target, type) {
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  if (target._events.removeListener) {
    for (const _listener of target._events[type]) {
      target.emit("removeListener", type, _listener.listener || _listener);
    }
  }
  delete target._events[type];
  return target;
}
function _wrapOnce(target, type, listener) {
  let fired = false;
  const wrapper = (...args) => {
    if (fired) {
      return;
    }
    target.removeListener(type, wrapper);
    fired = true;
    return args.length === 0 ? listener.call(target) : listener.apply(target, args);
  };
  wrapper.listener = listener;
  return wrapper;
}
function _getMaxListeners(target) {
  return target._maxListeners ?? EventEmitter$1.defaultMaxListeners;
}
function _listeners(target, type, unwrap) {
  let listeners = target._events[type];
  if (typeof listeners === "function") {
    listeners = [listeners];
  }
  return unwrap ? listeners.map((l) => l.listener || l) : listeners;
}
function _checkListener(listener) {
  if (typeof listener !== "function") {
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' + typeof listener
    );
  }
}

const EventEmitter = globalThis.EventEmitter || EventEmitter$1;

class _Readable extends EventEmitter {
  __unenv__ = true;
  readableEncoding = null;
  readableEnded = true;
  readableFlowing = false;
  readableHighWaterMark = 0;
  readableLength = 0;
  readableObjectMode = false;
  readableAborted = false;
  readableDidRead = false;
  closed = false;
  errored = null;
  readable = false;
  destroyed = false;
  static from(_iterable, options) {
    return new _Readable(options);
  }
  constructor(_opts) {
    super();
  }
  _read(_size) {
  }
  read(_size) {
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  isPaused() {
    return true;
  }
  unpipe(_destination) {
    return this;
  }
  unshift(_chunk, _encoding) {
  }
  wrap(_oldStream) {
    return this;
  }
  push(_chunk, _encoding) {
    return false;
  }
  _destroy(_error, _callback) {
    this.removeAllListeners();
  }
  destroy(error) {
    this.destroyed = true;
    this._destroy(error);
    return this;
  }
  pipe(_destenition, _options) {
    return {};
  }
  compose(stream, options) {
    throw new Error("[unenv] Method not implemented.");
  }
  [Symbol.asyncDispose]() {
    this.destroy();
    return Promise.resolve();
  }
  async *[Symbol.asyncIterator]() {
    throw createNotImplementedError("Readable.asyncIterator");
  }
  iterator(options) {
    throw createNotImplementedError("Readable.iterator");
  }
  map(fn, options) {
    throw createNotImplementedError("Readable.map");
  }
  filter(fn, options) {
    throw createNotImplementedError("Readable.filter");
  }
  forEach(fn, options) {
    throw createNotImplementedError("Readable.forEach");
  }
  reduce(fn, initialValue, options) {
    throw createNotImplementedError("Readable.reduce");
  }
  find(fn, options) {
    throw createNotImplementedError("Readable.find");
  }
  findIndex(fn, options) {
    throw createNotImplementedError("Readable.findIndex");
  }
  some(fn, options) {
    throw createNotImplementedError("Readable.some");
  }
  toArray(options) {
    throw createNotImplementedError("Readable.toArray");
  }
  every(fn, options) {
    throw createNotImplementedError("Readable.every");
  }
  flatMap(fn, options) {
    throw createNotImplementedError("Readable.flatMap");
  }
  drop(limit, options) {
    throw createNotImplementedError("Readable.drop");
  }
  take(limit, options) {
    throw createNotImplementedError("Readable.take");
  }
  asIndexedPairs(options) {
    throw createNotImplementedError("Readable.asIndexedPairs");
  }
}
const Readable = globalThis.Readable || _Readable;

class _Writable extends EventEmitter {
  __unenv__ = true;
  writable = true;
  writableEnded = false;
  writableFinished = false;
  writableHighWaterMark = 0;
  writableLength = 0;
  writableObjectMode = false;
  writableCorked = 0;
  closed = false;
  errored = null;
  writableNeedDrain = false;
  destroyed = false;
  _data;
  _encoding = "utf-8";
  constructor(_opts) {
    super();
  }
  pipe(_destenition, _options) {
    return {};
  }
  _write(chunk, encoding, callback) {
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return;
    }
    if (this._data === void 0) {
      this._data = chunk;
    } else {
      const a = typeof this._data === "string" ? Buffer.from(this._data, this._encoding || encoding || "utf8") : this._data;
      const b = typeof chunk === "string" ? Buffer.from(chunk, encoding || this._encoding || "utf8") : chunk;
      this._data = Buffer.concat([a, b]);
    }
    this._encoding = encoding;
    if (callback) {
      callback();
    }
  }
  _writev(_chunks, _callback) {
  }
  _destroy(_error, _callback) {
  }
  _final(_callback) {
  }
  write(chunk, arg2, arg3) {
    const encoding = typeof arg2 === "string" ? this._encoding : "utf-8";
    const cb = typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    this._write(chunk, encoding, cb);
    return true;
  }
  setDefaultEncoding(_encoding) {
    return this;
  }
  end(arg1, arg2, arg3) {
    const callback = typeof arg1 === "function" ? arg1 : typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return this;
    }
    const data = arg1 === callback ? void 0 : arg1;
    if (data) {
      const encoding = arg2 === callback ? void 0 : arg2;
      this.write(data, encoding, callback);
    }
    this.writableEnded = true;
    this.writableFinished = true;
    this.emit("close");
    this.emit("finish");
    return this;
  }
  cork() {
  }
  uncork() {
  }
  destroy(_error) {
    this.destroyed = true;
    delete this._data;
    this.removeAllListeners();
    return this;
  }
  compose(stream, options) {
    throw new Error("[h3] Method not implemented.");
  }
}
const Writable = globalThis.Writable || _Writable;

const __Duplex = class {
  allowHalfOpen = true;
  _destroy;
  constructor(readable = new Readable(), writable = new Writable()) {
    Object.assign(this, readable);
    Object.assign(this, writable);
    this._destroy = mergeFns(readable._destroy, writable._destroy);
  }
};
function getDuplex() {
  Object.assign(__Duplex.prototype, Readable.prototype);
  Object.assign(__Duplex.prototype, Writable.prototype);
  return __Duplex;
}
const _Duplex = /* @__PURE__ */ getDuplex();
const Duplex = globalThis.Duplex || _Duplex;

class Socket extends Duplex {
  __unenv__ = true;
  bufferSize = 0;
  bytesRead = 0;
  bytesWritten = 0;
  connecting = false;
  destroyed = false;
  pending = false;
  localAddress = "";
  localPort = 0;
  remoteAddress = "";
  remoteFamily = "";
  remotePort = 0;
  autoSelectFamilyAttemptedAddresses = [];
  readyState = "readOnly";
  constructor(_options) {
    super();
  }
  write(_buffer, _arg1, _arg2) {
    return false;
  }
  connect(_arg1, _arg2, _arg3) {
    return this;
  }
  end(_arg1, _arg2, _arg3) {
    return this;
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  setTimeout(_timeout, _callback) {
    return this;
  }
  setNoDelay(_noDelay) {
    return this;
  }
  setKeepAlive(_enable, _initialDelay) {
    return this;
  }
  address() {
    return {};
  }
  unref() {
    return this;
  }
  ref() {
    return this;
  }
  destroySoon() {
    this.destroy();
  }
  resetAndDestroy() {
    const err = new Error("ERR_SOCKET_CLOSED");
    err.code = "ERR_SOCKET_CLOSED";
    this.destroy(err);
    return this;
  }
}

class IncomingMessage extends Readable {
  __unenv__ = {};
  aborted = false;
  httpVersion = "1.1";
  httpVersionMajor = 1;
  httpVersionMinor = 1;
  complete = true;
  connection;
  socket;
  headers = {};
  trailers = {};
  method = "GET";
  url = "/";
  statusCode = 200;
  statusMessage = "";
  closed = false;
  errored = null;
  readable = false;
  constructor(socket) {
    super();
    this.socket = this.connection = socket || new Socket();
  }
  get rawHeaders() {
    return rawHeaders(this.headers);
  }
  get rawTrailers() {
    return [];
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  get headersDistinct() {
    return _distinct(this.headers);
  }
  get trailersDistinct() {
    return _distinct(this.trailers);
  }
}
function _distinct(obj) {
  const d = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key) {
      d[key] = (Array.isArray(value) ? value : [value]).filter(
        Boolean
      );
    }
  }
  return d;
}

class ServerResponse extends Writable {
  __unenv__ = true;
  statusCode = 200;
  statusMessage = "";
  upgrading = false;
  chunkedEncoding = false;
  shouldKeepAlive = false;
  useChunkedEncodingByDefault = false;
  sendDate = false;
  finished = false;
  headersSent = false;
  strictContentLength = false;
  connection = null;
  socket = null;
  req;
  _headers = {};
  constructor(req) {
    super();
    this.req = req;
  }
  assignSocket(socket) {
    socket._httpMessage = this;
    this.socket = socket;
    this.connection = socket;
    this.emit("socket", socket);
    this._flush();
  }
  _flush() {
    this.flushHeaders();
  }
  detachSocket(_socket) {
  }
  writeContinue(_callback) {
  }
  writeHead(statusCode, arg1, arg2) {
    if (statusCode) {
      this.statusCode = statusCode;
    }
    if (typeof arg1 === "string") {
      this.statusMessage = arg1;
      arg1 = void 0;
    }
    const headers = arg2 || arg1;
    if (headers) {
      if (Array.isArray(headers)) ; else {
        for (const key in headers) {
          this.setHeader(key, headers[key]);
        }
      }
    }
    this.headersSent = true;
    return this;
  }
  writeProcessing() {
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  appendHeader(name, value) {
    name = name.toLowerCase();
    const current = this._headers[name];
    const all = [
      ...Array.isArray(current) ? current : [current],
      ...Array.isArray(value) ? value : [value]
    ].filter(Boolean);
    this._headers[name] = all.length > 1 ? all : all[0];
    return this;
  }
  setHeader(name, value) {
    this._headers[name.toLowerCase()] = value;
    return this;
  }
  getHeader(name) {
    return this._headers[name.toLowerCase()];
  }
  getHeaders() {
    return this._headers;
  }
  getHeaderNames() {
    return Object.keys(this._headers);
  }
  hasHeader(name) {
    return name.toLowerCase() in this._headers;
  }
  removeHeader(name) {
    delete this._headers[name.toLowerCase()];
  }
  addTrailers(_headers) {
  }
  flushHeaders() {
  }
  writeEarlyHints(_headers, cb) {
    if (typeof cb === "function") {
      cb();
    }
  }
}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$2 = (obj, key, value) => {
  __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Error extends Error {
  constructor(message, opts = {}) {
    super(message, opts);
    __publicField$2(this, "statusCode", 500);
    __publicField$2(this, "fatal", false);
    __publicField$2(this, "unhandled", false);
    __publicField$2(this, "statusMessage");
    __publicField$2(this, "data");
    __publicField$2(this, "cause");
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
__publicField$2(H3Error, "__h3_error__", true);
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, void 0, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}
function isMethod(event, expected, allowHead) {
  if (allowHead && event.method === "HEAD") {
    return true;
  }
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected, allowHead)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const xForwardedHost = event.node.req.headers["x-forwarded-host"];
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event);
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  return new URL(path, `${protocol}://${host}`);
}
function getRequestIP(event, opts = {}) {
  if (event.context.clientAddress) {
    return event.context.clientAddress;
  }
  if (opts.xForwardedFor) {
    const xForwardedFor = getRequestHeader(event, "x-forwarded-for")?.split(",").shift()?.trim();
    if (xForwardedFor) {
      return xForwardedFor;
    }
  }
  if (event.node.req.socket.remoteAddress) {
    return event.node.req.socket.remoteAddress;
  }
}

const RawBodySymbol = Symbol.for("h3RawBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "")) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== void 0) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= opts.modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}

function parseCookies(event) {
  return parse(event.node.req.headers.cookie || "");
}
function getCookie(event, name) {
  return parseCookies(event)[name];
}
function setCookie(event, name, value, serializeOptions) {
  serializeOptions = { path: "/", ...serializeOptions };
  const cookieStr = serialize(name, value, serializeOptions);
  let setCookies = event.node.res.getHeader("set-cookie");
  if (!Array.isArray(setCookies)) {
    setCookies = [setCookies];
  }
  const _optionsHash = objectHash(serializeOptions);
  setCookies = setCookies.filter((cookieValue) => {
    return cookieValue && _optionsHash !== objectHash(parse(cookieValue));
  });
  event.node.res.setHeader("set-cookie", [...setCookies, cookieStr]);
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function getResponseStatusText(event) {
  return event.node.res.statusMessage;
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeaders(event) {
  return event.node.res.getHeaders();
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(name, value);
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
const setHeader = setResponseHeader;
function appendResponseHeader(event, name, value) {
  let current = event.node.res.getHeader(name);
  if (!current) {
    event.node.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.node.res.setHeader(name, [...current, value]);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host",
  "accept"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => void 0);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders(
    getProxyRequestHeaders(event),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  const response = await _getFetch(opts.fetch)(target, {
    headers: opts.headers,
    ignoreResponseError: true,
    // make $ofetch.raw transparent
    ...opts.fetchOptions
  });
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== void 0) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name)) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    for (const [key, value] of Object.entries(input)) {
      if (value !== void 0) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Event {
  constructor(req, res) {
    __publicField(this, "__is_event__", true);
    // Context
    __publicField(this, "node");
    // Node
    __publicField(this, "web");
    // Web
    __publicField(this, "context", {});
    // Shared
    // Request
    __publicField(this, "_method");
    __publicField(this, "_path");
    __publicField(this, "_headers");
    __publicField(this, "_requestBody");
    // Response
    __publicField(this, "_handled", false);
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. **/
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. **/
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      "[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.",
      _route && _route !== "/" ? `
     Route: ${_route}` : "",
      `
     Handler: ${input}`
    );
  }
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler2
          );
        }
        _resolved = { handler: toEventHandler(r.default || r) };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler((event) => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then((r) => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const resolve = createResolver(stack);
  handler.__resolve__ = resolve;
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options));
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket();
    }
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({ ...arg2, handler: arg1 }));
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : void 0;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _reqPath = event._path || event.node.req.url || "/";
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _layerPath;
      const val = await layer.handler(event);
      const _body = val === void 0 ? void 0 : await val;
      if (_body !== void 0) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          await options.onAfterResponse(event, void 0);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      await options.onAfterResponse(event, void 0);
    }
  });
}
function createResolver(stack) {
  return async (path) => {
    let _layerPath;
    for (const layer of stack) {
      if (layer.route === "/" && !layer.handler.__resolve__) {
        continue;
      }
      if (!path.startsWith(layer.route)) {
        continue;
      }
      _layerPath = path.slice(layer.route.length) || "/";
      if (layer.match && !layer.match(_layerPath, void 0)) {
        continue;
      }
      let res = { route: layer.route, handler: layer.handler };
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath);
        if (!_res) {
          continue;
        }
        res = {
          ...res,
          ..._res,
          route: joinURL(res.route || "/", _res.route || "/")
        };
      }
      return res;
    }
  };
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, void 0, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, void 0, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}
function cachedFn(fn) {
  let cache;
  return () => {
    if (!cache) {
      cache = fn();
    }
    return cache;
  };
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
      const { pathname } = parseURL(info.url || "/");
      const resolved = await evResolver(pathname);
      return resolved?.handler?.__websocket__ || {};
    }
  };
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler, void 0, path);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  const matchHandler = (path = "/", method = "get") => {
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      return {
        error: createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${path || "/"}.`
        })
      };
    }
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      return {
        error: createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        })
      };
    }
    return { matched, handler };
  };
  const isPreemptive = opts.preemptive || opts.preemtive;
  router.handler = eventHandler((event) => {
    const match = matchHandler(
      event.path,
      event.method.toLowerCase()
    );
    if ("error" in match) {
      if (isPreemptive) {
        throw match.error;
      } else {
        return;
      }
    }
    event.context.matchedRoute = match.matched;
    const params = match.matched.params || {};
    event.context.params = params;
    return Promise.resolve(match.handler(event)).then((res) => {
      if (res === void 0 && isPreemptive) {
        return null;
      }
      return res;
    });
  });
  router.handler.__resolve__ = async (path) => {
    path = withLeadingSlash(path);
    const match = matchHandler(path);
    if ("error" in match) {
      return;
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    };
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path);
      if (!_res) {
        return;
      }
      res = { ...res, ..._res };
    }
    return res;
  };
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      await sendError(event, error, !!app.options.debug);
    }
  };
  return toNodeHandle;
}

const s=globalThis.Headers,i=globalThis.AbortController,l=globalThis.fetch||(()=>{throw new Error("[node-fetch-native] Failed to fetch: `globalThis.fetch` is not available!")});

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function mergeFetchOptions(input, defaults, Headers = globalThis.Headers) {
  const merged = {
    ...defaults,
    ...input
  };
  if (defaults?.params && input?.params) {
    merged.params = {
      ...defaults?.params,
      ...input?.params
    };
  }
  if (defaults?.query && input?.query) {
    merged.query = {
      ...defaults?.query,
      ...input?.query
    };
  }
  if (defaults?.headers && input?.headers) {
    merged.headers = new Headers(defaults?.headers || {});
    for (const [key, value] of new Headers(input?.headers || {})) {
      merged.headers.set(key, value);
    }
  }
  return merged;
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  //  Gateway Timeout
]);
const nullBodyResponses$1 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch$1(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1,
          timeout: context.options.timeout
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: mergeFetchOptions(_options, globalOptions.defaults, Headers),
      response: void 0,
      error: void 0
    };
    context.options.method = context.options.method?.toUpperCase();
    if (context.options.onRequest) {
      await context.options.onRequest(context);
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query || context.options.params) {
        context.request = withQuery(context.request, {
          ...context.options.params,
          ...context.options.query
        });
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
        context.options.headers = new Headers(context.options.headers || {});
        if (!context.options.headers.has("content-type")) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      setTimeout(() => controller.abort(), context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await context.options.onRequestError(context);
      }
      return await onError(context);
    }
    const hasBody = context.response.body && !nullBodyResponses$1.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await context.options.onResponse(context);
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await context.options.onResponseError(context);
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}) => createFetch$1({
    ...globalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return l;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new http__default$1.Agent(agentOptions);
  const httpsAgent = new node_https__default.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return l(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch = globalThis.fetch || createNodeFetch();
const Headers$1 = globalThis.Headers || s;
const AbortController$1 = globalThis.AbortController || i;
createFetch$1({ fetch, Headers: Headers$1, AbortController: AbortController$1 });

const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createCall(handle) {
  return function callHandle(context) {
    const req = new IncomingMessage();
    const res = new ServerResponse(req);
    req.url = context.url || "/";
    req.method = context.method || "GET";
    req.headers = {};
    if (context.headers) {
      const headerEntries = typeof context.headers.entries === "function" ? context.headers.entries() : Object.entries(context.headers);
      for (const [name, value] of headerEntries) {
        if (!value) {
          continue;
        }
        req.headers[name.toLowerCase()] = value;
      }
    }
    req.headers.host = req.headers.host || context.host || "localhost";
    req.connection.encrypted = // @ts-ignore
    req.connection.encrypted || context.protocol === "https";
    req.body = context.body || null;
    req.__unenv__ = context.context;
    return handle(req, res).then(() => {
      let body = res._data;
      if (nullBodyResponses.has(res.statusCode) || req.method.toUpperCase() === "HEAD") {
        body = null;
        delete res._headers["content-length"];
      }
      const r = {
        body,
        headers: res._headers,
        status: res.statusCode,
        statusText: res.statusMessage
      };
      req.destroy();
      res.destroy();
      return r;
    });
  };
}

function createFetch(call, _fetch = global.fetch) {
  return async function ufetch(input, init) {
    const url = input.toString();
    if (!url.startsWith("/")) {
      return _fetch(url, init);
    }
    try {
      const r = await call({ url, ...init });
      return new Response(r.body, {
        status: r.status,
        statusText: r.statusText,
        headers: Object.fromEntries(
          Object.entries(r.headers).map(([name, value]) => [
            name,
            Array.isArray(value) ? value.join(",") : String(value) || ""
          ])
        )
      });
    } catch (error) {
      return new Response(error.toString(), {
        status: Number.parseInt(error.statusCode || error.code) || 500,
        statusText: error.statusText
      });
    }
  };
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = separators ?? STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner ?? "-") : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const inlineAppConfig = {};



const appConfig$1 = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/"
  },
  "nitro": {
    "routeRules": {}
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig$1));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
function checkBufferSupport() {
  if (typeof Buffer === void 0) {
    throw new TypeError("[unstorage] Buffer is not supported!");
  }
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  checkBufferSupport();
  const base64 = Buffer.from(value).toString("base64");
  return BASE64_PREFIX + base64;
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  checkBufferSupport();
  return Buffer.from(value.slice(BASE64_PREFIX.length), "base64");
}

const storageKeyProperties = [
  "hasItem",
  "getItem",
  "getItemRaw",
  "setItem",
  "setItemRaw",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$1 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$1,
    options: {},
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return Array.from(data.keys());
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          await asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      for (const mount of mounts) {
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        const keys = rawKeys.map((key) => mount.mountpoint + normalizeKey$1(key)).filter((key) => !maskedMounts.some((p) => key.startsWith(p)));
        allKeys.push(...keys);
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      return base ? allKeys.filter((key) => key.startsWith(base) && !key.endsWith("$")) : allKeys.filter((key) => !key.endsWith("$"));
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    }
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {

};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
};

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        const dirFiles = await readdirRecursive(entryPath, ignore);
        files.push(...dirFiles.map((f) => entry.name + "/" + f));
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises.rmdir(entryPath));
      } else {
        return promises.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.\:|\.\.$/;
const DRIVER_NAME = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME, "base");
  }
  opts.base = resolve$1(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME,
    options: opts,
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys() {
      return readdirRecursive(r("."), opts.ignore);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"C:\\Users\\эльдорадо\\OneDrive\\Рабочий стол\\diplomeproject2 — копия\\.data\\kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());

const nitroAsyncContext = getContext("nitro-app", {
  asyncContext: true,
  AsyncLocalStorage: AsyncLocalStorage 
});

const appConfig = {"name":"vinxi","routers":[{"name":"public","type":"static","base":"/","dir":"./public","root":"C:\\Users\\эльдорадо\\OneDrive\\Рабочий стол\\diplomeproject2 — копия","order":0,"outDir":"C:/Users/эльдорадо/OneDrive/Рабочий стол/diplomeproject2 — копия/.vinxi/build/public"},{"name":"ssr","type":"http","link":{"client":"client"},"handler":"src/entry-server.tsx","extensions":["js","jsx","ts","tsx"],"target":"server","root":"C:\\Users\\эльдорадо\\OneDrive\\Рабочий стол\\diplomeproject2 — копия","base":"/","outDir":"C:/Users/эльдорадо/OneDrive/Рабочий стол/diplomeproject2 — копия/.vinxi/build/ssr","order":1},{"name":"client","type":"client","base":"/_build","handler":"src/entry-client.tsx","extensions":["js","jsx","ts","tsx"],"target":"browser","root":"C:\\Users\\эльдорадо\\OneDrive\\Рабочий стол\\diplomeproject2 — копия","outDir":"C:/Users/эльдорадо/OneDrive/Рабочий стол/diplomeproject2 — копия/.vinxi/build/client","order":2},{"name":"server-fns","type":"http","base":"/_server","handler":"node_modules/@solidjs/start/config/server-handler.ts","target":"server","root":"C:\\Users\\эльдорадо\\OneDrive\\Рабочий стол\\diplomeproject2 — копия","outDir":"C:/Users/эльдорадо/OneDrive/Рабочий стол/diplomeproject2 — копия/.vinxi/build/server-fns","order":3}],"server":{"compressPublicAssets":{"brotli":true},"experimental":{"asyncContext":true}},"root":"C:\\Users\\эльдорадо\\OneDrive\\Рабочий стол\\diplomeproject2 — копия"};
				const buildManifest = {"ssr":{"_Base-B57mFvZQ.js":{"file":"assets/Base-B57mFvZQ.js","assets":["assets/Base-D3uFkxDl.png"]},"_Card2-B-hOhevk.js":{"file":"assets/Card2-B-hOhevk.js","imports":["_routing-Bhfc4cv3.js","_LoaderIcon-CffO8xFE.js"]},"_Footer-3Yxp6Czj.js":{"file":"assets/Footer-3Yxp6Czj.js","assets":["assets/logofooter-Dc7MQWnT.svg"]},"_LoaderIcon-CffO8xFE.js":{"file":"assets/LoaderIcon-CffO8xFE.js"},"_components-ChzR-lMO.js":{"file":"assets/components-ChzR-lMO.js","imports":["_routing-Bhfc4cv3.js"]},"_product-BIrgGnpd.js":{"file":"assets/product-BIrgGnpd.js","assets":["assets/product-BNwlNQck.png"]},"_routing-Bhfc4cv3.js":{"file":"assets/routing-Bhfc4cv3.js"},"node_modules/shikiji/dist/onig.wasm":{"file":"assets/onig-Du5pRr7Y.wasm","src":"node_modules/shikiji/dist/onig.wasm"},"src/img/Base.png":{"file":"assets/Base-D3uFkxDl.png","src":"src/img/Base.png"},"src/img/banner.png":{"file":"assets/banner-CMWWeWHk.png","src":"src/img/banner.png"},"src/img/catcategoty.png":{"file":"assets/catcategoty-DZWzhche.png","src":"src/img/catcategoty.png"},"src/img/category1.png":{"file":"assets/category1-DW47B9lk.png","src":"src/img/category1.png"},"src/img/fishcategory.png":{"file":"assets/fishcategory-BzFKVmMT.png","src":"src/img/fishcategory.png"},"src/img/logo.svg":{"file":"assets/logo-HaIiWWCp.svg","src":"src/img/logo.svg"},"src/img/logobanner1.png":{"file":"assets/logobanner1-BeZw9Phg.png","src":"src/img/logobanner1.png"},"src/img/logofooter.svg":{"file":"assets/logofooter-Dc7MQWnT.svg","src":"src/img/logofooter.svg"},"src/img/parrotcategory.png":{"file":"assets/parrotcategory-CUne2f9q.png","src":"src/img/parrotcategory.png"},"src/img/product.png":{"file":"assets/product-BNwlNQck.png","src":"src/img/product.png"},"src/img/rodents.png":{"file":"assets/rodents-Bp5pXC5h.png","src":"src/img/rodents.png"},"src/routes/[...404].tsx?pick=default&pick=$css":{"file":"_...404_.js","src":"src/routes/[...404].tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_Footer-3Yxp6Czj.js"]},"src/routes/cart.tsx?pick=default&pick=$css":{"file":"cart.js","src":"src/routes/cart.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_Footer-3Yxp6Czj.js","_product-BIrgGnpd.js","_LoaderIcon-CffO8xFE.js","_components-ChzR-lMO.js","_routing-Bhfc4cv3.js"]},"src/routes/catalog.tsx?pick=default&pick=$css":{"file":"catalog.js","src":"src/routes/catalog.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_Footer-3Yxp6Czj.js","_Base-B57mFvZQ.js","_routing-Bhfc4cv3.js","_LoaderIcon-CffO8xFE.js","_components-ChzR-lMO.js"]},"src/routes/checkout.tsx?pick=default&pick=$css":{"file":"checkout.js","src":"src/routes/checkout.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_Footer-3Yxp6Czj.js","_components-ChzR-lMO.js","_routing-Bhfc4cv3.js"]},"src/routes/favorites.tsx?pick=default&pick=$css":{"file":"favorites.js","src":"src/routes/favorites.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_Footer-3Yxp6Czj.js","_routing-Bhfc4cv3.js","_LoaderIcon-CffO8xFE.js","_components-ChzR-lMO.js"]},"src/routes/index.tsx?pick=default&pick=$css":{"file":"index.js","src":"src/routes/index.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_Card2-B-hOhevk.js","_Base-B57mFvZQ.js","_Footer-3Yxp6Czj.js","_routing-Bhfc4cv3.js","_LoaderIcon-CffO8xFE.js"],"css":["assets/index-Cd5ZnWH_.css"],"assets":["assets/category1-DW47B9lk.png","assets/catcategoty-DZWzhche.png","assets/parrotcategory-CUne2f9q.png","assets/fishcategory-BzFKVmMT.png","assets/rodents-Bp5pXC5h.png","assets/banner-CMWWeWHk.png","assets/logobanner1-BeZw9Phg.png"]},"src/routes/login.tsx?pick=default&pick=$css":{"file":"login.js","src":"src/routes/login.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_Footer-3Yxp6Czj.js","_components-ChzR-lMO.js","_routing-Bhfc4cv3.js"]},"src/routes/productinfo.tsx?pick=default&pick=$css":{"file":"productinfo.js","src":"src/routes/productinfo.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_Footer-3Yxp6Czj.js","_product-BIrgGnpd.js","_Card2-B-hOhevk.js","_routing-Bhfc4cv3.js","_LoaderIcon-CffO8xFE.js","_components-ChzR-lMO.js"]},"src/routes/profile.tsx?pick=default&pick=$css":{"file":"profile.js","src":"src/routes/profile.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_Footer-3Yxp6Czj.js","_routing-Bhfc4cv3.js","_LoaderIcon-CffO8xFE.js","_components-ChzR-lMO.js"]},"src/routes/reg.tsx?pick=default&pick=$css":{"file":"reg.js","src":"src/routes/reg.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_Footer-3Yxp6Czj.js"]},"src/routes/thank.tsx?pick=default&pick=$css":{"file":"thank.js","src":"src/routes/thank.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_Footer-3Yxp6Czj.js"]},"virtual:#vinxi/handler/ssr":{"file":"ssr.js","src":"virtual:#vinxi/handler/ssr","isEntry":true,"imports":["_routing-Bhfc4cv3.js"],"dynamicImports":["src/routes/cart.tsx?pick=default&pick=$css","src/routes/cart.tsx?pick=default&pick=$css","src/routes/catalog.tsx?pick=default&pick=$css","src/routes/catalog.tsx?pick=default&pick=$css","src/routes/checkout.tsx?pick=default&pick=$css","src/routes/checkout.tsx?pick=default&pick=$css","src/routes/favorites.tsx?pick=default&pick=$css","src/routes/favorites.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/login.tsx?pick=default&pick=$css","src/routes/login.tsx?pick=default&pick=$css","src/routes/productinfo.tsx?pick=default&pick=$css","src/routes/productinfo.tsx?pick=default&pick=$css","src/routes/profile.tsx?pick=default&pick=$css","src/routes/profile.tsx?pick=default&pick=$css","src/routes/reg.tsx?pick=default&pick=$css","src/routes/reg.tsx?pick=default&pick=$css","src/routes/thank.tsx?pick=default&pick=$css","src/routes/thank.tsx?pick=default&pick=$css","src/routes/[...404].tsx?pick=default&pick=$css","src/routes/[...404].tsx?pick=default&pick=$css"],"css":["assets/ssr-BahL7dT3.css"],"assets":["assets/logo-HaIiWWCp.svg"]}},"client":{"_Base-B57mFvZQ.js":{"file":"assets/Base-B57mFvZQ.js","assets":["assets/Base-D3uFkxDl.png"]},"_Card2-Ch_ta0W4.js":{"file":"assets/Card2-Ch_ta0W4.js","imports":["_web-D8qGCTXe.js","_routing-B4bTVxWt.js","_LoaderIcon-aE-qRZbu.js"]},"_Footer-CazmUOC7.js":{"file":"assets/Footer-CazmUOC7.js","imports":["_web-D8qGCTXe.js"],"assets":["assets/logofooter-Dc7MQWnT.svg"]},"_LoaderIcon-aE-qRZbu.js":{"file":"assets/LoaderIcon-aE-qRZbu.js","imports":["_web-D8qGCTXe.js"]},"_components-CBlfzv1Q.js":{"file":"assets/components-CBlfzv1Q.js","imports":["_web-D8qGCTXe.js","_routing-B4bTVxWt.js"]},"_index-fOczvcKO.js":{"file":"assets/index-fOczvcKO.js"},"_product-BIrgGnpd.js":{"file":"assets/product-BIrgGnpd.js","assets":["assets/product-BNwlNQck.png"]},"_routing-B4bTVxWt.js":{"file":"assets/routing-B4bTVxWt.js","imports":["_web-D8qGCTXe.js"]},"_web-D8qGCTXe.js":{"file":"assets/web-D8qGCTXe.js"},"node_modules/shikiji/dist/onig.wasm":{"file":"assets/onig-Du5pRr7Y.wasm","src":"node_modules/shikiji/dist/onig.wasm"},"src/img/Base.png":{"file":"assets/Base-D3uFkxDl.png","src":"src/img/Base.png"},"src/img/banner.png":{"file":"assets/banner-CMWWeWHk.png","src":"src/img/banner.png"},"src/img/catcategoty.png":{"file":"assets/catcategoty-DZWzhche.png","src":"src/img/catcategoty.png"},"src/img/category1.png":{"file":"assets/category1-DW47B9lk.png","src":"src/img/category1.png"},"src/img/fishcategory.png":{"file":"assets/fishcategory-BzFKVmMT.png","src":"src/img/fishcategory.png"},"src/img/logo.svg":{"file":"assets/logo-HaIiWWCp.svg","src":"src/img/logo.svg"},"src/img/logobanner1.png":{"file":"assets/logobanner1-BeZw9Phg.png","src":"src/img/logobanner1.png"},"src/img/logofooter.svg":{"file":"assets/logofooter-Dc7MQWnT.svg","src":"src/img/logofooter.svg"},"src/img/parrotcategory.png":{"file":"assets/parrotcategory-CUne2f9q.png","src":"src/img/parrotcategory.png"},"src/img/product.png":{"file":"assets/product-BNwlNQck.png","src":"src/img/product.png"},"src/img/rodents.png":{"file":"assets/rodents-Bp5pXC5h.png","src":"src/img/rodents.png"},"src/routes/[...404].tsx?pick=default&pick=$css":{"file":"assets/_...404_-DUA12w7Q.js","src":"src/routes/[...404].tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-D8qGCTXe.js","_Footer-CazmUOC7.js"]},"src/routes/cart.tsx?pick=default&pick=$css":{"file":"assets/cart-CPZykOb-.js","src":"src/routes/cart.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-D8qGCTXe.js","_Footer-CazmUOC7.js","_product-BIrgGnpd.js","_LoaderIcon-aE-qRZbu.js","_components-CBlfzv1Q.js","_routing-B4bTVxWt.js"]},"src/routes/catalog.tsx?pick=default&pick=$css":{"file":"assets/catalog-BPcOHE23.js","src":"src/routes/catalog.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-D8qGCTXe.js","_Footer-CazmUOC7.js","_Base-B57mFvZQ.js","_routing-B4bTVxWt.js","_LoaderIcon-aE-qRZbu.js","_components-CBlfzv1Q.js"]},"src/routes/checkout.tsx?pick=default&pick=$css":{"file":"assets/checkout-GJgyrJOI.js","src":"src/routes/checkout.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-D8qGCTXe.js","_Footer-CazmUOC7.js","_index-fOczvcKO.js","_components-CBlfzv1Q.js","_routing-B4bTVxWt.js"]},"src/routes/favorites.tsx?pick=default&pick=$css":{"file":"assets/favorites-C0CyK_fX.js","src":"src/routes/favorites.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-D8qGCTXe.js","_Footer-CazmUOC7.js","_routing-B4bTVxWt.js","_LoaderIcon-aE-qRZbu.js","_components-CBlfzv1Q.js"]},"src/routes/index.tsx?pick=default&pick=$css":{"file":"assets/index-Em_zRj3o.js","src":"src/routes/index.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-D8qGCTXe.js","_Card2-Ch_ta0W4.js","_Base-B57mFvZQ.js","_Footer-CazmUOC7.js","_routing-B4bTVxWt.js","_LoaderIcon-aE-qRZbu.js"],"css":["assets/index-Cd5ZnWH_.css"],"assets":["assets/category1-DW47B9lk.png","assets/catcategoty-DZWzhche.png","assets/parrotcategory-CUne2f9q.png","assets/fishcategory-BzFKVmMT.png","assets/rodents-Bp5pXC5h.png","assets/banner-CMWWeWHk.png","assets/logobanner1-BeZw9Phg.png"]},"src/routes/login.tsx?pick=default&pick=$css":{"file":"assets/login-DcxKm-JB.js","src":"src/routes/login.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-D8qGCTXe.js","_Footer-CazmUOC7.js","_components-CBlfzv1Q.js","_routing-B4bTVxWt.js"]},"src/routes/productinfo.tsx?pick=default&pick=$css":{"file":"assets/productinfo-DTubpYpe.js","src":"src/routes/productinfo.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-D8qGCTXe.js","_Footer-CazmUOC7.js","_product-BIrgGnpd.js","_Card2-Ch_ta0W4.js","_routing-B4bTVxWt.js","_LoaderIcon-aE-qRZbu.js","_components-CBlfzv1Q.js"]},"src/routes/profile.tsx?pick=default&pick=$css":{"file":"assets/profile-BesJcHBg.js","src":"src/routes/profile.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-D8qGCTXe.js","_Footer-CazmUOC7.js","_index-fOczvcKO.js","_routing-B4bTVxWt.js","_LoaderIcon-aE-qRZbu.js","_components-CBlfzv1Q.js"]},"src/routes/reg.tsx?pick=default&pick=$css":{"file":"assets/reg-B-_rmmxr.js","src":"src/routes/reg.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-D8qGCTXe.js","_Footer-CazmUOC7.js"]},"src/routes/thank.tsx?pick=default&pick=$css":{"file":"assets/thank-Br0Ta-gx.js","src":"src/routes/thank.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-D8qGCTXe.js","_Footer-CazmUOC7.js"]},"virtual:#vinxi/handler/client":{"file":"assets/client-BX3zLUfQ.js","src":"virtual:#vinxi/handler/client","isEntry":true,"imports":["_web-D8qGCTXe.js","_routing-B4bTVxWt.js"],"dynamicImports":["src/routes/cart.tsx?pick=default&pick=$css","src/routes/catalog.tsx?pick=default&pick=$css","src/routes/checkout.tsx?pick=default&pick=$css","src/routes/favorites.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/login.tsx?pick=default&pick=$css","src/routes/productinfo.tsx?pick=default&pick=$css","src/routes/profile.tsx?pick=default&pick=$css","src/routes/reg.tsx?pick=default&pick=$css","src/routes/thank.tsx?pick=default&pick=$css","src/routes/[...404].tsx?pick=default&pick=$css"],"css":["assets/client-BahL7dT3.css"],"assets":["assets/logo-HaIiWWCp.svg"]}},"server-fns":{"_Base.mjs":{"file":"Base.mjs","assets":["assets/Base-D3uFkxDl.png"]},"_Card2.mjs":{"file":"Card2.mjs","imports":["_server-fns.mjs","_LoaderIcon.mjs"]},"_Footer.mjs":{"file":"Footer.mjs","assets":["assets/logofooter-Dc7MQWnT.svg"]},"_LoaderIcon.mjs":{"file":"LoaderIcon.mjs"},"_components.mjs":{"file":"components.mjs","imports":["_server-fns.mjs"]},"_product.mjs":{"file":"product.mjs","assets":["assets/product-BNwlNQck.png"]},"_server-fns.mjs":{"file":"server-fns.mjs","dynamicImports":["src/routes/cart.tsx?pick=default&pick=$css","src/routes/cart.tsx?pick=default&pick=$css","src/routes/catalog.tsx?pick=default&pick=$css","src/routes/catalog.tsx?pick=default&pick=$css","src/routes/checkout.tsx?pick=default&pick=$css","src/routes/checkout.tsx?pick=default&pick=$css","src/routes/favorites.tsx?pick=default&pick=$css","src/routes/favorites.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/login.tsx?pick=default&pick=$css","src/routes/login.tsx?pick=default&pick=$css","src/routes/productinfo.tsx?pick=default&pick=$css","src/routes/productinfo.tsx?pick=default&pick=$css","src/routes/profile.tsx?pick=default&pick=$css","src/routes/profile.tsx?pick=default&pick=$css","src/routes/reg.tsx?pick=default&pick=$css","src/routes/reg.tsx?pick=default&pick=$css","src/routes/thank.tsx?pick=default&pick=$css","src/routes/thank.tsx?pick=default&pick=$css","src/routes/[...404].tsx?pick=default&pick=$css","src/routes/[...404].tsx?pick=default&pick=$css"],"css":["assets/server-fns-BahL7dT3.css"],"assets":["assets/logo-HaIiWWCp.svg"]},"src/img/Base.png":{"file":"assets/Base-D3uFkxDl.png","src":"src/img/Base.png"},"src/img/banner.png":{"file":"assets/banner-CMWWeWHk.png","src":"src/img/banner.png"},"src/img/catcategoty.png":{"file":"assets/catcategoty-DZWzhche.png","src":"src/img/catcategoty.png"},"src/img/category1.png":{"file":"assets/category1-DW47B9lk.png","src":"src/img/category1.png"},"src/img/fishcategory.png":{"file":"assets/fishcategory-BzFKVmMT.png","src":"src/img/fishcategory.png"},"src/img/logo.svg":{"file":"assets/logo-HaIiWWCp.svg","src":"src/img/logo.svg"},"src/img/logobanner1.png":{"file":"assets/logobanner1-BeZw9Phg.png","src":"src/img/logobanner1.png"},"src/img/logofooter.svg":{"file":"assets/logofooter-Dc7MQWnT.svg","src":"src/img/logofooter.svg"},"src/img/parrotcategory.png":{"file":"assets/parrotcategory-CUne2f9q.png","src":"src/img/parrotcategory.png"},"src/img/product.png":{"file":"assets/product-BNwlNQck.png","src":"src/img/product.png"},"src/img/rodents.png":{"file":"assets/rodents-Bp5pXC5h.png","src":"src/img/rodents.png"},"src/routes/[...404].tsx?pick=default&pick=$css":{"file":"_...404_.mjs","src":"src/routes/[...404].tsx?pick=default&pick=$css","isDynamicEntry":true,"imports":["_Footer.mjs"]},"src/routes/cart.tsx?pick=default&pick=$css":{"file":"cart.mjs","src":"src/routes/cart.tsx?pick=default&pick=$css","isDynamicEntry":true,"imports":["_Footer.mjs","_product.mjs","_LoaderIcon.mjs","_components.mjs","_server-fns.mjs"]},"src/routes/catalog.tsx?pick=default&pick=$css":{"file":"catalog.mjs","src":"src/routes/catalog.tsx?pick=default&pick=$css","isDynamicEntry":true,"imports":["_Footer.mjs","_Base.mjs","_server-fns.mjs","_LoaderIcon.mjs","_components.mjs"]},"src/routes/checkout.tsx?pick=default&pick=$css":{"file":"checkout.mjs","src":"src/routes/checkout.tsx?pick=default&pick=$css","isDynamicEntry":true,"imports":["_Footer.mjs","_components.mjs","_server-fns.mjs"]},"src/routes/favorites.tsx?pick=default&pick=$css":{"file":"favorites.mjs","src":"src/routes/favorites.tsx?pick=default&pick=$css","isDynamicEntry":true,"imports":["_Footer.mjs","_server-fns.mjs","_LoaderIcon.mjs","_components.mjs"]},"src/routes/index.tsx?pick=default&pick=$css":{"file":"index.mjs","src":"src/routes/index.tsx?pick=default&pick=$css","isDynamicEntry":true,"imports":["_Card2.mjs","_Base.mjs","_Footer.mjs","_server-fns.mjs","_LoaderIcon.mjs"],"css":["assets/index-Cd5ZnWH_.css"],"assets":["assets/category1-DW47B9lk.png","assets/catcategoty-DZWzhche.png","assets/parrotcategory-CUne2f9q.png","assets/fishcategory-BzFKVmMT.png","assets/rodents-Bp5pXC5h.png","assets/banner-CMWWeWHk.png","assets/logobanner1-BeZw9Phg.png"]},"src/routes/login.tsx?pick=default&pick=$css":{"file":"login.mjs","src":"src/routes/login.tsx?pick=default&pick=$css","isDynamicEntry":true,"imports":["_Footer.mjs","_components.mjs","_server-fns.mjs"]},"src/routes/productinfo.tsx?pick=default&pick=$css":{"file":"productinfo.mjs","src":"src/routes/productinfo.tsx?pick=default&pick=$css","isDynamicEntry":true,"imports":["_Footer.mjs","_product.mjs","_Card2.mjs","_server-fns.mjs","_LoaderIcon.mjs","_components.mjs"]},"src/routes/profile.tsx?pick=default&pick=$css":{"file":"profile.mjs","src":"src/routes/profile.tsx?pick=default&pick=$css","isDynamicEntry":true,"imports":["_Footer.mjs","_server-fns.mjs","_LoaderIcon.mjs","_components.mjs"]},"src/routes/reg.tsx?pick=default&pick=$css":{"file":"reg.mjs","src":"src/routes/reg.tsx?pick=default&pick=$css","isDynamicEntry":true,"imports":["_Footer.mjs"]},"src/routes/thank.tsx?pick=default&pick=$css":{"file":"thank.mjs","src":"src/routes/thank.tsx?pick=default&pick=$css","isDynamicEntry":true,"imports":["_Footer.mjs"]},"virtual:#vinxi/handler/server-fns":{"file":"entry.mjs","src":"virtual:#vinxi/handler/server-fns","isEntry":true,"imports":["_server-fns.mjs"]}}};

				const routeManifest = {"ssr":{},"client":{},"server-fns":{}};

        function createProdApp(appConfig) {
          return {
            config: { ...appConfig, buildManifest, routeManifest },
            getRouter(name) {
              return appConfig.routers.find(router => router.name === name)
            }
          }
        }

        function plugin$2(app) {
          const prodApp = createProdApp(appConfig);
          globalThis.app = prodApp;
        }

function plugin$1(app) {
	globalThis.$handle = (event) => app.h3App.handler(event);
}

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};

/**
 * Traverses the module graph and collects assets for a given chunk
 *
 * @param {any} manifest Client manifest
 * @param {string} id Chunk id
 * @param {Map<string, string[]>} assetMap Cache of assets
 * @returns Array of asset URLs
 */
const findAssetsInViteManifest = (manifest, id, assetMap = new Map()) => {
	const stack = [];

	/**
	 * @param {string} id
	 */
	function traverse(id) {
		if (stack.includes(id)) {
			return [];
		}

		const cached = assetMap.get(id);
		if (cached) {
			return cached;
		}
		const chunk = manifest[id];
		if (!chunk) {
			return [];
		}

		stack.push(id);

		const assets = [
			...(chunk.assets || []),
			...(chunk.css || []),
			...(chunk.imports?.flatMap(traverse) || []),
		];
		const imports = chunk.imports?.flatMap(traverse) || [];
		const all = [...assets, ...imports].filter(Boolean);
		all.push(chunk.file);
		assetMap.set(id, all);

		stack.pop();

		return Array.from(new Set(all));
	}
	return traverse(id);
};

/** @typedef {import("../app.js").App & { config: { buildManifest: { [key:string]: any } }}} ProdApp */

function createHtmlTagsForAssets(router, app, assets) {
	return assets
		.filter(
			(asset) =>
				asset.endsWith(".css") ||
				asset.endsWith(".js") ||
				asset.endsWith(".mjs"),
		)
		.map((asset) => ({
			tag: "link",
			attrs: {
				href: joinURL(app.config.server.baseURL ?? "/", router.base, asset),
				key: join$1(app.config.server.baseURL ?? "", router.base, asset),
				...(asset.endsWith(".css")
					? { rel: "stylesheet", precendence: "high" }
					: { rel: "modulepreload" }),
			},
		}));
}

/**
 *
 * @param {ProdApp} app
 * @returns
 */
function createProdManifest(app) {
	const manifest = new Proxy(
		{},
		{
			get(target, routerName) {
				invariant(typeof routerName === "string", "Bundler name expected");
				const router = app.getRouter(routerName);
				const bundlerManifest = app.config.buildManifest[routerName];

				invariant(
					router.type !== "static",
					"manifest not available for static router",
				);
				return {
					handler: router.handler,
					async assets() {
						/** @type {{ [key: string]: string[] }} */
						let assets = {};
						assets[router.handler] = await this.inputs[router.handler].assets();
						for (const route of (await router.internals.routes?.getRoutes()) ??
							[]) {
							assets[route.filePath] = await this.inputs[
								route.filePath
							].assets();
						}
						return assets;
					},
					async routes() {
						return (await router.internals.routes?.getRoutes()) ?? [];
					},
					async json() {
						/** @type {{ [key: string]: { output: string; assets: string[]} }} */
						let json = {};
						for (const input of Object.keys(this.inputs)) {
							json[input] = {
								output: this.inputs[input].output.path,
								assets: await this.inputs[input].assets(),
							};
						}
						return json;
					},
					chunks: new Proxy(
						{},
						{
							get(target, chunk) {
								invariant(typeof chunk === "string", "Chunk expected");
								const chunkPath = join$1(
									router.outDir,
									router.base,
									chunk + ".mjs",
								);
								return {
									import() {
										if (globalThis.$$chunks[chunk + ".mjs"]) {
											return globalThis.$$chunks[chunk + ".mjs"];
										}
										return import(
											/* @vite-ignore */ pathToFileURL(chunkPath).href
										);
									},
									output: {
										path: chunkPath,
									},
								};
							},
						},
					),
					inputs: new Proxy(
						{},
						{
							ownKeys(target) {
								const keys = Object.keys(bundlerManifest)
									.filter((id) => bundlerManifest[id].isEntry)
									.map((id) => id);
								return keys;
							},
							getOwnPropertyDescriptor(k) {
								return {
									enumerable: true,
									configurable: true,
								};
							},
							get(target, input) {
								invariant(typeof input === "string", "Input expected");
								if (router.target === "server") {
									const id =
										input === router.handler
											? virtualId(handlerModule(router))
											: input;
									return {
										assets() {
											return createHtmlTagsForAssets(
												router,
												app,
												findAssetsInViteManifest(bundlerManifest, id),
											);
										},
										output: {
											path: join$1(
												router.outDir,
												router.base,
												bundlerManifest[id].file,
											),
										},
									};
								} else if (router.target === "browser") {
									const id =
										input === router.handler && !input.endsWith(".html")
											? virtualId(handlerModule(router))
											: input;
									return {
										import() {
											return import(
												/* @vite-ignore */ joinURL(
													app.config.server.baseURL ?? "",
													router.base,
													bundlerManifest[id].file,
												)
											);
										},
										assets() {
											return createHtmlTagsForAssets(
												router,
												app,
												findAssetsInViteManifest(bundlerManifest, id),
											);
										},
										output: {
											path: joinURL(
												app.config.server.baseURL ?? "",
												router.base,
												bundlerManifest[id].file,
											),
										},
									};
								}
							},
						},
					),
				};
			},
		},
	);

	return manifest;
}

function plugin() {
	globalThis.MANIFEST =
		createProdManifest(globalThis.app)
			;
}

const chunks = {};
			 



			 function app() {
				 globalThis.$$chunks = chunks;
			 }

const plugins = [
  plugin$2,
plugin$1,
plugin,
app
];

function defineNitroErrorHandler(handler) {
  return handler;
}
const errorHandler = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const { stack, statusCode, statusMessage, message } = normalizeError(error);
    const errorObject = {
      url: event.path || "",
      statusCode,
      statusMessage,
      message,
      stack: void 0
    };
    if (error.unhandled || error.fatal) {
      const tags = [
        "[nitro]",
        "[request error]",
        error.unhandled && "[unhandled]",
        error.fatal && "[fatal]"
      ].filter(Boolean).join(" ");
      console.error(
        tags,
        error.message + "\n" + stack.map((l) => "  " + l.text).join("  \n")
      );
    }
    setResponseStatus(event, statusCode, statusMessage);
    if (isJsonRequest(event)) {
      setResponseHeader(event, "Content-Type", "application/json");
      return send(event, JSON.stringify(errorObject));
    } else {
      setResponseHeader(event, "Content-Type", "text/html");
      return send(event, renderHTMLError(errorObject));
    }
  }
);
function renderHTMLError(error) {
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Request Error";
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${statusCode} ${statusMessage}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico/css/pico.min.css">
  </head>
  <body>
    <main class="container">
      <dialog open>
        <article>
          <header>
            <h2>${statusCode} ${statusMessage}</h2>
          </header>
          <code>
            ${error.message}<br><br>
            ${"\n" + (error.stack || []).map((i) => `&nbsp;&nbsp;${i}`).join("<br>")}
          </code>
          <footer>
            <a href="/" onclick="event.preventDefault();history.back();">Go Back</a>
          </footer>
        </article>
      </dialog>
    </main>
  </body>
</html>
`;
}

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"298-hdW7/pL89QptiszdYCHH67XxLxs\"",
    "mtime": "2024-03-04T22:00:59.000Z",
    "size": 664,
    "path": "../public/favicon.ico"
  },
  "/assets/banner-CMWWeWHk.png": {
    "type": "image/png",
    "etag": "\"6a9b7-bmoi0uOYyxLXc8zDWDGYDVQsrk0\"",
    "mtime": "2024-06-14T16:28:45.851Z",
    "size": 436663,
    "path": "../public/assets/banner-CMWWeWHk.png"
  },
  "/assets/Base-B57mFvZQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3b-KMTWenX7nOhbVBwBY7LGL1i1FVM\"",
    "mtime": "2024-06-14T16:28:45.889Z",
    "size": 59,
    "path": "../public/assets/Base-B57mFvZQ.js"
  },
  "/assets/Base-D3uFkxDl.png": {
    "type": "image/png",
    "etag": "\"623f8-niutUhg10WZCw0d0JjE2uIVP2Uc\"",
    "mtime": "2024-06-14T16:28:45.856Z",
    "size": 402424,
    "path": "../public/assets/Base-D3uFkxDl.png"
  },
  "/assets/Card2-B-hOhevk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e5b-iuGpnVNGJZLbz9wWanfrWpQpoYw\"",
    "mtime": "2024-06-14T16:28:45.882Z",
    "size": 3675,
    "path": "../public/assets/Card2-B-hOhevk.js"
  },
  "/assets/Card2-B-hOhevk.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"5fd-57KDsDLfwIZEUPq8lz9mkmnA9Ds\"",
    "mtime": "2024-06-14T16:29:29.482Z",
    "size": 1533,
    "path": "../public/assets/Card2-B-hOhevk.js.br"
  },
  "/assets/Card2-B-hOhevk.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"710-M9cGAm6QzZ9XeQlEXXMA3gpXLG8\"",
    "mtime": "2024-06-14T16:29:29.481Z",
    "size": 1808,
    "path": "../public/assets/Card2-B-hOhevk.js.gz"
  },
  "/assets/catcategoty-DZWzhche.png": {
    "type": "image/png",
    "etag": "\"17a5b-28BHApJ4c1G9h8MsN4JAoTzHkC0\"",
    "mtime": "2024-06-14T16:28:45.850Z",
    "size": 96859,
    "path": "../public/assets/catcategoty-DZWzhche.png"
  },
  "/assets/category1-DW47B9lk.png": {
    "type": "image/png",
    "etag": "\"141b3-wANsZrDynS+mKdEti+G/sOtS6XY\"",
    "mtime": "2024-06-14T16:28:45.852Z",
    "size": 82355,
    "path": "../public/assets/category1-DW47B9lk.png"
  },
  "/assets/components-ChzR-lMO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"338-apdtuBc/etaHzEeUxyN2ok5A/Q8\"",
    "mtime": "2024-06-14T16:28:45.889Z",
    "size": 824,
    "path": "../public/assets/components-ChzR-lMO.js"
  },
  "/assets/fishcategory-BzFKVmMT.png": {
    "type": "image/png",
    "etag": "\"274b0-Duv3J+h80ZWi0qXmvISpA+yGbP0\"",
    "mtime": "2024-06-14T16:28:45.852Z",
    "size": 160944,
    "path": "../public/assets/fishcategory-BzFKVmMT.png"
  },
  "/assets/Footer-3Yxp6Czj.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"159d-o4p5g1eLI2tAx4JkdrjHvjlhduI\"",
    "mtime": "2024-06-14T16:28:45.889Z",
    "size": 5533,
    "path": "../public/assets/Footer-3Yxp6Czj.js"
  },
  "/assets/Footer-3Yxp6Czj.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"5ef-1nnE4UPRax6Gnb9GHstJYZQ1L6Y\"",
    "mtime": "2024-06-14T16:29:29.483Z",
    "size": 1519,
    "path": "../public/assets/Footer-3Yxp6Czj.js.br"
  },
  "/assets/Footer-3Yxp6Czj.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"76c-/cRpoPSBF5D3eNiB5BVA6A+ywIk\"",
    "mtime": "2024-06-14T16:29:29.481Z",
    "size": 1900,
    "path": "../public/assets/Footer-3Yxp6Czj.js.gz"
  },
  "/assets/index-Cd5ZnWH_.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4581-wD9dd4uHut7GSA93kHf5Srt1glk\"",
    "mtime": "2024-06-14T16:28:45.882Z",
    "size": 17793,
    "path": "../public/assets/index-Cd5ZnWH_.css"
  },
  "/assets/index-Cd5ZnWH_.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"fd0-+Co6SAHvp6jAmcIkT8pHmLf0mE0\"",
    "mtime": "2024-06-14T16:29:29.485Z",
    "size": 4048,
    "path": "../public/assets/index-Cd5ZnWH_.css.br"
  },
  "/assets/index-Cd5ZnWH_.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1225-8n2P8UJIf8zK6Ig/XYro48OGbU8\"",
    "mtime": "2024-06-14T16:29:29.482Z",
    "size": 4645,
    "path": "../public/assets/index-Cd5ZnWH_.css.gz"
  },
  "/assets/LoaderIcon-CffO8xFE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"23df-Pcj5/6CN+qczT4MyM2y8lN3L1Oc\"",
    "mtime": "2024-06-14T16:28:45.886Z",
    "size": 9183,
    "path": "../public/assets/LoaderIcon-CffO8xFE.js"
  },
  "/assets/LoaderIcon-CffO8xFE.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"bf6-mzJaJt8W4KUl/zbZyoWKAHRc4G0\"",
    "mtime": "2024-06-14T16:29:29.482Z",
    "size": 3062,
    "path": "../public/assets/LoaderIcon-CffO8xFE.js.br"
  },
  "/assets/LoaderIcon-CffO8xFE.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"d50-PAkp0PmCVmqt7b4odwxQIOvlvVU\"",
    "mtime": "2024-06-14T16:29:29.482Z",
    "size": 3408,
    "path": "../public/assets/LoaderIcon-CffO8xFE.js.gz"
  },
  "/assets/logo-HaIiWWCp.svg": {
    "type": "image/svg+xml",
    "etag": "\"293c-puSyWrp6cW/EsuH2mnR7VbmlD2k\"",
    "mtime": "2024-06-14T16:28:45.854Z",
    "size": 10556,
    "path": "../public/assets/logo-HaIiWWCp.svg"
  },
  "/assets/logo-HaIiWWCp.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"d17-TsvvpYdEeYvSp3G/69uuA4x1JMs\"",
    "mtime": "2024-06-14T16:29:29.486Z",
    "size": 3351,
    "path": "../public/assets/logo-HaIiWWCp.svg.br"
  },
  "/assets/logo-HaIiWWCp.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"fbf-qIxzOBE1tz9RpCsk4BNU3LcD3dg\"",
    "mtime": "2024-06-14T16:29:29.482Z",
    "size": 4031,
    "path": "../public/assets/logo-HaIiWWCp.svg.gz"
  },
  "/assets/logobanner1-BeZw9Phg.png": {
    "type": "image/png",
    "etag": "\"2de9-JbkK9rnGs8lpNBOnOgShXMRsH3g\"",
    "mtime": "2024-06-14T16:28:45.837Z",
    "size": 11753,
    "path": "../public/assets/logobanner1-BeZw9Phg.png"
  },
  "/assets/logofooter-Dc7MQWnT.svg": {
    "type": "image/svg+xml",
    "etag": "\"212b-mskvRhMZhLq2g515yM92qhX0GEQ\"",
    "mtime": "2024-06-14T16:28:45.851Z",
    "size": 8491,
    "path": "../public/assets/logofooter-Dc7MQWnT.svg"
  },
  "/assets/logofooter-Dc7MQWnT.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"a05-xfOfAEIZNhqctSBKUIPMOOMwlQk\"",
    "mtime": "2024-06-14T16:29:29.485Z",
    "size": 2565,
    "path": "../public/assets/logofooter-Dc7MQWnT.svg.br"
  },
  "/assets/logofooter-Dc7MQWnT.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"c9d-/tHHBkLapiqTt4oGrvV2RqeuQ6I\"",
    "mtime": "2024-06-14T16:29:29.482Z",
    "size": 3229,
    "path": "../public/assets/logofooter-Dc7MQWnT.svg.gz"
  },
  "/assets/onig-Du5pRr7Y.wasm": {
    "type": "application/wasm",
    "etag": "\"71eb2-sWRKnnRfEwkGBTHc1IeyNBzS478\"",
    "mtime": "2024-06-14T16:28:45.853Z",
    "size": 466610,
    "path": "../public/assets/onig-Du5pRr7Y.wasm"
  },
  "/assets/parrotcategory-CUne2f9q.png": {
    "type": "image/png",
    "etag": "\"2064a-lKDJX8mTU+if2XSxEj/AntVIFIQ\"",
    "mtime": "2024-06-14T16:28:45.851Z",
    "size": 132682,
    "path": "../public/assets/parrotcategory-CUne2f9q.png"
  },
  "/assets/product-BIrgGnpd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3e-LHghaoayPtIMuJKY8N5XCwEbEY0\"",
    "mtime": "2024-06-14T16:28:45.893Z",
    "size": 62,
    "path": "../public/assets/product-BIrgGnpd.js"
  },
  "/assets/product-BNwlNQck.png": {
    "type": "image/png",
    "etag": "\"154cc-GCFflEAyaKHwTXVVJQUatf5824E\"",
    "mtime": "2024-06-14T16:28:45.856Z",
    "size": 87244,
    "path": "../public/assets/product-BNwlNQck.png"
  },
  "/assets/rodents-Bp5pXC5h.png": {
    "type": "image/png",
    "etag": "\"2339f-HmzY6YFwpAHskQLyqLqcacBzVwQ\"",
    "mtime": "2024-06-14T16:28:45.852Z",
    "size": 144287,
    "path": "../public/assets/rodents-Bp5pXC5h.png"
  },
  "/assets/routing-Bhfc4cv3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ce4-RFPQtCP3cww1RoSl6kJ71G1X71o\"",
    "mtime": "2024-06-14T16:28:45.888Z",
    "size": 7396,
    "path": "../public/assets/routing-Bhfc4cv3.js"
  },
  "/assets/routing-Bhfc4cv3.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"c41-cGbwDSgZRPCbAvjpaDROUV9LScs\"",
    "mtime": "2024-06-14T16:29:29.484Z",
    "size": 3137,
    "path": "../public/assets/routing-Bhfc4cv3.js.br"
  },
  "/assets/routing-Bhfc4cv3.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"d82-kwwsT6yoR4skakZMkf7frnZ2YD8\"",
    "mtime": "2024-06-14T16:29:29.484Z",
    "size": 3458,
    "path": "../public/assets/routing-Bhfc4cv3.js.gz"
  },
  "/assets/ssr-BahL7dT3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"511b-ySsr3vXy0Q+bCLJx0mi7pEWjNSk\"",
    "mtime": "2024-06-14T16:28:45.880Z",
    "size": 20763,
    "path": "../public/assets/ssr-BahL7dT3.css"
  },
  "/assets/ssr-BahL7dT3.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"f64-yCG+ht/LKijuLNpHDB9XZW25UpY\"",
    "mtime": "2024-06-14T16:29:29.489Z",
    "size": 3940,
    "path": "../public/assets/ssr-BahL7dT3.css.br"
  },
  "/assets/ssr-BahL7dT3.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1270-614y+0BNryBQ1HKpQES8vcKdHh0\"",
    "mtime": "2024-06-14T16:29:29.485Z",
    "size": 4720,
    "path": "../public/assets/ssr-BahL7dT3.css.gz"
  },
  "/_build/server-functions-manifest.json": {
    "type": "application/json",
    "etag": "\"19-U+evudgPW1yE9kGumdxd/vtvk2s\"",
    "mtime": "2024-06-14T16:29:05.741Z",
    "size": 25,
    "path": "../public/_build/server-functions-manifest.json"
  },
  "/_build/.vite/manifest.json": {
    "type": "application/json",
    "etag": "\"1edc-ZPgFd1hx5miAYVNI71rEysLqmLA\"",
    "mtime": "2024-06-14T16:29:05.739Z",
    "size": 7900,
    "path": "../public/_build/.vite/manifest.json"
  },
  "/_build/.vite/manifest.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"408-j9BXd+fzTtBEFczX5/NNJAcb3v0\"",
    "mtime": "2024-06-14T16:29:29.486Z",
    "size": 1032,
    "path": "../public/_build/.vite/manifest.json.br"
  },
  "/_build/.vite/manifest.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"482-0jgiQ5Xyrv2P53IAPaQGmFdyDRo\"",
    "mtime": "2024-06-14T16:29:29.485Z",
    "size": 1154,
    "path": "../public/_build/.vite/manifest.json.gz"
  },
  "/_build/assets/banner-CMWWeWHk.png": {
    "type": "image/png",
    "etag": "\"6a9b7-bmoi0uOYyxLXc8zDWDGYDVQsrk0\"",
    "mtime": "2024-06-14T16:29:05.693Z",
    "size": 436663,
    "path": "../public/_build/assets/banner-CMWWeWHk.png"
  },
  "/_build/assets/Base-B57mFvZQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3b-KMTWenX7nOhbVBwBY7LGL1i1FVM\"",
    "mtime": "2024-06-14T16:29:05.682Z",
    "size": 59,
    "path": "../public/_build/assets/Base-B57mFvZQ.js"
  },
  "/_build/assets/Base-D3uFkxDl.png": {
    "type": "image/png",
    "etag": "\"623f8-niutUhg10WZCw0d0JjE2uIVP2Uc\"",
    "mtime": "2024-06-14T16:29:05.663Z",
    "size": 402424,
    "path": "../public/_build/assets/Base-D3uFkxDl.png"
  },
  "/_build/assets/Card2-Ch_ta0W4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1427-WCwX4E3WnpPjqttuRwv0SFLRy4c\"",
    "mtime": "2024-06-14T16:29:05.737Z",
    "size": 5159,
    "path": "../public/_build/assets/Card2-Ch_ta0W4.js"
  },
  "/_build/assets/Card2-Ch_ta0W4.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"851-Vl879dkeuTn6mDq1bUCI2E2BJu8\"",
    "mtime": "2024-06-14T16:29:29.487Z",
    "size": 2129,
    "path": "../public/_build/assets/Card2-Ch_ta0W4.js.br"
  },
  "/_build/assets/Card2-Ch_ta0W4.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"9f8-5xqgbT/C12EQPIrmp6Xd3HwBu2o\"",
    "mtime": "2024-06-14T16:29:29.485Z",
    "size": 2552,
    "path": "../public/_build/assets/Card2-Ch_ta0W4.js.gz"
  },
  "/_build/assets/cart-CPZykOb-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1cd1-jbuR6fWYmlI04ZmYtGnTM1tZ0OI\"",
    "mtime": "2024-06-14T16:29:05.747Z",
    "size": 7377,
    "path": "../public/_build/assets/cart-CPZykOb-.js"
  },
  "/_build/assets/cart-CPZykOb-.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"9fd-vyRnBbI1+5iJ/RdOisIzGn9bAAY\"",
    "mtime": "2024-06-14T16:29:29.487Z",
    "size": 2557,
    "path": "../public/_build/assets/cart-CPZykOb-.js.br"
  },
  "/_build/assets/cart-CPZykOb-.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"c12-pLPHxpjzxzdh7+avQOdA7rYCo10\"",
    "mtime": "2024-06-14T16:29:29.486Z",
    "size": 3090,
    "path": "../public/_build/assets/cart-CPZykOb-.js.gz"
  },
  "/_build/assets/catalog-BPcOHE23.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2ca5-VK/icWTgS6pvfSjS6eY6lJOc8nw\"",
    "mtime": "2024-06-14T16:29:05.734Z",
    "size": 11429,
    "path": "../public/_build/assets/catalog-BPcOHE23.js"
  },
  "/_build/assets/catalog-BPcOHE23.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"f5d-wXQHGTygJsMNsDVm9xDFbgHccZM\"",
    "mtime": "2024-06-14T16:29:29.488Z",
    "size": 3933,
    "path": "../public/_build/assets/catalog-BPcOHE23.js.br"
  },
  "/_build/assets/catalog-BPcOHE23.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1260-BEoxvgBUCByOF47TgC9xCk4t32E\"",
    "mtime": "2024-06-14T16:29:29.487Z",
    "size": 4704,
    "path": "../public/_build/assets/catalog-BPcOHE23.js.gz"
  },
  "/_build/assets/catcategoty-DZWzhche.png": {
    "type": "image/png",
    "etag": "\"17a5b-28BHApJ4c1G9h8MsN4JAoTzHkC0\"",
    "mtime": "2024-06-14T16:29:05.662Z",
    "size": 96859,
    "path": "../public/_build/assets/catcategoty-DZWzhche.png"
  },
  "/_build/assets/category1-DW47B9lk.png": {
    "type": "image/png",
    "etag": "\"141b3-wANsZrDynS+mKdEti+G/sOtS6XY\"",
    "mtime": "2024-06-14T16:29:05.669Z",
    "size": 82355,
    "path": "../public/_build/assets/category1-DW47B9lk.png"
  },
  "/_build/assets/checkout-GJgyrJOI.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3310-WzK+co0vtUA9b6rVJj3Yt//ZcJ4\"",
    "mtime": "2024-06-14T16:29:05.737Z",
    "size": 13072,
    "path": "../public/_build/assets/checkout-GJgyrJOI.js"
  },
  "/_build/assets/checkout-GJgyrJOI.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"d8f-wFzHhvXMLSlaTt9L2jbiJHKojXg\"",
    "mtime": "2024-06-14T16:29:29.488Z",
    "size": 3471,
    "path": "../public/_build/assets/checkout-GJgyrJOI.js.br"
  },
  "/_build/assets/checkout-GJgyrJOI.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"103c-G8HlK0yxsYDLJLOAvcsMqOfOXQo\"",
    "mtime": "2024-06-14T16:29:29.487Z",
    "size": 4156,
    "path": "../public/_build/assets/checkout-GJgyrJOI.js.gz"
  },
  "/_build/assets/client-BahL7dT3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"511b-ySsr3vXy0Q+bCLJx0mi7pEWjNSk\"",
    "mtime": "2024-06-14T16:29:05.695Z",
    "size": 20763,
    "path": "../public/_build/assets/client-BahL7dT3.css"
  },
  "/_build/assets/client-BahL7dT3.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"f64-yCG+ht/LKijuLNpHDB9XZW25UpY\"",
    "mtime": "2024-06-14T16:29:29.490Z",
    "size": 3940,
    "path": "../public/_build/assets/client-BahL7dT3.css.br"
  },
  "/_build/assets/client-BahL7dT3.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1270-614y+0BNryBQ1HKpQES8vcKdHh0\"",
    "mtime": "2024-06-14T16:29:29.488Z",
    "size": 4720,
    "path": "../public/_build/assets/client-BahL7dT3.css.gz"
  },
  "/_build/assets/client-BX3zLUfQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7f34-+K875hTYy9kaaAeRq4U5ukqQBqE\"",
    "mtime": "2024-06-14T16:29:05.668Z",
    "size": 32564,
    "path": "../public/_build/assets/client-BX3zLUfQ.js"
  },
  "/_build/assets/client-BX3zLUfQ.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"251f-ic7jphmHeXbhRriDVj9wcvj3ZGs\"",
    "mtime": "2024-06-14T16:29:29.496Z",
    "size": 9503,
    "path": "../public/_build/assets/client-BX3zLUfQ.js.br"
  },
  "/_build/assets/client-BX3zLUfQ.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2b54-CZA5wGxyjrEQdZPabTHe/DWuPqc\"",
    "mtime": "2024-06-14T16:29:29.489Z",
    "size": 11092,
    "path": "../public/_build/assets/client-BX3zLUfQ.js.gz"
  },
  "/_build/assets/components-CBlfzv1Q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"337-j8FaXH7pydU6UKelvnzEiWcY84Y\"",
    "mtime": "2024-06-14T16:29:05.666Z",
    "size": 823,
    "path": "../public/_build/assets/components-CBlfzv1Q.js"
  },
  "/_build/assets/favorites-C0CyK_fX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1717-jiBdxWA63qiYo32i+oVE5yzvKtg\"",
    "mtime": "2024-06-14T16:29:05.738Z",
    "size": 5911,
    "path": "../public/_build/assets/favorites-C0CyK_fX.js"
  },
  "/_build/assets/favorites-C0CyK_fX.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"90d-yaqarrbWGaezxtiwqmsM/jNIrM4\"",
    "mtime": "2024-06-14T16:29:29.490Z",
    "size": 2317,
    "path": "../public/_build/assets/favorites-C0CyK_fX.js.br"
  },
  "/_build/assets/favorites-C0CyK_fX.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"ada-ZiuH+np87PmiXrYc5I5cJcDfCbY\"",
    "mtime": "2024-06-14T16:29:29.490Z",
    "size": 2778,
    "path": "../public/_build/assets/favorites-C0CyK_fX.js.gz"
  },
  "/_build/assets/fishcategory-BzFKVmMT.png": {
    "type": "image/png",
    "etag": "\"274b0-Duv3J+h80ZWi0qXmvISpA+yGbP0\"",
    "mtime": "2024-06-14T16:29:05.667Z",
    "size": 160944,
    "path": "../public/_build/assets/fishcategory-BzFKVmMT.png"
  },
  "/_build/assets/Footer-CazmUOC7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1512-H3VDZfAs/c9VgpzR8vCIeOTea7o\"",
    "mtime": "2024-06-14T16:29:05.729Z",
    "size": 5394,
    "path": "../public/_build/assets/Footer-CazmUOC7.js"
  },
  "/_build/assets/Footer-CazmUOC7.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"5f0-W5suu5kBMthuQhhxpMjyAUdgtag\"",
    "mtime": "2024-06-14T16:29:29.489Z",
    "size": 1520,
    "path": "../public/_build/assets/Footer-CazmUOC7.js.br"
  },
  "/_build/assets/Footer-CazmUOC7.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"75a-0MfFmK/2ykv+21agGUAdSwo6duk\"",
    "mtime": "2024-06-14T16:29:29.490Z",
    "size": 1882,
    "path": "../public/_build/assets/Footer-CazmUOC7.js.gz"
  },
  "/_build/assets/index-Cd5ZnWH_.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4581-wD9dd4uHut7GSA93kHf5Srt1glk\"",
    "mtime": "2024-06-14T16:29:05.668Z",
    "size": 17793,
    "path": "../public/_build/assets/index-Cd5ZnWH_.css"
  },
  "/_build/assets/index-Cd5ZnWH_.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"fd0-+Co6SAHvp6jAmcIkT8pHmLf0mE0\"",
    "mtime": "2024-06-14T16:29:29.491Z",
    "size": 4048,
    "path": "../public/_build/assets/index-Cd5ZnWH_.css.br"
  },
  "/_build/assets/index-Cd5ZnWH_.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1225-8n2P8UJIf8zK6Ig/XYro48OGbU8\"",
    "mtime": "2024-06-14T16:29:29.490Z",
    "size": 4645,
    "path": "../public/_build/assets/index-Cd5ZnWH_.css.gz"
  },
  "/_build/assets/index-Em_zRj3o.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"199a5-/J4jvYIH5hwKErbokxKyCZKd9gg\"",
    "mtime": "2024-06-14T16:29:05.739Z",
    "size": 104869,
    "path": "../public/_build/assets/index-Em_zRj3o.js"
  },
  "/_build/assets/index-Em_zRj3o.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"6f8b-Be/zDHIrFw1dFx7pnxs713XfLfI\"",
    "mtime": "2024-06-14T16:29:29.854Z",
    "size": 28555,
    "path": "../public/_build/assets/index-Em_zRj3o.js.br"
  },
  "/_build/assets/index-Em_zRj3o.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"82b9-142oMQuDqWEJedLXgqXw14POsp0\"",
    "mtime": "2024-06-14T16:29:29.777Z",
    "size": 33465,
    "path": "../public/_build/assets/index-Em_zRj3o.js.gz"
  },
  "/_build/assets/index-fOczvcKO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"526-rHYBpMv/lu23UnJ5FgcfksedQHA\"",
    "mtime": "2024-06-14T16:29:05.729Z",
    "size": 1318,
    "path": "../public/_build/assets/index-fOczvcKO.js"
  },
  "/_build/assets/index-fOczvcKO.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"252-xGbHa7GVlvijeBn+TCUNVSXWbWg\"",
    "mtime": "2024-06-14T16:29:29.491Z",
    "size": 594,
    "path": "../public/_build/assets/index-fOczvcKO.js.br"
  },
  "/_build/assets/index-fOczvcKO.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"295-FEkQHXczepHLv0Xr8a0S66F6epo\"",
    "mtime": "2024-06-14T16:29:29.491Z",
    "size": 661,
    "path": "../public/_build/assets/index-fOczvcKO.js.gz"
  },
  "/_build/assets/LoaderIcon-aE-qRZbu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"37d6-EVnbiJJY4p9CjRjGwYDqDF9nqPU\"",
    "mtime": "2024-06-14T16:29:05.731Z",
    "size": 14294,
    "path": "../public/_build/assets/LoaderIcon-aE-qRZbu.js"
  },
  "/_build/assets/LoaderIcon-aE-qRZbu.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"12e0-OZUuni9LcGdLj7m8bfdu5x5oT5k\"",
    "mtime": "2024-06-14T16:29:29.521Z",
    "size": 4832,
    "path": "../public/_build/assets/LoaderIcon-aE-qRZbu.js.br"
  },
  "/_build/assets/LoaderIcon-aE-qRZbu.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"14e6-QItZgje0gq8WblHZXss7jh9UDhw\"",
    "mtime": "2024-06-14T16:29:29.495Z",
    "size": 5350,
    "path": "../public/_build/assets/LoaderIcon-aE-qRZbu.js.gz"
  },
  "/_build/assets/login-DcxKm-JB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"cc0-KRlWdRGltcTtsPFryub/2yGciIY\"",
    "mtime": "2024-06-14T16:29:05.669Z",
    "size": 3264,
    "path": "../public/_build/assets/login-DcxKm-JB.js"
  },
  "/_build/assets/login-DcxKm-JB.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"479-0XbR1KN+IS6ySqWe5E0YAp2aR/Y\"",
    "mtime": "2024-06-14T16:29:29.495Z",
    "size": 1145,
    "path": "../public/_build/assets/login-DcxKm-JB.js.br"
  },
  "/_build/assets/login-DcxKm-JB.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"596-Q4ztMo2OhBLRKDHelt8U81dwEDU\"",
    "mtime": "2024-06-14T16:29:29.495Z",
    "size": 1430,
    "path": "../public/_build/assets/login-DcxKm-JB.js.gz"
  },
  "/_build/assets/logo-HaIiWWCp.svg": {
    "type": "image/svg+xml",
    "etag": "\"293c-puSyWrp6cW/EsuH2mnR7VbmlD2k\"",
    "mtime": "2024-06-14T16:29:05.662Z",
    "size": 10556,
    "path": "../public/_build/assets/logo-HaIiWWCp.svg"
  },
  "/_build/assets/logo-HaIiWWCp.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"d17-TsvvpYdEeYvSp3G/69uuA4x1JMs\"",
    "mtime": "2024-06-14T16:29:29.496Z",
    "size": 3351,
    "path": "../public/_build/assets/logo-HaIiWWCp.svg.br"
  },
  "/_build/assets/logo-HaIiWWCp.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"fbf-qIxzOBE1tz9RpCsk4BNU3LcD3dg\"",
    "mtime": "2024-06-14T16:29:29.495Z",
    "size": 4031,
    "path": "../public/_build/assets/logo-HaIiWWCp.svg.gz"
  },
  "/_build/assets/logobanner1-BeZw9Phg.png": {
    "type": "image/png",
    "etag": "\"2de9-JbkK9rnGs8lpNBOnOgShXMRsH3g\"",
    "mtime": "2024-06-14T16:29:05.664Z",
    "size": 11753,
    "path": "../public/_build/assets/logobanner1-BeZw9Phg.png"
  },
  "/_build/assets/logofooter-Dc7MQWnT.svg": {
    "type": "image/svg+xml",
    "etag": "\"212b-mskvRhMZhLq2g515yM92qhX0GEQ\"",
    "mtime": "2024-06-14T16:29:05.668Z",
    "size": 8491,
    "path": "../public/_build/assets/logofooter-Dc7MQWnT.svg"
  },
  "/_build/assets/logofooter-Dc7MQWnT.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"a05-xfOfAEIZNhqctSBKUIPMOOMwlQk\"",
    "mtime": "2024-06-14T16:29:29.495Z",
    "size": 2565,
    "path": "../public/_build/assets/logofooter-Dc7MQWnT.svg.br"
  },
  "/_build/assets/logofooter-Dc7MQWnT.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"c9d-/tHHBkLapiqTt4oGrvV2RqeuQ6I\"",
    "mtime": "2024-06-14T16:29:29.495Z",
    "size": 3229,
    "path": "../public/_build/assets/logofooter-Dc7MQWnT.svg.gz"
  },
  "/_build/assets/onig-Du5pRr7Y.wasm": {
    "type": "application/wasm",
    "etag": "\"71eb2-sWRKnnRfEwkGBTHc1IeyNBzS478\"",
    "mtime": "2024-06-14T16:29:05.664Z",
    "size": 466610,
    "path": "../public/_build/assets/onig-Du5pRr7Y.wasm"
  },
  "/_build/assets/parrotcategory-CUne2f9q.png": {
    "type": "image/png",
    "etag": "\"2064a-lKDJX8mTU+if2XSxEj/AntVIFIQ\"",
    "mtime": "2024-06-14T16:29:05.662Z",
    "size": 132682,
    "path": "../public/_build/assets/parrotcategory-CUne2f9q.png"
  },
  "/_build/assets/product-BIrgGnpd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3e-LHghaoayPtIMuJKY8N5XCwEbEY0\"",
    "mtime": "2024-06-14T16:29:05.737Z",
    "size": 62,
    "path": "../public/_build/assets/product-BIrgGnpd.js"
  },
  "/_build/assets/product-BNwlNQck.png": {
    "type": "image/png",
    "etag": "\"154cc-GCFflEAyaKHwTXVVJQUatf5824E\"",
    "mtime": "2024-06-14T16:29:05.680Z",
    "size": 87244,
    "path": "../public/_build/assets/product-BNwlNQck.png"
  },
  "/_build/assets/productinfo-DTubpYpe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2045-LuzogysUac384O/2TMkuWYX95NA\"",
    "mtime": "2024-06-14T16:29:05.669Z",
    "size": 8261,
    "path": "../public/_build/assets/productinfo-DTubpYpe.js"
  },
  "/_build/assets/productinfo-DTubpYpe.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"ace-ZnrCLTtQXG2eJAVL4OcgG9u6+Wc\"",
    "mtime": "2024-06-14T16:29:29.497Z",
    "size": 2766,
    "path": "../public/_build/assets/productinfo-DTubpYpe.js.br"
  },
  "/_build/assets/productinfo-DTubpYpe.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"d4f-yCc6c9VQDmlnmzX0THUM7xoy5Yw\"",
    "mtime": "2024-06-14T16:29:29.496Z",
    "size": 3407,
    "path": "../public/_build/assets/productinfo-DTubpYpe.js.gz"
  },
  "/_build/assets/profile-BesJcHBg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3057-MItigN8jpGxAxAkDUKvF6UvmtoA\"",
    "mtime": "2024-06-14T16:29:05.740Z",
    "size": 12375,
    "path": "../public/_build/assets/profile-BesJcHBg.js"
  },
  "/_build/assets/profile-BesJcHBg.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"dec-PsWRAOT7WhSdFeIG+FCPSoVTdm8\"",
    "mtime": "2024-06-14T16:29:29.499Z",
    "size": 3564,
    "path": "../public/_build/assets/profile-BesJcHBg.js.br"
  },
  "/_build/assets/profile-BesJcHBg.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1087-PBQ8fY53bEvFkVlAKs8doJG7WqU\"",
    "mtime": "2024-06-14T16:29:29.497Z",
    "size": 4231,
    "path": "../public/_build/assets/profile-BesJcHBg.js.gz"
  },
  "/_build/assets/reg-B-_rmmxr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"124f-pJpzNQneZpwfe3Yt0tS/b0r3VAE\"",
    "mtime": "2024-06-14T16:29:05.728Z",
    "size": 4687,
    "path": "../public/_build/assets/reg-B-_rmmxr.js"
  },
  "/_build/assets/reg-B-_rmmxr.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"500-bOrRh4g6M4FpGJvn8s9eDYWggm0\"",
    "mtime": "2024-06-14T16:29:29.499Z",
    "size": 1280,
    "path": "../public/_build/assets/reg-B-_rmmxr.js.br"
  },
  "/_build/assets/reg-B-_rmmxr.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"64f-N8VMgP3D4LL88LCso1/f9KmMgZs\"",
    "mtime": "2024-06-14T16:29:29.496Z",
    "size": 1615,
    "path": "../public/_build/assets/reg-B-_rmmxr.js.gz"
  },
  "/_build/assets/rodents-Bp5pXC5h.png": {
    "type": "image/png",
    "etag": "\"2339f-HmzY6YFwpAHskQLyqLqcacBzVwQ\"",
    "mtime": "2024-06-14T16:29:05.679Z",
    "size": 144287,
    "path": "../public/_build/assets/rodents-Bp5pXC5h.png"
  },
  "/_build/assets/routing-B4bTVxWt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1b4f-KI0Y1Mw5g1hb0NgvyshP0XkVssk\"",
    "mtime": "2024-06-14T16:29:05.749Z",
    "size": 6991,
    "path": "../public/_build/assets/routing-B4bTVxWt.js"
  },
  "/_build/assets/routing-B4bTVxWt.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"bc3-JnPifTcaW2x/QxMmEt849K5H23U\"",
    "mtime": "2024-06-14T16:29:29.499Z",
    "size": 3011,
    "path": "../public/_build/assets/routing-B4bTVxWt.js.br"
  },
  "/_build/assets/routing-B4bTVxWt.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"ce0-JQbpVvBcdiLRFUWhN+g1vVcFJMo\"",
    "mtime": "2024-06-14T16:29:29.497Z",
    "size": 3296,
    "path": "../public/_build/assets/routing-B4bTVxWt.js.gz"
  },
  "/_build/assets/thank-Br0Ta-gx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4a6-ainJZ4vd4dU9gpYDSbsrPLA2quU\"",
    "mtime": "2024-06-14T16:29:05.682Z",
    "size": 1190,
    "path": "../public/_build/assets/thank-Br0Ta-gx.js"
  },
  "/_build/assets/thank-Br0Ta-gx.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"295-tiGfqfyJUWbpSOpc4mfAwSxjcNk\"",
    "mtime": "2024-06-14T16:29:29.498Z",
    "size": 661,
    "path": "../public/_build/assets/thank-Br0Ta-gx.js.br"
  },
  "/_build/assets/thank-Br0Ta-gx.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"312-BlyWLD2yy4YoiYL0PeDDLZM7T8g\"",
    "mtime": "2024-06-14T16:29:29.497Z",
    "size": 786,
    "path": "../public/_build/assets/thank-Br0Ta-gx.js.gz"
  },
  "/_build/assets/web-D8qGCTXe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6171-dBAXON0Y1bfH4V3vetw5JTSDEak\"",
    "mtime": "2024-06-14T16:29:05.735Z",
    "size": 24945,
    "path": "../public/_build/assets/web-D8qGCTXe.js"
  },
  "/_build/assets/web-D8qGCTXe.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"226a-omYrCGYyN8aoa/CNA6AaFj6Y8L4\"",
    "mtime": "2024-06-14T16:29:29.685Z",
    "size": 8810,
    "path": "../public/_build/assets/web-D8qGCTXe.js.br"
  },
  "/_build/assets/web-D8qGCTXe.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"25da-RTz4Mg9LiXLZhpKQPBeVXDJJpkg\"",
    "mtime": "2024-06-14T16:29:29.498Z",
    "size": 9690,
    "path": "../public/_build/assets/web-D8qGCTXe.js.gz"
  },
  "/_build/assets/_...404_-DUA12w7Q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"194-OuXnYOM08/cm+MrS5cuY8iiRb/Q\"",
    "mtime": "2024-06-14T16:29:05.737Z",
    "size": 404,
    "path": "../public/_build/assets/_...404_-DUA12w7Q.js"
  },
  "/_server/assets/banner-CMWWeWHk.png": {
    "type": "image/png",
    "etag": "\"6a9b7-bmoi0uOYyxLXc8zDWDGYDVQsrk0\"",
    "mtime": "2024-06-14T16:29:16.950Z",
    "size": 436663,
    "path": "../public/_server/assets/banner-CMWWeWHk.png"
  },
  "/_server/assets/Base-D3uFkxDl.png": {
    "type": "image/png",
    "etag": "\"623f8-niutUhg10WZCw0d0JjE2uIVP2Uc\"",
    "mtime": "2024-06-14T16:29:16.966Z",
    "size": 402424,
    "path": "../public/_server/assets/Base-D3uFkxDl.png"
  },
  "/_server/assets/catcategoty-DZWzhche.png": {
    "type": "image/png",
    "etag": "\"17a5b-28BHApJ4c1G9h8MsN4JAoTzHkC0\"",
    "mtime": "2024-06-14T16:29:16.951Z",
    "size": 96859,
    "path": "../public/_server/assets/catcategoty-DZWzhche.png"
  },
  "/_server/assets/category1-DW47B9lk.png": {
    "type": "image/png",
    "etag": "\"141b3-wANsZrDynS+mKdEti+G/sOtS6XY\"",
    "mtime": "2024-06-14T16:29:16.951Z",
    "size": 82355,
    "path": "../public/_server/assets/category1-DW47B9lk.png"
  },
  "/_server/assets/fishcategory-BzFKVmMT.png": {
    "type": "image/png",
    "etag": "\"274b0-Duv3J+h80ZWi0qXmvISpA+yGbP0\"",
    "mtime": "2024-06-14T16:29:16.984Z",
    "size": 160944,
    "path": "../public/_server/assets/fishcategory-BzFKVmMT.png"
  },
  "/_server/assets/index-Cd5ZnWH_.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4581-wD9dd4uHut7GSA93kHf5Srt1glk\"",
    "mtime": "2024-06-14T16:29:17.012Z",
    "size": 17793,
    "path": "../public/_server/assets/index-Cd5ZnWH_.css"
  },
  "/_server/assets/index-Cd5ZnWH_.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"fd0-+Co6SAHvp6jAmcIkT8pHmLf0mE0\"",
    "mtime": "2024-06-14T16:29:29.501Z",
    "size": 4048,
    "path": "../public/_server/assets/index-Cd5ZnWH_.css.br"
  },
  "/_server/assets/index-Cd5ZnWH_.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1225-8n2P8UJIf8zK6Ig/XYro48OGbU8\"",
    "mtime": "2024-06-14T16:29:29.499Z",
    "size": 4645,
    "path": "../public/_server/assets/index-Cd5ZnWH_.css.gz"
  },
  "/_server/assets/logo-HaIiWWCp.svg": {
    "type": "image/svg+xml",
    "etag": "\"293c-puSyWrp6cW/EsuH2mnR7VbmlD2k\"",
    "mtime": "2024-06-14T16:29:16.983Z",
    "size": 10556,
    "path": "../public/_server/assets/logo-HaIiWWCp.svg"
  },
  "/_server/assets/logo-HaIiWWCp.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"d17-TsvvpYdEeYvSp3G/69uuA4x1JMs\"",
    "mtime": "2024-06-14T16:29:29.499Z",
    "size": 3351,
    "path": "../public/_server/assets/logo-HaIiWWCp.svg.br"
  },
  "/_server/assets/logo-HaIiWWCp.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"fbf-qIxzOBE1tz9RpCsk4BNU3LcD3dg\"",
    "mtime": "2024-06-14T16:29:29.500Z",
    "size": 4031,
    "path": "../public/_server/assets/logo-HaIiWWCp.svg.gz"
  },
  "/_server/assets/logobanner1-BeZw9Phg.png": {
    "type": "image/png",
    "etag": "\"2de9-JbkK9rnGs8lpNBOnOgShXMRsH3g\"",
    "mtime": "2024-06-14T16:29:16.951Z",
    "size": 11753,
    "path": "../public/_server/assets/logobanner1-BeZw9Phg.png"
  },
  "/_server/assets/logofooter-Dc7MQWnT.svg": {
    "type": "image/svg+xml",
    "etag": "\"212b-mskvRhMZhLq2g515yM92qhX0GEQ\"",
    "mtime": "2024-06-14T16:29:16.952Z",
    "size": 8491,
    "path": "../public/_server/assets/logofooter-Dc7MQWnT.svg"
  },
  "/_server/assets/logofooter-Dc7MQWnT.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"a05-xfOfAEIZNhqctSBKUIPMOOMwlQk\"",
    "mtime": "2024-06-14T16:29:29.772Z",
    "size": 2565,
    "path": "../public/_server/assets/logofooter-Dc7MQWnT.svg.br"
  },
  "/_server/assets/logofooter-Dc7MQWnT.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"c9d-/tHHBkLapiqTt4oGrvV2RqeuQ6I\"",
    "mtime": "2024-06-14T16:29:29.672Z",
    "size": 3229,
    "path": "../public/_server/assets/logofooter-Dc7MQWnT.svg.gz"
  },
  "/_server/assets/parrotcategory-CUne2f9q.png": {
    "type": "image/png",
    "etag": "\"2064a-lKDJX8mTU+if2XSxEj/AntVIFIQ\"",
    "mtime": "2024-06-14T16:29:17.006Z",
    "size": 132682,
    "path": "../public/_server/assets/parrotcategory-CUne2f9q.png"
  },
  "/_server/assets/product-BNwlNQck.png": {
    "type": "image/png",
    "etag": "\"154cc-GCFflEAyaKHwTXVVJQUatf5824E\"",
    "mtime": "2024-06-14T16:29:16.971Z",
    "size": 87244,
    "path": "../public/_server/assets/product-BNwlNQck.png"
  },
  "/_server/assets/rodents-Bp5pXC5h.png": {
    "type": "image/png",
    "etag": "\"2339f-HmzY6YFwpAHskQLyqLqcacBzVwQ\"",
    "mtime": "2024-06-14T16:29:16.952Z",
    "size": 144287,
    "path": "../public/_server/assets/rodents-Bp5pXC5h.png"
  },
  "/_server/assets/server-fns-BahL7dT3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"511b-ySsr3vXy0Q+bCLJx0mi7pEWjNSk\"",
    "mtime": "2024-06-14T16:29:17.015Z",
    "size": 20763,
    "path": "../public/_server/assets/server-fns-BahL7dT3.css"
  },
  "/_server/assets/server-fns-BahL7dT3.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"f64-yCG+ht/LKijuLNpHDB9XZW25UpY\"",
    "mtime": "2024-06-14T16:29:29.688Z",
    "size": 3940,
    "path": "../public/_server/assets/server-fns-BahL7dT3.css.br"
  },
  "/_server/assets/server-fns-BahL7dT3.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1270-614y+0BNryBQ1HKpQES8vcKdHh0\"",
    "mtime": "2024-06-14T16:29:29.501Z",
    "size": 4720,
    "path": "../public/_server/assets/server-fns-BahL7dT3.css.gz"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises$1.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError$1({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

function St$1(e){let t;const r=He(e),n={duplex:"half",method:e.method,headers:e.headers};return e.node.req.body instanceof ArrayBuffer?new Request(r,{...n,body:e.node.req.body}):new Request(r,{...n,get body(){return t||(t=_t$1(e),t)}})}function $t$1(e){return e.web??={request:St$1(e),url:He(e)},e.web.request}function Et$1(){return Dt$1()}const H=Symbol("$HTTPEvent");function At$1(e){return typeof e=="object"&&(e instanceof H3Event||e?.[H]instanceof H3Event||e?.__is_event__===!0)}function C(e){return function(...t){let r=t[0];if(At$1(r))t[0]=r instanceof H3Event||r.__is_event__?r:r[H];else {if(!globalThis.app.config.server.experimental?.asyncContext)throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");if(r=Et$1(),!r)throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");t.unshift(r);}return e(...t)}}const He=C(getRequestURL),Tt$1=C(getRequestIP),G$1=C(setResponseStatus),le$1=C(getResponseStatus),qt$1=C(getResponseStatusText),B$1=C(getResponseHeaders),ue$1=C(getResponseHeader),Ot$1=C(setResponseHeader),Ut$1=C(appendResponseHeader),Ht$1=C(getCookie),jt$1=C(setCookie),Q$1=C(setHeader),_t$1=C(getRequestWebStream),Mt$1=C(removeResponseHeader),It$1=C($t$1);function Bt$1(){return getContext("nitro-app",{asyncContext:!!globalThis.app.config.server.experimental?.asyncContext,AsyncLocalStorage:AsyncLocalStorage})}function Dt$1(){return Bt$1().use().event}const z$1="Invariant Violation",{setPrototypeOf:Wt$1=function(e,t){return e.__proto__=t,e}}=Object;let te$1 = class te extends Error{framesToPop=1;name=z$1;constructor(t=z$1){super(typeof t=="number"?`${z$1}: ${t} (see https://github.com/apollographql/invariant-packages)`:t),Wt$1(this,te.prototype);}};function Zt$1(e,t){if(!e)throw new te$1(t)}const K$1=Symbol("fetchEvent");function Nt$1(e){return {request:It$1(e),response:Xt$1(e),clientAddress:Tt$1(e),locals:{},nativeEvent:e,[H]:e}}function Vt$1(e){return {...e,[H]:e[H]}}function zt$1(e){if(!e[K$1]){const t=Nt$1(e);e[K$1]=t;}return e[K$1]}function he$1(e,t){for(const[r,n]of t.entries())Q$1(e,r,n);}let Kt$1 = class Kt{constructor(t){this.event=t;}get(t){const r=ue$1(this.event,t);return Array.isArray(r)?r.join(", "):r}has(t){return this.get(t)!==void 0}set(t,r){return Ot$1(this.event,t,r)}delete(t){return Mt$1(this.event,t)}append(t,r){Ut$1(this.event,t,r);}getSetCookie(){const t=ue$1(this.event,"Set-Cookie");return Array.isArray(t)?t:[t]}forEach(t){return Object.entries(B$1(this.event)).forEach(([r,n])=>t(Array.isArray(n)?n.join(", "):n,r,this))}entries(){return Object.entries(B$1(this.event)).map(([t,r])=>[t,Array.isArray(r)?r.join(", "):r])[Symbol.iterator]()}keys(){return Object.keys(B$1(this.event))[Symbol.iterator]()}values(){return Object.values(B$1(this.event)).map(t=>Array.isArray(t)?t.join(", "):t)[Symbol.iterator]()}[Symbol.iterator](){return this.entries()[Symbol.iterator]()}};function Xt$1(e){return {get status(){return le$1(e)},set status(t){G$1(e,t);},get statusText(){return qt$1(e)},set statusText(t){G$1(e,le$1(),t);},headers:new Kt$1(e)}}var Gt$1=" ";const Qt$1={style:e=>ssrElement("style",e.attrs,()=>escape(e.children),!0),link:e=>ssrElement("link",e.attrs,void 0,!0),script:e=>e.attrs.src?ssrElement("script",mergeProps(()=>e.attrs,{get id(){return e.key}}),()=>ssr(Gt$1),!0):null};function Yt$1(e){let{tag:t,attrs:{key:r,...n}={key:void 0},children:s}=e;return Qt$1[t]({attrs:n,key:r,children:s})}function er(e,t,r,n="default"){return lazy(async()=>{{const a=(await e.import())[n],c=(await t.inputs?.[e.src].assets()).filter(p=>p.tag==="style"||p.attrs.rel==="stylesheet");return {default:p=>[...c.map(u=>Yt$1(u)),createComponent$1(a,p)]}}})}const je$1=[{$component:{src:"src/routes/cart.tsx?pick=default&pick=$css",build:()=>import('./build/cart.mjs'),import:()=>import('./build/cart.mjs')},path:"/cart",filePath:"C:/Users/эльдорадо/OneDrive/Рабочий стол/diplomeproject2 — копия/src/routes/cart.tsx"},{$component:{src:"src/routes/catalog.tsx?pick=default&pick=$css",build:()=>import('./build/catalog.mjs'),import:()=>import('./build/catalog.mjs')},path:"/catalog",filePath:"C:/Users/эльдорадо/OneDrive/Рабочий стол/diplomeproject2 — копия/src/routes/catalog.tsx"},{$component:{src:"src/routes/checkout.tsx?pick=default&pick=$css",build:()=>import('./build/checkout.mjs'),import:()=>import('./build/checkout.mjs')},path:"/checkout",filePath:"C:/Users/эльдорадо/OneDrive/Рабочий стол/diplomeproject2 — копия/src/routes/checkout.tsx"},{$component:{src:"src/routes/favorites.tsx?pick=default&pick=$css",build:()=>import('./build/favorites.mjs'),import:()=>import('./build/favorites.mjs')},path:"/favorites",filePath:"C:/Users/эльдорадо/OneDrive/Рабочий стол/diplomeproject2 — копия/src/routes/favorites.tsx"},{$component:{src:"src/routes/index.tsx?pick=default&pick=$css",build:()=>import('./build/index.mjs'),import:()=>import('./build/index.mjs')},path:"/",filePath:"C:/Users/эльдорадо/OneDrive/Рабочий стол/diplomeproject2 — копия/src/routes/index.tsx"},{$component:{src:"src/routes/login.tsx?pick=default&pick=$css",build:()=>import('./build/login.mjs'),import:()=>import('./build/login.mjs')},path:"/login",filePath:"C:/Users/эльдорадо/OneDrive/Рабочий стол/diplomeproject2 — копия/src/routes/login.tsx"},{$component:{src:"src/routes/productinfo.tsx?pick=default&pick=$css",build:()=>import('./build/productinfo.mjs'),import:()=>import('./build/productinfo.mjs')},path:"/productinfo",filePath:"C:/Users/эльдорадо/OneDrive/Рабочий стол/diplomeproject2 — копия/src/routes/productinfo.tsx"},{$component:{src:"src/routes/profile.tsx?pick=default&pick=$css",build:()=>import('./build/profile.mjs'),import:()=>import('./build/profile.mjs')},path:"/profile",filePath:"C:/Users/эльдорадо/OneDrive/Рабочий стол/diplomeproject2 — копия/src/routes/profile.tsx"},{$component:{src:"src/routes/reg.tsx?pick=default&pick=$css",build:()=>import('./build/reg.mjs'),import:()=>import('./build/reg.mjs')},path:"/reg",filePath:"C:/Users/эльдорадо/OneDrive/Рабочий стол/diplomeproject2 — копия/src/routes/reg.tsx"},{$component:{src:"src/routes/thank.tsx?pick=default&pick=$css",build:()=>import('./build/thank.mjs'),import:()=>import('./build/thank.mjs')},path:"/thank",filePath:"C:/Users/эльдорадо/OneDrive/Рабочий стол/diplomeproject2 — копия/src/routes/thank.tsx"},{$component:{src:"src/routes/[...404].tsx?pick=default&pick=$css",build:()=>import('./build/_...404_.mjs'),import:()=>import('./build/_...404_.mjs')},path:"/*404",filePath:"C:/Users/эльдорадо/OneDrive/Рабочий стол/diplomeproject2 — копия/src/routes/[...404].tsx"}],tr=rr(je$1.filter(e=>e.$component));function rr(e){function t(r,n,s,a){const o=Object.values(r).find(c=>s.startsWith(c.id+"/"));return o?(t(o.children||(o.children=[]),n,s.slice(o.id.length)),r):(r.push({...n,id:s,path:s.replace(/\/\([^)/]+\)/g,"")}),r)}return e.sort((r,n)=>r.path.length-n.path.length).reduce((r,n)=>t(r,n,n.path,n.path),[])}function nr(e){return e.$GET||e.$POST||e.$PUT||e.$PATCH||e.$DELETE}createRouter$1({routes:je$1.reduce((e,t)=>{if(!nr(t))return e;let r=t.path.replace(/\(.*\)\/?/g,"").replace(/\*([^/]*)/g,(n,s)=>`**:${s}`);if(/:[^/]*\?/g.test(r))throw new Error(`Optional parameters are not supported in API routes: ${r}`);if(e[r])throw new Error(`Duplicate API routes for "${r}" found at "${e[r].route.path}" and "${t.path}"`);return e[r]={route:t},e},{})});function _e$1(){function e(r){return {...r,...r.$$route?r.$$route.require().route:void 0,info:{...r.$$route?r.$$route.require().route.info:{},filesystem:!0},component:er(r.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:r.children?r.children.map(e):void 0}}return tr.map(e)}let de$1;const sr=isServer?()=>getRequestEvent().routes:()=>de$1||(de$1=_e$1());function or(e){const t=Ht$1(e,"flash");if(!t)return;let r=JSON.parse(t);if(!r||!r.result)return;const n=[...r.input.slice(0,-1),new Map(r.input[r.input.length-1])];return jt$1(e,"flash","",{maxAge:0}),{input:n,url:r.url,pending:!1,result:r.error?new Error(r.result):r.result}}async function ar(e){const t=globalThis.MANIFEST.client;return globalThis.MANIFEST.ssr,e.response.headers.set("Content-Type","text/html"),Object.assign(e,{manifest:await t.json(),assets:[...await t.inputs[t.handler].assets()],router:{submission:or(e)},routes:_e$1(),$islands:new Set})}function Me(){let e=new Set;function t(s){return e.add(s),()=>e.delete(s)}let r=!1;function n(s,a){if(r)return !(r=!1);const o={to:s,options:a,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const c of e)c.listener({...o,from:c.location,retry:l=>{l&&(r=!0),c.navigate(s,{...a,resolve:!1});}});return !o.defaultPrevented}return {subscribe:t,confirm:n}}let Y;function re$1(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),Y=window.history.state._depth;}isServer||re$1();function ir(e){return {...e,_depth:window.history.state&&window.history.state._depth}}function cr(e,t){let r=!1;return ()=>{const n=Y;re$1();const s=n==null?null:Y-n;if(r){r=!1;return}s&&t(s)?(r=!0,window.history.go(-s)):e();}}const lr=/^(?:[a-z0-9]+:)?\/\//i,ur=/^\/+|(\/)\/+$/g,Ie="http://sr";function O$1(e,t=!1){const r=e.replace(ur,"$1");return r?t||/^[?#]/.test(r)?r:"/"+r:""}function D$1(e,t,r){if(lr.test(t))return;const n=O$1(e),s=r&&O$1(r);let a="";return !s||t.startsWith("/")?a=n:s.toLowerCase().indexOf(n.toLowerCase())!==0?a=n+s:a=s,(a||"/")+O$1(t,!a)}function hr(e,t){if(e==null)throw new Error(t);return e}function dr(e,t){return O$1(e).replace(/\/*(\*.*)?$/g,"")+O$1(t)}function ne(e){const t={};return e.searchParams.forEach((r,n)=>{t[n]=r;}),t}function pr(e,t,r){const[n,s]=e.split("/*",2),a=n.split("/").filter(Boolean),o=a.length;return c=>{const l=c.split("/").filter(Boolean),p=l.length-o;if(p<0||p>0&&s===void 0&&!t)return null;const u={path:o?"":"/",params:{}},i=m=>r===void 0?void 0:r[m];for(let m=0;m<o;m++){const v=a[m],h=l[m],d=v[0]===":",g=d?v.slice(1):v;if(d&&X$2(h,i(g)))u.params[g]=h;else if(d||!X$2(h,v))return null;u.path+=`/${h}`;}if(s){const m=p?l.slice(-p).join("/"):"";if(X$2(m,i(s)))u.params[s]=m;else return null}return u}}function X$2(e,t){const r=n=>n.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?r(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(r):t instanceof RegExp?t.test(e):!1}function fr(e){const[t,r]=e.pattern.split("/*",2),n=t.split("/").filter(Boolean);return n.reduce((s,a)=>s+(a.startsWith(":")?2:3),n.length-(r===void 0?0:1))}function Be$1(e){const t=new Map,r=getOwner();return new Proxy({},{get(n,s){return t.has(s)||runWithOwner(r,()=>t.set(s,createMemo(()=>e()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return {enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function De(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return [e];let r=e.slice(0,t.index),n=e.slice(t.index+t[0].length);const s=[r,r+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(n);)s.push(r+=t[1]),n=n.slice(t[0].length);return De(n).reduce((a,o)=>[...a,...s.map(c=>c+o)],[])}const mr=100,We=createContext$1(),Z$1=createContext$1(),se$1=()=>hr(useContext(We),"<A> and 'use' router primitives can be only used inside a Route."),gr=()=>useContext(Z$1)||se$1().base,en=e=>{const t=gr();return createMemo(()=>t.resolvePath(e()))},tn=e=>{const t=se$1();return createMemo(()=>{const r=e();return r!==void 0?t.renderPath(r):r})},wr=()=>se$1().location;function vr(e,t=""){const{component:r,load:n,children:s,info:a}=e,o=!s||Array.isArray(s)&&!s.length,c={key:e,component:r,load:n,info:a};return Ze(e.path).reduce((l,p)=>{for(const u of De(p)){const i=dr(t,u);let m=o?i:i.split("/*",1)[0];m=m.split("/").map(v=>v.startsWith(":")||v.startsWith("*")?v:encodeURIComponent(v)).join("/"),l.push({...c,originalPath:u,pattern:m,matcher:pr(m,!o,e.matchFilters)});}return l},[])}function yr(e,t=0){return {routes:e,score:fr(e[e.length-1])*1e4-t,matcher(r){const n=[];for(let s=e.length-1;s>=0;s--){const a=e[s],o=a.matcher(r);if(!o)return null;n.unshift({...o,route:a});}return n}}}function Ze(e){return Array.isArray(e)?e:[e]}function Ne(e,t="",r=[],n=[]){const s=Ze(e);for(let a=0,o=s.length;a<o;a++){const c=s[a];if(c&&typeof c=="object"){c.hasOwnProperty("path")||(c.path="");const l=vr(c,t);for(const p of l){r.push(p);const u=Array.isArray(c.children)&&c.children.length===0;if(c.children&&!u)Ne(c.children,p.pattern,r,n);else {const i=yr([...r],n.length);n.push(i);}r.pop();}}}return r.length?n:n.sort((a,o)=>o.score-a.score)}function W$1(e,t){for(let r=0,n=e.length;r<n;r++){const s=e[r].matcher(t);if(s)return s}return []}function Cr(e,t){const r=new URL(Ie),n=createMemo(l=>{const p=e();try{return new URL(p,r)}catch{return console.error(`Invalid path ${p}`),l}},r,{equals:(l,p)=>l.href===p.href}),s=createMemo(()=>n().pathname),a=createMemo(()=>n().search,!0),o=createMemo(()=>n().hash),c=()=>"";return {get pathname(){return s()},get search(){return a()},get hash(){return o()},get state(){return t()},get key(){return c()},query:Be$1(on(a,()=>ne(n())))}}let L;function xr(e,t,r,n={}){const{signal:[s,a],utils:o={}}=e,c=o.parsePath||(f=>f),l=o.renderPath||(f=>f),p=o.beforeLeave||Me(),u=D$1("",n.base||"");if(u===void 0)throw new Error(`${u} is not a valid base path`);u&&!s().value&&a({value:u,replace:!0,scroll:!1});const[i,m]=createSignal(!1),v=async f=>{m(!0);try{await startTransition(f);}finally{m(!1);}},[h,d]=createSignal(s().value),[g,w]=createSignal(s().state),j=Cr(h,g),x=[],F=createSignal(isServer?Ge():[]),T={pattern:u,params:{},path:()=>u,outlet:()=>null,resolvePath(f){return D$1(u,f)}};return createRenderEffect(()=>{const{value:f,state:y}=s();untrack(()=>{f!==h()&&v(()=>{L="native",d(f),w(y),resetErrorBoundaries(),F[1]([]);}).then(()=>{L=void 0;});});}),{base:T,location:j,isRouting:i,renderPath:l,parsePath:c,navigatorFactory:Ke,beforeLeave:p,preloadRoute:Je,singleFlight:n.singleFlight===void 0?!0:n.singleFlight,submissions:F};function ze(f,y,P){untrack(()=>{if(typeof y=="number"){y&&(o.go?o.go(y):console.warn("Router integration does not support relative routing"));return}const{replace:_,resolve:N,scroll:S,state:$}={replace:!1,resolve:!0,scroll:!0,...P},k=N?f.resolvePath(y):D$1("",y);if(k===void 0)throw new Error(`Path '${y}' is not a routable path`);if(x.length>=mr)throw new Error("Too many redirects");const oe=h();if(k!==oe||$!==g()){if(isServer){const M=getRequestEvent();M&&(M.response={status:302,headers:new Headers({Location:k})}),a({value:k,replace:_,scroll:S,state:$});}else if(p.confirm(k,P)){const M=x.push({value:oe,replace:_,scroll:S,state:g()});v(()=>{L="navigate",d(k),w($),resetErrorBoundaries(),F[1]([]);}).then(()=>{x.length===M&&(L=void 0,Xe({value:k,state:$}));});}}});}function Ke(f){return f=f||useContext(Z$1)||T,(y,P)=>ze(f,y,P)}function Xe(f){const y=x[0];y&&((f.value!==y.value||f.state!==y.state)&&a({...f,replace:y.replace,scroll:y.scroll}),x.length=0);}function Je(f,y){const P=W$1(r(),f.pathname),_=L;L="preload";for(let N in P){const{route:S,params:$}=P[N];S.component&&S.component.preload&&S.component.preload();const{load:k}=S;y&&k&&runWithOwner(t(),()=>k({params:$,location:{pathname:f.pathname,search:f.search,hash:f.hash,query:ne(f),state:null,key:""},intent:"preload"}));}L=_;}function Ge(){const f=getRequestEvent();return f&&f.router&&f.router.submission?[f.router.submission]:[]}}function br(e,t,r,n,s){const{base:a,location:o}=e,{pattern:c,component:l,load:p}=n().route,u=createMemo(()=>n().path);l&&l.preload&&l.preload();const i=p?p({params:s,location:o,intent:L||"initial"}):void 0;return {parent:t,pattern:c,path:u,params:s,outlet:()=>l?createComponent$1(l,{params:s,location:o,data:i,get children(){return r()}}):r(),resolvePath(v){return D$1(a.path(),v,u())}}}const Ve=e=>t=>{const{base:r}=t,n=children(()=>t.children),s=createMemo(()=>Ne(t.root?{component:t.root,load:t.rootLoad,children:n()}:n(),t.base||""));let a;const o=xr(e,()=>a,s,{base:r,singleFlight:t.singleFlight});return e.create&&e.create(o),createComponent(We.Provider,{value:o,get children(){return [(a=getOwner())&&null,createComponent(kr,{routerState:o,get branches(){return s()}})]}})};function kr(e){const t=createMemo(()=>W$1(e.branches,e.routerState.location.pathname));if(isServer){const o=getRequestEvent();if(o&&o.router&&o.router.dataOnly){Fr(o,e.branches);return}o&&((o.router||(o.router={})).matches||(o.router.matches=t().map(({route:c,path:l,params:p})=>({path:c.originalPath,pattern:c.pattern,match:l,params:p,info:c.info}))));}const r=Be$1(()=>{const o=t(),c={};for(let l=0;l<o.length;l++)Object.assign(c,o[l].params);return c}),n=[];let s;const a=createMemo(on(t,(o,c,l)=>{let p=c&&o.length===c.length;const u=[];for(let i=0,m=o.length;i<m;i++){const v=c&&c[i],h=o[i];l&&v&&h.route.key===v.route.key?u[i]=l[i]:(p=!1,n[i]&&n[i](),createRoot(d=>{n[i]=d,u[i]=br(e.routerState,u[i-1]||e.routerState.base,Rr(()=>a()[i+1]),()=>t()[i],r);}));}return n.splice(o.length).forEach(i=>i()),l&&p?l:(s=u[0],u)}));return createComponent(Show,{get when(){return a()&&s},keyed:!0,children:o=>createComponent(Z$1.Provider,{value:o,get children(){return o.outlet()}})})}const Rr=e=>()=>createComponent(Show,{get when(){return e()},keyed:!0,children:t=>createComponent(Z$1.Provider,{value:t,get children(){return t.outlet()}})});function Fr(e,t){const r=new URL(e.request.url),n=W$1(t,new URL(e.router.previousUrl||e.request.url).pathname),s=W$1(t,r.pathname);for(let a=0;a<s.length;a++){(!n[a]||s[a].route!==n[a].route)&&(e.router.dataOnly=!0);const{route:o,params:c}=s[a];o.load&&o.load({params:c,location:{pathname:r.pathname,search:r.search,hash:r.hash,query:ne(r),state:null,key:""},intent:"preload"});}}function Lr([e,t],r,n){return [r?()=>r(e()):e,n?s=>t(n(s)):t]}function Pr(e){if(e==="#")return null;try{return document.querySelector(e)}catch{return null}}function Sr(e){let t=!1;const r=s=>typeof s=="string"?{value:s}:s,n=Lr(createSignal(r(e.get()),{equals:(s,a)=>s.value===a.value}),void 0,s=>(!t&&e.set(s),s));return e.init&&onCleanup(e.init((s=e.get())=>{t=!0,n[1](r(s)),t=!1;})),Ve({signal:n,create:e.create,utils:e.utils})}function $r(e,t,r){return e.addEventListener(t,r),()=>e.removeEventListener(t,r)}function Er(e,t){const r=Pr(`#${e}`);r?r.scrollIntoView():t&&window.scrollTo(0,0);}function Ar(e){const t=new URL(e);return t.pathname+t.search}function Tr(e){let t;const r={value:e.url||(t=getRequestEvent())&&Ar(t.request.url)||""};return Ve({signal:[()=>r,n=>Object.assign(r,n)]})(e)}const qr=new Map;function Or(e=!0,t=!1,r="/_server"){return n=>{const s=n.base.path(),a=n.navigatorFactory(n.base);let o={};function c(h){return h.namespaceURI==="http://www.w3.org/2000/svg"}function l(h){if(h.defaultPrevented||h.button!==0||h.metaKey||h.altKey||h.ctrlKey||h.shiftKey)return;const d=h.composedPath().find(T=>T instanceof Node&&T.nodeName.toUpperCase()==="A");if(!d||t&&!d.hasAttribute("link"))return;const g=c(d),w=g?d.href.baseVal:d.href;if((g?d.target.baseVal:d.target)||!w&&!d.hasAttribute("state"))return;const x=(d.getAttribute("rel")||"").split(/\s+/);if(d.hasAttribute("download")||x&&x.includes("external"))return;const F=g?new URL(w,document.baseURI):new URL(w);if(!(F.origin!==window.location.origin||s&&F.pathname&&!F.pathname.toLowerCase().startsWith(s.toLowerCase())))return [d,F]}function p(h){const d=l(h);if(!d)return;const[g,w]=d,j=n.parsePath(w.pathname+w.search+w.hash),x=g.getAttribute("state");h.preventDefault(),a(j,{resolve:!1,replace:g.hasAttribute("replace"),scroll:!g.hasAttribute("noscroll"),state:x&&JSON.parse(x)});}function u(h){const d=l(h);if(!d)return;const[g,w]=d;o[w.pathname]||n.preloadRoute(w,g.getAttribute("preload")!=="false");}function i(h){const d=l(h);if(!d)return;const[g,w]=d;o[w.pathname]||(o[w.pathname]=setTimeout(()=>{n.preloadRoute(w,g.getAttribute("preload")!=="false"),delete o[w.pathname];},200));}function m(h){const d=l(h);if(!d)return;const[,g]=d;o[g.pathname]&&(clearTimeout(o[g.pathname]),delete o[g.pathname]);}function v(h){let d=h.submitter&&h.submitter.hasAttribute("formaction")?h.submitter.getAttribute("formaction"):h.target.getAttribute("action");if(!d)return;if(!d.startsWith("https://action/")){const w=new URL(d,Ie);if(d=n.parsePath(w.pathname+w.search),!d.startsWith(r))return}if(h.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const g=qr.get(d);if(g){h.preventDefault();const w=new FormData(h.target);h.submitter&&h.submitter.name&&w.append(h.submitter.name,h.submitter.value),g.call(n,w);}}delegateEvents(["click","submit"]),document.addEventListener("click",p),e&&(document.addEventListener("mouseover",i),document.addEventListener("mouseout",m),document.addEventListener("focusin",u),document.addEventListener("touchstart",u)),document.addEventListener("submit",v),onCleanup(()=>{document.removeEventListener("click",p),e&&(document.removeEventListener("mouseover",i),document.removeEventListener("mouseout",m),document.removeEventListener("focusin",u),document.removeEventListener("touchstart",u)),document.removeEventListener("submit",v);});}}function Ur(e){if(isServer)return Tr(e);const t=()=>({value:window.location.pathname+window.location.search+window.location.hash,state:window.history.state}),r=Me();return Sr({get:t,set({value:n,replace:s,scroll:a,state:o}){s?window.history.replaceState(ir(o),"",n):window.history.pushState(o,"",n),Er(window.location.hash.slice(1),a),re$1();},init:n=>$r(window,"popstate",cr(n,s=>{if(s&&s<0)return !r.confirm(s);{const a=t();return !r.confirm(a.value,{state:a.state})}})),create:Or(e.preload,e.explicitLinks,e.actionBase),utils:{go:n=>window.history.go(n),beforeLeave:r}})(e)}const Hr="/_server/assets/logo-HaIiWWCp.svg",jr="data:image/svg+xml,%3csvg%20width='40.000000'%20height='40.000000'%20viewBox='0%200%2044%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdesc%3e%20Created%20with%20Pixso.%20%3c/desc%3e%3cdefs%3e%3cclipPath%20id='clip11_955'%3e%3crect%20id='cart'%20rx='5.000000'%20width='43.000000'%20height='43.000000'%20transform='translate(0.500000%200.500000)'%20fill='white'%20fill-opacity='0'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20clip-path='url(%23clip11_955)'%3e%3cpath%20id='Vector'%20d='M18.8421%2031.9999C18.8421%2033.1044%2017.9938%2033.9999%2016.9473%2033.9999C15.9009%2033.9999%2015.0526%2033.1044%2015.0526%2031.9999C15.0526%2030.8954%2015.9009%2029.9999%2016.9473%2029.9999C17.9938%2029.9999%2018.8421%2030.8954%2018.8421%2031.9999Z'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='2.000000'/%3e%3cpath%20id='Vector'%20d='M30.2106%2032C30.2106%2033.1046%2029.3623%2034%2028.3159%2034C27.2695%2034%2026.4211%2033.1046%2026.4211%2032C26.4211%2030.8954%2027.2695%2030%2028.3159%2030C29.3623%2030%2030.2106%2030.8954%2030.2106%2032Z'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='2.000000'/%3e%3cpath%20id='Vector'%20d='M10%2010L10.33%2010.1225C11.9741%2010.7326%2012.7961%2011.0377%2013.2663%2011.764C13.7365%2012.4903%2013.7365%2013.455%2013.7365%2015.3845L13.7365%2019.0133C13.7365%2022.9354%2013.8164%2024.2297%2014.9108%2025.4482C16.0052%2026.6666%2017.7666%2026.6666%2021.2895%2026.6666L22.6316%2026.6666M27.9879%2026.6666C29.9597%2026.6666%2030.9456%2026.6666%2031.6425%2026.0671C32.3394%2025.4677%2032.5384%2024.4485%2032.9365%2022.4099L33.5677%2019.1769C34.0062%2016.8582%2034.2253%2015.6989%2033.6647%2014.9294C33.1039%2014.16%2031.188%2014.16%2029.0596%2014.16L21.3981%2014.16M13.7365%2014.16L16.3158%2014.16'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='2.500000'/%3e%3c/g%3e%3crect%20id='cart'%20rx='5.000000'%20width='43.000000'%20height='43.000000'%20transform='translate(0.500000%200.500000)'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='1.000000'/%3e%3c/svg%3e",_r="data:image/svg+xml,%3csvg%20width='40.000000'%20height='40.000000'%20viewBox='0%200%2044%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdesc%3e%20Created%20with%20Pixso.%20%3c/desc%3e%3cdefs%3e%3cclipPath%20id='clip11_958'%3e%3crect%20id='favourites'%20rx='5.000000'%20width='43.000000'%20height='43.000000'%20transform='translate(0.500000%200.500000)'%20fill='white'%20fill-opacity='0'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20clip-path='url(%23clip11_958)'%3e%3cpath%20id='Vector'%20d='M12.5856%2011.7192C9.57959%2014.6052%209.15637%2019.4305%2011.517%2022.8438C13.4798%2025.6817%2019.4197%2031.6672%2021.3665%2033.6045C21.5843%2033.8213%2021.6932%2033.9296%2021.8203%2033.9722C21.9311%2034.0093%2022.0524%2034.0093%2022.1633%2033.9722C22.2904%2033.9296%2022.3992%2033.8213%2022.6171%2033.6045C24.5639%2031.6672%2030.5038%2025.6817%2032.4666%2022.8438C34.8272%2019.4305%2034.4556%2014.5748%2031.3979%2011.7192C28.3401%208.86347%2024.3992%209.80713%2022%2012.9589C19.6008%209.80713%2015.5917%208.83311%2012.5856%2011.7192Z'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='2.500000'%20stroke-linejoin='round'/%3e%3c/g%3e%3crect%20id='favourites'%20rx='5.000000'%20width='43.000000'%20height='43.000000'%20transform='translate(0.500000%200.500000)'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='1.000000'/%3e%3c/svg%3e",Mr="data:image/svg+xml,%3csvg%20width='40.000000'%20height='40.000000'%20viewBox='0%200%2044%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdesc%3e%20Created%20with%20Pixso.%20%3c/desc%3e%3cdefs%3e%3cclipPath%20id='clip11_962'%3e%3crect%20id='account'%20rx='5.000000'%20width='43.000000'%20height='43.000000'%20transform='translate(0.500000%200.500000)'%20fill='white'%20fill-opacity='0'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20clip-path='url(%23clip11_962)'%3e%3cpath%20id='Vector'%20d='M21.9999%2022.5132C18.3832%2022.5132%2015.4513%2019.712%2015.4513%2016.2566C15.4513%2012.8012%2018.3832%2010%2021.9999%2010C25.6165%2010%2028.5485%2012.8012%2028.5485%2016.2566C28.5485%2019.712%2025.6165%2022.5132%2021.9999%2022.5132Z'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='2.500000'/%3e%3cpath%20id='Vector'%20d='M10%2033.9782L10.4229%2031.7398C10.9224%2029.1547%2012.354%2026.8185%2014.4689%2025.1369C16.5839%2023.4554%2019.2485%2022.5348%2022%2022.5351C24.7548%2022.5357%2027.422%2023.4594%2029.5374%2025.1453C31.6528%2026.8312%2033.0823%2029.1726%2033.5771%2031.7617L34%2034.0001'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='2.500000'/%3e%3c/g%3e%3crect%20id='account'%20rx='5.000000'%20width='43.000000'%20height='43.000000'%20transform='translate(0.500000%200.500000)'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='1.000000'/%3e%3c/svg%3e";var Ir=["<header",' class="bg-orange py-3"><div class="container mx-auto max-w-[1200px] pl-[16px] pr-[16px]"><div class="flex justify-between items-center"><div class="flex items-center gap-16"><a href="/"><img',' alt="Logo"></a><nav class="hidden sm:block"><ul class="flex items-center space-x-10"><li><a href="/catalog" class="text-white hover:text-hover-header duration-150 font-semibold font-montserrat text-base font-bold leading-5">Каталог</a></li><li><p class="','">Контакты<svg class="h-4 w-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg><!--$-->','<!--/--></p></li></ul></nav></div><div class="flex items-center space-x-2"><a href="/cart" class="text-gray-200 hover:text-white"><img',' alt="cart"></a><a href="/favorites" class="text-gray-200 hover:text-white"><img',' alt="favourites"></a><a href="/login" class="text-gray-200 hover:text-white"><img',' alt="cart"></a></div></div></div></header>'],pe$1=["<ul",' class="absolute w-[230px] shadow-lg top-full right-0 bg-white py-[30px] px-[20px] mt-3 rounded-[10px] cursor-auto z-50"><li class="flex gap-4 items-center pb-[10px]"><svg width="17.001221" height="18.254242" viewBox="0 0 17.0012 18.2542" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M5.12451 12.785C7.07727 14.9009 9.51904 16.4092 12.1942 17.1521C14.2524 17.7198 16.0012 15.8021 16.0012 13.5L16.0012 12.4583C16.0012 11.8833 15.5696 11.4219 15.0417 11.3646C14.1664 11.2711 13.3071 11.0471 12.4884 10.699L11.0271 12.2823C8.64771 11.0465 6.72913 8.96762 5.5885 6.38958L7.0498 4.80625C6.72815 3.91911 6.52112 2.9881 6.43457 2.03958C6.38269 1.46667 5.95679 1 5.42603 1L4.46472 1C2.34009 1 0.57019 2.89479 1.09412 5.125C1.77979 8.02357 3.17175 10.6692 5.12451 12.785Z" stroke="#FF6006" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"></path></svg><a href="tel:+79615259191" class="text-black font-medium text-ms hover:text-orange duration-150">+7 961-525-91-91</a></li><li class="flex gap-4 items-center pb-[10px]"><svg width="18.000000" height="15.000000" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><desc>Created with Pixso.</desc><defs></defs><path id="Vector" d="M18 1.875C18 0.84375 17.1899 0 16.2 0L1.80005 0C0.810059 0 0 0.84375 0 1.875L0 13.125C0 14.1562 0.810059 15 1.80005 15L16.2 15C17.1899 15 18 14.1562 18 13.125L18 1.875ZM16.2 1.875L9 6.5625L1.80005 1.875L16.2 1.875ZM16.2 13.125L1.80005 13.125L1.80005 3.75L9 8.4375L16.2 3.75L16.2 13.125Z" fill="#FF5F04" fill-opacity="1.000000" fill-rule="nonzero"></path></svg><a href="mailto:zooxpress@mail.ru" class="text-black font-medium text-ms hover:text-orange duration-150">Zooxpress@mail.ru</a></li><li class="flex gap-4 items-center pb-[10px]"><svg width="20.833374" height="20.833328" viewBox="0 0 20.8334 20.8333" fill="none" xmlns="http://www.w3.org/2000/svg"><desc>Created with Pixso.</desc><defs></defs><path id="Vector" d="M10.4166 0C16.1698 0 20.8334 4.66354 20.8334 10.4167C20.8334 16.1698 16.1698 20.8333 10.4166 20.8333C4.66357 20.8333 0 16.1698 0 10.4167C0 4.66354 4.66357 0 10.4166 0ZM10.4166 2.08333C8.20654 2.08333 6.08691 2.9613 4.52417 4.52411C2.9613 6.08691 2.08337 8.20653 2.08337 10.4167C2.08337 12.6268 2.9613 14.7464 4.52417 16.3092C6.08691 17.872 8.20654 18.75 10.4166 18.75C12.6268 18.75 14.7465 17.872 16.3092 16.3092C17.8721 14.7464 18.75 12.6268 18.75 10.4167C18.75 8.20653 17.8721 6.08691 16.3092 4.52411C14.7465 2.9613 12.6268 2.08333 10.4166 2.08333ZM10.4166 4.16667C10.6718 4.1667 10.9181 4.26038 11.1088 4.42992C11.2994 4.59946 11.4211 4.83307 11.451 5.08646L11.4584 5.20833L11.4584 9.98541L14.2781 12.8052C14.465 12.9927 14.5734 13.2442 14.5815 13.5087C14.5896 13.7733 14.4967 14.0309 14.3217 14.2295C14.1466 14.428 13.9026 14.5524 13.639 14.5775C13.3756 14.6026 13.1125 14.5265 12.9031 14.3646L12.8052 14.2781L9.68018 11.1531C9.51831 10.9911 9.41431 10.7802 9.3844 10.5531L9.375 10.4167L9.375 5.20833C9.375 4.93207 9.48474 4.66711 9.68005 4.47177C9.87549 4.27641 10.1404 4.16667 10.4166 4.16667Z" fill="#FF5F04" fill-opacity="1.000000" fill-rule="nonzero"></path></svg><p class="text-black font-medium text-ms">График работы: <br>Пн-Сб 9:00-18:00</p></li><li class="flex gap-4 items-center pb-[10px]"><svg width="16.000000" height="21.333328" viewBox="0 0 16 21.3333" fill="none" xmlns="http://www.w3.org/2000/svg"><desc>Created with Pixso.</desc><defs></defs><path id="Vector" d="M13.5547 11.92C12.856 13.336 11.9093 14.7467 10.9413 16.0133C10.0221 17.2067 9.04028 18.3505 8 19.44C6.95972 18.3505 5.97791 17.2067 5.05872 16.0133C4.0907 14.7467 3.14404 13.336 2.44531 11.92C1.73865 10.4893 1.33337 9.14934 1.33337 7.99998C1.33337 6.23189 2.03577 4.53621 3.28601 3.28596C4.53625 2.03571 6.23193 1.33333 8 1.33333C9.76807 1.33333 11.4637 2.03571 12.714 3.28596C13.9642 4.53621 14.6666 6.23189 14.6666 7.99998C14.6666 9.14934 14.26 10.4893 13.5547 11.92ZM8 21.3333C8 21.3333 16 13.752 16 7.99998C16 5.87828 15.1571 3.84343 13.6569 2.34314C12.1566 0.84285 10.1217 0 8 0C5.8783 0 3.84338 0.84285 2.34314 2.34314C0.842896 3.84343 0 5.87828 0 7.99998C0 13.752 8 21.3333 8 21.3333Z" fill="#FF5F04" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M8 10.6666C7.29272 10.6666 6.6145 10.3857 6.11438 9.8856C5.61426 9.38551 5.33337 8.70723 5.33337 7.99998C5.33337 7.29274 5.61426 6.61446 6.11438 6.11436C6.6145 5.61427 7.29272 5.33333 8 5.33333C8.70728 5.33333 9.3855 5.61427 9.88562 6.11436C10.3857 6.61446 10.6666 7.29274 10.6666 7.99998C10.6666 8.70723 10.3857 9.38551 9.88562 9.8856C9.3855 10.3857 8.70728 10.6666 8 10.6666ZM8 12C9.06091 12 10.0782 11.5786 10.8284 10.8284C11.5786 10.0783 12 9.06084 12 7.99998C12 6.93913 11.5786 5.92171 10.8284 5.17155C10.0782 4.4214 9.06091 3.99998 8 3.99998C6.93909 3.99998 5.92175 4.4214 5.17163 5.17155C4.42139 5.92171 4 6.93913 4 7.99998C4 9.06084 4.42139 10.0783 5.17163 10.8284C5.92175 11.5786 6.93909 12 8 12Z" fill="#FF5F04" fill-opacity="1.000000" fill-rule="nonzero"></path></svg><p class="text-black font-medium text-ms">г. Самара, <br>Ленинградская 114</p></li><div class="flex gap-[10px] mt-[40px]"><a href=""><svg width="35.000000" height="35.000000" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><desc>Created with Pixso.</desc><defs><clipPath id="clip404_2018"><rect id="Frame 4" rx="9.500000" width="34.000000" height="34.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"></rect></clipPath></defs><g clip-path="url(#clip404_2018)"><path id="Vector" d="M18.8206 20.1487C21.1077 20.4974 21.8308 22.2974 23.2872 23.5538L27 23.5538C26.0718 21.4815 24.6868 19.646 22.9487 18.1846C24.2821 16.3487 25.6974 14.6205 26.3898 12L23.0154 12C21.6923 14.0051 20.9949 16.3539 18.8206 17.9026L18.8206 12L13.9231 12L15.0923 13.4462L15.0923 18.6C13.1948 18.3795 11.9128 14.9077 10.5231 12L7 12C8.2821 15.9282 10.9795 24.5487 18.8206 23.5538L18.8206 20.1487Z" stroke="#FF6006" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"></path></g><rect id="Frame 4" rx="9.500000" width="34.000000" height="34.000000" transform="translate(0.500000 0.500000)" stroke="#FF6006" stroke-opacity="1.000000" stroke-width="1.000000"></rect></svg></a><a href=""><svg width="35.000000" height="35.000000" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><desc>Created with Pixso.</desc><defs><clipPath id="clip404_2015"><rect id="Frame 34" rx="9.500000" width="34.000000" height="34.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"></rect></clipPath></defs><g clip-path="url(#clip404_2015)"><path id="Vector" d="M25.9419 10.5665L23.3777 24.9721C23.1985 25.9964 22.6792 26.2429 21.9624 25.7664L15.8459 20.3821C15.8223 20.3618 15.803 20.3351 15.7896 20.3041C15.7762 20.2731 15.7693 20.2389 15.7693 20.204C15.7693 20.1693 15.7762 20.1349 15.7896 20.104C15.803 20.0731 15.8223 20.0463 15.8459 20.026L22.9091 12.4234C23.2307 12.0838 22.8401 11.9195 22.4174 12.2262L13.5529 18.8922C13.526 18.9131 13.4955 18.9264 13.4636 18.9312C13.4318 18.9359 13.3994 18.932 13.3691 18.9196L9.60547 17.5009C8.76917 17.2106 8.76917 16.526 9.79395 16.0385L24.8528 9.11502C24.9723 9.04672 25.1019 9.00763 25.2343 9C25.7581 9 26.1533 9.54773 25.9419 10.5665Z" stroke="#FF6006" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"></path></g><rect id="Frame 34" rx="9.500000" width="34.000000" height="34.000000" transform="translate(0.500000 0.500000)" stroke="#FF6006" stroke-opacity="1.000000" stroke-width="1.000000"></rect></svg></a></div></ul>'];function Br(){wr();const[e,t]=createSignal(!1);return ssr(Ir,ssrHydrationKey(),ssrAttribute("src",escape(Hr,!0),!1),"text-white cursor-pointer relative font-semibold hover:text-hover-header duration-150",e()&&pe$1[0]+ssrHydrationKey()+pe$1[1],ssrAttribute("src",escape(jr,!0),!1),ssrAttribute("src",escape(_r,!0),!1),ssrAttribute("src",escape(Mr,!0),!1))}function Dr(){return createComponent(Ur,{root:e=>[createComponent(Br,{}),createComponent(Suspense,{get children(){return e.children}})],get children(){return createComponent(sr,{})}})}function Wr(e){const r=e.length.toString(16),n="00000000".substring(0,8-r.length)+r;return new TextEncoder().encode(`;0x${n};${e}`)}function fe$1(e,t){return new ReadableStream({start(r){crossSerializeStream(t,{scopeId:e,plugins:[CustomEventPlugin,DOMExceptionPlugin,EventPlugin,FormDataPlugin,HeadersPlugin,ReadableStreamPlugin,RequestPlugin,ResponsePlugin,URLSearchParamsPlugin,URLPlugin],onSerialize(n,s){r.enqueue(Wr(s?`(${getCrossReferenceHeader(e)},${n})`:n));},onDone(){r.close();},onError(n){r.error(n);}});}})}async function Zr(e){const t=zt$1(e),r=t.request,n=r.headers.get("X-Server-Id"),s=r.headers.get("X-Server-Instance"),a=r.headers.has("X-Single-Flight"),o=new URL(r.url);let c,l;if(n)Zt$1(typeof n=="string","Invalid server function"),[c,l]=n.split("#");else if(c=o.searchParams.get("id"),l=o.searchParams.get("name"),!c||!l)throw new Error("Invalid request");const p=(await globalThis.MANIFEST["server-fns"].chunks[c].import())[l];let u=[];if(!s||e.method==="GET"){const i=o.searchParams.get("args");i&&JSON.parse(i).forEach(m=>u.push(m));}if(e.method==="POST"){const i=r.headers.get("content-type");if(i?.startsWith("multipart/form-data")||i?.startsWith("application/x-www-form-urlencoded"))u.push(await new Request(r,{...r,body:e.node.req.body}).formData());else if(i?.startsWith("application/json")){const m=new Request(r,{...r,body:e.node.req.body});u=fromJSON(await m.json(),{plugins:[CustomEventPlugin,DOMExceptionPlugin,EventPlugin,FormDataPlugin,HeadersPlugin,ReadableStreamPlugin,RequestPlugin,ResponsePlugin,URLSearchParamsPlugin,URLPlugin]});}}try{let i=await provideRequestEvent(t,async()=>(sharedConfig.context={event:t},p(...u)));if(a&&s&&(i=await me$1(t,i)),i instanceof Response&&s&&(i.headers&&he$1(e,i.headers),i.customBody?i=await i.customBody():i.body==null&&(i=null)),!s){const m=i instanceof Error;let v=new URL(r.headers.get("referer")).toString();return i instanceof Response&&i.headers.has("Location")&&(v=new URL(i.headers.get("Location"),new URL(r.url).origin+"").toString()),new Response(null,{status:302,headers:{Location:v,...i?{"Set-Cookie":`flash=${JSON.stringify({url:o.pathname+encodeURIComponent(o.search),result:m?i.message:i,error:m,input:[...u.slice(0,-1),[...u[u.length-1].entries()]]})}; Secure; HttpOnly;`}:{}}})}return Q$1(e,"content-type","text/javascript"),fe$1(s,i)}catch(i){return i instanceof Response&&(a&&s&&(i=await me$1(t,i)),i.status===302&&!s&&G$1(e,302),i.headers&&he$1(e,i.headers),i.customBody?i=i.customBody():i.body==null&&(i=null),s)?(Q$1(e,"content-type","text/javascript"),fe$1(s,i)):i}}async function me$1(e,t){let r,n=new URL(e.request.headers.get("referer")).toString();t instanceof Response&&(t.headers.has("X-Revalidate")&&(r=t.headers.get("X-Revalidate").split(",")),t.headers.has("Location")&&(n=new URL(t.headers.get("Location"),new URL(e.request.url).origin+"").toString()));const s=Vt$1(e);return s.request=new Request(n),await provideRequestEvent(s,async()=>{await ar(s),s.router.dataOnly=r||!0,s.router.previousUrl=e.request.headers.get("referer");try{renderToString(()=>{sharedConfig.context.event=s,Dr();});}catch(c){console.log(c);}const a=s.router.data;if(!a)return t;let o=!1;for(const c in a)a[c]===void 0?delete a[c]:o=!0;return o&&(t instanceof Response?t.customBody&&(a._$value=t.customBody()):(a._$value=t,t=new Response(null,{status:200})),t.customBody=()=>a,t.headers.set("X-Single-Flight","true")),t})}const rn=eventHandler(Zr);

function ie() {
  let e = /* @__PURE__ */ new Set();
  function t(r) {
    return e.add(r), () => e.delete(r);
  }
  let n = false;
  function s(r, o) {
    if (n)
      return !(n = false);
    const c = { to: r, options: o, defaultPrevented: false, preventDefault: () => c.defaultPrevented = true };
    for (const i of e)
      i.listener({ ...c, from: i.location, retry: (u) => {
        u && (n = true), i.navigate(r, { ...o, resolve: false });
      } });
    return !c.defaultPrevented;
  }
  return { subscribe: t, confirm: s };
}
let k;
function N$1() {
  (!window.history.state || window.history.state._depth == null) && window.history.replaceState({ ...window.history.state, _depth: window.history.length - 1 }, ""), k = window.history.state._depth;
}
isServer || N$1();
function Ae(e) {
  return { ...e, _depth: window.history.state && window.history.state._depth };
}
function Le(e, t) {
  let n = false;
  return () => {
    const s = k;
    N$1();
    const r = s == null ? null : k - s;
    if (n) {
      n = false;
      return;
    }
    r && t(r) ? (n = true, window.history.go(-r)) : e();
  };
}
const ue = /^(?:[a-z0-9]+:)?\/\//i, le = /^\/+|(\/)\/+$/g, fe = "http://sr";
function S$1(e, t = false) {
  const n = e.replace(le, "$1");
  return n ? t || /^[?#]/.test(n) ? n : "/" + n : "";
}
function O(e, t, n) {
  if (ue.test(t))
    return;
  const s = S$1(e), r = n && S$1(n);
  let o = "";
  return !r || t.startsWith("/") ? o = s : r.toLowerCase().indexOf(s.toLowerCase()) !== 0 ? o = s + r : o = r, (o || "/") + S$1(t, !o);
}
function he(e, t) {
  if (e == null)
    throw new Error(t);
  return e;
}
function de(e, t) {
  return S$1(e).replace(/\/*(\*.*)?$/g, "") + S$1(t);
}
function X$1(e) {
  const t = {};
  return e.searchParams.forEach((n, s) => {
    t[s] = n;
  }), t;
}
function pe(e, t, n) {
  const [s, r] = e.split("/*", 2), o = s.split("/").filter(Boolean), c = o.length;
  return (i) => {
    const u = i.split("/").filter(Boolean), f = u.length - c;
    if (f < 0 || f > 0 && r === void 0 && !t)
      return null;
    const l = { path: c ? "" : "/", params: {} }, m = (h) => n === void 0 ? void 0 : n[h];
    for (let h = 0; h < c; h++) {
      const p = o[h], w = u[h], b = p[0] === ":", x = b ? p.slice(1) : p;
      if (b && F(w, m(x)))
        l.params[x] = w;
      else if (b || !F(w, p))
        return null;
      l.path += `/${w}`;
    }
    if (r) {
      const h = f ? u.slice(-f).join("/") : "";
      if (F(h, m(r)))
        l.params[r] = h;
      else
        return null;
    }
    return l;
  };
}
function F(e, t) {
  const n = (s) => s.localeCompare(e, void 0, { sensitivity: "base" }) === 0;
  return t === void 0 ? true : typeof t == "string" ? n(t) : typeof t == "function" ? t(e) : Array.isArray(t) ? t.some(n) : t instanceof RegExp ? t.test(e) : false;
}
function me(e) {
  const [t, n] = e.pattern.split("/*", 2), s = t.split("/").filter(Boolean);
  return s.reduce((r, o) => r + (o.startsWith(":") ? 2 : 3), s.length - (n === void 0 ? 0 : 1));
}
function ge(e) {
  const t = /* @__PURE__ */ new Map(), n = getOwner();
  return new Proxy({}, { get(s, r) {
    return t.has(r) || runWithOwner(n, () => t.set(r, createMemo(() => e()[r]))), t.get(r)();
  }, getOwnPropertyDescriptor() {
    return { enumerable: true, configurable: true };
  }, ownKeys() {
    return Reflect.ownKeys(e());
  } });
}
function G(e) {
  let t = /(\/?\:[^\/]+)\?/.exec(e);
  if (!t)
    return [e];
  let n = e.slice(0, t.index), s = e.slice(t.index + t[0].length);
  const r = [n, n += t[1]];
  for (; t = /^(\/\:[^\/]+)\?/.exec(s); )
    r.push(n += t[1]), s = s.slice(t[0].length);
  return G(s).reduce((o, c) => [...o, ...r.map((i) => i + c)], []);
}
const we = 100, ye = createContext$1(), J = createContext$1(), M$1 = () => he(useContext(ye), "<A> and 'use' router primitives can be only used inside a Route."), ve = () => useContext(J) || M$1().base, Be = (e) => {
  const t = ve();
  return createMemo(() => t.resolvePath(e()));
}, Oe = (e) => {
  const t = M$1();
  return createMemo(() => {
    const n = e();
    return n !== void 0 ? t.renderPath(n) : n;
  });
}, _e = () => M$1().location;
function Re(e, t = "") {
  const { component: n, load: s, children: r, info: o } = e, c = !r || Array.isArray(r) && !r.length, i = { key: e, component: n, load: s, info: o };
  return Q(e.path).reduce((u, f) => {
    for (const l of G(f)) {
      const m = de(t, l);
      let h = c ? m : m.split("/*", 1)[0];
      h = h.split("/").map((p) => p.startsWith(":") || p.startsWith("*") ? p : encodeURIComponent(p)).join("/"), u.push({ ...i, originalPath: l, pattern: h, matcher: pe(h, !c, e.matchFilters) });
    }
    return u;
  }, []);
}
function Pe(e, t = 0) {
  return { routes: e, score: me(e[e.length - 1]) * 1e4 - t, matcher(n) {
    const s = [];
    for (let r = e.length - 1; r >= 0; r--) {
      const o = e[r], c = o.matcher(n);
      if (!c)
        return null;
      s.unshift({ ...c, route: o });
    }
    return s;
  } };
}
function Q(e) {
  return Array.isArray(e) ? e : [e];
}
function be(e, t = "", n = [], s = []) {
  const r = Q(e);
  for (let o = 0, c = r.length; o < c; o++) {
    const i = r[o];
    if (i && typeof i == "object") {
      i.hasOwnProperty("path") || (i.path = "");
      const u = Re(i, t);
      for (const f of u) {
        n.push(f);
        const l = Array.isArray(i.children) && i.children.length === 0;
        if (i.children && !l)
          be(i.children, f.pattern, n, s);
        else {
          const m = Pe([...n], s.length);
          s.push(m);
        }
        n.pop();
      }
    }
  }
  return n.length ? s : s.sort((o, c) => c.score - o.score);
}
function xe(e, t) {
  for (let n = 0, s = e.length; n < s; n++) {
    const r = e[n].matcher(t);
    if (r)
      return r;
  }
  return [];
}
function Ee(e, t) {
  const n = new URL(fe), s = createMemo((u) => {
    const f = e();
    try {
      return new URL(f, n);
    } catch {
      return console.error(`Invalid path ${f}`), u;
    }
  }, n, { equals: (u, f) => u.href === f.href }), r = createMemo(() => s().pathname), o = createMemo(() => s().search, true), c = createMemo(() => s().hash), i = () => "";
  return { get pathname() {
    return r();
  }, get search() {
    return o();
  }, get hash() {
    return c();
  }, get state() {
    return t();
  }, get key() {
    return i();
  }, query: ge(on(o, () => X$1(s()))) };
}
let y;
function je(e, t, n, s = {}) {
  const { signal: [r, o], utils: c = {} } = e, i = c.parsePath || ((a) => a), u = c.renderPath || ((a) => a), f = c.beforeLeave || ie(), l = O("", s.base || "");
  if (l === void 0)
    throw new Error(`${l} is not a valid base path`);
  l && !r().value && o({ value: l, replace: true, scroll: false });
  const [m, h] = createSignal(false), p = async (a) => {
    h(true);
    try {
      await startTransition(a);
    } finally {
      h(false);
    }
  }, [w, b] = createSignal(r().value), [x, q] = createSignal(r().state), V = Ee(w, x), C = [], _ = createSignal(isServer ? ne() : []), D = { pattern: l, params: {}, path: () => l, outlet: () => null, resolvePath(a) {
    return O(l, a);
  } };
  return createRenderEffect(() => {
    const { value: a, state: d } = r();
    untrack(() => {
      a !== w() && p(() => {
        y = "native", b(a), q(d), resetErrorBoundaries(), _[1]([]);
      }).then(() => {
        y = void 0;
      });
    });
  }), { base: D, location: V, isRouting: m, renderPath: u, parsePath: i, navigatorFactory: Z, beforeLeave: f, preloadRoute: te, singleFlight: s.singleFlight === void 0 ? true : s.singleFlight, submissions: _ };
  function Y(a, d, R) {
    untrack(() => {
      if (typeof d == "number") {
        d && (c.go ? c.go(d) : console.warn("Router integration does not support relative routing"));
        return;
      }
      const { replace: A, resolve: j, scroll: P, state: E } = { replace: false, resolve: true, scroll: true, ...R }, g = j ? a.resolvePath(d) : O("", d);
      if (g === void 0)
        throw new Error(`Path '${d}' is not a routable path`);
      if (C.length >= we)
        throw new Error("Too many redirects");
      const W = w();
      if (g !== W || E !== x()) {
        if (isServer) {
          const L = getRequestEvent();
          L && (L.response = { status: 302, headers: new Headers({ Location: g }) }), o({ value: g, replace: A, scroll: P, state: E });
        } else if (f.confirm(g, R)) {
          const L = C.push({ value: W, replace: A, scroll: P, state: x() });
          p(() => {
            y = "navigate", b(g), q(E), resetErrorBoundaries(), _[1]([]);
          }).then(() => {
            C.length === L && (y = void 0, ee({ value: g, state: E }));
          });
        }
      }
    });
  }
  function Z(a) {
    return a = a || useContext(J) || D, (d, R) => Y(a, d, R);
  }
  function ee(a) {
    const d = C[0];
    d && ((a.value !== d.value || a.state !== d.state) && o({ ...a, replace: d.replace, scroll: d.scroll }), C.length = 0);
  }
  function te(a, d) {
    const R = xe(n(), a.pathname), A = y;
    y = "preload";
    for (let j in R) {
      const { route: P, params: E } = R[j];
      P.component && P.component.preload && P.component.preload();
      const { load: g } = P;
      d && g && runWithOwner(t(), () => g({ params: E, location: { pathname: a.pathname, search: a.search, hash: a.hash, query: X$1(a), state: null, key: "" }, intent: "preload" }));
    }
    y = A;
  }
  function ne() {
    const a = getRequestEvent();
    return a && a.router && a.router.submission ? [a.router.submission] : [];
  }
}
function Fe(e, t, n, s, r) {
  const { base: o, location: c } = e, { pattern: i, component: u, load: f } = s().route, l = createMemo(() => s().path);
  u && u.preload && u.preload();
  const m = f ? f({ params: r, location: c, intent: y || "initial" }) : void 0;
  return { parent: t, pattern: i, path: l, params: r, outlet: () => u ? createComponent$1(u, { params: r, location: c, data: m, get children() {
    return n();
  } }) : n(), resolvePath(p) {
    return O(o.path(), p, l());
  } };
}

const X = (e) => (t) => {
  const { base: r } = t, n = children(() => t.children), s = createMemo(() => be(t.root ? { component: t.root, load: t.rootLoad, children: n() } : n(), t.base || ""));
  let a;
  const o = je(e, () => a, s, { base: r, singleFlight: t.singleFlight });
  return e.create && e.create(o), createComponent(ye.Provider, { value: o, get children() {
    return [(a = getOwner()) && null, createComponent(Ye, { routerState: o, get branches() {
      return s();
    } })];
  } });
};
function Ye(e) {
  const t = createMemo(() => xe(e.branches, e.routerState.location.pathname));
  if (isServer) {
    const o = getRequestEvent();
    if (o && o.router && o.router.dataOnly) {
      Xe(o, e.branches);
      return;
    }
    o && ((o.router || (o.router = {})).matches || (o.router.matches = t().map(({ route: u, path: l, params: m }) => ({ path: u.originalPath, pattern: u.pattern, match: l, params: m, info: u.info }))));
  }
  const r = ge(() => {
    const o = t(), u = {};
    for (let l = 0; l < o.length; l++)
      Object.assign(u, o[l].params);
    return u;
  }), n = [];
  let s;
  const a = createMemo(on(t, (o, u, l) => {
    let m = u && o.length === u.length;
    const w = [];
    for (let h = 0, x = o.length; h < x; h++) {
      const v = u && u[h], i = o[h];
      l && v && i.route.key === v.route.key ? w[h] = l[h] : (m = false, n[h] && n[h](), createRoot((c) => {
        n[h] = c, w[h] = Fe(e.routerState, w[h - 1] || e.routerState.base, Qe(() => a()[h + 1]), () => t()[h], r);
      }));
    }
    return n.splice(o.length).forEach((h) => h()), l && m ? l : (s = w[0], w);
  }));
  return createComponent(Show, { get when() {
    return a() && s;
  }, keyed: true, children: (o) => createComponent(J.Provider, { value: o, get children() {
    return o.outlet();
  } }) });
}
const Qe = (e) => () => createComponent(Show, { get when() {
  return e();
}, keyed: true, children: (t) => createComponent(J.Provider, { value: t, get children() {
  return t.outlet();
} }) });
function Xe(e, t) {
  const r = new URL(e.request.url), n = xe(t, new URL(e.router.previousUrl || e.request.url).pathname), s = xe(t, r.pathname);
  for (let a = 0; a < s.length; a++) {
    (!n[a] || s[a].route !== n[a].route) && (e.router.dataOnly = true);
    const { route: o, params: u } = s[a];
    o.load && o.load({ params: u, location: { pathname: r.pathname, search: r.search, hash: r.hash, query: X$1(r), state: null, key: "" }, intent: "preload" });
  }
}
function et([e, t], r, n) {
  return [r ? () => r(e()) : e, n ? (s) => t(n(s)) : t];
}
function tt(e) {
  if (e === "#")
    return null;
  try {
    return document.querySelector(e);
  } catch {
    return null;
  }
}
function rt(e) {
  let t = false;
  const r = (s) => typeof s == "string" ? { value: s } : s, n = et(createSignal(r(e.get()), { equals: (s, a) => s.value === a.value }), void 0, (s) => (!t && e.set(s), s));
  return e.init && onCleanup(e.init((s = e.get()) => {
    t = true, n[1](r(s)), t = false;
  })), X({ signal: n, create: e.create, utils: e.utils });
}
function st(e, t, r) {
  return e.addEventListener(t, r), () => e.removeEventListener(t, r);
}
function nt(e, t) {
  const r = tt(`#${e}`);
  r ? r.scrollIntoView() : t && window.scrollTo(0, 0);
}
function ot(e) {
  const t = new URL(e);
  return t.pathname + t.search;
}
function at(e) {
  let t;
  const r = { value: e.url || (t = getRequestEvent()) && ot(t.request.url) || "" };
  return X({ signal: [() => r, (n) => Object.assign(r, n)] })(e);
}
const it = /* @__PURE__ */ new Map();
function ct(e = true, t = false, r = "/_server") {
  return (n) => {
    const s = n.base.path(), a = n.navigatorFactory(n.base);
    let o = {};
    function u(i) {
      return i.namespaceURI === "http://www.w3.org/2000/svg";
    }
    function l(i) {
      if (i.defaultPrevented || i.button !== 0 || i.metaKey || i.altKey || i.ctrlKey || i.shiftKey)
        return;
      const c = i.composedPath().find((I) => I instanceof Node && I.nodeName.toUpperCase() === "A");
      if (!c || t && !c.hasAttribute("link"))
        return;
      const f = u(c), p = f ? c.href.baseVal : c.href;
      if ((f ? c.target.baseVal : c.target) || !p && !c.hasAttribute("state"))
        return;
      const F = (c.getAttribute("rel") || "").split(/\s+/);
      if (c.hasAttribute("download") || F && F.includes("external"))
        return;
      const R = f ? new URL(p, document.baseURI) : new URL(p);
      if (!(R.origin !== window.location.origin || s && R.pathname && !R.pathname.toLowerCase().startsWith(s.toLowerCase())))
        return [c, R];
    }
    function m(i) {
      const c = l(i);
      if (!c)
        return;
      const [f, p] = c, U = n.parsePath(p.pathname + p.search + p.hash), F = f.getAttribute("state");
      i.preventDefault(), a(U, { resolve: false, replace: f.hasAttribute("replace"), scroll: !f.hasAttribute("noscroll"), state: F && JSON.parse(F) });
    }
    function w(i) {
      const c = l(i);
      if (!c)
        return;
      const [f, p] = c;
      o[p.pathname] || n.preloadRoute(p, f.getAttribute("preload") !== "false");
    }
    function h(i) {
      const c = l(i);
      if (!c)
        return;
      const [f, p] = c;
      o[p.pathname] || (o[p.pathname] = setTimeout(() => {
        n.preloadRoute(p, f.getAttribute("preload") !== "false"), delete o[p.pathname];
      }, 200));
    }
    function x(i) {
      const c = l(i);
      if (!c)
        return;
      const [, f] = c;
      o[f.pathname] && (clearTimeout(o[f.pathname]), delete o[f.pathname]);
    }
    function v(i) {
      let c = i.submitter && i.submitter.hasAttribute("formaction") ? i.submitter.getAttribute("formaction") : i.target.getAttribute("action");
      if (!c)
        return;
      if (!c.startsWith("https://action/")) {
        const p = new URL(c, fe);
        if (c = n.parsePath(p.pathname + p.search), !c.startsWith(r))
          return;
      }
      if (i.target.method.toUpperCase() !== "POST")
        throw new Error("Only POST forms are supported for Actions");
      const f = it.get(c);
      if (f) {
        i.preventDefault();
        const p = new FormData(i.target);
        i.submitter && i.submitter.name && p.append(i.submitter.name, i.submitter.value), f.call(n, p);
      }
    }
    delegateEvents(["click", "submit"]), document.addEventListener("click", m), e && (document.addEventListener("mouseover", h), document.addEventListener("mouseout", x), document.addEventListener("focusin", w), document.addEventListener("touchstart", w)), document.addEventListener("submit", v), onCleanup(() => {
      document.removeEventListener("click", m), e && (document.removeEventListener("mouseover", h), document.removeEventListener("mouseout", x), document.removeEventListener("focusin", w), document.removeEventListener("touchstart", w)), document.removeEventListener("submit", v);
    });
  };
}
function lt(e) {
  if (isServer)
    return at(e);
  const t = () => ({ value: window.location.pathname + window.location.search + window.location.hash, state: window.history.state }), r = ie();
  return rt({ get: t, set({ value: n, replace: s, scroll: a, state: o }) {
    s ? window.history.replaceState(Ae(o), "", n) : window.history.pushState(o, "", n), nt(window.location.hash.slice(1), a), N$1();
  }, init: (n) => st(window, "popstate", Le(n, (s) => {
    if (s && s < 0)
      return !r.confirm(s);
    {
      const a = t();
      return !r.confirm(a.value, { state: a.state });
    }
  })), create: ct(e.preload, e.explicitLinks, e.actionBase), utils: { go: (n) => window.history.go(n), beforeLeave: r } })(e);
}
var pt = " ";
const ht = { style: (e) => ssrElement("style", e.attrs, () => escape(e.children), true), link: (e) => ssrElement("link", e.attrs, void 0, true), script: (e) => e.attrs.src ? ssrElement("script", mergeProps(() => e.attrs, { get id() {
  return e.key;
} }), () => ssr(pt), true) : null };
function M(e) {
  let { tag: t, attrs: { key: r, ...n } = { key: void 0 }, children: s } = e;
  return ht[t]({ attrs: n, key: r, children: s });
}
function dt(e, t, r, n = "default") {
  return lazy(async () => {
    var _a;
    {
      const a = (await e.import())[n], u = (await ((_a = t.inputs) == null ? void 0 : _a[e.src].assets())).filter((m) => m.tag === "style" || m.attrs.rel === "stylesheet");
      return { default: (m) => [...u.map((w) => M(w)), createComponent$1(a, m)] };
    }
  });
}
const ee = [{ $component: { src: "src/routes/cart.tsx?pick=default&pick=$css", build: () => import('./build/cart2.mjs'), import: () => import('./build/cart2.mjs') }, path: "/cart", filePath: "C:/Users/\u044D\u043B\u044C\u0434\u043E\u0440\u0430\u0434\u043E/OneDrive/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/diplomeproject2 \u2014 \u043A\u043E\u043F\u0438\u044F/src/routes/cart.tsx" }, { $component: { src: "src/routes/catalog.tsx?pick=default&pick=$css", build: () => import('./build/catalog2.mjs'), import: () => import('./build/catalog2.mjs') }, path: "/catalog", filePath: "C:/Users/\u044D\u043B\u044C\u0434\u043E\u0440\u0430\u0434\u043E/OneDrive/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/diplomeproject2 \u2014 \u043A\u043E\u043F\u0438\u044F/src/routes/catalog.tsx" }, { $component: { src: "src/routes/checkout.tsx?pick=default&pick=$css", build: () => import('./build/checkout2.mjs'), import: () => import('./build/checkout2.mjs') }, path: "/checkout", filePath: "C:/Users/\u044D\u043B\u044C\u0434\u043E\u0440\u0430\u0434\u043E/OneDrive/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/diplomeproject2 \u2014 \u043A\u043E\u043F\u0438\u044F/src/routes/checkout.tsx" }, { $component: { src: "src/routes/favorites.tsx?pick=default&pick=$css", build: () => import('./build/favorites2.mjs'), import: () => import('./build/favorites2.mjs') }, path: "/favorites", filePath: "C:/Users/\u044D\u043B\u044C\u0434\u043E\u0440\u0430\u0434\u043E/OneDrive/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/diplomeproject2 \u2014 \u043A\u043E\u043F\u0438\u044F/src/routes/favorites.tsx" }, { $component: { src: "src/routes/index.tsx?pick=default&pick=$css", build: () => import('./build/index2.mjs'), import: () => import('./build/index2.mjs') }, path: "/", filePath: "C:/Users/\u044D\u043B\u044C\u0434\u043E\u0440\u0430\u0434\u043E/OneDrive/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/diplomeproject2 \u2014 \u043A\u043E\u043F\u0438\u044F/src/routes/index.tsx" }, { $component: { src: "src/routes/login.tsx?pick=default&pick=$css", build: () => import('./build/login2.mjs'), import: () => import('./build/login2.mjs') }, path: "/login", filePath: "C:/Users/\u044D\u043B\u044C\u0434\u043E\u0440\u0430\u0434\u043E/OneDrive/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/diplomeproject2 \u2014 \u043A\u043E\u043F\u0438\u044F/src/routes/login.tsx" }, { $component: { src: "src/routes/productinfo.tsx?pick=default&pick=$css", build: () => import('./build/productinfo2.mjs'), import: () => import('./build/productinfo2.mjs') }, path: "/productinfo", filePath: "C:/Users/\u044D\u043B\u044C\u0434\u043E\u0440\u0430\u0434\u043E/OneDrive/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/diplomeproject2 \u2014 \u043A\u043E\u043F\u0438\u044F/src/routes/productinfo.tsx" }, { $component: { src: "src/routes/profile.tsx?pick=default&pick=$css", build: () => import('./build/profile2.mjs'), import: () => import('./build/profile2.mjs') }, path: "/profile", filePath: "C:/Users/\u044D\u043B\u044C\u0434\u043E\u0440\u0430\u0434\u043E/OneDrive/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/diplomeproject2 \u2014 \u043A\u043E\u043F\u0438\u044F/src/routes/profile.tsx" }, { $component: { src: "src/routes/reg.tsx?pick=default&pick=$css", build: () => import('./build/reg2.mjs'), import: () => import('./build/reg2.mjs') }, path: "/reg", filePath: "C:/Users/\u044D\u043B\u044C\u0434\u043E\u0440\u0430\u0434\u043E/OneDrive/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/diplomeproject2 \u2014 \u043A\u043E\u043F\u0438\u044F/src/routes/reg.tsx" }, { $component: { src: "src/routes/thank.tsx?pick=default&pick=$css", build: () => import('./build/thank2.mjs'), import: () => import('./build/thank2.mjs') }, path: "/thank", filePath: "C:/Users/\u044D\u043B\u044C\u0434\u043E\u0440\u0430\u0434\u043E/OneDrive/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/diplomeproject2 \u2014 \u043A\u043E\u043F\u0438\u044F/src/routes/thank.tsx" }, { $component: { src: "src/routes/[...404].tsx?pick=default&pick=$css", build: () => import('./build/_...404_2.mjs'), import: () => import('./build/_...404_2.mjs') }, path: "/*404", filePath: "C:/Users/\u044D\u043B\u044C\u0434\u043E\u0440\u0430\u0434\u043E/OneDrive/\u0420\u0430\u0431\u043E\u0447\u0438\u0439 \u0441\u0442\u043E\u043B/diplomeproject2 \u2014 \u043A\u043E\u043F\u0438\u044F/src/routes/[...404].tsx" }], ft = mt(ee.filter((e) => e.$component));
function mt(e) {
  function t(r, n, s, a) {
    const o = Object.values(r).find((u) => s.startsWith(u.id + "/"));
    return o ? (t(o.children || (o.children = []), n, s.slice(o.id.length)), r) : (r.push({ ...n, id: s, path: s.replace(/\/\([^)/]+\)/g, "") }), r);
  }
  return e.sort((r, n) => r.path.length - n.path.length).reduce((r, n) => t(r, n, n.path, n.path), []);
}
function gt(e, t) {
  const r = Ct.lookup(e);
  if (r) {
    const n = r.route[`$${t}`];
    return n === void 0 ? void 0 : { handler: n, params: r.params };
  }
}
function wt(e) {
  return e.$GET || e.$POST || e.$PUT || e.$PATCH || e.$DELETE;
}
const Ct = createRouter$1({ routes: ee.reduce((e, t) => {
  if (!wt(t))
    return e;
  let r = t.path.replace(/\(.*\)\/?/g, "").replace(/\*([^/]*)/g, (n, s) => `**:${s}`);
  if (/:[^/]*\?/g.test(r))
    throw new Error(`Optional parameters are not supported in API routes: ${r}`);
  if (e[r])
    throw new Error(`Duplicate API routes for "${r}" found at "${e[r].route.path}" and "${t.path}"`);
  return e[r] = { route: t }, e;
}, {}) });
function te() {
  function e(r) {
    return { ...r, ...r.$$route ? r.$$route.require().route : void 0, info: { ...r.$$route ? r.$$route.require().route.info : {}, filesystem: true }, component: dt(r.$component, globalThis.MANIFEST.client, globalThis.MANIFEST.ssr), children: r.children ? r.children.map(e) : void 0 };
  }
  return ft.map(e);
}
let N;
const vt = isServer ? () => getRequestEvent().routes : () => N || (N = te()), xt = isServer ? (e) => {
  const t = getRequestEvent();
  return t.response.status = e.code, t.response.statusText = e.text, onCleanup(() => !t.nativeEvent.handled && (t.response.status = 200)), null;
} : (e) => null, yt = "/_build/assets/logo-HaIiWWCp.svg", kt = "data:image/svg+xml,%3csvg%20width='40.000000'%20height='40.000000'%20viewBox='0%200%2044%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdesc%3e%20Created%20with%20Pixso.%20%3c/desc%3e%3cdefs%3e%3cclipPath%20id='clip11_955'%3e%3crect%20id='cart'%20rx='5.000000'%20width='43.000000'%20height='43.000000'%20transform='translate(0.500000%200.500000)'%20fill='white'%20fill-opacity='0'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20clip-path='url(%23clip11_955)'%3e%3cpath%20id='Vector'%20d='M18.8421%2031.9999C18.8421%2033.1044%2017.9938%2033.9999%2016.9473%2033.9999C15.9009%2033.9999%2015.0526%2033.1044%2015.0526%2031.9999C15.0526%2030.8954%2015.9009%2029.9999%2016.9473%2029.9999C17.9938%2029.9999%2018.8421%2030.8954%2018.8421%2031.9999Z'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='2.000000'/%3e%3cpath%20id='Vector'%20d='M30.2106%2032C30.2106%2033.1046%2029.3623%2034%2028.3159%2034C27.2695%2034%2026.4211%2033.1046%2026.4211%2032C26.4211%2030.8954%2027.2695%2030%2028.3159%2030C29.3623%2030%2030.2106%2030.8954%2030.2106%2032Z'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='2.000000'/%3e%3cpath%20id='Vector'%20d='M10%2010L10.33%2010.1225C11.9741%2010.7326%2012.7961%2011.0377%2013.2663%2011.764C13.7365%2012.4903%2013.7365%2013.455%2013.7365%2015.3845L13.7365%2019.0133C13.7365%2022.9354%2013.8164%2024.2297%2014.9108%2025.4482C16.0052%2026.6666%2017.7666%2026.6666%2021.2895%2026.6666L22.6316%2026.6666M27.9879%2026.6666C29.9597%2026.6666%2030.9456%2026.6666%2031.6425%2026.0671C32.3394%2025.4677%2032.5384%2024.4485%2032.9365%2022.4099L33.5677%2019.1769C34.0062%2016.8582%2034.2253%2015.6989%2033.6647%2014.9294C33.1039%2014.16%2031.188%2014.16%2029.0596%2014.16L21.3981%2014.16M13.7365%2014.16L16.3158%2014.16'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='2.500000'/%3e%3c/g%3e%3crect%20id='cart'%20rx='5.000000'%20width='43.000000'%20height='43.000000'%20transform='translate(0.500000%200.500000)'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='1.000000'/%3e%3c/svg%3e", bt = "data:image/svg+xml,%3csvg%20width='40.000000'%20height='40.000000'%20viewBox='0%200%2044%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdesc%3e%20Created%20with%20Pixso.%20%3c/desc%3e%3cdefs%3e%3cclipPath%20id='clip11_958'%3e%3crect%20id='favourites'%20rx='5.000000'%20width='43.000000'%20height='43.000000'%20transform='translate(0.500000%200.500000)'%20fill='white'%20fill-opacity='0'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20clip-path='url(%23clip11_958)'%3e%3cpath%20id='Vector'%20d='M12.5856%2011.7192C9.57959%2014.6052%209.15637%2019.4305%2011.517%2022.8438C13.4798%2025.6817%2019.4197%2031.6672%2021.3665%2033.6045C21.5843%2033.8213%2021.6932%2033.9296%2021.8203%2033.9722C21.9311%2034.0093%2022.0524%2034.0093%2022.1633%2033.9722C22.2904%2033.9296%2022.3992%2033.8213%2022.6171%2033.6045C24.5639%2031.6672%2030.5038%2025.6817%2032.4666%2022.8438C34.8272%2019.4305%2034.4556%2014.5748%2031.3979%2011.7192C28.3401%208.86347%2024.3992%209.80713%2022%2012.9589C19.6008%209.80713%2015.5917%208.83311%2012.5856%2011.7192Z'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='2.500000'%20stroke-linejoin='round'/%3e%3c/g%3e%3crect%20id='favourites'%20rx='5.000000'%20width='43.000000'%20height='43.000000'%20transform='translate(0.500000%200.500000)'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='1.000000'/%3e%3c/svg%3e", Ft = "data:image/svg+xml,%3csvg%20width='40.000000'%20height='40.000000'%20viewBox='0%200%2044%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdesc%3e%20Created%20with%20Pixso.%20%3c/desc%3e%3cdefs%3e%3cclipPath%20id='clip11_962'%3e%3crect%20id='account'%20rx='5.000000'%20width='43.000000'%20height='43.000000'%20transform='translate(0.500000%200.500000)'%20fill='white'%20fill-opacity='0'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20clip-path='url(%23clip11_962)'%3e%3cpath%20id='Vector'%20d='M21.9999%2022.5132C18.3832%2022.5132%2015.4513%2019.712%2015.4513%2016.2566C15.4513%2012.8012%2018.3832%2010%2021.9999%2010C25.6165%2010%2028.5485%2012.8012%2028.5485%2016.2566C28.5485%2019.712%2025.6165%2022.5132%2021.9999%2022.5132Z'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='2.500000'/%3e%3cpath%20id='Vector'%20d='M10%2033.9782L10.4229%2031.7398C10.9224%2029.1547%2012.354%2026.8185%2014.4689%2025.1369C16.5839%2023.4554%2019.2485%2022.5348%2022%2022.5351C24.7548%2022.5357%2027.422%2023.4594%2029.5374%2025.1453C31.6528%2026.8312%2033.0823%2029.1726%2033.5771%2031.7617L34%2034.0001'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='2.500000'/%3e%3c/g%3e%3crect%20id='account'%20rx='5.000000'%20width='43.000000'%20height='43.000000'%20transform='translate(0.500000%200.500000)'%20stroke='%23FFFFFF'%20stroke-opacity='1.000000'%20stroke-width='1.000000'/%3e%3c/svg%3e";
var Lt = ["<header", ' class="bg-orange py-3"><div class="container mx-auto max-w-[1200px] pl-[16px] pr-[16px]"><div class="flex justify-between items-center"><div class="flex items-center gap-16"><a href="/"><img', ' alt="Logo"></a><nav class="hidden sm:block"><ul class="flex items-center space-x-10"><li><a href="/catalog" class="text-white hover:text-hover-header duration-150 font-semibold font-montserrat text-base font-bold leading-5">\u041A\u0430\u0442\u0430\u043B\u043E\u0433</a></li><li><p class="', '">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B<svg class="h-4 w-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg><!--$-->', '<!--/--></p></li></ul></nav></div><div class="flex items-center space-x-2"><a href="/cart" class="text-gray-200 hover:text-white"><img', ' alt="cart"></a><a href="/favorites" class="text-gray-200 hover:text-white"><img', ' alt="favourites"></a><a href="/login" class="text-gray-200 hover:text-white"><img', ' alt="cart"></a></div></div></div></header>'], B = ["<ul", ' class="absolute w-[230px] shadow-lg top-full right-0 bg-white py-[30px] px-[20px] mt-3 rounded-[10px] cursor-auto z-50"><li class="flex gap-4 items-center pb-[10px]"><svg width="17.001221" height="18.254242" viewBox="0 0 17.0012 18.2542" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Vector" d="M5.12451 12.785C7.07727 14.9009 9.51904 16.4092 12.1942 17.1521C14.2524 17.7198 16.0012 15.8021 16.0012 13.5L16.0012 12.4583C16.0012 11.8833 15.5696 11.4219 15.0417 11.3646C14.1664 11.2711 13.3071 11.0471 12.4884 10.699L11.0271 12.2823C8.64771 11.0465 6.72913 8.96762 5.5885 6.38958L7.0498 4.80625C6.72815 3.91911 6.52112 2.9881 6.43457 2.03958C6.38269 1.46667 5.95679 1 5.42603 1L4.46472 1C2.34009 1 0.57019 2.89479 1.09412 5.125C1.77979 8.02357 3.17175 10.6692 5.12451 12.785Z" stroke="#FF6006" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"></path></svg><a href="tel:+79615259191" class="text-black font-medium text-ms hover:text-orange duration-150">+7 961-525-91-91</a></li><li class="flex gap-4 items-center pb-[10px]"><svg width="18.000000" height="15.000000" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><desc>Created with Pixso.</desc><defs></defs><path id="Vector" d="M18 1.875C18 0.84375 17.1899 0 16.2 0L1.80005 0C0.810059 0 0 0.84375 0 1.875L0 13.125C0 14.1562 0.810059 15 1.80005 15L16.2 15C17.1899 15 18 14.1562 18 13.125L18 1.875ZM16.2 1.875L9 6.5625L1.80005 1.875L16.2 1.875ZM16.2 13.125L1.80005 13.125L1.80005 3.75L9 8.4375L16.2 3.75L16.2 13.125Z" fill="#FF5F04" fill-opacity="1.000000" fill-rule="nonzero"></path></svg><a href="mailto:zooxpress@mail.ru" class="text-black font-medium text-ms hover:text-orange duration-150">Zooxpress@mail.ru</a></li><li class="flex gap-4 items-center pb-[10px]"><svg width="20.833374" height="20.833328" viewBox="0 0 20.8334 20.8333" fill="none" xmlns="http://www.w3.org/2000/svg"><desc>Created with Pixso.</desc><defs></defs><path id="Vector" d="M10.4166 0C16.1698 0 20.8334 4.66354 20.8334 10.4167C20.8334 16.1698 16.1698 20.8333 10.4166 20.8333C4.66357 20.8333 0 16.1698 0 10.4167C0 4.66354 4.66357 0 10.4166 0ZM10.4166 2.08333C8.20654 2.08333 6.08691 2.9613 4.52417 4.52411C2.9613 6.08691 2.08337 8.20653 2.08337 10.4167C2.08337 12.6268 2.9613 14.7464 4.52417 16.3092C6.08691 17.872 8.20654 18.75 10.4166 18.75C12.6268 18.75 14.7465 17.872 16.3092 16.3092C17.8721 14.7464 18.75 12.6268 18.75 10.4167C18.75 8.20653 17.8721 6.08691 16.3092 4.52411C14.7465 2.9613 12.6268 2.08333 10.4166 2.08333ZM10.4166 4.16667C10.6718 4.1667 10.9181 4.26038 11.1088 4.42992C11.2994 4.59946 11.4211 4.83307 11.451 5.08646L11.4584 5.20833L11.4584 9.98541L14.2781 12.8052C14.465 12.9927 14.5734 13.2442 14.5815 13.5087C14.5896 13.7733 14.4967 14.0309 14.3217 14.2295C14.1466 14.428 13.9026 14.5524 13.639 14.5775C13.3756 14.6026 13.1125 14.5265 12.9031 14.3646L12.8052 14.2781L9.68018 11.1531C9.51831 10.9911 9.41431 10.7802 9.3844 10.5531L9.375 10.4167L9.375 5.20833C9.375 4.93207 9.48474 4.66711 9.68005 4.47177C9.87549 4.27641 10.1404 4.16667 10.4166 4.16667Z" fill="#FF5F04" fill-opacity="1.000000" fill-rule="nonzero"></path></svg><p class="text-black font-medium text-ms">\u0413\u0440\u0430\u0444\u0438\u043A \u0440\u0430\u0431\u043E\u0442\u044B: <br>\u041F\u043D-\u0421\u0431 9:00-18:00</p></li><li class="flex gap-4 items-center pb-[10px]"><svg width="16.000000" height="21.333328" viewBox="0 0 16 21.3333" fill="none" xmlns="http://www.w3.org/2000/svg"><desc>Created with Pixso.</desc><defs></defs><path id="Vector" d="M13.5547 11.92C12.856 13.336 11.9093 14.7467 10.9413 16.0133C10.0221 17.2067 9.04028 18.3505 8 19.44C6.95972 18.3505 5.97791 17.2067 5.05872 16.0133C4.0907 14.7467 3.14404 13.336 2.44531 11.92C1.73865 10.4893 1.33337 9.14934 1.33337 7.99998C1.33337 6.23189 2.03577 4.53621 3.28601 3.28596C4.53625 2.03571 6.23193 1.33333 8 1.33333C9.76807 1.33333 11.4637 2.03571 12.714 3.28596C13.9642 4.53621 14.6666 6.23189 14.6666 7.99998C14.6666 9.14934 14.26 10.4893 13.5547 11.92ZM8 21.3333C8 21.3333 16 13.752 16 7.99998C16 5.87828 15.1571 3.84343 13.6569 2.34314C12.1566 0.84285 10.1217 0 8 0C5.8783 0 3.84338 0.84285 2.34314 2.34314C0.842896 3.84343 0 5.87828 0 7.99998C0 13.752 8 21.3333 8 21.3333Z" fill="#FF5F04" fill-opacity="1.000000" fill-rule="nonzero"></path><path id="Vector" d="M8 10.6666C7.29272 10.6666 6.6145 10.3857 6.11438 9.8856C5.61426 9.38551 5.33337 8.70723 5.33337 7.99998C5.33337 7.29274 5.61426 6.61446 6.11438 6.11436C6.6145 5.61427 7.29272 5.33333 8 5.33333C8.70728 5.33333 9.3855 5.61427 9.88562 6.11436C10.3857 6.61446 10.6666 7.29274 10.6666 7.99998C10.6666 8.70723 10.3857 9.38551 9.88562 9.8856C9.3855 10.3857 8.70728 10.6666 8 10.6666ZM8 12C9.06091 12 10.0782 11.5786 10.8284 10.8284C11.5786 10.0783 12 9.06084 12 7.99998C12 6.93913 11.5786 5.92171 10.8284 5.17155C10.0782 4.4214 9.06091 3.99998 8 3.99998C6.93909 3.99998 5.92175 4.4214 5.17163 5.17155C4.42139 5.92171 4 6.93913 4 7.99998C4 9.06084 4.42139 10.0783 5.17163 10.8284C5.92175 11.5786 6.93909 12 8 12Z" fill="#FF5F04" fill-opacity="1.000000" fill-rule="nonzero"></path></svg><p class="text-black font-medium text-ms">\u0433. \u0421\u0430\u043C\u0430\u0440\u0430, <br>\u041B\u0435\u043D\u0438\u043D\u0433\u0440\u0430\u0434\u0441\u043A\u0430\u044F 114</p></li><div class="flex gap-[10px] mt-[40px]"><a href=""><svg width="35.000000" height="35.000000" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><desc>Created with Pixso.</desc><defs><clipPath id="clip404_2018"><rect id="Frame 4" rx="9.500000" width="34.000000" height="34.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"></rect></clipPath></defs><g clip-path="url(#clip404_2018)"><path id="Vector" d="M18.8206 20.1487C21.1077 20.4974 21.8308 22.2974 23.2872 23.5538L27 23.5538C26.0718 21.4815 24.6868 19.646 22.9487 18.1846C24.2821 16.3487 25.6974 14.6205 26.3898 12L23.0154 12C21.6923 14.0051 20.9949 16.3539 18.8206 17.9026L18.8206 12L13.9231 12L15.0923 13.4462L15.0923 18.6C13.1948 18.3795 11.9128 14.9077 10.5231 12L7 12C8.2821 15.9282 10.9795 24.5487 18.8206 23.5538L18.8206 20.1487Z" stroke="#FF6006" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"></path></g><rect id="Frame 4" rx="9.500000" width="34.000000" height="34.000000" transform="translate(0.500000 0.500000)" stroke="#FF6006" stroke-opacity="1.000000" stroke-width="1.000000"></rect></svg></a><a href=""><svg width="35.000000" height="35.000000" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"><desc>Created with Pixso.</desc><defs><clipPath id="clip404_2015"><rect id="Frame 34" rx="9.500000" width="34.000000" height="34.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"></rect></clipPath></defs><g clip-path="url(#clip404_2015)"><path id="Vector" d="M25.9419 10.5665L23.3777 24.9721C23.1985 25.9964 22.6792 26.2429 21.9624 25.7664L15.8459 20.3821C15.8223 20.3618 15.803 20.3351 15.7896 20.3041C15.7762 20.2731 15.7693 20.2389 15.7693 20.204C15.7693 20.1693 15.7762 20.1349 15.7896 20.104C15.803 20.0731 15.8223 20.0463 15.8459 20.026L22.9091 12.4234C23.2307 12.0838 22.8401 11.9195 22.4174 12.2262L13.5529 18.8922C13.526 18.9131 13.4955 18.9264 13.4636 18.9312C13.4318 18.9359 13.3994 18.932 13.3691 18.9196L9.60547 17.5009C8.76917 17.2106 8.76917 16.526 9.79395 16.0385L24.8528 9.11502C24.9723 9.04672 25.1019 9.00763 25.2343 9C25.7581 9 26.1533 9.54773 25.9419 10.5665Z" stroke="#FF6006" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"></path></g><rect id="Frame 34" rx="9.500000" width="34.000000" height="34.000000" transform="translate(0.500000 0.500000)" stroke="#FF6006" stroke-opacity="1.000000" stroke-width="1.000000"></rect></svg></a></div></ul>'];
function $t() {
  _e();
  const [e, t] = createSignal(false);
  return ssr(Lt, ssrHydrationKey(), ssrAttribute("src", escape(yt, true), false), "text-white cursor-pointer relative font-semibold hover:text-hover-header duration-150", e() && B[0] + ssrHydrationKey() + B[1], ssrAttribute("src", escape(kt, true), false), ssrAttribute("src", escape(bt, true), false), ssrAttribute("src", escape(Ft, true), false));
}
function Rt() {
  return createComponent(lt, { root: (e) => [createComponent($t, {}), createComponent(Suspense, { get children() {
    return e.children;
  } })], get children() {
    return createComponent(vt, {});
  } });
}
var St = ["<span", ' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">', "</span>"];
const Et = (e) => {
  const t = isServer ? "500 | Internal Server Error" : "Error | Uncaught Client Exception";
  return createComponent(ErrorBoundary, { get fallback() {
    return [ssr(St, ssrHydrationKey(), escape(t)), createComponent(xt, { code: 500 })];
  }, get children() {
    return e.children;
  } });
};
var D = ["<script", ">", "<\/script>"], Pt = ["<script", ' type="module"', " async", "><\/script>"], At = ["<script", ' type="module" async', "><\/script>"];
const Tt = ssr("<!DOCTYPE html>");
function re(e, t, r = []) {
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    if (s.path !== e[0].path)
      continue;
    let a = [...r, s];
    if (s.children) {
      const o = e.slice(1);
      if (o.length === 0 || (a = re(o, s.children, a), !a))
        continue;
    }
    return a;
  }
}
function Ot(e) {
  const t = getRequestEvent(), r = t.nonce;
  let n = [];
  return Promise.resolve().then(async () => {
    if (t.router && t.router.matches) {
      const s = [...t.router.matches];
      for (; s.length && (!s[0].info || !s[0].info.filesystem); )
        s.shift();
      const a = s.length && re(s, t.routes);
      if (a)
        for (let o = 0; o < a.length; o++) {
          const u = a[o], m = await globalThis.MANIFEST.client.inputs[u.$component.src].assets();
          n.push.apply(n, m);
        }
      else
        console.warn("No route matched for preloading js assets");
    }
    n = [...new Map(n.map((s) => [s.attrs.key, s])).values()].filter((s) => s.attrs.rel === "modulepreload" && !t.assets.find((a) => a.attrs.key === s.attrs.key));
  }), useAssets(() => n.length ? n.map((s) => M(s)) : void 0), createComponent(NoHydration, { get children() {
    return [Tt, createComponent(e.document, { get assets() {
      return [createComponent(HydrationScript, {}), t.assets.map((s) => M(s))];
    }, get scripts() {
      return r ? [ssr(D, ssrHydrationKey() + ssrAttribute("nonce", escape(r, true), false), `window.manifest = ${JSON.stringify(t.manifest)}`), ssr(Pt, ssrHydrationKey(), ssrAttribute("nonce", escape(r, true), false), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))] : [ssr(D, ssrHydrationKey(), `window.manifest = ${JSON.stringify(t.manifest)}`), ssr(At, ssrHydrationKey(), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))];
    }, get children() {
      return createComponent(Hydration, { get children() {
        return createComponent(Et, { get children() {
          return createComponent(Rt, {});
        } });
      } });
    } })];
  } });
}
function Ht(e) {
  let t;
  const r = se(e), n = { duplex: "half", method: e.method, headers: e.headers };
  return e.node.req.body instanceof ArrayBuffer ? new Request(r, { ...n, body: e.node.req.body }) : new Request(r, { ...n, get body() {
    return t || (t = Vt(e), t);
  } });
}
function Mt(e) {
  var _a;
  return (_a = e.web) != null ? _a : e.web = { request: Ht(e), url: se(e) }, e.web.request;
}
function qt() {
  return Jt();
}
const _ = Symbol("$HTTPEvent");
function jt(e) {
  return typeof e == "object" && (e instanceof H3Event || (e == null ? void 0 : e[_]) instanceof H3Event || (e == null ? void 0 : e.__is_event__) === true);
}
function g(e) {
  return function(...t) {
    var _a;
    let r = t[0];
    if (jt(r))
      t[0] = r instanceof H3Event || r.__is_event__ ? r : r[_];
    else {
      if (!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext))
        throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
      if (r = qt(), !r)
        throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
      t.unshift(r);
    }
    return e(...t);
  };
}
const se = g(getRequestURL), _t = g(getRequestIP), q = g(setResponseStatus), Z = g(getResponseStatus), Ut = g(getResponseStatusText), S = g(getResponseHeaders), V = g(getResponseHeader), It = g(setResponseHeader), Nt = g(appendResponseHeader), W = g(sendRedirect), Bt = g(getCookie), Dt = g(setCookie), Zt = g(setHeader), Vt = g(getRequestWebStream), Wt = g(removeResponseHeader), zt = g(Mt);
function Kt() {
  var _a;
  return getContext("nitro-app", { asyncContext: !!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext), AsyncLocalStorage: AsyncLocalStorage });
}
function Jt() {
  return Kt().use().event;
}
const A = Symbol("fetchEvent");
function Gt(e) {
  return { request: zt(e), response: Xt(e), clientAddress: _t(e), locals: {}, nativeEvent: e, [_]: e };
}
function Yt(e) {
  if (!e[A]) {
    const t = Gt(e);
    e[A] = t;
  }
  return e[A];
}
class Qt {
  constructor(t) {
    this.event = t;
  }
  get(t) {
    const r = V(this.event, t);
    return Array.isArray(r) ? r.join(", ") : r;
  }
  has(t) {
    return this.get(t) !== void 0;
  }
  set(t, r) {
    return It(this.event, t, r);
  }
  delete(t) {
    return Wt(this.event, t);
  }
  append(t, r) {
    Nt(this.event, t, r);
  }
  getSetCookie() {
    const t = V(this.event, "Set-Cookie");
    return Array.isArray(t) ? t : [t];
  }
  forEach(t) {
    return Object.entries(S(this.event)).forEach(([r, n]) => t(Array.isArray(n) ? n.join(", ") : n, r, this));
  }
  entries() {
    return Object.entries(S(this.event)).map(([t, r]) => [t, Array.isArray(r) ? r.join(", ") : r])[Symbol.iterator]();
  }
  keys() {
    return Object.keys(S(this.event))[Symbol.iterator]();
  }
  values() {
    return Object.values(S(this.event)).map((t) => Array.isArray(t) ? t.join(", ") : t)[Symbol.iterator]();
  }
  [Symbol.iterator]() {
    return this.entries()[Symbol.iterator]();
  }
}
function Xt(e) {
  return { get status() {
    return Z(e);
  }, set status(t) {
    q(e, t);
  }, get statusText() {
    return Ut(e);
  }, set statusText(t) {
    q(e, Z(), t);
  }, headers: new Qt(e) };
}
function e0(e) {
  const t = Bt(e, "flash");
  if (!t)
    return;
  let r = JSON.parse(t);
  if (!r || !r.result)
    return;
  const n = [...r.input.slice(0, -1), new Map(r.input[r.input.length - 1])];
  return Dt(e, "flash", "", { maxAge: 0 }), { input: n, url: r.url, pending: false, result: r.error ? new Error(r.result) : r.result };
}
async function t0(e) {
  const t = globalThis.MANIFEST.client;
  return globalThis.MANIFEST.ssr, e.response.headers.set("Content-Type", "text/html"), Object.assign(e, { manifest: await t.json(), assets: [...await t.inputs[t.handler].assets()], router: { submission: e0(e) }, routes: te(), $islands: /* @__PURE__ */ new Set() });
}
function r0(e, t, r = {}) {
  return eventHandler({ handler: (n) => {
    const s = Yt(n);
    return provideRequestEvent(s, async () => {
      const a = gt(new URL(s.request.url).pathname, s.request.method);
      if (a) {
        const v = (await a.handler.import())[s.request.method];
        s.params = a.params || {}, sharedConfig.context = { event: s };
        const i = await v(s);
        if (i !== void 0)
          return i;
        if (s.request.method !== "GET")
          throw new Error(`API handler for ${s.request.method} "${s.request.url}" did not return a response.`);
      }
      const o = await t(s);
      typeof r == "function" && (r = await r(o));
      const u = r.mode || "stream";
      if (r.nonce && (o.nonce = r.nonce), u === "sync") {
        const x = renderToString(() => (sharedConfig.context.event = o, e(o)), r);
        return o.response && o.response.headers.get("Location") ? W(s, o.response.headers.get("Location")) : x;
      }
      let l = { ...r };
      if (l.onCompleteAll) {
        const x = l.onCompleteAll;
        l.onCompleteAll = (v) => {
          K(o)(v), x(v);
        };
      } else
        l.onCompleteAll = K(o);
      if (l.onCompleteShell) {
        const x = l.onCompleteShell;
        l.onCompleteShell = (v) => {
          z(o, n)(), x(v);
        };
      } else
        l.onCompleteShell = z(o, n);
      const m = renderToStream(() => (sharedConfig.context.event = o, e(o)), l);
      if (o.response && o.response.headers.get("Location"))
        return W(s, o.response.headers.get("Location"));
      if (u === "async")
        return m;
      const { writable: w, readable: h } = new TransformStream();
      return m.pipeTo(w), h;
    });
  } });
}
function z(e, t) {
  return () => {
    e.response && e.response.headers.get("Location") && (q(t, 302), Zt(t, "Location", e.response.headers.get("Location")));
  };
}
function K(e) {
  return ({ write: t }) => {
    const r = e.response && e.response.headers.get("Location");
    r && t(`<script>window.location="${r}"<\/script>`);
  };
}
function s0(e, t) {
  return r0(e, t0, t);
}
var n0 = ['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="/favicon.ico"><title>ZooExpress</title>', "</head>"], o0 = ["<html", ' lang="en">', '<body><div id="app">', "</div><!--$-->", "<!--/--></body></html>"];
const f0 = s0(() => createComponent(Ot, { document: ({ assets: e, children: t, scripts: r }) => ssr(o0, ssrHydrationKey(), createComponent(NoHydration, { get children() {
  return ssr(n0, escape(e));
} }), escape(t), escape(r)) }));

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/_server', handler: rn, lazy: false, middleware: true, method: undefined },
  { route: '/', handler: f0, lazy: false, middleware: true, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  {
    const _handler = h3App.handler;
    h3App.handler = (event) => {
      const ctx = { event };
      return nitroAsyncContext.callAsync(ctx, () => _handler(event));
    };
  }
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const debug = (...args) => {
};
function GracefulShutdown(server, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: (signal) => Promise.resolve(signal),
      preShutdown: (signal) => Promise.resolve(signal)
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once = onceFactory();
  once(process, signals, (signal) => {
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((err) => {
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof http__default$1.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  function destroyAllConnections(force = false) {
    for (const key of Object.keys(connections)) {
      const socket = connections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        destroy(socket);
      }
    }
    for (const key of Object.keys(secureConnections)) {
      const socket = secureConnections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        destroy(socket);
      }
    }
  }
  server.on("request", function(req, res) {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", function() {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server.on("connection", function(socket) {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", function() {
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(true);
        });
      });
    }
    if (options.development) {
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          options.finally();
        }
      }
      return Promise.resolve();
    }
    function waitForReadyToShutDown(totalNumInterval) {
      if (totalNumInterval === 0) {
        debug(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        return Promise.resolve(false);
      }
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    if (isShuttingDown) {
      return Promise.resolve();
    }
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((err) => {
      const errString = typeof err === "string" ? err : JSON.stringify(err);
      failed = true;
      throw errString;
    });
  }
  function shutdownManual() {
    return shutdown("manual");
  }
  return shutdownManual;
}

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const path = process.env.NITRO_UNIX_SOCKET;
const listener = server.listen(path ? { path } : { port, host }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  if (typeof addressInfo === "string") {
    console.log(`Listening on unix socket ${addressInfo}`);
    return;
  }
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening on ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { Be as B, O$1 as O, S$1 as S, _e as _, Oe as a, nodeServer as b, en as e, node$1 as n, tn as t, wr as w };
//# sourceMappingURL=runtime.mjs.map
