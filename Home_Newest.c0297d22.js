"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[7174],{305:(e,t,a)=>{a.r(t),a.d(t,{default:()=>H});var n=a(7363),s=a.n(n),r=a(6711),l=a(1603),m=a(5861),c=a(885),o=a(7757),i=a.n(o),u=(a(3112),a(8309),a(1249),a(7941),a(7484)),d=a.n(u),E=a(5457),p=a(6719),v=a(4184),_=a.n(v),N=a(6285),b={全部:0,华语:7,欧美:96,韩国:16,日本:8},f=(0,n.memo)((function(e){var t=e.item,a=e.index;return s().createElement("div",{className:_()("item h-20 py-2.5 flex items-center px-8 text-sm",{"bg-gray-50":a%2==0})},s().createElement("span",{className:"ranking text-gray-300 w-8"},String(a+1).padStart(2,0)),s().createElement("button",{type:"button",className:"cover w-16 relative rounded overflow-hidden ui_aspect-ratio-1/1"},s().createElement("img",{className:"",src:"".concat(t.album.blurPicUrl,"?param=100y100"),alt:""}),s().createElement("i",{className:"ico absolute w-6 h-6 m-auto flex-center inset-0 ui_themeColor bg-white bg-opacity-90 rounded-full"},s().createElement(p.IconPlayerPlay,{size:14,className:"fill-current"}))),s().createElement("span",{className:"name px-2.5 w-0 flex items-center flex-auto"},s().createElement("div",{className:"truncate"},t.name),s().createElement(N.Z,{item:t,mv:t.mvid})),s().createElement("span",{className:"artists truncate"},t.artists.map((function(e,t){return s().createElement("span",{key:e.id},t>0&&" / ",s().createElement(r.Link,{to:"/artist/".concat(e.id),className:"ui_text_gray_hover"},e.name))}))),s().createElement("span",{className:"album truncate"},s().createElement(r.Link,{to:"/playlist/album/".concat(t.album.id),className:"ui_text_gray_hover"},t.album.name)),s().createElement("span",{className:"duration text-gray-500 text-right"},d()(t.duration).format("mm:ss")))})),w=(0,n.memo)((function(e){var t=e.type,a=(0,n.useState)([]),r=(0,c.Z)(a,2),l=r[0],o=r[1],u=function(){var e=(0,m.Z)(i().mark((function e(){var a,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,E.nq)({type:b[t]});case 3:a=e.sent,n=a.data,o(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.warn(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,n.useEffect)((function(){u()}),[t]),s().createElement("div",{className:"domHome_newest_song_list"},l.map((function(e,t){return s().createElement(f,{key:e.id,item:e,index:t})})))}));const y=(0,n.memo)((function(e){var t=e.type;return s().createElement(s().Fragment,null,s().createElement("div",{className:"domHome_newest_sub_nav"},Object.keys(b).map((function(e){return s().createElement(r.NavLink,{key:e,className:"domHome_newest_sub_nav_link",activeClassName:"on",to:"/home/newest/song/".concat(e)},e)})),s().createElement("div",{className:"domHome_newest_sub_control_center space-x-2"},s().createElement("button",{type:"button",className:"playAll flex-center ui_theme_bg_color text-white rounded-full px-2 py-0.5"},s().createElement(p.IconPlayerPlay,{size:16,stroke:1,className:"fill-current"}),"播放全部"),s().createElement("button",{type:"button",className:"subAll flex-center rounded-full border px-2 py-0.5"},s().createElement(p.IconFolderPlus,{size:16,stroke:1}),"收藏全部"))),s().createElement(w,{type:t}))}));a(7042);var h=a(1624),k=a(2853),g=a(3548),x=[{name:"全部",code:"ALL"},{name:"华语",code:"ZH"},{name:"欧美",code:"EA"},{name:"韩国",code:"KR"},{name:"日本",code:"JP"}],L=function(e){var t=e.item;return s().createElement("div",{className:"item"},s().createElement("div",{className:"cover shadow rounded overflow-hidden"},s().createElement(r.Link,{to:"/playlist/album/".concat(t.id)},s().createElement("img",{loading:"lazy",className:"ui_containimg",src:"".concat(t.blurPicUrl,"?param=200y200"),alt:""}))),s().createElement("div",{className:"name text-sm ui_ellipse mt-2"},s().createElement(r.Link,{to:"/playlist/album/".concat(t.id)},s().createElement("span",{className:"ui_text_black_hover"},t.name)," ",t.alias.length>0&&s().createElement("span",{className:"text-gray-400"},"(",t.alias,")"),t.transNames&&s().createElement("span",null,t.transNames))),s().createElement("div",{className:"artist mt-2"},s().createElement(r.Link,{to:"/artist/".concat(t.artist.id),key:t.artist.id,className:"ui_text_gray_hover"},t.artist.name)))};const D=function(){var e=(0,h.useDispatch)(),t=(0,h.useSelector)((function(e){return e.home.newest})),a=t.monthData,r=void 0===a?[]:a,l=t.weekData,o=void 0===l?[]:l,u=(0,n.useState)("ALL"),d=(0,c.Z)(u,2),p=d[0],v=d[1],N=(0,n.useState)("new"),b=(0,c.Z)(N,2),f=b[0],w=(b[1],(0,n.useState)((new Date).getFullYear())),y=(0,c.Z)(w,2),D=(y[0],y[1],(0,n.useState)((new Date).getMonth())),H=(0,c.Z)(D,2),C=(H[0],H[1],(0,n.useState)(0)),Z=(0,c.Z)(C,2),A=Z[0],S=(Z[1],(0,n.useState)("RECOMMEND")),M=(0,c.Z)(S,2),P=M[0],R=M[1],O=function(){var t=(0,m.Z)(i().mark((function t(){var a,n,s,r,l,m;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,"RECOMMEND"!==P){t.next=10;break}return t.next=4,(0,E.ek)({area:p,type:f,limit:g.b9,offset:A});case 4:a=t.sent,n=a.monthData,s=a.weekData,e((0,k.setTopAlbum)({monthData:n.slice(0,564),weekData:s})),t.next=16;break;case 10:return t.next=12,(0,E.ww)({area:p,type:f,limit:g.b9,offset:A});case 12:r=t.sent,l=r.albums,m=r.weekData,e((0,k.setTopAlbum)({monthData:l,weekData:m}));case 16:t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),console.log(t.t0);case 21:case"end":return t.stop()}}),t,null,[[0,18]])})));return function(){return t.apply(this,arguments)}}();return(0,n.useEffect)((function(){O()}),[p,f,P]),s().createElement(s().Fragment,null,s().createElement("div",{className:"domHome_newest_sub_nav"},x.map((function(e){return s().createElement("button",{type:"button",key:e.name,className:_()("domHome_newest_sub_nav_link",{on:p===e.code}),onClick:function(){return v(e.code)}},e.name)})),s().createElement("div",{className:"domHome_newest_sub_control_center"},s().createElement("button",{type:"button",className:_()("showtype",{on:"RECOMMEND"===P}),onClick:function(){return R("RECOMMEND")}},"推荐"),s().createElement("button",{type:"button",className:_()("showtype",{on:"ALL"===P}),onClick:function(){return R("ALL")}},"全部"))),s().createElement("div",{className:"domHome_newest_album_list"},"ALL"===p&&"ALL"!==P&&o.length>0&&s().createElement("div",{className:"domHome_newest_album_sublist"},s().createElement("div",{className:"sign"},"本周",s().createElement("br",null),"新碟"),s().createElement("div",{className:"list grid grid-cols-4 gap-5"},o.map((function(e){return s().createElement(L,{item:e,key:e.id})})))),r.length>0&&s().createElement("div",{className:"domHome_newest_album_sublist"},s().createElement("div",{className:"sign"},"本月",s().createElement("br",null),"新碟"),s().createElement("div",{className:"list grid grid-cols-4 gap-5"},r.map((function(e){return s().createElement(L,{item:e,key:e.id})}))))))},H=(0,n.memo)((function(){return s().createElement("div",{className:"domHome_content overflow-auto max-h-full flex-auto"},s().createElement("div",{className:"domHome_newest"},s().createElement("div",{className:"domHome_newest_nav"},s().createElement(r.NavLink,{className:"domHome_newest_nav_link",activeClassName:"on",to:"/home/newest/song"},"新歌速递"),s().createElement(r.NavLink,{className:"domHome_newest_nav_link",activeClassName:"on",to:"/home/newest/album"},"新碟上架")),s().createElement(r.Switch,null,s().createElement(r.Route,{path:"/home/newest/song/:type"},(0,l.Z)(y)),s().createElement(r.Route,{path:"/home/newest/album"},s().createElement(D,null)),s().createElement(r.Redirect,{to:"/home/newest/song/全部"}))))}))}}]);