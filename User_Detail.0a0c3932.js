"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[2489],{85379:(e,t,a)=>{a.r(t);var l=a(29604);Object.defineProperty(t,"__esModule",{value:!0});var r=a(87363),n=(0,l.Z)(r);exports.default=function(){return n.default.createElement("div",null)}},24044:(e,t,a)=>{a.r(t);var l=a(29604);Object.defineProperty(t,"__esModule",{value:!0}),a(9653),a(21249);var r=a(87363),n=(0,l.Z)(r),c=a(66711),u=a(16719),i=a(7323),s=(0,l.Z)(i),o=a(21624),d=a(52254),f=(0,l.Z)(d),m=function(e){var t=e.uid,a=(0,o.useSelector)((function(e){return e.account})).profile;return(null==a?void 0:a.userId)!==Number(t)?null:n.default.createElement("div",{className:"item"},n.default.createElement(c.Link,{to:function(e){return"".concat(e.pathname,"/record")}},n.default.createElement("div",{className:"cover relative border ui_aspect-ratio-1/1"},n.default.createElement("div",{className:"absolute inset-0"},n.default.createElement(f.default,null)),n.default.createElement("button",{type:"button",className:"playArrow opacity-0 group-hover:opacity-100 transition-opacity duration-500 ui_themeColor absolute right-0 bottom-0 m-2 bg-white bg-opacity-90 rounded-full p-2"},n.default.createElement(u.IconPlayerPlay,{size:22,className:"fill-current"})))),n.default.createElement("div",{className:"footer mt-2 text-sm"},n.default.createElement(c.Link,{to:function(e){return"".concat(e.pathname,"/record")},className:""},"听歌排行")))};exports.default=(0,r.memo)((function(e){var t=e.list,a=void 0===t?[]:t,l=e.uid;return n.default.createElement("div",{className:"domUserDetail_list px-8 grid grid-cols-4 gap-5"},n.default.createElement(m,null),a.map((function(e){return n.default.createElement(s.default,{item:e,uid:l,key:e.id})})))}))},12970:(e,t,a)=>{a.r(t);var l=a(29604);Object.defineProperty(t,"__esModule",{value:!0}),a(21249),a(68309);var r=a(94184),n=(0,l.Z)(r),c=a(87363),u=(0,l.Z)(c),i=a(66711),s=a(16719),o=a(12503);exports.default=function(e){var t=e.list,a=void 0===t?[]:t;return u.default.createElement("div",null,a.map((function(e,t){return u.default.createElement("div",{key:e.id,className:(0,n.default)("hover:bg-gray-100 pl-8 py-3 flex items-center",{"bg-gray-50":t%2==0})},u.default.createElement(i.Link,{to:"/playlist/music/".concat(e.id),className:"rounded overflow-hidden relative group"},u.default.createElement("img",{src:"".concat(e.coverImgUrl,"?param=60y60"),alt:""}),u.default.createElement("button",{type:"button",className:"absolute rounded-full bg-white bg-opacity-90 inset-0 flex-center m-auto w-6 h-6 ui_themeColor opacity-0 group-hover:opacity-100 transition-opacity duration-500"},u.default.createElement(s.IconPlayerPlay,{size:16,className:"fill-current"}))),u.default.createElement(i.Link,{to:"/playlist/music/".concat(e.id),className:"flex-auto w-0 px-3 truncate text-sm ui_text_black_hover"},e.name),u.default.createElement("span",{className:"px-3 count text-gray-400",style:{width:"".concat(1/7*100,"%")}},"歌曲：",e.trackCount),u.default.createElement("span",{className:"px-3 creator truncate text-gray-300",style:{width:"".concat(1/7*100,"%")}},"by",u.default.createElement(i.Link,{to:"/user/".concat(e.userId),className:"ui_text_gray_hover"},e.creator.nickname)),u.default.createElement("button",{type:"button",className:"px-3 subscribed flex items-center ui_text_gray_hover",style:{width:"".concat(1/7*100,"%")}},u.default.createElement(s.IconFolderPlus,{size:16}),e.subscribedCount),u.default.createElement("button",{type:"button",className:"px-3 playCount flex items-center ui_text_gray_hover",style:{width:"".concat(1/7*100,"%")}},u.default.createElement(s.IconPlayerPlay,{size:16}),(0,o.transPlayCount)(e.playCount)))})))}},52254:(e,t,a)=>{a.r(t);var l=a(29604);Object.defineProperty(t,"__esModule",{value:!0}),a(98642);var r=a(87363),n=(0,l.Z)(r);exports.default=function(){return n.default.createElement("div",{className:"cartoon hb r"},n.default.createElement("div",{className:"ears"}),n.default.createElement("div",{className:"face r c"}),n.default.createElement("div",{className:"nose ha hb"}),n.default.createElement("div",{className:"forehead ha c"}),n.default.createElement("div",{className:"eyes r"}),n.default.createElement("div",{className:"pupil"}),n.default.createElement("div",{className:"pupil"}),n.default.createElement("div",{className:"smile"}),n.default.createElement("div",{className:"smile"}),n.default.createElement("div",{className:"snout ha hb"}),n.default.createElement("div",{className:"mouth ha hb"}),n.default.createElement("div",{className:"whiskers r"}))}},68810:(e,t,a)=>{a.r(t);var l=a(29604);Object.defineProperty(t,"__esModule",{value:!0});var r=a(63038),n=(0,l.Z)(r);a(21249);var c=a(87363),u=(0,l.Z)(c),i=a(16719),s=a(94184),o=(0,l.Z)(s),d=a(24044),f=(0,l.Z)(d),m=a(12970),p=(0,l.Z)(m),v=a(85379),E=(0,l.Z)(v),y=[["grid","大图模式",i.IconLayoutGrid],["list","列表模式",i.IconLayoutList],["column","图列模式",i.IconList]],b={grid:f.default,list:p.default,column:E.default};exports.default=(0,c.memo)((function(e){var t,a=e.list,l=void 0===a?[]:a,r=e.uid,i=(0,c.useState)("grid"),s=(0,n.default)(i,2),d=s[0],f=s[1];return u.default.createElement("div",{className:"pb-10"},u.default.createElement("div",{className:"domUserDetail_headerBar flex items-center px-8 pb-4"},u.default.createElement("span",{className:"name text-base font-bold"},"歌单"),u.default.createElement("div",{className:"layouts ml-auto flex overflow-hidden rounded space-x-0.5"},y.map((function(e){var t=(0,n.default)(e,3),a=t[0],l=t[1],r=t[2];return u.default.createElement("button",{key:a,type:"button",className:(0,o.default)("layout bg-gray-100 h-5 w-6 flex-center",d===a?"bg-gray-500 text-white":"hover:bg-gray-200"),onClick:function(){return f(a)},title:l},u.default.createElement(r,{size:16}))})))),(t=b[d],u.default.createElement(t,{list:l,uid:r})))}))},34284:(e,t,a)=>{a.r(t),a(47941),a(82526),a(38880),a(54747),a(49337);var l=a(29604);Object.defineProperty(t,"__esModule",{value:!0});var r=a(59713),n=(0,l.Z)(r),c=a(48926),u=(0,l.Z)(c),i=a(63038),s=(0,l.Z)(i),o=a(87757),d=(0,l.Z)(o);a(57327),a(66992),a(41539),a(88674),a(78783),a(33948),a(21249);var f=a(87363),m=(0,l.Z)(f),p=a(66711),v=a(63233),E=a(21624);a(65864);var y=a(36871),b=(0,l.Z)(y),h=a(16719),N=a(7788),g=a(74849),x=(0,l.Z)(g),w=a(68810),_=(0,l.Z)(w);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach((function(t){(0,n.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}exports.default=(0,f.memo)((function(e){var t=e.uid,a=(0,E.useSelector)((function(e){return e.common})).isLogin,l=(0,f.useState)({}),r=(0,s.default)(l,2),n=r[0],c=r[1],i=(0,f.useState)([]),o=(0,s.default)(i,2),y=o[0],g=o[1],w=(0,E.useSelector)((function(e){return e.account})),k=(0,f.useState)(!1),O=(0,s.default)(k,2),j=O[0],Z=O[1],I=(0,f.useState)(!1),C=(0,s.default)(I,2),L=C[0],S=C[1];(0,f.useEffect)((function(){a&&S(String(w.profile.userId)===t)}),[a]);var D=y.filter((function(e){return String(e.userId)===t})),z=y.filter((function(e){return String(e.userId)!==t})),U=function(){var e=(0,u.default)(d.default.mark((function e(){var a,l,r,n;return d.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([(0,v.apiUserDetail)({uid:t}),(0,v.apiUserPlaylist)({uid:t})]);case 3:a=e.sent,l=(0,s.default)(a,2),r=l[0],n=l[1].playlist,c(r),g(n),Z(!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=(0,u.default)(d.default.mark((function e(t){var a;return d.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.profile.followed,e.prev=1,e.next=4,(0,v.apiFollow)({id:t,t:!0===a?0:1});case 4:200===e.sent.code&&c(P(P({},n),{},{profile:P(P({},n.profile),{},{followed:!a})})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return(0,f.useEffect)((function(){U()}),[t]),a?j?m.default.createElement("div",{className:"domUserDetail"},m.default.createElement("div",{className:"domUserDetail_header p-8"},m.default.createElement("div",{className:"avatar rounded-full overflow-hidden flex-none"},m.default.createElement("img",{src:"".concat(n.profile.avatarUrl,"?param=200y200"),alt:"",className:"ui_coverimg"})),m.default.createElement("div",{className:"content"},m.default.createElement("div",{className:"name"},n.profile.nickname),m.default.createElement("div",{className:"contain"},m.default.createElement("div",{className:"left flex-center"},11===n.profile.vipType&&m.default.createElement(m.default.Fragment,null,m.default.createElement("a",{href:"https://music.163.com/#/member"},"黑胶会员")," "),n.identify&&m.default.createElement("span",{className:"authentication",title:n.identify.imageDesc},m.default.createElement("span",{className:"ico"},m.default.createElement("img",{className:"ui_containimg",src:n.identify.imageUrl,alt:""})),n.identify.imageDesc),m.default.createElement("a",{className:"level",href:"https://music.163.com/#/user/level"},"Lv",n.level),m.default.createElement(b.default,{gender:n.profile.gender,size:16})),m.default.createElement("div",{className:"right ml-auto flex-center"},L?m.default.createElement(p.Link,{to:function(e){var t=e.pathname;return"".concat(t,"/edit")},className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full flex-center"},m.default.createElement(h.IconEdit,{size:18,stroke:1.5}),"  编辑个人信息"):m.default.createElement(m.default.Fragment,null,m.default.createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full flex-center"},m.default.createElement(h.IconMail,{size:20,stroke:1})," 发私信"),n.profile.followed?m.default.createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full flex-center",onClick:function(){return M(n.profile.userId)}},m.default.createElement(h.IconCheck,{size:16}),"  已关注"):m.default.createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full flex-center",onClick:function(){return M(n.profile.userId)}},m.default.createElement(h.IconPlus,{size:16,style:{color:"#EC4141"}}),"  关注")))),m.default.createElement("hr",null),m.default.createElement("div",{className:"infos text-center divide-x grid mt-5",style:{gridTemplateColumns:"repeat(3, 88px)"}},m.default.createElement(p.Link,{to:function(e){var t=e.pathname;return"".concat(t,"/dynamic")},className:"info"},m.default.createElement("div",{className:"num text-base"},n.profile.eventCount),m.default.createElement("div",{className:"string"},"动态")),m.default.createElement(p.Link,{to:function(e){var t=e.pathname;return"".concat(t,"/follow")},className:"info"},m.default.createElement("div",{className:"num text-base"},n.profile.follows),m.default.createElement("div",{className:"string"},"关注")),m.default.createElement(p.Link,{to:function(e){var t=e.pathname;return"".concat(t,"/fans")},className:"info"},m.default.createElement("div",{className:"num text-base"},n.profile.followeds),m.default.createElement("div",{className:"string"},"粉丝"))),m.default.createElement("div",{className:"list"},m.default.createElement("div",{className:"item"},m.default.createElement("span",null,"社交网络："),n.bindings.map((function(e){if(e.url)return 2===e.type?m.default.createElement("a",{href:e.url,key:e.url},m.default.createElement(N.SymbolWB,{size:16,active:!0,key:e.url})):null}))),m.default.createElement("div",{className:"item"},m.default.createElement("span",null,"个人介绍："),m.default.createElement("span",{className:"text-gray-400",style:{whiteSpace:"pre-wrap"}},n.profile.signature||"暂无介绍"))))),m.default.createElement("div",{className:"domUserDetail_main"},m.default.createElement(_.default,{uid:t,list:D}),m.default.createElement(_.default,{uid:t,list:z}))):m.default.createElement("div",{className:"flex-center"},m.default.createElement(x.default,null)):m.default.createElement("div",null,"查看个人信息请先登录")}))},98642:(e,t,a)=>{a.r(t)},65864:(e,t,a)=>{a.r(t)}}]);