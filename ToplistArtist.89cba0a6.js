"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[5335],{1971:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});var l=a(2137),s=a(9351),r=(a(7042),a(1249),a(8309),a(7757)),n=a.n(r),c=a(3804),i=a.n(c),m=a(847),o=a(7484),d=a.n(o),v=a(4184),u=a.n(v),p=a(6866),f=[["华语","1"],["欧美","2"],["韩国","3"],["日本","4"]];const x=(0,c.memo)((function(e){var t=e.type,a=void 0===t?1:t,r=(0,c.useState)([]),o=(0,s.Z)(r,2),v=o[0],x=o[1],E=(0,c.useState)(0),N=(0,s.Z)(E,2),y=N[0],h=N[1],g=function(){var e=(0,l.Z)(n().mark((function e(){var t,l;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.MP)(a);case 3:t=e.sent,l=t.list,x(l.artists),h(l.updateTime),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){g()}),[a]);var k=v.slice(0,3),b=v.slice(3);return i().createElement("div",{className:"domtoplistartist flex flex-col h-full"},i().createElement("div",{className:"domtoplistartist_header border-b px-8 pt-5 pb-2.5"},i().createElement("div",{className:"domtoplistartist_title h1"},"云音乐歌手榜"),i().createElement("div",{className:"flex items-baseline justify-between mt-6"},i().createElement("div",{className:"domtoplistartist_nav flex space-x-6"},f.map((function(e){var t=(0,s.Z)(e,2),a=t[0],l=t[1];return i().createElement(m.NavLink,{key:a,className:"domtoplistartist_nav_link text-sm",activeClassName:"font-bold",to:l},a)}))),i().createElement("div",{className:"text-gray-400"},"更新时间：",d()(y).format("MM月DD日")))),i().createElement("div",{className:"overflow-auto h-full pb-10"},i().createElement("div",{className:"domtoplistartist_top3_list py-5 px-8 grid grid-cols-3 gap-x-5"},k.map((function(e,t){return i().createElement(m.Link,{className:"domtoplistartist_top3_link rounded-lg overflow-hidden bg-gray-50 hover:bg-gray-100 flex relative",to:"/artist/".concat(e.id),key:e.id,style:{height:100}},i().createElement("div",{className:"absolute text-red-300 text-4xl"},t+1),i().createElement("div",{className:"flex-auto flex flex-col justify-center pl-8"},i().createElement("div",{className:"text-sm"},e.name),i().createElement("div",{className:"score text-gray-400 mt-2"},"热度：",e.score)),i().createElement("div",{className:"cover border"},i().createElement("img",{src:"".concat(e.picUrl,"?param=100y100"),alt:""})))}))),i().createElement("div",{className:"domtoplistartist_other_list"},b.map((function(e,t){return i().createElement(m.Link,{className:u()("domtoplistartist_other_link flex items-center h-20 hover:bg-gray-100",{"bg-gray-50":t%2==0}),to:"/artist/".concat(e.id),key:e.id},i().createElement("div",{className:"index flex flex-col items-center justify-center w-16 text-gray-400"},i().createElement("div",{className:"text-sm"},t+4),i().createElement("div",null,e.lastRank===t+3&&"-0",e.lastRank>t+3&&i().createElement("div",null,i().createElement("span",{className:"text-red-500"},"↑"),e.lastRank-t-3),e.lastRank<t+3&&i().createElement("div",null,i().createElement("span",{className:"text-blue-500"},"↓"),t+3-e.lastRank))),i().createElement("div",{className:"cover rounded overflow-hidden"},i().createElement("img",{src:"".concat(e.picUrl,"?param=100y100"),alt:""})),i().createElement("div",{className:"name flex-auto text-sm pl-2"},e.name),i().createElement("div",{className:"score text-gray-400 w-32"},"热度：",e.score))})))))}))}}]);