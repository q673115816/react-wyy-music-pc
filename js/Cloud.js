"use strict";(this.webpackChunk_wyy_web=this.webpackChunk_wyy_web||[]).push([[413],{9064:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var r=n(7363),a=n.n(r),l=n(6711),c=n(3849),o=n.n(c),i=n(743),s=n.n(i),m=n(7268),u=n(1154),d=n(7567),p=n(7397),f=n(3377),y=n(1954),b=n(944),v=n(6719),E=n(6206);function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(){return N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}function w(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);c=!0);}catch(e){o=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(o)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var S=function(e,t,n){return String(e[n.code]).localeCompare(String(t[n.code]),"zh-CN")*n.type},j=[["音乐标题","songName",S],["歌手","artist",S],["专辑","album",S],["格式","",S],["大小","fileSize",function(e,t,n){return(Number.parseFloat(e[n.code])-Number.parseFloat(t[n.code]))*n.type}],["上传时间","addTime",function(e,t,n){return(e[n.code]-t[n.code])*n.type}]],_=function(){var e=O((0,r.useState)(!1),2),t=e[0],n=e[1],l=O((0,r.useState)(""),2),c=l[0],i=l[1],g=O((0,r.useState)({name:"上传时间",type:-1,code:"addTime",callback:function(e,t,n){return(e[n.code]-t[n.code])*n.type}}),2),h=g[0],S=g[1],_=(0,E.eo)({limit:100}),k=_.data,P=void 0===k?{}:k,I=_.isLoading,z=P.data,C=void 0===z?[]:z,M=(P.count,P.maxSize),D=void 0===M?"":M,Z=P.size,A=void 0===Z?"":Z;return I?null:a().createElement("div",{className:"domManage overflow-auto h-full"},a().createElement("div",{className:"domManage_header ui_header"},a().createElement("span",{className:"domManage_header_title h1"},"我的音乐云盘")),a().createElement("div",{className:"domCloud_info py-2.5 px-8"},a().createElement("span",null,"云盘容量")," ",a().createElement("div",{className:"w-28 h-2.5 inline-block bg-gray-200 rounded-full overflow-hidden"},a().createElement("div",{className:"h-full bg-blue-600",style:{width:A/D*100||0}}))," ",a().createElement("span",{className:"num"},(A/1024/1024/1024).toFixed(2),"G/",D/1024/1024/1024,"G")," ",a().createElement("span",{className:"ml-8"},"歌曲永久保存，随时随地多端畅听")," ",a().createElement("a",{href:"https://music.163.com/#/store/product/detail?id=34001",className:"ui_link"},"扩容")),a().createElement("div",{className:"ui_headerBar border-b"},a().createElement("div",{className:"left space-x-2"},a().createElement(f.Z,null),a().createElement("button",{type:"button",className:"flex-center ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"},a().createElement(v.IconPlus,{size:20}),"  上传音乐")),a().createElement("div",{className:"right"},a().createElement(m.Z,N({},{search:c,setSearch:i,placeholder:"搜索我的音乐云盘"})))),a().createElement("div",{className:"overflow-auto max-h-full flex-auto pl-8 pr-5"},a().createElement("div",{className:"domManage_table",style:{"--ui_grid_template":"36px / 30px 30px 8fr 3fr 3fr 2fr 2fr 4fr"}},a().createElement("div",{className:"thead"},a().createElement("div",{className:"tr grid ui_grid_template items-center"},a().createElement("div",null),a().createElement("div",null),j.map((function(e){var t=O(e,3),n=t[0],r=t[1],l=t[2];return a().createElement("div",{key:n,className:o()("cell px-1","th",{on:n===h.name}),onClick:function(){return function(e){if(h.name!==e.name)return S(w(x({},e),{type:1}));switch(h.type){case-1:return S({name:"",code:"",callback:function(e,t){return 0},type:0});case 1:return S(w(x({},e),{type:-1}));default:return S(w(x({},e),{type:1}))}}({item:n,code:r,callback:l})}},n,a().createElement("span",{className:"sort"},function(e,t){return t.name!==e?a().createElement(v.IconSwitchVertical,{size:14,color:"#f00",stroke:1}):-1===t.type?a().createElement(v.IconCaretDown,{size:20,stroke:0,fill:"#000"}):1===t.type?a().createElement(v.IconCaretUp,{size:12,stroke:0,fill:"#000"}):0===t.type?a().createElement(v.IconSwitchVertical,{size:14,color:"#f00",stroke:1}):void 0}(n,h)))})))),a().createElement("div",{className:"tbody"},C.map((function(e,t){var n,r,l,c,i,m,f;return a().createElement(u.Z,{type:"song",item:e,schema:[["播放","下一首播放"],["收藏到歌单","分享","下载"],["删除"]],key:e.songId},a().createElement("div",{className:o()("tr grid ui_grid_template items-center hover:bg-gray-100 focus:outline-none focus:bg-gray-200",t%2==0&&"bg-gray-50"),tabIndex:2},a().createElement("div",{className:"cell px-1 index text-gray-400"},a().createElement(d.Z,{index:t,id:e.songId})),a().createElement("div",{className:"cell px-1 download"},a().createElement(p.Z,null)),a().createElement("div",{className:"cell px-1 name truncate",title:e.songName+(null===(n=e.simpleSong)||void 0===n||null===(r=n.tns)||void 0===r?void 0:r.length)>0?"（".concat(null===(l=e.simpleSong)||void 0===l?void 0:l.tns,"）"):""},e.songName,(null===(c=e.simpleSong)||void 0===c||null===(i=c.tns)||void 0===i?void 0:i.length)>0&&a().createElement("span",{className:"text-gray-500"},"（".concat(e.simpleSong.tns,"）"))),a().createElement(y.Z,{className:"px-1",artists:e.simpleSong.ar}),a().createElement(b.Z,{className:"px-1",name:e.album,id:null===(m=e.simpleSong)||void 0===m||null===(f=m.al)||void 0===f?void 0:f.id}),a().createElement("div",{className:"cell px-1 truncate uppercase"},RegExp("(?<=\\.)(\\w*)$").exec(e.fileName)[0]),a().createElement("div",{className:"cell px-1 truncate"},(e.fileSize/1024/1024).toFixed(1),"MB"),a().createElement("div",{className:"cell px-1 truncate text-gray-400"},s()(e.addTime).format("YYYY-MM-DD"))))}))))),a().createElement("div",{className:"domManage_dialog",style:{display:t?"":"none"}},a().createElement("button",{type:"button",className:"close",onClick:function(){n(!t)}},"×"),a().createElement("div",{className:"title"},"选择本地音乐文件夹"),a().createElement("div",{className:"tips"},"将自动扫描您勾选的目录，文件增删实时同步。"),a().createElement("ul",null,a().createElement("li",null,a().createElement("span",{className:"checkbox"},a().createElement("input",{type:"text"}),a().createElement("i",{className:"material-icons"},"checkbox")),"暂时没法做")),a().createElement("div",{className:"actions"},a().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full red"},"确认"),a().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"},"添加文件"))))};const k=(0,r.memo)(_),P=function(){return a().createElement(l.Routes,null,a().createElement(l.Route,{index:!0,element:a().createElement(k,null)}))}}}]);
//# sourceMappingURL=Cloud.js.map?version=dee6ab4c