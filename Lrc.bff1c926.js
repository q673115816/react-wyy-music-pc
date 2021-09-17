"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[2995],{7448:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var r=n(5861),a=n(885),l=n(7757),c=n.n(l),s=n(7363),o=n.n(s),i=n(3233),u=n(4849),m=n(8124),d=n(6711),f=n(2720),v=n(626),h=n(1343),E=n(6719),g=n(7653),p=n(4184),y=n.n(p);const b=(0,s.memo)((function(){var e=(0,h.C)((function(e){return e.audio})).currentSong,t=(0,h.C)((function(e){return e.audio})).running;return o().createElement("div",{className:"left"},o().createElement("div",{className:"relative"},o().createElement("div",{id:"stylus",className:"mt-16 mb-10 relative m-auto w-min duration-500 transition-transform z-10",style:t?{transform:"rotate(40deg)"}:{}},o().createElement("div",{className:"point shadow relative transform -translate-y-1/2 rounded-full bg-gray-300 w-5 h-5 border-8 border-white bg-white",style:{zIndex:2}}),o().createElement("div",{className:"handle absolute top-0 left-1/2 shadow bg-white h-2 w-20 origin-top-left",style:{transform:"rotate(45deg) translate(0, -50%)",zIndex:1}},o().createElement("div",{className:" absolute left-full bg-white shadow w-12 h-2 origin-top-left",style:{transform:"rotate(-45deg) translate(-10%, 0)"}},o().createElement("div",{className:"shadow w-4 h-4 absolute left-full -top-1 bg-white"})))),o().createElement("div",{className:" rounded-full bg-gray-300 p-2.5 w-64 h-64"},o().createElement("div",{className:y()("flex-center rounded-full p-9",{on:t}),id:"record"},o().createElement("img",{className:"rounded-full border-8 border-black",src:e.al.picUrl,alt:""})))),o().createElement("div",{className:"flex mt-4 justify-between"},o().createElement(g.Z,{stroke:"2",id:e.id,size:24,className:"w-10 h-10 flex-center rounded-full bg-gray-100 hover:bg-gray-200"}),o().createElement("button",{type:"button",className:"w-10 h-10 flex-center rounded-full bg-gray-100 hover:bg-gray-200"},o().createElement(E.IconFolderPlus,{size:24,stroke:1})),o().createElement("button",{type:"button",className:"w-10 h-10 flex-center rounded-full bg-gray-100 hover:bg-gray-200"},o().createElement(E.IconCloudDownload,{size:24,stroke:1})),o().createElement("button",{type:"button",className:"w-10 h-10 flex-center rounded-full bg-gray-100 hover:bg-gray-200"},o().createElement(E.IconShare,{size:24,stroke:1}))))}));n(4553),n(1249),n(3210),n(8309);var w=(0,s.memo)((function(){var e=(0,h.C)((function(e){return e.audio})).currentTime,t=(0,h.C)((function(e){return e.lrc})).lrcList,n=(0,s.useRef)(null),r=(0,s.useRef)(null),l=(0,s.useState)(0),c=(0,a.Z)(l,2),i=c[0],u=c[1];return(0,s.useEffect)((function(){u(t.findIndex((function(t){return t.time>e}))-1)}),[e]),(0,s.useEffect)((function(){n.current.scrollTop=0}),[t]),(0,s.useEffect)((function(){null!=r&&r.current&&(n.current.scrollTop=r.current.offsetTop-n.current.clientHeight/2)}),[i]),o().createElement("div",{style:{scrollBehavior:"smooth"},className:"whitespace-pre-line select-text text-center text-gray-500 space-y-2 overflow-auto overscroll-contain h-full pt-36",ref:n},t.length?t.map((function(e,t){var n=e.time,a=e.word;return o().createElement("div",{ref:i===t?r:null,key:n,className:y()("leading-5",i===t&&"font-bold text-black")},a.trim()," ")})):o().createElement("div",null,"纯音乐，请您欣赏"))}));const N=(0,s.memo)((function(){var e=(0,h.C)((function(e){return e.audio})).currentSong;return o().createElement("div",{className:"center overflow-auto pt-5",style:{width:300}},o().createElement("div",{className:"text-2xl text-center"},e.name),o().createElement("div",{className:"flex justify-center mt-2 whitespace-nowrap"},o().createElement("div",{className:"truncate"},e.ar.map((function(e){return o().createElement(d.Link,{key:e.id,to:"/artist/".concat(e.id),className:"ui_text_gray_hover"},e.name)}))),"  -  ",o().createElement("div",{className:"truncate"},o().createElement(d.Link,{to:"/playlist/album/".concat(e.al.id),className:"ui_text_gray_hover"},e.al.name))),o().createElement("div",{className:"relative"},o().createElement("div",{className:"relative mt-8",style:{height:330}},o().createElement(w,null)),o().createElement("div",{className:"absolute pointer-events-none left-0 right-0 top-0 h-6 bg-gradient-to-b from-white to-transparent"}),o().createElement("div",{className:"absolute pointer-events-none left-0 right-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent"})))})),x=(0,s.memo)((function(e){var t=e.simiSong,n=void 0===t?[]:t,r=e.loading,a=void 0!==r&&r;return o().createElement("div",{className:"right flex-none mt-28 h-72 overflow-auto",style:{width:244}},a?o().createElement("div",{className:"flex justify-center"},o().createElement(u.Z,null)):o().createElement("div",{className:"pb-4 relative"},o().createElement("div",null,"播放来源：..."),o().createElement("div",{className:"font-bold py-3 text-sm"},"包含这首歌的歌单"),o().createElement("div",null),o().createElement("div",{className:"font-bold py-3 text-sm"},"相似歌曲"),o().createElement("div",null,n.map((function(e){return o().createElement("button",{key:e.id,type:"button",className:"flex text-left w-full rounded hover:bg-gray-100 p-1.5 h-10"},o().createElement("div",{className:"rounded relative overflow-hidden"},o().createElement("img",{src:"".concat(e.album.picUrl,"?param=30y30"),alt:""})),o().createElement("div",{className:"w-0 flex-auto px-2 py-1 text-gray-600"},o().createElement("div",{className:"truncate"},e.name,o().createElement("span",{className:"text-gray-500"},e.alias),"  -  ",e.artists.map((function(e){return e.name})))))}))),o().createElement("div",{className:"absolute pointer-events-none left-0 right-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"})))})),k=(0,s.memo)((function(){var e=(0,h.T)(),t=(0,d.useHistory)().listen,n=(0,h.C)((function(e){return e.audio})).currentSong,l=(0,h.C)((function(e){return e.lrc})).lyricVisibility,E=(0,s.useState)(!0),g=(0,a.Z)(E,2),p=g[0],y=g[1],w=(0,s.useState)([]),k=(0,a.Z)(w,2),Z=k[0],S=k[1],C=(0,s.useState)({}),_=(0,a.Z)(C,2),z=_[0],j=_[1],I=(0,s.useState)(1),T=(0,a.Z)(I,2),L=T[0],H=T[1],F=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.dV)({id:n.id,limit:20,offset:20*(L-1)});case 3:t=e.sent,j(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=(0,r.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.wA)({id:n.id});case 3:t=e.sent,r=t.songs,S(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:return e.next=4,R();case 4:y(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){l&&(p?U():F())}),[l,L,n.id]),(0,s.useEffect)((function(){return t((function(t){e((0,v.setLyricHide)())}))}),[]),l?o().createElement("div",{id:"lrc",className:"absolute inset-x-0 z-10 overflow-hidden"},o().createElement("div",{className:"w-full h-full bg-white overflow-auto transform"},o().createElement("div",{className:"lrc_inner m-auto",style:{width:888}},o().createElement("div",{className:"lrc_header flex justify-between"},o().createElement(b,null),o().createElement(N,null),o().createElement(x,{simiSong:Z,loading:p})),o().createElement("div",{className:"lrc_main mt-14 flex justify-center"},o().createElement("div",{style:{width:556}},p?o().createElement("div",{className:"flex justify-center"},o().createElement(u.Z,null)):o().createElement(o().Fragment,null,o().createElement(f.Z,{comments:z,more:n.id,type:"song"}),o().createElement(m.Z,{total:Math.ceil(z.total/20),page:L,func:H}))))))):null}))}}]);