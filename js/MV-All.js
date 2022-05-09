"use strict";(this.webpackChunk_wyy_web=this.webpackChunk_wyy_web||[]).push([[507],{6:(e,t,r)=>{r.r(t),r.d(t,{default:()=>S});var n=r(7363),a=r.n(n),o=r(6711),l=r(6319),u=r.n(l),i=r(3849),c=r.n(i),s=r(9462),f=r(4579),m=r(1861),d=r(2284),y=[["area","地区",["全部","内地","港台","欧美","韩国","日本"]],["type","类型",["全部","官方版","原声","现场版","网易出品"]],["order","排序",["上升最快","最热","最新"]]],v={area:"全部",type:"全部",order:"上升最快"};function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function h(e,t,r,n,a,o,l){try{var u=e[o](l),i=u.value}catch(e){return void r(e)}u.done?t(i):Promise.resolve(i).then(n,a)}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){b(e,t,r[t])}))}return e}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],l=!0,u=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);l=!0);}catch(e){u=!0,a=e}finally{try{l||null==r.return||r.return()}finally{if(u)throw a}}return o}}(e,t)||x(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}var g=function(){var e=(0,o.useLocation)().search,t=(0,n.useRef)(0),r=new URLSearchParams(e),l=(0,n.useRef)(null),i=(0,n.useRef)(null),g=!0,A=!1,S=void 0;try{for(var k,N=r[Symbol.iterator]();!(g=(k=N.next()).done);g=!0){var _=E(k.value,2),O=_[0],j=_[1];v[O]=j}}catch(e){A=!0,S=e}finally{try{g||null==N.return||N.return()}finally{if(A)throw S}}var P,R,I=E((0,d.x)([]),2),C=I[0],L=I[1],M=(P=u().mark((function e(){var r,n,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m.Au)(w({},v,{limit:30,offset:t.current}));case 3:if(r=e.sent,n=r.data,a=r.code,t.current+=30,200===a){e.next=9;break}return e.abrupt("return");case 9:L((function(e){var t,r;(t=e).push.apply(t,function(e){if(Array.isArray(e))return p(e)}(r=null==n?void 0:n.map((function(e){var t=e.id,r=e.name,n=e.cover;return{type:0,playCount:e.playCount,id:t,cover:n,duration:e.duration,title:r,creator:e.artists.map((function(e){return{userId:e.id,userName:e.name}}))}})))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||x(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})),R=function(){var e=this,t=arguments;return new Promise((function(r,n){var a=P.apply(e,t);function o(e){h(a,r,n,o,l,"next",e)}function l(e){h(a,r,n,o,l,"throw",e)}o(void 0)}))},function(){return R.apply(this,arguments)});return(0,f.Z)(M,l,i,[e]),(0,n.useEffect)((function(){L([]),t.current=0}),[e]),a().createElement("div",{className:"domAllMV overflow-auto h-full",ref:l},a().createElement("div",{className:"domAllMV_header ui_header"},a().createElement(o.Link,{to:"./",className:"h1 title"},"全部MV")),a().createElement("div",{className:"domAllMV_main px-8 flex-auto"},a().createElement("div",{className:"ui_filter"},y.map((function(e){return a().createElement("div",{className:"row flex my-2.5",key:e[1]},a().createElement("div",{className:"name flex-none"},e[1],":"),a().createElement("div",{className:"list divide-x"},e[2].map((function(t){return a().createElement("div",{className:"item flex-center",key:t},a().createElement(o.Link,{to:"/mv-all?".concat(new URLSearchParams(w({},v,b({},e[0],t)))),className:c()("btn rounded-full leading-5 px-3 whitespace-nowrap",t===v[e[0]]?"bg-red-50 text-red-500":"ui_text_gray_hover")},t))}))))}))),a().createElement("div",{className:"py-1"},a().createElement(s.Z,{list:C})),a().createElement("div",{ref:i})))};const A=(0,n.memo)(g),S=function(){return a().createElement(o.Routes,null,a().createElement(o.Route,{index:!0,element:a().createElement(A,null)}))}}}]);
//# sourceMappingURL=MV-All.js.map?version=f16c4c82