System.register(["./react-legacy.b3bc90c5.js","./@tabler/icons-legacy.38e80a3f.js","./index-legacy.d8a4670e.js","./useLoginStatus-legacy.a0b5174f.js","./index-legacy.89d4af52.js","./classnames-legacy.82f93ed6.js","./Rank-legacy.443f4294.js","./Download-legacy.8eb51d14.js","./Album-legacy.80ef9785.js","./dayjs-legacy.7dd3aa6c.js","./qrcode.react-legacy.685a2ddb.js","./react-router-legacy.d596e264.js","./lodash-legacy.4434829e.js","./react-dom-legacy.c211300b.js","./react-redux-legacy.4210a093.js","./immer-legacy.c24b5c0e.js","./react-router-dom-legacy.b2b146ac.js","./redux-persist-legacy.76732867.js","./axios-legacy.6d9fa2e4.js","./rxjs-legacy.3f182ee1.js","./react-use-legacy.7a8b73b2.js","./react-transition-group-legacy.16b3096a.js","./color-legacy.6099eccf.js"],(function(e,a){"use strict";var s,c,l,r,i,t,d,n,m,o,g,y,h,u,x,p,f,j,b,N;return{setters:[e=>{s=e.r},e=>{c=e.r},e=>{l=e.M,r=e.H,i=e.W,t=e.A,d=e.X,n=e.L,m=e.Y},e=>{o=e.u},e=>{g=e.G},e=>{y=e.a},e=>{h=e.R},e=>{u=e.D},e=>{x=e.A},e=>{p=e.d},e=>{f=e.a,j=e.j},e=>{b=e.h,N=e.i},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const a=s.exports.memo((({dailySongs:e=[]})=>f("div",{className:"pb-8",style:{"--ui_grid_template":"36px / 54px 30px 30px 36% 4fr 6fr 2fr"},children:[f("div",{className:"grid items-center text-gray-500 ui_grid_template",children:[j("div",{className:"col-start-4 px-2",children:"音乐标题"}),j("div",{className:"px-2",children:"歌手"}),j("div",{className:"px-2",children:"专辑"}),j("div",{className:"px-2",children:"时长"})]}),e.map(((e,a)=>f(l,{schema:[["评论","播放","下一首播放"],["收藏到歌单","分享","复制链接","不感兴趣","下载"]],type:"song",item:e,tabIndex:"2",className:y("grid h-9 items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none ui_grid_template",{"bg-gray-50":a%2==0}),children:[j("div",{className:"pr-3 text-right",children:j(h,{index:a,id:e.id})}),j("div",{className:"",children:j(r,{id:e.id})}),j("div",{className:"",children:j(u,{})}),j(i,{item:e,className:"px-2"}),j(t,{artists:e.ar,className:"px-2"}),j(x,{className:"px-2",name:e.al.name,id:e.al.id}),j("div",{className:"text-gray-400 truncate px-2",children:p(e.dt).format("mm:ss")})]},e.name+e.id)))]}))),v=s.exports.memo((function(){o();const{data:e,error:s,isLoading:l,isFetching:r,isSuccess:i,isError:t,refetch:y}=d(),h=e?.data?.dailySongs||[];return l?j("div",{className:"flex-center pt-48",children:j(n,{})}):f("div",{className:"w-full overflow-auto max-h-full flex-auto",children:[f("div",{className:"px-8 pb-2.5 pt-6 border-b",children:[f("div",{className:"section flex items-center",children:[j("div",{className:"date w-20 h-20 ui_themeColor",children:j(m,{})}),f("div",{className:"content ml-8",children:[j("div",{className:"h1",children:"每日歌曲推荐"}),j("div",{className:"text-gray-400 tips",children:"根据你的音乐口味生成, 每天6:00更新"})]})]}),f("div",{className:"actions flex mt-5",children:[j(g,{playlist:h}),"   ",f("button",{type:"button",className:"inline-flex items-center justify-center border px-3 h-8 rounded-full hover:bg-gray-100",children:[j(c,{size:22,stroke:1}),"  收藏全部"]})]})]}),j(a,{dailySongs:h})]})}));e("default",(()=>j(b,{children:j(N,{index:!0,element:j(v,{})})})))}}}));
