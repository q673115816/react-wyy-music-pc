"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[9945],{3398:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var l=n(885),i=(n(1249),n(7363)),a=n.n(i),r=n(6711),s=(n(9826),n(9653),n(8309),n(4184)),o=n.n(s),c=n(9709),m=n(7568),d=n(6508),u=n(1343),f=n(4849),v=function(e){var t=e.id,n=(0,u.T)(),l=(0,u.C)(d.VideoListSelector).groupList;return a().createElement("div",{className:"group_select_box absolute top-100 p-5 bg-white overflow-auto shadow"},a().createElement("div",{className:"border-b pb-2"},a().createElement("button",{type:"button",className:o()("group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor",0===t?"text-red-500 bg-red-50":""),onClick:function(){return n((0,d.setVideoListId)({id:0}))}},"全部视频")),a().createElement("div",{className:"group_select_list grid grid-cols-6 gap-y-5 p-4"},l.map((function(e){return a().createElement("button",{type:"button",className:o()("group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor",e.id===t?"text-red-500 bg-red-50":""),key:e.id,onClick:function(){return n((0,d.setVideoListId)({id:e.id}))}},e.name)}))))};const b=(0,i.memo)(v),E=(0,i.memo)((function(){var e=(0,u.T)(),t=(0,u.C)(d.VideoListSelector),n=t.id,r=(t.initStatus,t.groupList),s=t.categoryList,v=t.videoList,E=(0,i.useState)(!1),x=(0,l.Z)(E,2),h=x[0],_=x[1],p=(0,i.useMemo)((function(){var e;return(null===(e=r.find((function(e){return e.id===Number(n)})))||void 0===e?void 0:e.name)||"全部视频"}),[n]),L=(0,i.useRef)(null),N=(0,i.useRef)(null);return(0,c.Z)((function(){return e((0,d.handleAddList)(n))}),L,N),(0,i.useEffect)((function(){return e((0,d.handlePrevInit)()),function(){e((0,d.setVideoListInit)())}}),[]),(0,i.useEffect)((function(){e((0,d.setVideoListInit)())}),[n]),a().createElement("div",{className:"domVideoList_content px-8 overflow-auto flex-auto",ref:L},a().createElement("div",{className:"video_sort_filter_bar flex items-center justify-between"},a().createElement("div",{className:"group_select_wrap relative z-10"},a().createElement("button",{type:"button",className:"group_select_button border rounded-full hover:bg-gray-100 text-sm",onClick:function(){return _(!h)}},p,">"),h&&a().createElement(b,{id:n})),a().createElement("div",{className:"recommend_nav divide-x flex"},s.map((function(t){return a().createElement("div",{key:t.id},a().createElement("button",{type:"button",className:o()("recommend_nav_link rounded-full px-2 mx-1",n===t.id?"bg-red-50 text-red-500":"ui_text_black_hover"),onClick:function(){return e((0,d.setVideoListId)({id:t.id}))}},t.name))})))),a().createElement("div",{className:"my-4"},a().createElement(m.Z,{list:v}),a().createElement("div",{ref:N,className:"flex-center"},a().createElement(f.Z,null))))}));var x=n(6719),h=n(4953),_=n(5131),p=["内地","港台","欧美","日本","韩国"];const L=(0,i.memo)((function(){var e=(0,u.T)(),t=(0,u.C)(_.MVListSelector),n=t.firstArea,l=t.topArea,s=t.first,c=t.hot,d=t.wy,v=t.top,b=t.timestamp,E=(0,i.useMemo)((function(){return Date.now()-b>36e5}),[b]);return(0,i.useEffect)((function(){E&&e((0,_.handleInit)({firstArea:n,topArea:l}))}),[E]),E?a().createElement("div",{className:"w-full h-full flex-center"},a().createElement(f.Z,null)):a().createElement("div",{className:"domVideoList_content px-8 overflow-auto max-h-full flex-auto"},a().createElement("div",{className:"domMVList_sublist"},a().createElement("div",{className:"domMVList_header mb-5 flex justify-between items-center"},a().createElement(r.Link,{to:"/allmv?order=最新&area=".concat(n),className:"domMVList_subLink font-bold text-base flex items-center"},"最新MV",a().createElement(x.IconChevronRight,{size:20})),a().createElement("div",{className:"recommend_nav flex divide-x space-x-1"},p.map((function(t){return a().createElement("div",{className:"item",key:t},a().createElement("button",{onClick:function(){return e((0,_.handleChangeFirstArea)(t))},type:"button",className:o()("link rounded-full px-2.5",n===t?"text-red-500 bg-red-50":"ui_text_black_hover")},t))})))),a().createElement(m.Z,{list:s})),a().createElement("div",{className:"domMVList_sublist"},a().createElement("div",{className:"domMVList_header mt-8 mb-5 flex justify-between items-center"},a().createElement(r.Link,{to:"/allmv?order=最热",className:"domMVList_subLink font-bold text-base flex items-center"},"热播MV",a().createElement(x.IconChevronRight,{size:20}))),a().createElement(m.Z,{list:c})),a().createElement("div",{className:"domMVList_sublist"},a().createElement("div",{className:"domMVList_header mt-8 mb-5 flex justify-between items-center"},a().createElement(r.Link,{to:"/allmv?type=网易出品&order=最新",className:"domMVList_subLink font-bold text-base flex items-center"},"网易出品",a().createElement(x.IconChevronRight,{size:20}))),a().createElement(m.Z,{list:d})),a().createElement("div",{className:"domMVList_header mt-8 mb-5 flex justify-between items-center"},a().createElement(r.Link,{to:"/toplist-mv/",className:"domMVList_subLink font-bold text-base flex items-center"},"MV排行榜",a().createElement(x.IconChevronRight,{size:20})),a().createElement("div",{className:"recommend_nav flex divide-x space-x-1"},p.map((function(t){return a().createElement("div",{className:"item",key:t},a().createElement("button",{onClick:function(){return e((0,_.handleChangeTopArea)(t))},type:"button",className:o()("link rounded-full px-2.5",l===t?"text-red-500 bg-red-50":"ui_text_black_hover")},t))})))),a().createElement(h.Z,{list:v,schema:[["评论","播放"],["收藏","分享","下载MV","复制链接"]]}))}));var N=[["视频","/video/videolist"],["MV","/video/mvlist"]];const k=(0,i.memo)((function(){return a().createElement("div",{className:"domVideoList flex flex-col h-full"},a().createElement("div",{className:"domVideoList_header ui_header text-base space-x-4"},N.map((function(e){var t=(0,l.Z)(e,2),n=t[0],i=t[1];return a().createElement(r.NavLink,{key:n,className:"domVideoList_link",activeClassName:"text-xl ui_underline font-bold",to:i},n)}))),a().createElement(r.Switch,null,a().createElement(r.Route,{path:"/video/videolist"},a().createElement(E,null)),a().createElement(r.Route,{path:"/video/mvlist"},a().createElement(L,null)),a().createElement(r.Redirect,{to:"/video/videolist"})))}))}}]);