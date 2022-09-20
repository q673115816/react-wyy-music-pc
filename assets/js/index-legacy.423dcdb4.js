System.register(["./react-legacy.b3bc90c5.js","./index-legacy.cddbfdb9.js","./react-slick-legacy.d6ab9305.js","./index-legacy.64913fc8.js","./@tabler/icons-legacy.4bc7b915.js","./react-router-dom-legacy.ff1dcab2.js","./qrcode.react-legacy.364768f0.js","./Rank-legacy.aef4647c.js","./Download-legacy.c0daf8ed.js","./Album-legacy.ae302c10.js","./Gender-legacy.95a01b94.js","./lodash-legacy.4434829e.js","./react-dom-legacy.c211300b.js","./react-redux-legacy.ec913dab.js","./immer-legacy.c38810dc.js","./axios-legacy.36e845a7.js","./rxjs-legacy.4f91953b.js","./react-use-legacy.79acac46.js","./store-legacy.0145af8a.js","./react-transition-group-legacy.3b11e6a0.js"],(function(e,a){"use strict";var s,t,l,r,c,i,n,d,o,m,p,u,h,x,y,g,b,f,v,N,j,w,k,C,S,$,_,D,I,z,P,Y,L,M,E,O,R,T,A;return{setters:[e=>{s=e.r},e=>{t=e.d,l=e.aH,r=e.t,c=e.M,i=e.H,n=e.Y,d=e.A,o=e.a,m=e.aI,p=e.aJ,u=e.aK,h=e.L,x=e.F,y=e.P,g=e.aL,b=e.i,f=e.aM,v=e.ap,N=e.G,j=e.aN},e=>{w=e.c},e=>{k=e.D},e=>{C=e.X,S=e.c,$=e.Y,_=e.Z,D=e.P,I=e.a1},e=>{z=e.L,P=e.b,Y=e.R,L=e.c},e=>{M=e.a,E=e.j},e=>{O=e.R},e=>{R=e.D},e=>{T=e.A},e=>{A=e.G},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const a=s.exports.memo((({tags:e=[]})=>0===e.length?null:M("div",{className:"tags",children:[E("span",{children:"标签："}),e.map(((e,a)=>M("span",{children:[a>0&&" / ",E(z,{to:`/home/playlist/${e}`,className:"tag ui_link",children:e})]},e)))]}))),G=s.exports.memo((({description:e=""})=>{if(!e)return null;const[a,t]=s.exports.useState(!1),l=e.match(/^.*$/gm);return E("div",{className:"relative pr-5",children:M("div",{className:"whitespace-pre-line leading-6",children:["简介：",E("span",{className:w("text-gray-500 select-text",!a&&"truncate inline-block max-w-xs align-bottom"),children:a?e:l?.[0]}),E("button",{type:"button",onClick:()=>t(!a),className:"absolute top-0 right-0 text-gray-500",children:E(a?C:S,{size:16,className:"fill-current"})})]})})})),U=s.exports.memo((({data:e={},handleSub:s,songs:c})=>M("div",{className:"p-8 flex items-start",children:[E("div",{className:"border rounded overflow-hidden flex-none w-92 h-92",children:E("img",{loading:"lazy",className:"w-full h-full",src:`${e.playlist.coverImgUrl}?param=200y200`,alt:""})}),M("div",{className:"info flex-auto w-0 ml-5",children:[M("div",{className:"name leading-tight",children:[E("span",{className:"whitespace-nowrap text-red-500 border border-current p-0.5 rounded mr-2 align-bottom inline-block",children:"歌单"}),E("span",{className:"h1 select-text",children:e.playlist.name||"我喜欢的音乐"})]}),M("div",{className:"creator flex items-center mt-2",children:[E(z,{to:`/user/${e.playlist.creator?.userId}`,className:"w-6 h-6 rounded-full overflow-hidden mr-2",children:E("img",{className:"",src:`${e.playlist.creator?.avatarUrl}?param=50y50`,alt:""})}),E(z,{to:`/user/${e.playlist.creator?.userId}`,className:"nickname ui_link mr-2",children:e.playlist.creator?.nickname}),M("span",{className:"text-gray-500",children:[t(e.playlist.createTime||Date.now()).format("YYYY-MM-DD"),"创建"]})]}),M("div",{className:"actions flex space-x-2 mt-2",children:[E(k,{playlist:c}),M("button",{onClick:()=>s(e.playlist.subscribed),type:"button",className:"flex-center text-sm border px-3 h-8 rounded-full hover:bg-gray-50",children:[e.playlist.subscribed?E($,{size:20,stroke:1}):E(_,{size:20,stroke:1})," ",e.playlist.subscribed?"已收藏":"收藏",`(${l(e.playlist.subscribedCount)})`]}),M("button",{type:"button",className:"flex-center text-sm border px-3 h-8 rounded-full hover:bg-gray-50",children:[E(D,{size:20,stroke:1}),"  分享",`(${l(e.playlist.shareCount)})`]}),M("button",{type:"button",className:"flex-center text-sm border px-3 h-8 rounded-full hover:bg-gray-50",children:[E(I,{size:20,stroke:1}),"  下载全部"]})]}),M("div",{className:"flex flex-col gap-y-1 mt-3",children:[E(a,{tags:e.playlist.tags}),M("div",{children:[M("span",{className:"mr-3",children:["歌曲：",E("span",{className:"text-gray-500",children:e.playlist.trackCount})]}),M("span",{children:["播放：",E("span",{className:"text-gray-500",children:r(e.playlist.playCount)})]})]}),E(G,{description:e.playlist.description})]})]})]}))),H=s.exports.memo((({songs:e=[]})=>e.length?M("div",{style:{"--ui_grid_template":"36px / 30px 30px 30px 36% 4fr 6fr 2fr"},className:"mt-4",children:[M("div",{className:"grid ui_grid_template pl-8",children:[E("div",{}),E("div",{}),E("div",{}),E("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500",children:"音乐标题"}),E("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500",children:"歌手"}),E("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500",children:"专辑"}),E("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500",children:"时长"})]}),e.map(((e,a)=>E(c,{schema:[["评论","播放","下一首播放"],["收藏到歌单","分享","复制链接","不感兴趣","下载"]],type:"song",item:e,children:M("div",{tabIndex:2,className:w("grid items-center focus:outline-none focus:bg-gray-200 hover:bg-gray-100 ui_grid_template pl-8",a%2==0&&"bg-gray-50"),children:[E("div",{className:"px-1",children:E(O,{index:a,id:e.id})}),E("div",{className:"px-1",children:E(i,{id:e.id})}),E("div",{className:"px-1",children:E(R,{})}),E(n,{className:"px-1",item:e}),E(d,{className:"px-1",artists:e.ar}),E(T,{className:"px-1",name:e.al.name,id:e.al.id}),E("div",{className:"text-gray-500 px-1",children:t(e.dt).format("mm:ss")})]})},e.id)))]}):E("div",{className:"pt-16 text-center text-sm text-gray-400",children:"暂无音乐"}))),q=s.exports.memo((()=>{const e=o(),a=s.exports.useRef(null),{id:t=0}=P(),{data:l,isLoading:r}=m({id:t}),[c,{isLoading:i}]=p(),n=s.exports.useCallback((()=>{}),[]),d=s.exports.useCallback((async()=>{if(a.current){a.current.value||e("写些东西吧，内容不能为空哦!");try{await c({id:t,t:1,type:2,content:a.current.value})}catch(s){console.log(s)}}}),[]);return M("div",{className:"px-8",children:[M("div",{className:"pt-10 pb-10",children:[E(u,{ref:a,max:140,placeholder:"",onChange:n}),E("div",{className:"flex justify-end mt-2",children:E("button",{onClick:d,type:"button",className:"flex-center text-sm border px-4 h-8 rounded-full hover:bg-gray-50",children:"评论"})})]}),r?E(h,{}):E(x,{comments:l,type:0,more:t})]})})),F=s.exports.memo((function(){const{id:e}=P(),[a,t]=s.exports.useState(1),[l,r]=s.exports.useState({}),[c,i]=s.exports.useState(!0);return s.exports.useEffect((()=>{(async()=>{const{subscribers:s,total:t}=await g({id:e,limit:60,offset:60*(a-1)});r({subscribers:s,total:t}),i(!1)})()}),[]),c?E("div",{className:"flex-center pt-32",children:E(h,{})}):M("div",{className:"px-8",children:[E("div",{className:"domPlaylistDetail_subscribers flex justify-between flex-wrap",children:l?.subscribers.map((e=>M("div",{className:"item flex mt-6 w-80 ",children:[E(z,{to:`/user/${e.userId}`,className:"avatar w-24 h-24 border rounded-full overflow-hidden",children:E("img",{loading:"lazy",src:`${e.avatarUrl}?param=100y100`,alt:""})}),M("div",{className:"ml-2 flex-auto w-0 flex flex-col justify-center",children:[M("div",{className:"text-sm flex items-center",children:[E(z,{to:`/user/${e.userId}`,children:e.nickname})," ",E(A,{gender:e.gender,size:16})]}),E("div",{className:"mt-2 truncate",children:e.signature})]})]},e.userId)))}),E(y,{total:Math.ceil(l?.total/60),page:a,func:t})]})})),J=[["歌曲列表","Playlist"],["评论","Comments"],["收藏者","Subscribers"]],K={Playlist:H,Comments:q,Subscribers:F},X=s.exports.memo((()=>{const{id:e}=P(),a=o(),[t,l]=s.exports.useState(!0),[r,c]=s.exports.useState([]),[i,n]=b({}),[d,m]=s.exports.useState(J[0][1]),p=s.exports.useCallback((async s=>{try{const{code:t}=await f({t:s?2:1,id:e});200===t&&(a(s?"取消收藏成功！":"收藏成功！"),n((e=>{e.playlist.subscribed=!s})))}catch(t){console.log(t)}}),[e]);return s.exports.useEffect((()=>{(async()=>{try{const a=await v({id:e});if(n(a),a.playlist.trackCount>0){const{songs:e}=await N({ids:a.playlist.trackIds.map((({id:e})=>e)).join(",")});c(e)}l(!1)}catch(a){console.log(a)}})()}),[e]),t?E("div",{className:"w-full h-full flex-center",children:E(h,{})}):M("div",{className:"overflow-auto h-full",children:[E(U,{data:i,handleSub:p,songs:r}),M("div",{className:"mt-4",children:[E("div",{className:"space-x-4 flex items-baseline px-8",children:J.map((([e,a])=>M("button",{type:"button",className:w("text-sm",d===a&&"font-bold text-lg ui_underline"),onClick:()=>m(a),children:[e,"评论"===e&&`(${i.playlist.commentCount})`]},e)))}),E("div",{children:s.exports.createElement(K[d],{songs:r})})]})]})})),Z=s.exports.memo((({id:e})=>(s.exports.useEffect((()=>{(async()=>{try{const{}=await j({rid:e})}catch(a){console.log(a)}})()}),[]),M("div",{className:"domPlaylistDetail",children:[E("div",{className:"domPlaylistDetail_header"}),E("div",{className:"domPlaylistDetail_main",children:"TODO"})]})))),B=()=>(s.exports.useState(0),E("div",{children:"TOTO"}));e("default",s.exports.memo((()=>M(Y,{children:[E(L,{path:"music/:id",element:E(X,{})}),E(L,{path:"dj/:id",element:E(Z,{})}),E(L,{path:"album/:id",element:E(B,{})})]}))))}}}));
