"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[288],{1180:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Q});var r=a(7363),n=a.n(r),c=a(6711),l=function(){return n().createElement(c.Outlet,null)};const m=(0,r.memo)(l);var s=a(4942),i=a(5861),o=a(885),d=(a(1249),a(7941),a(2222),a(2526),a(7327),a(1539),a(5003),a(4747),a(9337),a(3321),a(9070),a(7757)),u=a.n(d),v=a(9428),p=a(4506),E=a(8157),g=a(4499),y=(a(8309),a(6699),a(2023),a(4184)),f=a.n(y),N=a(7484),x=a.n(N),b=a(6719),h=a(5721),k=a(7390),_=a(1495),w=a(1337),Z=a(2446),C=a(8123),j=a(3850);const O=(0,r.memo)((function(e){var t=e.pop,a=void 0===t?0:t;return n().createElement("div",{className:"range w-20 h-1.5 rounded bg-gray-200"},n().createElement("div",{className:"h-full bg-gray-300 rounded",style:{width:"".concat(a,"%")}}))}));var S={artist:function(e){var t,a=e.item;return n().createElement(c.Link,{to:"/artist/".concat(a.id),className:"item group h-20 flex items-center bg-gray-100 rounded overflow-hidden"},n().createElement("div",{className:"cover"},n().createElement("img",{className:"",src:"".concat(a.picUrl,"?param=80y80"),alt:""})),n().createElement("div",{className:"content px-2"},n().createElement("div",{className:"name text-sm"},"歌手：",a.name,(null===(t=a.alias)||void 0===t?void 0:t.length)>0&&n().createElement("span",{className:"text-gray-400"},"（".concat(a.alias,"）")))),n().createElement("div",{className:"ico text-gray-600 group-hover:text-black ml-auto mr-4"},n().createElement(b.IconChevronRight,{size:24,stroke:1})))},album:function(e){var t=e.item;return n().createElement(c.Link,{to:"/playlist/album/".concat(t.id),className:"item h-20 flex items-center bg-gray-100 rounded overflow-hidden"},n().createElement("div",{className:"cover"},n().createElement("img",{className:"",src:"".concat(t.blurPicUrl,"?param=80y80"),alt:""})),n().createElement("div",{className:"content px-2"},n().createElement("div",{className:"name text-sm"},t.name),n().createElement("div",{className:"subname"},t.artist.name)),n().createElement("div",{className:"ico text-gray-600 group-hover:text-black ml-auto mr-4"},n().createElement(b.IconChevronRight,{size:24,stroke:1})))}},D=function(e){var t=e.list,a=void 0===t?[]:t,r=Object.keys(S);return n().createElement("div",{className:"domSearch_multimatch border-b px-8 py-5"},n().createElement("div",{className:"title text-bold"},"最佳匹配"),n().createElement("div",{className:"list mt-5 flex space-x-6"},a.map((function(e){var t=(0,o.Z)(e,3),a=t[0],c=t[1],l=t[2];return r.includes(l)&&n().createElement(c,{item:a,key:l})}))))};const I=(0,r.memo)((function(e){var t,a=e.songs,r=void 0===a?[]:a,c=e.multimatch,l=void 0===c?{orders:[]}:c,m=null===(t=l.orders)||void 0===t?void 0:t.map((function(e){return[l[e][0],S[e],e]}));return n().createElement(n().Fragment,null,n().createElement(D,{list:m}),n().createElement("div",{className:"songs_list",style:{"--ui_grid_template":"36px / 54px 24px 24px 37% 4fr 5fr 2fr 3fr"}},n().createElement("div",{className:"thead"},n().createElement("div",{className:"item grid items-center text-gray-400 ui_grid_template"},n().createElement("div",{className:"index"}),n().createElement("div",{className:"heart"}),n().createElement("div",{className:"download"}),n().createElement("div",{className:"name flex-auto px-2"},"音乐标题"),n().createElement("div",{className:"artist flex-none px-2"},"歌手"),n().createElement("div",{className:"album flex-none px-2"},"专辑"),n().createElement("div",{className:"duration flex-none px-2"},"时长"),n().createElement("div",{className:"pop flex-none px-2"},"热度"))),n().createElement("div",{className:"tbody"},r.map((function(e,t){return n().createElement(h.Z,{schema:[["评论","播放","下一首播放"],["收藏到歌单","分享","复制链接","下载"]],item:e,type:"song",key:e.id},n().createElement("div",{tabIndex:2,className:f()("item grid items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none ui_grid_template",{"bg-gray-50":t%2==0})},n().createElement("div",{className:"index pr-2"},n().createElement(k.Z,{index:t,id:e.id})),n().createElement("div",{className:"heart text-center"},n().createElement(_.Z,{id:e.id})),n().createElement("div",{className:"download text-center"},n().createElement(w.Z,null)),n().createElement("div",{className:"name px-2"},n().createElement(Z.Z,{item:e})),n().createElement("div",{className:"artist flex-none px-2 truncate text-gray-400"},n().createElement(C.Z,{artists:e.ar})),n().createElement("div",{className:"album truncate flex-none px-2"},n().createElement(j.Z,{name:e.al.name,id:e.al.name})),n().createElement("div",{className:"duration text-gray-400 truncate flex-none px-2"},x()(e.dt).format("mm:ss")),n().createElement("div",{className:"pop"},n().createElement(O,{pop:e.pop}))))})))))}));var L={"--grid-template-columns":"60px 6fr min-content"},P={"--grid-template-columns":"60px 1fr 1fr"},R=a(4907),U=function(e){var t=e.videos,a=(void 0===t?[]:t).map((function(e){var t=e.type,a=e.title,r=e.coverUrl,n=e.playTime,c=e.creator;return{id:e.vid,type:t,title:a,creator:c,playCount:n,duration:e.durationms,cover:r}}));return n().createElement("div",{className:"videos_list py-5 px-10"},n().createElement(R.Z,{list:a}))};const z=(0,r.memo)(U);var T={"--grid-template-columns":"60px 6fr 2fr 5fr"};a(4916),a(5306),a(9600),a(7042);const V=function(e){var t=e.lyrics,a=void 0===t?[]:t,c=(0,r.useRef)(),l=(0,r.useState)(!1),m=(0,o.Z)(l,2),s=m[0],i=m[1];(0,r.useEffect)((function(){c.current=a.join("\n").replace(/<b>|<\/b>/gm,"")}),[a]);var d=function(){var e=document.createElement("textarea");e.setAttribute("readonly","readonly"),e.textContent=c.current,document.body.appendChild(e),e.select(),document.execCommand("copy")&&(document.execCommand("copy"),console.log("复制成功")),document.body.removeChild(e)};return n().createElement("div",{className:"lrc flex pb-2"},n().createElement("div",{className:"content w-2/3 px-2 text-gray-500"},a.slice(0,s?1/0:4).map((function(e,t){return n().createElement("div",{key:e+t,dangerouslySetInnerHTML:{__html:e}})}))),n().createElement("div",{className:"actions w-1/3 flex flex-col justify-between"},n().createElement("div",{className:"flex space-x-2.5"},n().createElement("button",{type:"button",className:"flex-center border border-gray-400 px-3 h-6 hover:bg-gray-300 rounded-full",onClick:function(){return i(!s)}},s?"收起":"展开","歌词"),n().createElement("button",{type:"button",className:"flex-center border border-gray-400 px-3 h-6 hover:bg-gray-300 rounded-full clip",onClick:d},"复制歌词")),s&&n().createElement("div",{className:"flex space-x-2.5"},n().createElement("button",{type:"button",className:"flex-center border border-gray-400 px-3 h-6 hover:bg-gray-300 rounded-full",onClick:function(){return i(!1)}},"收起歌词"),n().createElement("button",{type:"button",className:"flex-center border border-gray-400 px-3 h-6 hover:bg-gray-300 rounded-full clip",onClick:d},"复制歌词"))))};var A={"--grid-template-columns":"60px 5fr 2fr"},F=function(e){var t=e.djRadios,a=void 0===t?[]:t;return n().createElement("div",{className:"djRadios_list _list",style:A},a.map((function(e,t){return n().createElement("div",{className:f()("item grid items-center hover:bg-gray-100",{"bg-gray-50":t%2==0}),key:e.id},n().createElement(c.Link,{to:"/playlist/dj/".concat(e.id),className:"cover"},n().createElement("img",{className:"",src:"".concat(e.picUrl,"?param=60y60"),alt:""})),n().createElement("div",{className:"px-5"},n().createElement(c.Link,{to:"/playlist/dj/".concat(e.id),className:"name"},e.name)),n().createElement("div",{className:"dj text-gray-300"},"by  ",n().createElement(c.Link,{to:"/user/".concat(e.dj.userId),className:"ui_text_gray_hover"},e.dj.nickname)))})))};const M=(0,r.memo)(F);var H=a(5754),X={"--grid-template-columns":"60px 5fr 2fr"},q=a(5219);function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}var G={单曲:{code:1,unit:"首",limit:100,Dom:I,countName:"songCount"},歌手:{code:100,unit:"位",limit:20,Dom:function(e){var t=e.artists,a=void 0===t?[]:t;return n().createElement("div",{className:"artists_list _list",style:L},a.map((function(e,t){return n().createElement("div",{className:f()("item relative grid items-center hover:bg-gray-100",{"bg-gray-50":t%2==1}),key:e.id},n().createElement(c.Link,{to:"/artist/".concat(e.id),className:"absolute inset-0"}),n().createElement("div",{className:"cover"},n().createElement("img",{className:"",src:"".concat(e.img1v1Url,"?param=60y60"),alt:""})),n().createElement("div",{className:"name px-2.5 text-sm"},e.name,e.alia&&n().createElement("span",{className:"text-gray-400"},"(",null==e?void 0:e.alias[0],")")),e.accountId&&n().createElement("span",{className:"account bg-red-500 w-4 h-4 rounded-full text-white flex-center"},n().createElement(b.IconUser,{size:12,stroke:3})))})))},countName:"artistCount"},专辑:{code:10,unit:"张",limit:20,Dom:function(e){var t=e.albums,a=void 0===t?[]:t;return n().createElement("div",{className:"albums_list _list",style:P},a.map((function(e,t){return n().createElement("div",{tabIndex:"2",className:f()("item grid items-center relative hover:bg-gray-100",{"bg-gray-50":t%2==1}),key:e.id},n().createElement(c.Link,{className:"absolute inset-0 z-0",to:"/playlist/album/".concat(e.id)}),n().createElement("div",{className:"cover"},n().createElement("img",{src:"".concat(e.picUrl,"?param=60y60"),alt:""})),n().createElement("div",{className:"name px-5 text-sm"},e.name,e.alias.length>0&&n().createElement("span",{className:"text-gray-400"},"（".concat(e.alias,"）"))),n().createElement("div",{className:"artist truncate"},n().createElement(c.Link,{to:"/artist/".concat(e.artist.id),className:"ui_text_gray_hover relative z-10"},e.artist.name,e.artist.alias.length>0&&n().createElement("span",{className:"text-gray-400"},"（".concat(e.artist.alias,"）")))))})))},countName:"albumCount"},视频:{code:1014,unit:"个",limit:24,Dom:z,countName:"videoCount"},歌单:{code:1e3,unit:"个",limit:20,Dom:function(e){var t=e.playlists,a=void 0===t?[]:t;return n().createElement("div",{className:"playlists_list _list",style:T},a.map((function(e,t){return n().createElement("div",{className:f()("item grid items-center relative hover:bg-gray-100",{"bg-gray-50":t%2==1}),key:e.id},n().createElement(c.Link,{className:"absolute inset-0 z-0",to:"/playlist/music/".concat(e.id)}),n().createElement("div",{className:"cover"},n().createElement("img",{className:"",src:"".concat(e.coverImgUrl,"?param=60y60"),alt:""})),n().createElement("div",{className:"name px-3"},e.name),n().createElement("div",{className:"trackCount text-gray-400"},e.trackCount,"首"),n().createElement("div",{className:"creator text-gray-300"},"by  ",n().createElement(c.Link,{to:"/user/".concat(e.creator.userId),className:"ui_text_black_hover relative z-10"},e.creator.nickname)))})))},countName:"playlistCount"},歌词:{code:1006,unit:"首",limit:20,Dom:function(e){var t=e.songs,a=void 0===t?[]:t;return n().createElement("div",{className:"lyrics_list",style:{"--ui_grid_template":"36px / 54px 24px 24px 37% 4fr 5fr 2fr 3fr"}},n().createElement("div",{className:"thead"},n().createElement("div",{className:"item grid items-center text-gray-400 ui_grid_template"},n().createElement("div",{className:"index"}),n().createElement("div",{className:"heart"}),n().createElement("div",{className:"download"}),n().createElement("div",{className:"name"},"音乐标题"),n().createElement("div",{className:"artist"},"歌手"),n().createElement("div",{className:"album"},"专辑"),n().createElement("div",{className:"duration"},"时长"),n().createElement("div",{className:"text-gray-400"},"热度"))),n().createElement("div",{className:"tbody"},a.map((function(e,t){return n().createElement(h.Z,{schema:[["评论","播放","下一首播放"],["收藏到歌单","分享","复制链接","下载"]],item:e,type:"song",key:e.id},n().createElement("div",{tabIndex:"2",className:f()("item grid items-center hover:bg-gray-100 focus:outline-none focus:bg-gray-200 ui_grid_template",{"bg-gray-50":t%2==0})},n().createElement("div",{className:"index pr-2"},n().createElement(k.Z,{index:t,id:e.id})),n().createElement("div",{className:"heart"},n().createElement(_.Z,{id:e.id})),n().createElement("div",{className:"download"},n().createElement(w.Z,null)),n().createElement("div",{className:"name flex"},n().createElement(Z.Z,{item:e})),n().createElement("div",{className:"artist truncate"},n().createElement(C.Z,{artists:e.ar})),n().createElement("div",{className:"album truncate"},n().createElement(j.Z,{name:e.al.name,id:e.al.id})),n().createElement("div",{className:"duration text-gray-400 truncate"},x()(e.dt).format("mm:ss")),n().createElement("div",{className:"pop"},n().createElement(O,{pop:e.pop})),n().createElement(V,{lyrics:e.lyrics})))}))))},countName:"songCount"},主播电台:{code:1009,unit:"个",limit:100,Dom:M,countName:"djRadiosCount"},用户:{code:1002,unit:"位",limit:20,Dom:function(e){var t=e.userprofiles,a=void 0===t?[]:t;return n().createElement("div",{className:"userprofiles_list _list",style:X},a.map((function(e,t){return n().createElement(c.Link,{to:"/user/".concat(e.userId),className:f()("item grid items-center hover:bg-gray-100",{"bg-gray-50":t%2==1}),key:e.userId},n().createElement("div",{className:"cover"},n().createElement("img",{src:"".concat(e.avatarUrl,"?param=60y60"),alt:""})),n().createElement("div",{className:"name px-5"},e.nickname," ",n().createElement(H.ZP,{size:16,gender:e.gender})),n().createElement("div",{className:"signature text-gray-400 ml-auto"},e.signature))})))},countName:"userprofileCount"}},J=function(){console.log("entry search");var e=(0,c.useParams)(),t=e.keywords,a=e.type,l=(0,q.T)(),m=(0,r.useState)({}),d=(0,o.Z)(m,2),y=d[0],N=d[1],x=(0,r.useState)(0),b=(0,o.Z)(x,2),h=b[0],k=b[1],_=(0,r.useState)({}),w=(0,o.Z)(_,2),Z=w[0],C=w[1],j=(0,r.useState)(1),O=(0,o.Z)(j,2),S=O[0],D=O[1],I=(0,r.useState)(!0),L=(0,o.Z)(I,2),P=L[0],R=L[1],U=G[a],z=U.code,T=U.unit,V=U.limit,A=U.Dom,F=U.countName,M=(0,q.C)((function(e){return e.common})).searchValue,H=function(){var e=(0,i.Z)(u().mark((function e(){var r,n,c,l,m;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(!0),e.prev=1,e.next=4,(0,v.Zb)({keywords:t,limit:V,type:z,offset:(S-1)*V});case 4:if(r=e.sent,n=r.result,c=n[F],"单曲"!==a){e.next=14;break}return e.next=10,(0,v.cX)({keywords:t});case 10:l=e.sent,m=l.result,C(void 0===m?{}:m);case 14:k(c),N(n),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),console.log(e.t0);case 21:R(!1);case 22:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){M||l((0,p.setSearchValue)({searchValue:t}))}),[]),(0,r.useEffect)((function(){D(1)}),[t,a]),(0,r.useEffect)((function(){H()}),[t,a,S]),n().createElement("div",{className:"domSearch overflow-auto max-h-full flex-auto"},n().createElement("div",{className:"domSearch_header p-8 pb-2.5 border-b"},n().createElement("div",{className:"font-bold text-base"},"找到",h||0,T),n().createElement("div",{className:"domSearch_nav mt-5 space-x-4"},Object.keys(G).map((function(e){return n().createElement(c.NavLink,{key:e,to:"/search/".concat(t,"/").concat(e),className:function(e){var t=e.isActive;return f()("text-lighter text-sm",t&&"font-bold")}},e)})))),n().createElement("div",{className:"domSearch_main"},P?n().createElement("div",{className:"pt-48 flex-center"},n().createElement(E.Z,null)):n().createElement(n().Fragment,null,n().createElement(A,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(Object(a),!0).forEach((function(t){(0,s.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({multimatch:Z},y)),n().createElement(g.Z,{total:Math.ceil(h/V),page:S,func:D}))))};const K=(0,r.memo)(J),Q=function(){return n().createElement(c.Routes,null,n().createElement(c.Route,{path:":keywords",element:n().createElement(m,null)},n().createElement(c.Route,{path:":type",element:n().createElement(K,null)}),n().createElement(c.Route,{index:!0,element:n().createElement(c.Navigate,{to:"单曲",replace:!0})})))}}}]);
//# sourceMappingURL=Search.js.map?version=38c621fb