"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[6716],{5298:(e,t,c)=>{c.r(t),c.d(t,{default:()=>d});var n=c(5861),a=c(7757),l=c.n(a),i=(c(2222),c(8309),c(7042),c(5827),c(1539),c(7363)),r=c.n(i),m=c(1624),s=c(7788),o=c(3011),u=c(4640),E=c(5295),f={songs:"单曲"};const d=function(){var e=(0,m.useDispatch)(),t=(0,m.useSelector)((function(e){return e.mask})),c=t.dialogShareVisibility,a=t.contextMenuType,i=t.contextMenuItemId,d=t.contextMenuItem,v=(0,m.useSelector)((function(e){return e.account})).profile,h=(0,m.useSelector)((function(e){return e.common})).baseUrl,p="".concat(h,"/").concat(a,"?id=").concat(i,"&userId=").concat(v.userId),N=function(){var t=(0,n.Z)(l().mark((function t(){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(0,E.Z)(p,(function(){e((0,o.setToast)("复制链接成功"))})),e((0,o.setDialogReset)());case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return c?r().createElement(u.Z,{id:"dialogShare",title:"分享"},r().createElement("div",{className:"list divide-y divide-fuchsia-300"},r().createElement("div",null,r().createElement("button",{type:"button",className:"item flex items-center"},r().createElement("i",{className:"ico"},r().createElement(s.QA,{active:!0})),"分享到云音乐动态")),r().createElement("div",null,r().createElement("button",{type:"button",className:"item flex items-center"},r().createElement("i",{className:"ico"},r().createElement(s.Ro,{active:!0})),"私信分享")),r().createElement("div",null,r().createElement("button",{type:"button",className:"item flex items-center",onClick:function(){e((0,o.setDialogShareWXShow)())}},r().createElement("i",{className:"ico"},r().createElement(s.PT,{active:!0})),"微信好友")),r().createElement("div",null,r().createElement("a",{target:"_block",href:"https://connect.qq.com/widget/shareqq/index.html?site=网易云音乐&url=".concat(p,"&from=qq&title=分享").concat(f[a],"：").concat(d.name,"&summary=").concat(d.ar.reduce((function(e,t){return"".concat(e,"/").concat(t.name)}),"").slice(1),"&pics=").concat(d.al.picUrl,"?imageView&thumbnail=120y120"),className:"item flex items-center"},r().createElement("i",{className:"ico"},r().createElement(s.B3,{active:!0})),"QQ好友")),r().createElement("div",null,r().createElement("a",{href:"#",className:"item flex items-center"},r().createElement("i",{className:"ico"},r().createElement(s.uq,{active:!0})),"QQ空间")),r().createElement("div",null,r().createElement("a",{href:"#",className:"item flex items-center"},r().createElement("i",{className:"ico"},r().createElement(s.Hl,{active:!0})),"微博")),r().createElement("div",null,r().createElement("button",{onClick:N,type:"button",className:"item flex items-center"},r().createElement("i",{className:"ico"},r().createElement(s.qo,{active:!0})),"复制链接")))):null}}}]);