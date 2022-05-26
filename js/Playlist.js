"use strict";(this.webpackChunk_wyy_web=this.webpackChunk_wyy_web||[]).push([[238],{9933:(e,t,n)=>{n.r(t),n.d(t,{default:()=>re});var r=n(7363),a=n.n(r),l=n(6711),c=n(6319),i=n.n(c),s=n(2667),o=n(3849),u=n.n(o),m=n(441),d=n(8229),f=n(6083),p=n(6719),v=n(3424),y=n.n(v),b=function(e){var t=e.tags,n=void 0===t?[]:t;return 0===n.length?null:a().createElement("div",{className:"tags"},a().createElement("span",null,"标签："),n.map((function(e,t){return a().createElement("span",{key:e},t>0&&" / ",a().createElement(l.Link,{to:"/home/playlist/".concat(e),className:"tag ui_link"},e))})))};const E=(0,r.memo)(b);function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var x=function(e){var t=e.description,n=void 0===t?"":t;if(!n)return null;var l,c,i=(l=(0,r.useState)(!1),c=2,function(e){if(Array.isArray(e))return e}(l)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);c=!0);}catch(e){i=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw a}}return l}}(l,c)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(l,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=i[0],o=i[1],m=n.match(/^.*$/gm);return a().createElement("div",{className:"relative pr-5"},a().createElement("div",{className:"whitespace-pre-line leading-6"},"简介：",a().createElement("span",{className:u()("text-gray-500 select-text",!s&&"truncate inline-block max-w-xs align-bottom")},s?n:null==m?void 0:m[0]),a().createElement("button",{type:"button",onClick:function(){return o(!s)},className:"absolute top-0 right-0 text-gray-500"},s?a().createElement(p.IconCaretUp,{size:16,className:"fill-current"}):a().createElement(p.IconCaretDown,{size:16,className:"fill-current"}))))};const g=(0,r.memo)(x);var N=function(e){var t,n,r,c,i=e.data,s=void 0===i?{}:i,o=e.handleSub,u=e.songs;return a().createElement("div",{className:"p-8 flex items-start"},a().createElement("div",{className:"border rounded overflow-hidden flex-none w-92 h-92"},a().createElement("img",{loading:"lazy",className:"w-full h-full",src:"".concat(s.playlist.coverImgUrl,"?param=200y200"),alt:""})),a().createElement("div",{className:"info flex-auto w-0 ml-5"},a().createElement("div",{className:"name leading-tight"},a().createElement("span",{className:"whitespace-nowrap text-red-500 border border-current p-0.5 rounded mr-2 align-bottom inline-block"},"歌单"),a().createElement("span",{className:"h1 select-text"},s.playlist.name||"我喜欢的音乐")),a().createElement("div",{className:"creator flex items-center mt-2"},a().createElement(l.Link,{to:"/user/".concat(null===(t=s.playlist.creator)||void 0===t?void 0:t.userId),className:"w-6 h-6 rounded-full overflow-hidden mr-2"},a().createElement("img",{className:"",src:"".concat(null===(n=s.playlist.creator)||void 0===n?void 0:n.avatarUrl,"?param=50y50"),alt:""})),a().createElement(l.Link,{to:"/user/".concat(null===(r=s.playlist.creator)||void 0===r?void 0:r.userId),className:"nickname ui_link mr-2"},null===(c=s.playlist.creator)||void 0===c?void 0:c.nickname),a().createElement("span",{className:"text-gray-500"},y()(s.playlist.createTime||Date.now()).format("YYYY-MM-DD"),"创建")),a().createElement("div",{className:"actions flex space-x-2 mt-2"},a().createElement(d.Z,{playlist:u}),a().createElement("button",{onClick:function(){return o(s.playlist.subscribed)},type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full btn"},s.playlist.subscribed?a().createElement(p.IconCheckbox,{size:20,stroke:1}):a().createElement(p.IconFolderPlus,{size:20,stroke:1})," ",s.playlist.subscribed?"已收藏":"收藏","(".concat((0,f.Qb)(s.playlist.subscribedCount),")")),a().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full btn"},a().createElement(p.IconScreenShare,{size:20,stroke:1}),"  分享","(".concat((0,f.Qb)(s.playlist.shareCount),")")),a().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full btn"},a().createElement(p.IconCloudDownload,{size:20,stroke:1}),"  下载全部")),a().createElement("div",{className:"space-y-1 mt-2"},a().createElement(E,{tags:s.playlist.tags}),a().createElement("div",null,a().createElement("span",{className:"mr-3"},"歌曲：",a().createElement("span",{className:"text-gray-500"},s.playlist.trackCount)),a().createElement("span",null,"播放：",a().createElement("span",{className:"text-gray-500"},(0,f.LU)(s.playlist.playCount)))),a().createElement(g,{description:s.playlist.description}))))};const w=(0,r.memo)(N);var k=n(4867),S=n(7823),I=n(1483),C=n(9700),A=n(1811),j=n(9924),_=n(5382),P=function(e){var t=e.songs,n=void 0===t?[]:t;return n.length?a().createElement("div",{style:{"--ui_grid_template":"36px / 30px 30px 30px 36% 4fr 6fr 2fr"},className:"mt-4"},a().createElement("div",{className:"grid ui_grid_template pl-8"},a().createElement("div",null),a().createElement("div",null),a().createElement("div",null),a().createElement("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500"},"音乐标题"),a().createElement("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500"},"歌手"),a().createElement("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500"},"专辑"),a().createElement("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500"},"时长")),n.map((function(e,t){return a().createElement(k.Z,{schema:[["评论","播放","下一首播放"],["收藏到歌单","分享","复制链接","不感兴趣","下载"]],type:"song",item:e,key:e.id},a().createElement("div",{tabIndex:2,className:u()("grid items-center focus:outline-none focus:bg-gray-200 hover:bg-gray-100 ui_grid_template pl-8",t%2==0&&"bg-gray-50")},a().createElement("div",{className:"px-1"},a().createElement(S.Z,{index:t,id:e.id})),a().createElement("div",{className:"px-1"},a().createElement(I.Z,{id:e.id})),a().createElement("div",{className:"px-1"},a().createElement(C.Z,null)),a().createElement(A.Z,{className:"px-1",item:e}),a().createElement(j.Z,{className:"px-1",artists:e.ar}),a().createElement(_.Z,{className:"px-1",name:e.al.name,id:e.al.id}),a().createElement("div",{className:"text-gray-500 px-1"},y()(e.dt).format("mm:ss"))))}))):a().createElement("div",{className:"pt-16 text-center text-sm text-gray-400"},"暂无音乐")};const Z=(0,r.memo)(P);var O=n(3767),D=n(3184),U=n(3442);const z=(0,r.memo)((function(){var e=(0,l.useParams)().id,t=(0,U.hn)({id:e}),n=t.data,c=t.isLoading,i=(0,r.useCallback)((function(){}),[]);return a().createElement("div",{className:"px-8"},a().createElement("div",{className:"pt-10 pb-10"},a().createElement(D.Z,{max:140,placeholder:"",onChange:i})),c?a().createElement(m.Z,null):a().createElement(O.Z,{comments:n,type:0,more:e}))}));var T=n(6148),L=n(5879);function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Y(e,t,n,r,a,l,c){try{var i=e[l](c),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,a)}function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);c=!0);}catch(e){i=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const R=(0,r.memo)((function(){var e,t,n=(0,l.useParams)().id,c=$((0,r.useState)(1),2),o=c[0],u=c[1],d=$((0,r.useState)({}),2),f=d[0],p=d[1],v=$((0,r.useState)(!0),2),y=v[0],b=v[1],E=(e=i().mark((function e(){var t,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.UL)({id:n,limit:60,offset:60*(o-1)});case 2:t=e.sent,r=t.subscribers,a=t.total,p({subscribers:r,total:a}),b(!1);case 7:case"end":return e.stop()}}),e)})),t=function(){var t=this,n=arguments;return new Promise((function(r,a){var l=e.apply(t,n);function c(e){Y(l,r,a,c,i,"next",e)}function i(e){Y(l,r,a,c,i,"throw",e)}c(void 0)}))},function(){return t.apply(this,arguments)});return(0,r.useEffect)((function(){E()}),[]),y?a().createElement("div",{className:"flex-center pt-32"},a().createElement(m.Z,null)):a().createElement("div",{className:"px-8"},a().createElement("div",{className:"domPlaylistDetail_subscribers flex justify-between flex-wrap"},null==f?void 0:f.subscribers.map((function(e){return a().createElement("div",{key:e.userId,className:"item flex mt-6 w-80 "},a().createElement(l.Link,{to:"/user/".concat(e.userId),className:"avatar w-24 h-24 border rounded-full overflow-hidden"},a().createElement("img",{loading:"lazy",src:"".concat(e.avatarUrl,"?param=100y100"),alt:""})),a().createElement("div",{className:"ml-2 flex-auto w-0 flex flex-col justify-center"},a().createElement("div",{className:"text-sm flex items-center"},a().createElement(l.Link,{to:"/user/".concat(e.userId)},e.nickname)," ",a().createElement(T.ZP,{gender:e.gender,size:16})),a().createElement("div",{className:"mt-2 truncate"},e.signature)))}))),a().createElement(L.Z,{total:Math.ceil((null==f?void 0:f.total)/60),page:o,func:u}))}));var Q=n(7059),F=n(6914);function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function W(e,t,n,r,a,l,c){try{var i=e[l](c),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,a)}function q(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var l=e.apply(t,n);function c(e){W(l,r,a,c,i,"next",e)}function i(e){W(l,r,a,c,i,"throw",e)}c(void 0)}))}}function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);c=!0);}catch(e){i=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return V(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var G=[["歌曲列表","Playlist"],["评论","Comments"],["收藏者","Subscribers"]],H={Playlist:Z,Comments:z,Subscribers:R};const J=(0,r.memo)((function(){var e,t=(0,l.useParams)().id,n=(0,F.p)(),c=B((0,r.useState)(!0),2),o=c[0],d=c[1],f=B((0,r.useState)([]),2),p=f[0],v=f[1],y=B((0,Q.x)({}),2),b=y[0],E=y[1],h=B((0,r.useState)(G[0][1]),2),x=h[0],g=h[1],N=(e=q(i().mark((function e(){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.MY)({id:t});case 3:if(n=e.sent,E(n),!(n.playlist.trackCount>0)){e.next=10;break}return e.next=8,(0,s.VO)({ids:n.playlist.trackIds.map((function(e){return e.id})).join(",")});case 8:r=e.sent.songs,v(r);case 10:d(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])}))),function(){return e.apply(this,arguments)}),k=(0,r.useCallback)(function(){var e=q(i().mark((function e(r){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.so)({t:r?2:1,id:t});case 3:200===e.sent.code&&(n(r?"取消收藏成功！":"收藏成功！"),E((function(e){e.playlist.subscribed=!r}))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[t]);return(0,r.useEffect)((function(){N()}),[t]),o?a().createElement("div",{className:"w-full h-full flex-center"},a().createElement(m.Z,null)):a().createElement("div",{className:"overflow-auto h-full"},a().createElement(w,{data:b,handleSub:k,songs:p}),a().createElement("div",{className:"mt-4"},a().createElement("div",{className:"space-x-4 flex items-baseline px-8"},G.map((function(e){var t=B(e,2),n=t[0],r=t[1];return a().createElement("button",{type:"button",className:u()("text-sm",x===r&&"font-bold ui_underline"),key:n,onClick:function(){return g(r)}},n,"评论"===n&&"(".concat(b.playlist.commentCount,")"))}))),a().createElement("div",null,(0,r.createElement)(H[x],{songs:p}))))}));function K(e,t,n,r,a,l,c){try{var i=e[l](c),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,a)}function X(e){throw e}const ee=(0,r.memo)((function(e){var t,n,l=e.id,c=(t=i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.NW)({rid:l});case 3:t=null!==(t=e.sent)?t:X(new TypeError("Cannot destructure undefined")),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})),n=function(){var e=this,n=arguments;return new Promise((function(r,a){var l=t.apply(e,n);function c(e){K(l,r,a,c,i,"next",e)}function i(e){K(l,r,a,c,i,"throw",e)}c(void 0)}))},function(){return n.apply(this,arguments)});return(0,r.useEffect)((function(){c()}),[]),a().createElement("div",{className:"domPlaylistDetail"},a().createElement("div",{className:"domPlaylistDetail_header"}),a().createElement("div",{className:"domPlaylistDetail_main"},"TODO"))}));function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ne(){var e,t;return(e=(0,r.useState)(0),t=1,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);c=!0);}catch(e){i=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return te(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?te(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],a().createElement("div",null,"TOTO")}const re=function(){return a().createElement(l.Routes,null,a().createElement(l.Route,{path:"music/:id",element:a().createElement(J,null)}),a().createElement(l.Route,{path:"dj/:id",element:a().createElement(ee,null)}),a().createElement(l.Route,{path:"album/:id",element:a().createElement(ne,null)}))}}}]);
//# sourceMappingURL=Playlist.js.map?version=92092f37