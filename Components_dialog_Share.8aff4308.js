"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[6716],{35298:(e,t,a)=>{a.r(t);var l=a(29604);Object.defineProperty(t,"__esModule",{value:!0});var c=a(48926),n=(0,l.Z)(c),u=a(87757),r=(0,l.Z)(u);a(92222),a(68309),a(47042),a(85827);var i=a(87363),m=(0,l.Z)(i),s=a(21624),o=a(7788),f=a(93011),d=a(34640),E=(0,l.Z)(d);a(51762);var v=a(15295),b=(0,l.Z)(v),y={songs:"单曲"};exports.default=function(){var e=(0,s.useDispatch)(),t=(0,s.useSelector)((function(e){return e.mask})),a=t.dialogShareVisibility,l=t.contextMenuType,c=t.contextMenuItemId,u=t.contextMenuItem,i=(0,s.useSelector)((function(e){return e.account})).profile,d=(0,s.useSelector)((function(e){return e.common})).baseUrl,v="".concat(d,"/").concat(l,"?id=").concat(c,"&userId=").concat(i.userId),h=function(){var t=(0,n.default)(r.default.mark((function t(){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(0,b.default)(v,(function(){e((0,f.setToast)("复制链接成功"))})),e((0,f.setDialogReset)());case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return a?m.default.createElement(E.default,{id:"dialogShare",title:"分享"},m.default.createElement("div",{className:"list divide-y divide-fuchsia-300"},m.default.createElement("div",null,m.default.createElement("button",{type:"button",className:"item flex items-center"},m.default.createElement("i",{className:"ico"},m.default.createElement(o.SymbolWYY,{active:!0})),"分享到云音乐动态")),m.default.createElement("div",null,m.default.createElement("button",{type:"button",className:"item flex items-center"},m.default.createElement("i",{className:"ico"},m.default.createElement(o.SymbolSX,{active:!0})),"私信分享")),m.default.createElement("div",null,m.default.createElement("button",{type:"button",className:"item flex items-center",onClick:function(){e((0,f.setDialogShareWXShow)())}},m.default.createElement("i",{className:"ico"},m.default.createElement(o.SymbolWX,{active:!0})),"微信好友")),m.default.createElement("div",null,m.default.createElement("a",{target:"_block",href:"https://connect.qq.com/widget/shareqq/index.html?site=网易云音乐&url=".concat(v,"&from=qq&title=分享").concat(y[l],"：").concat(u.name,"&summary=").concat(u.ar.reduce((function(e,t){return"".concat(e,"/").concat(t.name)}),"").slice(1),"&pics=").concat(u.al.picUrl,"?imageView&thumbnail=120y120"),className:"item flex items-center"},m.default.createElement("i",{className:"ico"},m.default.createElement(o.SymbolQQ,{active:!0})),"QQ好友")),m.default.createElement("div",null,m.default.createElement("a",{href:"#",className:"item flex items-center"},m.default.createElement("i",{className:"ico"},m.default.createElement(o.SymbolQZ,{active:!0})),"QQ空间")),m.default.createElement("div",null,m.default.createElement("a",{href:"#",className:"item flex items-center"},m.default.createElement("i",{className:"ico"},m.default.createElement(o.SymbolWB,{active:!0})),"微博")),m.default.createElement("div",null,m.default.createElement("button",{onClick:h,type:"button",className:"item flex items-center"},m.default.createElement("i",{className:"ico"},m.default.createElement(o.SymbolLJ,{active:!0})),"复制链接")))):null}},51762:(e,t,a)=>{a.r(t)}}]);