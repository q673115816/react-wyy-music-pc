"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[868],{6437:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(7363),a=n.n(r),l=n(6711),o=n(5666),c=n.n(o),u=n(9266),i=n(5986),s=n(4719);function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t,n,r,a,l,o){try{var c=e[l](o),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,a)}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){c=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=function(){console.log("fm");var e,t,n=f((0,r.useState)([]),2),o=n[0],m=n[1],v=f((0,r.useState)({}),2),y=v[0],h=v[1],p=f((0,r.useState)(!0),2),E=p[0],w=p[1],b=(e=c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.dJ)();case 3:return t=e.sent.data,e.next=6,(0,u.dV)({id:t[0].id});case 6:n=e.sent,m(t),h(n),w(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})),t=function(){var t=this,n=arguments;return new Promise((function(r,a){var l=e.apply(t,n);function o(e){d(l,r,a,o,c,"next",e)}function c(e){d(l,r,a,o,c,"throw",e)}o(void 0)}))},function(){return t.apply(this,arguments)});return(0,r.useEffect)((function(){b()}),[]),E?a().createElement("div",{className:"flex-center w-full h-full"},a().createElement(s.Z,null)):a().createElement("div",{className:"domFm m-auto overflow-auto h-full"},a().createElement("div",{className:"m-auto",style:{width:760}},a().createElement("div",{className:"domFm_header pt-10 flex justify-between"},a().createElement("div",null,"todo"),a().createElement("div",{style:{width:330}},a().createElement("div",{className:"font-bold text-lg"},o[0].name),a().createElement("div",{className:"grid grid-cols-2"},a().createElement("span",null,"专辑："),a().createElement("span",null,"歌手：")),a().createElement("div",{style:{height:370}}))),a().createElement("div",{className:"domFm_main"},a().createElement("div",null,a().createElement(l.Link,{to:"/comment/song/".concat(o[0].id),className:"font-bold text-base"},"评论"),a().createElement("span",{className:"text-gray-500"},"(已有",y.total,"条评论)")),a().createElement(i.Z,{comments:y,more:o[0].id,type:"song"}))))};const y=(0,r.memo)(v),h=function(){return a().createElement(l.Routes,null,a().createElement(l.Route,{index:!0,element:a().createElement(y,null)}))}}}]);
//# sourceMappingURL=FM.js.map?version=ca647225