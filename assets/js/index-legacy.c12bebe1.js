!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(k){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=N(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=f(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}r.wrap=u;var h={};function d(){}function p(){}function y(){}var v={};s(v,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(E([])));g&&g!==n&&o.call(g,a)&&(v=g);var x=y.prototype=d.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(e,r){function n(i,a,c,l){var s=f(e[i],e,a);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==t(h)&&o.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,c,l)}),(function(t){n("throw",t,c,l)})):r.resolve(h).then((function(t){u.value=t,c(u)}),(function(t){return n("throw",t,c,l)}))}l(s.arg)}var i;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}}function N(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,N(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function E(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=y,s(x,"constructor",y),s(y,"constructor",p),p.displayName=s(y,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},r.awrap=function(t){return{__await:t}},w(b.prototype),s(b.prototype,c,(function(){return this})),r.AsyncIterator=b,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new b(u(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),s(x,l,"Generator"),s(x,a,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},r.values=E,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},r}function r(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(s){return void r(s)}c.done?e(l):Promise.resolve(l).then(n,o)}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var i=document.createElement("style");i.innerHTML=".domtoplistartist_other_list .cover{height:60px;width:60px}\n",document.head.appendChild(i),System.register(["./react-legacy.132817e3.js","./react-router-dom-legacy.d30db004.js","./index-legacy.56888ea8.js","./react-slick-legacy.ee54945a.js","./qrcode.react-legacy.4058aa06.js","./react-transition-group-legacy.73cef0bd.js","./react-dom-legacy.7fe488f9.js","./react-redux-legacy.801f9a56.js","./immer-legacy.67f89522.js","./axios-legacy.e15c8cdf.js","./lodash-legacy.f584c299.js","./store-legacy.4efcd8f3.js","./@tabler/icons-legacy.18d20b1f.js","./react-use-legacy.0040e9dc.js"],(function(t){"use strict";var o,i,a,c,l,s,u,f,h,d;return{setters:[function(t){o=t.r},function(t){i=t.N,a=t.L,c=t.R,l=t.c},function(t){s=t.d,u=t.l},function(t){f=t.c},function(t){h=t.a,d=t.j},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var p=[["华语","1"],["欧美","2"],["韩国","3"],["日本","4"]],y=o.exports.memo((function(t){var c=t.type,l=void 0===c?1:c,y=n(o.exports.useState([]),2),v=y[0],m=y[1],g=n(o.exports.useState(0),2),x=g[0],w=g[1],b=function(){var t,n=(t=e().mark((function t(){var r,n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u(l);case 3:r=t.sent,n=r.list,m(n.artists),w(n.updateTime),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})),function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,l,"next",t)}function l(t){r(a,o,i,c,l,"throw",t)}c(void 0)}))});return function(){return n.apply(this,arguments)}}();o.exports.useEffect((function(){b()}),[l]);var N=v.slice(0,3),j=v.slice(3);return h("div",{className:"domtoplistartist flex flex-col h-full",children:[h("div",{className:"domtoplistartist_header border-b px-8 pt-5 pb-2.5",children:[d("div",{className:"domtoplistartist_title h1",children:"云音乐歌手榜"}),h("div",{className:"flex items-baseline justify-between mt-6",children:[d("div",{className:"domtoplistartist_nav flex space-x-6",children:p.map((function(t){var e=n(t,2),r=e[0],o=e[1];return d(i,{className:function(t){var e=t.isActive;return f("text-sm",e&&"font-bold")},to:o,children:r},r)}))}),h("div",{className:"text-gray-400",children:["更新时间：",s(x).format("MM月DD日")]})]})]}),h("div",{className:"overflow-auto h-full pb-10",children:[d("div",{className:"domtoplistartist_top3_list py-5 px-8 grid grid-cols-3 gap-x-5",children:N.map((function(t,e){return h(a,{className:"domtoplistartist_top3_link rounded-lg overflow-hidden bg-gray-50 hover:bg-gray-100 flex relative",to:"/artist/".concat(t.id),style:{height:100},children:[d("div",{className:"absolute text-red-300 text-4xl",children:e+1}),h("div",{className:"flex-auto flex flex-col justify-center pl-8",children:[d("div",{className:"text-sm",children:t.name}),h("div",{className:"score text-gray-400 mt-2",children:["热度：",t.score]})]}),d("div",{className:"cover border",children:d("img",{src:"".concat(t.picUrl,"?param=100y100"),alt:""})})]},t.id)}))}),d("div",{className:"domtoplistartist_other_list",children:j.map((function(t,e){return h(a,{className:f("domtoplistartist_other_link flex items-center h-20 hover:bg-gray-100",{"bg-gray-50":e%2==0}),to:"/artist/".concat(t.id),children:[h("div",{className:"index flex flex-col items-center justify-center w-16 text-gray-400",children:[d("div",{className:"text-sm",children:e+4}),h("div",{children:[t.lastRank===e+3&&"-0",t.lastRank>e+3&&h("div",{children:[d("span",{className:"text-red-500",children:"↑"}),t.lastRank-e-3]}),t.lastRank<e+3&&h("div",{children:[d("span",{className:"text-blue-500",children:"↓"}),e+3-t.lastRank]})]})]}),d("div",{className:"cover rounded overflow-hidden",children:d("img",{src:"".concat(t.picUrl,"?param=100y100"),alt:""})}),d("div",{className:"name flex-auto text-sm pl-2",children:t.name}),h("div",{className:"score text-gray-400 w-32",children:["热度：",t.score]})]},t.id)}))})]})]})}));t("default",(function(){return d(c,{children:d(l,{index:!0,element:d(y,{})})})}))}}}))}();
