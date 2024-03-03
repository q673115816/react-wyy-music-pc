import{r as ct}from"./react-dom.d348259d.js";import{r as C}from"./react.0a2f695e.js";import{j as ft}from"./qrcode.react.84002e4a.js";import{N as st,t as ze,n as ke,r as lt}from"./immer.76e704b2.js";var Ue={exports:{}},Be={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D=C.exports;function dt(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:dt,vt=D.useState,yt=D.useEffect,ht=D.useLayoutEffect,mt=D.useDebugValue;function gt(e,t){var r=t(),n=vt({inst:{value:r,getSnapshot:t}}),o=n[0].inst,u=n[1];return ht(function(){o.value=r,o.getSnapshot=t,pe(o)&&u({inst:o})},[e,r,t]),yt(function(){return pe(o)&&u({inst:o}),e(function(){pe(o)&&u({inst:o})})},[e]),mt(r),r}function pe(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!pt(e,r)}catch(n){return!0}}function bt(e,t){return t()}var St=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?bt:gt;Be.useSyncExternalStore=D.useSyncExternalStore!==void 0?D.useSyncExternalStore:St;(function(e){e.exports=Be})(Ue);var Ke={exports:{}},Ge={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k=C.exports,wt=Ue.exports;function Ot(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Et=typeof Object.is=="function"?Object.is:Ot,xt=wt.useSyncExternalStore,$t=k.useRef,Pt=k.useEffect,jt=k.useMemo,Ct=k.useDebugValue;Ge.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var u=$t(null);if(u.current===null){var f={hasValue:!1,value:null};u.current=f}else f=u.current;u=jt(function(){function c(p){if(!i){if(i=!0,s=p,p=n(p),o!==void 0&&f.hasValue){var v=f.value;if(o(v,p))return l=v}return l=p}if(v=l,Et(s,p))return v;var y=n(p);return o!==void 0&&o(v,y)?v:(s=p,l=y)}var i=!1,s,l,d=r===void 0?null:r;return[function(){return c(t())},d===null?void 0:function(){return c(d())}]},[t,r,n,o]);var a=xt(e,u[0],u[1]);return Pt(function(){f.hasValue=!0,f.value=a},[a]),Ct(a),a};(function(e){e.exports=Ge})(Ke);function Rt(e){e()}let He=Rt;const At=e=>He=e,Tt=()=>He,I=C.exports.createContext(null);function Xe(){return C.exports.useContext(I)}const Mt=()=>{throw new Error("uSES not initialized!")};let Ye=Mt;const _t=e=>{Ye=e},It=(e,t)=>e===t;function Nt(e=I){const t=e===I?Xe:()=>C.exports.useContext(e);return function(n,o=It){const{store:u,subscription:f,getServerState:a}=t(),c=Ye(f.addNestedSub,u.getState,a||u.getState,n,o);return C.exports.useDebugValue(c),c}}const Xr=Nt();var Je={exports:{}},h={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w=typeof Symbol=="function"&&Symbol.for,be=w?Symbol.for("react.element"):60103,Se=w?Symbol.for("react.portal"):60106,U=w?Symbol.for("react.fragment"):60107,B=w?Symbol.for("react.strict_mode"):60108,K=w?Symbol.for("react.profiler"):60114,G=w?Symbol.for("react.provider"):60109,H=w?Symbol.for("react.context"):60110,we=w?Symbol.for("react.async_mode"):60111,X=w?Symbol.for("react.concurrent_mode"):60111,Y=w?Symbol.for("react.forward_ref"):60112,J=w?Symbol.for("react.suspense"):60113,Dt=w?Symbol.for("react.suspense_list"):60120,Q=w?Symbol.for("react.memo"):60115,Z=w?Symbol.for("react.lazy"):60116,qt=w?Symbol.for("react.block"):60121,Lt=w?Symbol.for("react.fundamental"):60117,Vt=w?Symbol.for("react.responder"):60118,Wt=w?Symbol.for("react.scope"):60119;function x(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case be:switch(e=e.type,e){case we:case X:case U:case K:case B:case J:return e;default:switch(e=e&&e.$$typeof,e){case H:case Y:case Z:case Q:case G:return e;default:return t}}case Se:return t}}}function Qe(e){return x(e)===X}h.AsyncMode=we;h.ConcurrentMode=X;h.ContextConsumer=H;h.ContextProvider=G;h.Element=be;h.ForwardRef=Y;h.Fragment=U;h.Lazy=Z;h.Memo=Q;h.Portal=Se;h.Profiler=K;h.StrictMode=B;h.Suspense=J;h.isAsyncMode=function(e){return Qe(e)||x(e)===we};h.isConcurrentMode=Qe;h.isContextConsumer=function(e){return x(e)===H};h.isContextProvider=function(e){return x(e)===G};h.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===be};h.isForwardRef=function(e){return x(e)===Y};h.isFragment=function(e){return x(e)===U};h.isLazy=function(e){return x(e)===Z};h.isMemo=function(e){return x(e)===Q};h.isPortal=function(e){return x(e)===Se};h.isProfiler=function(e){return x(e)===K};h.isStrictMode=function(e){return x(e)===B};h.isSuspense=function(e){return x(e)===J};h.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===U||e===X||e===K||e===B||e===J||e===Dt||typeof e=="object"&&e!==null&&(e.$$typeof===Z||e.$$typeof===Q||e.$$typeof===G||e.$$typeof===H||e.$$typeof===Y||e.$$typeof===Lt||e.$$typeof===Vt||e.$$typeof===Wt||e.$$typeof===qt)};h.typeOf=x;(function(e){e.exports=h})(Je);var Oe=Je.exports,Ft={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},zt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},kt={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ze={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ee={};Ee[Oe.ForwardRef]=kt;Ee[Oe.Memo]=Ze;function Ce(e){return Oe.isMemo(e)?Ze:Ee[e.$$typeof]||Ft}var Ut=Object.defineProperty,Bt=Object.getOwnPropertyNames,Re=Object.getOwnPropertySymbols,Kt=Object.getOwnPropertyDescriptor,Gt=Object.getPrototypeOf,Ae=Object.prototype;function et(e,t,r){if(typeof t!="string"){if(Ae){var n=Gt(t);n&&n!==Ae&&et(e,n,r)}var o=Bt(t);Re&&(o=o.concat(Re(t)));for(var u=Ce(e),f=Ce(t),a=0;a<o.length;++a){var c=o[a];if(!zt[c]&&!(r&&r[c])&&!(f&&f[c])&&!(u&&u[c])){var i=Kt(t,c);try{Ut(e,c,i)}catch(s){}}}}return e}var Yr=et,Ht={exports:{}},m={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xe=Symbol.for("react.element"),$e=Symbol.for("react.portal"),ee=Symbol.for("react.fragment"),te=Symbol.for("react.strict_mode"),re=Symbol.for("react.profiler"),ne=Symbol.for("react.provider"),oe=Symbol.for("react.context"),Xt=Symbol.for("react.server_context"),ue=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),Yt=Symbol.for("react.offscreen"),tt;tt=Symbol.for("react.module.reference");function $(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case xe:switch(e=e.type,e){case ee:case re:case te:case ie:case ae:return e;default:switch(e=e&&e.$$typeof,e){case Xt:case oe:case ue:case fe:case ce:case ne:return e;default:return t}}case $e:return t}}}m.ContextConsumer=oe;m.ContextProvider=ne;m.Element=xe;m.ForwardRef=ue;m.Fragment=ee;m.Lazy=fe;m.Memo=ce;m.Portal=$e;m.Profiler=re;m.StrictMode=te;m.Suspense=ie;m.SuspenseList=ae;m.isAsyncMode=function(){return!1};m.isConcurrentMode=function(){return!1};m.isContextConsumer=function(e){return $(e)===oe};m.isContextProvider=function(e){return $(e)===ne};m.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===xe};m.isForwardRef=function(e){return $(e)===ue};m.isFragment=function(e){return $(e)===ee};m.isLazy=function(e){return $(e)===fe};m.isMemo=function(e){return $(e)===ce};m.isPortal=function(e){return $(e)===$e};m.isProfiler=function(e){return $(e)===re};m.isStrictMode=function(e){return $(e)===te};m.isSuspense=function(e){return $(e)===ie};m.isSuspenseList=function(e){return $(e)===ae};m.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ee||e===re||e===te||e===ie||e===ae||e===Yt||typeof e=="object"&&e!==null&&(e.$$typeof===fe||e.$$typeof===ce||e.$$typeof===ne||e.$$typeof===oe||e.$$typeof===ue||e.$$typeof===tt||e.getModuleId!==void 0)};m.typeOf=$;(function(e){e.exports=m})(Ht);function Jt(){const e=Tt();let t=null,r=null;return{clear(){t=null,r=null},notify(){e(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){let n=[],o=t;for(;o;)n.push(o),o=o.next;return n},subscribe(n){let o=!0,u=r={callback:n,next:null,prev:r};return u.prev?u.prev.next=u:t=u,function(){!o||t===null||(o=!1,u.next?u.next.prev=u.prev:r=u.prev,u.prev?u.prev.next=u.next:t=u.next)}}}}const Te={notify(){},get:()=>[]};function Qt(e,t){let r,n=Te;function o(l){return c(),n.subscribe(l)}function u(){n.notify()}function f(){s.onStateChange&&s.onStateChange()}function a(){return Boolean(r)}function c(){r||(r=t?t.addNestedSub(f):e.subscribe(f),n=Jt())}function i(){r&&(r(),r=void 0,n.clear(),n=Te)}const s={addNestedSub:o,notifyNestedSubs:u,handleChangeWrapper:f,isSubscribed:a,trySubscribe:c,tryUnsubscribe:i,getListeners:()=>n};return s}const Zt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",er=Zt?C.exports.useLayoutEffect:C.exports.useEffect;function Me(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function Jr(e,t){if(Me(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(t,r[o])||!Me(e[r[o]],t[r[o]]))return!1;return!0}function Qr({store:e,context:t,children:r,serverState:n}){const o=C.exports.useMemo(()=>{const a=Qt(e);return{store:e,subscription:a,getServerState:n?()=>n:void 0}},[e,n]),u=C.exports.useMemo(()=>e.getState(),[e]);return er(()=>{const{subscription:a}=o;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),u!==e.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[o,u]),ft((t||I).Provider,{value:o,children:r})}function rt(e=I){const t=e===I?Xe:()=>C.exports.useContext(e);return function(){const{store:n}=t();return n}}const tr=rt();function rr(e=I){const t=e===I?tr:rt(e);return function(){return t().dispatch}}const Zr=rr();_t(Ke.exports.useSyncExternalStoreWithSelector);At(ct.exports.unstable_batchedUpdates);function nr(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _e(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function Ie(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?_e(Object(r),!0).forEach(function(n){nr(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_e(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function E(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var Ne=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),ve=function(){return Math.random().toString(36).substring(7).split("").join(".")},V={INIT:"@@redux/INIT"+ve(),REPLACE:"@@redux/REPLACE"+ve(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ve()}};function or(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function nt(e,t,r){var n;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(E(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(E(1));return r(nt)(e,t)}if(typeof e!="function")throw new Error(E(2));var o=e,u=t,f=[],a=f,c=!1;function i(){a===f&&(a=f.slice())}function s(){if(c)throw new Error(E(3));return u}function l(y){if(typeof y!="function")throw new Error(E(4));if(c)throw new Error(E(5));var b=!0;return i(),a.push(y),function(){if(!!b){if(c)throw new Error(E(6));b=!1,i();var S=a.indexOf(y);a.splice(S,1),f=null}}}function d(y){if(!or(y))throw new Error(E(7));if(typeof y.type>"u")throw new Error(E(8));if(c)throw new Error(E(9));try{c=!0,u=o(u,y)}finally{c=!1}for(var b=f=a,g=0;g<b.length;g++){var S=b[g];S()}return y}function p(y){if(typeof y!="function")throw new Error(E(10));o=y,d({type:V.REPLACE})}function v(){var y,b=l;return y={subscribe:function(S){if(typeof S!="object"||S===null)throw new Error(E(11));function P(){S.next&&S.next(s())}P();var O=b(P);return{unsubscribe:O}}},y[Ne]=function(){return this},y}return d({type:V.INIT}),n={dispatch:d,subscribe:l,getState:s,replaceReducer:p},n[Ne]=v,n}function ur(e){Object.keys(e).forEach(function(t){var r=e[t],n=r(void 0,{type:V.INIT});if(typeof n>"u")throw new Error(E(12));if(typeof r(void 0,{type:V.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(E(13))})}function ir(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];typeof e[o]=="function"&&(r[o]=e[o])}var u=Object.keys(r),f;try{ur(r)}catch(a){f=a}return function(c,i){if(c===void 0&&(c={}),f)throw f;for(var s=!1,l={},d=0;d<u.length;d++){var p=u[d],v=r[p],y=c[p],b=v(y,i);if(typeof b>"u")throw i&&i.type,new Error(E(14));l[p]=b,s=s||b!==y}return s=s||u.length!==Object.keys(c).length,s?l:c}}function W(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.length===0?function(n){return n}:t.length===1?t[0]:t.reduce(function(n,o){return function(){return n(o.apply(void 0,arguments))}})}function ar(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return function(){var o=n.apply(void 0,arguments),u=function(){throw new Error(E(15))},f={getState:o.getState,dispatch:function(){return u.apply(void 0,arguments)}},a=t.map(function(c){return c(f)});return u=W.apply(void 0,a)(o.dispatch),Ie(Ie({},o),{},{dispatch:u})}}}var F="NOT_FOUND";function cr(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:F},put:function(n,o){t={key:n,value:o}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}function fr(e,t){var r=[];function n(a){var c=r.findIndex(function(s){return t(a,s.key)});if(c>-1){var i=r[c];return c>0&&(r.splice(c,1),r.unshift(i)),i.value}return F}function o(a,c){n(a)===F&&(r.unshift({key:a,value:c}),r.length>e&&r.pop())}function u(){return r}function f(){r=[]}return{get:n,put:o,getEntries:u,clear:f}}var sr=function(t,r){return t===r};function lr(e){return function(r,n){if(r===null||n===null||r.length!==n.length)return!1;for(var o=r.length,u=0;u<o;u++)if(!e(r[u],n[u]))return!1;return!0}}function dr(e,t){var r=typeof t=="object"?t:{equalityCheck:t},n=r.equalityCheck,o=n===void 0?sr:n,u=r.maxSize,f=u===void 0?1:u,a=r.resultEqualityCheck,c=lr(o),i=f===1?cr(c):fr(f,c);function s(){var l=i.get(arguments);if(l===F){if(l=e.apply(null,arguments),a){var d=i.getEntries(),p=d.find(function(v){return a(v.value,l)});p&&(l=p.value)}i.put(arguments,l)}return l}return s.clearCache=function(){return i.clear()},s}function pr(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every(function(n){return typeof n=="function"})){var r=t.map(function(n){return typeof n=="function"?"function "+(n.name||"unnamed")+"()":typeof n}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return t}function vr(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=function(){for(var f=arguments.length,a=new Array(f),c=0;c<f;c++)a[c]=arguments[c];var i=0,s,l={memoizeOptions:void 0},d=a.pop();if(typeof d=="object"&&(l=d,d=a.pop()),typeof d!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof d+"]");var p=l,v=p.memoizeOptions,y=v===void 0?r:v,b=Array.isArray(y)?y:[y],g=pr(a),S=e.apply(void 0,[function(){return i++,d.apply(null,arguments)}].concat(b)),P=e(function(){for(var R=[],j=g.length,T=0;T<j;T++)R.push(g[T].apply(null,arguments));return s=S.apply(null,R),s});return Object.assign(P,{resultFunc:d,memoizedResultFunc:S,dependencies:g,lastResult:function(){return s},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),P};return o}var en=vr(dr);function ot(e){var t=function(n){var o=n.dispatch,u=n.getState;return function(f){return function(a){return typeof a=="function"?a(o,u,e):f(a)}}};return t}var ut=ot();ut.withExtraArgument=ot;const De=ut;var yr=globalThis&&globalThis.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,o){n.__proto__=o}||function(n,o){for(var u in o)Object.prototype.hasOwnProperty.call(o,u)&&(n[u]=o[u])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),hr=globalThis&&globalThis.__generator||function(e,t){var r={label:0,sent:function(){if(u[0]&1)throw u[1];return u[1]},trys:[],ops:[]},n,o,u,f;return f={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f;function a(i){return function(s){return c([i,s])}}function c(i){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,o&&(u=i[0]&2?o.return:i[0]?o.throw||((u=o.return)&&u.call(o),0):o.next)&&!(u=u.call(o,i[1])).done)return u;switch(o=0,u&&(i=[i[0]&2,u.value]),i[0]){case 0:case 1:u=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,o=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(u=r.trys,!(u=u.length>0&&u[u.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!u||i[1]>u[0]&&i[1]<u[3])){r.label=i[1];break}if(i[0]===6&&r.label<u[1]){r.label=u[1],u=i;break}if(u&&r.label<u[2]){r.label=u[2],r.ops.push(i);break}u[2]&&r.ops.pop(),r.trys.pop();continue}i=t.call(e,r)}catch(s){i=[6,s],o=0}finally{n=u=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}},z=globalThis&&globalThis.__spreadArray||function(e,t){for(var r=0,n=t.length,o=e.length;r<n;r++,o++)e[o]=t[r];return e},mr=Object.defineProperty,gr=Object.defineProperties,br=Object.getOwnPropertyDescriptors,qe=Object.getOwnPropertySymbols,Sr=Object.prototype.hasOwnProperty,wr=Object.prototype.propertyIsEnumerable,Le=function(e,t,r){return t in e?mr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r},M=function(e,t){for(var r in t||(t={}))Sr.call(t,r)&&Le(e,r,t[r]);if(qe)for(var n=0,o=qe(t);n<o.length;n++){var r=o[n];wr.call(t,r)&&Le(e,r,t[r])}return e},ye=function(e,t){return gr(e,br(t))},Or=function(e,t,r){return new Promise(function(n,o){var u=function(c){try{a(r.next(c))}catch(i){o(i)}},f=function(c){try{a(r.throw(c))}catch(i){o(i)}},a=function(c){return c.done?n(c.value):Promise.resolve(c.value).then(u,f)};a((r=r.apply(e,t)).next())})},Er=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?W:W.apply(null,arguments)};function xr(e){if(typeof e!="object"||e===null)return!1;var t=Object.getPrototypeOf(e);if(t===null)return!0;for(var r=t;Object.getPrototypeOf(r)!==null;)r=Object.getPrototypeOf(r);return t===r}var $r=function(e){yr(t,e);function t(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=e.apply(this,r)||this;return Object.setPrototypeOf(o,t.prototype),o}return Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.prototype.concat.apply(this,r)},t.prototype.prepend=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return r.length===1&&Array.isArray(r[0])?new(t.bind.apply(t,z([void 0],r[0].concat(this)))):new(t.bind.apply(t,z([void 0],r.concat(this))))},t}(Array);function me(e){return ze(e)?ke(e,function(){}):e}function Pr(e){return typeof e=="boolean"}function jr(){return function(t){return Cr(t)}}function Cr(e){e===void 0&&(e={});var t=e.thunk,r=t===void 0?!0:t;e.immutableCheck,e.serializableCheck;var n=new $r;return r&&(Pr(r)?n.push(De):n.push(De.withExtraArgument(r.extraArgument))),n}var Rr=!0;function tn(e){var t=jr(),r=e||{},n=r.reducer,o=n===void 0?void 0:n,u=r.middleware,f=u===void 0?t():u,a=r.devTools,c=a===void 0?!0:a,i=r.preloadedState,s=i===void 0?void 0:i,l=r.enhancers,d=l===void 0?void 0:l,p;if(typeof o=="function")p=o;else if(xr(o))p=ir(o);else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');var v=f;typeof v=="function"&&(v=v(t));var y=ar.apply(void 0,v),b=W;c&&(b=Er(M({trace:!Rr},typeof c=="object"&&c)));var g=[y];Array.isArray(d)?g=z([y],d):typeof d=="function"&&(g=d(g));var S=b.apply(void 0,g);return nt(p,s,S)}function _(e,t){function r(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];if(t){var u=t.apply(void 0,n);if(!u)throw new Error("prepareAction did not return an object");return M(M({type:e,payload:u.payload},"meta"in u&&{meta:u.meta}),"error"in u&&{error:u.error})}return{type:e,payload:n[0]}}return r.toString=function(){return""+e},r.type=e,r.match=function(n){return n.type===e},r}function it(e){var t={},r=[],n,o={addCase:function(u,f){var a=typeof u=="string"?u:u.type;if(a in t)throw new Error("addCase cannot be called with two reducers for the same action type");return t[a]=f,o},addMatcher:function(u,f){return r.push({matcher:u,reducer:f}),o},addDefaultCase:function(u){return n=u,o}};return e(o),[t,r,n]}function Ar(e){return typeof e=="function"}function Tr(e,t,r,n){r===void 0&&(r=[]);var o=typeof t=="function"?it(t):[t,r,n],u=o[0],f=o[1],a=o[2],c;if(Ar(e))c=function(){return me(e())};else{var i=me(e);c=function(){return i}}function s(l,d){l===void 0&&(l=c());var p=z([u[d.type]],f.filter(function(v){var y=v.matcher;return y(d)}).map(function(v){var y=v.reducer;return y}));return p.filter(function(v){return!!v}).length===0&&(p=[a]),p.reduce(function(v,y){if(y)if(lt(v)){var b=v,g=y(b,d);return g===void 0?v:g}else{if(ze(v))return ke(v,function(S){return y(S,d)});var g=y(v,d);if(g===void 0){if(v===null)return v;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}return v},l)}return s.getInitialState=c,s}function Mr(e,t){return e+"/"+t}function rn(e){var t=e.name;if(!t)throw new Error("`name` is a required option for createSlice");typeof process<"u";var r=typeof e.initialState=="function"?e.initialState:me(e.initialState),n=e.reducers||{},o=Object.keys(n),u={},f={},a={};o.forEach(function(s){var l=n[s],d=Mr(t,s),p,v;"reducer"in l?(p=l.reducer,v=l.prepare):p=l,u[s]=p,f[d]=p,a[s]=v?_(d,v):_(d)});function c(){var s=typeof e.extraReducers=="function"?it(e.extraReducers):[e.extraReducers],l=s[0],d=l===void 0?{}:l,p=s[1],v=p===void 0?[]:p,y=s[2],b=y===void 0?void 0:y,g=M(M({},d),f);return Tr(r,function(S){for(var P in g)S.addCase(P,g[P]);for(var O=0,R=v;O<R.length;O++){var j=R[O];S.addMatcher(j.matcher,j.reducer)}b&&S.addDefaultCase(b)})}var i;return{name:t,reducer:function(s,l){return i||(i=c()),i(s,l)},actions:a,caseReducers:u,getInitialState:function(){return i||(i=c()),i.getInitialState()}}}var _r="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Ir=function(e){e===void 0&&(e=21);for(var t="",r=e;r--;)t+=_r[Math.random()*64|0];return t},Nr=["name","message","stack","code"],he=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),Ve=function(){function e(t,r){this.payload=t,this.meta=r}return e}(),Dr=function(e){if(typeof e=="object"&&e!==null){for(var t={},r=0,n=Nr;r<n.length;r++){var o=n[r];typeof e[o]=="string"&&(t[o]=e[o])}return t}return{message:String(e)}},nn=function(){function e(t,r,n){var o=_(t+"/fulfilled",function(i,s,l,d){return{payload:i,meta:ye(M({},d||{}),{arg:l,requestId:s,requestStatus:"fulfilled"})}}),u=_(t+"/pending",function(i,s,l){return{payload:void 0,meta:ye(M({},l||{}),{arg:s,requestId:i,requestStatus:"pending"})}}),f=_(t+"/rejected",function(i,s,l,d,p){return{payload:d,error:(n&&n.serializeError||Dr)(i||"Rejected"),meta:ye(M({},p||{}),{arg:l,requestId:s,rejectedWithValue:!!d,requestStatus:"rejected",aborted:(i==null?void 0:i.name)==="AbortError",condition:(i==null?void 0:i.name)==="ConditionError"})}}),a=typeof AbortController<"u"?AbortController:function(){function i(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){},reason:void 0,throwIfAborted:function(){}}}return i.prototype.abort=function(){},i}();function c(i){return function(s,l,d){var p=n!=null&&n.idGenerator?n.idGenerator(i):Ir(),v=new a,y,b=new Promise(function(O,R){return v.signal.addEventListener("abort",function(){return R({name:"AbortError",message:y||"Aborted"})})}),g=!1;function S(O){g&&(y=O,v.abort())}var P=function(){return Or(this,null,function(){var O,R,j,T,q,je;return hr(this,function(N){switch(N.label){case 0:return N.trys.push([0,4,,5]),T=(O=n==null?void 0:n.condition)==null?void 0:O.call(n,i,{getState:l,extra:d}),Lr(T)?[4,T]:[3,2];case 1:T=N.sent(),N.label=2;case 2:if(T===!1)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return g=!0,s(u(p,i,(R=n==null?void 0:n.getPendingMeta)==null?void 0:R.call(n,{requestId:p,arg:i},{getState:l,extra:d}))),[4,Promise.race([b,Promise.resolve(r(i,{dispatch:s,getState:l,extra:d,requestId:p,signal:v.signal,abort:S,rejectWithValue:function(A,de){return new he(A,de)},fulfillWithValue:function(A,de){return new Ve(A,de)}})).then(function(A){if(A instanceof he)throw A;return A instanceof Ve?o(A.payload,p,i,A.meta):o(A,p,i)})])];case 3:return j=N.sent(),[3,5];case 4:return q=N.sent(),j=q instanceof he?f(null,p,i,q.payload,q.meta):f(q,p,i),[3,5];case 5:return je=n&&!n.dispatchConditionRejection&&f.match(j)&&j.meta.condition,je||s(j),[2,j]}})})}();return Object.assign(P,{abort:S,requestId:p,arg:i,unwrap:function(){return P.then(qr)}})}}return Object.assign(c,{pending:u,rejected:f,fulfilled:o,typePrefix:t})}return e.withTypes=e,e}();function qr(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Lr(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Vr=function(e){return e&&typeof e.match=="function"},at=function(e,t){return Vr(e)?e.match(t):e(t)};function se(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(r){return e.some(function(n){return at(n,r)})}}function We(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return function(r){return e.every(function(n){return at(n,r)})}}function le(e,t){if(!e||!e.meta)return!1;var r=typeof e.meta.requestId=="string",n=t.indexOf(e.meta.requestStatus)>-1;return r&&n}function L(e){return typeof e[0]=="function"&&"pending"in e[0]&&"fulfilled"in e[0]&&"rejected"in e[0]}function Wr(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.length===0?function(r){return le(r,["pending"])}:L(e)?function(r){var n=e.map(function(u){return u.pending}),o=se.apply(void 0,n);return o(r)}:Wr()(e[0])}function ge(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.length===0?function(r){return le(r,["rejected"])}:L(e)?function(r){var n=e.map(function(u){return u.rejected}),o=se.apply(void 0,n);return o(r)}:ge()(e[0])}function Fr(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=function(n){return n&&n.meta&&n.meta.rejectedWithValue};return e.length===0?function(n){var o=We(ge.apply(void 0,e),r);return o(n)}:L(e)?function(n){var o=We(ge.apply(void 0,e),r);return o(n)}:Fr()(e[0])}function zr(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.length===0?function(r){return le(r,["fulfilled"])}:L(e)?function(r){var n=e.map(function(u){return u.fulfilled}),o=se.apply(void 0,n);return o(r)}:zr()(e[0])}function kr(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.length===0?function(r){return le(r,["pending","fulfilled","rejected"])}:L(e)?function(r){for(var n=[],o=0,u=e;o<u.length;o++){var f=u[o];n.push(f.pending,f.rejected,f.fulfilled)}var a=se.apply(void 0,n);return a(r)}:kr()(e[0])}var Pe="listenerMiddleware";_(Pe+"/add");_(Pe+"/removeAll");_(Pe+"/remove");var Ur="RTK_autoBatch",on=function(){return function(e){var t;return{payload:e,meta:(t={},t[Ur]=!0,t)}}},Fe;typeof queueMicrotask=="function"&&queueMicrotask.bind(typeof window<"u"?window:global);st();export{Qr as P,Ur as S,rn as a,nn as b,nt as c,dr as d,_ as e,se as f,Fr as g,zr as h,xr as i,ir as j,en as k,We as l,Wr as m,Ir as n,ge as o,on as p,kr as q,Xr as r,Jr as s,tr as t,Zr as u,tn as v,Ht as w,Yr as x};