"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[366],{5032:(t,e,r)=>{r.r(e),r.d(e,{default:()=>h});var n=r(7363),u=r.n(n),a=r(6711),o=r(5666),i=r.n(o),c=r(5179),s=r(9266),l=r(1624);function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function p(t,e,r,n,u,a,o){try{var i=t[a](o),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(n,u)}function y(t){return function(){var e=this,r=arguments;return new Promise((function(n,u){var a=t.apply(e,r);function o(t){p(a,n,u,o,i,"next",t)}function i(t){p(a,n,u,o,i,"throw",t)}o(void 0)}))}}const m=(0,n.memo)((function(){var t,e=(0,a.useParams)(),r=e.type,n=e.id,o=(0,l.useDispatch)(),p={music:y(i().mark((function t(){var e,r,u;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,s.VO)({ids:n});case 2:e=t.sent,a=e.songs,i=1,r=function(t){if(Array.isArray(t))return t}(a)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,u,a=[],o=!0,i=!1;try{for(r=r.call(t);!(o=(n=r.next()).done)&&(a.push(n.value),!e||a.length!==e);o=!0);}catch(t){i=!0,u=t}finally{try{o||null==r.return||r.return()}finally{if(i)throw u}}return a}}(a,i)||function(t,e){if(t){if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(t,e):void 0}}(a,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),u=r[0],o((0,c.setAudioImmediate)({currentSong:u}));case 6:case"end":return t.stop()}var a,i}),t)})))};return(t=y(i().mark((function t(e){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p[e]();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),function(e){return t.apply(this,arguments)})(r),u().createElement(a.Navigate,{to:"/"})})),h=function(){return u().createElement(a.Routes,null,u().createElement(a.Route,{path:":type/:id",element:u().createElement(m,null)}))}}}]);
//# sourceMappingURL=Share.js.map?version=d9393433