"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[2147],{4622:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var n=r(6459),c=r(1726),u=r(5861),a=r(3575),s=r(7757),o=r.n(s),i=(r(9653),r(2222),r(4553),r(3804)),l=r.n(i),f=r(6866),m=r(847),p=r(4584),d=r.n(p),v=r(3011),h=r(2470),w=r(5325),k=r(4849),x=r(9709),Z=r(397);const b=(0,i.memo)((function(e){var t=e.uid;console.log("user_follow");var r=(0,w.useDispatch)(),s=(0,i.useState)({}),p=(0,a.Z)(s,2),b=p[0],y=p[1],E=(0,i.useState)([]),g=(0,a.Z)(E,2),_=g[0],N=g[1],C=(0,w.useSelector)((function(e){return e.account})),R=(0,i.useMemo)((function(){return C.profile.userId===Number(t)}),[t]),S=(0,i.useRef)(),I=(0,i.useRef)(),L=(0,i.useRef)(0),M=(0,i.useRef)(!0),P=function(){var e=(0,u.Z)(o().mark((function e(){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.um)({uid:t});case 3:r=e.sent,n=r.profile,y(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=(0,u.Z)(o().mark((function e(){var r,n,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(M.current){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,(0,f.qm)({uid:t,limit:30,offset:L.current});case 5:r=e.sent,n=r.follow,u=r.more,L.current+=30,M.current=u,N((function(e){return[].concat((0,c.Z)(e),(0,c.Z)(n))})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}(),H=(0,i.useCallback)(function(){var e=(0,u.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.iQ)({id:t,t:1});case 3:r=e.sent,(0,n.Z)(r),N(d()((function(e){e[e.findIndex((function(e){return e.userId===t}))].followed=!0}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),[]);return(0,i.useEffect)((function(){P()}),[]),(0,x.Z)(U,S,I),l().createElement("div",{className:"domUser_followlist h-full overflow-auto",ref:S},l().createElement("div",{className:"h1 domUser_subpage_header ui_header"},l().createElement(m.Link,{to:"./"},b.nickname),"的关注"),l().createElement("div",{className:"domUser_followlist_main"},l().createElement(Z.Z,{isSelf:R,list:_,handleClick:H,handleLetter:function(e,t){r((0,v.setPopupLetterToggle)()),r((0,h.setMsgPrivateHistory)({uid:e,nickname:t,showMsgPrivateHistory:!0}))}},l().createElement("div",{className:"empty"},"还没有关注")),l().createElement("div",{ref:I}),M.current&&l().createElement("div",{className:"flex-center"},l().createElement(k.Z,null))))}))}}]);