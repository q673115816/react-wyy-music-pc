"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[6117],{9314:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var r=a(2982),n=a(5861),c=a(885),s=a(7757),l=a.n(s),u=(a(2222),a(1249),a(8309),a(7363)),i=a.n(u),m=a(6711),o=a(5457),d=a(9709),f=a(4849);const p=(0,u.memo)((function(e){var t=e.type,a=e.rid,s=(0,u.useState)([]),p=(0,c.Z)(s,2),v=p[0],E=p[1],h=(0,u.useRef)(),x=(0,u.useRef)(),y=(0,u.useRef)(0),w=function(){var e=(0,n.Z)(l().mark((function e(){var t,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.vO)({cateId:a,limit:40,offset:y.current});case 3:t=e.sent,n=t.djRadios,y.current+=40,E((function(e){return[].concat((0,r.Z)(e),(0,r.Z)(n))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){E([]),y.current=0}),[a]),(0,d.Z)(w,h,x),i().createElement("div",{className:"overflow-auto h-full",ref:h},i().createElement("div",{className:"ui_header h1"},t),i().createElement("div",{className:"grid grid-cols-2 gap-5 px-8"},v.map((function(e){return i().createElement(m.Link,{key:e.id,to:"/playlist/dj/".concat(e.id),className:"flex"},i().createElement("div",{className:"w-32 rounded overflow-hidden border ui_aspect-ratio-1/1"},i().createElement("img",{src:"".concat(e.picUrl,"?param=200y200"),alt:""})),i().createElement("div",{className:"flex-auto w-0 px-2 pt-8"},i().createElement("div",{className:"ui_text_black_hover text-sm"},e.name),i().createElement("div",{className:"text-gray-400 mt-4"},e.rcmdtext),i().createElement("div",{className:"text-gray-400 mt-2"},"节目：",i().createElement("span",null,e.programCount),"，订阅：",i().createElement("span",null,e.subCount))))}))),i().createElement("div",{ref:x,className:"flex-center"},i().createElement(f.Z,null)))}))}}]);