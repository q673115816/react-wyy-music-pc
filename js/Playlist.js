"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[238],{2166:(e,t,a)=>{a.r(t),a.d(t,{default:()=>G});var n=a(7363),r=a.n(n),l=a(6711),c=a(5861),s=a(885),i=a(7757),m=a.n(i),o=(a(9600),a(1249),a(9428)),u=a(7419),d=a(4184),p=a.n(d),f=a(8157),v=(a(8309),a(2526),a(1817),a(364)),E=a(7443),x=a(6719),y=a(7484),b=a.n(y),g=function(e){var t=e.tags,a=void 0===t?[]:t;return 0===a.length?null:r().createElement("div",{className:"tags"},r().createElement("span",null,"标签："),a.map((function(e,t){return r().createElement("span",{key:e},t>0&&" / ",r().createElement(l.Link,{to:"/home/playlist/".concat(e),className:"tag ui_link"},e))})))};const N=(0,n.memo)(g);a(4916),a(4723);var h=function(e){var t=e.description,a=void 0===t?"":t;if(!a)return null;var l=(0,n.useState)(!1),c=(0,s.Z)(l,2),i=c[0],m=c[1],o=a.match(/^.*$/gm);return r().createElement("div",{className:"relative pr-5"},r().createElement("div",{className:"whitespace-pre-line leading-6"},"简介：",r().createElement("span",{className:p()("text-gray-500 select-text",!i&&"truncate inline-block max-w-xs align-bottom")},i?a:null==o?void 0:o[0]),r().createElement("button",{type:"button",onClick:function(){return m(!i)},className:"absolute top-0 right-0 text-gray-500"},i?r().createElement(x.IconCaretUp,{size:16,className:"fill-current"}):r().createElement(x.IconCaretDown,{size:16,className:"fill-current"}))))};const k=(0,n.memo)(h);var w=function(e){var t,a,n,c,s=e.data,i=void 0===s?{}:s,m=e.handleSub,o=e.songs;return r().createElement("div",{className:"p-8 flex items-start"},r().createElement("div",{className:"border rounded overflow-hidden flex-none w-92 h-92"},r().createElement("img",{loading:"lazy",className:"w-full h-full",src:"".concat(i.playlist.coverImgUrl,"?param=200y200"),alt:""})),r().createElement("div",{className:"info flex-auto w-0 ml-5"},r().createElement("div",{className:"name leading-tight"},r().createElement("span",{className:"whitespace-nowrap text-red-500 border border-current p-0.5 rounded mr-2 align-bottom inline-block"},"歌单"),r().createElement("span",{className:"h1 select-text"},i.playlist.name||"我喜欢的音乐")),r().createElement("div",{className:"creator flex items-center mt-2"},r().createElement(l.Link,{to:"/user/".concat(null===(t=i.playlist.creator)||void 0===t?void 0:t.userId),className:"w-6 h-6 rounded-full overflow-hidden mr-2"},r().createElement("img",{className:"",src:"".concat(null===(a=i.playlist.creator)||void 0===a?void 0:a.avatarUrl,"?param=50y50"),alt:""})),r().createElement(l.Link,{to:"/user/".concat(null===(n=i.playlist.creator)||void 0===n?void 0:n.userId),className:"nickname ui_link mr-2"},null===(c=i.playlist.creator)||void 0===c?void 0:c.nickname),r().createElement("span",{className:"text-gray-500"},b()(i.playlist.createTime||Date.now()).format("YYYY-MM-DD"),"创建")),r().createElement("div",{className:"actions flex space-x-2 mt-2"},r().createElement(v.Z,{playlist:o}),r().createElement("button",{onClick:function(){return m(i.playlist.subscribed)},type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full btn"},i.playlist.subscribed?r().createElement(x.IconCheckbox,{size:20,stroke:1}):r().createElement(x.IconFolderPlus,{size:20,stroke:1})," ",i.playlist.subscribed?"已收藏":"收藏","(".concat((0,E.Qb)(i.playlist.subscribedCount),")")),r().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full btn"},r().createElement(x.IconScreenShare,{size:20,stroke:1}),"  分享","(".concat((0,E.Qb)(i.playlist.shareCount),")")),r().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full btn"},r().createElement(x.IconCloudDownload,{size:20,stroke:1}),"  下载全部")),r().createElement("div",{className:"space-y-1 mt-2"},r().createElement(N,{tags:i.playlist.tags}),r().createElement("div",null,r().createElement("span",{className:"mr-3"},"歌曲：",r().createElement("span",{className:"text-gray-500"},i.playlist.trackCount)),r().createElement("span",null,"播放：",r().createElement("span",{className:"text-gray-500"},(0,E.LU)(i.playlist.playCount)))),r().createElement(k,{description:i.playlist.description}))))};const Z=(0,n.memo)(w);var C=a(5721),S=a(7390),_=a(1495),I=a(1337),P=a(2446),D=a(8123),z=a(3850),L=function(e){var t=e.songs,a=void 0===t?[]:t;return a.length?r().createElement("div",{style:{"--ui_grid_template":"36px / 30px 30px 30px 36% 4fr 6fr 2fr"},className:"mt-4"},r().createElement("div",{className:"grid ui_grid_template pl-8"},r().createElement("div",null),r().createElement("div",null),r().createElement("div",null),r().createElement("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500"},"音乐标题"),r().createElement("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500"},"歌手"),r().createElement("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500"},"专辑"),r().createElement("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500"},"时长")),a.map((function(e,t){return r().createElement(C.Z,{schema:[["评论","播放","下一首播放"],["收藏到歌单","分享","复制链接","不感兴趣","下载"]],type:"song",item:e,key:e.id},r().createElement("div",{tabIndex:2,className:p()("grid items-center focus:outline-none focus:bg-gray-200 hover:bg-gray-100 ui_grid_template pl-8",t%2==0&&"bg-gray-50")},r().createElement("div",{className:"px-1"},r().createElement(S.Z,{index:t,id:e.id})),r().createElement("div",{className:"px-1"},r().createElement(_.Z,{id:e.id})),r().createElement("div",{className:"px-1"},r().createElement(I.Z,null)),r().createElement(P.Z,{className:"px-1",item:e}),r().createElement(D.Z,{className:"px-1",artists:e.ar}),r().createElement(z.Z,{className:"px-1",name:e.al.name,id:e.al.id}),r().createElement("div",{className:"text-gray-500 px-1"},b()(e.dt).format("mm:ss"))))}))):r().createElement("div",{className:"pt-16 text-center text-sm text-gray-400"},"暂无音乐")};const j=(0,n.memo)(L);var T=a(6329),U=a(3661);const O=(0,n.memo)((function(){var e=(0,l.useParams)().id;if(!e)return null;var t=(0,n.useState)(!0),a=(0,s.Z)(t,2),i=a[0],u=a[1],d=(0,n.useState)([]),p=(0,s.Z)(d,2),v=p[0],E=p[1],x=function(){var t=(0,c.Z)(m().mark((function t(){var a;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.wL)({id:e});case 2:a=t.sent,E(a),u(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=(0,n.useCallback)((function(){}),[]);return(0,n.useEffect)((function(){x()}),[]),r().createElement("div",{className:"px-8"},r().createElement("div",{className:"pt-10 pb-10"},r().createElement(U.Z,{max:140,placeholder:"",onChange:y})),i?r().createElement(f.Z,null):r().createElement(T.Z,{comments:v,type:0,more:e}))}));var Y=a(5754),M=a(4499);const R=(0,n.memo)((function(){var e=(0,l.useParams)().id,t=(0,n.useState)(1),a=(0,s.Z)(t,2),i=a[0],u=a[1],d=(0,n.useState)({}),p=(0,s.Z)(d,2),v=p[0],E=p[1],x=(0,n.useState)(!0),y=(0,s.Z)(x,2),b=y[0],g=y[1],N=function(){var t=(0,c.Z)(m().mark((function t(){var a,n,r;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.UL)({id:e,limit:60,offset:60*(i-1)});case 2:a=t.sent,n=a.subscribers,r=a.total,E({subscribers:n,total:r}),g(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,n.useEffect)((function(){N()}),[]),b?r().createElement("div",{className:"flex-center pt-32"},r().createElement(f.Z,null)):r().createElement("div",{className:"px-8"},r().createElement("div",{className:"domPlaylistDetail_subscribers flex justify-between flex-wrap"},null==v?void 0:v.subscribers.map((function(e){return r().createElement("div",{key:e.userId,className:"item flex mt-6 w-80 "},r().createElement(l.Link,{to:"/user/".concat(e.userId),className:"avatar w-24 h-24 border rounded-full overflow-hidden"},r().createElement("img",{loading:"lazy",src:"".concat(e.avatarUrl,"?param=100y100"),alt:""})),r().createElement("div",{className:"ml-2 flex-auto w-0 flex flex-col justify-center"},r().createElement("div",{className:"text-sm flex items-center"},r().createElement(l.Link,{to:"/user/".concat(e.userId)},e.nickname)," ",r().createElement(Y.ZP,{gender:e.gender,size:16})),r().createElement("div",{className:"mt-2 truncate"},e.signature)))}))),r().createElement(M.Z,{total:Math.ceil((null==v?void 0:v.total)/60),page:i,func:u}))}));var Q=a(5219),F=a(57),V=[["歌曲列表","Playlist"],["评论","Comments"],["收藏者","Subscribers"]],W={Playlist:j,Comments:O,Subscribers:R};const $=(0,n.memo)((function(){var e=(0,l.useParams)().id,t=(0,Q.T)(),a=(0,n.useState)(!0),i=(0,s.Z)(a,2),d=i[0],v=i[1],E=(0,n.useState)([]),x=(0,s.Z)(E,2),y=x[0],b=x[1],g=(0,F.x)({}),N=(0,s.Z)(g,2),h=N[0],k=N[1],w=(0,n.useState)(V[0][1]),C=(0,s.Z)(w,2),S=C[0],_=C[1],I=function(){var t=(0,c.Z)(m().mark((function t(){var a,n,r;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.MY)({id:e});case 3:if(a=t.sent,k(a),!(a.playlist.trackCount>0)){t.next=11;break}return t.next=8,(0,o.VO)({ids:a.playlist.trackIds.map((function(e){return e.id})).join(",")});case 8:n=t.sent,r=n.songs,b(r);case 11:v(!1),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}(),P=(0,n.useCallback)(function(){var a=(0,c.Z)(m().mark((function a(n){return m().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,(0,o.so)({t:n?2:1,id:e});case 3:200===a.sent.code&&(t((0,u.setToast)(n?"取消收藏成功！":"收藏成功！")),k((function(e){e.playlist.subscribed=!n}))),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}(),[e]);return(0,n.useEffect)((function(){I()}),[e]),d?r().createElement("div",{className:"w-full h-full flex-center"},r().createElement(f.Z,null)):r().createElement("div",{className:"overflow-auto h-full"},r().createElement(Z,{data:h,handleSub:P,songs:y}),r().createElement("div",{className:"mt-4"},r().createElement("div",{className:"space-x-4 flex items-baseline px-8"},V.map((function(e){var t=(0,s.Z)(e,2),a=t[0],n=t[1];return r().createElement("button",{type:"button",className:p()("text-sm",S===n&&"font-bold ui_underline"),key:a,onClick:function(){return _(n)}},a,"评论"===a&&"(".concat(h.playlist.commentCount,")"))}))),r().createElement("div",null,(0,n.createElement)(W[S],{songs:y}))))}));var q=a(6459);const A=(0,n.memo)((function(e){var t=e.id,a=function(){var e=(0,c.Z)(m().mark((function e(){var a;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.NW)({rid:t});case 3:a=e.sent,(0,q.Z)(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){a()}),[]),r().createElement("div",{className:"domPlaylistDetail"},r().createElement("div",{className:"domPlaylistDetail_header"}),r().createElement("div",{className:"domPlaylistDetail_main"},"TODO"))})),B=function(){var e=(0,n.useState)(0);return(0,s.Z)(e,1)[0],r().createElement("div",null,"TOTO")},G=function(){return r().createElement(l.Routes,null,r().createElement(l.Route,{path:"music/:id",element:r().createElement($,null)}),r().createElement(l.Route,{path:"dj/:id",element:r().createElement(A,null)}),r().createElement(l.Route,{path:"album/:id",element:r().createElement(B,null)}))}}}]);
//# sourceMappingURL=Playlist.js.map?version=b85bb476