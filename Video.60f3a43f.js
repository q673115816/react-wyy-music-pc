"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[945],{3419:(e,t,n)=>{n.r(t),n.d(t,{default:()=>V});var l=n(7363),r=n.n(l),a=n(6711),i=n(885),s=(n(1249),[["视频","/video/videolist"],["MV","/video/mvlist"]]);const c=(0,l.memo)((function(){return r().createElement("div",{className:"domVideoList flex flex-col h-full"},r().createElement("div",{className:"domVideoList_header ui_header text-base space-x-4"},s.map((function(e){var t=(0,i.Z)(e,2),n=t[0],l=t[1];return r().createElement(a.NavLink,{key:n,className:function(e){return e.isActive?"text-xl ui_underline font-bold":""},to:l},n)}))),r().createElement(a.Outlet,null))}));n(9826),n(1539),n(9653),n(8309);var o=n(4184),m=n.n(o),u=n(4716),d=n(4907),f=n(2940),v=n(9638),E=n(8157),b=function(e){var t=e.id,n=(0,v.T)(),l=(0,v.C)(f.VideoListSelector).groupList;return r().createElement("div",{className:"group_select_box absolute top-100 p-5 bg-white overflow-auto shadow"},r().createElement("div",{className:"border-b pb-2"},r().createElement("button",{type:"button",className:m()("group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor",0===t?"text-red-500 bg-red-50":""),onClick:function(){return n((0,f.setVideoListId)({id:0}))}},"全部视频")),r().createElement("div",{className:"group_select_list grid grid-cols-6 gap-y-5 p-4"},l.map((function(e){return r().createElement("button",{type:"button",className:m()("group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor",e.id===t?"text-red-500 bg-red-50":""),key:e.id,onClick:function(){return n((0,f.setVideoListId)({id:e.id}))}},e.name)}))))};const x=(0,l.memo)(b),h=(0,l.memo)((function(){var e=(0,v.T)(),t=(0,v.C)(f.VideoListSelector),n=t.id,a=(t.initStatus,t.groupList),s=t.categoryList,c=t.videoList,o=(0,l.useState)(!1),b=(0,i.Z)(o,2),h=b[0],p=b[1],_=(0,l.useMemo)((function(){var e;return(null===(e=a.find((function(e){return e.id===Number(n)})))||void 0===e?void 0:e.name)||"全部视频"}),[n]),N=(0,l.useRef)(null),L=(0,l.useRef)(null);return(0,u.Z)((function(){return e((0,f.handleAddList)(n))}),N,L),(0,l.useEffect)((function(){return e((0,f.handlePrevInit)()),function(){e((0,f.setVideoListInit)())}}),[]),(0,l.useEffect)((function(){e((0,f.setVideoListInit)())}),[n]),r().createElement("div",{className:"domVideoList_content px-8 overflow-auto flex-auto",ref:N},r().createElement("div",{className:"video_sort_filter_bar flex items-center justify-between"},r().createElement("div",{className:"group_select_wrap relative z-10"},r().createElement("button",{type:"button",className:"group_select_button border rounded-full hover:bg-gray-100 text-sm",onClick:function(){return p(!h)}},_,">"),h&&r().createElement(x,{id:n})),r().createElement("div",{className:"recommend_nav divide-x flex"},s.map((function(t){return r().createElement("div",{key:t.id},r().createElement("button",{type:"button",className:m()("recommend_nav_link rounded-full px-2 mx-1",n===t.id?"bg-red-50 text-red-500":"ui_text_black_hover"),onClick:function(){return e((0,f.setVideoListId)({id:t.id}))}},t.name))})))),r().createElement("div",{className:"my-4"},r().createElement(d.Z,{list:c}),r().createElement("div",{ref:L,className:"flex-center"},r().createElement(E.Z,null))))}));var p=n(6719),_=n(3745),N=n(7196),L=["内地","港台","欧美","日本","韩国"];const k=(0,l.memo)((function(){var e=(0,v.T)(),t=(0,v.C)(N.MVListSelector),n=t.firstArea,i=t.topArea,s=t.first,c=t.hot,o=t.wy,u=t.top,f=t.timestamp,b=(0,l.useMemo)((function(){return Date.now()-f>36e5}),[f]);return(0,l.useEffect)((function(){b&&e((0,N.handleInit)({firstArea:n,topArea:i}))}),[b]),b?r().createElement("div",{className:"w-full h-full flex-center"},r().createElement(E.Z,null)):r().createElement("div",{className:"domVideoList_content px-8 overflow-auto max-h-full flex-auto"},r().createElement("div",{className:"domMVList_sublist"},r().createElement("div",{className:"domMVList_header mb-5 flex justify-between items-center"},r().createElement(a.Link,{to:"/mv-all?order=最新&area=".concat(n),className:"domMVList_subLink font-bold text-base flex items-center"},"最新MV",r().createElement(p.IconChevronRight,{size:20})),r().createElement("div",{className:"recommend_nav flex divide-x space-x-1"},L.map((function(t){return r().createElement("div",{className:"item",key:t},r().createElement("button",{onClick:function(){return e((0,N.handleChangeFirstArea)(t))},type:"button",className:m()("link rounded-full px-2.5",n===t?"text-red-500 bg-red-50":"ui_text_black_hover")},t))})))),r().createElement(d.Z,{list:s})),r().createElement("div",{className:"domMVList_sublist"},r().createElement("div",{className:"domMVList_header mt-8 mb-5 flex justify-between items-center"},r().createElement(a.Link,{to:"/mv-all?order=最热",className:"domMVList_subLink font-bold text-base flex items-center"},"热播MV",r().createElement(p.IconChevronRight,{size:20}))),r().createElement(d.Z,{list:c})),r().createElement("div",{className:"domMVList_sublist"},r().createElement("div",{className:"domMVList_header mt-8 mb-5 flex justify-between items-center"},r().createElement(a.Link,{to:"/mv-all?type=网易出品&order=最新",className:"domMVList_subLink font-bold text-base flex items-center"},"网易出品",r().createElement(p.IconChevronRight,{size:20}))),r().createElement(d.Z,{list:o})),r().createElement("div",{className:"domMVList_header mt-8 mb-5 flex justify-between items-center"},r().createElement(a.Link,{to:"/toplist-mv/",className:"domMVList_subLink font-bold text-base flex items-center"},"MV排行榜",r().createElement(p.IconChevronRight,{size:20})),r().createElement("div",{className:"recommend_nav flex divide-x space-x-1"},L.map((function(t){return r().createElement("div",{className:"item",key:t},r().createElement("button",{onClick:function(){return e((0,N.handleChangeTopArea)(t))},type:"button",className:m()("link rounded-full px-2.5",i===t?"text-red-500 bg-red-50":"ui_text_black_hover")},t))})))),r().createElement(_.Z,{list:u,schema:[["评论","播放"],["收藏","分享","下载MV","复制链接"]]}))})),V=function(){return r().createElement(a.Routes,null,r().createElement(a.Route,{element:r().createElement(c,null)},r().createElement(a.Route,{path:"videolist",element:r().createElement(h,null)}),r().createElement(a.Route,{path:"mvlist",element:r().createElement(k,null)}),r().createElement(a.Route,{path:"*",element:r().createElement(a.Navigate,{to:"videolist",replace:!0})})))}}}]);
//# sourceMappingURL=Video.60f3a43f.js.map