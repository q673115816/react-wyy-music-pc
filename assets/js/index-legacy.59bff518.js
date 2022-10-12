System.register(["./react-legacy.b3bc90c5.js","./index-legacy.037d9cda.js","./react-router-dom-legacy.2933718f.js","./@tabler/icons-legacy.c07ea112.js","./qrcode.react-legacy.685a2ddb.js","./lodash-legacy.4434829e.js","./react-dom-legacy.c211300b.js","./react-use-legacy.21ff61d7.js"],(function(e,t){"use strict";var r,n,o,i,a,l,s,c,u,d,h,m,f,p,v,y,g,b,w,x,k,N,E,_,j;return{setters:[e=>{r=e.r,n=e.t},e=>{o=e.af,i=e.ax,a=e.ay,l=e.az,s=e.aA,c=e.d,u=e.aB,d=e.L},e=>{h=e.L},e=>{m=e.p,f=e.Q,p=e.v,v=e.u,y=e.M,g=e.E,b=e.w,w=e.at},e=>{x=e.a,k=e.j,N=e.F},e=>{e.c,E=e.g},e=>{_=e.r},e=>{j=e.t}],execute:function(){const t=r.exports.memo((({item:e})=>e?x(o,{id:e.id,className:"bg-gray-100 hover:bg-gray-200 flex w-full mt-2 rounded p-2.5",children:[x("div",{className:"relative overflow-hidden rounded flex-none",children:[k("img",{className:"rounded w-10 h-10",src:`${e.album.blurPicUrl}?param=40y40`,alt:""}),k("div",{className:"ico flex-center absolute inset-0 m-auto bg-white rounded-full w-6 h-6 ui_themeColor",children:k(m,{size:14,className:"fill-current"})})]}),x("div",{className:"aside text-left px-3 w-0 flex-auto",children:[k("div",{className:"name",children:e.name}),k("div",{className:"artist truncate mt-1 text-gray-400",children:e.artists.map((({name:e})=>e)).join(" / ")})]})]}):null));var C={exports:{}};!function(e,t){var r;r=function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./src/index.js")}({"./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
      	  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
      	  \**********************************************************/
/*! no static exports found */function(e,t,r){e.exports=r(/*! regenerator-runtime */"./node_modules/regenerator-runtime/runtime.js")},"./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
      	  !*** ./node_modules/regenerator-runtime/runtime.js ***!
      	  \*****************************************************/
/*! no static exports found */function(e,t,r){var n=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(R){s=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var o=t&&t.prototype instanceof v?t:v,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(e,t,r){var n=d;return function(o,i){if(n===m)throw new Error("Generator is already running");if(n===f){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var l=_(a,r);if(l){if(l===p)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=f,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=m;var s=u(e,t,r);if("normal"===s.type){if(n=r.done?f:h,s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=f,r.method="throw",r.arg=s.arg)}}}(e,r,a),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(R){return{type:"throw",arg:R}}}e.wrap=c;var d="suspendedStart",h="suspendedYield",m="executing",f="completed",p={};function v(){}function y(){}function g(){}var b={};s(b,i,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(O([])));x&&x!==r&&n.call(x,i)&&(b=x);var k=g.prototype=v.prototype=Object.create(b);function N(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(o,i,a,l){var s=u(e[o],e,i);if("throw"!==s.type){var c=s.arg,d=c.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,a,l)}),(function(e){r("throw",e,a,l)})):t.resolve(d).then((function(e){c.value=e,a(c)}),(function(e){return r("throw",e,a,l)}))}l(s.arg)}var o;this._invoke=function(e,n){function i(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(i,i):i()}}function _(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=u(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var i=o.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function O(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:S}}function S(){return{value:t,done:!0}}return y.prototype=g,s(k,"constructor",g),s(g,"constructor",y),y.displayName=s(g,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,s(e,l,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},N(E.prototype),s(E.prototype,a,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new E(c(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},N(k),s(k,l,"Generator"),s(k,i,(function(){return this})),s(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(C),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return l.type="throw",l.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],l=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),C(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;C(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),p}},e}(e.exports);try{regeneratorRuntime=n}catch(o){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},"./src/exception.js":
/*!**************************!*\
      	  !*** ./src/exception.js ***!
      	  \**************************/
/*! exports provided: DownloadException, downloadException */function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function i(e){var t="function"==typeof Map?new Map:void 0;return i=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return a(e,arguments,c(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s(n,e)},i(e)}function a(e,t,r){return a=l()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return r&&s(o,r.prototype),o},a.apply(null,arguments)}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}r.r(t),r.d(t,"DownloadException",(function(){return u})),r.d(t,"downloadException",(function(){return d}));var u=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(i,e);var t,r,n=(t=i,r=l(),function(){var e,n=c(t);if(r){var i=c(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return o(this,e)});function i(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(r=n.call(this,"Downloader error: ".concat(e))).request=t,r.name="DownloadException",r}return i}(i(Error)),d=u},"./src/index.js":
/*!**********************!*\
      	  !*** ./src/index.js ***!
      	  \**********************/
/*! exports provided: default */function(e,t,r){r.r(t);var n=r(/*! @babel/runtime/regenerator */"./node_modules/@babel/runtime/regenerator/index.js"),o=r.n(n),i=r(/*! ./exception */"./src/exception.js"),a=r(/*! ./signatures */"./src/signatures.js");
/*!
      	 * JS File Downloader v 1.1.24
      	 * https://github.com/AleeeKoi/js-file-downloader
      	 *
      	 * Copyright Alessandro Pellizzari
      	 * Released under the MIT license
      	 * http://opensource.org/licenses/MIT
      	 */
function l(e,t,r,n,o,i,a){try{var l=e[i](a),s=l.value}catch(c){return void r(c)}l.done?t(s):Promise.resolve(s).then(n,o)}function s(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){l(i,n,o,a,s,"next",e)}function s(e){l(i,n,o,a,s,"throw",e)}a(void 0)}))}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var d={timeout:4e4,headers:[],forceDesktopMode:!1,autoStart:!0,withCredentials:!1,method:"GET",nameCallback:function(e){return e},contentType:"application/x-www-form-urlencoded",body:null,nativeFallbackOnError:!1,contentTypeDetermination:!1},h=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return c(this,e),this.params=Object.assign({},d,t),this.link=this.createLink(),this.request=null,this.downloadedFile=null,this.params.autoStart?this.downloadFile():this}var t,r,n,l,h;return t=e,r=[{key:"start",value:function(){return this.downloadFile()}},{key:"downloadFile",value:function(){var e=this;return new Promise((function(t,r){e.initDownload(t,r)}))}},{key:"initDownload",value:function(e,t){var r=this,n=function(){r.link.target="_blank",r.link.href=r.params.url,r.clickLink()};return!("download"in this.link)||this.isMobile()?(n(),e()):(this.request=this.createRequest(),this.params.url?(this.request.onload=s(o.a.mark((function n(){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(200===parseInt(r.request.status,10)){n.next=2;break}return n.abrupt("return",t(new i.DownloadException("status code [".concat(r.request.status,"]"),r.request)));case 2:return n.next=4,r.startDownload();case 4:return n.abrupt("return",e(r));case 5:case"end":return n.stop()}}),n)}))),this.request.ontimeout=function(){t(new i.DownloadException("request timeout",r.request))},this.request.onerror=function(){r.params.nativeFallbackOnError?(n(),e(r)):t(new i.DownloadException("network error",r.request))},this.request.send(this.params.body),this):t(new i.DownloadException("url param not defined!",this.request)))}},{key:"isMobile",value:function(){return!this.params.forceDesktopMode&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},{key:"createRequest",value:function(){var e=new XMLHttpRequest;return e.open(this.params.method,this.params.url,!0),!1!==this.params.contentType&&e.setRequestHeader("Content-type",this.params.contentType),this.params.headers.forEach((function(t){e.setRequestHeader(t.name,t.value)})),e.responseType="arraybuffer",this.params.process&&"function"==typeof this.params.process&&e.addEventListener("progress",this.params.process),this.params.onloadstart&&"function"==typeof this.params.onloadstart&&(e.onloadstart=this.params.onloadstart),e.timeout=this.params.timeout,e.withCredentials=!!this.params.withCredentials||!!this.params.includeCredentials,e}},{key:"getFileName",value:function(){if("string"==typeof this.params.filename)return this.params.filename;var e=this.request.getResponseHeader("Content-Disposition"),t=[];e&&(t=e.replace(/["']/g,"").match(/filename\*?=([^;]+)/));var r=t&&t.length>=1?t[1]:this.params.url.split("/").pop().split("?")[0];return this.params.nameCallback(r)}},{key:"getContentTypeFromFileSignature",value:function(e){var t=Object.assign({},a.fileSignatures,this.params.customFileSignatures);return new Promise((function(r,n){var o=new FileReader,i=e.slice(0,4);o.onloadend=function(e){if(e.target.readyState===FileReader.DONE){var o=new Uint8Array(e.target.result),i=[];o.forEach((function(e){i.push(e.toString(16))}));var a=i.join("").toUpperCase();r(t[a])}else n()},o.onerror=n,o.readAsArrayBuffer(i)}))}},{key:"getContentTypeFromResponseHeader",value:function(){return this.request.getResponseHeader("content-type")}},{key:"getContentType",value:function(e){var t=this;return new Promise(function(){var r=s(o.a.mark((function r(n){var i,a,l,s,c,u,d,h;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(i=t.params.contentTypeDetermination,a="application/octet-stream","header"!==i&&"full"!==i||(l=t.getContentTypeFromResponseHeader()),"signature"!==i&&"full"!==i){r.next=7;break}return r.next=6,t.getContentTypeFromFileSignature(new Blob([e]));case 6:s=r.sent;case 7:n("header"===i?null!==(c=l)&&void 0!==c?c:a:"signature"===i?null!==(u=s)&&void 0!==u?u:a:"full"===i&&null!==(d=null!==(h=s)&&void 0!==h?h:l)&&void 0!==d?d:a);case 8:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())}},{key:"createLink",value:function(){var e=document.createElement("a");return e.style.display="none",e}},{key:"clickLink",value:function(){var e;try{e=new MouseEvent("click")}catch(t){(e=document.createEvent("MouseEvent")).initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null)}this.link.dispatchEvent(e)}},{key:"getFile",value:(h=s(o.a.mark((function e(t,r){var n,i,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getContentType(t);case 2:n=e.sent,a={type:n};try{i=new File([t],r,a)}catch(o){(i=new Blob([t],a)).name=r,i.lastModifiedDate=new Date}return e.abrupt("return",i);case 6:case"end":return e.stop()}}),e,this)}))),function(e,t){return h.apply(this,arguments)})},{key:"startDownload",value:(l=s(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.getFileName(),e.next=3,this.getFile(this.request.response,t);case 3:if(this.downloadedFile=e.sent,!("msSaveOrOpenBlob"in window.navigator)){e.next=6;break}return e.abrupt("return",window.navigator.msSaveOrOpenBlob(this.downloadedFile,t));case 6:return r=window.URL.createObjectURL(this.downloadedFile),this.link.href=r,this.link.download=t,this.clickLink(),setTimeout((function(){(window.URL||window.webkitURL||window).revokeObjectURL(r)}),4e4),e.abrupt("return",this.downloadedFile);case 12:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)})}],r&&u(t.prototype,r),n&&u(t,n),e}();t.default=h},"./src/signatures.js":
/*!***************************!*\
      	  !*** ./src/signatures.js ***!
      	  \***************************/
/*! exports provided: fileSignatures */function(e,t,r){r.r(t),r.d(t,"fileSignatures",(function(){return n}));var n={"89504E47":"image/png",25504446:"application/pdf"}}}).default},e.exports=r()}(C);const L=E(C.exports);var O=i.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  ${e=>!e.only&&a`
      aspect-ratio: 1 / 1;
    `}
`,S=i.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  flex-direction: column;
  justify-content: center;
  ${e=>a`
    display: ${e.hidden?"none":"flex"};
  `}
`,R=i.div`
  display: grid;
  grid-template: 1fr / repeat(12, 1fr);
`,F={1:"span 12 / span 12",2:"span 6 / span 6",3:"span 4 / span 4",4:"span 3 / span 3"},T=i.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 1rem;
  ${e=>a`
    grid-column: ${(({length:e,index:t})=>{if(e%3==0)return F[3];if(e<3)return F[e];let r=e>>1;return F[r+(e%2==1&&t>=r?1:0)]})(e)};
  `}
`,$=i.div`
  padding: 0 10px;
  cursor: pointer;
  display: flex;
`,P=i.div`
  cursor: pointer;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  ${e=>a`
    background-color: ${e.active?"red":"gray"};
  `}
`,D=i.img`
  margin: auto;
  display: block;
  cursor: zoom-out;
  min-width: 5rem;
  min-height: 5rem;
  max-width: 60%;
`,I=i.div`
  position: relative;
  margin-bottom: 1rem;
`,q=i.div`
  width: min-content;
  margin: 1rem auto;
  display: flex;
  gap: 0.5rem;
`,M=i.div`
  background-color: rgb(243, 244, 246);
  border-radius: 0.25rem;
  overflow: hidden;
`,z=i.div`
  display: flex;
  padding: 0.5rem;
`,U=i.div`
  position: relative;
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    width: 1px;
    height: 12px;
    background-color: #dadadb;
  }
`,B=({size:e=50})=>k("svg",{viewBox:"0 0 1024 1024",width:e,height:e,children:k("path",{d:"M670.978 808.954c-5.3 0-10.597-2.045-14.604-6.126L368.69 509.868c-7.818-7.962-7.818-20.718 0-28.68l287.684-292.96c7.92-8.066 20.878-8.182 28.942-.263 8.066 7.92 8.183 20.877.264 28.942l-273.603 278.62 273.603 278.62c7.919 8.065 7.802 21.023-.264 28.943a20.399 20.399 0 0 1-14.338 5.864z",fill:"#fff"})}),H=({size:e=50})=>k("svg",{viewBox:"0 0 1024 1024",width:e,height:e,children:k("path",{d:"M383.292 808.954a20.401 20.401 0 0 1-14.339-5.862c-8.065-7.92-8.182-20.878-.263-28.942l273.602-278.621L368.69 216.907c-7.92-8.065-7.802-21.023.263-28.942 8.066-7.918 21.023-7.803 28.942.263l287.685 292.96c7.818 7.962 7.818 20.718 0 28.68L397.895 802.826a20.404 20.404 0 0 1-14.603 6.127z",fill:"#fff"})}),A=i.div`
  position: absolute;
  inset: 0;
  z-index: 99;
  display: flex;
`,G=i.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
`,Y=i.div`
  position: absolute;
  cursor: pointer;
  top: 1rem;
  right: 1rem;
  color: #fff;
  font-size: 2rem;
`,J=i.div`
  display: flex;
  overflow: auto;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
`,Q=i.div`
  position: relative;
  max-width: 80%;
`,X=i.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  ${e=>e.dir&&a`
      ${e.dir}: 0;
    `}
`,K=i.img`
  display: block;
  max-width: 100%;
  object-fit: scale-down;
`,V=i.div`
  position: absolute;
  top: 0;
  bottom: 0;
  height: min-content;
  margin: auto 1rem;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #000;
  ${e=>a`
    ${e.dir}: 0;
  `}
`,W=i.div`
  position: absolute;
  bottom: 10%;
  right: 0;
  left: 0;
  width: min-content;
  margin: auto;
  padding: 0.8em 1.6em;
  color: gray;
  border-radius: 0.25rem;
  white-space: nowrap;
  background-color: rgba(0, 0, 0, 0.6);
  &:hover {
    background-color: #000;
  }
`,Z=r.exports.memo((({srcList:e,detail:t,detailControl:r})=>n.createElement(A,null,k(G,{onClick:()=>r.reset()}),k(Y,{onClick:()=>r.reset(),children:"×"}),k(V,{dir:"left",onClick:()=>r.dec(),children:k(B,{size:25})}),k(V,{dir:"right",onClick:()=>r.inc(),children:k(H,{size:25})}),n.createElement(J,null,n.createElement(Q,null,n.createElement(X,{dir:"left",onClick:()=>r.dec()}),n.createElement(X,{dir:"right",onClick:()=>r.inc()}),n.createElement(K,{src:e[t].originUrl,onClick:e=>{console.log(e)},alt:""}))),x(W,{children:[t+1,"/",e.length," |",k("span",{style:{cursor:"pointer"},onClick:()=>(async e=>await new L({url:e}).catch((e=>{console.log(e)})))(e[t].originUrl),children:"下载"})]})))),ee=r.exports.memo((({srcList:e,value:t,control:r,className:o,el:i=""})=>{let[a,l]=j(-1,e.length,-1),s=i&&document.querySelector(i)||document.body;return n.createElement(M,{className:o},n.createElement(z,null,n.createElement(U,null,n.createElement($,{onClick:()=>r.reset()},"收起")),n.createElement(U,null,n.createElement($,{onClick:()=>l.set(t)},"查看大图")),n.createElement(U,null,n.createElement($,{onClick:()=>(async e=>await new L({url:e}).catch((e=>{console.log(e)})))(e[t].originUrl)},"下载"))),n.createElement(I,null,n.createElement(S,{dir:"left",hidden:0===t,onClick:()=>r.dec()}),k(D,{onClick:()=>r.reset(),src:e[t].originUrl,alt:""}),n.createElement(S,{dir:"right",hidden:!1,onClick:()=>r.inc()})),e.length>1&&k(q,{children:e.map(((e,n)=>k(P,{onClick:()=>r.set(n),active:t===n},n)))}),a>=0&&a<e.length&&_.exports.createPortal(n.createElement(Z,{srcList:e,detail:a,detailControl:l}),s))})),te=r.exports.memo((({gap:e,width:t,className:r,srcList:o,value:i,control:a})=>{let{length:l}=o;return k(R,{style:{gap:e,width:t},className:r,children:o.map(((e,t)=>n.createElement(T,{length:l,index:t,key:e.originUrl,onClick:()=>a.set(t)},n.createElement(O,{loading:"lazy",src:e.originUrl,only:1===l}))))})})),re=e=>("number"==typeof e&&(e=String(e)+"px"),e),ne=r.exports.memo((({srcList:e=[],gap:t="0.25rem",width:r=370,className:n="",el:o=""})=>{if(!e.length)return null;let i=e.slice(0,9),{length:a}=i,[l,s]=j(-1,a-1,-1);return t=re(t),r=re(r),l>=0?k(ee,{srcList:i,className:n,value:l,control:s,el:o}):k(te,{srcList:i,value:l,control:s,className:n,gap:t,width:r})}));const oe=r.exports.memo((({item:e})=>e?x(h,{to:`/artist/${e.id}`,className:"mt-2 flex items-center p-2 h-14 rounded bg-gray-100 hover:bg-gray-200",children:[k("div",{className:"w-10 h-10 rounded",children:k("img",{src:e.img80x80,className:"rounded w-full h-full object-cover",alt:""})}),k("div",{className:"px-3",children:`歌手：${e.name}`})]}):null)),ie=({handleCheck:e})=>{const[t,n]=r.exports.useState(!1);return x("div",{className:"relative",children:[k("button",{onClick:()=>n(!t),type:"button",className:"block ui_text_black_hover",children:k(v,{size:20,stroke:1})}),t&&k("div",{className:"absolute mt-2 left-0",children:k(l,{handleHide:()=>n(!1),handleCheck:e})})]})},ae=r.exports.memo((()=>{r.exports.useState("");const e=r.exports.useRef(window.getSelection()),t=r.exports.useRef(),n=r.exports.useRef(null);return r.exports.useEffect((()=>{}),[]),x("div",{className:"write",children:[k("div",{ref:n,contentEditable:"true",className:"h-20 border bg-white rounded focus:outline-none px-3 py-1",onSelect:()=>{t.current=e.current.getRangeAt(0),console.log(t),t.current}}),x("div",{className:"help flex mt-2",children:[x("div",{className:"flex space-x-2 items-center",children:[k(ie,{handleCheck:e=>{document.execCommand("insertText",!1,e)}}),k("button",{type:"button",className:"ui_text_black_hover",children:k(f,{size:20,stroke:1})}),k("button",{type:"button",className:"ui_text_black_hover",children:k(p,{size:20,stroke:1})})]}),k("button",{className:"ml-auto border border-gray-400 px-4 py-1 rounded-full hover:bg-gray-300",type:"button",children:"评论"})]})]})})),le=r.exports.memo((({comment:e})=>x("div",{className:"flex py-4 px-3",children:[k(h,{to:`/user/${e.user.userId}`,className:"avatar w-10 h-10 rounded-full border flex-none",children:k("img",{className:"rounded-full w-full h-full",src:`${e.user.avatarUrl}?param=40y40`,alt:""})}),x("div",{className:"commentContent flex-1 pl-3 select-text",children:[x("div",{className:"",children:[k(h,{to:`/user/${e.user.userId}`,className:"ui_link",children:`${e.user.nickname}：`}),k(s,{text:e.content})]}),e.beReplied.length>0&&x("div",{className:"bg-white px-2 py-1 mt-2 rounded",children:[x(h,{to:`/user/${e.beReplied[0].user.userId}`,className:"ui_link",children:["@",e.beReplied[0].user.nickname,"："]}),k("span",{className:"text-gray-500",children:k(s,{text:e.beReplied[0].content})})]}),k("div",{className:"mt-2",children:k("span",{className:"text-gray-300",children:c(e.time).format("YYYY年MM月DD日 HH:mm:ss")})})]})]},e.commentId))),se=r.exports.memo((({threadId:e})=>{const{data:t,isLoading:r}=u({threadId:e}),{comments:n=[],hotComments:o=[]}=t||{};return r?k(d,{}):x(N,{children:[o.length>0&&x(N,{children:[k("div",{className:"text-sm px-3 text-gray-500 font-bold",children:"精彩评论"}),k("div",{className:"divide-y",children:o.slice(0,10).map((e=>k(le,{comment:e},e.commentId)))})]}),n.length>0?x(N,{children:[x("div",{className:"text-sm px-3 text-gray-500 font-bold",children:["最新评论",`(${n.length})`]}),k("div",{className:"divide-y",children:n.slice(0,10).map((e=>k(le,{comment:e},e.commentId)))})]}):k("div",{className:"flex-center py-10 text-gray-500",children:"还没有评论哦，快来抢沙发~"})]})})),ce=r.exports.memo((({threadId:e})=>x("div",{className:"comment bg-gray-100 mt-3 rounded",children:[k("div",{className:"p-3",children:k(ae,{})}),k(se,{threadId:e})]}))),ue={18:"分享单曲",36:"分享歌手"},de=r.exports.memo((({item:e={},commentIsShow:r,handleToggleComment:n})=>{const o=JSON.parse(e.json);return 33===e.type?k("div",{className:"py-5 px-12",children:x("div",{className:"relative rounded-xl overflow-hidden",children:[k("img",{src:o.coverPCUrl,alt:""}),x("div",{className:"absolute border-b border-opacity-20 border-t border-white flex-center h-20 inset-0 m-auto text-center text-white w-min whitespace-nowrap",children:[k("div",{className:"text-xl",children:`#${o.title}#`}),k("div",{className:"-translate-y-1/2 absolute top-full transform",children:`${o.participateCount}参与`})]})]})}):x("div",{className:"ui_event_item py-5 flex",children:[x(h,{to:`/user/${e.user.userId}`,className:"avatar flex-none w-10 h-10 relative border rounded-full",children:[k("img",{className:"rounded-full",src:`${e.user.avatarUrl}?param=40y40`,alt:""}),e?.user?.avatarDetail?.identityIconUrl&&k("img",{className:"absolute bottom-0 right-0 w-3.5 h-3.5",src:e.user.avatarDetail.identityIconUrl,alt:""})]}),x("div",{className:"content ml-2.5 flex-auto",children:[x("div",{className:"name",children:[k(h,{className:"ui_link",to:`/user/${e.user.userId}`,children:e.user.nickname})," ",k("span",{className:"text-gray-500",children:ue[e.type]})]}),k("div",{className:"time mt-2",children:k(h,{to:`/comment/event/${e.id}`,className:"ui_text_gray_hover",children:c(e.showTime).format("MM月DD日 HH:mm")})}),x("div",{className:"article",children:[k("div",{className:"text whitespace-pre-line text-sm mt-2.5",children:o.msg&&k(s,{text:o.msg})}),k(oe,{item:o.resource}),k(t,{item:o.song}),k(ne,{className:"mt-2.5",el:"#inset",srcList:e.pics}),x("div",{className:"info flex mt-2.5",children:[k("div",{className:"left text-gray-400",children:e?.rcmdInfo?.reason&&`--${e.rcmdInfo.reason}`}),x("div",{className:"right ml-auto divide-x flex",children:[k("div",{className:"px-3",children:x("button",{type:"button",className:"action ui_text_gray_hover flex-center",children:[k(y,{size:16}),e.info.likedCount>0&&`(${e.info.likedCount})`]})}),k("div",{className:"px-3",children:x("button",{type:"button",className:"action ui_text_gray_hover flex-center",children:[k(g,{size:16})," ",e.info.shareCount>0&&`(${e.info.shareCount})`]})}),k("div",{className:"px-3",children:x("button",{type:"button",className:"action ui_text_gray_hover flex-center",onClick:()=>n(e.info.threadId),children:[k(b,{size:16})," ",e.info.commentCount>0&&`(${e.info.commentCount})`]})}),k("div",{className:"px-3",children:k("button",{type:"button",className:"action ui_text_gray_hover flex-center",children:k(w,{size:16})})})]})]}),r&&k(ce,{threadId:e.info.threadId})]})]})]})}));e("D",r.exports.memo((({list:e=[]})=>{const[t,n]=r.exports.useState(""),o=r.exports.useCallback((e=>{n((t=>t===e?null:e))}),[]);return k("div",{className:"divide-y",children:e.map((e=>k(de,{item:e,commentIsShow:t===e.info.threadId,handleToggleComment:o},e.id)))})})))}}}));
