"use strict";(this.webpackChunk_wyy_web=this.webpackChunk_wyy_web||[]).push([[136],{6674:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var n=r(7363),a=r.n(n),l=r(6711),o=r(7735),c=r.n(o),u=r(7767),i=r(5007),s=r(9160);function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t,r,n,a,l,o){try{var c=e[l](o),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,a)}function d(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){if(e){if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(e,t):void 0}}var p=function(){var e,t,r,o,m=(0,l.useParams)(),p=m.type,v=m.rid,h=(r=(0,n.useState)([]),o=2,function(e){if(Array.isArray(e))return e}(r)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l=[],o=!0,c=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(l.push(n.value),!t||l.length!==t);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==r.return||r.return()}finally{if(c)throw a}}return l}}(r,o)||y(r,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),b=h[0],w=h[1],E=(0,n.useRef)(null),g=(0,n.useRef)(null),x=(0,n.useRef)(0),N=(e=c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.vO)({cateId:v,limit:40,offset:x.current});case 3:t=e.sent.djRadios,x.current+=40,w((function(e){return d(e).concat(d(t))})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})),t=function(){var t=this,r=arguments;return new Promise((function(n,a){var l=e.apply(t,r);function o(e){f(l,n,a,o,c,"next",e)}function c(e){f(l,n,a,o,c,"throw",e)}o(void 0)}))},function(){return t.apply(this,arguments)});return(0,n.useEffect)((function(){w([]),x.current=0}),[v]),(0,i.Z)(N,E,g),a().createElement("div",{className:"overflow-auto h-full",ref:E},a().createElement("div",{className:"ui_header h1"},p),a().createElement("div",{className:"grid grid-cols-2 gap-5 px-8"},b.map((function(e){return a().createElement(l.Link,{key:e.id,to:"/playlist/dj/".concat(e.id),className:"flex"},a().createElement("div",{className:"w-32 rounded overflow-hidden border"},a().createElement("img",{loading:"lazy",className:"aspect-square",src:"".concat(e.picUrl,"?param=200y200"),alt:""})),a().createElement("div",{className:"flex-auto w-0 px-2 pt-8"},a().createElement("div",{className:"ui_text_black_hover text-sm"},e.name),a().createElement("div",{className:"text-gray-400 mt-4"},e.rcmdtext),a().createElement("div",{className:"text-gray-400 mt-2"},"节目：",a().createElement("span",null,e.programCount),"，订阅：",a().createElement("span",null,e.subCount))))}))),a().createElement("div",{ref:g,className:"flex-center"},a().createElement(s.Z,null)))};const v=(0,n.memo)(p),h=function(){return a().createElement(l.Routes,null,a().createElement(l.Route,{path:":type/:rid",element:a().createElement(v,null)}))}}}]);
//# sourceMappingURL=DJ-Category.js.map?version=5dea87a1