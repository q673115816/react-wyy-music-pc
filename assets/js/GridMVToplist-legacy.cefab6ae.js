System.register(["./react-legacy.b3bc90c5.js","./@tabler/icons-legacy.70165014.js","./react-router-dom-legacy.dc65b224.js","./qrcode.react-legacy.685a2ddb.js"],(function(e,t){"use strict";var i,a,d,r,o,s,l,c,n=document.createElement("style");return n.textContent=".domVideoTop{grid-template-rows:132px}.domVideoTop .item{display:-webkit-box;display:-ms-flexbox;display:flex;padding:20px 0 20px 10px}.domVideoTop .item:not(:nth-last-child(-n+2)){border-bottom:1px solid #eee}.domVideoTop .item:nth-child(odd){border-right:1px solid #eee}.domVideoTop .item .rank{width:40px}.domVideoTop .item .rank .num{font-family:Times New Roman,Times,serif;font-size:24px}.domVideoTop .item .cover{-webkit-box-flex:0;border-radius:6px;-ms-flex:none;flex:none;height:92px;overflow:hidden;position:relative;width:172px}\n",document.head.appendChild(n),{setters:[e=>{i=e.r},e=>{a=e.av,d=e.aw,r=e.ax,o=e.N},e=>{s=e.L},e=>{l=e.j,c=e.a}],execute:function(){e("G",i.exports.memo((({list:e=[]})=>l("div",{className:"domVideoTop grid grid-cols-2",children:e.map(((e,t)=>{return c("div",{className:"item",children:[c("div",{className:"rank flex-center flex-none flex-col",children:[l("div",{className:"num text-gray-400",children:String(t+1).padStart(2,"0")}),l("div",{className:"arrow",children:(i=e.lastRank,n=t+1,i<n?l(d,{className:"text-blue-800",size:10}):i>n?l(r,{className:"text-red-800",size:10}):l(o,{size:10}))})]}),l("div",{className:"cover",children:c(s,{to:`/player/mv/${e.id}`,children:[l("img",{className:"w-full h-ull object-cover block",src:e.cover,alt:""}),c("div",{className:"score absolute right-0 top-0 p-1 text-white flex-center",children:[l(a,{size:16}),e.score]})]})}),c("div",{className:"aside flex-auto w-px px-2",children:[l("div",{className:"name truncate",children:l(s,{to:`/player/mv/${e.id}`,className:"text-sm ui_text_black_hover",children:e.name})}),l("div",{className:"artists mt-4 truncate text-gray-300",children:e.artists.map(((e,t)=>c("span",{children:[t>0&&" / ",l(s,{to:`/artist/${e.id}`,className:"ui_text_gray_hover",children:e.name})]},e.id)))})]})]},e.id);var i,n}))}))))}}}));
