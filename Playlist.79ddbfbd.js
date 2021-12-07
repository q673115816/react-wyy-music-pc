"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[238],{3145:(e,t,a)=>{a.r(t),a.d(t,{default:()=>$});var n=a(7363),r=a.n(n),l=a(6711),s=a(5861),c=a(885),i=a(7757),m=a.n(i),o=(a(9600),a(1249),a(9965)),u=a(9922),d=a(4184),p=a.n(d),f=a(8157),v=a(7980),E=a.n(v),x=(a(2526),a(1817),a(4916),a(4723),a(8309),a(7280)),y=a(7443),b=a(6719),g=a(7484),N=a.n(g),h=(0,n.memo)((function(e){var t=e.tags,a=void 0===t?[]:t;return 0===a.length?null:r().createElement("div",{className:"tags"},r().createElement("span",null,"标签："),a.map((function(e,t){return r().createElement("span",{key:e},t>0&&" / ",r().createElement(l.Link,{to:"/home/playlist/".concat(e),className:"tag ui_link"},e))})))})),k=(0,n.memo)((function(e){var t=e.description,a=void 0===t?"":t;if(!a)return null;var l=(0,n.useState)(!1),s=(0,c.Z)(l,2),i=s[0],m=s[1],o=a.match(/^.*$/gm);return r().createElement("div",{className:"relative pr-5"},r().createElement("div",{className:"whitespace-pre-line leading-6"},"简介：",r().createElement("span",{className:p()("text-gray-500 select-text",!i&&"truncate inline-block max-w-xs align-bottom")},i?a:o[0]),r().createElement("button",{type:"button",onClick:function(){return m(!i)},className:"absolute top-0 right-0 text-gray-500"},i?r().createElement(b.IconCaretUp,{size:16,className:"fill-current"}):r().createElement(b.IconCaretDown,{size:16,className:"fill-current"}))))}));const w=(0,n.memo)((function(e){var t,a,n,s,c=e.data,i=void 0===c?{}:c,m=e.handleSub,o=e.songs;return r().createElement("div",{className:"domPlaylistDetail_header p-8 flex"},r().createElement("div",{className:"cover border rounded overflow-hidden flex-none w-92 h-92"},r().createElement("img",{className:"w-full h-full",src:"".concat(i.playlist.coverImgUrl,"?param=200y200"),alt:""})),r().createElement("div",{className:"info flex-auto w-0 ml-5"},r().createElement("div",{className:"name flex items-center"},r().createElement("span",{className:"type text-red-500 border border-current px-1 py-0.5 rounded mr-2 leading-none"},"歌单"),r().createElement("span",{className:"h1 select-text"},i.playlist.name||"我喜欢的音乐")),r().createElement("div",{className:"creator flex items-center mt-2"},r().createElement(l.Link,{to:"/user/".concat(null===(t=i.playlist.creator)||void 0===t?void 0:t.userId),className:"avator w-6 h-6 rounded-full overflow-hidden mr-2"},r().createElement("img",{className:"",src:"".concat(null===(a=i.playlist.creator)||void 0===a?void 0:a.avatarUrl,"?param=50y50"),alt:""})),r().createElement(l.Link,{to:"/user/".concat(null===(n=i.playlist.creator)||void 0===n?void 0:n.userId),className:"nickname ui_link mr-2"},null===(s=i.playlist.creator)||void 0===s?void 0:s.nickname),r().createElement("span",{className:"text-gray-500"},N()(i.playlist.createTime||Date.now()).format("YYYY-MM-DD"),"创建")),r().createElement("div",{className:"actions flex space-x-2 mt-2"},r().createElement(x.Z,{playlist:o}),r().createElement("button",{onClick:function(){return m(i.playlist.subscribed)},type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full btn"},i.playlist.subscribed?r().createElement(b.IconCheckbox,{size:20,stroke:1}):r().createElement(b.IconFolderPlus,{size:20,stroke:1})," ",i.playlist.subscribed?"已收藏":"收藏","(".concat((0,y.Qb)(i.playlist.subscribedCount),")")),r().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full btn"},r().createElement(b.IconScreenShare,{size:20,stroke:1}),"  分享","(".concat((0,y.Qb)(i.playlist.shareCount),")")),r().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full btn"},r().createElement(b.IconCloudDownload,{size:20,stroke:1}),"  下载全部")),r().createElement("div",{className:"space-y-1 mt-2"},r().createElement(h,{tags:i.playlist.tags}),r().createElement("div",null,r().createElement("span",{className:"mr-3"},"歌曲：",r().createElement("span",{className:"text-gray-500"},i.playlist.trackCount)),r().createElement("span",null,"播放：",r().createElement("span",{className:"text-gray-500"},(0,y.LU)(i.playlist.playCount)))),r().createElement(k,{description:i.playlist.description}))))}));var Z=a(5721),C=a(7390),_=a(1495),I=a(1337),D=a(2446),S=a(8123),L=a(3850),P=a(8876),j=a(3661),z=a(7453),T=a(5754),U=a(9097);const O=(0,n.memo)((function(e){var t=e.id,a=(0,n.useState)(1),i=(0,c.Z)(a,2),u=i[0],d=i[1],p=(0,z.useQuery)(["subscribers",u],(0,s.Z)(m().mark((function e(){var a,n,r;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.UL)({id:t,limit:60,offset:60*(u-1)});case 2:return a=e.sent,n=a.subscribers,r=a.total,e.abrupt("return",{subscribers:n,total:r});case 6:case"end":return e.stop()}}),e)})))),v=p.data;return p.isLoading?r().createElement("div",{className:"flex-center pt-32"},r().createElement(f.Z,null)):r().createElement("div",{className:"px-8"},r().createElement("div",{className:"domPlaylistDetail_subscribers flex justify-between flex-wrap"},null==v?void 0:v.subscribers.map((function(e){return r().createElement("div",{key:e.userId,className:"item flex mt-6"},r().createElement(l.Link,{to:"/user/".concat(e.userId),className:"avatar border rounded-full overflow-hidden"},r().createElement("img",{src:"".concat(e.avatarUrl,"?param=100y100"),alt:""})),r().createElement("div",{className:"ml-2 flex-auto w-0 flex flex-col justify-center"},r().createElement("div",{className:"text-sm flex items-center"},r().createElement(l.Link,{to:"/user/".concat(e.userId)},e.nickname)," ",r().createElement(T.ZP,{gender:e.gender,size:16})),r().createElement("div",{className:"mt-2 truncate"},e.signature)))}))),r().createElement(U.Z,{total:Math.ceil((null==v?void 0:v.total)/60),page:u,func:d}))}));var Y=a(9638),M=[["歌曲列表","playlist"],["评论","comments"],["收藏者","subscribers"]],Q={playlist:function(e){var t=e.songs,a=void 0===t?[]:t;return 0===a.length?r().createElement("div",{className:"pt-16 text-center text-sm text-gray-400"},"暂无音乐"):r().createElement("div",{style:{"--ui_grid_template":"36px / 30px 30px 30px 36% 4fr 6fr 2fr"},className:"mt-4"},r().createElement("div",{className:"grid ui_grid_template pl-8"},r().createElement("div",null),r().createElement("div",null),r().createElement("div",null),r().createElement("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500"},"音乐标题"),r().createElement("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500"},"歌手"),r().createElement("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500"},"专辑"),r().createElement("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500"},"时长")),a.map((function(e,t){return r().createElement(Z.Z,{schema:[["评论","播放","下一首播放"],["收藏到歌单","分享","复制链接","不感兴趣","下载"]],type:"song",item:e,key:e.id},r().createElement("div",{tabIndex:"2",className:p()("grid items-center focus:outline-none focus:bg-gray-200 hover:bg-gray-100 ui_grid_template pl-8",t%2==0&&"bg-gray-50")},r().createElement("div",{className:"px-1"},r().createElement(C.Z,{index:t,id:e.id})),r().createElement("div",{className:"px-1"},r().createElement(_.Z,{id:e.id})),r().createElement("div",{className:"px-1"},r().createElement(I.Z,null)),r().createElement(D.Z,{className:"px-1",item:e}),r().createElement(S.Z,{className:"px-1",artists:e.ar}),r().createElement(L.Z,{className:"px-1",name:e.al.name,id:e.al.id}),r().createElement("div",{className:"text-gray-500 px-1"},N()(e.dt).format("mm:ss"))))})))},comments:function(e){var t=e.id,a=(0,z.useQuery)("comments",(0,s.Z)(m().mark((function e(){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,o.wL)({id:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),l=a.data,c=a.status,i=(0,n.useCallback)((function(){}),[]);return r().createElement("div",{className:"px-8"},r().createElement("div",{className:"pt-10 pb-10"},r().createElement(j.Z,{max:140,placeholder:"",onChange:i})),"loading"===c&&r().createElement(f.Z,null),"success"===c&&r().createElement(P.Z,{comments:l,type:0,more:t}))},subscribers:O};const R=(0,n.memo)((function(){var e,t,a=(0,l.useParams)().id,i=(0,Y.T)(),d=(0,n.useState)(!0),v=(0,c.Z)(d,2),x=v[0],y=v[1],b=(0,n.useState)([]),g=(0,c.Z)(b,2),N=g[0],h=g[1],k=(0,n.useState)({}),Z=(0,c.Z)(k,2),C=Z[0],_=Z[1],I=(0,n.useState)("playlist"),D=(0,c.Z)(I,2),S=D[0],L=D[1],P=function(){var e=(0,s.Z)(m().mark((function e(){var t,n,r;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.MY)({id:a});case 3:if(t=e.sent,_(E()((function(e){for(var a in t)e[a]=t[a]}))),!(t.playlist.trackCount>0)){e.next=11;break}return e.next=8,(0,o.VO)({ids:t.playlist.trackIds.map((function(e){return e.id})).join(",")});case 8:n=e.sent,r=n.songs,h(r);case 11:y(!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),j=(0,n.useCallback)(function(){var e=(0,s.Z)(m().mark((function e(t){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.so)({t:t?2:1,id:a});case 3:200===e.sent.code&&(i((0,u.setToast)(t?"取消收藏成功！":"收藏成功！")),_(E()((function(e){e.playlist.subscribed=!t})))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),[a]);return(0,n.useEffect)((function(){P()}),[a]),x?r().createElement("div",{className:"w-full h-full flex-center"},r().createElement(f.Z,null)):r().createElement("div",{className:"overflow-auto h-full"},r().createElement(w,{data:C,handleSub:j,songs:N}),r().createElement("div",{className:"mt-4"},r().createElement("div",{className:"space-x-4 flex items-baseline px-8"},M.map((function(e){var t=(0,c.Z)(e,2),a=t[0],n=t[1];return r().createElement("button",{type:"button",className:p()("text-sm",S===n&&"font-bold ui_underline"),key:a,onClick:function(){return L(n)}},a,"评论"===a&&"(".concat(C.playlist.commentCount,")"))}))),r().createElement("div",null,(e=Q[S],t={id:a,songs:N},r().createElement(e,t)))))}));var F=a(6459);const V=(0,n.memo)((function(e){var t=e.id,a=function(){var e=(0,s.Z)(m().mark((function e(){var a;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.NW)({rid:t});case 3:a=e.sent,(0,F.Z)(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){a()}),[]),r().createElement("div",{className:"domPlaylistDetail"},r().createElement("div",{className:"domPlaylistDetail_header"}),r().createElement("div",{className:"domPlaylistDetail_main"},"TODO"))})),W=function(){var e=(0,n.useState)(0);return(0,c.Z)(e,1)[0],r().createElement("div",null,"TOTO")},$=function(){return r().createElement(l.Routes,null,r().createElement(l.Route,{path:"music/:id",element:r().createElement(R,null)}),r().createElement(l.Route,{path:"dj/:id",element:r().createElement(V,null)}),r().createElement(l.Route,{path:"album/:id",element:r().createElement(W,null)}))}}}]);
//# sourceMappingURL=Playlist.79ddbfbd.js.map