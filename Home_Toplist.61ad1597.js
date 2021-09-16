"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[7779],{69622:(e,t,a)=>{a.r(t);var l=a(29604);Object.defineProperty(t,"__esModule",{value:!0});var n=a(319),r=(0,l.Z)(n),c=a(48926),s=(0,l.Z)(c),i=a(63038),u=(0,l.Z)(i),o=a(87757),m=(0,l.Z)(o);a(21249),a(68309),a(69600),a(66992),a(41539),a(88674),a(78783),a(33948),a(92222),a(47042);var d=a(87363),f=(0,l.Z)(d),p=a(21624),v=a(66711),y=a(16719),E=a(94184),x=(0,l.Z)(E),g=a(27484),N=(0,l.Z)(g),h=a(63233),b=a(78313),k=a(12503),_=a(74849),w=(0,l.Z)(_);a(79514);var P=function(e){var t=e.tracks,a=void 0===t?[]:t;return f.default.createElement("div",{className:"official_rank_list mb-3"},a.map((function(e,t){return f.default.createElement("div",{tabIndex:"2",className:(0,x.default)("item hover:bg-gray-100 focus:bg-gray-200 focus:outline-none",{"bg-gray-50":t%2==0}),key:e.name},f.default.createElement("span",{className:(0,x.default)("index text-sm w-4",t<3?"text-red-500":"text-gray-300")},t+1),f.default.createElement("span",{className:"status w-4 flex-center"}," 口 "),f.default.createElement("span",{className:"name",title:e.name+e.alia},e.name,e.alia.length>0&&f.default.createElement("span",{className:"text-gray-400"},"(",e.alia.map((function(e){return e})),")")),f.default.createElement("span",{className:"ml-auto text-gray-400",title:e.ar.map((function(e){return e.name})).join("/")},e.ar.map((function(e,t){return f.default.createElement("span",{key:e.id},t>0&&" / ",f.default.createElement(v.Link,{to:"/artist/".concat(e.id),className:"artist text-gray-400 hover:text-gray-500"},e.name))}))))})))};exports.default=(0,d.memo)((function(){var e,t,a,l=(0,p.useSelector)((function(e){return e.home.toplist})).list,n=void 0===l?[]:l,c=(0,d.useState)([]),i=(0,u.default)(c,2),o=i[0],E=i[1],g=(0,d.useState)({}),_=(0,u.default)(g,2),L=_[0],D=_[1],Z=(0,d.useState)(!0),I=(0,u.default)(Z,2),H=I[0],C=I[1],M=(0,p.useDispatch)(),T=function(){var e=(0,s.default)(m.default.mark((function e(){var t,a,l,n,c,s,i,o,d;return m.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.apiToplistDetail)();case 3:return t=e.sent,a=t.list,M((0,b.setTopListsDetail)(a)),e.next=8,Promise.all([].concat((0,r.default)(a.slice(0,4).map((function(e){return(0,h.apiPlaylistDetail)({id:e.id,limit:5})}))),[(0,h.apiToplistArtist)(1)]));case 8:l=e.sent,n=(0,u.default)(l,5),c=n[0],s=n[1],i=n[2],o=n[3],d=n[4],E([c,s,i,o]),D(d),C(!1),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(){return e.apply(this,arguments)}}();return(0,d.useEffect)((function(){T()}),[]),H?f.default.createElement("div",{className:"flex-center w-full h-full"},f.default.createElement(w.default,null)):f.default.createElement("div",{className:"domHome_content px-8 overflow-auto max-h-full flex-auto"},f.default.createElement("div",{className:"domHome_toplist ui_w1100"},f.default.createElement("div",{className:"domHome_toplist_title h1 mb-4"},"官方榜"),f.default.createElement("div",{className:"domHome_toplist_official"},o.map((function(e){var t=e.playlist;return f.default.createElement("div",{key:t.id,className:"official_rank flex"},f.default.createElement(v.Link,{to:"/playlist/music/".concat(t.id),className:"official_rank_cover overflow-hidden relative group"},f.default.createElement("img",{className:"ui_containimg",src:"".concat(t.coverImgUrl,"?param=200y200"),alt:""}),f.default.createElement("div",{className:"absolute inset-0 m-auto flex-center text-white"},f.default.createElement("span",{className:"pt-16"},(0,N.default)(t.updateTime).format("MM月DD日"),"更新")),f.default.createElement("button",{type:"button",className:"opacity-0 group-hover:opacity-100 absolute inset-0 m-auto flex-center rounded-full w-10 h-10 text-red-500 bg-white bg-opacity-50"},f.default.createElement(y.IconPlayerPlay,{size:22,className:"fill-current"}))),f.default.createElement("div",{className:"official_rank_content flex-auto"},f.default.createElement(P,{tracks:t.tracks.slice(0,5)}),f.default.createElement(v.Link,{to:"/playlist/music/".concat(t.id),className:"text-gray-400 hover:text-gray-500"},"查看全部 >")))})),f.default.createElement("div",{className:"official_rank flex"},f.default.createElement(v.Link,{to:"/toplistartist",className:"official_rank_cover overflow-hidden relative group"},"歌手榜",f.default.createElement("div",{className:"absolute inset-0 m-auto flex-center text-white"},f.default.createElement("span",{className:"pt-16"},(0,N.default)(null===(e=L.list)||void 0===e?void 0:e.updateTime).format("MM月DD日"),"更新")),f.default.createElement("button",{type:"button",className:"opacity-0 group-hover:opacity-100 absolute inset-0 m-auto flex-center rounded-full w-10 h-10 text-red-500 bg-white bg-opacity-50"},f.default.createElement(y.IconPlayerPlay,{size:22,className:"fill-current"}))),f.default.createElement("div",{className:"official_rank_content flex-auto"},f.default.createElement("div",{className:"official_rank_list mb-3"},null==L||null===(t=L.list)||void 0===t||null===(a=t.artists)||void 0===a?void 0:a.slice(0,5).map((function(e,t){return f.default.createElement(v.Link,{key:e.id,className:(0,x.default)("item hover:bg-gray-100",{"bg-gray-50":t%2==0}),to:"/artist/".concat(e.id)},f.default.createElement("div",{className:(0,x.default)("index w-4",{"text-red-500":t<3})},t+1),f.default.createElement("div",{className:"status w-4 flex-center"},e.lastRank===t&&"-",e.lastRank<t&&"↓",e.lastRank>t&&"↑"),f.default.createElement("div",{className:"name"},e.name))}))),f.default.createElement(v.Link,{to:"/toplistartist",className:"text-gray-400 hover:text-gray-500"},"查看全部 >")))),f.default.createElement("div",{className:"domHome_toplist_title h1 mb-4"},"全球榜"),f.default.createElement("div",{className:"domHome_toplist_cardlist grid grid-cols-5 gap-5"},n.slice(4).map((function(e){return f.default.createElement("div",{className:"item flex flex-col",key:e.id},f.default.createElement(v.Link,{to:"/playlist/music/".concat(e.id),className:"cover group rounded overflow-hidden relative"},f.default.createElement("span",{className:"playCount flex items-center absolute top-0 right-0 py-0.5 px-2 text-white"},f.default.createElement(y.IconPlayerPlay,{size:12}),(0,k.transPlayCount)(e.playCount)),f.default.createElement("img",{className:"",src:"".concat(e.coverImgUrl,"?param=200y200"),alt:""}),f.default.createElement("button",{type:"button",className:"play opacity-0 group-hover:opacity-100 absolute inset-0 m-auto bg-white bg-op text-red-500 w-10 h-10 rounded-full flex-center bg-opacity-95"},f.default.createElement(y.IconPlayerPlay,{size:20,className:"fill-current"}))),f.default.createElement(v.Link,{to:"/playlist/music/".concat(e.id),className:"name mt-1 text-sm text-gray-600 hover:text-black"},e.name))})))))}))},79514:(e,t,a)=>{a.r(t)}}]);