"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[8181],{70201:(e,t,a)=>{a.r(t);var l=a(29604);Object.defineProperty(t,"__esModule",{value:!0});var d=a(48926),r=(0,l.Z)(d),n=a(63038),u=(0,l.Z)(n);a(21249),a(68309);var s=a(87757),c=(0,l.Z)(s),m=a(87363),i=(0,l.Z)(m),f=a(16719),o=a(94184),v=(0,l.Z)(o),p=a(27484),E=(0,l.Z)(p),x=a(63233),y=a(7788),N=a(10521),g=(0,l.Z)(N),b=a(64615),h=(0,l.Z)(b),Z=a(87653),w=(0,l.Z)(Z),_=a(88293),k=(0,l.Z)(_),S=a(49736),j=(0,l.Z)(S),P=a(16823),C=(0,l.Z)(P),O=a(48769),F=(0,l.Z)(O),I=a(22387),M=(0,l.Z)(I),z=a(67317),R=(0,l.Z)(z);exports.default=(0,m.memo)((function(){var e;(0,g.default)();var t=(0,m.useState)([]),a=(0,u.default)(t,2),l=a[0],d=a[1],n=function(){var e=(0,r.default)(c.default.mark((function e(){var t,a;return c.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,x.apiRecommendSongs)();case 3:t=e.sent,a=t.data,d(void 0===a?[]:a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return(0,m.useEffect)((function(){n()}),[]),i.default.createElement("div",{className:"w-full overflow-auto max-h-full flex-auto"},i.default.createElement("div",{className:"px-8 pb-2.5 pt-6 border-b"},i.default.createElement("div",{className:"section flex items-center"},i.default.createElement("div",{className:"date w-20 h-20 ui_themeColor"},i.default.createElement(y.SymbolToday,null)),i.default.createElement("div",{className:"content ml-8"},i.default.createElement("div",{className:"h1"},"每日歌曲推荐"),i.default.createElement("div",{className:"text-gray-400 tips"},"根据你的音乐口味生成, 每天6:00更新"))),i.default.createElement("div",{className:"actions flex mt-5"},i.default.createElement(j.default,{playlist:l.dailySongs}),"   ",i.default.createElement("button",{type:"button",className:"inline-flex items-center justify-center border px-3 h-8 rounded-full hover:bg-gray-100"},i.default.createElement(f.IconFolderPlus,{size:22,stroke:1}),"  收藏全部"))),i.default.createElement("div",{className:"pb-8",style:{"--ui_grid_template":"36px / 54px 30px 30px 36% 4fr 6fr 2fr"}},i.default.createElement("div",{className:"list"},i.default.createElement("div",{className:"thead"},i.default.createElement("div",{className:"item grid leading-8 ui_grid_template"},i.default.createElement("div",{className:"index"}),i.default.createElement("div",{className:"heart"}),i.default.createElement("div",{className:"download"}),i.default.createElement("div",{className:"name text-gray-500 px-2"},"音乐标题"),i.default.createElement("div",{className:"artist text-gray-500 px-2"},"歌手"),i.default.createElement("div",{className:"album text-gray-500 px-2"},"专辑"),i.default.createElement("div",{className:"duration text-gray-500 px-2"},"时长"))),i.default.createElement("div",{className:"tbody"},null===(e=l.dailySongs)||void 0===e?void 0:e.map((function(e,t){return i.default.createElement(R.default,{schema:[["评论","播放","下一首播放"],["收藏到歌单","分享","复制链接","不感兴趣","下载"]],type:"song",item:e,key:e.name+e.id,tabIndex:"2",className:(0,v.default)("grid h-9 items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none ui_grid_template",{"bg-gray-50":t%2==0})},i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{className:"index pr-3 text-right"},i.default.createElement(h.default,{index:t,id:e.id})),i.default.createElement("div",{className:"heart"},i.default.createElement(w.default,{id:e.id})),i.default.createElement("div",{className:"download"},i.default.createElement(k.default,null)),i.default.createElement(C.default,{item:e,className:"px-2"}),i.default.createElement(F.default,{artists:e.ar,className:"px-2"}),i.default.createElement(M.default,{className:"px-2",name:e.al.name,id:e.al.id}),i.default.createElement("div",{className:"duration text-gray-400 truncate px-2"},(0,E.default)(e.dt).format("mm:ss"))))}))))))}))},1149:(e,t,a)=>{a.r(t);var l=a(29604);Object.defineProperty(t,"__esModule",{value:!0});var d=a(70201);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return(0,l.Z)(d).default}})}}]);