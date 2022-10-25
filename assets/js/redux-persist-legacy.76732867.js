System.register(["./react-redux-legacy.4210a093.js"],(function(e,t){"use strict";var r;return{setters:[e=>{r=e.c}],execute:function(){e({a:function(e,t,a){var f=a||!1,p=r(S,k,t&&t.enhancer?t.enhancer:void 0),l=function(e){p.dispatch({type:s,key:e})},y=function(t,r,n){var o={type:i,payload:r,err:n,key:t};e.dispatch(o),p.dispatch(o),f&&d.getState().bootstrapped&&(f(),f=!1)},d=m({},p,{purge:function(){var t=[];return e.dispatch({type:u,result:function(e){t.push(e)}}),Promise.all(t)},flush:function(){var t=[];return e.dispatch({type:n,result:function(e){t.push(e)}}),Promise.all(t)},pause:function(){e.dispatch({type:o})},persist:function(){e.dispatch({type:c,register:l,rehydrate:y})}});return t&&t.manualPersist||d.persist(),d},p:function(e,r){var s=void 0!==e.version?e.version:-1;e.debug;var a=void 0===e.stateReconciler?l:e.stateReconciler,f=e.getStoredState||d,p=void 0!==e.timeout?e.timeout:5e3,b=null,O=!1,g=!0,P=function(e){return e._persist.rehydrated&&b&&!g&&b.update(e),e};return function(l,d){var j=l||{},m=j._persist,w=function(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}(j,["_persist"]);if(d.type===c){var k=!1,S=function(t,r){k||(d.rehydrate(e.key,t,r),k=!0)};if(p&&setTimeout((function(){!k&&S(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(e.key,'"')))}),p),g=!1,b||(b=function(e){var r,n=e.blacklist||null,i=e.whitelist||null,o=e.transforms||[],c=e.throttle||0,u="".concat(void 0!==e.keyPrefix?e.keyPrefix:t).concat(e.key),s=e.storage;r=!1===e.serialize?function(e){return e}:"function"==typeof e.serialize?e.serialize:y;var a=e.writeFailHandler||null,f={},p={},l=[],d=null,b=null,h=function(e){Object.keys(e).forEach((function(t){g(t)&&f[t]!==e[t]&&-1===l.indexOf(t)&&l.push(t)})),Object.keys(f).forEach((function(t){void 0===e[t]&&g(t)&&-1===l.indexOf(t)&&void 0!==f[t]&&l.push(t)})),null===d&&(d=setInterval(O,c)),f=e};function O(){if(0===l.length)return d&&clearInterval(d),void(d=null);var e=l.shift(),t=o.reduce((function(t,r){return r.in(t,e,f)}),f[e]);if(void 0!==t)try{p[e]=r(t)}catch(n){console.error("redux-persist/createPersistoid: error serializing state",n)}else delete p[e];0===l.length&&v()}function v(){Object.keys(p).forEach((function(e){void 0===f[e]&&delete p[e]})),b=s.setItem(u,r(p)).catch(P)}function g(e){return!(i&&-1===i.indexOf(e)&&"_persist"!==e||n&&-1!==n.indexOf(e))}function P(e){a&&a(e)}return{update:h,flush:function(){for(;0!==l.length;)O();return b||Promise.resolve()}}}(e)),m)return v({},r(w,d),{_persist:m});if("function"!=typeof d.rehydrate||"function"!=typeof d.register)throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return d.register(e.key),f(e).then((function(t){(e.migrate||function(e,t){return Promise.resolve(e)})(t,s).then((function(e){S(e)}),(function(e){S(void 0,e)}))}),(function(e){S(void 0,e)})),v({},r(w,d),{_persist:{version:s,rehydrated:!1}})}if(d.type===u)return O=!0,d.result(function(e){var r=e.storage,n="".concat(void 0!==e.keyPrefix?e.keyPrefix:t).concat(e.key);return r.removeItem(n,h)}(e)),v({},r(w,d),{_persist:m});if(d.type===n)return d.result(b&&b.flush()),v({},r(w,d),{_persist:m});if(d.type===o)g=!0;else if(d.type===i){if(O)return v({},w,{_persist:v({},m,{rehydrated:!0})});if(d.key===e.key){var E=r(w,d),x=d.payload,D=v({},!1!==a&&void 0!==x?a(x,l,E,e):E,{_persist:v({},m,{rehydrated:!0})});return P(D)}}if(!m)return r(l,d);var _=r(w,d);return _===w?l:P(v({},_,{_persist:m}))}}});var t="persist:",n=e("F","persist/FLUSH"),i=e("R","persist/REHYDRATE"),o=e("P","persist/PAUSE"),c=e("b","persist/PERSIST"),u=e("c","persist/PURGE"),s=e("d","persist/REGISTER");function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t,r,n){n.debug;var i=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r);return e&&"object"===a(e)&&Object.keys(e).forEach((function(n){"_persist"!==n&&t[n]===r[n]&&(i[n]=e[n])})),i}function y(e){return JSON.stringify(e)}function d(e){var r,n=e.transforms||[],i="".concat(void 0!==e.keyPrefix?e.keyPrefix:t).concat(e.key),o=e.storage;return e.debug,r=!1===e.deserialize?function(e){return e}:"function"==typeof e.deserialize?e.deserialize:b,o.getItem(i).then((function(e){if(e)try{var t={},i=r(e);return Object.keys(i).forEach((function(e){t[e]=n.reduceRight((function(t,r){return r.out(t,e,i)}),r(i[e]))})),t}catch(o){throw o}}))}function b(e){return JSON.parse(e)}function h(e){}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(r,!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(r,!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var k={registry:[],bootstrapped:!1},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return m({},e,{registry:[].concat(P(e.registry),[t.key])});case i:var r=e.registry.indexOf(t.key),n=P(e.registry);return n.splice(r,1),m({},e,{registry:n,bootstrapped:0===n.length});default:return e}}}}}));
