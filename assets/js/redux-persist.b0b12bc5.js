import{c as Y}from"./react-redux.49573eed.js";var R="persist:",H="persist/FLUSH",T="persist/REHYDRATE",L="persist/PAUSE",W="persist/PERSIST",G="persist/PURGE",N="persist/REGISTER",C=-1;function j(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?j=function(r){return typeof r}:j=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},j(e)}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?A(r,!0).forEach(function(n){B(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(r).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function B(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function V(e,t,r,n){n.debug;var i=J({},r);return e&&j(e)==="object"&&Object.keys(e).forEach(function(s){s!=="_persist"&&t[s]===r[s]&&(i[s]=e[s])}),i}function X(e){var t=e.blacklist||null,r=e.whitelist||null,n=e.transforms||[],i=e.throttle||0,s="".concat(e.keyPrefix!==void 0?e.keyPrefix:R).concat(e.key),y=e.storage,c;e.serialize===!1?c=function(h){return h}:typeof e.serialize=="function"?c=e.serialize:c=k;var f=e.writeFailHandler||null,a={},p={},u=[],d=null,v=null,D=function(h){Object.keys(h).forEach(function(l){!m(l)||a[l]!==h[l]&&u.indexOf(l)===-1&&u.push(l)}),Object.keys(a).forEach(function(l){h[l]===void 0&&m(l)&&u.indexOf(l)===-1&&a[l]!==void 0&&u.push(l)}),d===null&&(d=setInterval(O,i)),a=h};function O(){if(u.length===0){d&&clearInterval(d),d=null;return}var o=u.shift(),h=n.reduce(function(l,g){return g.in(l,o,a)},a[o]);if(h!==void 0)try{p[o]=c(h)}catch(l){console.error("redux-persist/createPersistoid: error serializing state",l)}else delete p[o];u.length===0&&w()}function w(){Object.keys(p).forEach(function(o){a[o]===void 0&&delete p[o]}),v=y.setItem(s,c(p)).catch(E)}function m(o){return!(r&&r.indexOf(o)===-1&&o!=="_persist"||t&&t.indexOf(o)!==-1)}function E(o){f&&f(o)}var _=function(){for(;u.length!==0;)O();return v||Promise.resolve()};return{update:D,flush:_}}function k(e){return JSON.stringify(e)}function q(e){var t=e.transforms||[],r="".concat(e.keyPrefix!==void 0?e.keyPrefix:R).concat(e.key),n=e.storage;e.debug;var i;return e.deserialize===!1?i=function(y){return y}:typeof e.deserialize=="function"?i=e.deserialize:i=Q,n.getItem(r).then(function(s){if(s)try{var y={},c=i(s);return Object.keys(c).forEach(function(f){y[f]=t.reduceRight(function(a,p){return p.out(a,f,c)},i(c[f]))}),y}catch(f){throw f}else return})}function Q(e){return JSON.parse(e)}function Z(e){var t=e.storage,r="".concat(e.keyPrefix!==void 0?e.keyPrefix:R).concat(e.key);return t.removeItem(r,ee)}function ee(e){}function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?z(r,!0).forEach(function(n){re(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(r).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function re(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function te(e,t){if(e==null)return{};var r=ne(e,t),n,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(r[n]=e[n]))}return r}function ne(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,s;for(s=0;s<n.length;s++)i=n[s],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}var ie=5e3;function de(e,t){var r=e.version!==void 0?e.version:C;e.debug;var n=e.stateReconciler===void 0?V:e.stateReconciler,i=e.getStoredState||q,s=e.timeout!==void 0?e.timeout:ie,y=null,c=!1,f=!0,a=function(u){return u._persist.rehydrated&&y&&!f&&y.update(u),u};return function(p,u){var d=p||{},v=d._persist,D=te(d,["_persist"]),O=D;if(u.type===W){var w=!1,m=function(x,P){w||(u.rehydrate(e.key,x,P),w=!0)};if(s&&setTimeout(function(){!w&&m(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))},s),f=!1,y||(y=X(e)),v)return b({},t(O,u),{_persist:v});if(typeof u.rehydrate!="function"||typeof u.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return u.register(e.key),i(e).then(function(g){var x=e.migrate||function(P,ce){return Promise.resolve(P)};x(g,r).then(function(P){m(P)},function(P){m(void 0,P)})},function(g){m(void 0,g)}),b({},t(O,u),{_persist:{version:r,rehydrated:!1}})}else{if(u.type===G)return c=!0,u.result(Z(e)),b({},t(O,u),{_persist:v});if(u.type===H)return u.result(y&&y.flush()),b({},t(O,u),{_persist:v});if(u.type===L)f=!0;else if(u.type===T){if(c)return b({},O,{_persist:b({},v,{rehydrated:!0})});if(u.key===e.key){var E=t(O,u),_=u.payload,o=n!==!1&&_!==void 0?n(_,p,E,e):E,h=b({},o,{_persist:b({},v,{rehydrated:!0})});return a(h)}}}if(!v)return t(p,u);var l=t(O,u);return l===O?p:a(b({},l,{_persist:v}))}}function S(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?S=function(r){return typeof r}:S=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},S(e)}function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?U(r,!0).forEach(function(n){ue(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(r).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ue(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ve(e,t,r,n){n.debug;var i=$({},r);return e&&S(e)==="object"&&Object.keys(e).forEach(function(s){if(s!=="_persist"&&t[s]===r[s]){if(se(r[s])){i[s]=$({},i[s],{},e[s]);return}i[s]=e[s]}}),i}function se(e){return e!==null&&!Array.isArray(e)&&S(e)==="object"}function F(e){return fe(e)||oe(e)||ae()}function ae(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function oe(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function fe(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?K(r,!0).forEach(function(n){le(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(r).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function le(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var M={registry:[],bootstrapped:!1},pe=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:M,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case N:return I({},t,{registry:[].concat(F(t.registry),[r.key])});case T:var n=t.registry.indexOf(r.key),i=F(t.registry);return i.splice(n,1),I({},t,{registry:i,bootstrapped:i.length===0});default:return t}};function Oe(e,t,r){var n=r||!1,i=Y(pe,M,t&&t.enhancer?t.enhancer:void 0),s=function(a){i.dispatch({type:N,key:a})},y=function(a,p,u){var d={type:T,payload:p,err:u,key:a};e.dispatch(d),i.dispatch(d),n&&c.getState().bootstrapped&&(n(),n=!1)},c=I({},i,{purge:function(){var a=[];return e.dispatch({type:G,result:function(u){a.push(u)}}),Promise.all(a)},flush:function(){var a=[];return e.dispatch({type:H,result:function(u){a.push(u)}}),Promise.all(a)},pause:function(){e.dispatch({type:L})},persist:function(){e.dispatch({type:W,register:s,rehydrate:y})}});return t&&t.manualPersist||c.persist(),c}export{H as F,L as P,T as R,Oe as a,ve as b,W as c,G as d,N as e,de as p};