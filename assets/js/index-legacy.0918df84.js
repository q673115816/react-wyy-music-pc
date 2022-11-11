System.register(["./react-legacy.b3bc90c5.js","./classnames-legacy.82f93ed6.js","./react-router-dom-legacy.dc65b224.js","./qrcode.react-legacy.685a2ddb.js","./react-router-legacy.33ca2ceb.js","./dayjs-legacy.7dd3aa6c.js","./index-legacy.d6ac6f98.js","./react-dom-legacy.c211300b.js","./@tabler/icons-legacy.70165014.js","./lodash-legacy.4434829e.js","./react-redux-legacy.c7a29beb.js","./immer-legacy.c24b5c0e.js","./redux-persist-legacy.af414400.js","./axios-legacy.6d9fa2e4.js","./rxjs-legacy.4711c62e.js","./react-use-legacy.597098f4.js","./react-transition-group-legacy.16b3096a.js","./color-legacy.6099eccf.js"],(function(e,a){"use strict";var r,t,s,c,l,n,o,d,i,m,u,g,x,h,y,p,f,b;return{setters:[e=>{r=e.r},e=>{t=e.a},e=>{s=e.N,c=e.L},e=>{l=e.a,n=e.j},e=>{o=e.O,d=e.f,i=e.i,m=e.N},e=>{u=e.d},e=>{g=e.a$,x=e.b0},e=>{h=e.r},e=>{y=e.ax,p=e.N,f=e.aw,b=e.v},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const a=[["节目榜","program"],["新晋电台榜","now"],["热门电台榜","hot"]],v=r.exports.memo((()=>l("div",{className:"h-full overflow-auto pt-8",children:[n("div",{className:"m-auto w-min flex rounded-full border",children:a.map((([e,a])=>n(s,{to:a,className:({isActive:e})=>t("flex-center w-28 h-8 rounded-full text-center",e?"text-white bg-gray-200":"hover:bg-gray-100"),children:e},e)))}),n(o,{})]}))),N=r.exports.memo((({lastRank:e,rank:a})=>{switch(!0){case-1===e:return n("div",{className:"text-green-500",children:"new"});case e-a<0:return l("div",{className:"flex-center text-gray-500",children:[n(f,{size:10,className:"text-blue-500"}),-e+a]});case e-a==0:return l("div",{className:"flex-center text-gray-500",children:[n(p,{size:10}),"0"]});case e-a>0:return l("div",{className:"flex-center text-gray-500",children:[n(y,{size:10,className:"text-red-500"}),e-a]});default:return n("div",{})}})),j=r.exports.memo((({item:e,index:a,maxScore:r})=>l("div",{tabIndex:2,className:t("item h-20 flex items-center hover:bg-gray-100 focus:bg-gray-100 focus:outline-none",{"bg-gray-50":a%2==0}),children:[l("div",{className:"index w-16 flex flex-col items-center justify-center",children:[n("div",{className:t("font-bold text-sm",{"text-red-500":a<3,"text-gray-400":a>2}),children:a+1}),n("div",{children:n(N,{lastRank:e.lastRank,rank:e.rank})})]}),l("button",{type:"button",className:"w-14 -14 relative",children:[n("img",{src:`${e.coverUrl}?param=60y60`,className:"rounded",alt:""}),n("i",{className:"ico ui_themeColor absolute inset-0 flex-center rounded-full w-6 h-6 m-auto bg-white bg-opacity-90",children:n(b,{size:16,className:"fill-current"})})]}),n("div",{className:"name flex-auto truncate px-2",children:e.name}),n("div",{className:"radio flex-auto truncate px-2",children:n(c,{className:"ui_text_gray_hover",to:`/playlist/dj/${e.userId}`,children:e.userName})}),n("div",{className:"w-24 px-2",children:n(c,{to:"/",className:"ui_text_gray_hover border border-current",children:e.category})}),n("div",{className:"w-24 px-2",children:n("div",{className:"rounded bg-gray-300 overflow-hidden h-2",children:n("div",{className:"h-full bg-gray-500 w-0",style:{width:e.score/r*100+"%"}})})})]},e.id))),w={false:({lastRank:e,rank:a,score:r,program:{id:t,name:s,coverUrl:c,radio:{name:l,id:n,category:o}}})=>({id:t,name:s,lastRank:e,rank:a,coverUrl:c,score:r,userName:l,userId:n,category:o}),true:({id:e,name:a,lastRank:r,rank:t,picUrl:s,score:c,dj:{nickname:l,userId:n},category:o})=>({id:e,name:a,lastRank:r,rank:t,coverUrl:s,score:c,userName:l,userId:n,category:o})},k=r.exports.memo((()=>{const{type:e}=d(),[a,t]=r.exports.useState([]),[s,c]=r.exports.useState(),o=r.exports.useMemo((()=>"program"!==e),[e]),i=r.exports.useMemo((()=>a[0]?.score??0),[a]);return r.exports.useEffect((()=>{(async a=>{try{const{toplist:r,updateTime:s}=a?await g({type:e}):await x();h.exports.unstable_batchedUpdates((()=>{t(r.map(w[a])),c(s)}))}catch(r){console.log(r)}})(o)}),[e,o]),l("div",{className:"pt-8 relative",children:[l("div",{className:"absolute flex-center bottom-full transform -translate-y-1/2 right-8 text-gray-400",children:["最近更新：",s&&u(s).format("MM月DD日"),l("div",{className:"relative ui_group",children:[n("span",{className:"block flex-center  border rounded-full w-4 h-4 flex-none",children:"?"}),n("div",{className:"absolute text-gray-500 top-6 right-0 shadow rounded p-4 w-48 border hidden ui_group-hover:block bg-white",children:"选取云音乐中7天内发布的热度最高的节目，热度由节目播放、赞、分享数量总和计算"})]})]}),n("div",{className:"list",children:a.map(((e,a)=>n(j,{item:e,index:a,maxScore:i},e.id)))})]})}));e("default",r.exports.memo((()=>i([{path:"/",element:n(v,{}),children:[{index:!0,element:n(m,{to:"program",replace:!0})},{path:":type",element:n(k,{}),children:[]}]}]))))}}}));
