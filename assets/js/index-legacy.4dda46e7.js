System.register(["./react-legacy.b3bc90c5.js","./react-router-dom-legacy.ff1dcab2.js","./qrcode.react-legacy.364768f0.js","./react-slick-legacy.d6ab9305.js","./useInfinite-legacy.b5d5e5d0.js","./Home-legacy.5ad7542c.js","./index-legacy.7988ed51.js","./@tabler/icons-legacy.e7aeeb72.js","./GridMVToplist-legacy.ccaf83b0.js","./react-use-legacy.79acac46.js","./lodash-legacy.4434829e.js","./react-dom-legacy.c211300b.js","./react-redux-legacy.ec913dab.js","./immer-legacy.c38810dc.js","./axios-legacy.36e845a7.js","./rxjs-legacy.4f91953b.js","./store-legacy.0145af8a.js","./react-transition-group-legacy.3b11e6a0.js"],(function(e,t){"use strict";var a,r,l,i,s,c,o,d,n,m,u,p,x,h,b,g,f,v,y,N,_,j,C,k,L,w,M,V=document.createElement("style");return V.innerHTML=".group_select_box{height:490px;width:640px}.group_select_button{height:30px;width:100px}\n",document.head.appendChild(V),{setters:[e=>{a=e.r},e=>{r=e.N,l=e.O,i=e.L,s=e.e,c=e.d},e=>{o=e.a,d=e.j},e=>{n=e.c},e=>{m=e.u},e=>{u=e.G},e=>{p=e.u,x=e.n,h=e.bl,b=e.bm,g=e.bn,f=e.bo,v=e.bp,y=e.L,N=e.bq,_=e.br,j=e.bs,C=e.bt,k=e.bu},e=>{L=e.C},e=>{w=e.G},e=>{M=e.t},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const t=["视频","MV"],V=a.exports.memo((()=>o("div",{className:"flex flex-col h-full",children:[d("div",{className:"ui_header text-base space-x-4",children:t.map((e=>d(r,{className:({isActive:e})=>e?"text-xl ui_underline font-bold":"",to:encodeURIComponent(e),children:e},e)))}),d(l,{})]}))),R=a.exports.memo((({id:e})=>{const t=p(),{groupList:a}=x(h);return o("div",{className:"group_select_box absolute top-100 p-5 bg-white overflow-auto shadow",children:[d("div",{className:"border-b pb-2",children:d("button",{type:"button",className:n("group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor",0===e?"text-red-500 bg-red-50":""),onClick:()=>t(b({id:0})),children:"全部视频"})}),d("div",{className:"group_select_list grid grid-cols-6 gap-y-5 p-4",children:a.map((a=>d("button",{type:"button",className:n("group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor",a.id===e?"text-red-500 bg-red-50":""),onClick:()=>t(b({id:a.id})),children:a.name},a.id)))})]})})),A=a.exports.memo((()=>{const e=p(),{id:t,initStatus:r,groupList:l,categoryList:i,videoList:s}=x(h),[c,N]=a.exports.useState(!1),_=a.exports.useMemo((()=>l.find((e=>e.id===Number(t)))?.name||"全部视频"),[t]),j=a.exports.useRef(null),C=a.exports.useRef(null);return m((()=>e(g(t))),j,C),a.exports.useEffect((()=>(e(f()),()=>{e(v())})),[]),a.exports.useEffect((()=>{e(v())}),[t]),o("div",{className:"px-8 overflow-auto flex-auto",ref:j,children:[o("div",{className:"flex items-center justify-between",children:[o("div",{className:"relative z-10",children:[o("button",{type:"button",className:"group_select_button border rounded-full hover:bg-gray-100 text-sm",onClick:()=>N(!c),children:[_,">"]}),c&&d(R,{id:t})]}),d("div",{className:"divide-x flex",children:i.map((a=>d("div",{children:d("button",{type:"button",className:n("rounded-full px-2 mx-1",t===a.id?"bg-red-50 text-red-500":"ui_text_black_hover"),onClick:()=>e(b({id:a.id})),children:a.name})},a.id)))})]}),o("div",{className:"my-4",children:[d(u,{list:s}),d("div",{ref:C,className:"flex-center",children:d(y,{})})]})]})})),E=a.exports.memo((({children:e,url:t,title:a,Category:r})=>o("div",{className:"",children:[o("div",{className:"mt-8 mb-5 flex justify-between items-center",children:[o(i,{to:t,className:"font-bold text-base flex items-center",children:[a,d(L,{size:20})]}),r]}),e]}))),G=a.exports.memo((()=>{const{data:e,isLoading:t}=N({limit:6});return t?d(y,{}):d(u,{list:_(e.data)})})),I=a.exports.memo((()=>{const{data:e,isLoading:t}=j({order:"最热",limit:6});return t?d(y,{}):d(u,{list:_(e.data)})})),S=a.exports.memo((({area:e})=>{const{data:t,isLoading:a}=C({area:e,limit:6});return a?d(y,{}):d(u,{list:_(t.data)})})),q=a.exports.memo((({area:e})=>{const{data:t,isLoading:a}=k({area:e,limit:6});return a?d(y,{}):d(w,{list:t.data,schema:[["评论","播放"],["收藏","分享","下载MV","复制链接"]]})})),z=["内地","港台","欧美","日本","韩国"],H=a.exports.memo((({onClick:e,area:t})=>d("div",{className:"flex divide-x gap-x-1",children:z.map((a=>d("div",{className:"item",children:d("button",{onClick:()=>e(a),type:"button",className:n("link rounded-full px-2.5",t===a?"text-red-500 bg-red-50":"ui_text_black_hover"),children:a})},a)))}))),T=a.exports.memo((()=>{const[e,t]=M("firstArea",z[0]),[a,r]=M("topArea",z[0]);return o("div",{className:"px-8 overflow-auto max-h-full flex-auto",children:[d(E,{title:"最新MV",url:`/mv-all?order=最新&area=${e}`,Category:d(H,{onClick:t,area:e}),children:d(S,{area:e})}),d(E,{title:"热播MV",url:"/mv-all?order=最热",children:d(I,{})}),d(E,{title:"网易出品",url:"/mv-all?type=网易出品&order=最新",children:d(G,{})}),d(E,{title:"MV排行榜",url:"/toplist-mv",Category:d(H,{onClick:r,area:a}),children:d(q,{area:a})})]})}));e("default",a.exports.memo((()=>s([{path:"/",element:d(V,{}),children:[{index:!0,element:d(c,{to:"视频",replace:!0})},{path:encodeURIComponent("视频"),element:d(A,{})},{path:"MV",element:d(T,{})}]}]))))}}}));
