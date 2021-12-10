"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[288],{1798:(e,t,a)=>{a.r(t),a.d(t,{default:()=>H});var r=a(7363),n=a.n(r),c=a(6711),l=a(4942),s=a(5861),m=a(885),i=(a(1249),a(7941),a(2222),a(2526),a(7327),a(1539),a(5003),a(4747),a(9337),a(7757)),o=a.n(i),d=a(1624),u=a(9965),v=a(9384),p=a(8157),E=a(9097),g=(a(8309),a(6699),a(2023),a(4184)),y=a.n(g),f=a(7484),N=a.n(f),x=a(6719),b=a(5721),h=a(7390),k=a(1495),_=a(1337),w=a(2446),Z=a(8123),C=a(3850);const j=(0,r.memo)((function(e){var t=e.pop,a=void 0===t?0:t;return n().createElement("div",{className:"range w-20 h-1.5 rounded bg-gray-200"},n().createElement("div",{className:"h-full bg-gray-300 rounded",style:{width:"".concat(a,"%")}}))}));var O={artist:function(e){var t,a=e.item;return n().createElement(c.Link,{to:"/artist/".concat(a.id),className:"item group h-20 flex items-center bg-gray-100 rounded overflow-hidden"},n().createElement("div",{className:"cover"},n().createElement("img",{className:"",src:"".concat(a.picUrl,"?param=80y80"),alt:""})),n().createElement("div",{className:"content px-2"},n().createElement("div",{className:"name text-sm"},"歌手：",a.name,(null===(t=a.alias)||void 0===t?void 0:t.length)>0&&n().createElement("span",{className:"text-gray-400"},"（".concat(a.alias,"）")))),n().createElement("div",{className:"ico text-gray-600 group-hover:text-black ml-auto mr-4"},n().createElement(x.IconChevronRight,{size:24,stroke:1})))},album:function(e){var t=e.item;return n().createElement(c.Link,{to:"/playlist/album/".concat(t.id),className:"item h-20 flex items-center bg-gray-100 rounded overflow-hidden"},n().createElement("div",{className:"cover"},n().createElement("img",{className:"",src:"".concat(t.blurPicUrl,"?param=80y80"),alt:""})),n().createElement("div",{className:"content px-2"},n().createElement("div",{className:"name text-sm"},t.name),n().createElement("div",{className:"subname"},t.artist.name)),n().createElement("div",{className:"ico text-gray-600 group-hover:text-black ml-auto mr-4"},n().createElement(x.IconChevronRight,{size:24,stroke:1})))}},S=function(e){var t=e.list,a=void 0===t?[]:t,r=Object.keys(O);return n().createElement("div",{className:"domSearch_multimatch border-b px-8 py-5"},n().createElement("div",{className:"title text-bold"},"最佳匹配"),n().createElement("div",{className:"list mt-5 flex space-x-6"},a.map((function(e){var t=(0,m.Z)(e,3),a=t[0],c=t[1],l=t[2];return r.includes(l)&&n().createElement(c,{item:a,key:l})}))))};const D=(0,r.memo)((function(e){var t,a=e.songs,r=void 0===a?[]:a,c=e.multimatch,l=void 0===c?{orders:[]}:c,s=null===(t=l.orders)||void 0===t?void 0:t.map((function(e){return[l[e][0],O[e],e]}));return n().createElement(n().Fragment,null,n().createElement(S,{list:s}),n().createElement("div",{className:"songs_list",style:{"--ui_grid_template":"36px / 54px 24px 24px 37% 4fr 5fr 2fr 3fr"}},n().createElement("div",{className:"thead"},n().createElement("div",{className:"item grid items-center text-gray-400 ui_grid_template"},n().createElement("div",{className:"index"}),n().createElement("div",{className:"heart"}),n().createElement("div",{className:"download"}),n().createElement("div",{className:"name flex-auto px-2"},"音乐标题"),n().createElement("div",{className:"artist flex-none px-2"},"歌手"),n().createElement("div",{className:"album flex-none px-2"},"专辑"),n().createElement("div",{className:"duration flex-none px-2"},"时长"),n().createElement("div",{className:"pop flex-none px-2"},"热度"))),n().createElement("div",{className:"tbody"},r.map((function(e,t){return n().createElement(b.Z,{schema:[["评论","播放","下一首播放"],["收藏到歌单","分享","复制链接","下载"]],item:e,type:"song",key:e.id},n().createElement("div",{tabIndex:2,className:y()("item grid items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none ui_grid_template",{"bg-gray-50":t%2==0})},n().createElement("div",{className:"index pr-2"},n().createElement(h.Z,{index:t,id:e.id})),n().createElement("div",{className:"heart text-center"},n().createElement(k.Z,{id:e.id})),n().createElement("div",{className:"download text-center"},n().createElement(_.Z,null)),n().createElement("div",{className:"name px-2"},n().createElement(w.Z,{item:e})),n().createElement("div",{className:"artist flex-none px-2 truncate text-gray-400"},n().createElement(Z.Z,{artists:e.ar})),n().createElement("div",{className:"album truncate flex-none px-2"},n().createElement(C.Z,{name:e.al.name,id:e.al.name})),n().createElement("div",{className:"duration text-gray-400 truncate flex-none px-2"},N()(e.dt).format("mm:ss")),n().createElement("div",{className:"pop"},n().createElement(j,{pop:e.pop}))))})))))}));var I={"--grid-template-columns":"60px 6fr min-content"},L={"--grid-template-columns":"60px 1fr 1fr"},P=a(4907),R={"--grid-template-columns":"60px 6fr 2fr 5fr"};a(4916),a(5306),a(9600),a(7042);const U=function(e){var t=e.lyrics,a=void 0===t?[]:t,c=(0,r.useRef)(),l=(0,r.useState)(!1),s=(0,m.Z)(l,2),i=s[0],o=s[1];(0,r.useEffect)((function(){c.current=a.join("\n").replace(/<b>|<\/b>/gm,"")}),[a]);var d=function(){var e=document.createElement("textarea");e.setAttribute("readonly","readonly"),e.textContent=c.current,document.body.appendChild(e),e.select(),document.execCommand("copy")&&(document.execCommand("copy"),console.log("复制成功")),document.body.removeChild(e)};return n().createElement("div",{className:"lrc flex pb-2"},n().createElement("div",{className:"content w-2/3 px-2 text-gray-500"},a.slice(0,i?1/0:4).map((function(e,t){return n().createElement("div",{key:e+t,dangerouslySetInnerHTML:{__html:e}})}))),n().createElement("div",{className:"actions w-1/3 flex flex-col justify-between"},n().createElement("div",{className:"flex space-x-2.5"},n().createElement("button",{type:"button",className:"flex-center border border-gray-400 px-3 h-6 hover:bg-gray-300 rounded-full",onClick:function(){return o(!i)}},i?"收起":"展开","歌词"),n().createElement("button",{type:"button",className:"flex-center border border-gray-400 px-3 h-6 hover:bg-gray-300 rounded-full clip",onClick:d},"复制歌词")),i&&n().createElement("div",{className:"flex space-x-2.5"},n().createElement("button",{type:"button",className:"flex-center border border-gray-400 px-3 h-6 hover:bg-gray-300 rounded-full",onClick:function(){return o(!1)}},"收起歌词"),n().createElement("button",{type:"button",className:"flex-center border border-gray-400 px-3 h-6 hover:bg-gray-300 rounded-full clip",onClick:d},"复制歌词"))))};var z={"--grid-template-columns":"60px 5fr 2fr"},V=a(5754),A={"--grid-template-columns":"60px 5fr 2fr"};function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var M={单曲:{code:1,unit:"首",limit:100,Dom:D,countName:"songCount"},歌手:{code:100,unit:"位",limit:20,Dom:function(e){var t=e.artists,a=void 0===t?[]:t;return n().createElement("div",{className:"artists_list _list",style:I},a.map((function(e,t){return n().createElement("div",{className:y()("item relative grid items-center hover:bg-gray-100",{"bg-gray-50":t%2==1}),key:e.id},n().createElement(c.Link,{to:"/artist/".concat(e.id),className:"absolute inset-0"}),n().createElement("div",{className:"cover"},n().createElement("img",{className:"",src:"".concat(e.img1v1Url,"?param=60y60"),alt:""})),n().createElement("div",{className:"name px-2.5 text-sm"},e.name,e.alia&&n().createElement("span",{className:"text-gray-400"},"(",null==e?void 0:e.alias[0],")")),e.accountId&&n().createElement("span",{className:"account bg-red-500 w-4 h-4 rounded-full text-white flex-center"},n().createElement(x.IconUser,{size:12,stroke:3})))})))},countName:"artistCount"},专辑:{code:10,unit:"张",limit:20,Dom:function(e){var t=e.albums,a=void 0===t?[]:t;return n().createElement("div",{className:"albums_list _list",style:L},a.map((function(e,t){return n().createElement("div",{tabIndex:"2",className:y()("item grid items-center relative hover:bg-gray-100",{"bg-gray-50":t%2==1}),key:e.id},n().createElement(c.Link,{className:"absolute inset-0 z-0",to:"/playlist/album/".concat(e.id)}),n().createElement("div",{className:"cover"},n().createElement("img",{src:"".concat(e.picUrl,"?param=60y60"),alt:""})),n().createElement("div",{className:"name px-5 text-sm"},e.name,e.alias.length>0&&n().createElement("span",{className:"text-gray-400"},"（".concat(e.alias,"）"))),n().createElement("div",{className:"artist truncate"},n().createElement(c.Link,{to:"/artist/".concat(e.artist.id),className:"ui_text_gray_hover relative z-10"},e.artist.name,e.artist.alias.length>0&&n().createElement("span",{className:"text-gray-400"},"（".concat(e.artist.alias,"）")))))})))},countName:"albumCount"},视频:{code:1014,unit:"个",limit:24,Dom:function(e){var t=e.videos,a=(void 0===t?[]:t).map((function(e){var t=e.type,a=e.title,r=e.coverUrl,n=e.playTime,c=e.creator;return{id:e.vid,type:t,title:a,creator:c,playCount:n,duration:e.durationms,cover:r}}));return n().createElement("div",{className:"videos_list py-5 px-10"},n().createElement(P.Z,{list:a}))},countName:"videoCount"},歌单:{code:1e3,unit:"个",limit:20,Dom:function(e){var t=e.playlists,a=void 0===t?[]:t;return n().createElement("div",{className:"playlists_list _list",style:R},a.map((function(e,t){return n().createElement("div",{className:y()("item grid items-center relative hover:bg-gray-100",{"bg-gray-50":t%2==1}),key:e.id},n().createElement(c.Link,{className:"absolute inset-0 z-0",to:"/playlist/music/".concat(e.id)}),n().createElement("div",{className:"cover"},n().createElement("img",{className:"",src:"".concat(e.coverImgUrl,"?param=60y60"),alt:""})),n().createElement("div",{className:"name px-3"},e.name),n().createElement("div",{className:"trackCount text-gray-400"},e.trackCount,"首"),n().createElement("div",{className:"creator text-gray-300"},"by  ",n().createElement(c.Link,{to:"/user/".concat(e.creator.userId),className:"ui_text_black_hover relative z-10"},e.creator.nickname)))})))},countName:"playlistCount"},歌词:{code:1006,unit:"首",limit:20,Dom:function(e){var t=e.songs,a=void 0===t?[]:t;return n().createElement("div",{className:"lyrics_list",style:{"--ui_grid_template":"36px / 54px 24px 24px 37% 4fr 5fr 2fr 3fr"}},n().createElement("div",{className:"thead"},n().createElement("div",{className:"item grid items-center text-gray-400 ui_grid_template"},n().createElement("div",{className:"index"}),n().createElement("div",{className:"heart"}),n().createElement("div",{className:"download"}),n().createElement("div",{className:"name"},"音乐标题"),n().createElement("div",{className:"artist"},"歌手"),n().createElement("div",{className:"album"},"专辑"),n().createElement("div",{className:"duration"},"时长"),n().createElement("div",{className:"text-gray-400"},"热度"))),n().createElement("div",{className:"tbody"},a.map((function(e,t){return n().createElement(b.Z,{schema:[["评论","播放","下一首播放"],["收藏到歌单","分享","复制链接","下载"]],item:e,type:"song",key:e.id},n().createElement("div",{tabIndex:"2",className:y()("item grid items-center hover:bg-gray-100 focus:outline-none focus:bg-gray-200 ui_grid_template",{"bg-gray-50":t%2==0})},n().createElement("div",{className:"index pr-2"},n().createElement(h.Z,{index:t,id:e.id})),n().createElement("div",{className:"heart"},n().createElement(k.Z,{id:e.id})),n().createElement("div",{className:"download"},n().createElement(_.Z,null)),n().createElement("div",{className:"name flex"},n().createElement(w.Z,{item:e})),n().createElement("div",{className:"artist truncate"},n().createElement(Z.Z,{artists:e.ar})),n().createElement("div",{className:"album truncate"},n().createElement(C.Z,{name:e.al.name,id:e.al.id})),n().createElement("div",{className:"duration text-gray-400 truncate"},N()(e.dt).format("mm:ss")),n().createElement("div",{className:"pop"},n().createElement(j,{pop:e.pop})),n().createElement(U,{lyrics:e.lyrics})))}))))},countName:"songCount"},主播电台:{code:1009,unit:"个",limit:100,Dom:function(e){var t=e.djRadios,a=void 0===t?[]:t;return n().createElement("div",{className:"djRadios_list _list",style:z},a.map((function(e,t){return n().createElement("div",{className:y()("item grid items-center hover:bg-gray-100",{"bg-gray-50":t%2==0}),key:e.id},n().createElement(c.Link,{to:"/playlist/dj/".concat(e.id),className:"cover"},n().createElement("img",{className:"",src:"".concat(e.picUrl,"?param=60y60"),alt:""})),n().createElement("div",{className:"px-5"},n().createElement(c.Link,{to:"/playlist/dj/".concat(e.id),className:"name"},e.name)),n().createElement("div",{className:"dj text-gray-300"},"by  ",n().createElement(c.Link,{to:"/user/".concat(e.dj.userId),className:"ui_text_gray_hover"},e.dj.nickname)))})))},countName:"djRadiosCount"},用户:{code:1002,unit:"位",limit:20,Dom:function(e){var t=e.userprofiles,a=void 0===t?[]:t;return n().createElement("div",{className:"userprofiles_list _list",style:A},a.map((function(e,t){return n().createElement(c.Link,{to:"/user/".concat(e.userId),className:y()("item grid items-center hover:bg-gray-100",{"bg-gray-50":t%2==1}),key:e.userId},n().createElement("div",{className:"cover"},n().createElement("img",{src:"".concat(e.avatarUrl,"?param=60y60"),alt:""})),n().createElement("div",{className:"name px-5"},e.nickname," ",n().createElement(V.ZP,{size:16,gender:e.gender})),n().createElement("div",{className:"signature text-gray-400 ml-auto"},e.signature))})))},countName:"userprofileCount"}};const T=(0,r.memo)((function(e){var t=e.keywords,a=e.type;console.log("entry search");var i=(0,d.useDispatch)(),g=(0,r.useState)({}),f=(0,m.Z)(g,2),N=f[0],x=f[1],b=(0,r.useState)(0),h=(0,m.Z)(b,2),k=h[0],_=h[1],w=(0,r.useState)({}),Z=(0,m.Z)(w,2),C=Z[0],j=Z[1],O=(0,r.useState)(1),S=(0,m.Z)(O,2),D=S[0],I=S[1],L=(0,r.useState)(!0),P=(0,m.Z)(L,2),R=P[0],U=P[1],z=M[a],V=z.code,A=z.unit,T=z.limit,H=z.Dom,X=z.countName,q=(0,d.useSelector)((function(e){return e.common})).searchValue,B=function(){var e=(0,s.Z)(o().mark((function e(){var r,n,c,l,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(!0),e.prev=1,e.next=4,(0,u.Zb)({keywords:t,limit:T,type:V,offset:(D-1)*T});case 4:if(r=e.sent,n=r.result,c=n[X],"单曲"!==a){e.next=14;break}return e.next=10,(0,u.cX)({keywords:t});case 10:l=e.sent,s=l.result,j(void 0===s?{}:s);case 14:_(c),x(n),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),console.log(e.t0);case 21:U(!1);case 22:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){q||i((0,v.setSearchValue)({searchValue:t}))}),[]),(0,r.useEffect)((function(){I(1)}),[t,a]),(0,r.useEffect)((function(){B()}),[t,a,D]),n().createElement("div",{className:"domSearch overflow-auto max-h-full flex-auto"},n().createElement("div",{className:"domSearch_header p-8 pb-2.5 border-b"},n().createElement("div",{className:"font-bold text-base"},"找到",k||0,A),n().createElement("div",{className:"domSearch_nav mt-5 space-x-4"},Object.keys(M).map((function(e){return n().createElement(c.NavLink,{key:e,to:"/search/".concat(t,"/").concat(e),className:function(e){var t=e.isActive;return y()("text-lighter text-sm",t&&"font-bold")}},e)})))),n().createElement("div",{className:"domSearch_main"},R?n().createElement("div",{className:"pt-48 flex-center"},n().createElement(p.Z,null)):n().createElement(n().Fragment,null,n().createElement(H,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(Object(a),!0).forEach((function(t){(0,l.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({multimatch:C},N)),n().createElement(E.Z,{total:Math.ceil(k/T),page:D,func:I}))))})),H=function(){return n().createElement(c.Routes,null,n().createElement(c.Route,{path:"/search/:keywords/:type",element:n().createElement(T,null)}),n().createElement(c.Route,{path:"*",element:n().createElement(c.Navigate,{to:"/search/:keywords/单曲"})}))}}}]);
//# sourceMappingURL=Search.js.map?version=20e4705b