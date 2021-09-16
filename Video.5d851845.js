"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[9945],{19160:(e,t,a)=>{a.r(t);var l=a(29604);Object.defineProperty(t,"__esModule",{value:!0}),a(21249);var r=a(87363),n=(0,l.Z)(r),d=a(1343),u=a(66711),i=a(94184),s=(0,l.Z)(i),o=a(16719),c=a(95996),m=(0,l.Z)(c),f=a(44953),v=(0,l.Z)(f),p=a(74849),b=(0,l.Z)(p),_=a(95131),E=["内地","港台","欧美","日本","韩国"];exports.default=(0,r.memo)((function(){var e=(0,d.useAppDispatch)(),t=(0,d.useAppSelector)(_.MVListSelector),a=t.firstArea,l=t.topArea,i=t.first,c=t.hot,f=t.wy,p=t.top,x=t.timestamp,h=(0,r.useMemo)((function(){return Date.now()-x>36e5}),[x]);return(0,r.useEffect)((function(){h&&e((0,_.handleInit)({firstArea:a,topArea:l}))}),[h]),h?n.default.createElement("div",{className:"w-full h-full flex-center"},n.default.createElement(b.default,null)):n.default.createElement("div",{className:"domVideoList_content px-8 overflow-auto max-h-full flex-auto"},n.default.createElement("div",{className:"domMVList_sublist"},n.default.createElement("div",{className:"domMVList_header mb-5 flex justify-between items-center"},n.default.createElement(u.Link,{to:"/allmv?order=最新&area=".concat(a),className:"domMVList_subLink font-bold text-base flex items-center"},"最新MV",n.default.createElement(o.IconChevronRight,{size:20})),n.default.createElement("div",{className:"recommend_nav flex divide-x space-x-1"},E.map((function(t){return n.default.createElement("div",{className:"item",key:t},n.default.createElement("button",{onClick:function(){return e((0,_.handleChangeFirstArea)(t))},type:"button",className:(0,s.default)("link rounded-full px-2.5",a===t?"text-red-500 bg-red-50":"ui_text_black_hover")},t))})))),n.default.createElement(m.default,{list:i})),n.default.createElement("div",{className:"domMVList_sublist"},n.default.createElement("div",{className:"domMVList_header mt-8 mb-5 flex justify-between items-center"},n.default.createElement(u.Link,{to:"/allmv?order=最热",className:"domMVList_subLink font-bold text-base flex items-center"},"热播MV",n.default.createElement(o.IconChevronRight,{size:20}))),n.default.createElement(m.default,{list:c})),n.default.createElement("div",{className:"domMVList_sublist"},n.default.createElement("div",{className:"domMVList_header mt-8 mb-5 flex justify-between items-center"},n.default.createElement(u.Link,{to:"/allmv?type=网易出品&order=最新",className:"domMVList_subLink font-bold text-base flex items-center"},"网易出品",n.default.createElement(o.IconChevronRight,{size:20}))),n.default.createElement(m.default,{list:f})),n.default.createElement("div",{className:"domMVList_header mt-8 mb-5 flex justify-between items-center"},n.default.createElement(u.Link,{to:"/toplist-mv/",className:"domMVList_subLink font-bold text-base flex items-center"},"MV排行榜",n.default.createElement(o.IconChevronRight,{size:20})),n.default.createElement("div",{className:"recommend_nav flex divide-x space-x-1"},E.map((function(t){return n.default.createElement("div",{className:"item",key:t},n.default.createElement("button",{onClick:function(){return e((0,_.handleChangeTopArea)(t))},type:"button",className:(0,s.default)("link rounded-full px-2.5",l===t?"text-red-500 bg-red-50":"ui_text_black_hover")},t))})))),n.default.createElement(v.default,{list:p,schema:[["评论","播放"],["收藏","分享","下载MV","复制链接"]]}))}))},81688:(e,t,a)=>{a.r(t);var l=a(29604);Object.defineProperty(t,"__esModule",{value:!0}),a(21249),a(68309);var r=a(94184),n=(0,l.Z)(r),d=a(66508),u=a(87363),i=(0,l.Z)(u),s=a(1343);a(77031);var o=function(e){var t=e.id,a=(0,s.useAppDispatch)(),l=(0,s.useAppSelector)(d.VideoListSelector).groupList;return i.default.createElement("div",{className:"group_select_box absolute top-100 p-5 bg-white overflow-auto shadow"},i.default.createElement("div",{className:"border-b pb-2"},i.default.createElement("button",{type:"button",className:(0,n.default)("group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor",0===t?"text-red-500 bg-red-50":""),onClick:function(){return a((0,d.setVideoListId)({id:0}))}},"全部视频")),i.default.createElement("div",{className:"group_select_list grid grid-cols-6 gap-y-5 p-4"},l.map((function(e){return i.default.createElement("button",{type:"button",className:(0,n.default)("group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor",e.id===t?"text-red-500 bg-red-50":""),key:e.id,onClick:function(){return a((0,d.setVideoListId)({id:e.id}))}},e.name)}))))};exports.default=(0,u.memo)(o)},19793:(e,t,a)=>{a.r(t);var l=a(29604);Object.defineProperty(t,"__esModule",{value:!0});var r=a(81688);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return(0,l.Z)(r).default}})},35378:(e,t,a)=>{a.r(t);var l=a(29604);Object.defineProperty(t,"__esModule",{value:!0});var r=a(63038),n=(0,l.Z)(r);a(69826),a(9653),a(68309),a(21249);var d=a(87363),u=(0,l.Z)(d),i=a(94184),s=(0,l.Z)(i),o=a(99709),c=(0,l.Z)(o),m=a(95996),f=(0,l.Z)(m),v=a(66508),p=a(1343),b=a(74849),_=(0,l.Z)(b),E=a(19793),x=(0,l.Z)(E);exports.default=(0,d.memo)((function(){var e=(0,p.useAppDispatch)(),t=(0,p.useAppSelector)(v.VideoListSelector),a=t.id,l=(t.initStatus,t.groupList),r=t.categoryList,i=t.videoList,o=(0,d.useState)(!1),m=(0,n.default)(o,2),b=m[0],E=m[1],h=(0,d.useMemo)((function(){var e;return(null===(e=l.find((function(e){return e.id===Number(a)})))||void 0===e?void 0:e.name)||"全部视频"}),[a]),L=(0,d.useRef)(null),N=(0,d.useRef)(null);return(0,c.default)((function(){return e((0,v.handleAddList)(a))}),L,N),(0,d.useEffect)((function(){return e((0,v.handlePrevInit)()),function(){e((0,v.setVideoListInit)())}}),[]),(0,d.useEffect)((function(){e((0,v.setVideoListInit)())}),[a]),u.default.createElement("div",{className:"domVideoList_content px-8 overflow-auto flex-auto",ref:L},u.default.createElement("div",{className:"video_sort_filter_bar flex items-center justify-between"},u.default.createElement("div",{className:"group_select_wrap relative z-10"},u.default.createElement("button",{type:"button",className:"group_select_button border rounded-full hover:bg-gray-100 text-sm",onClick:function(){return E(!b)}},h,">"),b&&u.default.createElement(x.default,{id:a})),u.default.createElement("div",{className:"recommend_nav divide-x flex"},r.map((function(t){return u.default.createElement("div",{key:t.id},u.default.createElement("button",{type:"button",className:(0,s.default)("recommend_nav_link rounded-full px-2 mx-1",a===t.id?"bg-red-50 text-red-500":"ui_text_black_hover"),onClick:function(){return e((0,v.setVideoListId)({id:t.id}))}},t.name))})))),u.default.createElement("div",{className:"my-4"},u.default.createElement(f.default,{list:i}),u.default.createElement("div",{ref:N,className:"flex-center"},u.default.createElement(_.default,null))))}))},82332:(e,t,a)=>{a.r(t);var l=a(29604);Object.defineProperty(t,"__esModule",{value:!0});var r=a(63038),n=(0,l.Z)(r);a(21249);var d=a(87363),u=(0,l.Z)(d),i=a(66711),s=a(35378),o=(0,l.Z)(s),c=a(19160),m=(0,l.Z)(c),f=[["视频","/video/videolist"],["MV","/video/mvlist"]];exports.default=(0,d.memo)((function(){return u.default.createElement("div",{className:"domVideoList flex flex-col h-full"},u.default.createElement("div",{className:"domVideoList_header ui_header text-base space-x-4"},f.map((function(e){var t=(0,n.default)(e,2),a=t[0],l=t[1];return u.default.createElement(i.NavLink,{key:a,className:"domVideoList_link",activeClassName:"text-xl ui_underline font-bold",to:l},a)}))),u.default.createElement(i.Switch,null,u.default.createElement(i.Route,{path:"/video/videolist"},u.default.createElement(o.default,null)),u.default.createElement(i.Route,{path:"/video/mvlist"},u.default.createElement(m.default,null)),u.default.createElement(i.Redirect,{to:"/video/videolist"})))}))},77031:(e,t,a)=>{a.r(t)}}]);