"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[413],{6429:(e,t,a)=>{a.r(t),a.d(t,{default:()=>z});var n=a(7363),l=a.n(n),r=a(6711),c=(a(7941),a(2526),a(7327),a(1539),a(5003),a(4747),a(9337),a(3321),a(9070),a(4942)),s=a(5861),i=a(885),o=a(7757),m=a.n(o),u=(a(1874),a(9653),a(8309),a(6977),a(1249),a(4916),a(4184)),d=a.n(u),p=a(7484),f=a.n(p),E=a(3578),v=a(9428),y=a(5721),b=a(7390),g=a(1337),N=a(364),h=a(8123),x=a(3850),S=a(6719);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach((function(t){(0,c.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var _=function(e,t,a){return String(e[a.code]).localeCompare(String(t[a.code]),"zh-CN")*a.type},O=[["音乐标题","songName",_],["歌手","artist",_],["专辑","album",_],["格式","",_],["大小","fileSize",function(e,t,a){return(Number.parseFloat(e[a.code])-Number.parseFloat(t[a.code]))*a.type}],["上传时间","addTime",function(e,t,a){return(e[a.code]-t[a.code])*a.type}]],Z=function(){var e=(0,n.useState)(!1),t=(0,i.Z)(e,2),a=t[0],r=t[1],c=(0,n.useState)(""),o=(0,i.Z)(c,2),u=o[0],p=o[1],k=(0,n.useState)([]),_=(0,i.Z)(k,2),Z=_[0],j=_[1],z=(0,n.useState)(0),C=(0,i.Z)(z,2),P=(C[0],C[1]),I=(0,n.useState)(""),M=(0,i.Z)(I,2),D=M[0],F=M[1],Y=(0,n.useState)(""),R=(0,i.Z)(Y,2),T=R[0],B=R[1],G=(0,n.useState)({name:"上传时间",type:-1,code:"addTime",callback:function(e,t,a){return(e[a.code]-t[a.code])*a.type}}),V=(0,i.Z)(G,2),L=V[0],U=V[1],$=function(){var e=(0,s.Z)(m().mark((function e(){var t,a,n,l,r,c,s,i,o;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.bx)({limit:100});case 3:t=e.sent,a=t.data,n=void 0===a?[]:a,l=t.count,r=void 0===l?0:l,c=t.maxSize,s=void 0===c?0:c,i=t.size,o=void 0===i?0:i,j(n),P(r),F(s),B(o),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){$()}),[]),l().createElement("div",{className:"domManage overflow-auto h-full"},l().createElement("div",{className:"domManage_header ui_header"},l().createElement("span",{className:"domManage_header_title h1"},"我的音乐云盘")),l().createElement("div",{className:"domCloud_info py-2.5 px-8"},l().createElement("span",null,"云盘容量")," ",l().createElement("div",{className:"ui_process",style:{"--ratio":T/D||0}})," ",l().createElement("span",{className:"num"},(T/1024/1024/1024).toFixed(2),"G/",D/1024/1024/1024,"G")," ",l().createElement("span",{className:"ml-8"},"歌曲永久保存，随时随地多端畅听")," ",l().createElement("a",{href:"https://music.163.com/#/store/product/detail?id=34001",className:"ui_link"},"扩容")),l().createElement("div",{className:"ui_headerBar border-b"},l().createElement("div",{className:"left space-x-2"},l().createElement(N.Z,null),l().createElement("button",{type:"button",className:"flex-center ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"},l().createElement(S.IconPlus,{size:20}),"  上传音乐")),l().createElement("div",{className:"right"},l().createElement(E.Z,{search:u,setSearch:p,placeholder:"搜索我的音乐云盘"}))),l().createElement("div",{className:"overflow-auto max-h-full flex-auto",style:{paddingLeft:30,paddingRight:20}},l().createElement("div",{className:"domManage_table",style:{"--ui_grid_template":"36px / 30px 30px 8fr 3fr 3fr 2fr 2fr 4fr"}},l().createElement("div",{className:"thead"},l().createElement("div",{className:"tr grid ui_grid_template items-center"},l().createElement("div",null),l().createElement("div",null),O.map((function(e){var t=(0,i.Z)(e,3),a=t[0],n=t[1],r=t[2];return l().createElement("div",{key:a,className:d()("cell px-1","th",{on:a===L.name}),onClick:function(){return function(e){if(L.name!==e.name)return U(w(w({},e),{},{type:1}));switch(L.type){case-1:return U({name:"",code:"",callback:function(e,t){return 0},type:0});case 1:return U(w(w({},e),{},{type:-1}));default:return U(w(w({},e),{},{type:1}))}}({item:a,code:n,callback:r})}},a,l().createElement("span",{className:"sort"},function(e,t){return t.name!==e?l().createElement(S.IconSwitchVertical,{size:14,color:"#f00",stroke:1}):-1===t.type?l().createElement(S.IconCaretDown,{size:20,stroke:0,fill:"#000"}):1===t.type?l().createElement(S.IconCaretUp,{size:12,stroke:0,fill:"#000"}):0===t.type?l().createElement(S.IconSwitchVertical,{size:14,color:"#f00",stroke:1}):void 0}(a,L)))})))),l().createElement("div",{className:"tbody"},Z.map((function(e,t){var a,n,r,c,s,i,o;return l().createElement(y.Z,{type:"song",item:e,schema:[["播放","下一首播放"],["收藏到歌单","分享","下载"],["删除"]],key:e.songId},l().createElement("div",{className:d()("tr grid ui_grid_template items-center hover:bg-gray-100 focus:outline-none focus:bg-gray-200",t%2==0&&"bg-gray-50"),tabIndex:2},l().createElement("div",{className:"cell px-1 index text-gray-400"},l().createElement(b.Z,{index:t,id:e.songId})),l().createElement("div",{className:"cell px-1 download"},l().createElement(g.Z,null)),l().createElement("div",{className:"cell px-1 name truncate",title:e.songName+(null===(a=e.simpleSong)||void 0===a||null===(n=a.tns)||void 0===n?void 0:n.length)>0?"（".concat(null===(r=e.simpleSong)||void 0===r?void 0:r.tns,"）"):""},e.songName,(null===(c=e.simpleSong)||void 0===c||null===(s=c.tns)||void 0===s?void 0:s.length)>0&&l().createElement("span",{className:"text-gray-500"},"（".concat(e.simpleSong.tns,"）"))),l().createElement(h.Z,{className:"px-1",artists:e.simpleSong.ar}),l().createElement(x.Z,{className:"px-1",name:e.album,id:null===(i=e.simpleSong)||void 0===i||null===(o=i.al)||void 0===o?void 0:o.id}),l().createElement("div",{className:"cell px-1 truncate uppercase"},/(?<=\.)(\w*)$/.exec(e.fileName)[0]),l().createElement("div",{className:"cell px-1 truncate"},(e.fileSize/1024/1024).toFixed(1),"MB"),l().createElement("div",{className:"cell px-1 truncate text-gray-400"},f()(e.addTime).format("YYYY-MM-DD"))))}))))),l().createElement("div",{className:"domManage_dialog",style:{display:a?"":"none"}},l().createElement("button",{type:"button",className:"close",onClick:function(){r(!a)}},"×"),l().createElement("div",{className:"title"},"选择本地音乐文件夹"),l().createElement("div",{className:"tips"},"将自动扫描您勾选的目录，文件增删实时同步。"),l().createElement("ul",null,l().createElement("li",null,l().createElement("span",{className:"checkbox"},l().createElement("input",{type:"text"}),l().createElement("i",{className:"material-icons"},"checkbox")),"暂时没法做")),l().createElement("div",{className:"actions"},l().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full red"},"确认"),l().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"},"添加文件"))))};const j=(0,n.memo)(Z),z=function(){return l().createElement(r.Routes,null,l().createElement(r.Route,{index:!0,element:l().createElement(j,null)}))}}}]);
//# sourceMappingURL=Cloud.js.map?version=bf5e42c9