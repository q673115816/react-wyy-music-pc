"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[1147],{22297:(e,t,a)=>{a.r(t);var l=a(29604);Object.defineProperty(t,"__esModule",{value:!0});var r=a(319),n=(0,l.Z)(r),c=a(48926),u=(0,l.Z)(c),o=a(63038),i=(0,l.Z)(o);a(92222),a(21249),a(68309);var s=a(87757),d=(0,l.Z)(s),m=a(87363),f=(0,l.Z)(m),p=a(66711),v=a(16719),y=a(94184),h=(0,l.Z)(y),g=a(63233),x=a(12503),E=a(99709),N=(0,l.Z)(E),_=a(6581),b=(0,l.Z)(_),w=a(96298),k=(0,l.Z)(w);exports.default=(0,m.memo)((function(e){var t=e.cat,a=void 0===t?"全部歌单":t;console.log("home_playlist_high");var l=(0,m.useState)([]),r=(0,i.default)(l,2),c=r[0],o=r[1],s=(0,m.useState)([]),y=(0,i.default)(s,2),E=y[0],_=y[1],w=(0,m.useRef)(0),C=(0,m.useState)(!1),Z=(0,i.default)(C,2),P=Z[0],I=Z[1],H=(0,m.useRef)(),R=(0,m.useRef)(),z=function(){var e=(0,u.default)(d.default.mark((function e(){var t,a;return d.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,g.apiPlaylistHighqualityTags)();case 3:t=e.sent,a=t.tags,_(void 0===a?[]:a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=(0,u.default)(d.default.mark((function e(){var t,l,r,c;return d.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,g.apiTopPlaylistHighquality)({cat:a,limit:20,before:w.current});case 3:t=e.sent,l=t.playlists,r=void 0===l?[]:l,c=t.lasttime,w.current=c,o((function(e){return[].concat((0,n.default)(e),(0,n.default)(r))})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return(0,N.default)(S,R,H),(0,m.useEffect)((function(){z()}),[]),(0,m.useEffect)((function(){o([])}),[a]),f.default.createElement("div",{className:"domHome_playlist_highquality px-8 overflow-auto flex-auto",ref:R},f.default.createElement("div",{className:"py-3 flex items-center justify-between"},f.default.createElement("div",{className:"flex items-center"},f.default.createElement("span",{className:"font-bold text-xl"},"精品歌单")," ",f.default.createElement("a",{href:"https://music.163.com/#/topic?id=202001",className:"flex-center w-4 h-4 border rounded-full text-gray-400 hover:text-gray-500 border-current"},"?")),f.default.createElement("div",{className:"relative"},f.default.createElement("button",{onClick:function(){return I(!P)},type:"button",className:"flex items-center border hover:bg-gray-100 rounded-full px-2 py-1"},f.default.createElement(v.IconFilter,{size:16,stroke:1}),a),f.default.createElement("div",{className:"absolute divide-y bg-white top-8 right-0 z-10 shadow rounded-lg",style:{width:510,display:P?null:"none"}},f.default.createElement("div",{className:"py-4 px-6"},f.default.createElement(p.NavLink,{activeClassName:"ui_themeColor",className:"item hover:ui_themeColor text-sm",onClick:function(){return I(!1)},to:"./全部歌单"},f.default.createElement("span",{className:(0,h.default)("inline-flex inner px-3 py-1 rounded-full overflow-hidden",{ui_bg_opacity:"全部歌单"===a})},"全部歌单"))),f.default.createElement("div",{className:"p-6 grid grid-cols-5 gap-y-4"},E.map((function(e){return f.default.createElement(p.NavLink,{onClick:function(){return I(!1)},to:e.name,activeClassName:"ui_themeColor",className:"item hover:ui_themeColor text-sm whitespace-nowrap",key:e.id},f.default.createElement("span",{className:(0,h.default)("inline-flex inner px-3 py-1 rounded-full overflow-hidden",{ui_bg_opacity:e.name===a})},e.name))})))))),f.default.createElement("div",{className:"domHome_playlist_highquality_list grid gap-6 grid-cols-2"},c.map((function(e){var t,a;return f.default.createElement("div",{className:"item flex",key:e.id},f.default.createElement("div",{className:"cover w-32 h-32 rounded-lg group overflow-hidden flex-none relative"},f.default.createElement(p.Link,{to:"/playlist/music/".concat(e.id),className:""},f.default.createElement("span",{className:"absolute top-0 left-0 p-0.5 w-8 h-8 bg-yellow-500 text-white ui_angle_top_left"},f.default.createElement(v.IconCrown,{size:14,className:"transform -rotate-45"})),f.default.createElement("img",{loading:"lazy",src:"".concat(e.coverImgUrl,"?param=200y200"),className:"ui_aspect-ratio-1/1",alt:""}),f.default.createElement("div",{className:"absolute text-white top-0 right-0 py-1 px-2 flex-center"},f.default.createElement(v.IconPlayerPlay,{size:12}),(0,x.transPlayCount)(e.playCount))),f.default.createElement(b.default,{id:e.id,className:"playArrow opacity-0 group-hover:opacity-100 ui_themeColor absolute right-0 bottom-0 m-2 p-2 bg-white bg-opacity-90 rounded-full"},f.default.createElement(v.IconPlayerPlay,{size:16,className:"fill-current"}))),f.default.createElement("div",{className:"ml-2 flex-auto w-0 pt-5"},f.default.createElement("div",{className:"text-sm truncate ui_text_black_hover"},f.default.createElement(p.Link,{to:"/playlist/music/".concat(e.id),className:""},e.name)),f.default.createElement("div",{className:"mt-3 flex items-center ui_text_gray_hover"},"by ",f.default.createElement(p.Link,{to:"/user/".concat(e.userId),className:""},e.creator.nickname)," ",(null==e||null===(t=e.creator)||void 0===t||null===(a=t.avatarDetail)||void 0===a?void 0:a.identityIconUrl)&&f.default.createElement("img",{className:"w-3 h-3",src:e.creator.avatarDetail.identityIconUrl,alt:""})),f.default.createElement("div",{className:"mt-4 text-gray-300 flex items-center"},f.default.createElement(k.default,{text:e.tag,className:"flex-none mr-1"}),f.default.createElement("span",{className:"flex-auto truncate"},e.copywriter))))})),f.default.createElement("div",{ref:H})))}))},92756:(e,t,a)=>{a.r(t);var l=a(29604);Object.defineProperty(t,"__esModule",{value:!0}),a(68309);var r=a(87363),n=(0,l.Z)(r),c=a(66711),u=a(16719);exports.default=(0,r.memo)((function(e){var t=e.item,a=void 0===t?{}:t,l=e.cat,r=void 0===l?"全部歌单":l;return n.default.createElement(c.Link,{to:"/home/playlist/highquality/".concat(r),className:"domHome_playlist_banner flex items-center relative  rounded-lg overflow-hidden z-10"},n.default.createElement("div",{className:"absolute inset-0 bg-center",style:{backgroundImage:"url(".concat(a.coverImgUrl,")"),filter:"blur(20px) grayscale(80%)",zIndex:"-1"}}),n.default.createElement("div",{className:"cover w-36 h-36 rounded-lg overflow-hidden"},n.default.createElement("img",{src:a.coverImgUrl,alt:""})),n.default.createElement("div",{className:"contennt ml-2.5"},n.default.createElement("div",{className:"tag border border-current flex-center text-sm rounded-full"},n.default.createElement(u.IconCrown,{size:16}),"  精品歌单"),n.default.createElement("div",{className:"text-white text-base mt-4"},a.name),n.default.createElement("div",{className:"text-gray-300 mt-2"},a.copywriter)))}))},3994:(e,t,a)=>{a.r(t);var l=a(29604);Object.defineProperty(t,"__esModule",{value:!0});var r=a(63038),n=(0,l.Z)(r);a(60086),a(21249),a(57327),a(9653),a(68309),a(69720);var c=a(87363),u=(0,l.Z)(c),o=a(66711),i=a(94184),s=(0,l.Z)(i),d=a(16719),m=a(21624),f=function(){return u.default.createElement("svg",{className:"absolute left-full top-1/4 fill-current",viewBox:"0 0 12 12",width:"12",height:"6"},u.default.createElement("text",{dominantBaseline:"middle",textAnchor:"middle",x:"0.5em",y:"0.5em",className:"fill-current ui_themeColor font-bold"},"hot"))},p=(0,c.memo)((function(e){var t=e.sub,a=void 0===t?[]:t,l=e.category,r=void 0===l?null:l,n=e.cat,c=void 0===n?"":n;return u.default.createElement("div",{className:"flex-auto grid grid-cols-6 gap-y-4"},a.filter((function(e){return e.category===Number(r)})).map((function(e){return u.default.createElement(o.NavLink,{activeClassName:"on ui_themeColor",className:"domHome_playlist_popup_nav_link text-gray-600 hover:ui_themeColor",to:"/home/playlist/".concat(encodeURIComponent(e.name)),key:e.name},u.default.createElement("span",{className:(0,s.default)("inline-flex inner px-4 py-1 rounded-full overflow-hidden",{ui_bg_opacity:e.name===c})},u.default.createElement("span",{className:"relative"},e.name,e.hot&&u.default.createElement(f,null))))})))}));exports.default=(0,c.memo)((function(e){var t,a=e.cat,l=(0,c.useState)(!1),r=(0,n.default)(l,2),i=r[0],f=r[1],v=(0,m.useSelector)((function(e){return e.home.playlist})),y=v.hot,h=v.catlist;return u.default.createElement("div",{className:"domHome_playlist_nav pt-4 pb-4 flex items-center"},u.default.createElement("div",{className:"relative"},u.default.createElement("button",{type:"button",className:"border flex items-center justify-center h-8 w-24 rounded-full hover:bg-gray-100 focus:outline-none text-sm",onClick:function(){return f(!i)}},decodeURIComponent(a),u.default.createElement(d.IconChevronRight,{size:20,stroke:1})),u.default.createElement("div",{className:"domHome_playlist_popup_nav absolute z-20 bg-white shadow text-sm divide-y top-full mt-1 pb-20",style:{display:i?null:"none"}},u.default.createElement("div",{className:"pl-8 py-4"},u.default.createElement(o.NavLink,{onClick:function(){return f(!1)},activeClassName:"on ui_themeColor",exact:!0,className:"domHome_playlist_popup_nav_link text-gray-600 hover:ui_themeColor",to:"/home/playlist/全部歌单"},u.default.createElement("span",{className:(0,s.default)("inline-flex inner px-4 py-1 rounded-full overflow-hidden",{ui_bg_opacity:"全部歌单"===a})},"全部歌单"))),u.default.createElement("div",{className:"p-5 space-y-4"},Object.entries(h.categories).map((function(e){var t=(0,n.default)(e,2),l=t[0],r=t[1];return u.default.createElement("div",{key:l,className:"flex"},u.default.createElement("div",{className:"category text-gray-300"},r),u.default.createElement(p,{sub:h.sub,category:l,cat:a}))}))))),u.default.createElement("div",{className:"ml-auto flex"},null===(t=y.tags)||void 0===t?void 0:t.map((function(e){return u.default.createElement(o.NavLink,{activeClassName:"ui_themeColor ui_bg_opacity",className:"domHome_playlist_nav_link text-gray-500 hover:text-gray-700 px-2 rounded-full text-center",to:"/home/playlist/".concat(encodeURIComponent(e.name)),key:e.name},e.name)}))))}))},27403:(e,t,a)=>{a.r(t);var l=a(29604);Object.defineProperty(t,"__esModule",{value:!0});var r=a(48926),n=(0,l.Z)(r),c=a(63038),u=(0,l.Z)(c),o=a(87757),i=(0,l.Z)(o);a(9653),a(66992),a(41539),a(88674),a(78783),a(33948),a(21249);var s=a(87363),d=(0,l.Z)(s),m=a(21624),f=a(66711);a(30348);var p=a(63233),v=a(78313),y=a(74849),h=(0,l.Z)(y),g=a(58343),x=(0,l.Z)(g),E=a(90443),N=(0,l.Z)(E),_=a(7323),b=(0,l.Z)(_),w=a(92756),k=(0,l.Z)(w),C=a(3994),Z=(0,l.Z)(C);exports.default=(0,s.memo)((function(e){var t=e.cat,a=void 0===t?"全部歌单":t,l=e.page,r=void 0===l?1:l;r=Number(r);var c=(0,f.useHistory)().push,o=(0,s.useState)("hot"),y=(0,u.default)(o,2),g=y[0],E=(y[1],(0,s.useState)(!0)),_=(0,u.default)(E,2),w=_[0],C=_[1],P=(0,m.useDispatch)(),I=(0,s.useRef)(),H=(0,m.useSelector)((function(e){return e.home.playlist})),R=H.highquality,z=H.playlists,S=function(){var e=(0,n.default)(i.default.mark((function e(){var t,a,l,r;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([(0,p.apiPlaylistHot)(),(0,p.apiPlaylistCatlist)()]);case 3:t=e.sent,a=(0,u.default)(t,2),l=a[0],r=a[1],P((0,v.setPlaylistCatlist)({hot:l,catlist:r})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=(0,n.default)(i.default.mark((function e(){var t,l;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.prev=1,e.next=4,(0,p.apiTopPlaylistHighquality)({cat:a,limit:1});case 4:return t=e.sent,e.next=7,(0,p.apiTopPlaylist)({order:g,cat:a,limit:100,offset:100*(r-1)});case 7:l=e.sent,P((0,v.setTopPlaylist)({highquality:t,playlists:l})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:return e.prev=14,C(!1),I.current.scrollTo(0,0),e.finish(14);case 18:case"end":return e.stop()}}),e,null,[[1,11,14,18]])})));return function(){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){S()}),[]),(0,s.useEffect)((function(){q()}),[g,a,r]),w?d.default.createElement("div",{className:"flex-center w-full h-full"},d.default.createElement(h.default,null)):d.default.createElement("div",{className:"domHome_playlist px-8 overflow-auto max-h-full flex-auto",ref:I},d.default.createElement("div",{className:"ui_w1100"},R.playlists.length>0&&d.default.createElement(k.default,{item:R.playlists[0],cat:a}),d.default.createElement(Z.default,{cat:a}),d.default.createElement(x.default,{className:"domHome_playlist_list grid gap-5",small:"grid-cols-4",big:"grid-cols-5"},z.playlists.map((function(e){return d.default.createElement(b.default,{item:e,key:e.id})}))),d.default.createElement(N.default,{total:Math.ceil(z.total/100),page:r,func:function(e){return c("".concat(e))}})))}))},50233:(e,t,a)=>{a.r(t);var l=a(29604);Object.defineProperty(t,"__esModule",{value:!0}),a(74916),a(4723);var r=a(87363),n=(0,l.Z)(r),c=a(66711),u=a(11603),o=(0,l.Z)(u),i=a(27403),s=(0,l.Z)(i),d=a(22297),m=(0,l.Z)(d);exports.default=(0,r.memo)((function(){return n.default.createElement(c.Switch,null,n.default.createElement(c.Route,{path:"/home/playlist/highquality"},(function(e){var t=e.match.path;return n.default.createElement(c.Switch,null,n.default.createElement(c.Route,{path:"".concat(t,"/:cat")},(0,o.default)(m.default)),n.default.createElement(c.Redirect,{to:"".concat(t,"/全部歌单")}))})),n.default.createElement(c.Route,{path:"/home/playlist/:cat/:page"},(0,o.default)(s.default)),n.default.createElement(c.Redirect,{from:"/home/playlist/:cat",to:"/home/playlist/:cat/1"}),n.default.createElement(c.Redirect,{to:"/home/playlist/全部歌单"}))}))},30348:(e,t,a)=>{a.r(t)}}]);