System.register(["./react-legacy.b3bc90c5.js","./index-legacy.25d39d6e.js","./qrcode.react-legacy.685a2ddb.js"],(function(t,e){"use strict";var s,a,c,n,r,i;return{setters:[t=>{s=t.r},t=>{a=t.u,c=t.an,n=t.F,r=t.n},t=>{i=t.j}],execute:function(){t("P",s.exports.memo((({children:t,id:e,className:s=""})=>{const l=a();return i("button",{type:"button",onClick:async()=>{const t=await c({id:e});if(0===t.playlist.trackCount)return!1;const{songs:s}=await n({ids:t.playlist.trackIds.map((({id:t})=>t)).join(",")});return l(r({playlist:s}))},className:s,children:t})})))}}}));
