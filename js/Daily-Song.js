"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[721],{6683:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var n=a(7363),l=a.n(n),r=a(6711),m=a(6719),s=a(4539),c=a(480),i=a(364),d=a(7220).u.injectEndpoints({endpoints:function(e){return{getRecommendSongs:e.query({query:function(e){return{url:"recommend/songs",method:"POST",body:e}}})}}}).useGetRecommendSongsQuery,o=a(8157),u=(a(1249),a(8309),a(1999)),E=a(4184),v=a.n(E),g=a(7390),p=a(1495),x=a(1337),N=a(2446),y=a(8123),f=a(3850),h=a(7484),b=a.n(h),Z=function(e){var t=e.dailySongs,a=void 0===t?[]:t;return l().createElement("div",{className:"pb-8",style:{"--ui_grid_template":"36px / 54px 30px 30px 36% 4fr 6fr 2fr"}},l().createElement("div",{className:"list"},l().createElement("div",{className:"thead"},l().createElement("div",{className:"item grid leading-8 ui_grid_template"},l().createElement("div",{className:"index"}),l().createElement("div",{className:"heart"}),l().createElement("div",{className:"download"}),l().createElement("div",{className:"name text-gray-500 px-2"},"音乐标题"),l().createElement("div",{className:"artist text-gray-500 px-2"},"歌手"),l().createElement("div",{className:"album text-gray-500 px-2"},"专辑"),l().createElement("div",{className:"duration text-gray-500 px-2"},"时长"))),l().createElement("div",{className:"tbody"},a.map((function(e,t){return l().createElement(u.Z,{schema:[["评论","播放","下一首播放"],["收藏到歌单","分享","复制链接","不感兴趣","下载"]],type:"song",item:e,key:e.name+e.id,tabIndex:"2",className:v()("grid h-9 items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none ui_grid_template",{"bg-gray-50":t%2==0})},l().createElement(l().Fragment,null,l().createElement("div",{className:"index pr-3 text-right"},l().createElement(g.Z,{index:t,id:e.id})),l().createElement("div",{className:"heart"},l().createElement(p.Z,{id:e.id})),l().createElement("div",{className:"download"},l().createElement(x.Z,null)),l().createElement(N.Z,{item:e,className:"px-2"}),l().createElement(y.Z,{artists:e.ar,className:"px-2"}),l().createElement(f.Z,{className:"px-2",name:e.al.name,id:e.al.id}),l().createElement("div",{className:"duration text-gray-400 truncate px-2"},b()(e.dt).format("mm:ss"))))})))))};const w=(0,n.memo)(Z),S=(0,n.memo)((function(){var e;(0,c.Z)();var t=d(),a=t.data,n=(t.error,t.isLoading),r=(t.isFetching,t.isSuccess,t.isError,t.refetch,(null==a||null===(e=a.data)||void 0===e?void 0:e.dailySongs)||[]);return n?l().createElement("div",{className:"flex-center pt-48"},l().createElement(o.Z,null)):l().createElement("div",{className:"w-full overflow-auto max-h-full flex-auto"},l().createElement("div",{className:"px-8 pb-2.5 pt-6 border-b"},l().createElement("div",{className:"section flex items-center"},l().createElement("div",{className:"date w-20 h-20 ui_themeColor"},l().createElement(s.du,null)),l().createElement("div",{className:"content ml-8"},l().createElement("div",{className:"h1"},"每日歌曲推荐"),l().createElement("div",{className:"text-gray-400 tips"},"根据你的音乐口味生成, 每天6:00更新"))),l().createElement("div",{className:"actions flex mt-5"},l().createElement(i.Z,{playlist:r}),"   ",l().createElement("button",{type:"button",className:"inline-flex items-center justify-center border px-3 h-8 rounded-full hover:bg-gray-100"},l().createElement(m.IconFolderPlus,{size:22,stroke:1}),"  收藏全部"))),l().createElement(w,{dailySongs:r}))})),_=function(){return l().createElement(r.Routes,null,l().createElement(r.Route,{index:!0,element:l().createElement(S,null)}))}}}]);
//# sourceMappingURL=Daily-Song.js.map?version=1cd93d59