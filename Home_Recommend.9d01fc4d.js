"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[6741],{9710:(e,t,a)=>{a.r(t),a.d(t,{default:()=>R});var r=a(5861),n=a(885),l=a(7757),c=a.n(l),m=(a(1249),a(7941),a(3290),a(6992),a(1539),a(8674),a(8783),a(3948),a(7363)),o=a.n(m),i=a(6711),s=a(1624),d=a(5457),u=a(2853),v=a(3011),p=a(4878),E=a(6719),g=a(7368),f="https://look.163.com/hot?livetype=2";const y=(0,m.memo)((function(e){var t=e.tag,a=void 0!==t&&t;return o().createElement("div",{className:"item"},o().createElement("div",{className:"cover relative rounded overflow-hidden ui_aspect-ratio-1/1"},o().createElement(i.Link,{to:f,className:"absolute inset-0"},o().createElement("img",{className:"object-cover",src:g,alt:""}),o().createElement("div",{className:"absolute top-0 right-0 m-1"},o().createElement("span",{className:"text-white"},"playCount")),o().createElement("div",{className:"absolute left-0 bottom-0 m-1"},o().createElement("span",{className:"text-white"},"artist")),a&&Math.random()<.67&&o().createElement("div",{className:"lt"},o().createElement("div",{className:"tag"},"理想女友")))),o().createElement("div",{className:"footer text-sm mt-1"},o().createElement(i.Link,{to:f},"name")))}));var N=a(9785),b=a(1343),h=a(4184),x=a.n(h),k=a(7980),_=a.n(k),w=a(4640),C=a(4792),H=["推荐歌单","独家放送","最新音乐","推荐MV","主播电台","看看"];const L=function(){var e=(0,b.T)(),t=(0,b.C)((function(e){return e.mask})).dialogHomeOrderVisibility,a=(0,b.C)((function(e){return e.setting})).homeOrder,r=(0,m.useState)(a),l=(0,n.Z)(r,2),c=l[0],i=l[1],s=(0,m.useState)(""),d=(0,n.Z)(s,2),u=d[0],p=d[1],g=(0,m.useState)(0),f=(0,n.Z)(g,2),y=f[0],h=f[1],k=(0,m.useState)(0),L=(0,n.Z)(k,2),Z=L[0],P=L[1],z=(0,m.useRef)(-1/0),j=function(e){var t=e.clientY-Z,a=z.current;return!(a<=0&&t<=0)&&!(a>=c.length-1&&t>=0)&&(t>=36?(P((function(e){return e+48})),i(_()((function(e){var t=[e[a+1],e[a]];e[a]=t[0],e[a+1]=t[1]}))),z.current+=1,h(-12),!1):t<=-36?(P((function(e){return e-48})),i(_()((function(e){var t=[e[a-1],e[a]];e[a]=t[0],e[a-1]=t[1]}))),z.current-=1,h(12),!1):void h(t))},M=function(){p("")};return t?o().createElement(w.Z,{id:"dialogHomeOrder",title:"调整栏目顺序"},o().createElement("div",{className:"content"},o().createElement("div",{className:"tips mx-10 text-gray-400 mb-6 flex items-center"},o().createElement(E.IconBulb,{size:14}),o().createElement("span",{className:"ml-1"},"想调整首页栏目的顺序?按住右边的按钮拖动即可")),o().createElement("div",{className:"flex flex-col relative"},c.map((function(e,t){return o().createElement("div",{key:e,className:"h-12 text-base text-gray-500"},o().createElement(C.Z,{onMouseMove:j,onMouseUp:M,onMouseDown:function(a){return function(e,t,a){p(t),P(e.clientY),z.current=a}(a,e,t)},className:x()("w-full border-b hover:bg-gray-200 bg-white px-10 h-12 flex items-center",u===e&&"absolute shadow z-10"),style:{transform:"translate(0, ".concat(u===e?y:0,"px)")}},e,o().createElement(E.IconMenu,{className:"ml-auto cursor-move"})))}))),o().createElement("div",{className:"flex-center py-4"},o().createElement("button",{onClick:function(){i(H)},type:"button",className:"underline text-gray-400 block"},"恢复默认排序")),o().createElement("div",{className:"flex-center pt-4 pb-8 space-x-2"},o().createElement("button",{onClick:function(){e((0,v.setDialogReset)()),e((0,N.setHomeOrder)(c))},type:"button",className:"rounded-full ui_theme_bg_color text-white h-8 w-20"},"完成"),o().createElement("button",{type:"button",className:"border rounded-full h-8 w-20",onClick:function(){return e((0,v.setDialogReset)())}},"取消")))):null};var Z=a(4849),P=(a(7042),a(8309),a(2503)),z=a(7788),j=a(6581);const M=(0,m.memo)((function(e){var t=e.playlist,a=void 0===t?[]:t;return(0,b.C)((function(e){return e.common})).isLogin?o().createElement("div",{className:"domHome_recommend_playlist grid gap-5 grid-cols-5 mt-4"},o().createElement("div",{className:"item"},o().createElement("div",{className:"cover border relative group rounded-lg overflow-hidden"},o().createElement(i.Link,{to:"/dailysong",className:"ui_aspect-ratio-1/1"},o().createElement("div",{className:"inner",style:{color:"var(--themeColor)"}},o().createElement(z.du,null))),o().createElement("button",{type:"button",className:"opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute m-2 right-0 bottom-0 rounded-full flex-center w-7 h-7 bg-white bg-opacity-90 ui_themeColor"},o().createElement(E.IconPlayerPlay,{size:16,className:"fill-current"}))),o().createElement("div",{className:"footer break-all text-sm mt-2"},o().createElement(i.Link,{to:"/dailysong"},"每日歌曲推荐"))),a.slice(0,9).map((function(e){return o().createElement("div",{key:e.id,className:"item"},o().createElement("div",{className:"cover relative group rounded-lg overflow-hidden border"},o().createElement(i.Link,{to:"/playlist/music/".concat(e.id),className:"ui_aspect-ratio-1/1"},o().createElement("img",{className:"ui_containimg",src:"".concat(e.picUrl,"?param=200y200"),alt:""}),o().createElement("div",{className:"absolute top-0 right-0 my-0.5 mx-2"},o().createElement("span",{className:"text-white flex-center"},o().createElement(E.IconPlayerPlay,{size:12}),(0,P.LU)(e.playcount)))),o().createElement(j.Z,{id:e.id,className:"opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute m-2 right-0 bottom-0 rounded-full flex-center w-7 h-7 bg-white bg-opacity-90 ui_themeColor"},o().createElement(E.IconPlayerPlay,{size:16,className:"fill-current"}))),o().createElement("div",{className:"footer break-all text-sm mt-2"},o().createElement(i.Link,{to:"/playlist/music/".concat(e.id),className:"name ui_ellipse"},e.name)))}))):o().createElement("div",null,"需要登录")}));var S=a(7317);const I=(0,m.memo)((function(e){var t=e.privatecontent,a=void 0===t?[]:t;return o().createElement("div",{className:"domHome_recommend_privatecontent grid grid-cols-3 gap-4 mt-4"},a.map((function(e){return o().createElement("div",{className:"item",key:e.id},o().createElement(S.Z,{item:e,type:"mv",schema:[["播放MV"]]},o().createElement("div",{className:"cover relative rounded overflow-hidden"},o().createElement(i.Link,{to:"/player/mv/".concat(e.id),className:"ui_aspect-ratio-16/9"},o().createElement("span",{className:"ico absolute top-2 left-2 rounded-full text-white w-6 h-6 bg-black bg-opacity-40 flex-center border border-gray-200"},o().createElement(E.IconPlayerPlay,{size:14,className:"fill-current"})),o().createElement("img",{loading:"lazy",className:"ui_containimg",src:e.sPicUrl,alt:""})))),o().createElement("div",{className:"name text-sm loading-4 mt-2"},o().createElement(i.Link,{to:"/player/mv/".concat(e.id)},e.name)))})))}));var U=a(6285);const O=(0,m.memo)((function(e){var t=e.newsong,a=void 0===t?[]:t;return o().createElement("div",{className:"domHome_recommend_newsong grid gap-x-2 gap-y-4 mt-4 grid-cols-3 grid-rows-4 grid-flow-col"},a.map((function(e){return o().createElement("div",{key:e.id,className:"item flex hover:bg-gray-100 rounded overflow-hidden"},o().createElement("button",{type:"button",onClick:function(){return console.log(e.id)},className:"cover flex-none relative rounded overflow-hidden ui_aspect-ratio-1/1"},o().createElement("span",{className:"ico absolute text-red-500 bg-white rounded-full bg-opacity-90 inset-0 m-auto flex-center w-6 h-6"},o().createElement(E.IconPlayerPlay,{size:16,className:"fill-current"})),o().createElement("img",{loading:"lazy",className:"w-full h-full",src:"".concat(e.picUrl,"?param=50y50"),alt:""})),o().createElement("div",{className:"content flex-auto flex flex-col w-0 px-2 py-1"},o().createElement("div",{className:"name text-sm truncate"},e.name),o().createElement("div",{className:"artist mt-1 flex"},o().createElement(U.Z,{item:e,sq:999e3===e.song.privilege.maxbr,mv:e.song.mvid}),o().createElement("div",{className:"truncate"},e.song.artists.map((function(e,t){return o().createElement("span",{key:e.id,className:"text-gray-400"},t>0&&" / ",o().createElement(i.Link,{to:"/artist/".concat(e.id),className:"ui_text_gray_hover"},e.name))}))))))})))})),V=(0,m.memo)((function(e){var t=e.djprogram,a=void 0===t?[]:t;return o().createElement("div",{className:"domHome_recommend_djprogram grid grid-cols-5 gap-5 mt-4"},a.slice(0,5).map((function(e){var t,a;return o().createElement("div",{className:"item",key:e.id},o().createElement("div",{className:"cover border relative rounded overflow-hidden "},o().createElement(i.Link,{to:"/playlist/dj/".concat(null===(t=e.program)||void 0===t||null===(a=t.radio)||void 0===a?void 0:a.id),className:"ui_aspect-ratio-1/1"},o().createElement("img",{loading:"lazy",className:"",src:"".concat(e.program.radio.picUrl,"?param=200y200"),alt:""}),o().createElement("div",{className:"mask absolute left-0 right-0 bottom-0 h-1/4 ui_linear_mask_bottom"}),o().createElement("div",{className:"absolute left-0 right-0 bottom-0 p-2"},o().createElement("div",{className:"text-white truncate"},e.program.radio.name)))),o().createElement("div",{className:"name leading-5 text-sm mt-2"},o().createElement(i.Link,{to:"/playlist/dj/".concat(e.program.radio.id),className:"text-gray-600 hover:text-black"},e.program.radio.rcmdText)))})))}));var D={推荐歌单:["/home/playlist",M],独家放送:["/exclusive",I],最新音乐:["/home/playlist",O],推荐MV:["/video/mvlist",(0,m.memo)((function(e){var t=e.mv,a=void 0===t?[]:t;return o().createElement("div",{className:"domHome_recommend_mv grid gap-x-5 grid-cols-3 mt-4"},a.slice(0,3).map((function(e){return o().createElement("div",{className:"item",key:e.id},o().createElement(S.Z,{type:"mv",item:e,schema:[["评论","播放MV"],["收藏MV","分享","下载","复制链接"],["不感兴趣"]]},o().createElement("div",{className:"cover border relative overflow-hidden rounded text-white"},o().createElement("div",{className:"absolute top-0 w-full px-2 py-3 ui_linear_mask_top pointer-events-none"},e.copywriter),o().createElement("div",{className:"absolute top-1 right-2 pointer-events-none"},o().createElement("div",{className:"flex-center"},o().createElement(E.IconPlayerPlay,{size:12}),e.playCount)),o().createElement(i.Link,{to:"/player/mv/".concat(e.id),className:"block ui_aspect-ratio-16/9"},o().createElement("img",{loading:"lazy",className:"h-full object-cover w-full",src:e.picUrl,alt:""})))),o().createElement("div",{className:"name truncate text-sm mt-2"},o().createElement(i.Link,{className:"ui_text_black_hover",to:"/player/mv/".concat(e.id)},e.name)),o().createElement("div",{className:"artist truncate mt-1"},e.artists.map((function(e,t){return o().createElement("span",{key:e.id,className:"text-gray-400"},t>0&&" / ",o().createElement(i.Link,{to:"/artist/:id",className:"ui_text_gray_hover"},e.name))}))))})))}))],主播电台:["/home/dj",V],看看:["https://look.163.com/hot?livetype=2",function(){return o().createElement("div",{className:"domHome_recommend_kankan mt-4 grid grid-cols-4 gap-5"},Object.keys(Array(4).fill(0)).map((function(e){return o().createElement(y,{key:e})})))}]};const R=(0,m.memo)((function(){var e=(0,s.useSelector)((function(e){return e.home.recommend})),t=e.banners,a=e.playlist,l=e.privatecontent,g=e.newsong,f=e.mv,y=e.djprogram,N=(0,s.useSelector)((function(e){return e.setting})).homeOrder,b=(0,m.useState)(!0),h=(0,n.Z)(b,2),x=h[0],k=h[1],_=(0,s.useDispatch)(),w=function(){var e=(0,r.Z)(c().mark((function e(){var t,a,r,l,m,o,i,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([(0,d.T8)(),(0,d.V3)({limit:10}),(0,d.bE)(),(0,d.yS)({limit:12}),(0,d.P2)(),(0,d.aW)()]);case 3:t=e.sent,a=(0,n.Z)(t,6),r=a[0].banners,l=a[1].recommend,m=a[2],o=a[3],i=a[4],s=a[5],_((0,u.setHomeRecommend)({banners:r,playlist:l,privatecontent:m.result,newsong:o.result,mv:i.result,djprogram:s.result})),k(!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}();return(0,m.useEffect)((function(){w()}),[]),x?o().createElement("div",{className:"flex-center w-full h-full"},o().createElement(Z.Z,null)):o().createElement("div",{className:"domHome_content px-8 overflow-auto max-h-full flex-auto"},o().createElement("div",{className:"domHome_recommend ui_w1100"},o().createElement("div",{className:"domHome_item"},o().createElement(p.Z,{list:t,coverSrc:"imageUrl"})),N.map((function(e){var t=(0,n.Z)(D[e],2),r=t[0],c=t[1];return o().createElement("div",{className:"domHome_item mt-8",key:e},o().createElement(i.Link,{className:"domHome_recommend_subtitle h1 inline-flex items-center",to:r},e,o().createElement(E.IconChevronRight,{size:24})),o().createElement(c,{playlist:a,privatecontent:l,newsong:g,mv:f,djprogram:y}))})),o().createElement("div",{className:"domHome_recommend_diy mt-4 text-center pb-10"},o().createElement("div",{className:"text-gray-500"},"现在可以根据个人喜好，自由调整首页栏目顺序啦~"),o().createElement("br",null),o().createElement("button",{type:"button",className:"btn ui_themeColor border rounded-sm border-current w-32 h-8",onClick:function(){return _((0,v.setDialogHomeOrderShow)())}},"调整栏目顺序")),o().createElement(L,null)))}))},7368:(e,t,a)=>{e.exports=a.p+"assets/images/kankan.e1209a4d.jpg"}}]);