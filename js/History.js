"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[378],{8294:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var l=a(7363),n=a.n(l),r=a(6711),c=(a(1249),a(4184)),m=a.n(c),s=a(7484),i=a.n(s),u=(a(3852),a(4110)),d=a.n(u),o=a(480),x=a(7390),E=a(7280),g=a(2446),p=a(8123),v=a(5721),y=a(780),N=a(9638);i().extend(d()),i().locale("zh-cn");var h=function(e){var t=e.history,a=void 0===t?[]:t;return n().createElement("div",{className:"pb-8",style:{"--ui_grid_template":"36px / 54px 45% 5fr 3fr"}},n().createElement("div",{className:"list"},n().createElement("div",{className:"thead"},n().createElement("div",{className:"item grid leading-8 ui_grid_template"},n().createElement("div",{className:"index"}),n().createElement("div",{className:"name text-gray-500 px-2"},"音乐标题"),n().createElement("div",{className:"artist text-gray-500 px-2"},"歌手"),n().createElement("div",{className:"duration text-gray-500 px-2"},"播放时间"))),n().createElement("div",{className:"tbody"},a.map((function(e,t){return n().createElement(v.Z,{schema:[["评论","播放","下一首播放"],["收藏到歌单","分享","复制链接","不感兴趣","下载"]],type:"song",item:e,key:e.id,tabIndex:"2",className:m()("grid h-9 items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none ui_grid_template",{"bg-gray-50":t%2==0})},n().createElement(n().Fragment,null,n().createElement("div",{className:"index pr-3 text-right"},n().createElement(x.Z,{index:t})),n().createElement(g.Z,{item:e,className:"px-2"}),n().createElement(p.Z,{artists:e.ar,className:"px-2"}),n().createElement("div",{className:"duration text-gray-400 truncate px-2"},i()(e.lastTime).fromNow())))})))))};const f=(0,l.memo)((function(){(0,o.Z)();var e=(0,N.T)(),t=(0,N.C)((function(e){return e.audio})).history,a=(0,l.useCallback)((function(){if(0===t.length)return!1;e((0,y.setAudioHistoryClear)())}),[t]);return n().createElement("div",{className:"w-full overflow-auto max-h-full flex-auto"},n().createElement("div",{className:"px-8 pb-2.5 pt-6"},n().createElement("div",{className:"flex items-center pb-8"},n().createElement("div",{className:"h1"},"最近播放"),"   ",n().createElement("div",{className:"text-gray-400"},"共".concat(t.length,"首")),n().createElement("button",{onClick:a,type:"button",className:m()("ml-auto text-sm",0===t.length?"text-gray-300":"ui_link")},"清空列表")),n().createElement(E.Z,{playlist:t})),t.length>0?n().createElement(h,{history:t}):n().createElement("div",{className:"text-center pt-40 text-gray-400"},"你还没播放任何音乐"))})),b=function(){return n().createElement(r.Routes,null,n().createElement(r.Route,{index:!0,element:n().createElement(f,null)}))}}}]);
//# sourceMappingURL=History.js.map?version=48ff0585