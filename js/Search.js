"use strict";(this.webpackChunk_wyy_web=this.webpackChunk_wyy_web||[]).push([[288],{4558:(e,t,a)=>{a.r(t),a.d(t,{default:()=>le});var r=a(7363),n=a.n(r),l=a(6711),c=a(3849),s=a.n(c),i=a(743),m=a.n(i),o=a(1154),d=a(7567),u=a(4028),v=a(7397),f=a(9725),y=a(1954),p=a(944),E=a(1577),g=function(e){var t=e.songs,a=void 0===t?[]:t;return n().createElement("div",{className:"songs_list",style:{"--ui_grid_template":"36px / 54px 24px 24px 37% 4fr 5fr 2fr 3fr"}},n().createElement("div",{className:"thead"},n().createElement("div",{className:"item grid items-center text-gray-400 ui_grid_template"},n().createElement("div",{className:"index"}),n().createElement("div",{className:"heart"}),n().createElement("div",{className:"download"}),n().createElement("div",{className:"name flex-auto px-2"},"音乐标题"),n().createElement("div",{className:"artist flex-none px-2"},"歌手"),n().createElement("div",{className:"album flex-none px-2"},"专辑"),n().createElement("div",{className:"duration flex-none px-2"},"时长"),n().createElement("div",{className:"pop flex-none px-2"},"热度"))),n().createElement("div",{className:"tbody"},a.map((function(e,t){return n().createElement(o.Z,{schema:[["评论","播放","下一首播放"],["收藏到歌单","分享","复制链接","下载"]],item:e,type:"song",key:e.id},n().createElement("div",{tabIndex:2,className:s()("item grid items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none ui_grid_template",{"bg-gray-50":t%2==0})},n().createElement("div",{className:"index px-2"},n().createElement(d.Z,{index:t,id:e.id})),n().createElement("div",{className:"heart text-center"},n().createElement(u.Z,{id:e.id})),n().createElement("div",{className:"download text-center"},n().createElement(v.Z,null)),n().createElement("div",{className:"name px-2"},n().createElement(f.Z,{item:e})),n().createElement("div",{className:"artist flex-none px-2 truncate text-gray-400"},n().createElement(y.Z,{artists:e.ar})),n().createElement("div",{className:"album truncate flex-none px-2"},n().createElement(p.Z,{name:e.al.name,id:e.al.name})),n().createElement("div",{className:"duration text-gray-400 truncate flex-none px-2"},m()(e.dt).format("mm:ss")),n().createElement("div",{className:"pop"},n().createElement(E.Z,{pop:e.pop}))))}))))};const N=(0,r.memo)(g);var x=a(6719),b={"--grid-template-columns":"60px 6fr min-content"},h={"--grid-template-columns":"60px 1fr 1fr"},w=function(e){var t=e.albums,a=void 0===t?[]:t;return n().createElement("div",{className:"albums_list _list",style:h},a.map((function(e,t){return n().createElement("div",{tabIndex:2,className:s()("item grid items-center relative hover:bg-gray-100",{"bg-gray-50":t%2==1}),key:e.id},n().createElement(l.Link,{className:"absolute inset-0 z-0",to:"/playlist/album/".concat(e.id)}),n().createElement("div",{className:"cover"},n().createElement("img",{src:"".concat(e.picUrl,"?param=60y60"),alt:""})),n().createElement("div",{className:"name px-5 text-sm"},e.name,e.alias.length>0&&n().createElement("span",{className:"text-gray-400"},"（".concat(e.alias,"）"))),n().createElement("div",{className:"artist truncate"},n().createElement(l.Link,{to:"/artist/".concat(e.artist.id),className:"ui_text_gray_hover relative z-10"},e.artist.name,e.artist.alias.length>0&&n().createElement("span",{className:"text-gray-400"},"（".concat(e.artist.alias,"）")))))})))};const k=(0,r.memo)(w);var _=a(5001),C=function(e){var t=e.videos,a=(void 0===t?[]:t).map((function(e){var t=e.type,a=e.title,r=e.coverUrl,n=e.playTime,l=e.creator;return{id:e.vid,type:t,title:a,creator:l,playCount:n,duration:e.durationms,cover:r}}));return n().createElement("div",{className:"videos_list py-5 px-10"},n().createElement(_.Z,{list:a}))};const S=(0,r.memo)(C);var Z={"--grid-template-columns":"60px 6fr 2fr 5fr"};function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function j(e){var t,a,l=e.lyrics,c=void 0===l?[]:l,s=(0,r.useRef)(),i=(t=(0,r.useState)(!1),a=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,l=[],c=!0,s=!1;try{for(a=a.call(e);!(c=(r=a.next()).done)&&(l.push(r.value),!t||l.length!==t);c=!0);}catch(e){s=!0,n=e}finally{try{c||null==a.return||a.return()}finally{if(s)throw n}}return l}}(t,a)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?I(e,t):void 0}}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=i[0],o=i[1];(0,r.useEffect)((function(){s.current=c.join("\n").replace(/<b>|<\/b>/gm,"")}),[c]);var d=function(){var e=document.createElement("textarea");e.setAttribute("readonly","readonly"),e.textContent=s.current,document.body.appendChild(e),e.select(),document.execCommand("copy")&&(document.execCommand("copy"),console.log("复制成功")),document.body.removeChild(e)};return n().createElement("div",{className:"lrc flex pb-2"},n().createElement("div",{className:"content w-2/3 px-2 text-gray-500"},c.slice(0,m?1/0:4).map((function(e,t){return n().createElement("div",{key:e+t,dangerouslySetInnerHTML:{__html:e}})}))),n().createElement("div",{className:"actions w-1/3 flex flex-col justify-between"},n().createElement("div",{className:"flex space-x-2.5"},n().createElement("button",{type:"button",className:"flex-center border border-gray-400 px-3 h-6 hover:bg-gray-300 rounded-full",onClick:function(){return o(!m)}},m?"收起":"展开","歌词"),n().createElement("button",{type:"button",className:"flex-center border border-gray-400 px-3 h-6 hover:bg-gray-300 rounded-full clip",onClick:d},"复制歌词")),m&&n().createElement("div",{className:"flex space-x-2.5"},n().createElement("button",{type:"button",className:"flex-center border border-gray-400 px-3 h-6 hover:bg-gray-300 rounded-full",onClick:function(){return o(!1)}},"收起歌词"),n().createElement("button",{type:"button",className:"flex-center border border-gray-400 px-3 h-6 hover:bg-gray-300 rounded-full clip",onClick:d},"复制歌词"))))}var L={"--grid-template-columns":"60px 5fr 2fr"},A=function(e){var t=e.djRadios,a=void 0===t?[]:t;return n().createElement("div",{className:"djRadios_list _list",style:L},a.map((function(e,t){return n().createElement("div",{className:s()("item grid items-center hover:bg-gray-100",{"bg-gray-50":t%2==0}),key:e.id},n().createElement(l.Link,{to:"/playlist/dj/".concat(e.id),className:"cover"},n().createElement("img",{className:"",src:"".concat(e.picUrl,"?param=60y60"),alt:""})),n().createElement("div",{className:"px-5"},n().createElement(l.Link,{to:"/playlist/dj/".concat(e.id),className:"name"},e.name)),n().createElement("div",{className:"dj text-gray-300"},"by  ",n().createElement(l.Link,{to:"/user/".concat(e.dj.userId),className:"ui_text_gray_hover"},e.dj.nickname)))})))};const U=(0,r.memo)(A);var R=a(3762),z={"--grid-template-columns":"60px 5fr 2fr"},P=function(e){var t=e.userprofiles,a=void 0===t?[]:t;return n().createElement("div",{className:"userprofiles_list _list",style:z},a.map((function(e,t){return n().createElement(l.Link,{to:"/user/".concat(e.userId),className:s()("item grid items-center hover:bg-gray-100",{"bg-gray-50":t%2==1}),key:e.userId},n().createElement("div",{className:"rounded-full overflow-hidden"},n().createElement("img",{src:"".concat(e.avatarUrl,"?param=60y60"),alt:""})),n().createElement("div",{className:"name px-5"},e.nickname," ",n().createElement(R.ZP,{size:16,gender:e.gender})),n().createElement("div",{className:"signature text-gray-400 ml-auto"},e.signature))})))},T=["单曲","歌手","专辑","视频","歌单","歌词","主播电台","用户"];const O={单曲:{code:1,unit:"首",limit:100,Node:N,countName:"songCount"},歌手:{code:100,unit:"位",limit:20,Node:function(e){var t=e.artists,a=void 0===t?[]:t;return n().createElement("div",{className:"artists_list _list",style:b},a.map((function(e,t){return n().createElement("div",{className:s()("item relative grid items-center hover:bg-gray-100",{"bg-gray-50":t%2==1}),key:e.id},n().createElement(l.Link,{to:"/artist/".concat(e.id),className:"absolute inset-0"}),n().createElement("div",{className:"cover"},n().createElement("img",{className:"",src:"".concat(e.img1v1Url,"?param=60y60"),alt:""})),n().createElement("div",{className:"name px-2.5 text-sm"},e.name,e.alia&&n().createElement("span",{className:"text-gray-400"},"(",null==e?void 0:e.alias[0],")")),e.accountId&&n().createElement("span",{className:"account bg-red-500 w-4 h-4 rounded-full text-white flex-center"},n().createElement(x.IconUser,{size:12,stroke:3})))})))},countName:"artistCount"},专辑:{code:10,unit:"张",limit:20,Node:k,countName:"albumCount"},视频:{code:1014,unit:"个",limit:24,Node:S,countName:"videoCount"},歌单:{code:1e3,unit:"个",limit:20,Node:function(e){var t=e.playlists,a=void 0===t?[]:t;return n().createElement("div",{className:"playlists_list _list",style:Z},a.map((function(e,t){return n().createElement("div",{className:s()("item grid items-center relative hover:bg-gray-100",{"bg-gray-50":t%2==1}),key:e.id},n().createElement(l.Link,{className:"absolute inset-0 z-0",to:"/playlist/music/".concat(e.id)}),n().createElement("div",{className:"cover"},n().createElement("img",{className:"",src:"".concat(e.coverImgUrl,"?param=60y60"),alt:""})),n().createElement("div",{className:"name px-3"},e.name),n().createElement("div",{className:"trackCount text-gray-400"},e.trackCount,"首"),n().createElement("div",{className:"creator text-gray-300"},"by  ",n().createElement(l.Link,{to:"/user/".concat(e.creator.userId),className:"ui_text_black_hover relative z-10"},e.creator.nickname)))})))},countName:"playlistCount"},歌词:{code:1006,unit:"首",limit:20,Node:function(e){var t=e.songs,a=void 0===t?[]:t;return n().createElement("div",{className:"lyrics_list",style:{"--ui_grid_template":"36px / 54px 24px 24px 37% 4fr 5fr 2fr 3fr"}},n().createElement("div",{className:"thead"},n().createElement("div",{className:"item grid items-center text-gray-400 ui_grid_template"},n().createElement("div",{className:"index"}),n().createElement("div",{className:"heart"}),n().createElement("div",{className:"download"}),n().createElement("div",{className:"name"},"音乐标题"),n().createElement("div",{className:"artist"},"歌手"),n().createElement("div",{className:"album"},"专辑"),n().createElement("div",{className:"duration"},"时长"),n().createElement("div",{className:"text-gray-400"},"热度"))),n().createElement("div",{className:"tbody"},a.map((function(e,t){return n().createElement(o.Z,{schema:[["评论","播放","下一首播放"],["收藏到歌单","分享","复制链接","下载"]],item:e,type:"song",key:e.id},n().createElement("div",{tabIndex:"2",className:s()("item grid items-center hover:bg-gray-100 focus:outline-none focus:bg-gray-200 ui_grid_template",{"bg-gray-50":t%2==0})},n().createElement("div",{className:"index pr-2"},n().createElement(d.Z,{index:t,id:e.id})),n().createElement("div",{className:"heart"},n().createElement(u.Z,{id:e.id})),n().createElement("div",{className:"download"},n().createElement(v.Z,null)),n().createElement("div",{className:"name flex"},n().createElement(f.Z,{item:e})),n().createElement("div",{className:"artist truncate"},n().createElement(y.Z,{artists:e.ar})),n().createElement("div",{className:"album truncate"},n().createElement(p.Z,{name:e.al.name,id:e.al.id})),n().createElement("div",{className:"duration text-gray-400 truncate"},m()(e.dt).format("mm:ss")),n().createElement("div",{className:"pop"},n().createElement(E.Z,{pop:e.pop})),n().createElement(j,{lyrics:e.lyrics})))}))))},countName:"songCount"},主播电台:{code:1009,unit:"个",limit:100,Node:U,countName:"djRadiosCount"},用户:{code:1002,unit:"位",limit:20,Node:(0,r.memo)(P),countName:"userprofileCount"}};var M=a(4867),D=a(8230),H=a(5479),$=a(6372),B=a(5145),F={artist:function(e){var t,a=e.item;return n().createElement(l.Link,{to:"/artist/".concat(a.id),className:"h-16 w-1/3 flex items-center bg-gray-100 rounded overflow-hidden px-2"},n().createElement("img",{className:"h-10 object-fit rounded-full",src:"".concat(a.picUrl,"?param=60y60"),alt:""}),n().createElement("div",{className:"px-2 flex-1 w-0"},n().createElement("div",{className:"truncate text-sm"},"歌手：",a.name,(null===(t=a.alias)||void 0===t?void 0:t.length)>0&&n().createElement("span",{className:"text-gray-400"},"(".concat(a.alias,")"))),n().createElement("div",{className:"text-gray-400"},"粉丝数:",(0,B.Qb)(a.fansSize),",歌曲:",a.musicSize)))},album:function(e){var t,a=e.item;return n().createElement(l.Link,{to:"/playlist/album/".concat(a.id),className:"h-16 w-1/3 flex items-center bg-gray-100 rounded overflow-hidden px-2"},n().createElement("img",{className:"h-10",src:"".concat(a.blurPicUrl,"?param=60y60"),alt:""}),n().createElement("div",{className:"px-2 flex-1 w-0"},n().createElement("div",{className:"text-sm truncate"},"专辑：",a.name,(null===(t=a.alias)||void 0===t?void 0:t.length)>0&&n().createElement("span",{className:"text-gray-400"},"(".concat(a.alias,")"))),n().createElement("div",{className:"text-gray-400"},a.artist.name)))},new_mlog:function(e){return e.item,null},playlist:function(e){var t=e.item;return n().createElement(l.Link,{to:"/playlist/music/".concat(t.id),className:"h-16 w-1/3 flex items-center bg-gray-100 rounded overflow-hidden px-2",title:t.name},n().createElement("img",{className:"h-10",src:"".concat(t.coverImgUrl,"?param=60y60"),alt:""}),n().createElement("div",{className:"px-2 flex-1 w-0"},n().createElement("div",{className:"text-sm truncate"},"歌单：",t.name),n().createElement("div",{className:"text-gray-400"},t.creator.name)))},concert:function(e){var t=e.item;return n().createElement("a",{target:"_blank",href:t.url,className:"h-16 w-1/3 flex items-center bg-gray-100 rounded overflow-hidden px-2",title:t.title},n().createElement("img",{className:"h-10",src:"".concat(t.cover,"?param=60y60"),alt:""}),n().createElement("div",{className:"px-2 flex-1 w-0"},n().createElement("div",{className:"text-sm truncate"},"演唱会：",t.title),n().createElement("div",{className:"text-gray-400 truncate"},t.artists)))}},K=function(e){var t,a=e.keywords,l=(0,H.NX)({keywords:a}),c=l.data,s=l.isLoading,i=(null==c?void 0:c.result)||{};return 0===(null==i||null===(t=i.orders)||void 0===t?void 0:t.length)?null:s?n().createElement($.Z,null):n().createElement("div",{className:"py-4"},n().createElement("div",{className:"text-gray-500"},"你可能感兴趣"),n().createElement("div",{className:"mt-2 flex gap-3"},i.orders.map((function(e){return(0,r.createElement)(F[e],{item:i[e][0],key:e})}))))};const Q=(0,r.memo)(K);var X=function(){var e,t=(0,l.useParams)(),a=t.keywords,c=void 0===a?"":a,i=t.type,m=void 0===i?"":i,o=(0,M.T)(),d=(0,M.C)(D.searchSelector).count,u=void 0===d?0:d;(0,r.useEffect)((function(){o((0,D.setHistory)({keywords:c}))}),[c]);var v=(null===(e=O[m])||void 0===e?void 0:e.unit)||"";return n().createElement("div",{className:"domSearch overflow-auto max-h-full flex-auto"},n().createElement("div",{className:"px-8 py-5"},n().createElement("div",{className:"h1"},"搜索 ",c),n().createElement(Q,{keywords:c}),n().createElement("div",{className:"mt-5 flex items-center"},n().createElement("div",{className:"flex gap-4"},T.map((function(e){return n().createElement(l.NavLink,{key:e,to:encodeURIComponent(e),className:function(e){var t=e.isActive;return s()("text-sm",t&&"font-bold ui_underline")}},e)}))),n().createElement("div",{className:"ml-auto text-gray-400"},"找到 ",u,v," ",m))),n().createElement(l.Outlet,null))};const q=(0,r.memo)(X);var G=a(6319),J=a.n(G),V=a(71),W=a(3946);function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function ee(e,t,a,r,n,l,c){try{var s=e[l](c),i=s.value}catch(e){return void a(e)}s.done?t(i):Promise.resolve(i).then(r,n)}function te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,l=[],c=!0,s=!1;try{for(a=a.call(e);!(c=(r=a.next()).done)&&(l.push(r.value),!t||l.length!==t);c=!0);}catch(e){s=!0,n=e}finally{try{c||null==a.return||a.return()}finally{if(s)throw n}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Y(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ae=function(){console.log("entry search");var e=(0,l.useParams)(),t=e.keywords,a=void 0===t?"":t,c=e.type,s=void 0===c?"":c,i=(0,M.T)(),m=te((0,r.useState)(1),2),o=m[0],d=m[1],u=te((0,r.useState)({}),2),v=u[0],f=u[1],y=te((0,r.useState)(0),2),p=y[0],E=y[1],g=O[s],N=g.code,x=g.limit,b=g.Node,h=g.countName,w=(0,M.C)(D.searchSelector).keywords,k=te((0,H.DB)(),2),_=k[0],C=k[1].isLoading;(0,r.useEffect)((function(){i((0,D.setSearchCount)({count:p}))}),[p]),(0,r.useEffect)((function(){w||i((0,D.setKeywords)({keywords:a}))}),[a]);var S,Z,I=(S=J().mark((function e(t){var r,n,l;return J().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,_({keywords:a,limit:x,type:N,offset:(t-1)*x});case 3:n=e.sent,l=(null==n||null===(r=n.data)||void 0===r?void 0:r.result)||{},f(l),E(l[h]);case 7:case"end":return e.stop()}}),e)})),Z=function(){var e=this,t=arguments;return new Promise((function(a,r){var n=S.apply(e,t);function l(e){ee(n,a,r,l,c,"next",e)}function c(e){ee(n,a,r,l,c,"throw",e)}l(void 0)}))},function(e){return Z.apply(this,arguments)}),j=function(e){d(e),I(e)};return(0,r.useEffect)((function(){i((0,W.setDialogReset)()),j(1)}),[a,s]),C?n().createElement("div",{className:"pt-48 flex-center"},n().createElement($.Z,null)):n().createElement(n().Fragment,null,(0,r.createElement)(b,v),n().createElement(V.Z,{total:Math.ceil(p/x),page:o,func:j}))};const re=(0,r.memo)(ae);var ne=function(){return n().createElement(l.Routes,null,n().createElement(l.Route,{path:":keywords",element:n().createElement(q,null)},n().createElement(l.Route,{path:":type",element:n().createElement(re,null)}),n().createElement(l.Route,{index:!0,element:n().createElement(l.Navigate,{to:"单曲",replace:!0})})))};const le=(0,r.memo)(ne)}}]);
//# sourceMappingURL=Search.js.map?version=62ceff0d