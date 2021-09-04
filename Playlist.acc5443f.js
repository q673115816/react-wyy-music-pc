"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[5238],{6561:(e,t,a)=>{a.r(t),a.d(t,{default:()=>W});var n=a(7363),r=a.n(n),l=a(6711),c=a(1603),s=a(5861),i=a(885),m=a(7757),o=a.n(m),u=(a(9600),a(1249),a(1624)),d=a(5457),p=a(3011),f=a(4184),v=a.n(f),E=a(4849),x=a(7980),y=a.n(x),b=(a(2526),a(1817),a(4916),a(4723),a(8309),a(7948)),g=a(2503),N=a(6719),h=a(7484),k=a.n(h),w=(0,n.memo)((function(e){var t=e.tags,a=void 0===t?[]:t;return 0===a.length?null:r().createElement("div",{className:"tags"},r().createElement("span",null,"标签："),a.map((function(e,t){return r().createElement("span",{key:e},t>0&&" / ",r().createElement(l.Link,{to:"/home/playlist/".concat(e),className:"tag ui_link"},e))})))})),Z=(0,n.memo)((function(e){var t=e.description,a=void 0===t?"":t;if(!a)return null;var l=(0,n.useState)(!1),c=(0,i.Z)(l,2),s=c[0],m=c[1],o=a.match(/^.*$/gm);return r().createElement("div",{className:"relative pr-5"},r().createElement("div",{className:"whitespace-pre-line leading-6"},"简介：",r().createElement("span",{className:v()("text-gray-500 select-text",!s&&"truncate inline-block max-w-xs align-bottom")},s?a:o[0]),r().createElement("button",{type:"button",onClick:function(){return m(!s)},className:"absolute top-0 right-0 text-gray-500"},s?r().createElement(N.IconCaretUp,{size:16,className:"fill-current"}):r().createElement(N.IconCaretDown,{size:16,className:"fill-current"}))))}));const _=(0,n.memo)((function(e){var t,a,n,c,s=e.data,i=void 0===s?{}:s,m=e.handleSub,o=e.songs;return r().createElement("div",{className:"domPlaylistDetail_header p-8 flex"},r().createElement("div",{className:"cover border rounded overflow-hidden flex-none w-92 h-92"},r().createElement("img",{className:"w-full h-full",src:"".concat(i.playlist.coverImgUrl,"?param=200y200"),alt:""})),r().createElement("div",{className:"info flex-auto w-0 ml-5"},r().createElement("div",{className:"name flex items-center"},r().createElement("span",{className:"type text-red-500 border border-current px-1 py-0.5 rounded mr-2 leading-none"},"歌单"),r().createElement("span",{className:"h1 select-text"},i.playlist.name||"我喜欢的音乐")),r().createElement("div",{className:"creator flex items-center mt-2"},r().createElement(l.Link,{to:"/user/".concat(null===(t=i.playlist.creator)||void 0===t?void 0:t.userId),className:"avator w-6 h-6 rounded-full overflow-hidden mr-2"},r().createElement("img",{className:"",src:"".concat(null===(a=i.playlist.creator)||void 0===a?void 0:a.avatarUrl,"?param=50y50"),alt:""})),r().createElement(l.Link,{to:"/user/".concat(null===(n=i.playlist.creator)||void 0===n?void 0:n.userId),className:"nickname ui_link mr-2"},null===(c=i.playlist.creator)||void 0===c?void 0:c.nickname),r().createElement("span",{className:"text-gray-500"},k()(i.playlist.createTime||Date.now()).format("YYYY-MM-DD"),"创建")),r().createElement("div",{className:"actions flex space-x-2 mt-2"},r().createElement(b.Z,{playlist:o}),r().createElement("button",{onClick:function(){return m(i.playlist.subscribed)},type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full btn"},i.playlist.subscribed?r().createElement(N.IconCheckbox,{size:20,stroke:1}):r().createElement(N.IconFolderPlus,{size:20,stroke:1})," ",i.playlist.subscribed?"已收藏":"收藏","(".concat((0,g.Qb)(i.playlist.subscribedCount),")")),r().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full btn"},r().createElement(N.IconScreenShare,{size:20,stroke:1}),"  分享","(".concat((0,g.Qb)(i.playlist.shareCount),")")),r().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full btn"},r().createElement(N.IconCloudDownload,{size:20,stroke:1}),"  下载全部")),r().createElement("div",{className:"space-y-1 mt-2"},r().createElement(w,{tags:i.playlist.tags}),r().createElement("div",null,r().createElement("span",{className:"mr-3"},"歌曲：",r().createElement("span",{className:"text-gray-500"},i.playlist.trackCount)),r().createElement("span",null,"播放：",r().createElement("span",{className:"text-gray-500"},(0,g.LU)(i.playlist.playCount)))),r().createElement(Z,{description:i.playlist.description}))))}));var C=a(7317),S=a(3758),D=a(7653),I=a(8293),P=a(6823),L=a(8769),j=a(2387),z=a(2720),U=a(4592),O=a(6871),T=a(8124),Y=[["歌曲列表","playlist"],["评论","comments"],["收藏者","subscribers"]],M={playlist:function(e){var t=e.songs,a=void 0===t?[]:t;return 0===a.length?r().createElement("div",{className:"pt-16 text-center text-sm text-gray-400"},"暂无音乐"):r().createElement("div",{style:{"--ui_grid_template":"36px / 30px 30px 30px 36% 4fr 6fr 2fr"},className:"mt-4"},r().createElement("div",{className:"grid ui_grid_template pl-8"},r().createElement("div",null),r().createElement("div",null),r().createElement("div",null),r().createElement("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500"},"音乐标题"),r().createElement("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500"},"歌手"),r().createElement("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500"},"专辑"),r().createElement("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500"},"时长")),a.map((function(e,t){return r().createElement(C.Z,{schema:[["评论","播放","下一首播放"],["收藏到歌单","分享","复制链接","不感兴趣","下载"]],type:"song",item:e,key:e.id},r().createElement("div",{tabIndex:"2",className:v()("grid items-center focus:outline-none focus:bg-gray-200 hover:bg-gray-100 ui_grid_template pl-8",t%2==0&&"bg-gray-50")},r().createElement("div",{className:"px-1"},r().createElement(S.Z,{index:t,id:e.id})),r().createElement("div",{className:"px-1"},r().createElement(D.Z,{id:e.id})),r().createElement("div",{className:"px-1"},r().createElement(I.Z,null)),r().createElement(P.Z,{className:"px-1",item:e}),r().createElement(L.Z,{className:"px-1",artists:e.ar}),r().createElement(j.Z,{className:"px-1",name:e.al.name,id:e.al.id}),r().createElement("div",{className:"text-gray-500 px-1"},k()(e.dt).format("mm:ss"))))})))},comments:function(e){var t=e.id,a=(0,n.useState)({}),l=(0,i.Z)(a,2),c=l[0],m=l[1],u=function(){var e=(0,s.Z)(o().mark((function e(){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.wL)({id:t});case 3:a=e.sent,m(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){u()}),[]),r().createElement("div",{className:"px-8"},r().createElement("div",{className:"pt-10 pb-10"},r().createElement(U.Z,null)),r().createElement(z.Z,{comments:c}))},subscribers:function(e){var t=e.id,a=(0,n.useState)([]),c=(0,i.Z)(a,2),m=c[0],u=c[1],p=(0,n.useState)(0),f=(0,i.Z)(p,2),v=f[0],E=f[1],x=(0,n.useState)(1),y=(0,i.Z)(x,2),b=y[0],g=y[1],N=function(){var e=(0,s.Z)(o().mark((function e(){var a,n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.UL)({id:t,limit:60,offset:60*(b-1)});case 3:a=e.sent,n=a.subscribers,r=a.total,u(n),E(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){N()}),[b]),r().createElement("div",{className:"px-8"},r().createElement("div",{className:"domPlaylistDetail_subscribers flex justify-between flex-wrap"},m.map((function(e){return r().createElement("div",{key:e.userId,className:"item flex mt-6"},r().createElement(l.Link,{to:"/user/".concat(e.userId),className:"avatar border rounded-full overflow-hidden"},r().createElement("img",{src:"".concat(e.avatarUrl,"?param=100y100"),alt:""})),r().createElement("div",{className:"ml-2 flex-auto w-0 flex flex-col justify-center"},r().createElement("div",{className:"text-sm flex items-center"},r().createElement(l.Link,{to:"/user/".concat(e.userId)},e.nickname)," ",r().createElement(O.ZP,{gender:e.gender,size:16})),r().createElement("div",{className:"mt-2 truncate"},e.signature)))}))),r().createElement(T.Z,{total:Math.ceil(v/60),page:b,func:g}))}};const R=(0,n.memo)((function(e){var t,a,l=e.id,c=(0,u.useDispatch)(),m=(0,n.useState)(!0),f=(0,i.Z)(m,2),x=f[0],b=f[1],g=(0,n.useState)([]),N=(0,i.Z)(g,2),h=N[0],k=N[1],w=(0,n.useState)({}),Z=(0,i.Z)(w,2),C=Z[0],S=Z[1],D=(0,n.useState)("playlist"),I=(0,i.Z)(D,2),P=I[0],L=I[1],j=function(){var e=(0,s.Z)(o().mark((function e(){var t,a,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.MY)({id:l});case 3:if(t=e.sent,S(y()((function(e){for(var a in t)e[a]=t[a]}))),!(t.playlist.trackCount>0)){e.next=11;break}return e.next=8,(0,d.VO)({ids:t.playlist.trackIds.map((function(e){return e.id})).join(",")});case 8:a=e.sent,n=a.songs,k(n);case 11:b(!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),z=(0,n.useCallback)(function(){var e=(0,s.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.so)({t:t?2:1,id:l});case 3:200===e.sent.code&&(c((0,p.setToast)(t?"取消收藏成功！":"收藏成功！")),S(y()((function(e){e.playlist.subscribed=!t})))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),[l]);return(0,n.useEffect)((function(){j()}),[l]),x?r().createElement("div",{className:"w-full h-full flex-center"},r().createElement(E.Z,null)):r().createElement("div",{className:"domPlaylistDetail overflow-auto h-full"},r().createElement(_,{data:C,handleSub:z,songs:h}),r().createElement("div",{className:"domPlaylistDetail_main mt-4"},r().createElement("div",{className:"space-x-4 flex items-baseline px-8"},Y.map((function(e){var t=(0,i.Z)(e,2),a=t[0],n=t[1];return r().createElement("button",{type:"button",className:v()("text-sm",P===n&&"font-bold ui_underline"),key:a,onClick:function(){return L(n)}},a,"评论"===a&&"(".concat(C.playlist.commentCount,")"))}))),r().createElement("div",null,(t=M[P],a={id:l,songs:h},r().createElement(t,a)))))}));var Q=a(6459);const F=(0,n.memo)((function(e){var t=e.id,a=function(){var e=(0,s.Z)(o().mark((function e(){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,d.NW)({rid:t});case 3:a=e.sent,(0,Q.Z)(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){a()}),[]),r().createElement("div",{className:"domPlaylistDetail"},r().createElement("div",{className:"domPlaylistDetail_header"}),r().createElement("div",{className:"domPlaylistDetail_main"},"TODO"))})),V=function(){var e=(0,n.useState)(0);return(0,i.Z)(e,1)[0],r().createElement("div",null,"TOTO")},W=(0,n.memo)((function(){return r().createElement(l.Switch,null,r().createElement(l.Route,{path:"/playlist/music/:id"},(0,c.Z)(R)),r().createElement(l.Route,{path:"/playlist/dj/:id"},(0,c.Z)(F)),r().createElement(l.Route,{path:"/playlist/album/:id"},(0,c.Z)(V)),r().createElement(l.Route,{path:"/playlist"},r().createElement(R,null)))}))}}]);