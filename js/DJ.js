"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[971],{9231:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(7363),r=a.n(n),c=a(6711),s=a(5861),l=a(885),m=(a(1249),a(8309),a(7757)),i=a.n(m),u=a(9428);function o(){var e=(0,c.useNavigate)(),t=(0,n.useState)([]),a=(0,l.Z)(t,2),m=a[0],o=a[1],d=function(){var e=(0,s.Z)(i().mark((function e(){var t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.Ft)();case 3:t=e.sent,a=t.djRadios,o(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){d()}),[]),r().createElement("div",{className:"overflow-auto max-h-full flex-auto"},r().createElement("div",{className:"domSublist_nav px-8 py-5 space-x-4"},r().createElement("span",{className:"h1"},"我的播客")),r().createElement("div",{className:"domSublist_headerBar ui_headerBar"},r().createElement("b",{className:"title"},"我订阅的播客")," ",r().createElement("span",{className:"text-gray-400"},"(",m.length,")")),r().createElement("div",{className:"domSublist_list"},m.map((function(t){return r().createElement("div",{onClick:function(){return e("/playlist/dj/".concat(t.id))},key:t.id,className:"item"},r().createElement("div",{className:"cover"},r().createElement("img",{className:"",src:"".concat(t.picUrl,"?param=60y60"),alt:""})),r().createElement("div",{className:"name truncate"},t.name),r().createElement("div",{className:"creator text-gray-400"},"by ",r().createElement(c.Link,{to:"/user/".concat(t.dj.userId),className:"ui_text_gray_hover"},t.dj.nickname)),r().createElement("div",{className:"size text-gray-400"},"节目",t.programCount))}))))}const d=(0,n.memo)(o),v=function(){return r().createElement(c.Routes,null,r().createElement(c.Route,{index:!0,element:r().createElement(d,null)}))}}}]);
//# sourceMappingURL=DJ.js.map?version=5f34a797