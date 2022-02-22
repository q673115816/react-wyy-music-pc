"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[413],{8885:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var a=n(7363),l=n.n(a),r=n(6711),c=n(4184),i=n.n(c),o=n(7484),s=n.n(o),m=n(3619),u=n(7264),d=n(2837),p=n(2e3),f=n(1485),y=n(9929),v=n(5101),E=n(6719),b=n(8690);function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(){return N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},N.apply(this,arguments)}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){h(e,t,n[t])}))}return e}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(a=n.next()).done)&&(r.push(a.value),!t||r.length!==t);c=!0);}catch(e){i=!0,l=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw l}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var S=function(e,t,n){return String(e[n.code]).localeCompare(String(t[n.code]),"zh-CN")*n.type},k=[["音乐标题","songName",S],["歌手","artist",S],["专辑","album",S],["格式","",S],["大小","fileSize",function(e,t,n){return(Number.parseFloat(e[n.code])-Number.parseFloat(t[n.code]))*n.type}],["上传时间","addTime",function(e,t,n){return(e[n.code]-t[n.code])*n.type}]],_=function(){var e=w((0,a.useState)(!1),2),t=e[0],n=e[1],r=w((0,a.useState)(""),2),c=r[0],o=r[1],g=w((0,a.useState)({name:"上传时间",type:-1,code:"addTime",callback:function(e,t,n){return(e[n.code]-t[n.code])*n.type}}),2),h=g[0],S=g[1],_=(0,b.eo)({limit:100}),j=_.data,O=void 0===j?{}:j,I=_.isLoading,z=O.data,C=void 0===z?[]:z,M=(O.count,O.maxSize),Z=void 0===M?"":M,A=O.size,P=void 0===A?"":A;return I?null:l().createElement("div",{className:"domManage overflow-auto h-full"},l().createElement("div",{className:"domManage_header ui_header"},l().createElement("span",{className:"domManage_header_title h1"},"我的音乐云盘")),l().createElement("div",{className:"domCloud_info py-2.5 px-8"},l().createElement("span",null,"云盘容量")," ",l().createElement("div",{className:"w-28 h-2.5 inline-block bg-gray-200 rounded-full overflow-hidden"},l().createElement("div",{className:"h-full bg-blue-600",style:{width:P/Z*100||0}}))," ",l().createElement("span",{className:"num"},(P/1024/1024/1024).toFixed(2),"G/",Z/1024/1024/1024,"G")," ",l().createElement("span",{className:"ml-8"},"歌曲永久保存，随时随地多端畅听")," ",l().createElement("a",{href:"https://music.163.com/#/store/product/detail?id=34001",className:"ui_link"},"扩容")),l().createElement("div",{className:"ui_headerBar border-b"},l().createElement("div",{className:"left space-x-2"},l().createElement(f.Z,null),l().createElement("button",{type:"button",className:"flex-center ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"},l().createElement(E.IconPlus,{size:20}),"  上传音乐")),l().createElement("div",{className:"right"},l().createElement(m.Z,N({},{search:c,setSearch:o,placeholder:"搜索我的音乐云盘"})))),l().createElement("div",{className:"overflow-auto max-h-full flex-auto pl-8 pr-5"},l().createElement("div",{className:"domManage_table",style:{"--ui_grid_template":"36px / 30px 30px 8fr 3fr 3fr 2fr 2fr 4fr"}},l().createElement("div",{className:"thead"},l().createElement("div",{className:"tr grid ui_grid_template items-center"},l().createElement("div",null),l().createElement("div",null),k.map((function(e){var t=w(e,3),n=t[0],a=t[1],r=t[2];return l().createElement("div",{key:n,className:i()("cell px-1","th",{on:n===h.name}),onClick:function(){return function(e){if(h.name!==e.name)return S(x({},e,{type:1}));switch(h.type){case-1:return S({name:"",code:"",callback:function(e,t){return 0},type:0});case 1:return S(x({},e,{type:-1}));default:return S(x({},e,{type:1}))}}({item:n,code:a,callback:r})}},n,l().createElement("span",{className:"sort"},function(e,t){return t.name!==e?l().createElement(E.IconSwitchVertical,{size:14,color:"#f00",stroke:1}):-1===t.type?l().createElement(E.IconCaretDown,{size:20,stroke:0,fill:"#000"}):1===t.type?l().createElement(E.IconCaretUp,{size:12,stroke:0,fill:"#000"}):0===t.type?l().createElement(E.IconSwitchVertical,{size:14,color:"#f00",stroke:1}):void 0}(n,h)))})))),l().createElement("div",{className:"tbody"},C.map((function(e,t){var n,a,r,c,o,m,f;return l().createElement(u.Z,{type:"song",item:e,schema:[["播放","下一首播放"],["收藏到歌单","分享","下载"],["删除"]],key:e.songId},l().createElement("div",{className:i()("tr grid ui_grid_template items-center hover:bg-gray-100 focus:outline-none focus:bg-gray-200",t%2==0&&"bg-gray-50"),tabIndex:2},l().createElement("div",{className:"cell px-1 index text-gray-400"},l().createElement(d.Z,{index:t,id:e.songId})),l().createElement("div",{className:"cell px-1 download"},l().createElement(p.Z,null)),l().createElement("div",{className:"cell px-1 name truncate",title:e.songName+(null===(n=e.simpleSong)||void 0===n||null===(a=n.tns)||void 0===a?void 0:a.length)>0?"（".concat(null===(r=e.simpleSong)||void 0===r?void 0:r.tns,"）"):""},e.songName,(null===(c=e.simpleSong)||void 0===c||null===(o=c.tns)||void 0===o?void 0:o.length)>0&&l().createElement("span",{className:"text-gray-500"},"（".concat(e.simpleSong.tns,"）"))),l().createElement(y.Z,{className:"px-1",artists:e.simpleSong.ar}),l().createElement(v.Z,{className:"px-1",name:e.album,id:null===(m=e.simpleSong)||void 0===m||null===(f=m.al)||void 0===f?void 0:f.id}),l().createElement("div",{className:"cell px-1 truncate uppercase"},/(?<=\.)(\w*)$/.exec(e.fileName)[0]),l().createElement("div",{className:"cell px-1 truncate"},(e.fileSize/1024/1024).toFixed(1),"MB"),l().createElement("div",{className:"cell px-1 truncate text-gray-400"},s()(e.addTime).format("YYYY-MM-DD"))))}))))),l().createElement("div",{className:"domManage_dialog",style:{display:t?"":"none"}},l().createElement("button",{type:"button",className:"close",onClick:function(){n(!t)}},"×"),l().createElement("div",{className:"title"},"选择本地音乐文件夹"),l().createElement("div",{className:"tips"},"将自动扫描您勾选的目录，文件增删实时同步。"),l().createElement("ul",null,l().createElement("li",null,l().createElement("span",{className:"checkbox"},l().createElement("input",{type:"text"}),l().createElement("i",{className:"material-icons"},"checkbox")),"暂时没法做")),l().createElement("div",{className:"actions"},l().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full red"},"确认"),l().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"},"添加文件"))))};const j=(0,a.memo)(_),O=function(){return l().createElement(r.Routes,null,l().createElement(r.Route,{index:!0,element:l().createElement(j,null)}))}}}]);
//# sourceMappingURL=Cloud.js.map?version=b7526acc