"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[971],{6073:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(7363),r=a.n(n),c=a(6711),l=a(4719),s=a(4184),m=a.n(s),i=a(2476);function o(){var e=(0,c.useNavigate)(),t=(0,i.$$)(),a=t.data,n=t.isLoading,s=(null==a?void 0:a.djRadios)||[],o=(null==a?void 0:a.count)||0;return n?r().createElement("div",{className:"flex-center"},r().createElement(l.Z,null)):r().createElement("div",{className:"overflow-auto max-h-full flex-auto"},r().createElement("div",{className:"px-8 py-5 space-x-4"},r().createElement("span",{className:"h1"},"我的播客")),r().createElement("div",{className:"ui_headerBar"},r().createElement("b",{className:"text-sm"},"收藏的播客")," ",r().createElement("span",{className:"text-gray-300"},"(",o,")")),r().createElement("div",{className:"domSublist_list"},s.map((function(t,a){return r().createElement("div",{onClick:function(){return e("/playlist/dj/".concat(t.id))},key:t.id,className:m()("sublistItem hover:bg-gray-100 items-center cursor-pointer",a%2==0&&"bg-gray-50")},r().createElement("div",{className:"rounded overflow-hidden border w-16 h-16"},r().createElement("img",{className:"",src:"".concat(t.picUrl,"?param=60y60"),alt:""})),r().createElement("div",{className:"px-2.5 truncate"},t.name),r().createElement("div",{className:"creator text-gray-400"},"by ",r().createElement(c.Link,{onClick:function(e){return e.stopPropagation()},to:"/user/".concat(t.dj.userId),className:"ui_text_gray_hover"},t.dj.nickname)),r().createElement("div",{className:"text-gray-400"},"节目",t.programCount))}))))}const u=(0,n.memo)(o),d=function(){return r().createElement(c.Routes,null,r().createElement(c.Route,{index:!0,element:r().createElement(u,null)}))}}}]);
//# sourceMappingURL=DJ.js.map?version=d9e6f025