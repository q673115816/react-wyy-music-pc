System.register(["./react-legacy.44853401.js","./@tabler/icons-legacy.5dfa177d.js","./index-legacy.7e8c6649.js","./useLoginStatus-legacy.b11beda5.js","./index-legacy.f5ffdd24.js","./react-slick-legacy.400e355e.js","./Rank-legacy.f2eafd32.js","./Download-legacy.c594194f.js","./Album-legacy.1bac377f.js","./qrcode.react-legacy.406c3b0d.js","./react-router-dom-legacy.72086173.js","./lodash-legacy.ec9d3690.js","./react-dom-legacy.486e296d.js","./react-redux-legacy.e82faa2a.js","./immer-legacy.91914d19.js","./axios-legacy.0865bd99.js","./store-legacy.6aaf7648.js","./react-transition-group-legacy.c8714733.js","./react-use-legacy.454b4e92.js"],(function(e){"use strict";var a,c,i,n,t,s,r,l,d,o,u,m,f,g,h,y,x,p,v,N;return{setters:[function(e){a=e.r},function(e){c=e.G},function(e){i=e.M,n=e.H,t=e.N,s=e.A,r=e.d,l=e.F,d=e.L,o=e.S},function(e){u=e.u},function(e){m=e.D},function(e){f=e.c},function(e){g=e.R},function(e){h=e.D},function(e){y=e.A},function(e){x=e.a,p=e.j},function(e){v=e.R,N=e.c},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var j=a.exports.memo((function(e){var a=e.dailySongs,c=void 0===a?[]:a;return x("div",{className:"pb-8",style:{"--ui_grid_template":"36px / 54px 30px 30px 36% 4fr 6fr 2fr"},children:[x("div",{className:"grid items-center text-gray-500 ui_grid_template",children:[p("div",{className:"col-start-4 px-2",children:"音乐标题"}),p("div",{className:"px-2",children:"歌手"}),p("div",{className:"px-2",children:"专辑"}),p("div",{className:"px-2",children:"时长"})]}),c.map((function(e,a){return x(i,{schema:[["评论","播放","下一首播放"],["收藏到歌单","分享","复制链接","不感兴趣","下载"]],type:"song",item:e,tabIndex:"2",className:f("grid h-9 items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none ui_grid_template",{"bg-gray-50":a%2==0}),children:[p("div",{className:"pr-3 text-right",children:p(g,{index:a,id:e.id})}),p("div",{className:"",children:p(n,{id:e.id})}),p("div",{className:"",children:p(h,{})}),p(t,{item:e,className:"px-2"}),p(s,{artists:e.ar,className:"px-2"}),p(y,{className:"px-2",name:e.al.name,id:e.al.id}),p("div",{className:"text-gray-400 truncate px-2",children:r(e.dt).format("mm:ss")})]},e.name+e.id)}))]})})),b=a.exports.memo((function(){var e;u();var a=l(),i=a.data,n=(a.error,a.isLoading),t=(a.isFetching,a.isSuccess,a.isError,a.refetch,(null==i||null===(e=i.data)||void 0===e?void 0:e.dailySongs)||[]);return n?p("div",{className:"flex-center pt-48",children:p(d,{})}):x("div",{className:"w-full overflow-auto max-h-full flex-auto",children:[x("div",{className:"px-8 pb-2.5 pt-6 border-b",children:[x("div",{className:"section flex items-center",children:[p("div",{className:"date w-20 h-20 ui_themeColor",children:p(o,{})}),x("div",{className:"content ml-8",children:[p("div",{className:"h1",children:"每日歌曲推荐"}),p("div",{className:"text-gray-400 tips",children:"根据你的音乐口味生成, 每天6:00更新"})]})]}),x("div",{className:"actions flex mt-5",children:[p(m,{playlist:t}),"   ",x("button",{type:"button",className:"inline-flex items-center justify-center border px-3 h-8 rounded-full hover:bg-gray-100",children:[p(c,{size:22,stroke:1}),"  收藏全部"]})]})]}),p(j,{dailySongs:t})]})}));e("default",(function(){return p(v,{children:p(N,{index:!0,element:p(b,{})})})}))}}}));
