System.register(["./react-legacy.b3bc90c5.js","./index-legacy.860d7a31.js","./qrcode.react-legacy.685a2ddb.js"],(function(t,e){"use strict";var s,a,c,r,n,i;return{setters:[t=>{s=t.r},t=>{a=t.u,c=t.ap,r=t.G,n=t.o},t=>{i=t.j}],execute:function(){t("P",s.exports.memo((({children:t,id:e,className:s=""})=>{const o=a();return i("button",{type:"button",onClick:async()=>{const t=await c({id:e});if(0===t.playlist.trackCount)return!1;const{songs:s}=await r({ids:t.playlist.trackIds.map((({id:t})=>t)).join(",")});return o(n({playlist:s}))},className:s,children:t})})))}}}));
