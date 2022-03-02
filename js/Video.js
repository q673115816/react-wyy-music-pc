"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[945],{4581:(e,t,n)=>{n.r(t),n.d(t,{default:()=>V});var r=n(7363),l=n.n(r),a=n(6711);function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var o=[["视频","/video/videolist"],["MV","/video/mvlist"]];const c=(0,r.memo)((function(){return l().createElement("div",{className:"domVideoList flex flex-col h-full"},l().createElement("div",{className:"domVideoList_header ui_header text-base space-x-4"},o.map((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){o=!0,l=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw l}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];return l().createElement(a.NavLink,{key:o,className:function(e){return e.isActive?"text-xl ui_underline font-bold":""},to:c},o)}))),l().createElement(a.Outlet,null))}));var s=n(4184),u=n.n(s),m=n(534),d=n(9227),f=n(9705),v=n(4837),b=n(4719),h=function(e){var t=e.id,n=(0,v.T)(),r=(0,v.C)(f.VideoListSelector).groupList;return l().createElement("div",{className:"group_select_box absolute top-100 p-5 bg-white overflow-auto shadow"},l().createElement("div",{className:"border-b pb-2"},l().createElement("button",{type:"button",className:u()("group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor",0===t?"text-red-500 bg-red-50":""),onClick:function(){return n((0,f.setVideoListId)({id:0}))}},"全部视频")),l().createElement("div",{className:"group_select_list grid grid-cols-6 gap-y-5 p-4"},r.map((function(e){return l().createElement("button",{type:"button",className:u()("group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor",e.id===t?"text-red-500 bg-red-50":""),key:e.id,onClick:function(){return n((0,f.setVideoListId)({id:e.id}))}},e.name)}))))};const p=(0,r.memo)(h);function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=function(){var e,t,n=(0,v.T)(),a=(0,v.C)(f.VideoListSelector),i=a.id,o=(a.initStatus,a.groupList),c=a.categoryList,s=a.videoList,h=(e=(0,r.useState)(!1),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){o=!0,l=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw l}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),y=h[0],x=h[1],_=(0,r.useMemo)((function(){var e;return(null===(e=o.find((function(e){return e.id===Number(i)})))||void 0===e?void 0:e.name)||"全部视频"}),[i]),g=(0,r.useRef)(null),N=(0,r.useRef)(null);return(0,m.Z)((function(){return n((0,f.handleAddList)(i))}),g,N),(0,r.useEffect)((function(){return n((0,f.handlePrevInit)()),function(){n((0,f.setVideoListInit)())}}),[]),(0,r.useEffect)((function(){n((0,f.setVideoListInit)())}),[i]),l().createElement("div",{className:"domVideoList_content px-8 overflow-auto flex-auto",ref:g},l().createElement("div",{className:"video_sort_filter_bar flex items-center justify-between"},l().createElement("div",{className:"group_select_wrap relative z-10"},l().createElement("button",{type:"button",className:"group_select_button border rounded-full hover:bg-gray-100 text-sm",onClick:function(){return x(!y)}},_,">"),y&&l().createElement(p,{id:i})),l().createElement("div",{className:"recommend_nav divide-x flex"},c.map((function(e){return l().createElement("div",{key:e.id},l().createElement("button",{type:"button",className:u()("recommend_nav_link rounded-full px-2 mx-1",i===e.id?"bg-red-50 text-red-500":"ui_text_black_hover"),onClick:function(){return n((0,f.setVideoListId)({id:e.id}))}},e.name))})))),l().createElement("div",{className:"my-4"},l().createElement(d.Z,{list:s}),l().createElement("div",{ref:N,className:"flex-center"},l().createElement(b.Z,null))))};const x=(0,r.memo)(y);var _=n(6719),g=n(8810),N=n(380),L=["内地","港台","欧美","日本","韩国"];const k=(0,r.memo)((function(){var e=(0,v.T)(),t=(0,v.C)(N.MVListSelector),n=t.firstArea,i=t.topArea,o=t.first,c=t.hot,s=t.wy,m=t.top,f=t.timestamp,h=(0,r.useMemo)((function(){return Date.now()-f>36e5}),[f]);return(0,r.useEffect)((function(){h&&e((0,N.handleInit)({firstArea:n,topArea:i}))}),[h]),h?l().createElement("div",{className:"w-full h-full flex-center"},l().createElement(b.Z,null)):l().createElement("div",{className:"domVideoList_content px-8 overflow-auto max-h-full flex-auto"},l().createElement("div",{className:"domMVList_sublist"},l().createElement("div",{className:"domMVList_header mb-5 flex justify-between items-center"},l().createElement(a.Link,{to:"/mv-all?order=最新&area=".concat(n),className:"domMVList_subLink font-bold text-base flex items-center"},"最新MV",l().createElement(_.IconChevronRight,{size:20})),l().createElement("div",{className:"recommend_nav flex divide-x space-x-1"},L.map((function(t){return l().createElement("div",{className:"item",key:t},l().createElement("button",{onClick:function(){return e((0,N.handleChangeFirstArea)(t))},type:"button",className:u()("link rounded-full px-2.5",n===t?"text-red-500 bg-red-50":"ui_text_black_hover")},t))})))),l().createElement(d.Z,{list:o})),l().createElement("div",{className:"domMVList_sublist"},l().createElement("div",{className:"domMVList_header mt-8 mb-5 flex justify-between items-center"},l().createElement(a.Link,{to:"/mv-all?order=最热",className:"domMVList_subLink font-bold text-base flex items-center"},"热播MV",l().createElement(_.IconChevronRight,{size:20}))),l().createElement(d.Z,{list:c})),l().createElement("div",{className:"domMVList_sublist"},l().createElement("div",{className:"domMVList_header mt-8 mb-5 flex justify-between items-center"},l().createElement(a.Link,{to:"/mv-all?type=网易出品&order=最新",className:"domMVList_subLink font-bold text-base flex items-center"},"网易出品",l().createElement(_.IconChevronRight,{size:20}))),l().createElement(d.Z,{list:s})),l().createElement("div",{className:"domMVList_header mt-8 mb-5 flex justify-between items-center"},l().createElement(a.Link,{to:"/toplist-mv/",className:"domMVList_subLink font-bold text-base flex items-center"},"MV排行榜",l().createElement(_.IconChevronRight,{size:20})),l().createElement("div",{className:"recommend_nav flex divide-x space-x-1"},L.map((function(t){return l().createElement("div",{className:"item",key:t},l().createElement("button",{onClick:function(){return e((0,N.handleChangeTopArea)(t))},type:"button",className:u()("link rounded-full px-2.5",i===t?"text-red-500 bg-red-50":"ui_text_black_hover")},t))})))),l().createElement(g.Z,{list:m,schema:[["评论","播放"],["收藏","分享","下载MV","复制链接"]]}))})),V=function(){return l().createElement(a.Routes,null,l().createElement(a.Route,{element:l().createElement(c,null)},l().createElement(a.Route,{path:"videolist",element:l().createElement(x,null)}),l().createElement(a.Route,{path:"mvlist",element:l().createElement(k,null)}),l().createElement(a.Route,{path:"*",element:l().createElement(a.Navigate,{to:"videolist",replace:!0})})))}}}]);
//# sourceMappingURL=Video.js.map?version=6543d0e3