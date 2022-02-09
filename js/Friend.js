"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[144],{6816:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var n=a(7363),l=a.n(n),c=a(6711),r=a(2982),s=a(5861),m=a(885),i=a(7757),o=a.n(i),u=(a(8309),a(2222),a(9428)),d=a(6719),f=a(4716),v=a(8157),E=a(8458),x=a(5219),p=a(5754),N=a(4224),h=(a(1249),function(e){var t=e.list,a=void 0===t?[]:t;return l().createElement("div",{className:"list"},a.map((function(e){return l().createElement(c.Link,{to:"/friend/".concat(e.actId),key:e.actId,className:"py-1 pl-5 flex hover:bg-gray-100"},l().createElement("div",{className:"cover w-8 h-8 flex-none"},l().createElement("img",{className:"rounded",src:"".concat(e.sharePicUrl,"?param=50y50"),alt:""})),l().createElement("div",{className:"content px-2 flex-auto w-0"},l().createElement("div",{className:"title flex items-center"},"#",l().createElement("span",{className:"truncate"},e.title),"#"),l().createElement("div",{className:"participateCount text-gray-300"},"".concat(e.participateCount,"人参与"))))})))});const b=(0,n.memo)(h),y=(0,n.memo)((function(){var e=(0,x.C)((function(e){return e.account})).profile,t=(0,x.T)(),a=(0,n.useState)([]),r=(0,m.Z)(a,2),i=r[0],d=r[1],f=function(){var e=(0,s.Z)(o().mark((function e(){var t,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.oy)({limit:5});case 3:t=e.sent,a=t.hot,d(void 0===a?[]:a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){f()}),[]),l().createElement("div",{className:"flex-none",style:{width:250}},l().createElement("div",{className:""},e.userId?l().createElement("div",{className:"h-40 pt-8 bg-gray-100"},l().createElement("div",{className:"top flex px-5 items-start"},l().createElement(c.Link,{to:"/user/".concat(e.userId),className:"avatar w-12 h-12 rounded-full overflow-hidden"},l().createElement("img",{className:"",src:"".concat(e.avatarUrl,"?param=100y100"),alt:""})),l().createElement("div",{className:"flex-center"},l().createElement(c.Link,{to:"/user/".concat(e.userId),className:"nickname ml-2.5"},e.nickname)," ",l().createElement(p.ZP,{gender:e.gender,size:14}))),l().createElement("div",{className:"infos flex divide-x text-center mt-4"},l().createElement(c.Link,{to:"/user/".concat(e.userId,"/dynamic"),className:"info flex-1 ui_text_black_hover"},l().createElement("div",{className:"num text-xl"},e.eventCount),l().createElement("div",{className:"string"},"动态")),l().createElement(c.Link,{to:"/user/".concat(e.userId,"/follow"),className:"info flex-1 ui_text_black_hover"},l().createElement("div",{className:"num text-xl"},e.follows),l().createElement("div",{className:"string"},"关注")),l().createElement(c.Link,{to:"/user/".concat(e.userId,"/fans"),className:"info flex-1 ui_text_black_hover"},l().createElement("div",{className:"num text-xl"},e.followeds),l().createElement("div",{className:"string"},"粉丝")))):l().createElement("div",{className:"nologin px-5"},l().createElement("div",{style:{height:170}}),l().createElement("div",{className:"tips text-center text-gray-500"},"登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机"),l().createElement("button",{type:"button",className:"ui_theme_bg_color text-white w-full h-10 mt-4 rounded-full",onClick:function(){return t((0,N.setLoginVisibilty)())}},"立即登录"))),l().createElement("div",{className:"mt-5"},l().createElement("div",{className:"flex px-5 mb-2.5"},l().createElement("span",{className:"font-bold"},"热门话题"),l().createElement(c.Link,{className:"text-gray-400 ml-auto",to:"/friend/top"},"更多 >")),l().createElement(b,{list:i})),l().createElement("div",{className:"mt-8"},l().createElement("div",{className:"flex px-5 mb-2.5"},l().createElement("span",{className:"font-bold"},"认识的人"),l().createElement(c.Link,{className:"text-gray-400 ml-auto",to:"/friend/acquaintance"},"更多 >"))),l().createElement("div",{className:"mt-8"},l().createElement("div",{className:"flex px-5 mb-2.5"},l().createElement("span",{className:"font-bold"},"添加关注"))))})),g=(0,n.memo)((function(){var e=(0,n.useState)([]),t=(0,m.Z)(e,2),a=t[0],c=t[1],i=(0,n.useRef)(null),x=(0,n.useRef)(null),p=(0,n.useRef)(-1),N=function(){var e=(0,s.Z)(o().mark((function e(){var t,a,n,l,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.Nz)({lasttime:p.current});case 3:t=e.sent,a=t.event,n=void 0===a?[]:a,l=t.lasttime,s=void 0===l?-1:l,p.current=s,c((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(n))})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){c([])}),[]),(0,f.Z)(N,i,x),l().createElement("div",{className:"h-full overflow-auto",ref:i},l().createElement("div",{className:"flex divide-x min-h-full"},l().createElement("div",{className:"relative flex-auto"},l().createElement("div",{className:"h-14 px-8 flex items-center sticky top-0 z-10 bg-white"},l().createElement("span",{className:"h1"},"动态"),l().createElement("button",{type:"button",className:"flex ml-auto items-center ui_theme_bg_color text-white h-6 px-3 rounded-full"},l().createElement(d.IconPlus,{size:12,stroke:5}),"写动态")),l().createElement("div",{className:"domFriend_content"},l().createElement("div",{className:"px-8"},l().createElement(E.Z,{list:a})),l().createElement("div",{className:"flex-center",ref:x},0===a.length?l().createElement("div",{className:"empty text-center text-gray-400 pt-48"},"暂无动态"):l().createElement(v.Z,null)))),l().createElement(y,null)))})),w=(0,n.memo)((function(){var e,t=(0,c.useParams)().id;console.log(t);var a=(0,n.useState)({}),r=(0,m.Z)(a,2),i=(r[0],r[1],(0,n.useState)({})),v=(0,m.Z)(i,2),x=v[0],p=v[1],N=(0,n.useState)([]),h=(0,m.Z)(N,2),y=h[0],g=h[1],w=(0,n.useState)([]),k=(0,m.Z)(w,2),Z=k[0],_=k[1],C=(0,n.useRef)(null),I=(0,n.useRef)(null),R=function(){var e=(0,s.Z)(o().mark((function e(){var a,n,l,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.bv)({actid:t});case 3:return a=e.sent,n=a.act,e.next=7,(0,u.oy)({limit:10});case 7:l=e.sent,c=l.hot,p(n),g(c),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),S=(0,n.useCallback)((0,s.Z)(o().mark((function e(){var a,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("handleInitEvent"),e.prev=1,e.next=4,(0,u.Mx)({actid:t});case 4:a=e.sent,n=a.events,_(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),[t]);return(0,f.Z)(S,C,I),(0,n.useEffect)((function(){_([]),R()}),[t]),l().createElement("div",{className:"domFriend h-full overflow-auto",ref:C},l().createElement("div",{className:"flex divide-x"},l().createElement("div",{className:"domFriend_left flex-auto w-0"},l().createElement("div",{className:"px-8 pt-4"},l().createElement("div",{className:"border-b"},l().createElement("div",{className:"rounded overflow-hidden border relative"},l().createElement("img",{src:x.coverPCUrl,loading:"lazy",className:"h-56 object-cover block",alt:""}),l().createElement("div",{className:"absolute inset-0 bg-black bg-opacity-20 flex-center flex-col"},l().createElement("div",{style:{minWidth:210},className:"relative max-w-sm min-w- border-t border-b border-white border-opacity-60 py-6 text-white text-xl flex-center text-center flex-col "},l().createElement("div",{className:"flex"},"#",l().createElement("span",{className:"truncate"},x.title),"#"),l().createElement("span",{className:"absolute inset-x-0 text-xs whitespace-nowrap top-full transform -translate-y-1/2"},"".concat(x.participateCount,"人参与"))),l().createElement("button",{type:"button",className:"bg-white flex-center h-9 mt-4 w-52 rounded text-red-500 bg-opacity-90 hover:bg-opacity-100"},l().createElement(d.IconPencil,{size:16}),"立即参与")),l().createElement("button",{type:"button",className:"absolute m-4 w-8 h-8 flex-center top-0 right-0 border text-white border-current rounded-full bg-black bg-opacity-50"},l().createElement(d.IconShare,{size:24,stroke:1}))),l().createElement("ul",{className:"pb-8 text-sm text-gray-500 leading-6"},null===(e=x.text)||void 0===e?void 0:e.map((function(e,t){return l().createElement("li",{key:t},e)})))),l().createElement(E.Z,{list:Z}),l().createElement("div",{ref:I}))),l().createElement("div",{className:"domFriend_right flex-none",style:{width:230}},l().createElement("div",{className:"p-4 text-sm text-gray-700"},"推荐话题"),l().createElement(b,{list:y}))))}));var k=a(4184),Z=a.n(k);const _=(0,n.memo)((function(){var e=(0,n.useState)("day"),t=(0,m.Z)(e,2),a=t[0],c=t[1],r=(0,n.useState)([]),i=(0,m.Z)(r,2),d=i[0],f=i[1],v=(0,n.useState)([]),E=(0,m.Z)(v,2),x=E[0],p=E[1],N=function(){var e=(0,s.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p([{title:"你的恋爱人格是什么",count:916},{title:"你的恋爱人格是什么",count:916}]);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=(0,s.Z)(o().mark((function e(){var t,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.oy)({limit:10});case 3:t=e.sent,a=t.hot,f(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){h()}),[]),(0,n.useEffect)((function(){N()}),[a]),l().createElement("div",{className:" h-full overflow-auto"},l().createElement("div",{className:"flex divide-x"},l().createElement("div",{className:"flex-auto w-0"},l().createElement("div",{className:"h-16 px-8 flex items-center"},l().createElement("span",{className:"text-lg font-bold"},"话题飙升榜"),l().createElement("div",{className:"ml-auto space-x-3 text-gray-300"},l().createElement("button",{type:"button",onClick:function(){return c("day")},className:Z()("hover:text-gray-700","day"===a&&"text-gray-700")},"24小时"),l().createElement("span",null,"|"),l().createElement("button",{type:"button",onClick:function(){return c("week")},className:Z()("hover:text-gray-700","week"===a&&"text-gray-700")},"7天"))),l().createElement("div",null,x.map((function(e,t){return l().createElement("div",{key:t,className:Z()("flex items-center h-20 hover:bg-gray-100",t%2==1&&"bg-gray-50")},l().createElement("div",{className:"w-16 flex-center text-sm "},t+1),l().createElement("div",{className:"w-14 h-14"},l().createElement("img",{src:"",alt:""})),l().createElement("div",null,l().createElement("div",{className:"text-lg"},e.title),l().createElement("div",{className:"text-gray-300"},e.count,"人参与")))})))),l().createElement("div",{className:"domFriend_right flex-none",style:{width:230}},l().createElement("div",{className:"p-4 text-sm text-gray-700"},"推荐话题"),l().createElement(b,{list:d}))))})),C=(0,n.memo)((function(){return l().createElement("div",{className:""},l().createElement("div",{className:"text-xl p-8 font-bold"},"寻找并邀请好友"),l().createElement("div",{className:"px-8"},l().createElement("div",{className:"space-x-2 text-gray-500"},l().createElement("button",{type:"button"},"已有1位好友加入"),l().createElement("span",null,"|"),l().createElement("button",{type:"button"},"邀请另外3位好友加入")),l().createElement("div",null,"TODO")))})),I=function(){return l().createElement(c.Routes,null,l().createElement(c.Route,{index:!0,element:l().createElement(g,null)}),l().createElement(c.Route,{path:"top",element:l().createElement(_,null)}),l().createElement(c.Route,{path:"Acquaintance",element:l().createElement(C,null)}),l().createElement(c.Route,{path:":id",element:l().createElement(w,null)}))}}}]);
//# sourceMappingURL=Friend.js.map?version=c4167874