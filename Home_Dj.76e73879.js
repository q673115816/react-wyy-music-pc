"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[9631],{9206:(e,t,a)=>{a.r(t),a.d(t,{default:()=>P});var r=a(3804),n=a.n(r),l=a(847),c=a(1603),m=a(5861),o=a(3575),s=a(7757),i=a.n(s),d=(a(8309),a(1249),a(2222),a(6992),a(1539),a(8674),a(8783),a(3948),a(7042),a(5325)),u=a(1216),v=a(4302),f=a(1869),E=a.n(f),p=a(5200),h=a(6866),x=a(4878),N=a(4849),y=(0,r.memo)((function(e){var t=e.item,a=void 0===t?{}:t;return n().createElement("div",{className:"item"},n().createElement("div",{className:"cover relative rounded border overflow-hidden"},n().createElement(l.Link,{to:"/playlist/dj/".concat(a.id),className:"ui_aspect-ratio-1/1"},n().createElement(u.ZP,{overflow:!0,resize:!0},n().createElement("img",{className:"",src:a.picUrl,alt:""})),n().createElement("div",{className:"absolute bottom-0 left-0 right-0 h-1/4 ui_linear_mask_bottom"}),n().createElement("div",{className:"absolute left-0 bottom-0 max-w-full px-2 py-1 text-white truncate"},a.name))),n().createElement("div",{className:"footer mt-2 text-sm"},n().createElement(l.Link,{to:"/playlist/dj/".concat(a.id),className:"text-gray-600 hover:text-black"},a.rcmdtext)))})),g=function(e){var t=e.onClick;return n().createElement("button",{type:"button",onClick:t,className:"absolute right-full inset-y-0 z-10 w-8 h-8 flex-center text-gray-500 m-auto"},n().createElement(p.IconChevronLeft,{size:30,stroke:1}))},b=function(e){var t=e.onClick;return n().createElement("button",{type:"button",onClick:t,className:"absolute left-full inset-y-0 z-10 w-8 h-8 flex-center text-gray-500 m-auto"},n().createElement(p.IconChevronRight,{size:30,stroke:1}))},k=function(e){var t=e.catelist,a=void 0===t?[]:t,r={speed:500,infinite:!1,slidesToShow:8,slidesToScroll:8,draggable:!1,prevArrow:n().createElement(g,null),nextArrow:n().createElement(b,null)};return n().createElement("div",{className:"domHome_dj_nav px-10 mt-9"},n().createElement(E(),r,n().createElement("div",{className:"item"},n().createElement(l.Link,{to:"/home/dj/toplist"},n().createElement("div",{className:"inner"},n().createElement("div",{className:"btn flex-center ui_themeColor"},n().createElement(p.IconChartBar,{stroke:1})),n().createElement("div",{className:"name text-gray-500 mt-2"},"排行榜")))),a.map((function(e){return n().createElement("div",{className:"item",key:e.id},n().createElement(l.Link,{to:"/dj-category/".concat(e.name,"/").concat(e.id)},n().createElement("div",{className:"inner"},n().createElement("div",{className:"btn flex-center ui_themeColor"},n().createElement("img",{className:"w-8 h-8",src:e.pic56x56Url,alt:""})),n().createElement("div",{className:"name text-gray-500 mt-2"},e.name))))}))))},_=["创作翻唱","声之剧场","音乐故事","情感调频","声音恋人"];const w=(0,r.memo)((function(){var e=(0,d.useDispatch)(),t=(0,r.useState)(!0),a=(0,o.Z)(t,2),c=a[0],s=a[1],u=(0,d.useSelector)((function(e){return e.home.dj})),f=u.DjBanner,E=(u.category,u.catelist),p=u.DjPersonalizeRecommend,g=u.result,b=function(){var t=(0,m.Z)(i().mark((function t(){var a,r,n,l,c,m,d,u,f,E,p,x;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Promise.all([(0,h.Yh)(),(0,h.xV)(),(0,h.e7)(),(0,h.qA)(),(0,h.vO)({cateId:2001,limit:6}),(0,h.vO)({cateId:10001,limit:6}),(0,h.vO)({cateId:2,limit:6}),(0,h.vO)({cateId:3,limit:6}),(0,h.vO)({cateId:3001,limit:6})]);case 3:a=t.sent,r=(0,o.Z)(a,9),n=r[0],l=r[1],c=r[2],m=void 0===c?[]:c,d=r[3],u=r[4],f=r[5],E=r[6],p=r[7],x=r[8],e((0,v.setHomeDj)({DjBanner:n.data,category:l.data,catelist:m.categories,DjPersonalizeRecommend:d.data,result:{创作翻唱:u.djRadios,声之剧场:f.djRadios,音乐故事:E.djRadios,情感调频:p.djRadios,声音恋人:x.djRadios}})),s(!1),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(0),console.log(t.t0);case 22:case"end":return t.stop()}}),t,null,[[0,19]])})));return function(){return t.apply(this,arguments)}}();return(0,r.useEffect)((function(){b()}),[]),c?n().createElement("div",{className:"flex-center w-full h-full"},n().createElement(N.Z,null)):n().createElement("div",{className:"domHome_content px-8 overflow-auto max-h-full flex-auto"},n().createElement("div",{className:"domHome_dj pb-16 ui_w1100"},n().createElement("div",{className:"domHome_dj_banner"},f.length>0&&n().createElement(x.Z,{list:f,coverSrc:"pic"})),n().createElement("div",{className:"domHome_item"},n().createElement(k,{catelist:E})),n().createElement("div",{className:"domHome_item mt-8"},n().createElement("div",{className:"domHome_linktitle h1"},"电台个性推荐"),n().createElement("div",{className:"mt-4 grid grid-cols-5 gap-5"},p.slice(0,5).map((function(e){return n().createElement(y,{item:e,key:e.id})})))),_.map((function(e){return n().createElement("div",{key:e,className:"domHome_item mt-8"},n().createElement(l.Link,{className:"domHome_linktitle h1",to:"/dj-category/".concat(e)},e,">"),n().createElement("div",{className:"mt-4 grid grid-cols-5 gap-5"},g[e].slice(0,5).map((function(e){return n().createElement(y,{item:e,key:e.id})}))))}))))}));var j=a(7196),I=a(7484),R=a.n(I),C=a(4184),H=a.n(C),z=[["节目榜","/home/dj/toplist"],["新晋电台榜","/home/dj/toplist/now"],["热门电台榜","/home/dj/toplist/hot"]],S={default:{map:function(e){var t=e.lastRank,a=e.rank,r=e.score,n=e.program,l=n.id,c=n.name,m=n.coverUrl,o=n.radio;return{id:l,name:c,lastRank:t,rank:a,coverUrl:m,score:r,userName:o.name,userId:o.id,category:o.category}}},other:{map:function(e){var t=e.id,a=e.name,r=e.lastRank,n=e.rank,l=e.picUrl,c=e.score,m=e.dj;return{id:t,name:a,lastRank:r,rank:n,coverUrl:l,score:c,userName:m.nickname,userId:m.userId,category:e.category}}}},Z=(0,r.memo)((function(e){var t=e.lastRank,a=e.rank;switch(!0){case-1===t:return n().createElement("div",{className:"text-green-500"},"new");case t-a<0:return n().createElement("div",{className:"flex-center text-gray-500"},n().createElement(p.IconArrowDown,{size:10,className:"text-blue-500"}),-t+a);case t-a==0:return n().createElement("div",{className:"flex-center text-gray-500"},n().createElement(p.IconMinus,{size:10}),"0");case t-a>0:return n().createElement("div",{className:"flex-center text-gray-500"},n().createElement(p.IconArrowUp,{size:10,className:"text-red-500"}),t-a);default:return n().createElement("div",null)}})),D=(0,r.memo)((function(e){var t=e.updateTime;return n().createElement("div",{className:"domHome_dj_toplist_header relative py-7"},n().createElement("div",{className:"domHome_dj_toplist_nav m-auto w-min flex rounded-full border",style:{borderColor:"#bbb"}},z.map((function(e){var t=(0,o.Z)(e,2),a=t[0],r=t[1];return n().createElement(l.NavLink,{key:a,to:r,exact:!0,activeStyle:{backgroundColor:"#bbb"},activeClassName:"text-white",className:"domHome_dj_toplist_nav_link flex-center w-28 h-8 rounded-full text-center hover:bg-gray-100"},a)}))),n().createElement("div",{className:"absolute flex-center top-1/2 transform -translate-y-1/2 right-8 text-gray-400"},"最近更新：",t&&R()(t).format("MM月DD日"),n().createElement("div",{className:"relative ui_group"},n().createElement("span",{className:"block flex-center  border rounded-full w-4 h-4 flex-none"},"?"),n().createElement("div",{className:"absolute text-gray-500 top-6 right-0 shadow rounded p-4 w-48 border hidden ui_group-hover:block bg-white"},"选取云音乐中7天内发布的热度最高的节目，热度由节目播放、赞、分享数量总和计算"))))})),L=(0,r.memo)((function(e){var t=e.item,a=e.index,r=e.maxScore;return n().createElement("div",{tabIndex:"2",className:H()("item h-20 flex items-center hover:bg-gray-100 focus:bg-gray-100 focus:outline-none",{"bg-gray-50":a%2==0}),key:t.id},n().createElement("div",{className:"index flex flex-col items-center justify-center"},n().createElement("div",{className:H()("font-bold text-sm",{"text-red-500":a<3,"text-gray-400":a>2})},a+1),n().createElement("div",null,n().createElement(Z,{lastRank:t.lastRank,rank:t.rank}))),n().createElement("button",{type:"button",className:"cover relative"},n().createElement("img",{src:"".concat(t.coverUrl,"?param=60y60"),alt:""}),n().createElement("i",{className:"ico ui_themeColor absolute inset-0 flex-center rounded-full w-6 h-6 m-auto bg-white bg-opacity-90"},n().createElement(p.IconPlayerPlay,{size:16,className:"fill-current"}))),n().createElement("div",{className:"name flex-auto truncate"},t.name),n().createElement("div",{className:"radio flex-auto truncate"},n().createElement(l.Link,{className:"ui_text_gray_hover",to:"/playlist/dj/".concat(t.userId)},t.userName)),n().createElement("div",{className:"category"},n().createElement(l.Link,{to:"/",className:"ui_text_gray_hover border border-current"},t.category)),n().createElement("div",{className:"score"},n().createElement("div",{className:"rounded bg-gray-300 overflow-hidden h-2"},n().createElement("div",{className:"h-full bg-gray-500 w-0",style:{width:"".concat(t.score/r*100,"%")}}))))}));const U=(0,r.memo)((function(e){var t=e.type,a=(0,r.useState)([]),l=(0,o.Z)(a,2),c=l[0],s=l[1],d=(0,r.useState)(),u=(0,o.Z)(d,2),v=u[0],f=u[1],E=(0,r.useMemo)((function(){return t?"other":"default"}),[t]),p=function(){var e=(0,m.Z)(i().mark((function e(){var a,r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=7;break}return e.next=4,(0,h.T4)({type:t});case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,(0,h.cw)();case 9:e.t0=e.sent;case 10:a=e.t0,r=a.toplist,n=a.updateTime,(0,j.unstable_batchedUpdates)((function(){s(r.map(S[E].map)),f(n)})),e.next=19;break;case 16:e.prev=16,e.t1=e.catch(0),console.log(e.t1);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}}(),x=(0,r.useMemo)((function(){var e,t;return null!==(e=null===(t=c[0])||void 0===t?void 0:t.score)&&void 0!==e?e:0}),[c]);return(0,r.useEffect)((function(){p()}),[t]),n().createElement("div",{className:"domHome_dj_toplist h-full overflow-auto"},n().createElement(D,{updateTime:v}),n().createElement("div",{className:"domHome_dj_toplist_main"},n().createElement("div",{className:"list"},c.map((function(e,t){return n().createElement(L,{item:e,index:t,key:e.id,maxScore:x})})))))})),P=(0,r.memo)((function(){return n().createElement(l.Switch,null,n().createElement(l.Route,{path:"/home/dj/toplist/:type?"},(0,c.Z)(U)),n().createElement(l.Route,{path:"/home/dj"},n().createElement(w,null)))}))}}]);