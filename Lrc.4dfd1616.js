(self.webpackChunkwyy=self.webpackChunkwyy||[]).push([[2995],{3625:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>N});var n=r(2137),a=r(9351),l=r(7757),c=r.n(l),s=(r(4553),r(1249),r(3210),r(8309),r(3804)),o=r.n(s),i=r(5325),u=r(6955),m=r(8556),f=r(1059),d=r(977),v=r(847),h=r(5200),p=r(6232),E=r(4184),g=r.n(E),y=r(3436),b=(0,s.memo)((function(){var e=(0,i.useSelector)((function(e){return e.audio})).currentTime,t=(0,i.useSelector)((function(e){return e.lrc})).lrcList,r=(0,s.useRef)(),n=(0,s.useRef)(),l=(0,s.useState)(0),c=(0,a.Z)(l,2),u=c[0],m=c[1];return(0,s.useEffect)((function(){m(t.findIndex((function(t){return t.time>e}))-1)}),[e]),(0,s.useEffect)((function(){r.current.scrollTop=0}),[t]),(0,s.useEffect)((function(){null!=n&&n.current&&(r.current.scrollTop=n.current.offsetTop-r.current.clientHeight/2)}),[u]),o().createElement("div",{style:{scrollBehavior:"smooth"},className:"whitespace-pre-line select-text text-center text-gray-500 space-y-2 overflow-auto overscroll-contain h-full pt-36",ref:r},t.length?t.map((function(e,t){var r=e.time,a=e.word;return o().createElement("div",{ref:u===t?n:null,key:r,className:g()("leading-5",u===t&&"font-bold text-black")},a.trim()," ")})):o().createElement("div",null,"纯音乐，请您欣赏"))})),w=function(e){var t=e.simiSong,r=void 0===t?[]:t;return o().createElement("div",{className:"pb-4 relative"},o().createElement("div",null,"播放来源：..."),o().createElement("div",{className:"font-bold py-3 text-sm"},"包含这首歌的歌单"),o().createElement("div",null),o().createElement("div",{className:"font-bold py-3 text-sm"},"相似歌曲"),o().createElement("div",null,r.map((function(e){return o().createElement("button",{key:e.id,type:"button",className:"flex text-left w-full rounded hover:bg-gray-100 p-1.5 h-10"},o().createElement("div",{className:"rounded relative overflow-hidden"},o().createElement("img",{src:"".concat(e.album.picUrl,"?param=30y30"),alt:""})),o().createElement("div",{className:"w-0 flex-auto px-2 py-1 text-gray-600"},o().createElement("div",{className:"truncate"},e.name,o().createElement("span",{className:"text-gray-500"},e.alias),"  -  ",e.artists.map((function(e){return e.name})))))}))),o().createElement("div",{className:"absolute pointer-events-none left-0 right-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"}))};const N=(0,s.memo)((function(){var e=(0,i.useDispatch)(),t=(0,v.useHistory)().listen,r=(0,i.useSelector)((function(e){return e.audio})).currentSong,l=(0,i.useSelector)((function(e){return e.lrc})).lyricVisibility,E=(0,i.useSelector)((function(e){return e.audio})).running,N=(0,s.useMemo)((function(){return r.id}),[r]),x=(0,s.useState)(!0),k=(0,a.Z)(x,2),S=k[0],Z=k[1],_=(0,s.useState)([]),z=(0,a.Z)(_,2),j=z[0],I=z[1],T=(0,s.useState)({}),C=(0,a.Z)(T,2),L=C[0],D=C[1],F=(0,s.useState)(1),H=(0,a.Z)(F,2),M=H[0],R=H[1],U=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.dV)({id:N,limit:20,offset:20*(M-1)});case 3:t=e.sent,D(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.wA)({id:N});case 3:t=e.sent,r=t.songs,I(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=(0,n.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:return e.next=4,V();case 4:Z(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){if(!l)return!1;S?A():U()}),[l,M]),(0,s.useEffect)((function(){return t((function(t){e((0,y.Q3)())}))})),l?o().createElement("div",{id:"lrc",className:"absolute inset-x-0 z-10 overflow-hidden"},o().createElement("div",{className:g()("w-full h-full bg-white overflow-auto transform")},o().createElement("div",{className:"lrc_inner m-auto",style:{width:888}},o().createElement("div",{className:"lrc_header flex justify-between"},o().createElement("div",{className:"left"},o().createElement("div",{className:"relative"},o().createElement("div",{id:"stylus",className:"mt-16 mb-10 relative m-auto w-min duration-500 transition-transform z-10",style:E?{transform:"rotate(40deg)"}:{}},o().createElement("div",{className:"point shadow relative transform -translate-y-1/2 rounded-full bg-gray-300 w-5 h-5 border-8 border-white bg-white",style:{zIndex:2}}),o().createElement("div",{className:"handle absolute top-0 left-1/2 shadow bg-white h-2 w-20 origin-top-left",style:{transform:"rotate(45deg) translate(0, -50%)",zIndex:1}},o().createElement("div",{className:" absolute left-full bg-white shadow w-12 h-2 origin-top-left",style:{transform:"rotate(-45deg) translate(-10%, 0)"}},o().createElement("div",{className:"shadow w-4 h-4 absolute left-full -top-1 bg-white"})))),o().createElement("div",{className:" rounded-full bg-gray-300 p-2.5 w-64 h-64"},o().createElement("div",{className:g()("flex-center rounded-full p-9",{on:E}),id:"record"},o().createElement("img",{className:"rounded-full border-8 border-black",src:r.al.picUrl,alt:""})))),o().createElement("div",{className:"flex mt-4 justify-between"},o().createElement(d.Z,{stroke:"2",id:N,size:24,className:"w-10 h-10 flex-center rounded-full bg-gray-100 hover:bg-gray-200"}),o().createElement("button",{type:"button",className:"w-10 h-10 flex-center rounded-full bg-gray-100 hover:bg-gray-200"},o().createElement(h.IconFolderPlus,{size:24,stroke:1})),o().createElement("button",{type:"button",className:"w-10 h-10 flex-center rounded-full bg-gray-100 hover:bg-gray-200"},o().createElement(h.IconCloudDownload,{size:24,stroke:1})),o().createElement("button",{type:"button",className:"w-10 h-10 flex-center rounded-full bg-gray-100 hover:bg-gray-200"},o().createElement(h.IconShare,{size:24,stroke:1})))),o().createElement("div",{className:"center overflow-auto pt-5",style:{width:300}},o().createElement("div",{className:"text-2xl text-center"},r.name),o().createElement("div",{className:"flex justify-center mt-2 whitespace-nowrap"},o().createElement("div",{className:"truncate"},r.ar.map((function(e){return o().createElement(v.Link,{key:e.id,to:"/artist/".concat(e.id),className:"ui_text_gray_hover"},e.name)}))),"  -  ",o().createElement("div",{className:"truncate"},o().createElement(v.Link,{to:"/playlist/album/".concat(r.al.id),className:"ui_text_gray_hover"},r.al.name))),o().createElement("div",{className:"relative"},o().createElement("div",{className:"relative mt-8",style:{height:330}},o().createElement(b,null)),o().createElement("div",{className:"absolute pointer-events-none left-0 right-0 top-0 h-6 bg-gradient-to-b from-white to-transparent"}),o().createElement("div",{className:"absolute pointer-events-none left-0 right-0 bottom-0 h-6 bg-gradient-to-t from-white to-transparent"}))),o().createElement("div",{className:"right flex-none mt-28 h-72 overflow-auto",style:{width:244}},S?o().createElement("div",{className:"flex justify-center"},o().createElement(m.Z,null)):o().createElement(w,{simiSong:j}))),o().createElement("div",{className:"lrc_main mt-14 flex justify-center"},o().createElement("div",{style:{width:556}},S?o().createElement("div",{className:"flex justify-center"},o().createElement(m.Z,null)):o().createElement(o().Fragment,null,o().createElement(p.Z,{comments:L,more:N,type:"song"}),o().createElement(f.Z,{total:Math.ceil(L.total/20),page:1,func:R}))))))):null}))}}]);