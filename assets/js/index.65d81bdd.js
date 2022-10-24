import{r as D,t as O}from"./react.0a2f695e.js";import{ae as we,aw as C,ax as K,ay as be,az as ie,d as pe,aA as xe,L as ke}from"./index.eae1ea80.js";import{L as W}from"./react-router-dom.8e5277d6.js";import{B as Ee,M as Ne,y as _e,v as Ce,Q as Se,J as Le,_ as Oe,at as De}from"./@tabler/icons.113db04b.js";import{a as x,j as n,F as te}from"./qrcode.react.84002e4a.js";import{c as Fe,g as Te}from"./lodash.f41ef0b4.js";import{r as Re}from"./react-dom.d348259d.js";import{t as me}from"./react-use.cc42aba6.js";const je=({item:e})=>e?x(we,{id:e.id,className:"bg-gray-100 hover:bg-gray-200 flex w-full mt-2 rounded p-2.5",children:[x("div",{className:"relative overflow-hidden rounded flex-none",children:[n("img",{className:"rounded w-10 h-10",src:`${e.album.blurPicUrl}?param=40y40`,alt:""}),n("div",{className:"ico flex-center absolute inset-0 m-auto bg-white rounded-full w-6 h-6 ui_themeColor",children:n(Ee,{size:14,className:"fill-current"})})]}),x("div",{className:"aside text-left px-3 w-0 flex-auto",children:[n("div",{className:"name",children:e.name}),n("div",{className:"artist truncate mt-1 text-gray-400",children:e.artists.map(({name:b})=>b).join(" / ")})]})]}):null,Pe=D.exports.memo(je);var ve={exports:{}};(function(e,b){(function(p,l){e.exports=l()})(Fe,function(){return function(y){var p={};function l(i){if(p[i])return p[i].exports;var u=p[i]={i,l:!1,exports:{}};return y[i].call(u.exports,u,u.exports,l),u.l=!0,u.exports}return l.m=y,l.c=p,l.d=function(i,u,k){l.o(i,u)||Object.defineProperty(i,u,{enumerable:!0,get:k})},l.r=function(i){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},l.t=function(i,u){if(u&1&&(i=l(i)),u&8||u&4&&typeof i=="object"&&i&&i.__esModule)return i;var k=Object.create(null);if(l.r(k),Object.defineProperty(k,"default",{enumerable:!0,value:i}),u&2&&typeof i!="string")for(var N in i)l.d(k,N,function(S){return i[S]}.bind(null,N));return k},l.n=function(i){var u=i&&i.__esModule?function(){return i.default}:function(){return i};return l.d(u,"a",u),u},l.o=function(i,u){return Object.prototype.hasOwnProperty.call(i,u)},l.p="",l(l.s="./src/index.js")}({"./node_modules/@babel/runtime/regenerator/index.js":function(y,p,l){y.exports=l("./node_modules/regenerator-runtime/runtime.js")},"./node_modules/regenerator-runtime/runtime.js":function(y,p,l){var i=function(u){var k=Object.prototype,N=k.hasOwnProperty,S,F=typeof Symbol=="function"?Symbol:{},I=F.iterator||"@@iterator",q=F.asyncIterator||"@@asyncIterator",G=F.toStringTag||"@@toStringTag";function T(r,t,s){return Object.defineProperty(r,t,{value:s,enumerable:!0,configurable:!0,writable:!0}),r[t]}try{T({},"")}catch(r){T=function(t,s,g){return t[s]=g}}function U(r,t,s,g){var h=t&&t.prototype instanceof m?t:m,L=Object.create(h.prototype),P=new V(g||[]);return L._invoke=oe(r,s,P),L}u.wrap=U;function E(r,t,s){try{return{type:"normal",arg:r.call(t,s)}}catch(g){return{type:"throw",arg:g}}}var w="suspendedStart",f="suspendedYield",o="executing",a="completed",d={};function m(){}function c(){}function v(){}var R={};T(R,I,function(){return this});var _=Object.getPrototypeOf,M=_&&_(_(Z([])));M&&M!==k&&N.call(M,I)&&(R=M);var j=v.prototype=m.prototype=Object.create(R);c.prototype=v,T(j,"constructor",v),T(v,"constructor",c),c.displayName=T(v,G,"GeneratorFunction");function J(r){["next","throw","return"].forEach(function(t){T(r,t,function(s){return this._invoke(t,s)})})}u.isGeneratorFunction=function(r){var t=typeof r=="function"&&r.constructor;return t?t===c||(t.displayName||t.name)==="GeneratorFunction":!1},u.mark=function(r){return Object.setPrototypeOf?Object.setPrototypeOf(r,v):(r.__proto__=v,T(r,G,"GeneratorFunction")),r.prototype=Object.create(j),r},u.awrap=function(r){return{__await:r}};function H(r,t){function s(L,P,$,A){var B=E(r[L],r,P);if(B.type==="throw")A(B.arg);else{var ee=B.arg,Q=ee.value;return Q&&typeof Q=="object"&&N.call(Q,"__await")?t.resolve(Q.__await).then(function(Y){s("next",Y,$,A)},function(Y){s("throw",Y,$,A)}):t.resolve(Q).then(function(Y){ee.value=Y,$(ee)},function(Y){return s("throw",Y,$,A)})}}var g;function h(L,P){function $(){return new t(function(A,B){s(L,P,A,B)})}return g=g?g.then($,$):$()}this._invoke=h}J(H.prototype),T(H.prototype,q,function(){return this}),u.AsyncIterator=H,u.async=function(r,t,s,g,h){h===void 0&&(h=Promise);var L=new H(U(r,t,s,g),h);return u.isGeneratorFunction(t)?L:L.next().then(function(P){return P.done?P.value:L.next()})};function oe(r,t,s){var g=w;return function(L,P){if(g===o)throw new Error("Generator is already running");if(g===a){if(L==="throw")throw P;return se()}for(s.method=L,s.arg=P;;){var $=s.delegate;if($){var A=z($,s);if(A){if(A===d)continue;return A}}if(s.method==="next")s.sent=s._sent=s.arg;else if(s.method==="throw"){if(g===w)throw g=a,s.arg;s.dispatchException(s.arg)}else s.method==="return"&&s.abrupt("return",s.arg);g=o;var B=E(r,t,s);if(B.type==="normal"){if(g=s.done?a:f,B.arg===d)continue;return{value:B.arg,done:s.done}}else B.type==="throw"&&(g=a,s.method="throw",s.arg=B.arg)}}}function z(r,t){var s=r.iterator[t.method];if(s===S){if(t.delegate=null,t.method==="throw"){if(r.iterator.return&&(t.method="return",t.arg=S,z(r,t),t.method==="throw"))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var g=E(s,r.iterator,t.arg);if(g.type==="throw")return t.method="throw",t.arg=g.arg,t.delegate=null,d;var h=g.arg;if(!h)return t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d;if(h.done)t[r.resultName]=h.value,t.next=r.nextLoc,t.method!=="return"&&(t.method="next",t.arg=S);else return h;return t.delegate=null,d}J(j),T(j,G,"Generator"),T(j,I,function(){return this}),T(j,"toString",function(){return"[object Generator]"});function ye(r){var t={tryLoc:r[0]};1 in r&&(t.catchLoc=r[1]),2 in r&&(t.finallyLoc=r[2],t.afterLoc=r[3]),this.tryEntries.push(t)}function X(r){var t=r.completion||{};t.type="normal",delete t.arg,r.completion=t}function V(r){this.tryEntries=[{tryLoc:"root"}],r.forEach(ye,this),this.reset(!0)}u.keys=function(r){var t=[];for(var s in r)t.push(s);return t.reverse(),function g(){for(;t.length;){var h=t.pop();if(h in r)return g.value=h,g.done=!1,g}return g.done=!0,g}};function Z(r){if(r){var t=r[I];if(t)return t.call(r);if(typeof r.next=="function")return r;if(!isNaN(r.length)){var s=-1,g=function h(){for(;++s<r.length;)if(N.call(r,s))return h.value=r[s],h.done=!1,h;return h.value=S,h.done=!0,h};return g.next=g}}return{next:se}}u.values=Z;function se(){return{value:S,done:!0}}return V.prototype={constructor:V,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=S,this.done=!1,this.delegate=null,this.method="next",this.arg=S,this.tryEntries.forEach(X),!r)for(var t in this)t.charAt(0)==="t"&&N.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=S)},stop:function(){this.done=!0;var r=this.tryEntries[0],t=r.completion;if(t.type==="throw")throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var t=this;function s(A,B){return L.type="throw",L.arg=r,t.next=A,B&&(t.method="next",t.arg=S),!!B}for(var g=this.tryEntries.length-1;g>=0;--g){var h=this.tryEntries[g],L=h.completion;if(h.tryLoc==="root")return s("end");if(h.tryLoc<=this.prev){var P=N.call(h,"catchLoc"),$=N.call(h,"finallyLoc");if(P&&$){if(this.prev<h.catchLoc)return s(h.catchLoc,!0);if(this.prev<h.finallyLoc)return s(h.finallyLoc)}else if(P){if(this.prev<h.catchLoc)return s(h.catchLoc,!0)}else if($){if(this.prev<h.finallyLoc)return s(h.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(r,t){for(var s=this.tryEntries.length-1;s>=0;--s){var g=this.tryEntries[s];if(g.tryLoc<=this.prev&&N.call(g,"finallyLoc")&&this.prev<g.finallyLoc){var h=g;break}}h&&(r==="break"||r==="continue")&&h.tryLoc<=t&&t<=h.finallyLoc&&(h=null);var L=h?h.completion:{};return L.type=r,L.arg=t,h?(this.method="next",this.next=h.finallyLoc,d):this.complete(L)},complete:function(r,t){if(r.type==="throw")throw r.arg;return r.type==="break"||r.type==="continue"?this.next=r.arg:r.type==="return"?(this.rval=this.arg=r.arg,this.method="return",this.next="end"):r.type==="normal"&&t&&(this.next=t),d},finish:function(r){for(var t=this.tryEntries.length-1;t>=0;--t){var s=this.tryEntries[t];if(s.finallyLoc===r)return this.complete(s.completion,s.afterLoc),X(s),d}},catch:function(r){for(var t=this.tryEntries.length-1;t>=0;--t){var s=this.tryEntries[t];if(s.tryLoc===r){var g=s.completion;if(g.type==="throw"){var h=g.arg;X(s)}return h}}throw new Error("illegal catch attempt")},delegateYield:function(r,t,s){return this.delegate={iterator:Z(r),resultName:t,nextLoc:s},this.method==="next"&&(this.arg=S),d}},u}(y.exports);try{regeneratorRuntime=i}catch(u){typeof globalThis=="object"?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}},"./src/exception.js":function(y,p,l){l.r(p),l.d(p,"DownloadException",function(){return w}),l.d(p,"downloadException",function(){return f});function i(o){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?i=function(d){return typeof d}:i=function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},i(o)}function u(o,a){if(!(o instanceof a))throw new TypeError("Cannot call a class as a function")}function k(o,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");o.prototype=Object.create(a&&a.prototype,{constructor:{value:o,writable:!0,configurable:!0}}),a&&U(o,a)}function N(o){var a=G();return function(){var m=E(o),c;if(a){var v=E(this).constructor;c=Reflect.construct(m,arguments,v)}else c=m.apply(this,arguments);return S(this,c)}}function S(o,a){if(a&&(i(a)==="object"||typeof a=="function"))return a;if(a!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return F(o)}function F(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function I(o){var a=typeof Map=="function"?new Map:void 0;return I=function(m){if(m===null||!T(m))return m;if(typeof m!="function")throw new TypeError("Super expression must either be null or a function");if(typeof a<"u"){if(a.has(m))return a.get(m);a.set(m,c)}function c(){return q(m,arguments,E(this).constructor)}return c.prototype=Object.create(m.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),U(c,m)},I(o)}function q(o,a,d){return G()?q=Reflect.construct:q=function(c,v,R){var _=[null];_.push.apply(_,v);var M=Function.bind.apply(c,_),j=new M;return R&&U(j,R.prototype),j},q.apply(null,arguments)}function G(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(o){return!1}}function T(o){return Function.toString.call(o).indexOf("[native code]")!==-1}function U(o,a){return U=Object.setPrototypeOf||function(m,c){return m.__proto__=c,m},U(o,a)}function E(o){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(d){return d.__proto__||Object.getPrototypeOf(d)},E(o)}var w=function(o){k(d,o);var a=N(d);function d(m,c){var v;return u(this,d),v=a.call(this,"Downloader error: ".concat(m)),v.request=c,v.name="DownloadException",v}return d}(I(Error)),f=w},"./src/index.js":function(y,p,l){l.r(p);var i=l("./node_modules/@babel/runtime/regenerator/index.js"),u=l.n(i),k=l("./src/exception.js"),N=l("./src/signatures.js");/*!
 * JS File Downloader v 1.1.24
 * https://github.com/AleeeKoi/js-file-downloader
 *
 * Copyright Alessandro Pellizzari
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 */function S(E,w,f,o,a,d,m){try{var c=E[d](m),v=c.value}catch(R){f(R);return}c.done?w(v):Promise.resolve(v).then(o,a)}function F(E){return function(){var w=this,f=arguments;return new Promise(function(o,a){var d=E.apply(w,f);function m(v){S(d,o,a,m,c,"next",v)}function c(v){S(d,o,a,m,c,"throw",v)}m(void 0)})}}function I(E,w){if(!(E instanceof w))throw new TypeError("Cannot call a class as a function")}function q(E,w){for(var f=0;f<w.length;f++){var o=w[f];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(E,o.key,o)}}function G(E,w,f){return w&&q(E.prototype,w),f&&q(E,f),E}var T={timeout:4e4,headers:[],forceDesktopMode:!1,autoStart:!0,withCredentials:!1,method:"GET",nameCallback:function(w){return w},contentType:"application/x-www-form-urlencoded",body:null,nativeFallbackOnError:!1,contentTypeDetermination:!1},U=function(){function E(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return I(this,E),this.params=Object.assign({},T,w),this.link=this.createLink(),this.request=null,this.downloadedFile=null,this.params.autoStart?this.downloadFile():this}return G(E,[{key:"start",value:function(){return this.downloadFile()}},{key:"downloadFile",value:function(){var f=this;return new Promise(function(o,a){f.initDownload(o,a)})}},{key:"initDownload",value:function(f,o){var a=this,d=function(){a.link.target="_blank",a.link.href=a.params.url,a.clickLink()};return!("download"in this.link)||this.isMobile()?(d(),f()):(this.request=this.createRequest(),this.params.url?(this.request.onload=F(u.a.mark(function m(){return u.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(parseInt(a.request.status,10)===200){v.next=2;break}return v.abrupt("return",o(new k.DownloadException("status code [".concat(a.request.status,"]"),a.request)));case 2:return v.next=4,a.startDownload();case 4:return v.abrupt("return",f(a));case 5:case"end":return v.stop()}},m)})),this.request.ontimeout=function(){o(new k.DownloadException("request timeout",a.request))},this.request.onerror=function(){a.params.nativeFallbackOnError?(d(),f(a)):o(new k.DownloadException("network error",a.request))},this.request.send(this.params.body),this):o(new k.DownloadException("url param not defined!",this.request)))}},{key:"isMobile",value:function(){return!this.params.forceDesktopMode&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},{key:"createRequest",value:function(){var f=new XMLHttpRequest;return f.open(this.params.method,this.params.url,!0),this.params.contentType!==!1&&f.setRequestHeader("Content-type",this.params.contentType),this.params.headers.forEach(function(o){f.setRequestHeader(o.name,o.value)}),f.responseType="arraybuffer",this.params.process&&typeof this.params.process=="function"&&f.addEventListener("progress",this.params.process),this.params.onloadstart&&typeof this.params.onloadstart=="function"&&(f.onloadstart=this.params.onloadstart),f.timeout=this.params.timeout,f.withCredentials=!!this.params.withCredentials||!!this.params.includeCredentials,f}},{key:"getFileName",value:function(){if(typeof this.params.filename=="string")return this.params.filename;var f=this.request.getResponseHeader("Content-Disposition"),o=[];f&&(o=f.replace(/["']/g,"").match(/filename\*?=([^;]+)/));var a=o&&o.length>=1?o[1]:this.params.url.split("/").pop().split("?")[0];return this.params.nameCallback(a)}},{key:"getContentTypeFromFileSignature",value:function(f){var o=Object.assign({},N.fileSignatures,this.params.customFileSignatures);return new Promise(function(a,d){var m=new FileReader,c=f.slice(0,4);m.onloadend=function(v){if(v.target.readyState!==FileReader.DONE){d();return}var R=new Uint8Array(v.target.result),_=[];R.forEach(function(j){_.push(j.toString(16))});var M=_.join("").toUpperCase();a(o[M])},m.onerror=d,m.readAsArrayBuffer(c)})}},{key:"getContentTypeFromResponseHeader",value:function(){return this.request.getResponseHeader("content-type")}},{key:"getContentType",value:function(f){var o=this;return new Promise(function(){var a=F(u.a.mark(function d(m){var c,v,R,_,M,j,J,H;return u.a.wrap(function(z){for(;;)switch(z.prev=z.next){case 0:if(c=o.params.contentTypeDetermination,v="application/octet-stream",(c==="header"||c==="full")&&(R=o.getContentTypeFromResponseHeader()),!(c==="signature"||c==="full")){z.next=7;break}return z.next=6,o.getContentTypeFromFileSignature(new Blob([f]));case 6:_=z.sent;case 7:m(c==="header"?(M=R)!==null&&M!==void 0?M:v:c==="signature"?(j=_)!==null&&j!==void 0?j:v:c==="full"&&(J=(H=_)!==null&&H!==void 0?H:R)!==null&&J!==void 0?J:v);case 8:case"end":return z.stop()}},d)}));return function(d){return a.apply(this,arguments)}}())}},{key:"createLink",value:function(){var f=document.createElement("a");return f.style.display="none",f}},{key:"clickLink",value:function(){var f;try{f=new MouseEvent("click")}catch(o){f=document.createEvent("MouseEvent"),f.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null)}this.link.dispatchEvent(f)}},{key:"getFile",value:function(){var w=F(u.a.mark(function o(a,d){var m,c,v;return u.a.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.next=2,this.getContentType(a);case 2:m=_.sent,v={type:m};try{c=new File([a],d,v)}catch(M){c=new Blob([a],v),c.name=d,c.lastModifiedDate=new Date}return _.abrupt("return",c);case 6:case"end":return _.stop()}},o,this)}));function f(o,a){return w.apply(this,arguments)}return f}()},{key:"startDownload",value:function(){var w=F(u.a.mark(function o(){var a,d;return u.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return a=this.getFileName(),c.next=3,this.getFile(this.request.response,a);case 3:if(this.downloadedFile=c.sent,!("msSaveOrOpenBlob"in window.navigator)){c.next=6;break}return c.abrupt("return",window.navigator.msSaveOrOpenBlob(this.downloadedFile,a));case 6:return d=window.URL.createObjectURL(this.downloadedFile),this.link.href=d,this.link.download=a,this.clickLink(),setTimeout(function(){(window.URL||window.webkitURL||window).revokeObjectURL(d)},4e4),c.abrupt("return",this.downloadedFile);case 12:case"end":return c.stop()}},o,this)}));function f(){return w.apply(this,arguments)}return f}()}]),E}();p.default=U},"./src/signatures.js":function(y,p,l){l.r(p),l.d(p,"fileSignatures",function(){return i});var i={"89504E47":"image/png",25504446:"application/pdf"}}}).default})})(ve);const ge=Te(ve.exports);var $e=C.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  ${e=>!e.only&&K`
      aspect-ratio: 1 / 1;
    `}
`,Be=$e,Me=C.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  flex-direction: column;
  justify-content: center;
  ${e=>K`
    display: ${e.hidden?"none":"flex"};
  `}
`,le=Me,Ae=C.div`
  display: grid;
  grid-template: 1fr / repeat(12, 1fr);
`,Ie=Ae,re={1:"span 12 / span 12",2:"span 6 / span 6",3:"span 4 / span 4",4:"span 3 / span 3"},Ue=({length:e,index:b})=>{if(e%3===0)return re[3];if(e<3)return re[e];let y=e>>1,p=y+(e%2===1&&b>=y?1:0);return re[p]},qe=C.div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 1rem;
  ${e=>K`
    grid-column: ${Ue(e)};
  `}
`,ze=qe,Ge=C.div`
  padding: 0 10px;
  cursor: pointer;
  display: flex;
`,ne=Ge,He=C.div`
  cursor: pointer;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  ${e=>K`
    background-color: ${e.active?"red":"gray"};
  `}
`,Ye=He,We=C.img`
  margin: auto;
  display: block;
  cursor: zoom-out;
  min-width: 5rem;
  min-height: 5rem;
  max-width: 60%;
`,Je=We,Ke=C.div`
  position: relative;
  margin-bottom: 1rem;
`,Qe=Ke,Xe=C.div`
  width: min-content;
  margin: 1rem auto;
  display: flex;
  gap: 0.5rem;
`,Ve=Xe,Ze=C.div`
  background-color: rgb(243, 244, 246);
  border-radius: 0.25rem;
  overflow: hidden;
`,et=Ze,tt=C.div`
  display: flex;
  padding: 0.5rem;
`,rt=tt,nt=C.div`
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
`,ae=nt,at=({size:e=50})=>n("svg",{viewBox:"0 0 1024 1024",width:e,height:e,children:n("path",{d:"M670.978 808.954c-5.3 0-10.597-2.045-14.604-6.126L368.69 509.868c-7.818-7.962-7.818-20.718 0-28.68l287.684-292.96c7.92-8.066 20.878-8.182 28.942-.263 8.066 7.92 8.183 20.877.264 28.942l-273.603 278.62 273.603 278.62c7.919 8.065 7.802 21.023-.264 28.943a20.399 20.399 0 0 1-14.338 5.864z",fill:"#fff"})}),it=({size:e=50})=>n("svg",{viewBox:"0 0 1024 1024",width:e,height:e,children:n("path",{d:"M383.292 808.954a20.401 20.401 0 0 1-14.339-5.862c-8.065-7.92-8.182-20.878-.263-28.942l273.602-278.621L368.69 216.907c-7.92-8.065-7.802-21.023.263-28.942 8.066-7.918 21.023-7.803 28.942.263l287.685 292.96c7.818 7.962 7.818 20.718 0 28.68L397.895 802.826a20.404 20.404 0 0 1-14.603 6.127z",fill:"#fff"})}),ue={Left:at,Right:it},ot=C.div`
  position: absolute;
  inset: 0;
  z-index: 99;
  display: flex;
`,st=C.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
`,lt=C.div`
  position: absolute;
  cursor: pointer;
  top: 1rem;
  right: 1rem;
  color: #fff;
  font-size: 2rem;
`,ut=C.div`
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
`,ct=C.div`
  position: relative;
  max-width: 80%;
`,ce=C.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  ${e=>e.dir&&K`
      ${e.dir}: 0;
    `}
`,dt=C.img`
  display: block;
  max-width: 100%;
  object-fit: scale-down;
`,de=C.div`
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
  ${e=>K`
    ${e.dir}: 0;
  `}
`,ft=C.div`
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
`,ht=({srcList:e,detail:b,detailControl:y})=>{let p=i=>{console.log(i)},l=async i=>await new ge({url:i}).catch(u=>{console.log(u)});return O.createElement(ot,null,n(st,{onClick:()=>y.reset()}),n(lt,{onClick:()=>y.reset(),children:"\xD7"}),n(de,{dir:"left",onClick:()=>y.dec(),children:n(ue.Left,{size:25})}),n(de,{dir:"right",onClick:()=>y.inc(),children:n(ue.Right,{size:25})}),O.createElement(ut,null,O.createElement(ct,null,O.createElement(ce,{dir:"left",onClick:()=>y.dec()}),O.createElement(ce,{dir:"right",onClick:()=>y.inc()}),O.createElement(dt,{src:e[b].originUrl,onClick:p,alt:""}))),x(ft,{children:[b+1,"/",e.length," |",n("span",{style:{cursor:"pointer"},onClick:()=>l(e[b].originUrl),children:"\u4E0B\u8F7D"})]}))},pt=D.exports.memo(ht),mt=({srcList:e,value:b,control:y,className:p,el:l=""})=>{let[i,u]=me(-1,e.length,-1),k=l&&document.querySelector(l)||document.body,N=async S=>await new ge({url:S}).catch(F=>{console.log(F)});return O.createElement(et,{className:p},O.createElement(rt,null,O.createElement(ae,null,O.createElement(ne,{onClick:()=>y.reset()},"\u6536\u8D77")),O.createElement(ae,null,O.createElement(ne,{onClick:()=>u.set(b)},"\u67E5\u770B\u5927\u56FE")),O.createElement(ae,null,O.createElement(ne,{onClick:()=>N(e[b].originUrl)},"\u4E0B\u8F7D"))),O.createElement(Qe,null,O.createElement(le,{dir:"left",hidden:b===0,onClick:()=>y.dec()}),n(Je,{onClick:()=>y.reset(),src:e[b].originUrl,alt:""}),O.createElement(le,{dir:"right",hidden:!1,onClick:()=>y.inc()})),e.length>1&&n(Ve,{children:e.map((S,F)=>n(Ye,{onClick:()=>y.set(F),active:b===F},F))}),i>=0&&i<e.length&&Re.exports.createPortal(O.createElement(pt,{srcList:e,detail:i,detailControl:u}),k))},vt=D.exports.memo(mt),gt=({gap:e,width:b,className:y,srcList:p,value:l,control:i})=>{let{length:u}=p;return n(Ie,{style:{gap:e,width:b},className:y,children:p.map((k,N)=>O.createElement(ze,{length:u,index:N,key:k.originUrl,onClick:()=>i.set(N)},O.createElement(Be,{loading:"lazy",src:k.originUrl,only:u===1})))})},yt=D.exports.memo(gt),fe=e=>(typeof e=="number"&&(e=String(e)+"px"),e),wt=({srcList:e=[],gap:b="0.25rem",width:y=370,className:p="",el:l=""})=>{if(!e.length)return null;let i=e.slice(0,9),{length:u}=i,[k,N]=me(-1,u-1,-1);return b=fe(b),y=fe(y),k>=0?n(vt,{srcList:i,className:p,value:k,control:N,el:l}):n(yt,{srcList:i,value:k,control:N,className:p,gap:b,width:y})},bt=D.exports.memo(wt);const xt=({item:e})=>e?x(W,{to:`/artist/${e.id}`,className:"mt-2 flex items-center p-2 h-14 rounded bg-gray-100 hover:bg-gray-200",children:[n("div",{className:"w-10 h-10 rounded",children:n("img",{src:e.img80x80,className:"rounded w-full h-full object-cover",alt:""})}),n("div",{className:"px-3",children:`\u6B4C\u624B\uFF1A${e.name}`})]}):null,kt=D.exports.memo(xt),Et=({handleCheck:e})=>{const[b,y]=D.exports.useState(!1);return x("div",{className:"relative",children:[n("button",{onClick:()=>y(!b),type:"button",className:"block ui_text_black_hover",children:n(Ce,{size:20,stroke:1})}),b&&n("div",{className:"absolute mt-2 left-0",children:n(be,{handleHide:()=>y(!1),handleCheck:e})})]})},Nt=()=>{D.exports.useState("");const e=D.exports.useRef(window.getSelection()),b=D.exports.useRef(),y=D.exports.useRef(null),p=()=>{b.current=e.current.getRangeAt(0),console.log(b),b.current},l=i=>{document.execCommand("insertText",!1,i)};return D.exports.useEffect(()=>{},[]),x("div",{className:"write",children:[n("div",{ref:y,contentEditable:"true",className:"h-20 border bg-white rounded focus:outline-none px-3 py-1",onSelect:p}),x("div",{className:"help flex mt-2",children:[x("div",{className:"flex space-x-2 items-center",children:[n(Et,{handleCheck:l}),n("button",{type:"button",className:"ui_text_black_hover",children:n(Ne,{size:20,stroke:1})}),n("button",{type:"button",className:"ui_text_black_hover",children:n(_e,{size:20,stroke:1})})]}),n("button",{className:"ml-auto border border-gray-400 px-4 py-1 rounded-full hover:bg-gray-300",type:"button",children:"\u8BC4\u8BBA"})]})]})},_t=D.exports.memo(Nt),Ct=({comment:e})=>x("div",{className:"flex py-4 px-3",children:[n(W,{to:`/user/${e.user.userId}`,className:"avatar w-10 h-10 rounded-full border flex-none",children:n("img",{className:"rounded-full w-full h-full",src:`${e.user.avatarUrl}?param=40y40`,alt:""})}),x("div",{className:"commentContent flex-1 pl-3 select-text",children:[x("div",{className:"",children:[n(W,{to:`/user/${e.user.userId}`,className:"ui_link",children:`${e.user.nickname}\uFF1A`}),n(ie,{text:e.content})]}),e.beReplied.length>0&&x("div",{className:"bg-white px-2 py-1 mt-2 rounded",children:[x(W,{to:`/user/${e.beReplied[0].user.userId}`,className:"ui_link",children:["@",e.beReplied[0].user.nickname,"\uFF1A"]}),n("span",{className:"text-gray-500",children:n(ie,{text:e.beReplied[0].content})})]}),n("div",{className:"mt-2",children:n("span",{className:"text-gray-300",children:pe(e.time).format("YYYY\u5E74MM\u6708DD\u65E5 HH:mm:ss")})})]})]},e.commentId),he=D.exports.memo(Ct),St=({threadId:e})=>{const{data:b,isLoading:y}=xe({threadId:e}),{comments:p=[],hotComments:l=[]}=b||{};return y?n(ke,{}):x(te,{children:[l.length>0&&x(te,{children:[n("div",{className:"text-sm px-3 text-gray-500 font-bold",children:"\u7CBE\u5F69\u8BC4\u8BBA"}),n("div",{className:"divide-y",children:l.slice(0,10).map(i=>n(he,{comment:i},i.commentId))})]}),p.length>0?x(te,{children:[x("div",{className:"text-sm px-3 text-gray-500 font-bold",children:["\u6700\u65B0\u8BC4\u8BBA",`(${p.length})`]}),n("div",{className:"divide-y",children:p.slice(0,10).map(i=>n(he,{comment:i},i.commentId))})]}):n("div",{className:"flex-center py-10 text-gray-500",children:"\u8FD8\u6CA1\u6709\u8BC4\u8BBA\u54E6\uFF0C\u5FEB\u6765\u62A2\u6C99\u53D1~"})]})},Lt=D.exports.memo(St),Ot=({threadId:e})=>x("div",{className:"comment bg-gray-100 mt-3 rounded",children:[n("div",{className:"p-3",children:n(_t,{})}),n(Lt,{threadId:e})]}),Dt=D.exports.memo(Ot),Ft={18:"\u5206\u4EAB\u5355\u66F2",36:"\u5206\u4EAB\u6B4C\u624B"},Tt=({item:e={},commentIsShow:b,handleToggleComment:y})=>{var l,i,u;const p=JSON.parse(e.json);return e.type===33?n("div",{className:"py-5 px-12",children:x("div",{className:"relative rounded-xl overflow-hidden",children:[n("img",{src:p.coverPCUrl,alt:""}),x("div",{className:"absolute border-b border-opacity-20 border-t border-white flex-center h-20 inset-0 m-auto text-center text-white w-min whitespace-nowrap",children:[n("div",{className:"text-xl",children:`#${p.title}#`}),n("div",{className:"-translate-y-1/2 absolute top-full transform",children:`${p.participateCount}\u53C2\u4E0E`})]})]})}):x("div",{className:"ui_event_item py-5 flex",children:[x(W,{to:`/user/${e.user.userId}`,className:"avatar flex-none w-10 h-10 relative border rounded-full",children:[n("img",{className:"rounded-full",src:`${e.user.avatarUrl}?param=40y40`,alt:""}),((i=(l=e==null?void 0:e.user)==null?void 0:l.avatarDetail)==null?void 0:i.identityIconUrl)&&n("img",{className:"absolute bottom-0 right-0 w-3.5 h-3.5",src:e.user.avatarDetail.identityIconUrl,alt:""})]}),x("div",{className:"content ml-2.5 flex-auto",children:[x("div",{className:"name",children:[n(W,{className:"ui_link",to:`/user/${e.user.userId}`,children:e.user.nickname}),"\xA0",n("span",{className:"text-gray-500",children:Ft[e.type]})]}),n("div",{className:"time mt-2",children:n(W,{to:`/comment/event/${e.id}`,className:"ui_text_gray_hover",children:pe(e.showTime).format("MM\u6708DD\u65E5 HH:mm")})}),x("div",{className:"article",children:[n("div",{className:"text whitespace-pre-line text-sm mt-2.5",children:p.msg&&n(ie,{text:p.msg})}),n(kt,{item:p.resource}),n(Pe,{item:p.song}),n(bt,{className:"mt-2.5",el:"#inset",srcList:e.pics}),x("div",{className:"info flex mt-2.5",children:[n("div",{className:"left text-gray-400",children:((u=e==null?void 0:e.rcmdInfo)==null?void 0:u.reason)&&`--${e.rcmdInfo.reason}`}),x("div",{className:"right ml-auto divide-x flex",children:[n("div",{className:"px-3",children:x("button",{type:"button",className:"action ui_text_gray_hover flex-center",children:[n(Se,{size:16}),e.info.likedCount>0&&`(${e.info.likedCount})`]})}),n("div",{className:"px-3",children:x("button",{type:"button",className:"action ui_text_gray_hover flex-center",children:[n(Le,{size:16}),"\xA0",e.info.shareCount>0&&`(${e.info.shareCount})`]})}),n("div",{className:"px-3",children:x("button",{type:"button",className:"action ui_text_gray_hover flex-center",onClick:()=>y(e.info.threadId),children:[n(Oe,{size:16}),"\xA0",e.info.commentCount>0&&`(${e.info.commentCount})`]})}),n("div",{className:"px-3",children:n("button",{type:"button",className:"action ui_text_gray_hover flex-center",children:n(De,{size:16})})})]})]}),b&&n(Dt,{threadId:e.info.threadId})]})]})]})},Rt=D.exports.memo(Tt),jt=({list:e=[]})=>{const[b,y]=D.exports.useState(""),p=D.exports.useCallback(l=>{y(i=>i===l?null:l)},[]);return n("div",{className:"divide-y",children:e.map(l=>n(Rt,{item:l,commentIsShow:b===l.info.threadId,handleToggleComment:p},l.id))})},zt=D.exports.memo(jt);export{zt as D};
