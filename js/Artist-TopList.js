"use strict";(this.webpackChunk_wyy_web=this.webpackChunk_wyy_web||[]).push([[131],{3890:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var r=a(7363),n=a.n(r),l=a(6711),s=a(6319),c=a.n(s),i=a(743),o=a.n(i),m=a(3849),u=a.n(m),d=a(2667);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function v(e,t,a,r,n,l,s){try{var c=e[l](s),i=c.value}catch(e){return void a(e)}c.done?t(i):Promise.resolve(i).then(r,n)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,l=[],s=!0,c=!1;try{for(a=a.call(e);!(s=(r=a.next()).done)&&(l.push(r.value),!t||l.length!==t);s=!0);}catch(e){c=!0,n=e}finally{try{s||null==a.return||a.return()}finally{if(c)throw n}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?f(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=[["华语","1"],["欧美","2"],["韩国","3"],["日本","4"]];const x=(0,r.memo)((function(e){var t,a,s=e.type,i=void 0===s?1:s,m=p((0,r.useState)([]),2),f=m[0],x=m[1],h=p((0,r.useState)(0),2),E=h[0],b=h[1],g=(t=c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.MP)(i);case 3:t=e.sent.list,x(t.artists),b(t.updateTime),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})),a=function(){var e=this,a=arguments;return new Promise((function(r,n){var l=t.apply(e,a);function s(e){v(l,r,n,s,c,"next",e)}function c(e){v(l,r,n,s,c,"throw",e)}s(void 0)}))},function(){return a.apply(this,arguments)});(0,r.useEffect)((function(){g()}),[i]);var N=f.slice(0,3),w=f.slice(3);return n().createElement("div",{className:"domtoplistartist flex flex-col h-full"},n().createElement("div",{className:"domtoplistartist_header border-b px-8 pt-5 pb-2.5"},n().createElement("div",{className:"domtoplistartist_title h1"},"云音乐歌手榜"),n().createElement("div",{className:"flex items-baseline justify-between mt-6"},n().createElement("div",{className:"domtoplistartist_nav flex space-x-6"},y.map((function(e){var t=p(e,2),a=t[0],r=t[1];return n().createElement(l.NavLink,{key:a,className:function(e){var t=e.isActive;return u()("text-sm",t&&"font-bold")},to:r},a)}))),n().createElement("div",{className:"text-gray-400"},"更新时间：",o()(E).format("MM月DD日")))),n().createElement("div",{className:"overflow-auto h-full pb-10"},n().createElement("div",{className:"domtoplistartist_top3_list py-5 px-8 grid grid-cols-3 gap-x-5"},N.map((function(e,t){return n().createElement(l.Link,{className:"domtoplistartist_top3_link rounded-lg overflow-hidden bg-gray-50 hover:bg-gray-100 flex relative",to:"/artist/".concat(e.id),key:e.id,style:{height:100}},n().createElement("div",{className:"absolute text-red-300 text-4xl"},t+1),n().createElement("div",{className:"flex-auto flex flex-col justify-center pl-8"},n().createElement("div",{className:"text-sm"},e.name),n().createElement("div",{className:"score text-gray-400 mt-2"},"热度：",e.score)),n().createElement("div",{className:"cover border"},n().createElement("img",{src:"".concat(e.picUrl,"?param=100y100"),alt:""})))}))),n().createElement("div",{className:"domtoplistartist_other_list"},w.map((function(e,t){return n().createElement(l.Link,{className:u()("domtoplistartist_other_link flex items-center h-20 hover:bg-gray-100",{"bg-gray-50":t%2==0}),to:"/artist/".concat(e.id),key:e.id},n().createElement("div",{className:"index flex flex-col items-center justify-center w-16 text-gray-400"},n().createElement("div",{className:"text-sm"},t+4),n().createElement("div",null,e.lastRank===t+3&&"-0",e.lastRank>t+3&&n().createElement("div",null,n().createElement("span",{className:"text-red-500"},"↑"),e.lastRank-t-3),e.lastRank<t+3&&n().createElement("div",null,n().createElement("span",{className:"text-blue-500"},"↓"),t+3-e.lastRank))),n().createElement("div",{className:"cover rounded overflow-hidden"},n().createElement("img",{src:"".concat(e.picUrl,"?param=100y100"),alt:""})),n().createElement("div",{className:"name flex-auto text-sm pl-2"},e.name),n().createElement("div",{className:"score text-gray-400 w-32"},"热度：",e.score))})))))})),h=function(){return n().createElement(l.Routes,null,n().createElement(l.Route,{index:!0,element:n().createElement(x,null)}))}}}]);
//# sourceMappingURL=Artist-TopList.js.map?version=1554eecc