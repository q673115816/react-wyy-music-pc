"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[6117],{89314:(e,t,a)=>{a.r(t);var l=a(29604);Object.defineProperty(t,"__esModule",{value:!0});var r=a(319),n=(0,l.Z)(r),u=a(48926),c=(0,l.Z)(u),s=a(63038),d=(0,l.Z)(s),f=a(87757),i=(0,l.Z)(f);a(92222),a(21249),a(68309);var o=a(87363),m=(0,l.Z)(o),p=a(66711),v=a(63233),E=a(99709),x=(0,l.Z)(E),h=a(74849),y=(0,l.Z)(h);exports.default=(0,o.memo)((function(e){var t=e.type,a=e.rid,l=(0,o.useState)([]),r=(0,d.default)(l,2),u=r[0],s=r[1],f=(0,o.useRef)(),E=(0,o.useRef)(),h=(0,o.useRef)(0),N=function(){var e=(0,c.default)(i.default.mark((function e(){var t,l;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.apiDjRadioHot)({cateId:a,limit:40,offset:h.current});case 3:t=e.sent,l=t.djRadios,h.current+=40,s((function(e){return[].concat((0,n.default)(e),(0,n.default)(l))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){s([]),h.current=0}),[a]),(0,x.default)(N,f,E),m.default.createElement("div",{className:"overflow-auto h-full",ref:f},m.default.createElement("div",{className:"ui_header h1"},t),m.default.createElement("div",{className:"grid grid-cols-2 gap-5 px-8"},u.map((function(e){return m.default.createElement(p.Link,{key:e.id,to:"/playlist/dj/".concat(e.id),className:"flex"},m.default.createElement("div",{className:"w-32 rounded overflow-hidden border"},m.default.createElement("img",{loading:"lazy",className:"ui_aspect-ratio-1/1",src:"".concat(e.picUrl,"?param=200y200"),alt:""})),m.default.createElement("div",{className:"flex-auto w-0 px-2 pt-8"},m.default.createElement("div",{className:"ui_text_black_hover text-sm"},e.name),m.default.createElement("div",{className:"text-gray-400 mt-4"},e.rcmdtext),m.default.createElement("div",{className:"text-gray-400 mt-2"},"节目：",m.default.createElement("span",null,e.programCount),"，订阅：",m.default.createElement("span",null,e.subCount))))}))),m.default.createElement("div",{ref:E,className:"flex-center"},m.default.createElement(y.default,null)))}))}}]);