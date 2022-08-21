!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}System.register([],(function(e,r){"use strict";return{execute:function(){function r(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function n(t){return!!t&&!!t[q]}function o(e){return!!e&&(function(e){if(!e||"object"!=t(e))return!1;var r=Object.getPrototypeOf(e);if(null===r)return!0;var n=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===B}(e)||Array.isArray(e)||!!e[X]||!!e.constructor[X]||s(e)||p(e))}function i(e,r,n){void 0===n&&(n=!1),0===u(e)?(n?Object.keys:G)(e).forEach((function(o){n&&"symbol"==t(o)||r(o,e[o],e)})):e.forEach((function(t,n){return r(n,t,e)}))}function u(t){var e=t[q];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:s(t)?2:p(t)?3:0}function a(t,e){return 2===u(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function c(t,e){return 2===u(t)?t.get(e):t[e]}function f(t,e,r){var n=u(t);2===n?t.set(e,r):3===n?(t.delete(e),t.add(r)):t[e]=r}function l(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}function s(t){return C&&t instanceof Map}function p(t){return U&&t instanceof Set}function v(t){return t.o||t.t}function h(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=H(t);delete e[q];for(var r=G(e),n=0;n<r.length;n++){var o=r[n],i=e[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(e[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),e)}function y(t,e){return void 0===e&&(e=!1),b(t)||n(t)||!o(t)||(u(t)>1&&(t.set=t.add=t.clear=t.delete=d),Object.freeze(t),e&&i(t,(function(t,e){return y(e,!0)}),!0)),t}function d(){r(2)}function b(e){return null==e||"object"!=t(e)||Object.isFrozen(e)}function g(t){var e=L[t];return e||r(18,t),e}function m(t,e){L[t]||(L[t]=e)}function P(){return W}function O(t,e){e&&(g("Patches"),t.u=[],t.s=[],t.v=e)}function w(t){j(t),t.p.forEach(S),t.p=null}function j(t){t===W&&(W=t.l)}function A(t){return W={p:[],l:W,h:t,m:!0,_:0}}function S(t){var e=t[q];0===e.i||1===e.i?e.j():e.O=!0}function D(t,e){e._=e.p.length;var n=e.p[0],i=void 0!==t&&t!==n;return e.h.g||g("ES5").S(e,t,i),i?(n[q].P&&(w(e),r(4)),o(t)&&(t=_(e,t),e.l||E(e,t)),e.u&&g("Patches").M(n[q].t,t,e.u,e.s)):t=_(e,n,[]),w(e),e.u&&e.v(e.u,e.s),t!==T?t:void 0}function _(t,e,r){if(b(e))return e;var n=e[q];if(!n)return i(e,(function(o,i){return k(t,n,e,o,i,r)}),!0),e;if(n.A!==t)return e;if(!n.P)return E(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=h(n.k):n.o;i(3===n.i?new Set(o):o,(function(e,i){return k(t,n,o,e,i,r)})),E(t,o,!1),r&&t.u&&g("Patches").R(n,r,t.u,t.s)}return n.o}function k(t,e,r,i,u,c){if(n(u)){var l=_(t,u,c&&e&&3!==e.i&&!a(e.D,i)?c.concat(i):void 0);if(f(r,i,l),!n(l))return;t.m=!1}if(o(u)&&!b(u)){if(!t.h.F&&t._<1)return;_(t,u),e&&e.A.l||E(t,u)}}function E(t,e,r){void 0===r&&(r=!1),t.h.F&&t.m&&y(e,r)}function F(t,e){var r=t[q];return(r?v(r):t)[e]}function x(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function M(t){t.P||(t.P=!0,t.l&&M(t.l))}function I(t){t.o||(t.o=h(t.t))}function R(t,e,r){var n=s(e)?g("MapSet").N(e,r):p(e)?g("MapSet").T(e,r):t.g?function(t,e){var r=Array.isArray(t),n={i:r?1:0,A:e?e.A:P(),P:!1,I:!1,D:{},l:e,t:t,k:null,o:null,j:null,C:!1},o=n,i=Q;r&&(o=[n],i=V);var u=Proxy.revocable(o,i),a=u.revoke,c=u.proxy;return n.k=c,n.j=a,c}(e,r):g("ES5").J(e,r);return(r?r.A:P()).p.push(n),n}function z(t){return n(t)||r(22,t),function t(e){if(!o(e))return e;var r,n=e[q],a=u(e);if(n){if(!n.P&&(n.i<4||!g("ES5").K(n)))return n.t;n.I=!0,r=K(e,a),n.I=!1}else r=K(e,a);return i(r,(function(e,o){n&&c(n.t,e)===o||f(r,e,t(o))})),3===a?new Set(r):r}(t)}function K(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return h(t)}e({N:function(){function e(t,e){var r=c[t];return r?r.enumerable=e:c[t]=r={configurable:!0,enumerable:e,get:function(){var e=this[q];return Q.get(e,t)},set:function(e){var r=this[q];Q.set(r,t,e)}},r}function r(t){for(var e=t.length-1;e>=0;e--){var r=t[e][q];if(!r.P)switch(r.i){case 5:u(r)&&M(r);break;case 4:o(r)&&M(r)}}}function o(t){for(var e=t.t,r=t.k,n=G(r),o=n.length-1;o>=0;o--){var i=n[o];if(i!==q){var u=e[i];if(void 0===u&&!a(e,i))return!0;var c=r[i],f=c&&c[q];if(f?f.t!==u:!l(c,u))return!0}}var s=!!e[q];return n.length!==G(e).length+(s?0:1)}function u(t){var e=t.k;if(e.length!==t.t.length)return!0;var r=Object.getOwnPropertyDescriptor(e,e.length-1);if(r&&!r.get)return!0;for(var n=0;n<e.length;n++)if(!e.hasOwnProperty(n))return!0;return!1}var c={};m("ES5",{J:function(t,r){var n=Array.isArray(t),o=function(t,r){if(t){for(var n=Array(r.length),o=0;o<r.length;o++)Object.defineProperty(n,""+o,e(o,!0));return n}var i=H(r);delete i[q];for(var u=G(i),a=0;a<u.length;a++){var c=u[a];i[c]=e(c,t||!!i[c].enumerable)}return Object.create(Object.getPrototypeOf(r),i)}(n,t),i={i:n?5:4,A:r?r.A:P(),P:!1,I:!1,D:{},l:r,t:t,k:o,o:null,O:!1,C:!1};return Object.defineProperty(o,q,{value:i,writable:!0}),o},S:function(e,o,c){c?n(o)&&o[q].A===e&&r(e.p):(e.u&&function e(r){if(r&&"object"==t(r)){var n=r[q];if(n){var o=n.t,c=n.k,f=n.D,l=n.i;if(4===l)i(c,(function(t){t!==q&&(void 0!==o[t]||a(o,t)?f[t]||e(c[t]):(f[t]=!0,M(n)))})),i(o,(function(t){void 0!==c[t]||a(c,t)||(f[t]=!1,M(n))}));else if(5===l){if(u(n)&&(M(n),f.length=!0),c.length<o.length)for(var s=c.length;s<o.length;s++)f[s]=!1;else for(var p=o.length;p<c.length;p++)f[p]=!0;for(var v=Math.min(c.length,o.length),h=0;h<v;h++)c.hasOwnProperty(h)||(f[h]=!0),void 0===f[h]&&e(c[h])}}}}(e.p[0]),r(e.p))},K:function(t){return 4===t.i?o(t):u(t)}})},T:function(){function e(t){if(!o(t))return t;if(Array.isArray(t))return t.map(e);if(s(t))return new Map(Array.from(t.entries()).map((function(t){return[t[0],e(t[1])]})));if(p(t))return new Set(Array.from(t).map(e));var r=Object.create(Object.getPrototypeOf(t));for(var n in t)r[n]=e(t[n]);return a(t,X)&&(r[X]=t[X]),r}function f(t){return n(t)?e(t):t}var l="add";m("Patches",{$:function(n,o){return o.forEach((function(o){for(var i=o.path,a=o.op,f=n,s=0;s<i.length-1;s++){var p=u(f),v=""+i[s];0!==p&&1!==p||"__proto__"!==v&&"constructor"!==v||r(24),"function"==typeof f&&"prototype"===v&&r(24),"object"!=t(f=c(f,v))&&r(15,i.join("/"))}var h=u(f),y=e(o.value),d=i[i.length-1];switch(a){case"replace":switch(h){case 2:return f.set(d,y);case 3:r(16);default:return f[d]=y}case l:switch(h){case 1:return"-"===d?f.push(y):f.splice(d,0,y);case 2:return f.set(d,y);case 3:return f.add(y);default:return f[d]=y}case"remove":switch(h){case 1:return f.splice(d,1);case 2:return f.delete(d);case 3:return f.delete(o.value);default:return delete f[d]}default:r(17,a)}})),n},R:function(t,e,r,n){switch(t.i){case 0:case 4:case 2:return function(t,e,r,n){var o=t.t,u=t.o;i(t.D,(function(t,i){var s=c(o,t),p=c(u,t),v=i?a(o,t)?"replace":l:"remove";if(s!==p||"replace"!==v){var h=e.concat(t);r.push("remove"===v?{op:v,path:h}:{op:v,path:h,value:p}),n.push(v===l?{op:"remove",path:h}:"remove"===v?{op:l,path:h,value:f(s)}:{op:"replace",path:h,value:f(s)})}}))}(t,e,r,n);case 5:case 1:return function(t,e,r,n){var o=t.t,i=t.D,u=t.o;if(u.length<o.length){var a=[u,o];o=a[0],u=a[1];var c=[n,r];r=c[0],n=c[1]}for(var s=0;s<o.length;s++)if(i[s]&&u[s]!==o[s]){var p=e.concat([s]);r.push({op:"replace",path:p,value:f(u[s])}),n.push({op:"replace",path:p,value:f(o[s])})}for(var v=o.length;v<u.length;v++){var h=e.concat([v]);r.push({op:l,path:h,value:f(u[v])})}o.length<u.length&&n.push({op:"replace",path:e.concat(["length"]),value:o.length})}(t,e,r,n);case 3:return function(t,e,r,n){var o=t.t,i=t.o,u=0;o.forEach((function(t){if(!i.has(t)){var o=e.concat([u]);r.push({op:"remove",path:o,value:t}),n.unshift({op:l,path:o,value:t})}u++})),u=0,i.forEach((function(t){if(!o.has(t)){var i=e.concat([u]);r.push({op:l,path:i,value:t}),n.unshift({op:"remove",path:i,value:t})}u++}))}(t,e,r,n)}},M:function(t,e,r,n){r.push({op:"replace",path:[],value:e===T?void 0:e}),n.push({op:"replace",path:[],value:t})}})},d:y,r:n,t:o});var N,W,$="undefined"!=typeof Symbol&&"symbol"==t(Symbol("x")),C="undefined"!=typeof Map,U="undefined"!=typeof Set,J="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,T=$?Symbol.for("immer-nothing"):((N={})["immer-nothing"]=!0,N),X=$?Symbol.for("immer-draftable"):"__$immer_draftable",q=$?Symbol.for("immer-state"):"__$immer_state",B=""+Object.prototype.constructor,G="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,H=Object.getOwnPropertyDescriptors||function(t){var e={};return G(t).forEach((function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)})),e},L={},Q={get:function(t,e){if(e===q)return t;var r=v(t);if(!a(r,e))return function(t,e,r){var n,o=x(e,r);return o?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(t.k):void 0}(t,r,e);var n=r[e];return t.I||!o(n)?n:n===F(t.t,e)?(I(t),t.o[e]=R(t.A.h,n,t)):n},has:function(t,e){return e in v(t)},ownKeys:function(t){return Reflect.ownKeys(v(t))},set:function(t,e,r){var n=x(v(t),e);if(null==n?void 0:n.set)return n.set.call(t.k,r),!0;if(!t.P){var o=F(v(t),e),i=null==o?void 0:o[q];if(i&&i.t===r)return t.o[e]=r,t.D[e]=!1,!0;if(l(r,o)&&(void 0!==r||a(t.t,e)))return!0;I(t),M(t)}return t.o[e]===r&&"number"!=typeof r&&(void 0!==r||e in t.o)||(t.o[e]=r,t.D[e]=!0,!0)},deleteProperty:function(t,e){return void 0!==F(t.t,e)||e in t.t?(t.D[e]=!1,I(t),M(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=v(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:n.enumerable,value:r[e]}:n},defineProperty:function(){r(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){r(12)}},V={};i(Q,(function(t,e){V[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),V.deleteProperty=function(t,e){return V.set.call(this,t,e,void 0)},V.set=function(t,e,r){return Q.set.call(this,t[0],e,r,t[0])};var Y=function(){function e(e){var n=this;this.g=J,this.F=!0,this.produce=function(e,i,u){if("function"==typeof e&&"function"!=typeof i){var a=i;i=e;var c=n;return function(t){var e=this;void 0===t&&(t=a);for(var r=arguments.length,n=Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];return c.produce(t,(function(t){var r;return(r=i).call.apply(r,[e,t].concat(n))}))}}var f;if("function"!=typeof i&&r(6),void 0!==u&&"function"!=typeof u&&r(7),o(e)){var l=A(n),s=R(n,e,void 0),p=!0;try{f=i(s),p=!1}finally{p?w(l):j(l)}return"undefined"!=typeof Promise&&f instanceof Promise?f.then((function(t){return O(l,u),D(t,l)}),(function(t){throw w(l),t})):(O(l,u),D(f,l))}if(!e||"object"!=t(e)){if(void 0===(f=i(e))&&(f=e),f===T&&(f=void 0),n.F&&y(f,!0),u){var v=[],h=[];g("Patches").M(e,f,v,h),u(v,h)}return f}r(21,e)},this.produceWithPatches=function(t,e){if("function"==typeof t)return function(e){for(var r=arguments.length,o=Array(r>1?r-1:0),i=1;i<r;i++)o[i-1]=arguments[i];return n.produceWithPatches(e,(function(e){return t.apply(void 0,[e].concat(o))}))};var r,o,i=n.produce(t,e,(function(t,e){r=t,o=e}));return"undefined"!=typeof Promise&&i instanceof Promise?i.then((function(t){return[t,r,o]})):[i,r,o]},"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze)}var i=e.prototype;return i.createDraft=function(t){o(t)||r(8),n(t)&&(t=z(t));var e=A(this),i=R(this,t,void 0);return i[q].C=!0,j(e),i},i.finishDraft=function(t,e){var r=(t&&t[q]).A;return O(r,e),D(void 0,r)},i.setAutoFreeze=function(t){this.F=t},i.setUseProxies=function(t){t&&!J&&r(20),this.g=t},i.applyPatches=function(t,e){var r;for(r=e.length-1;r>=0;r--){var o=e[r];if(0===o.path.length&&"replace"===o.op){t=o.value;break}}r>-1&&(e=e.slice(r+1));var i=g("Patches").$;return n(t)?i(t,e):this.produce(t,(function(t){return i(t,e)}))},e}(),Z=new Y,tt=Z.produce,et=Z.produceWithPatches.bind(Z);Z.setAutoFreeze.bind(Z),Z.setUseProxies.bind(Z);var rt=Z.applyPatches.bind(Z);Z.createDraft.bind(Z),Z.finishDraft.bind(Z),e({c:et,p:rt});e("n",tt)}}}))}();
