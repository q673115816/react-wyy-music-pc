"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[2971],{919:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(2137),r=a(9351),c=(a(1249),a(8309),a(7757)),s=a.n(c),l=a(3804),i=a.n(l),m=a(6866),u=a(847);const o=function(){var e=(0,u.useHistory)().push,t=(0,l.useState)([]),a=(0,r.Z)(t,2),c=a[0],o=a[1],d=function(){var e=(0,n.Z)(s().mark((function e(){var t,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m.Ft)();case 3:t=e.sent,a=t.djRadios,o(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){d()}),[]),i().createElement("div",{className:"overflow-auto max-h-full flex-auto"},i().createElement("div",{className:"domSublist_nav px-8 py-5 space-x-4"},i().createElement("span",{className:"h1"},"我的播客")),i().createElement("div",{className:"domSublist_headerBar ui_headerBar"},i().createElement("b",{className:"title"},"我订阅的播客")," ",i().createElement("span",{className:"text-gray-400"},"(",c.length,")")),i().createElement("div",{className:"domSublist_list"},c.map((function(t){return i().createElement("div",{onClick:function(){return e("/playlist/dj/".concat(t.id))},key:t.id,className:"item"},i().createElement("div",{className:"cover"},i().createElement("img",{className:"",src:"".concat(t.picUrl,"?param=60y60"),alt:""})),i().createElement("div",{className:"name truncate"},t.name),i().createElement("div",{className:"creator text-gray-400"},"by ",i().createElement(u.Link,{to:"/user/".concat(t.dj.userId),className:"ui_text_gray_hover"},t.dj.nickname)),i().createElement("div",{className:"size text-gray-400"},"节目",t.programCount))}))))}}}]);