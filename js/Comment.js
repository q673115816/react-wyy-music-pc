"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[456],{1321:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var a=n(7363),r=n.n(a),l=n(6711),c=n(2982),o=n(5861),m=n(885),s=n(7757),u=n.n(s),i=(n(1539),n(4747),n(2222),n(1249),n(9428)),d=n(2803),f=n(4716),p=n(8157);n(7980);const v=(0,a.memo)((function(){var e=(0,l.useParams)().id,t=(0,a.useState)([]),n=(0,m.Z)(t,2),s=n[0],v=n[1],E=(0,a.useRef)(!0),h=(0,a.useRef)(0),x=(0,a.useRef)(null),y=(0,a.useRef)(null),b=function(){var t=(0,o.Z)(u().mark((function t(){var n,a,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(E.current){t.next=2;break}return t.abrupt("return",!1);case 2:return t.prev=2,t.next=5,(0,i.jH)({id:e,type:0,limit:20,offset:h.current});case 5:n=t.sent,a=n.hotComments,r=n.hasMore,E.current=r,h.current+=20,v((function(e){return[].concat((0,c.Z)(e),(0,c.Z)(a))})),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(){return t.apply(this,arguments)}}();return(0,f.Z)(b,y,x),r().createElement("div",{className:"domComment px-8 py-5 overflow-auto max-h-full flex-auto",ref:y},r().createElement("div",{className:"h1"},"精彩评论"),r().createElement("div",{className:"domComment_list"},s.map((function(e){return r().createElement(d.Z,{item:e,key:e.commentId})})),E.current&&r().createElement("div",{className:"flex justify-center py-4"},r().createElement(p.Z,null)),r().createElement("div",{ref:x})))}));n(8309);var E=n(6719),h=n(4441),x=n(3661),y=n(8876),b=n(9097),N={song:{apiDetail:function(e){var t=e.id;return(0,i.VO)({ids:t})},apiComment:i.dV,header:function(e){var t,n=e.detail;return r().createElement("div",{className:"domComment_header"},r().createElement("div",{className:"domComment_infos flex "},r().createElement("div",{className:"cover h-20 rounded overflow-hidden relative"},r().createElement("img",{loading:"lazy",className:"h-full",src:n.al.picUrl,alt:""}),r().createElement("div",{className:"ico absolute inset-0 m-auto flex-center w-8 h-8 ui_themeColor rounded-full bg-white bg-opacity-90"},r().createElement(E.IconPlayerPlay,{size:16,className:"fill-current"}))),r().createElement("div",{className:"content px-6 py-2"},r().createElement("div",{className:"title text-lg"},n.name),r().createElement("div",{className:"info text-gray-500 mt-2 space-x-5"},r().createElement("span",null,"专辑：",r().createElement(l.Link,{className:"ui_text_gray_hover",to:"/playlist/album/".concat(n.al.id)},null===(t=n.al)||void 0===t?void 0:t.name)),r().createElement("span",null,"歌手：",n.ar.map((function(e,t){return r().createElement("span",{key:e.id},t>0&&" / ",r().createElement(l.Link,{className:"ui_text_gray_hover",to:"/artist/".concat(e.id)},e.name))})))))))}},mv:{apiDetail:i.Ro,apiComment:i.L,header:function(){return r().createElement("div",null)}},video:{apiDetail:i.ld,apiComment:i.ju,header:function(){return r().createElement("div",null)}}};const k=(0,a.memo)((function(){console.log("comment");var e=(0,l.useParams)(),t=e.id,n=e.type,c=(0,a.useState)({}),s=(0,m.Z)(c,2),i=s[0],d=s[1],f=(0,a.useState)({}),v=(0,m.Z)(f,2),k=v[0],g=v[1],w=(0,a.useState)(""),Z=(0,m.Z)(w,2),C=(Z[0],Z[1]),_=(0,a.useState)(!0),R=(0,m.Z)(_,2),z=R[0],I=R[1],S=(0,a.useState)(1),D=(0,m.Z)(S,2),M=D[0],P=D[1],j=function(){var e=(0,o.Z)(u().mark((function e(){var a,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N[n].apiDetail({id:t});case 3:a=e.sent,r=a.songs,d(r[0]),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),L=(0,a.useCallback)((function(e){C(e.target.value)}),[]),H=function(){var e=(0,o.Z)(u().mark((function e(){var a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N[n].apiComment({id:t,offset:20*(M-1),limit:h.zI});case 3:a=e.sent,g(a),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=(0,o.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:return e.next=4,H();case 4:I(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=(0,a.useMemo)((function(){return N[n].header}),[n]);return(0,a.useEffect)((function(){z?V():H()}),[M]),z?r().createElement("div",{className:"w-full h-full flex-center"},r().createElement(p.Z,null)):r().createElement("div",{className:"domComment overflow-auto px-8 py-5 h-full"},r().createElement(A,{detail:i}),r().createElement("div",{className:"domComment_write mt-4"},r().createElement(x.Z,{onChange:L,max:140}),r().createElement("div",{className:"domComment_write_actions flex mt-2.5"},r().createElement("div",{className:"flex space-x-2"},r().createElement("button",{type:"button",className:"text-gray-500 hover:text-black"},r().createElement(E.IconMoodSmile,{size:20,stroke:1.5})),r().createElement("button",{type:"button",className:"text-gray-500 hover:text-black"},r().createElement(E.IconAt,{size:20,stroke:1.5})),r().createElement("button",{type:"button",className:"text-gray-500 hover:text-black"},r().createElement(E.IconHash,{size:20,stroke:1.5}))),r().createElement("button",{type:"button",className:"ui_btn flex-center border px-4 h-8 text-sm hover:bg-gray-100 rounded-full ml-auto"},"评论"))),r().createElement("div",{className:"domComment_main mt-8"},r().createElement(y.Z,{comments:k,more:t,type:n}),r().createElement(b.Z,{total:Math.ceil(k.total/h.zI),page:M,func:P})))})),g=function(){return r().createElement(l.Routes,null,r().createElement(l.Route,{path:":type/:id"},r().createElement(l.Route,{index:!0,element:r().createElement(k,null)}),r().createElement(l.Route,{path:"hot",element:r().createElement(v,null)})))}}}]);
//# sourceMappingURL=Comment.js.map?version=49b1a042