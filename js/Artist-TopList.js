"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[131],{9282:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var l=a(7363),r=a.n(l),s=a(6711),n=a(5861),c=a(885),i=(a(7042),a(1249),a(8309),a(7757)),m=a.n(i),o=a(7484),d=a.n(o),u=a(4184),v=a.n(u),p=a(9428),f=[["华语","1"],["欧美","2"],["韩国","3"],["日本","4"]];const x=(0,l.memo)((function(e){var t=e.type,a=void 0===t?1:t,i=(0,l.useState)([]),o=(0,c.Z)(i,2),u=o[0],x=o[1],E=(0,l.useState)(0),N=(0,c.Z)(E,2),y=N[0],h=N[1],g=function(){var e=(0,n.Z)(m().mark((function e(){var t,l;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.MP)(a);case 3:t=e.sent,l=t.list,x(l.artists),h(l.updateTime),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){g()}),[a]);var k=u.slice(0,3),b=u.slice(3);return r().createElement("div",{className:"domtoplistartist flex flex-col h-full"},r().createElement("div",{className:"domtoplistartist_header border-b px-8 pt-5 pb-2.5"},r().createElement("div",{className:"domtoplistartist_title h1"},"云音乐歌手榜"),r().createElement("div",{className:"flex items-baseline justify-between mt-6"},r().createElement("div",{className:"domtoplistartist_nav flex space-x-6"},f.map((function(e){var t=(0,c.Z)(e,2),a=t[0],l=t[1];return r().createElement(s.NavLink,{key:a,className:function(e){var t=e.isActive;return v()("text-sm",t&&"font-bold")},to:l},a)}))),r().createElement("div",{className:"text-gray-400"},"更新时间：",d()(y).format("MM月DD日")))),r().createElement("div",{className:"overflow-auto h-full pb-10"},r().createElement("div",{className:"domtoplistartist_top3_list py-5 px-8 grid grid-cols-3 gap-x-5"},k.map((function(e,t){return r().createElement(s.Link,{className:"domtoplistartist_top3_link rounded-lg overflow-hidden bg-gray-50 hover:bg-gray-100 flex relative",to:"/artist/".concat(e.id),key:e.id,style:{height:100}},r().createElement("div",{className:"absolute text-red-300 text-4xl"},t+1),r().createElement("div",{className:"flex-auto flex flex-col justify-center pl-8"},r().createElement("div",{className:"text-sm"},e.name),r().createElement("div",{className:"score text-gray-400 mt-2"},"热度：",e.score)),r().createElement("div",{className:"cover border"},r().createElement("img",{src:"".concat(e.picUrl,"?param=100y100"),alt:""})))}))),r().createElement("div",{className:"domtoplistartist_other_list"},b.map((function(e,t){return r().createElement(s.Link,{className:v()("domtoplistartist_other_link flex items-center h-20 hover:bg-gray-100",{"bg-gray-50":t%2==0}),to:"/artist/".concat(e.id),key:e.id},r().createElement("div",{className:"index flex flex-col items-center justify-center w-16 text-gray-400"},r().createElement("div",{className:"text-sm"},t+4),r().createElement("div",null,e.lastRank===t+3&&"-0",e.lastRank>t+3&&r().createElement("div",null,r().createElement("span",{className:"text-red-500"},"↑"),e.lastRank-t-3),e.lastRank<t+3&&r().createElement("div",null,r().createElement("span",{className:"text-blue-500"},"↓"),t+3-e.lastRank))),r().createElement("div",{className:"cover rounded overflow-hidden"},r().createElement("img",{src:"".concat(e.picUrl,"?param=100y100"),alt:""})),r().createElement("div",{className:"name flex-auto text-sm pl-2"},e.name),r().createElement("div",{className:"score text-gray-400 w-32"},"热度：",e.score))})))))})),E=function(){return r().createElement(s.Routes,null,r().createElement(s.Route,{index:!0,element:r().createElement(x,null)}))}}}]);
//# sourceMappingURL=Artist-TopList.js.map?version=e14b2770