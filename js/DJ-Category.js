"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[136],{3691:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var n=a(7363),r=a.n(n),c=a(6711),l=a(2982),s=a(5861),u=a(885),m=a(7757),i=a.n(m),o=(a(2222),a(1249),a(8309),a(9428)),d=a(4716),f=a(8157),p=function(){var e=(0,c.useParams)(),t=e.type,a=e.rid,m=(0,n.useState)([]),p=(0,u.Z)(m,2),v=p[0],E=p[1],h=(0,n.useRef)(),x=(0,n.useRef)(),y=(0,n.useRef)(0),N=function(){var e=(0,s.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.vO)({cateId:a,limit:40,offset:y.current});case 3:t=e.sent,n=t.djRadios,y.current+=40,E((function(e){return[].concat((0,l.Z)(e),(0,l.Z)(n))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){E([]),y.current=0}),[a]),(0,d.Z)(N,h,x),r().createElement("div",{className:"overflow-auto h-full",ref:h},r().createElement("div",{className:"ui_header h1"},t),r().createElement("div",{className:"grid grid-cols-2 gap-5 px-8"},v.map((function(e){return r().createElement(c.Link,{key:e.id,to:"/playlist/dj/".concat(e.id),className:"flex"},r().createElement("div",{className:"w-32 rounded overflow-hidden border"},r().createElement("img",{loading:"lazy",className:"aspect-square",src:"".concat(e.picUrl,"?param=200y200"),alt:""})),r().createElement("div",{className:"flex-auto w-0 px-2 pt-8"},r().createElement("div",{className:"ui_text_black_hover text-sm"},e.name),r().createElement("div",{className:"text-gray-400 mt-4"},e.rcmdtext),r().createElement("div",{className:"text-gray-400 mt-2"},"节目：",r().createElement("span",null,e.programCount),"，订阅：",r().createElement("span",null,e.subCount))))}))),r().createElement("div",{ref:x,className:"flex-center"},r().createElement(f.Z,null)))};const v=(0,n.memo)(p),E=function(){return r().createElement(c.Routes,null,r().createElement(c.Route,{path:":type/:rid",element:r().createElement(v,null)}))}}}]);
//# sourceMappingURL=DJ-Category.js.map?version=e1b28d3e