"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[2971],{78400:(e,t,a)=>{a.r(t);var r=a(29604);Object.defineProperty(t,"__esModule",{value:!0});var l=a(48926),n=(0,r.Z)(l),c=a(63038),u=(0,r.Z)(c);a(21249),a(68309);var s=a(87757),d=(0,r.Z)(s),i=a(87363),m=(0,r.Z)(i),f=a(63233),o=a(66711);exports.default=function(){var e=(0,o.useHistory)().push,t=(0,i.useState)([]),a=(0,u.default)(t,2),r=a[0],l=a[1],c=function(){var e=(0,n.default)(d.default.mark((function e(){var t,a;return d.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.apiDjSublist)();case 3:t=e.sent,a=t.djRadios,l(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){c()}),[]),m.default.createElement("div",{className:"overflow-auto max-h-full flex-auto"},m.default.createElement("div",{className:"domSublist_nav px-8 py-5 space-x-4"},m.default.createElement("span",{className:"h1"},"我的播客")),m.default.createElement("div",{className:"domSublist_headerBar ui_headerBar"},m.default.createElement("b",{className:"title"},"我订阅的播客")," ",m.default.createElement("span",{className:"text-gray-400"},"(",r.length,")")),m.default.createElement("div",{className:"domSublist_list"},r.map((function(t){return m.default.createElement("div",{onClick:function(){return e("/playlist/dj/".concat(t.id))},key:t.id,className:"item"},m.default.createElement("div",{className:"cover"},m.default.createElement("img",{className:"",src:"".concat(t.picUrl,"?param=60y60"),alt:""})),m.default.createElement("div",{className:"name truncate"},t.name),m.default.createElement("div",{className:"creator text-gray-400"},"by ",m.default.createElement(o.Link,{to:"/user/".concat(t.dj.userId),className:"ui_text_gray_hover"},t.dj.nickname)),m.default.createElement("div",{className:"size text-gray-400"},"节目",t.programCount))}))))}},52696:(e,t,a)=>{a.r(t);var r=a(29604);Object.defineProperty(t,"__esModule",{value:!0});var l=a(78400);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return(0,r.Z)(l).default}})}}]);