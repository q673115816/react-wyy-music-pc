"use strict";(this.webpackChunk_wyy_web=this.webpackChunk_wyy_web||[]).push([[144],{4915:(e,t,a)=>{a.r(t),a.d(t,{default:()=>U});var n=a(7363),r=a.n(n),l=a(6711),c=a(6319),s=a.n(c),i=a(6719),o=a(4511),m=a(8951),u=a(1516),d=a(5660),f=a(869),v=a(1536),E=a(7836),p=function(e){var t=e.limit,a=(0,E.nf)({limit:t}),n=a.data,c=a.isLoading,s=(null==n?void 0:n.hot)||[];return c?r().createElement(m.Z,null):r().createElement("div",{className:"list"},s.map((function(e){return r().createElement(l.Link,{to:"/friend/".concat(e.actId),key:e.actId,className:"py-1 pl-5 flex hover:bg-gray-100"},r().createElement("div",{className:"cover w-8 h-8 flex-none"},r().createElement("img",{className:"rounded",src:"".concat(e.sharePicUrl,"?param=50y50"),alt:""})),r().createElement("div",{className:"content px-2 flex-auto w-0"},r().createElement("div",{className:"title flex items-center"},"#",r().createElement("span",{className:"truncate"},e.title),"#"),r().createElement("div",{className:"participateCount text-gray-300"},"".concat(e.participateCount,"人参与"))))})))};const x=(0,n.memo)(p),y=(0,n.memo)((function(){var e=(0,d.C)((function(e){return e.account})).profile,t=(0,d.T)();return r().createElement("div",{className:"flex-none",style:{width:250}},r().createElement("div",{className:""},e.userId?r().createElement("div",{className:"h-40 pt-8 bg-gray-100"},r().createElement("div",{className:"top flex gap-2 px-5 items-start"},r().createElement(l.Link,{to:"/user/".concat(e.userId),className:"avatar w-12 h-12 rounded-full overflow-hidden"},r().createElement("img",{className:"",src:"".concat(e.avatarUrl,"?param=100y100"),alt:""})),r().createElement("div",null,r().createElement("div",{className:"flex-center"},r().createElement(l.Link,{to:"/user/".concat(e.userId)},e.nickname)," ",r().createElement(f.ZP,{gender:e.gender,size:14})),r().createElement("div",{className:"text-gray-500"},e.signature))),r().createElement("div",{className:"infos flex divide-x text-center mt-4"},r().createElement(l.Link,{to:"/user/".concat(e.userId,"/dynamic"),className:"info flex-1 ui_text_black_hover"},r().createElement("div",{className:"num text-xl"},e.eventCount),r().createElement("div",{className:"string"},"动态")),r().createElement(l.Link,{to:"/user/".concat(e.userId,"/follow"),className:"info flex-1 ui_text_black_hover"},r().createElement("div",{className:"num text-xl"},e.follows),r().createElement("div",{className:"string"},"关注")),r().createElement(l.Link,{to:"/user/".concat(e.userId,"/fans"),className:"info flex-1 ui_text_black_hover"},r().createElement("div",{className:"num text-xl"},e.followeds),r().createElement("div",{className:"string"},"粉丝")))):r().createElement("div",{className:"nologin px-5"},r().createElement("div",{style:{height:170}}),r().createElement("div",{className:"tips text-center text-gray-500"},"登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机"),r().createElement("button",{type:"button",className:"ui_theme_bg_color text-white w-full h-10 mt-4 rounded-full",onClick:function(){return t((0,v.setLoginVisibilty)())}},"立即登录"))),r().createElement("div",{className:"mt-5"},r().createElement("div",{className:"flex px-5 mb-2.5"},r().createElement("span",{className:"font-bold"},"热门话题"),r().createElement(l.Link,{className:"text-gray-400 ml-auto",to:"/friend/top"},"更多 >")),r().createElement(x,{limit:5})),r().createElement("div",{className:"mt-8"},r().createElement("div",{className:"flex px-5 mb-2.5"},r().createElement("span",{className:"font-bold"},"认识的人"),r().createElement(l.Link,{className:"text-gray-400 ml-auto",to:"/friend/acquaintance"},"更多 >"))),r().createElement("div",{className:"mt-8"},r().createElement("div",{className:"flex px-5 mb-2.5"},r().createElement("span",{className:"font-bold"},"添加关注"))))}));var h=a(2284);function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function N(e,t,a,n,r,l,c){try{var s=e[l](c),i=s.value}catch(e){return void a(e)}s.done?t(i):Promise.resolve(i).then(n,r)}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l=[],c=!0,s=!1;try{for(a=a.call(e);!(c=(n=a.next()).done)&&(l.push(n.value),!t||l.length!==t);c=!0);}catch(e){s=!0,r=e}finally{try{c||null==a.return||a.return()}finally{if(s)throw r}}return l}}(e,t)||w(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){if(e){if("string"==typeof e)return b(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?b(e,t):void 0}}var k=function(){var e,t,a=g((0,h.x)([]),2),l=a[0],c=a[1],d=g((0,E.Hf)(),1)[0],f=(0,n.useRef)(null),v=(0,n.useRef)(null),p=(0,n.useRef)(-1),x=(e=s().mark((function e(){var t,a,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d({lasttime:p.current});case 3:t=e.sent,a=t.data.lasttime,n=t.data.event,p.current=a,c((function(e){var t,a;(t=e).push.apply(t,function(e){if(Array.isArray(e))return b(e)}(a=n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(a)||w(a)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})),t=function(){var t=this,a=arguments;return new Promise((function(n,r){var l=e.apply(t,a);function c(e){N(l,n,r,c,s,"next",e)}function s(e){N(l,n,r,c,s,"throw",e)}c(void 0)}))},function(){return t.apply(this,arguments)});return(0,n.useEffect)((function(){c([])}),[]),(0,o.Z)(x,f,v),r().createElement("div",{className:"h-full overflow-auto",ref:f},r().createElement("div",{className:"flex divide-x min-h-full"},r().createElement("div",{className:"relative flex-auto"},r().createElement("div",{className:"h-14 px-8 flex items-center sticky top-0 z-10 bg-white"},r().createElement("span",{className:"h1"},"动态"),r().createElement("button",{type:"button",className:"flex-center ml-4 ui_theme_bg_color text-sm text-white h-8 px-4 rounded-full"},r().createElement(i.IconEdit,{size:20,stroke:1}),"发动态")),r().createElement("div",{className:"domFriend_content"},r().createElement("div",{className:"px-8"},r().createElement(u.Z,{list:l})),r().createElement("div",{className:"flex-center",ref:v},0===l.length?r().createElement("div",{className:"empty text-center text-gray-400 pt-48"},"暂无动态"):r().createElement(m.Z,null)))),r().createElement(y,null)))};const _=(0,n.memo)(k);var I=function(){var e,t=(0,l.useParams)().id,a=(0,E.xu)({actid:t}),n=a.data,c=a.isLoading,s=(null==n?void 0:n.act)||{};return c?null:r().createElement("div",{className:"border-b"},r().createElement("div",{className:"rounded overflow-hidden border relative"},r().createElement("img",{src:s.coverPCUrl,loading:"lazy",className:"h-56 object-cover block",alt:""}),r().createElement("div",{className:"absolute inset-0 bg-black bg-opacity-20 flex-center flex-col"},r().createElement("div",{style:{minWidth:210},className:"relative max-w-sm min-w- border-t border-b border-white border-opacity-60 py-6 text-white text-xl flex-center text-center flex-col "},r().createElement("div",{className:"flex"},"#",r().createElement("span",{className:"truncate"},s.title),"#"),r().createElement("span",{className:"absolute inset-x-0 text-xs whitespace-nowrap top-full transform -translate-y-1/2"},"".concat(s.participateCount,"人参与"))),r().createElement("button",{type:"button",className:"bg-white flex-center h-9 mt-4 w-52 rounded text-red-500 bg-opacity-90 hover:bg-opacity-100"},r().createElement(i.IconPencil,{size:16}),"立即参与")),r().createElement("button",{type:"button",className:"absolute m-4 w-8 h-8 flex-center top-0 right-0 border text-white border-current rounded-full bg-black bg-opacity-50"},r().createElement(i.IconShare,{size:24,stroke:1}))),r().createElement("ul",{className:"pb-8 text-sm text-gray-500 leading-6"},null===(e=s.text)||void 0===e?void 0:e.map((function(e,t){return r().createElement("li",{key:t},e)}))))};const A=(0,n.memo)(I);var S=function(e){var t=e.actid,a=(0,E.sE)({actid:t}),n=a.data,l=a.isLoading,c=(null==n?void 0:n.events)||[];return l?r().createElement(m.Z,null):r().createElement(u.Z,{list:c})};const C=(0,n.memo)(S),L=(0,n.memo)((function(){var e=(0,l.useParams)().id,t=void 0===e?"":e;return r().createElement("div",{className:"h-full overflow-auto"},r().createElement("div",{className:"flex divide-x"},r().createElement("div",{className:"flex-auto w-0"},r().createElement("div",{className:"px-8 pt-4"},r().createElement(A,null),r().createElement("div",{className:"text-gray-500 mt-4 text-sm"},"热门动态"),r().createElement(C,{actid:t}))),r().createElement("div",{className:"flex-none",style:{width:230}},r().createElement("div",{className:"p-4 text-sm text-gray-700"},"推荐话题"),r().createElement(x,{limit:10}))))}));var P=a(3849),j=a.n(P);function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function Z(e,t,a,n,r,l,c){try{var s=e[l](c),i=s.value}catch(e){return void a(e)}s.done?t(i):Promise.resolve(i).then(n,r)}function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l=[],c=!0,s=!1;try{for(a=a.call(e);!(c=(n=a.next()).done)&&(l.push(n.value),!t||l.length!==t);c=!0);}catch(e){s=!0,r=e}finally{try{c||null==a.return||a.return()}finally{if(s)throw r}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return R(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?R(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const O=(0,n.memo)((function(){var e,t,a=z((0,n.useState)("day"),2),l=a[0],c=a[1],i=z((0,n.useState)([]),2),o=i[0],m=i[1],u=(e=s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m([{title:"你的恋爱人格是什么",count:916},{title:"你的恋爱人格是什么",count:916}]);case 1:case"end":return e.stop()}}),e)})),t=function(){var t=this,a=arguments;return new Promise((function(n,r){var l=e.apply(t,a);function c(e){Z(l,n,r,c,s,"next",e)}function s(e){Z(l,n,r,c,s,"throw",e)}c(void 0)}))},function(){return t.apply(this,arguments)});return(0,n.useEffect)((function(){u()}),[l]),r().createElement("div",{className:" h-full overflow-auto"},r().createElement("div",{className:"flex divide-x"},r().createElement("div",{className:"flex-auto w-0"},r().createElement("div",{className:"h-16 px-8 flex items-center"},r().createElement("span",{className:"text-lg font-bold"},"话题飙升榜"),r().createElement("div",{className:"ml-auto space-x-3 text-gray-300"},r().createElement("button",{type:"button",onClick:function(){return c("day")},className:j()("hover:text-gray-700","day"===l&&"text-gray-700")},"24小时"),r().createElement("span",null,"|"),r().createElement("button",{type:"button",onClick:function(){return c("week")},className:j()("hover:text-gray-700","week"===l&&"text-gray-700")},"7天"))),r().createElement("div",null,o.map((function(e,t){return r().createElement("div",{key:t,className:j()("flex items-center h-20 hover:bg-gray-100",t%2==1&&"bg-gray-50")},r().createElement("div",{className:"w-16 flex-center text-sm "},t+1),r().createElement("div",{className:"w-14 h-14"},r().createElement("img",{src:"",alt:""})),r().createElement("div",null,r().createElement("div",{className:"text-lg"},e.title),r().createElement("div",{className:"text-gray-300"},e.count,"人参与")))})))),r().createElement("div",{className:"domFriend_right flex-none",style:{width:230}},r().createElement("div",{className:"p-4 text-sm text-gray-700"},"推荐话题"),r().createElement(x,{limit:10}))))})),T=(0,n.memo)((function(){return r().createElement("div",{className:""},r().createElement("div",{className:"text-xl p-8 font-bold"},"寻找并邀请好友"),r().createElement("div",{className:"px-8"},r().createElement("div",{className:"space-x-2 text-gray-500"},r().createElement("button",{type:"button"},"已有1位好友加入"),r().createElement("span",null,"|"),r().createElement("button",{type:"button"},"邀请另外3位好友加入")),r().createElement("div",null,"TODO")))})),U=function(){return r().createElement(l.Routes,null,r().createElement(l.Route,{index:!0,element:r().createElement(_,null)}),r().createElement(l.Route,{path:"top",element:r().createElement(O,null)}),r().createElement(l.Route,{path:"Acquaintance",element:r().createElement(T,null)}),r().createElement(l.Route,{path:":id",element:r().createElement(L,null)}))}}}]);
//# sourceMappingURL=Friend.js.map?version=78909b6d