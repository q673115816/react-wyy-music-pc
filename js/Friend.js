"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[144],{5665:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var r=n(7363),a=n.n(r),l=n(6711),c=n(5666),o=n.n(c),i=n(9266),s=n(6719),m=n(534),u=n(4719),d=n(7794),f=n(4837),v=n(2429),p=n(8942),y=n(6910).u.injectEndpoints({endpoints:function(e){return{getHotTopic:e.query({query:function(e){return{url:"hot/topic",method:"POST",body:e}}}),getTopicDetail:e.query({query:function(e){return{url:"topic/detail",method:"POST",body:e}}})}}}),E=y.useGetHotTopicQuery,x=y.useGetTopicDetailQuery,h=function(e){var t=e.limit,n=E({limit:t}),r=n.data,c=n.isLoading,o=(null==r?void 0:r.hot)||[];return c?a().createElement(u.Z,null):a().createElement("div",{className:"list"},o.map((function(e){return a().createElement(l.Link,{to:"/friend/".concat(e.actId),key:e.actId,className:"py-1 pl-5 flex hover:bg-gray-100"},a().createElement("div",{className:"cover w-8 h-8 flex-none"},a().createElement("img",{className:"rounded",src:"".concat(e.sharePicUrl,"?param=50y50"),alt:""})),a().createElement("div",{className:"content px-2 flex-auto w-0"},a().createElement("div",{className:"title flex items-center"},"#",a().createElement("span",{className:"truncate"},e.title),"#"),a().createElement("div",{className:"participateCount text-gray-300"},"".concat(e.participateCount,"人参与"))))})))};const b=(0,r.memo)(h),N=(0,r.memo)((function(){var e=(0,f.C)((function(e){return e.account})).profile,t=(0,f.T)();return a().createElement("div",{className:"flex-none",style:{width:250}},a().createElement("div",{className:""},e.userId?a().createElement("div",{className:"h-40 pt-8 bg-gray-100"},a().createElement("div",{className:"top flex px-5 items-start"},a().createElement(l.Link,{to:"/user/".concat(e.userId),className:"avatar w-12 h-12 rounded-full overflow-hidden"},a().createElement("img",{className:"",src:"".concat(e.avatarUrl,"?param=100y100"),alt:""})),a().createElement("div",{className:"flex-center"},a().createElement(l.Link,{to:"/user/".concat(e.userId),className:"nickname ml-2.5"},e.nickname)," ",a().createElement(v.ZP,{gender:e.gender,size:14}))),a().createElement("div",{className:"infos flex divide-x text-center mt-4"},a().createElement(l.Link,{to:"/user/".concat(e.userId,"/dynamic"),className:"info flex-1 ui_text_black_hover"},a().createElement("div",{className:"num text-xl"},e.eventCount),a().createElement("div",{className:"string"},"动态")),a().createElement(l.Link,{to:"/user/".concat(e.userId,"/follow"),className:"info flex-1 ui_text_black_hover"},a().createElement("div",{className:"num text-xl"},e.follows),a().createElement("div",{className:"string"},"关注")),a().createElement(l.Link,{to:"/user/".concat(e.userId,"/fans"),className:"info flex-1 ui_text_black_hover"},a().createElement("div",{className:"num text-xl"},e.followeds),a().createElement("div",{className:"string"},"粉丝")))):a().createElement("div",{className:"nologin px-5"},a().createElement("div",{style:{height:170}}),a().createElement("div",{className:"tips text-center text-gray-500"},"登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机"),a().createElement("button",{type:"button",className:"ui_theme_bg_color text-white w-full h-10 mt-4 rounded-full",onClick:function(){return t((0,p.setLoginVisibilty)())}},"立即登录"))),a().createElement("div",{className:"mt-5"},a().createElement("div",{className:"flex px-5 mb-2.5"},a().createElement("span",{className:"font-bold"},"热门话题"),a().createElement(l.Link,{className:"text-gray-400 ml-auto",to:"/friend/top"},"更多 >")),a().createElement(b,{limit:5})),a().createElement("div",{className:"mt-8"},a().createElement("div",{className:"flex px-5 mb-2.5"},a().createElement("span",{className:"font-bold"},"认识的人"),a().createElement(l.Link,{className:"text-gray-400 ml-auto",to:"/friend/acquaintance"},"更多 >"))),a().createElement("div",{className:"mt-8"},a().createElement("div",{className:"flex px-5 mb-2.5"},a().createElement("span",{className:"font-bold"},"添加关注"))))}));function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function w(e,t,n,r,a,l,c){try{var o=e[l](c),i=o.value}catch(e){return void n(e)}o.done?t(i):Promise.resolve(i).then(r,a)}function k(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||S(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}var I=function(){var e,t,n,l,c=(n=(0,r.useState)([]),l=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);c=!0);}catch(e){o=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(o)throw a}}return l}}(n,l)||S(n,l)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),f=c[0],v=c[1],p=(0,r.useRef)(null),y=(0,r.useRef)(null),E=(0,r.useRef)(-1),x=(e=o().mark((function e(){var t,n,r,a,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.Nz)({lasttime:E.current});case 3:t=e.sent,n=t.event,r=void 0===n?[]:n,a=t.lasttime,l=void 0===a?-1:a,E.current=l,v((function(e){return k(e).concat(k(r))})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})),t=function(){var t=this,n=arguments;return new Promise((function(r,a){var l=e.apply(t,n);function c(e){w(l,r,a,c,o,"next",e)}function o(e){w(l,r,a,c,o,"throw",e)}c(void 0)}))},function(){return t.apply(this,arguments)});return(0,r.useEffect)((function(){v([])}),[]),(0,m.Z)(x,p,y),a().createElement("div",{className:"h-full overflow-auto",ref:p},a().createElement("div",{className:"flex divide-x min-h-full"},a().createElement("div",{className:"relative flex-auto"},a().createElement("div",{className:"h-14 px-8 flex items-center sticky top-0 z-10 bg-white"},a().createElement("span",{className:"h1"},"动态"),a().createElement("button",{type:"button",className:"flex ml-auto items-center ui_theme_bg_color text-white h-6 px-3 rounded-full"},a().createElement(s.IconPlus,{size:12,stroke:5}),"写动态")),a().createElement("div",{className:"domFriend_content"},a().createElement("div",{className:"px-8"},a().createElement(d.Z,{list:f})),a().createElement("div",{className:"flex-center",ref:y},0===f.length?a().createElement("div",{className:"empty text-center text-gray-400 pt-48"},"暂无动态"):a().createElement(u.Z,null)))),a().createElement(N,null)))};const A=(0,r.memo)(I);var _=function(){var e,t=(0,l.useParams)().id,n=x({actid:t}),r=n.data,c=n.isLoading,o=(null==r?void 0:r.act)||{};return c?null:a().createElement("div",{className:"border-b"},a().createElement("div",{className:"rounded overflow-hidden border relative"},a().createElement("img",{src:o.coverPCUrl,loading:"lazy",className:"h-56 object-cover block",alt:""}),a().createElement("div",{className:"absolute inset-0 bg-black bg-opacity-20 flex-center flex-col"},a().createElement("div",{style:{minWidth:210},className:"relative max-w-sm min-w- border-t border-b border-white border-opacity-60 py-6 text-white text-xl flex-center text-center flex-col "},a().createElement("div",{className:"flex"},"#",a().createElement("span",{className:"truncate"},o.title),"#"),a().createElement("span",{className:"absolute inset-x-0 text-xs whitespace-nowrap top-full transform -translate-y-1/2"},"".concat(o.participateCount,"人参与"))),a().createElement("button",{type:"button",className:"bg-white flex-center h-9 mt-4 w-52 rounded text-red-500 bg-opacity-90 hover:bg-opacity-100"},a().createElement(s.IconPencil,{size:16}),"立即参与")),a().createElement("button",{type:"button",className:"absolute m-4 w-8 h-8 flex-center top-0 right-0 border text-white border-current rounded-full bg-black bg-opacity-50"},a().createElement(s.IconShare,{size:24,stroke:1}))),a().createElement("ul",{className:"pb-8 text-sm text-gray-500 leading-6"},null===(e=o.text)||void 0===e?void 0:e.map((function(e,t){return a().createElement("li",{key:t},e)}))))};const C=(0,r.memo)(_);function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function j(e,t,n,r,a,l,c){try{var o=e[l](c),i=o.value}catch(e){return void n(e)}o.done?t(i):Promise.resolve(i).then(r,a)}function T(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);c=!0);}catch(e){o=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(o)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const L=(0,r.memo)((function(){var e=(0,l.useParams)().id;console.log(e);var t,n=T((0,r.useState)({}),2),c=(n[0],n[1],T((0,r.useState)([]),2)),s=c[0],u=c[1],f=(0,r.useRef)(null),v=(0,r.useRef)(null),p=(0,r.useCallback)((t=o().mark((function t(){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("handleInitEvent"),t.prev=1,t.next=4,(0,i.Mx)({actid:e});case 4:n=t.sent.events,u(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})),function(){var e=this,n=arguments;return new Promise((function(r,a){var l=t.apply(e,n);function c(e){j(l,r,a,c,o,"next",e)}function o(e){j(l,r,a,c,o,"throw",e)}c(void 0)}))}),[e]);return(0,m.Z)(p,f,v),a().createElement("div",{className:"h-full overflow-auto",ref:f},a().createElement("div",{className:"flex divide-x"},a().createElement("div",{className:"flex-auto w-0"},a().createElement("div",{className:"px-8 pt-4"},a().createElement(C,null),a().createElement(d.Z,{list:s}),a().createElement("div",{ref:v}))),a().createElement("div",{className:"flex-none",style:{width:230}},a().createElement("div",{className:"p-4 text-sm text-gray-700"},"推荐话题"),a().createElement(b,{limit:10}))))}));var O=n(4184),R=n.n(O);function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Z(e,t,n,r,a,l,c){try{var o=e[l](c),i=o.value}catch(e){return void n(e)}o.done?t(i):Promise.resolve(i).then(r,a)}function q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);c=!0);}catch(e){o=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(o)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const U=(0,r.memo)((function(){var e,t,n=q((0,r.useState)("day"),2),l=n[0],c=n[1],i=q((0,r.useState)([]),2),s=i[0],m=i[1],u=(e=o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m([{title:"你的恋爱人格是什么",count:916},{title:"你的恋爱人格是什么",count:916}]);case 1:case"end":return e.stop()}}),e)})),t=function(){var t=this,n=arguments;return new Promise((function(r,a){var l=e.apply(t,n);function c(e){Z(l,r,a,c,o,"next",e)}function o(e){Z(l,r,a,c,o,"throw",e)}c(void 0)}))},function(){return t.apply(this,arguments)});return(0,r.useEffect)((function(){u()}),[l]),a().createElement("div",{className:" h-full overflow-auto"},a().createElement("div",{className:"flex divide-x"},a().createElement("div",{className:"flex-auto w-0"},a().createElement("div",{className:"h-16 px-8 flex items-center"},a().createElement("span",{className:"text-lg font-bold"},"话题飙升榜"),a().createElement("div",{className:"ml-auto space-x-3 text-gray-300"},a().createElement("button",{type:"button",onClick:function(){return c("day")},className:R()("hover:text-gray-700","day"===l&&"text-gray-700")},"24小时"),a().createElement("span",null,"|"),a().createElement("button",{type:"button",onClick:function(){return c("week")},className:R()("hover:text-gray-700","week"===l&&"text-gray-700")},"7天"))),a().createElement("div",null,s.map((function(e,t){return a().createElement("div",{key:t,className:R()("flex items-center h-20 hover:bg-gray-100",t%2==1&&"bg-gray-50")},a().createElement("div",{className:"w-16 flex-center text-sm "},t+1),a().createElement("div",{className:"w-14 h-14"},a().createElement("img",{src:"",alt:""})),a().createElement("div",null,a().createElement("div",{className:"text-lg"},e.title),a().createElement("div",{className:"text-gray-300"},e.count,"人参与")))})))),a().createElement("div",{className:"domFriend_right flex-none",style:{width:230}},a().createElement("div",{className:"p-4 text-sm text-gray-700"},"推荐话题"),a().createElement(b,{limit:10}))))})),M=(0,r.memo)((function(){return a().createElement("div",{className:""},a().createElement("div",{className:"text-xl p-8 font-bold"},"寻找并邀请好友"),a().createElement("div",{className:"px-8"},a().createElement("div",{className:"space-x-2 text-gray-500"},a().createElement("button",{type:"button"},"已有1位好友加入"),a().createElement("span",null,"|"),a().createElement("button",{type:"button"},"邀请另外3位好友加入")),a().createElement("div",null,"TODO")))})),D=function(){return a().createElement(l.Routes,null,a().createElement(l.Route,{index:!0,element:a().createElement(A,null)}),a().createElement(l.Route,{path:"top",element:a().createElement(U,null)}),a().createElement(l.Route,{path:"Acquaintance",element:a().createElement(M,null)}),a().createElement(l.Route,{path:":id",element:a().createElement(L,null)}))}}}]);
//# sourceMappingURL=Friend.js.map?version=f88d0f77