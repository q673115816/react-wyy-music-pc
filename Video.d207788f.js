"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[945],{616:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var r=n(7363),a=n.n(r),i=n(6711),l=n(885),c=(n(1249),[["视频","/video/videolist"],["MV","/video/mvlist"]]);const s=(0,r.memo)((function(){return a().createElement("div",{className:"domVideoList flex flex-col h-full"},a().createElement("div",{className:"domVideoList_header ui_header text-base space-x-4"},c.map((function(e){var t=(0,l.Z)(e,2),n=t[0],r=t[1];return a().createElement(i.NavLink,{key:n,className:function(e){return e.isActive?"text-xl ui_underline font-bold":""},to:r},n)}))),a().createElement(i.Outlet,null))}));n(9826),n(1539),n(9653),n(8309);var o=n(4184),u=n.n(o),m=n(4716),d=n(4907),f=n(2940),v=n(9638),p=n(8157),b=function(e){var t=e.id,n=(0,v.T)(),r=(0,v.C)(f.W9).groupList;return a().createElement("div",{className:"group_select_box absolute top-100 p-5 bg-white overflow-auto shadow"},a().createElement("div",{className:"border-b pb-2"},a().createElement("button",{type:"button",className:u()("group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor",0===t?"text-red-500 bg-red-50":""),onClick:function(){return n((0,f.Cn)({id:0}))}},"全部视频")),a().createElement("div",{className:"group_select_list grid grid-cols-6 gap-y-5 p-4"},r.map((function(e){return a().createElement("button",{type:"button",className:u()("group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor",e.id===t?"text-red-500 bg-red-50":""),key:e.id,onClick:function(){return n((0,f.Cn)({id:e.id}))}},e.name)}))))};const E=(0,r.memo)(b),x=(0,r.memo)((function(){var e=(0,v.T)(),t=(0,v.C)(f.W9),n=t.id,i=(t.initStatus,t.groupList),c=t.categoryList,s=t.videoList,o=(0,r.useState)(!1),b=(0,l.Z)(o,2),x=b[0],h=b[1],_=(0,r.useMemo)((function(){var e;return(null===(e=i.find((function(e){return e.id===Number(n)})))||void 0===e?void 0:e.name)||"全部视频"}),[n]),y=(0,r.useRef)(null),N=(0,r.useRef)(null);return(0,m.Z)((function(){return e((0,f.Cs)(n))}),y,N),(0,r.useEffect)((function(){return e((0,f.PE)()),function(){e((0,f.VY)())}}),[]),(0,r.useEffect)((function(){e((0,f.VY)())}),[n]),a().createElement("div",{className:"domVideoList_content px-8 overflow-auto flex-auto",ref:y},a().createElement("div",{className:"video_sort_filter_bar flex items-center justify-between"},a().createElement("div",{className:"group_select_wrap relative z-10"},a().createElement("button",{type:"button",className:"group_select_button border rounded-full hover:bg-gray-100 text-sm",onClick:function(){return h(!x)}},_,">"),x&&a().createElement(E,{id:n})),a().createElement("div",{className:"recommend_nav divide-x flex"},c.map((function(t){return a().createElement("div",{key:t.id},a().createElement("button",{type:"button",className:u()("recommend_nav_link rounded-full px-2 mx-1",n===t.id?"bg-red-50 text-red-500":"ui_text_black_hover"),onClick:function(){return e((0,f.Cn)({id:t.id}))}},t.name))})))),a().createElement("div",{className:"my-4"},a().createElement(d.Z,{list:s}),a().createElement("div",{ref:N,className:"flex-center"},a().createElement(p.Z,null))))}));var h,_=n(6719),y=n(3745),N=n(4942),k=n(5861),g=n(7757),w=n.n(g),L=(n(6992),n(8674),n(8783),n(3948),n(548)),C=n(9965),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){var t=e.id,n=e.playCount,r=e.cover,a=e.name,i=e.artists;return{type:0,id:t,cover:r,briefDesc:e.briefDesc,playCount:n,title:a,creator:i.map((function(e){return{userId:e.id,userName:e.name}}))}}))},A=(0,L.createAsyncThunk)("mvlist/init/all",function(){var e=(0,k.Z)(w().mark((function e(t){var n,r,a,i,c,s,o,u;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.firstArea,r=t.topArea,e.prev=1,e.next=4,Promise.all([(0,C.Au)({order:"最热",limit:6}),(0,C.gu)({limit:6}),(0,C.Gu)({area:n,limit:6}),(0,C.Hu)({area:r,limit:10})]);case 4:return a=e.sent,i=(0,l.Z)(a,4),c=i[0].data,s=i[1].data,o=i[2].data,u=i[3].data,e.abrupt("return",{first:V(o),hot:V(c),wy:V(s),top:u,timestamp:Date.now()});case 13:e.prev=13,e.t0=e.catch(1),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}()),M=(0,L.createAsyncThunk)("mvlist/init/first",function(){var e=(0,k.Z)(w().mark((function e(t){var n,r;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,C.Gu)({area:t,limit:6});case 3:return n=e.sent,r=n.data,e.abrupt("return",{firstArea:t,first:V(r)});case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()),Z=(0,L.createAsyncThunk)("mvlist/init/top",function(){var e=(0,k.Z)(w().mark((function e(t){var n,r;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,C.Hu)({area:t,limit:10});case 3:return n=e.sent,r=n.data,e.abrupt("return",{topArea:t,top:r});case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()),R=(0,L.createSlice)({name:"mvlist",initialState:{firstArea:"内地",topArea:"内地",first:[],hot:[],wy:[],top:[],timestamp:0},reducers:{},extraReducers:(h={},(0,N.Z)(h,A.fulfilled.type,(function(e,t){var n=t.payload,r=n.timestamp,a=n.first,i=n.hot,l=n.wy,c=n.top;e.timestamp=r,e.first=a,e.hot=i,e.wy=l,e.top=c})),(0,N.Z)(h,M.fulfilled.type,(function(e,t){var n=t.payload,r=n.topArea,a=n.top;e.topArea=r,e.top=a})),(0,N.Z)(h,M.fulfilled.type,(function(e,t){var n=t.payload,r=n.firstArea,a=n.first;e.firstArea=r,e.first=a})),h)}),T=function(e){return e.mvlist};R.reducer;var j=["内地","港台","欧美","日本","韩国"];const z=(0,r.memo)((function(){var e=(0,v.T)(),t=(0,v.C)(T),n=t.firstArea,l=t.topArea,c=t.first,s=t.hot,o=t.wy,m=t.top,f=t.timestamp,b=(0,r.useMemo)((function(){return Date.now()-f>36e5}),[f]);return(0,r.useEffect)((function(){b&&e(A({firstArea:n,topArea:l}))}),[b]),b?a().createElement("div",{className:"w-full h-full flex-center"},a().createElement(p.Z,null)):a().createElement("div",{className:"domVideoList_content px-8 overflow-auto max-h-full flex-auto"},a().createElement("div",{className:"domMVList_sublist"},a().createElement("div",{className:"domMVList_header mb-5 flex justify-between items-center"},a().createElement(i.Link,{to:"/mv-all?order=最新&area=".concat(n),className:"domMVList_subLink font-bold text-base flex items-center"},"最新MV",a().createElement(_.IconChevronRight,{size:20})),a().createElement("div",{className:"recommend_nav flex divide-x space-x-1"},j.map((function(t){return a().createElement("div",{className:"item",key:t},a().createElement("button",{onClick:function(){return e(M(t))},type:"button",className:u()("link rounded-full px-2.5",n===t?"text-red-500 bg-red-50":"ui_text_black_hover")},t))})))),a().createElement(d.Z,{list:c})),a().createElement("div",{className:"domMVList_sublist"},a().createElement("div",{className:"domMVList_header mt-8 mb-5 flex justify-between items-center"},a().createElement(i.Link,{to:"/mv-all?order=最热",className:"domMVList_subLink font-bold text-base flex items-center"},"热播MV",a().createElement(_.IconChevronRight,{size:20}))),a().createElement(d.Z,{list:s})),a().createElement("div",{className:"domMVList_sublist"},a().createElement("div",{className:"domMVList_header mt-8 mb-5 flex justify-between items-center"},a().createElement(i.Link,{to:"/mv-all?type=网易出品&order=最新",className:"domMVList_subLink font-bold text-base flex items-center"},"网易出品",a().createElement(_.IconChevronRight,{size:20}))),a().createElement(d.Z,{list:o})),a().createElement("div",{className:"domMVList_header mt-8 mb-5 flex justify-between items-center"},a().createElement(i.Link,{to:"/toplist-mv/",className:"domMVList_subLink font-bold text-base flex items-center"},"MV排行榜",a().createElement(_.IconChevronRight,{size:20})),a().createElement("div",{className:"recommend_nav flex divide-x space-x-1"},j.map((function(t){return a().createElement("div",{className:"item",key:t},a().createElement("button",{onClick:function(){return e(Z(t))},type:"button",className:u()("link rounded-full px-2.5",l===t?"text-red-500 bg-red-50":"ui_text_black_hover")},t))})))),a().createElement(y.Z,{list:m,schema:[["评论","播放"],["收藏","分享","下载MV","复制链接"]]}))})),I=function(){return a().createElement(i.Routes,null,a().createElement(i.Route,{element:a().createElement(s,null)},a().createElement(i.Route,{path:"videolist",element:a().createElement(x,null)}),a().createElement(i.Route,{path:"mvlist",element:a().createElement(z,null)}),a().createElement(i.Route,{path:"*",element:a().createElement(i.Navigate,{to:"videolist",replace:!0})})))}}}]);
//# sourceMappingURL=Video.d207788f.js.map