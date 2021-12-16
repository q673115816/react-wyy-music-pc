"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[507],{7799:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j});var n=r(7363),a=r.n(n),o=r(6711),c=(r(7042),r(1038),r(2526),r(1817),r(2165),r(7941),r(7327),r(5003),r(4747),r(9337),r(2982)),l=r(4942),u=r(5861),i=r(885),s=r(7757),f=r.n(s),m=(r(4916),r(4765),r(6992),r(1539),r(8783),r(3948),r(1637),r(2222),r(1249),r(8309),r(4184)),d=r.n(m),p=r(4907),y=r(4716),v=r(9428);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,l.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var E=[["area","地区",["全部","内地","港台","欧美","韩国","日本"]],["type","类型",["全部","官方版","原声","现场版","网易出品"]],["order","排序",["上升最快","最热","最新"]]],O={area:"全部",type:"全部",order:"上升最快"};const g=(0,n.memo)((function(){var e,t=(0,o.useLocation)().search,r=(0,n.useRef)(0),s=new URLSearchParams(t),m=(0,n.useRef)(null),h=(0,n.useRef)(null),g=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}(s);try{for(g.s();!(e=g.n()).done;){var j=(0,i.Z)(e.value,2),x=j[0],N=j[1];O[x]=N}}catch(e){g.e(e)}finally{g.f()}var k=(0,n.useState)([]),A=(0,i.Z)(k,2),P=A[0],S=A[1],Z=function(){var e=(0,u.Z)(f().mark((function e(){var t,n;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.Au)(b(b({},O),{},{limit:30,offset:r.current}));case 3:t=e.sent,n=t.data,r.current+=30,S((function(e){return[].concat((0,c.Z)(e),(0,c.Z)(n.map((function(e){var t=e.id,r=e.name,n=e.cover,a=e.playCount;return{id:t,cover:n,duration:e.duration,playCount:a,title:r,creator:e.artists.map((function(e){return{userId:e.id,userName:e.name}}))}}))))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return(0,y.Z)(Z,m,h,[t]),(0,n.useEffect)((function(){S([]),r.current=0}),[t]),a().createElement("div",{className:"domAllMV overflow-auto h-full",ref:m},a().createElement("div",{className:"domAllMV_header ui_header"},a().createElement(o.Link,{to:"./",className:"h1 title"},"全部MV")),a().createElement("div",{className:"domAllMV_main px-8 flex-auto"},a().createElement("div",{className:"ui_filter"},E.map((function(e){return a().createElement("div",{className:"row flex my-2.5",key:e[1]},a().createElement("div",{className:"name flex-none"},e[1],":"),a().createElement("div",{className:"list divide-x"},e[2].map((function(t){return a().createElement("div",{className:"item flex-center",key:t},a().createElement(o.Link,{to:"/mv-all?".concat(new URLSearchParams(b(b({},O),(0,l.Z)({},e[0],t)))),className:d()("btn rounded-full leading-5 px-3 whitespace-nowrap",t===O[e[0]]?"bg-red-50 text-red-500":"ui_text_gray_hover")},t))}))))}))),a().createElement("div",{className:"py-1"},a().createElement(p.Z,{list:P})),a().createElement("div",{ref:h})))})),j=function(){return a().createElement(o.Routes,null,a().createElement(o.Route,{index:!0,element:a().createElement(g,null)}))}}}]);
//# sourceMappingURL=MV-All.js.map?version=88896c92