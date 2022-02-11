"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[323],{5058:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ce});var a=n(7363),r=n.n(a),l=n(6711),c=function(){return r().createElement("div",{className:"overflow-auto h-full flex-auto"},r().createElement(l.Outlet,null))};const s=(0,a.memo)(c);n(7941),n(2526),n(5003),n(4747),n(9337),n(3321),n(9070);var i=n(4942),m=n(5861),o=n(885),u=n(7757),d=n.n(u),f=(n(7327),n(1539),n(6992),n(8674),n(8783),n(3948),n(1249),n(9428)),v=n(5754),p=n(6719),E=n(4539),b=n(8157),N=n(4184),h=n.n(N),g=(n(9653),n(9217)),y=n(1624);const x=function(){return r().createElement("div",{className:"cartoon hb r"},r().createElement("div",{className:"ears"}),r().createElement("div",{className:"face r c"}),r().createElement("div",{className:"nose ha hb"}),r().createElement("div",{className:"forehead ha c"}),r().createElement("div",{className:"eyes r"}),r().createElement("div",{className:"pupil"}),r().createElement("div",{className:"pupil"}),r().createElement("div",{className:"smile"}),r().createElement("div",{className:"smile"}),r().createElement("div",{className:"snout ha hb"}),r().createElement("div",{className:"mouth ha hb"}),r().createElement("div",{className:"whiskers r"}))};var w=function(e){var t=e.uid,n=(0,y.useSelector)((function(e){return e.account})).profile;return(null==n?void 0:n.userId)!==Number(t)?null:r().createElement("div",{className:"item"},r().createElement(l.Link,{to:function(e){return"".concat(e.pathname,"/record")}},r().createElement("div",{className:"cover relative border aspect-square"},r().createElement("div",{className:"absolute inset-0"},r().createElement(x,null)),r().createElement("button",{type:"button",className:"playArrow opacity-0 group-hover:opacity-100 transition-opacity duration-500 ui_themeColor absolute right-0 bottom-0 m-2 bg-white bg-opacity-90 rounded-full p-2"},r().createElement(p.IconPlayerPlay,{size:22,className:"fill-current"})))),r().createElement("div",{className:"footer mt-2 text-sm"},r().createElement(l.Link,{to:function(e){return"".concat(e.pathname,"/record")},className:""},"听歌排行")))};const k=(0,a.memo)((function(e){var t=e.list,n=void 0===t?[]:t,a=e.uid;return r().createElement("div",{className:"domUserDetail_list px-8 grid grid-cols-4 gap-5"},r().createElement(w,null),n.map((function(e){return r().createElement(g.Z,{item:e,uid:a,key:e.id})})))}));n(8309);var _=n(7443),Z=[["grid","大图模式",p.IconLayoutGrid],["list","列表模式",p.IconLayoutList],["column","图列模式",p.IconList]],U={grid:k,list:function(e){var t=e.list,n=void 0===t?[]:t;return r().createElement("div",null,n.map((function(e,t){return r().createElement("div",{key:e.id,className:h()("hover:bg-gray-100 pl-8 py-3 flex items-center",{"bg-gray-50":t%2==0})},r().createElement(l.Link,{to:"/playlist/music/".concat(e.id),className:"rounded overflow-hidden relative group"},r().createElement("img",{src:"".concat(e.coverImgUrl,"?param=60y60"),alt:""}),r().createElement("button",{type:"button",className:"absolute rounded-full bg-white bg-opacity-90 inset-0 flex-center m-auto w-6 h-6 ui_themeColor opacity-0 group-hover:opacity-100 transition-opacity duration-500"},r().createElement(p.IconPlayerPlay,{size:16,className:"fill-current"}))),r().createElement(l.Link,{to:"/playlist/music/".concat(e.id),className:"flex-auto w-0 px-3 truncate text-sm ui_text_black_hover"},e.name),r().createElement("span",{className:"px-3 count text-gray-400",style:{width:"".concat(1/7*100,"%")}},"歌曲：",e.trackCount),r().createElement("span",{className:"px-3 creator truncate text-gray-300",style:{width:"".concat(1/7*100,"%")}},"by",r().createElement(l.Link,{to:"/user/".concat(e.userId),className:"ui_text_gray_hover"},e.creator.nickname)),r().createElement("button",{type:"button",className:"px-3 subscribed flex items-center ui_text_gray_hover",style:{width:"".concat(1/7*100,"%")}},r().createElement(p.IconFolderPlus,{size:16}),e.subscribedCount),r().createElement("button",{type:"button",className:"px-3 playCount flex items-center ui_text_gray_hover",style:{width:"".concat(1/7*100,"%")}},r().createElement(p.IconPlayerPlay,{size:16}),(0,_.LU)(e.playCount)))})))},column:function(){return r().createElement("div",null)}};const S=(0,a.memo)((function(e){var t,n=e.list,l=void 0===n?[]:n,c=e.uid,s=(0,a.useState)("grid"),i=(0,o.Z)(s,2),m=i[0],u=i[1];return r().createElement("div",{className:"pb-10"},r().createElement("div",{className:"domUserDetail_headerBar flex items-center px-8 pb-4"},r().createElement("span",{className:"name text-base font-bold"},"歌单"),r().createElement("div",{className:"layouts ml-auto flex overflow-hidden rounded space-x-0.5"},Z.map((function(e){var t=(0,o.Z)(e,3),n=t[0],a=t[1],l=t[2];return r().createElement("button",{key:n,type:"button",className:h()("layout bg-gray-100 h-5 w-6 flex-center",m===n?"bg-gray-500 text-white":"hover:bg-gray-200"),onClick:function(){return u(n)},title:a},r().createElement(l,{size:16}))})))),(t=U[m],r().createElement(t,{list:l,uid:c})))}));var C=n(5219);function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P={profile:{},bindings:[]},L=function(){var e,t,n,c,s,i,u,N,h=(0,l.useParams)().uid,g=(0,C.C)((function(e){return e.common})).isLogin,y=(0,C.C)((function(e){return e.account})),x=(0,a.useState)(P),w=(0,o.Z)(x,2),k=w[0],_=w[1],Z=(0,a.useState)([]),U=(0,o.Z)(Z,2),I=U[0],L=U[1],D=(0,a.useState)(!1),O=(0,o.Z)(D,2),R=O[0],z=O[1],F=(0,a.useMemo)((function(){return!!g&&String(y.profile.userId)===h}),[g]),J=I.filter((function(e){return String(e.userId)===h})),A=I.filter((function(e){return String(e.userId)!==h})),M=function(){var e=(0,m.Z)(d().mark((function e(){var t,n,a,r;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([(0,f.um)({uid:h}),(0,f.Uu)({uid:h})]);case 3:t=e.sent,n=(0,o.Z)(t,2),a=n[0],r=n[1].playlist,_(j(j({},P),a)),L(r),z(!0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=(0,m.Z)(d().mark((function e(t){var n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=k.profile.followed,e.prev=1,e.next=4,(0,f.iQ)({id:t,t:!0===n?0:1});case 4:200===e.sent.code&&_(j(j({},k),{},{profile:j(j({},k.profile),{},{followed:!n})})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return(0,a.useEffect)((function(){M()}),[h]),g?R?404===k.code?r().createElement("div",{className:"flex"},"用户不存在"):r().createElement("div",{className:"domUserDetail"},r().createElement("div",{className:"domUserDetail_header p-8"},r().createElement("div",{className:"avatar w-44 h-44 rounded-full overflow-hidden flex-none"},r().createElement("img",{src:"".concat(null===(e=k.profile)||void 0===e?void 0:e.avatarUrl,"?param=180y180"),alt:"",className:"w-full h-ull object-cover block"})),r().createElement("div",{className:"content"},r().createElement("div",{className:"font-bold text-xl"},null===(t=k.profile)||void 0===t?void 0:t.nickname),r().createElement("div",{className:"contain"},r().createElement("div",{className:"left flex-center"},11===(null===(n=k.profile)||void 0===n?void 0:n.vipType)&&r().createElement(r().Fragment,null,r().createElement("a",{href:"https://music.163.com/#/member"},"黑胶会员")," "),k.identify&&r().createElement("span",{className:"authentication",title:k.identify.imageDesc},r().createElement("span",{className:"ico"},r().createElement("img",{className:"ui_containimg",src:k.identify.imageUrl,alt:""})),k.identify.imageDesc),r().createElement("a",{className:"level",href:"https://music.163.com/#/user/level"},"Lv",k.level),r().createElement(v.ZP,{gender:null===(c=k.profile)||void 0===c?void 0:c.gender,size:16})),r().createElement("div",{className:"right ml-auto flex-center"},F?r().createElement(l.Link,{to:"edit",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full flex-center"},r().createElement(p.IconEdit,{size:18,stroke:1.5}),"  编辑个人信息"):r().createElement(r().Fragment,null,r().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full flex-center"},r().createElement(p.IconMail,{size:20,stroke:1})," 发私信"),null!==(s=k.profile)&&void 0!==s&&s.followed?r().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full flex-center",onClick:function(){var e;return Q(null===(e=k.profile)||void 0===e?void 0:e.userId)}},r().createElement(p.IconCheck,{size:16}),"  已关注"):r().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full flex-center",onClick:function(){var e;return Q(null===(e=k.profile)||void 0===e?void 0:e.userId)}},r().createElement(p.IconPlus,{size:16,style:{color:"#EC4141"}}),"  关注")))),r().createElement("hr",null),r().createElement("div",{className:"infos text-center divide-x grid mt-5",style:{gridTemplateColumns:"repeat(3, 88px)"}},r().createElement(l.Link,{to:"dynamic",className:"info"},r().createElement("div",{className:"num text-base"},null===(i=k.profile)||void 0===i?void 0:i.eventCount),r().createElement("div",{className:"string"},"动态")),r().createElement(l.Link,{to:"follow",className:"info"},r().createElement("div",{className:"num text-base"},null===(u=k.profile)||void 0===u?void 0:u.follows),r().createElement("div",{className:"string"},"关注")),r().createElement(l.Link,{to:"fans",className:"info"},r().createElement("div",{className:"num text-base"},null===(N=k.profile)||void 0===N?void 0:N.followeds),r().createElement("div",{className:"string"},"粉丝"))),r().createElement("div",{className:"leading-6 mt-2 text-sm"},r().createElement("div",{className:"item"},r().createElement("span",null,"社交网络："),k.bindings.map((function(e){if(e.url)return 2===e.type?r().createElement("a",{href:e.url,key:e.url},r().createElement(E.Hl,{size:16,active:!0,key:e.url})):null}))),r().createElement("div",{className:"item"},r().createElement("span",null,"个人介绍："),r().createElement("span",{className:"text-gray-400",style:{whiteSpace:"pre-wrap"}},k.profile.signature||"暂无介绍"))))),r().createElement("div",{className:"domUserDetail_main"},r().createElement(S,{uid:h,list:J}),r().createElement(S,{uid:h,list:A}))):r().createElement("div",{className:"flex-center"},r().createElement(b.Z,null)):r().createElement("div",null,"查看个人信息请先登录")};const D=(0,a.memo)(L);var O=n(2982),R=(n(2222),n(8458)),z=n(4716);const F=(0,a.memo)((function(){var e=(0,l.useParams)().uid,t=(0,a.useState)([]),n=(0,o.Z)(t,2),c=n[0],s=n[1],i=(0,a.useRef)(-1),u=(0,a.useState)({}),v=(0,o.Z)(u,2),p=v[0],E=v[1],N=(0,a.useRef)(!0),h=(0,a.useRef)(null),g=(0,a.useRef)(null),y=function(){var t=(0,m.Z)(d().mark((function t(){var n,a;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.um)({uid:e});case 3:n=t.sent,a=n.profile,E(a),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),x=function(){var t=(0,m.Z)(d().mark((function t(){var n,a,r,l;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(N.current){t.next=2;break}return t.abrupt("return",null);case 2:return t.prev=2,t.next=5,(0,f.FZ)({uid:e,lasttime:i.current});case 5:n=t.sent,a=n.events,r=n.more,l=n.lasttime,N.current=r,i.current=l,s((function(e){return[].concat((0,O.Z)(e),(0,O.Z)(a))})),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(2),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[2,14]])})));return function(){return t.apply(this,arguments)}}();return(0,z.Z)(x,h,g),(0,a.useEffect)((function(){c.length>0&&s([]),y()}),[e]),r().createElement("div",{className:"h-full overflow-auto",ref:h},r().createElement("div",{className:"h1 domUser_subpage_header ui_header"},"".concat(p.nickname,"的动态")),r().createElement("div",{className:"domUser_dynamic_main"},r().createElement("div",{className:"list px-8"},c.length>0?r().createElement(R.Z,{list:c}):r().createElement("div",{className:"empty"},"暂无动态")),r().createElement("div",{ref:g}),N.current&&r().createElement("div",{className:"flex-center"},r().createElement(b.Z,null))))}));var J=n(6459),A=(n(4553),n(7980)),M=n.n(A),Q=n(7419),T=n(2011);const H=(0,a.memo)((function(e){var t,n=e.item,a=e.handleClick,c=e.handleLetter,s=e.isSelf;return r().createElement("div",{className:"item w-96 flex p-4 hover:bg-gray-50",key:n.userId},r().createElement(l.Link,{to:"/user/".concat(n.userId),className:"relative avatar w-24 h-24 rounded-full border flex-none"},r().createElement("img",{className:"rounded-full",src:"".concat(n.avatarUrl,"?param=100y100"),alt:""}),(null==n||null===(t=n.avatarDetail)||void 0===t?void 0:t.identityIconUrl)&&r().createElement("div",{className:"ico w-6 h-6 absolute right-0 bottom-0"},r().createElement("img",{src:n.avatarDetail.identityIconUrl,alt:""}))),r().createElement("div",{className:"content flex-auto w-0 pl-2"},r().createElement("div",{className:"contain mt-4"},r().createElement("div",{className:"left"},r().createElement(l.Link,{className:"nickname ui_text_black_hover truncate pr-3 w-56",to:"/user/".concat(n.userId)},n.nickname))),r().createElement("div",{className:"contain flex items-baseline"},r().createElement("div",{className:"truncate pr-3 text-gray-500 w-56"},n.signature),r().createElement("div",{className:"right flex-none"},function(e){var t=e.handleLetter,n=e.handleClick,a=e.id,l=e.name;switch(!0){case t&&e.isSelf:return r().createElement("button",{onClick:function(){return t(a,l)},type:"button",className:"follow border flex-center rounded-full w-16 h-6 hover:bg-gray-200"},r().createElement(p.IconPlus,{size:16,className:"text-red-500"})," 私信");case e.followed:return r().createElement("span",{className:"follow border text-gray-500 flex-center rounded-full w-16 h-6"},"已关注");default:return r().createElement("button",{onClick:function(){return n(a)},type:"button",className:"follow border flex-center rounded-full w-16 h-6 hover:bg-gray-200"},r().createElement(p.IconPlus,{size:16,className:"text-red-500"})," 关注")}}({handleLetter:c,handleClick:a,isSelf:s,followed:n.followed,id:n.userId,name:n.nickname}))),r().createElement("div",{className:"info divide-x text-gray-500 mt-1"},r().createElement("span",{className:"pr-6"}," 歌单：".concat(n.playlistCount)),r().createElement("span",{className:"pl-6"},"粉丝：".concat(n.followeds)))))})),B=(0,a.memo)((function(e){var t=e.list,n=void 0===t?[]:t,a=e.handleClick,l=e.handleLetter,c=e.isSelf,s=e.children;return r().createElement(r().Fragment,null,0===n.length?s[0]:r().createElement("div",{className:"flex flex-wrap justify-between"},n.map((function(e){return r().createElement(H,{item:e,handleClick:a,isSelf:c,handleLetter:l,key:e.userId})}))),s[1])})),q=(0,a.memo)((function(){var e=(0,l.useParams)().uid;console.log("user_follow");var t=(0,y.useDispatch)(),n=(0,a.useState)({}),c=(0,o.Z)(n,2),s=c[0],i=c[1],u=(0,a.useState)([]),v=(0,o.Z)(u,2),p=v[0],E=v[1],N=(0,y.useSelector)((function(e){return e.account})),h=(0,a.useMemo)((function(){return N.profile.userId===Number(e)}),[e]),g=(0,a.useRef)(),x=(0,a.useRef)(),w=(0,a.useRef)(0),k=(0,a.useRef)(!0),_=function(){var t=(0,m.Z)(d().mark((function t(){var n,a;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.um)({uid:e});case 3:n=t.sent,a=n.profile,i(a),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),Z=function(){var t=(0,m.Z)(d().mark((function t(){var n,a,r;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(k.current){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,(0,f.qm)({uid:e,limit:30,offset:w.current});case 5:n=t.sent,a=n.follow,r=n.more,w.current+=30,k.current=r,E((function(e){return[].concat((0,O.Z)(e),(0,O.Z)(a))})),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(){return t.apply(this,arguments)}}(),U=(0,a.useCallback)(function(){var e=(0,m.Z)(d().mark((function e(t){var n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.iQ)({id:t,t:1});case 3:n=e.sent,(0,J.Z)(n),E(M()((function(e){e[e.findIndex((function(e){return e.userId===t}))].followed=!0}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),[]);return(0,a.useEffect)((function(){_()}),[]),(0,z.Z)(Z,g,x),r().createElement("div",{className:"domUser_followlist h-full overflow-auto",ref:g},r().createElement("div",{className:"h1 domUser_subpage_header ui_header"},r().createElement(l.Link,{to:"./"},s.nickname),"的关注"),r().createElement("div",{className:"domUser_followlist_main"},r().createElement(B,{isSelf:h,list:p,handleClick:U,handleLetter:function(e,n){t((0,Q.setPopupLetterToggle)()),t((0,T.setMsgPrivateHistory)({uid:e,nickname:n,showMsgPrivateHistory:!0}))}},r().createElement("div",{className:"empty"},"还没有关注")),r().createElement("div",{ref:x}),k.current&&r().createElement("div",{className:"flex-center"},r().createElement(b.Z,null))))})),Y=(0,a.memo)((function(){var e=(0,l.useParams)().uid;console.log("user_fans");var t=(0,a.useState)({}),n=(0,o.Z)(t,2),c=n[0],s=n[1],i=(0,a.useState)([]),u=(0,o.Z)(i,2),v=u[0],p=u[1],E=function(){var t=(0,m.Z)(d().mark((function t(){var n,a,r,l;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Promise.all([(0,f.um)({uid:e}),(0,f.J9)({uid:e})]);case 3:n=t.sent,a=(0,o.Z)(n,2),r=a[0].profile,l=a[1].followeds,s(r),p(l),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}(),b=(0,a.useCallback)(function(){var e=(0,m.Z)(d().mark((function e(t){var n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.iQ)({id:t,t:1});case 3:n=e.sent,(0,J.Z)(n),p(M()((function(e){e[e.findIndex((function(e){return e.userId===t}))].followed=!0}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),[]);return(0,a.useEffect)((function(){E()}),[]),r().createElement("div",{className:"domUser_followlist"},r().createElement("div",{className:"h1 domUser_subpage_header ui_header"},r().createElement(l.Link,{to:"./"},c.nickname),"的粉丝"),r().createElement("div",{className:"domUser_followlist_main"},r().createElement(B,{list:v,handleClick:b},r().createElement("div",{className:"empty"},"还没有粉丝"))))}));var G=n(1999),V=n(7390),K=n(1495),W=n(1337),X=n(2446),$=function(){var e=(0,l.useParams)().uid,t=(0,C.C)((function(e){return e.account})).profile;if((null==t?void 0:t.userId)!==Number(e))return r().createElement(l.Navigate,{to:"/"});var n=(0,a.useState)(1),c=(0,o.Z)(n,2),s=c[0],i=c[1],u=(0,a.useState)([]),v=(0,o.Z)(u,2),p=v[0],E=v[1],b=function(){var t=(0,m.Z)(d().mark((function t(){var n,a,r;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.Uz)({uid:e,type:s});case 3:n=t.sent,a=n.allData,r=n.weekData,E(1===s?r:a),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();return(0,a.useEffect)((function(){b()}),[s,e]),r().createElement("div",{className:"h-full flex flex-col"},r().createElement("div",{className:"flex-none"},r().createElement("div",{className:"h1 ui_header"},"我的听歌排行"),r().createElement("div",{className:"px-8 pb-2 border-b space-x-8 text-sm"},r().createElement("button",{onClick:function(){return i(1)},type:"button",className:h()("domUser_record_nav_link",{"font-bold":1===s})},"最近一周"),r().createElement("button",{onClick:function(){return i(0)},type:"button",className:h()({"font-bold":0===s})},"所有时间"))),r().createElement("div",{className:"overflow-auto h-0 flex-auto domUser_record_main",style:{"--ui_grid_template":"36px / 24px 24px 24px 10fr 1fr"}},r().createElement("div",{className:"domUser_record_list"},p.map((function(e,t){var n=e.song,a=e.playCount;return r().createElement(G.Z,{item:n,key:n.id,schema:[["评论","播放","下一首播放"],["收藏到歌单","分享","复制链接","下载"]]},r().createElement("div",{tabIndex:"2",className:h()("domUser_record_item focus:outline-none focus:bg-gray-200 items-center hover:bg-gray-100 ui_grid_template px-8 grid",t%2==1&&"bg-gray-50")},r().createElement("div",{className:"index text-gray-400"},r().createElement(V.Z,{id:n.id,index:t})),r().createElement("div",{className:"heart"},r().createElement(K.Z,{id:n.id})),r().createElement("div",{className:"download"},r().createElement(W.Z,null)),r().createElement("div",{className:"name"},r().createElement(X.Z,{item:n})),r().createElement("div",{className:"playCount text-gray-400"},a,"次")))})))))};const ee=(0,a.memo)($);var te=n(6467);const ne=function(){var e=(0,y.useSelector)((function(e){return e.mask})),t=e.dialogUploadAvatarVisibility,n=e.avatar;return t?(console.log(n),r().createElement(te.Z,{id:"dialogUploadAvatar",title:"上传头像"},r().createElement("div",{className:"main"},r().createElement("div",{className:"content flex justify-center"},r().createElement("div",{className:"fullSize flex-center bg-black rounded overflow-hidden"},r().createElement("img",{className:"w-full h-full object-contain",src:n,alt:""})),r().createElement("div",{className:"aside ml-8"},r().createElement("div",{className:"bigSize border rounded w-24 h-24"},r().createElement("img",{src:n,alt:""})),r().createElement("div",{className:"text-gray-400 mt-1"},"大尺寸封面"),r().createElement("div",{className:"smallSize border rounded w-16 h-16"},r().createElement("img",{src:n,alt:""})),r().createElement("div",{className:"text-gray-400 mt-1"},"小尺寸封面"))),r().createElement("div",{className:"actions pb-4 pt-6 space-x-4 flex justify-center"},r().createElement("button",{type:"button",className:"flex-center border px-3 h-8 rounded-full"},"重新选择"),r().createElement("button",{type:"button",className:"flex-center text-white ui_theme_bg_color px-3 h-8 rounded-full"},"保持并关闭"))))):null};n(3290);const ae=function(e){var t=e.birthday,n=void 0===t?"":t,l=e.handleEdit,c=(0,a.useRef)((new Date).getFullYear()),s=(0,a.useRef)(new Date(n).getFullYear()),i=(0,a.useRef)(new Date(n).getMonth()),m=(0,a.useRef)(new Date(n).getDate()),u=(0,a.useState)(),d=(0,o.Z)(u,2),f=d[0],v=d[1],p=function(){l("birthday",new Date("".concat(s.current,"/").concat(i.current+1,"/").concat(m.current)).valueOf())};return(0,a.useEffect)((function(){!function(){switch(Number(i.current)){case 1:return void(s.current%4==0&&s.current%100!=0||s.current%400==0?v(29):v(28));case 0:case 2:case 4:case 6:case 7:case 9:case 11:return void v(31);default:v(30)}}()}),[i.current]),r().createElement(r().Fragment,null,r().createElement("select",{className:"select",value:s.current,onChange:function(e){s.current=e.target.value,i.current=0,m.current=1,p()}},Object.keys(Array(100).fill(0)).reverse().map((function(e){return r().createElement("option",{key:c.current-e,value:c.current-e},c.current-e,"年")}))),r().createElement("select",{className:"select",value:i.current,onChange:function(e){i.current=e.target.value,m.current=1,p()}},Object.keys(Array(12).fill(0)).map((function(e){return r().createElement("option",{key:e,value:e},Number(e)+1,"月")}))),r().createElement("select",{className:"select",value:m.current,onChange:function(e){m.current=e.target.value,p()}},Object.keys(Array(f).fill(0)).map((function(e){return r().createElement("option",{key:Number(e)+1,value:Number(e)+1},Number(e)+1,"日")}))))},re=(0,a.memo)((function(){var e=(0,l.useParams)().uid,t=(0,y.useDispatch)(),n=(0,a.useState)(!0),c=(0,o.Z)(n,2),s=c[0],i=c[1],u=(0,a.useState)(),v=(0,o.Z)(u,2),p=v[0],E=v[1],N=(0,a.useState)(),g=(0,o.Z)(N,2),x=g[0],w=g[1],k=(0,a.useState)(""),_=(0,o.Z)(k,2),Z=_[0],U=(_[1],(0,a.useState)(!0)),S=(0,o.Z)(U,2),C=S[0],I=S[1],j=function(){var t=(0,m.Z)(d().mark((function t(){var n,a,r;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.um)({uid:e});case 3:if(n=t.sent,a=n.code,r=n.profile,200===a){t.next=8;break}return t.abrupt("return");case 8:E(r),w((function(){return M()(r,(function(){}))})),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:return t.prev=15,i(!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[0,12,15,18]])})));return function(){return t.apply(this,arguments)}}(),P=function(){var e=(0,m.Z)(d().mark((function e(){var n;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={gender:x.gender,birthday:x.birthday,nickname:x.nickname,province:x.province,city:x.city,signature:x.signature},e.next=4,(0,f.of)(n);case 4:if(200===e.sent.code){e.next=8;break}return e.abrupt("return");case 8:I(!0),E(x),t((0,Q.setToast)("修改个人资料成功")),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),L=function(e,t){w(M()((function(n){n[e]=t})))};return(0,a.useEffect)((function(){j()}),[e]),(0,a.useEffect)((function(){I(JSON.stringify(p)===JSON.stringify(x))}),[x]),s?r().createElement("div",{className:"flex-center w-full h-full"},r().createElement(b.Z,null)):r().createElement("div",{className:"domUserEdit"},r().createElement("div",{className:"h1 domUser_subpage_header ui_header"},"编辑个人信息"),r().createElement("div",{className:"domUserEdit_main"},r().createElement("div",{className:"left"},r().createElement("div",{className:"row"},r().createElement("div",{className:"key"},"昵称："),r().createElement("div",{className:"value"},r().createElement("input",{type:"text",value:x.nickname,className:"input",onChange:function(e){var t=e.target;return L("nickname",t.value)}}))),r().createElement("div",{className:"row"},r().createElement("div",{className:"key"},"介绍："),r().createElement("div",{className:"value"},r().createElement("div",{className:"signature"},r().createElement("textarea",{type:"text",value:x.signature,className:"textarea",onChange:function(e){var t=e.target;return L("signature",t.value)}}),r().createElement("div",{className:h()("signatureLength",{ui_red:Z.length>300})},300-Z.length)))),r().createElement("div",{className:"row"},r().createElement("div",{className:"key"},"性别："),r().createElement("div",{className:"value"},r().createElement("label",{htmlFor:"secret",className:"gender"},r().createElement("input",{type:"radio",className:"radio",name:"gender",id:"secret",checked:0===x.gender,onChange:function(){return L("gender",0)}}),r().createElement("i",{className:"ico flex-center"}),r().createElement("span",null,"保密")),r().createElement("label",{htmlFor:"male",className:"gender"},r().createElement("input",{type:"radio",className:"radio",name:"gender",id:"male",checked:1===x.gender,onChange:function(){return L("gender",1)}}),r().createElement("i",{className:"ico flex-center"}),r().createElement("span",null,"男")),r().createElement("label",{htmlFor:"famale",className:"gender"},r().createElement("input",{type:"radio",className:"radio",name:"gender",id:"famale",checked:2===x.gender,onChange:function(){return L("gender",2)}}),r().createElement("i",{className:"ico flex-center"}),r().createElement("span",null,"女")))),r().createElement("div",{className:"row"},r().createElement("div",{className:"key"},"生日："),r().createElement("div",{className:"value",style:{display:"flex",justifyContent:"space-between"}},r().createElement(ae,{birthday:x.birthday,handleEdit:L}))),r().createElement("div",{className:"row"},r().createElement("div",{className:"key"},"地区："),r().createElement("div",{className:"value"},r().createElement("select",{name:"",id:"",className:"select"},r().createElement("option",{value:""})))),r().createElement("div",{className:"row"},r().createElement("div",{className:"key"}),r().createElement("div",{className:"value"},r().createElement("div",{className:"actions"},r().createElement("button",{type:"button",className:h()("ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full red",{disabled:C}),style:{marginRight:"2em"},disabled:C,onClick:P},"保 存"),r().createElement(l.Link,{to:"./",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"},"取 消"))))),r().createElement("div",{className:"right ml-20"},r().createElement("div",{className:"avatar border rounded overflow-hidden w-40 h-40"},r().createElement("img",{className:"",src:x.avatarUrl,alt:""})),r().createElement("label",{htmlFor:"avatar",className:"border cursor-pointer hover:bg-gray-50 flex-center h-8 m-auto mt-5 px-3 rounded-full update w-min whitespace-nowrap"},r().createElement("input",{onChange:function(e){var n=e.target,a=new FileReader,r=(0,o.Z)(n.files,1)[0];r&&(a.readAsDataURL(r),a.onload=function(e){t((0,Q.setDialogUploadAvatarShow)({avatar:e.target.result}))})},type:"file",name:"",id:"avatar",hidden:!0,accept:"image/bmp,image/gif,image/jpg,image/svg,image/png,image/webp,image/ico,image/svgz,image/tif,image/jpeg,image/jfif,image/pjpeg,image/pjp,image/tiff,image/xbm"}),"修改头像"),r().createElement(ne,null))))}));n(4916),n(5306);const le=(0,a.memo)((function(){var e=(0,l.useParams)().uid,t=(0,a.useState)([]),n=(0,o.Z)(t,2),c=n[0],s=n[1],i=(0,a.useState)(!0),u=(0,o.Z)(i,2),v=u[0],p=u[1],b=function(){var t=(0,m.Z)(d().mark((function t(){var n,a;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f._5)({uid:e});case 3:n=t.sent,a=n.bindings,s(a),p(!1),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();return(0,a.useEffect)((function(){b()}),[]),v?r().createElement("div",null,"loading"):r().createElement(r().Fragment,null,r().createElement("div",{className:"h1 domUser_subpage_header ui_header"},"绑定账号"),r().createElement("div",{className:"domUser_binding_main"},r().createElement("div",{className:"domUser_binding_phone"},r().createElement("div",{className:"domUser_binding_title"},"注册账号"),r().createElement("div",{className:"domUser_binding_bar domUser_binding_box"},r().createElement("div",{className:"ico"},r().createElement(E._i,{active:!0})),r().createElement("div",{className:"content"},r().createElement("div",{className:"name"},"手机"),r().createElement("div",null,"使用手机号注册：",function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return 11===e.length?e.replace(/(?<=\d{3})(\d{4})(?=\d{4})/,"****"):e}(JSON.parse(c[0].tokenJsonStr).cellphone),"   ",r().createElement("button",{type:"button",className:"ui_link"},"更换手机"))),r().createElement("div",{className:"actions"},r().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"},"修改密码")))),r().createElement("div",{className:"domUser_binding_three"},r().createElement("div",{className:"domUser_binding_title"},"其他登录方式"),r().createElement("div",{className:"domUser_binding_list"},r().createElement("div",{className:"domUser_binding_bar domUser_binding_item"},r().createElement("div",{className:"ico"},r().createElement(E.Pl,{active:!0})),r().createElement("div",{className:"content"},r().createElement("div",{className:"name"},"网易邮箱账号")),r().createElement("div",{className:"actions"},r().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"},"修改密码"))),r().createElement("div",{className:"domUser_binding_bar domUser_binding_item"},r().createElement("div",{className:"ico"},r().createElement(E.PT,{active:!0})),r().createElement("div",{className:"content"},r().createElement("div",{className:"name"},"微信"),r().createElement("div",null,"ID：",JSON.parse(c[4].tokenJsonStr).nickname)),r().createElement("div",{className:"actions"},r().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"},"已绑定"))),r().createElement("div",{className:"domUser_binding_bar domUser_binding_item"},r().createElement("div",{className:"ico"},r().createElement(E.B3,{active:!0})),r().createElement("div",{className:"content"},r().createElement("div",{className:"name"},"QQ"),r().createElement("div",null,"ID：",JSON.parse(c[3].tokenJsonStr).nickname)),r().createElement("div",{className:"actions"},r().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"},"已绑定"))),r().createElement("div",{className:"domUser_binding_bar domUser_binding_item"},r().createElement("div",{className:"ico"},r().createElement(E.Hl,{active:!0})),r().createElement("div",{className:"content"},r().createElement("div",{className:"name"},"新浪微博"),r().createElement("div",null,"ID：",JSON.parse(c[1].tokenJsonStr).name)),r().createElement("div",{className:"actions"},r().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"},"寻找并邀请好友"),r().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"},"已绑定")))))))})),ce=function(){return r().createElement(l.Routes,null,r().createElement(l.Route,{path:"/:uid",element:r().createElement(s,null)},r().createElement(l.Route,{index:!0,element:r().createElement(D,null)}),r().createElement(l.Route,{path:"Dynamic",element:r().createElement(F,null)}),r().createElement(l.Route,{path:"Follow",element:r().createElement(q,null)}),r().createElement(l.Route,{path:"Fans",element:r().createElement(Y,null)}),r().createElement(l.Route,{path:"Fans",element:r().createElement(Y,null)}),r().createElement(l.Route,{path:"Record",element:r().createElement(ee,null)}),r().createElement(l.Route,{path:"Edit",element:r().createElement(re,null)}),r().createElement(l.Route,{path:"Binding",element:r().createElement(le,null)})))}}}]);
//# sourceMappingURL=User.js.map?version=01f1f742