System.register(["./react-legacy.b3bc90c5.js","./@tabler/icons-legacy.42c83e77.js","./index-legacy.e4284b79.js","./useLoginStatus-legacy.841b7f26.js","./index-legacy.8fcbb3b8.js","./react-slick-legacy.d6ab9305.js","./Rank-legacy.b7fd2a7e.js","./Download-legacy.c09fd937.js","./Album-legacy.76ad48f4.js","./qrcode.react-legacy.685a2ddb.js","./react-router-dom-legacy.2933718f.js","./lodash-legacy.4434829e.js","./react-dom-legacy.c211300b.js","./react-redux-legacy.b70b910a.js","./immer-legacy.c38810dc.js","./axios-legacy.6d9fa2e4.js","./rxjs-legacy.7d2f3ae5.js","./react-use-legacy.78116f18.js","./react-transition-group-legacy.b5e58023.js"],(function(e,a){"use strict";var s,c,l,i,r,t,d,n,m,o,g,h,x,y,u,f,p,b,N,v;return{setters:[e=>{s=e.r},e=>{c=e.q},e=>{l=e.M,i=e.H,r=e.Y,t=e.A,d=e.d,n=e.Z,m=e.L,o=e._},e=>{g=e.u},e=>{h=e.G},e=>{x=e.c},e=>{y=e.R},e=>{u=e.D},e=>{f=e.A},e=>{p=e.a,b=e.j},e=>{N=e.R,v=e.c},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const a=s.exports.memo((({dailySongs:e=[]})=>p("div",{className:"pb-8",style:{"--ui_grid_template":"36px / 54px 30px 30px 36% 4fr 6fr 2fr"},children:[p("div",{className:"grid items-center text-gray-500 ui_grid_template",children:[b("div",{className:"col-start-4 px-2",children:"音乐标题"}),b("div",{className:"px-2",children:"歌手"}),b("div",{className:"px-2",children:"专辑"}),b("div",{className:"px-2",children:"时长"})]}),e.map(((e,a)=>p(l,{schema:[["评论","播放","下一首播放"],["收藏到歌单","分享","复制链接","不感兴趣","下载"]],type:"song",item:e,tabIndex:"2",className:x("grid h-9 items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none ui_grid_template",{"bg-gray-50":a%2==0}),children:[b("div",{className:"pr-3 text-right",children:b(y,{index:a,id:e.id})}),b("div",{className:"",children:b(i,{id:e.id})}),b("div",{className:"",children:b(u,{})}),b(r,{item:e,className:"px-2"}),b(t,{artists:e.ar,className:"px-2"}),b(f,{className:"px-2",name:e.al.name,id:e.al.id}),b("div",{className:"text-gray-400 truncate px-2",children:d(e.dt).format("mm:ss")})]},e.name+e.id)))]}))),j=s.exports.memo((function(){g();const{data:e,error:s,isLoading:l,isFetching:i,isSuccess:r,isError:t,refetch:d}=n(),x=e?.data?.dailySongs||[];return l?b("div",{className:"flex-center pt-48",children:b(m,{})}):p("div",{className:"w-full overflow-auto max-h-full flex-auto",children:[p("div",{className:"px-8 pb-2.5 pt-6 border-b",children:[p("div",{className:"section flex items-center",children:[b("div",{className:"date w-20 h-20 ui_themeColor",children:b(o,{})}),p("div",{className:"content ml-8",children:[b("div",{className:"h1",children:"每日歌曲推荐"}),b("div",{className:"text-gray-400 tips",children:"根据你的音乐口味生成, 每天6:00更新"})]})]}),p("div",{className:"actions flex mt-5",children:[b(h,{playlist:x}),"   ",p("button",{type:"button",className:"inline-flex items-center justify-center border px-3 h-8 rounded-full hover:bg-gray-100",children:[b(c,{size:22,stroke:1}),"  收藏全部"]})]})]}),b(a,{dailySongs:x})]})}));e("default",(()=>b(N,{children:b(v,{index:!0,element:b(j,{})})})))}}}));
