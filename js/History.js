"use strict";(this.webpackChunk_wyy_web=this.webpackChunk_wyy_web||[]).push([[378],{360:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var l=a(7363),n=a.n(l),r=a(6711),c=a(3849),m=a.n(c),s=a(2138),i=a.n(s),o=(a(5169),a(664)),u=a.n(o),d=a(2544),p=a(2344),x=a(9110),E=a(3673),g=a(7763),y=a(2329),h=a(330),v=a(8053),N=function(){var e=(0,E.C)(x.audioSelector).history;return console.log(e),0===e.length?n().createElement("div",{className:"text-center pt-40 text-gray-400"},"你还没播放任何音乐"):n().createElement("div",{className:"pb-8",style:{"--ui_grid_template":"36px / 54px 45% 5fr 3fr"}},n().createElement("div",null,n().createElement("div",{className:"grid items-center text-gray-500 ui_grid_template"},n().createElement("div",{className:"col-start-2 px-2"},"音乐标题"),n().createElement("div",{className:"px-2"},"歌手"),n().createElement("div",{className:"px-2"},"播放时间")),e.map((function(e,t){return n().createElement(g.Z,{schema:[["评论","播放","下一首播放"],["收藏到歌单","分享","复制链接","不感兴趣","下载"]],type:"song",item:e,key:e.name+e.id,tabIndex:"2",className:m()("grid h-9 items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none ui_grid_template",{"bg-gray-50":t%2==0})},n().createElement(n().Fragment,null,n().createElement("div",{className:"index pr-3 text-right"},n().createElement(y.Z,{index:t})),n().createElement(h.Z,{item:e,className:"px-2"}),n().createElement(v.Z,{artists:e.ar,className:"px-2"}),n().createElement("div",{className:"duration text-gray-400 truncate px-2"},i()(e.lastTime).fromNow())))}))))};const f=(0,l.memo)(N);i().extend(u()),i().locale("zh-cn");var b=function(){(0,d.Z)();var e=(0,E.T)();return n().createElement("div",{className:"w-full overflow-auto max-h-full flex-auto"},n().createElement("div",{className:"px-8 pb-2.5 pt-6"},n().createElement("div",{className:"flex items-center pb-8"},n().createElement("div",{className:"h1"},"最近播放"),"   ",n().createElement("div",{className:"text-gray-400"},"共".concat(history.length,"首")),n().createElement("button",{onClick:function(){if(0===history.length)return!1;e((0,x.setAudioHistoryClear)())},type:"button",className:m()("ml-auto text-sm",0===history.length?"text-gray-300":"ui_link")},"清空列表")),n().createElement(p.Z,{playlist:history})),n().createElement(f,null))};const _=(0,l.memo)(b),w=function(){return n().createElement(r.Routes,null,n().createElement(r.Route,{index:!0,element:n().createElement(_,null)}))}}}]);
//# sourceMappingURL=History.js.map?version=ceefb71c