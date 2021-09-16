"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[7174],{72284:(e,t,a)=>{a.r(t);var l=a(29604);Object.defineProperty(t,"__esModule",{value:!0});var n=a(48926),r=(0,l.Z)(n),u=a(63038),s=(0,l.Z)(u),m=a(87757),c=(0,l.Z)(m);a(68309),a(47042),a(21249);var o=a(87363),d=(0,l.Z)(o),i=a(66711),f=a(21624),p=a(63233),v=a(78313),E=a(94184),_=(0,l.Z)(E),b=a(33548),N=[{name:"全部",code:"ALL"},{name:"华语",code:"ZH"},{name:"欧美",code:"EA"},{name:"韩国",code:"KR"},{name:"日本",code:"JP"}],y=function(e){var t=e.item;return d.default.createElement("div",{className:"item"},d.default.createElement("div",{className:"cover shadow rounded overflow-hidden"},d.default.createElement(i.Link,{to:"/playlist/album/".concat(t.id)},d.default.createElement("img",{loading:"lazy",className:"ui_containimg",src:"".concat(t.blurPicUrl,"?param=200y200"),alt:""}))),d.default.createElement("div",{className:"name text-sm ui_ellipse mt-2"},d.default.createElement(i.Link,{to:"/playlist/album/".concat(t.id)},d.default.createElement("span",{className:"ui_text_black_hover"},t.name)," ",t.alias.length>0&&d.default.createElement("span",{className:"text-gray-400"},"(",t.alias,")"),t.transNames&&d.default.createElement("span",null,t.transNames))),d.default.createElement("div",{className:"artist mt-2"},d.default.createElement(i.Link,{to:"/artist/".concat(t.artist.id),key:t.artist.id,className:"ui_text_gray_hover"},t.artist.name)))};exports.default=function(){var e=(0,f.useDispatch)(),t=(0,f.useSelector)((function(e){return e.home.newest})),a=t.monthData,l=void 0===a?[]:a,n=t.weekData,u=void 0===n?[]:n,m=(0,o.useState)("ALL"),i=(0,s.default)(m,2),E=i[0],w=i[1],h=(0,o.useState)("new"),k=(0,s.default)(h,2),g=k[0],x=(k[1],(0,o.useState)((new Date).getFullYear())),L=(0,s.default)(x,2),Z=(L[0],L[1],(0,o.useState)((new Date).getMonth())),D=(0,s.default)(Z,2),H=(D[0],D[1],(0,o.useState)(0)),A=(0,s.default)(H,2),C=A[0],M=(A[1],(0,o.useState)("RECOMMEND")),S=(0,s.default)(M,2),P=S[0],O=S[1],R=function(){var t=(0,r.default)(c.default.mark((function t(){var a,l,n,r,u,s;return c.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,"RECOMMEND"!==P){t.next=10;break}return t.next=4,(0,p.apiTopAlbum)({area:E,type:g,limit:b.limit,offset:C});case 4:a=t.sent,l=a.monthData,n=a.weekData,e((0,v.setTopAlbum)({monthData:l.slice(0,564),weekData:n})),t.next=16;break;case 10:return t.next=12,(0,p.apiAlbumNew)({area:E,type:g,limit:b.limit,offset:C});case 12:r=t.sent,u=r.albums,s=r.weekData,e((0,v.setTopAlbum)({monthData:u,weekData:s}));case 16:t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),console.log(t.t0);case 21:case"end":return t.stop()}}),t,null,[[0,18]])})));return function(){return t.apply(this,arguments)}}();return(0,o.useEffect)((function(){R()}),[E,g,P]),d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"domHome_newest_sub_nav"},N.map((function(e){return d.default.createElement("button",{type:"button",key:e.name,className:(0,_.default)("domHome_newest_sub_nav_link",{on:E===e.code}),onClick:function(){return w(e.code)}},e.name)})),d.default.createElement("div",{className:"domHome_newest_sub_control_center"},d.default.createElement("button",{type:"button",className:(0,_.default)("showtype",{on:"RECOMMEND"===P}),onClick:function(){return O("RECOMMEND")}},"推荐"),d.default.createElement("button",{type:"button",className:(0,_.default)("showtype",{on:"ALL"===P}),onClick:function(){return O("ALL")}},"全部"))),d.default.createElement("div",{className:"domHome_newest_album_list"},"ALL"===E&&"ALL"!==P&&u.length>0&&d.default.createElement("div",{className:"domHome_newest_album_sublist"},d.default.createElement("div",{className:"sign"},"本周",d.default.createElement("br",null),"新碟"),d.default.createElement("div",{className:"list grid grid-cols-4 gap-5"},u.map((function(e){return d.default.createElement(y,{item:e,key:e.id})})))),l.length>0&&d.default.createElement("div",{className:"domHome_newest_album_sublist"},d.default.createElement("div",{className:"sign"},"本月",d.default.createElement("br",null),"新碟"),d.default.createElement("div",{className:"list grid grid-cols-4 gap-5"},l.map((function(e){return d.default.createElement(y,{item:e,key:e.id})}))))))}},98652:(e,t,a)=>{a.r(t);var l=a(29604);Object.defineProperty(t,"__esModule",{value:!0});var n=a(48926),r=(0,l.Z)(n),u=a(63038),s=(0,l.Z)(u),m=a(87757),c=(0,l.Z)(m);a(83112),a(68309),a(21249),a(47941);var o=a(87363),d=(0,l.Z)(o),i=a(27484),f=(0,l.Z)(i),p=a(66711),v=a(63233),E=a(16719),_=a(94184),b=(0,l.Z)(_),N=a(66285),y=(0,l.Z)(N),w={全部:0,华语:7,欧美:96,韩国:16,日本:8},h=(0,o.memo)((function(e){var t=e.item,a=e.index;return d.default.createElement("div",{className:(0,b.default)("item h-20 py-2.5 flex items-center px-8 text-sm",{"bg-gray-50":a%2==0})},d.default.createElement("span",{className:"ranking text-gray-300 w-8"},String(a+1).padStart(2,"0")),d.default.createElement("button",{type:"button",className:"cover w-16 relative rounded overflow-hidden"},d.default.createElement("img",{loading:"lazy",className:"ui_aspect-ratio-1/1",src:"".concat(t.album.blurPicUrl,"?param=100y100"),alt:""}),d.default.createElement("i",{className:"ico absolute w-6 h-6 m-auto flex-center inset-0 ui_themeColor bg-white bg-opacity-90 rounded-full"},d.default.createElement(E.IconPlayerPlay,{size:14,className:"fill-current"}))),d.default.createElement("span",{className:"name px-2.5 w-0 flex items-center flex-auto"},d.default.createElement("div",{className:"truncate"},t.name),d.default.createElement(y.default,{item:t,mv:t.mvid})),d.default.createElement("span",{className:"artists truncate"},t.artists.map((function(e,t){return d.default.createElement("span",{key:e.id},t>0&&" / ",d.default.createElement(p.Link,{to:"/artist/".concat(e.id),className:"ui_text_gray_hover"},e.name))}))),d.default.createElement("span",{className:"album truncate"},d.default.createElement(p.Link,{to:"/playlist/album/".concat(t.album.id),className:"ui_text_gray_hover"},t.album.name)),d.default.createElement("span",{className:"duration text-gray-500 text-right"},(0,f.default)(t.duration).format("mm:ss")))})),k=(0,o.memo)((function(e){var t=e.type,a=(0,o.useState)([]),l=(0,s.default)(a,2),n=l[0],u=l[1],m=function(){var e=(0,r.default)(c.default.mark((function e(){var a,l;return c.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.apiTopSong)({type:w[t]});case 3:a=e.sent,l=a.data,u(l),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.warn(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){m()}),[t]),d.default.createElement("div",{className:"domHome_newest_song_list"},n.map((function(e,t){return d.default.createElement(h,{key:e.id,item:e,index:t})})))}));exports.default=(0,o.memo)((function(e){var t=e.type;return d.default.createElement(d.default.Fragment,null,d.default.createElement("div",{className:"domHome_newest_sub_nav"},Object.keys(w).map((function(e){return d.default.createElement(p.NavLink,{key:e,className:"domHome_newest_sub_nav_link",activeClassName:"on",to:"/home/newest/song/".concat(e)},e)})),d.default.createElement("div",{className:"domHome_newest_sub_control_center space-x-2"},d.default.createElement("button",{type:"button",className:"playAll flex-center ui_theme_bg_color text-white rounded-full px-2 py-0.5"},d.default.createElement(E.IconPlayerPlay,{size:16,stroke:1,className:"fill-current"}),"播放全部"),d.default.createElement("button",{type:"button",className:"subAll flex-center rounded-full border px-2 py-0.5"},d.default.createElement(E.IconFolderPlus,{size:16,stroke:1}),"收藏全部"))),d.default.createElement(k,{type:t}))}))},30558:(e,t,a)=>{a.r(t);var l=a(29604);Object.defineProperty(t,"__esModule",{value:!0});var n=a(87363),r=(0,l.Z)(n),u=a(66711);a(7527);var s=a(11603),m=(0,l.Z)(s),c=a(98652),o=(0,l.Z)(c),d=a(72284),i=(0,l.Z)(d);exports.default=(0,n.memo)((function(){return r.default.createElement("div",{className:"domHome_content overflow-auto max-h-full flex-auto"},r.default.createElement("div",{className:"domHome_newest"},r.default.createElement("div",{className:"domHome_newest_nav"},r.default.createElement(u.NavLink,{className:"domHome_newest_nav_link",activeClassName:"on",to:"/home/newest/song"},"新歌速递"),r.default.createElement(u.NavLink,{className:"domHome_newest_nav_link",activeClassName:"on",to:"/home/newest/album"},"新碟上架")),r.default.createElement(u.Switch,null,r.default.createElement(u.Route,{path:"/home/newest/song/:type"},(0,m.default)(o.default)),r.default.createElement(u.Route,{path:"/home/newest/album"},r.default.createElement(i.default,null)),r.default.createElement(u.Redirect,{to:"/home/newest/song/全部"}))))}))},7527:(e,t,a)=>{a.r(t)}}]);