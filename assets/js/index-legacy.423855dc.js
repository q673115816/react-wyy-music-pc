!function(){function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function t(t){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?e(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):e(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,c=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);i=!0);}catch(o){l=!0,a=o}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return c}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./react-legacy.5bc0222d.js","./react-slick-legacy.6091e657.js","./index-legacy.6682681b.js","./HeaderBarSearch-legacy.267fbe7d.js","./Rank-legacy.25a2b7c9.js","./Download-legacy.5fe2e961.js","./index-legacy.e95fe01b.js","./Album-legacy.52aedf29.js","./@tabler/icons-legacy.b504f1fb.js","./qrcode.react-legacy.ee127fcc.js","./react-router-dom-legacy.6d5f4357.js","./lodash-legacy.ec9d3690.js","./react-dom-legacy.6bc53cf2.js","./react-redux-legacy.53faa8fa.js","./immer-legacy.c38810dc.js","./axios-legacy.0865bd99.js","./store-legacy.6aaf7648.js","./react-transition-group-legacy.0b5c4cd7.js","./react-use-legacy.bb7aad2b.js"],(function(e,n){"use strict";var a,c,i,l,o,s,d,u,f,m,p,h,y,b,g,v,x,N,j;return{setters:[function(e){a=e.r},function(e){c=e.c},function(e){i=e.m,l=e.M,o=e.A,s=e.d},function(e){d=e.S},function(e){u=e.R},function(e){f=e.D},function(e){m=e.D},function(e){p=e.A},function(e){h=e.am,y=e.an,b=e.l,g=e.$},function(e){v=e.a,x=e.j},function(e){N=e.R,j=e.c},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var n=function(e,t,n){return String(e[n.code]).localeCompare(String(t[n.code]),"zh-CN")*n.type},S=[["音乐标题","songName",n],["歌手","artist",n],["专辑","album",n],["格式","",n],["大小","fileSize",function(e,t,n){return(Number.parseFloat(e[n.code])-Number.parseFloat(t[n.code]))*n.type}],["上传时间","addTime",function(e,t,n){return(e[n.code]-t[n.code])*n.type}]],w=function(e,t){return t.name!==e?x(y,{size:14,color:"#f00",stroke:1}):-1===t.type?x(b,{size:20,stroke:0,fill:"#000"}):1===t.type?x(g,{size:12,stroke:0,fill:"#000"}):0===t.type?x(y,{size:14,color:"#f00",stroke:1}):void 0},O=a.exports.memo((function(){var e=r(a.exports.useState(!1),2),n=e[0],y=e[1],b=r(a.exports.useState(""),2),g=b[0],N=b[1],j=r(a.exports.useState({name:"上传时间",type:-1,code:"addTime",callback:function(e,t,n){return(e[n.code]-t[n.code])*n.type}}),2),O=j[0],_=j[1],k=i({limit:100}),z=k.data,M=void 0===z?{}:z,A=k.isLoading,D=M.data,P=void 0===D?[]:D,C=(M.count,M.maxSize),I=void 0===C?"":C,F=M.size,T=void 0===F?"":F;return A?null:v("div",{className:"domManage overflow-auto h-full",children:[x("div",{className:"domManage_header ui_header",children:x("span",{className:"domManage_header_title h1",children:"我的音乐云盘"})}),v("div",{className:"domCloud_info py-2.5 px-8",children:[x("span",{children:"云盘容量"})," ",x("div",{className:"w-28 h-2.5 inline-block bg-gray-200 rounded-full overflow-hidden",children:x("div",{className:"h-full bg-blue-600",style:{width:T/I*100||0}})})," ",v("span",{className:"num",children:[(T/1024/1024/1024).toFixed(2),"G/",I/1024/1024/1024,"G"]})," ",x("span",{className:"ml-8",children:"歌曲永久保存，随时随地多端畅听"})," ",x("a",{href:"https://music.163.com/#/store/product/detail?id=34001",className:"ui_link",children:"扩容"})]}),v("div",{className:"ui_headerBar border-b",children:[v("div",{className:"left space-x-2",children:[x(m,{}),v("button",{type:"button",className:"flex-center ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full",children:[x(h,{size:20}),"  上传音乐"]})]}),x("div",{className:"right",children:x(d,{search:g,setSearch:N,placeholder:"搜索我的音乐云盘"})})]}),x("div",{className:"overflow-auto max-h-full flex-auto pl-8 pr-5",children:v("div",{className:"domManage_table",style:{"--ui_grid_template":"36px / 30px 30px 8fr 3fr 3fr 2fr 2fr 4fr"},children:[x("div",{className:"thead",children:v("div",{className:"tr grid ui_grid_template items-center",children:[x("div",{}),x("div",{}),S.map((function(e){var n=r(e,3),a=n[0],i=n[1],l=n[2];return v("div",{className:c("cell px-1","th",{on:a===O.name}),onClick:function(){return function(e){if(O.name!==e.name)return _(t(t({},e),{},{type:1}));switch(O.type){case-1:return _({name:"",code:"",callback:function(e,t){return 0},type:0});case 1:return _(t(t({},e),{},{type:-1}));default:return _(t(t({},e),{},{type:1}))}}({item:a,code:i,callback:l})},children:[a,x("span",{className:"sort",children:w(a,O)})]},a)}))]})}),x("div",{className:"tbody",children:P.map((function(e,t){var n,r,a,i,d,m,h;return x(l,{type:"song",item:e,schema:[["播放","下一首播放"],["收藏到歌单","分享","下载"],["删除"]],children:v("div",{className:c("tr grid ui_grid_template items-center hover:bg-gray-100 focus:outline-none focus:bg-gray-200",t%2==0&&"bg-gray-50"),tabIndex:2,children:[x("div",{className:"cell px-1 index text-gray-400",children:x(u,{index:t,id:e.songId})}),x("div",{className:"cell px-1 download",children:x(f,{})}),v("div",{className:"cell px-1 name truncate",title:e.songName+(null===(n=e.simpleSong)||void 0===n||null===(r=n.tns)||void 0===r?void 0:r.length)>0?"（".concat(null===(a=e.simpleSong)||void 0===a?void 0:a.tns,"）"):"",children:[e.songName,(null===(i=e.simpleSong)||void 0===i||null===(d=i.tns)||void 0===d?void 0:d.length)>0&&x("span",{className:"text-gray-500",children:"（".concat(e.simpleSong.tns,"）")})]}),x(o,{className:"px-1",artists:e.simpleSong.ar}),x(p,{className:"px-1",name:e.album,id:null===(m=e.simpleSong)||void 0===m||null===(h=m.al)||void 0===h?void 0:h.id}),x("div",{className:"cell px-1 truncate uppercase",children:/(?<=\.)(\w*)$/.exec(e.fileName)[0]}),v("div",{className:"cell px-1 truncate",children:[(e.fileSize/1024/1024).toFixed(1),"MB"]}),x("div",{className:"cell px-1 truncate text-gray-400",children:s(e.addTime).format("YYYY-MM-DD")})]})},e.songId)}))})]})}),v("div",{className:"domManage_dialog",style:{display:n?"":"none"},children:[x("button",{type:"button",className:"close",onClick:function(){y(!n)},children:"×"}),x("div",{className:"title",children:"选择本地音乐文件夹"}),x("div",{className:"tips",children:"将自动扫描您勾选的目录，文件增删实时同步。"}),x("ul",{children:v("li",{children:[v("span",{className:"checkbox",children:[x("input",{type:"text"}),x("i",{className:"material-icons",children:"checkbox"})]}),"暂时没法做"]})}),v("div",{className:"actions",children:[x("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full red",children:"确认"}),x("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full",children:"添加文件"})]})]})]})}));e("default",(function(){return x(N,{children:x(j,{index:!0,element:x(O,{})})})}))}}}))}();
