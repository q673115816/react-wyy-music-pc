"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[8113],{4710:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var c=n(7363),a=n.n(c),o=n(6711),l=n(885),r=n(9709);const s=(0,c.memo)((function(){var e=(0,c.useState)(20),t=(0,l.Z)(e,2),n=(t[0],t[1]),s=(0,c.useRef)(null),u=(0,c.useRef)(null);return(0,r.Z)((function(){n((function(e){return e+20}))}),s,u),a().createElement("div",{className:"domLook overflow-auto max-h-full flex-auto",ref:s},a().createElement("div",{className:"domLook_header ui_header"},a().createElement("span",{className:"title h1"},"LOOK直播"),a().createElement("span",{className:"text-gray-400 slogan ml-2"},"在这里，看见音乐"),a().createElement(o.Link,{to:function(e){var t=e.pathname;return"".concat(t,"/my")},className:"ml-2 py-1 px-2 rounded bg-red-500 text-white"},"我的直播"),a().createElement("a",{href:"https://look.163.com/hot",className:"text-gray-400 ml-auto"},"更多 >")),a().createElement("div",{className:"px-8"},a().createElement("div",null),a().createElement("div",{ref:u})))}));var u=n(5861),i=n(7757),m=n.n(i),f=(n(4747),n(1343)),d=n(6813),p=n(4184),h=n.n(p),v=(0,n(8594).ZP)("http://localhost:3333",{autoConnect:!1});v.on("create-success",(function(e){console.log(e)})),v.on("join-success",(function(e){console.log(e)})),v.on("disconnect-success",(function(e){console.log(e)}));const E=v;var k=(0,c.memo)((function(e){var t=e.onClick,n=e.status,c=e.children;return a().createElement("button",{type:"button",className:h()("text-white rounded p-2",n?"bg-red-500":"bg-blue-500"),onClick:t},c)}));const g=(0,c.memo)((function(){var e=(0,f.T)(),t=(0,f.C)(d.liveSelector).status,n=(0,c.useRef)(null),o=(0,c.useRef)(null),l=(0,c.useRef)(null),r=function(){var t=(0,u.Z)(m().mark((function t(){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e((0,d.pushOpen)()),E.connect(),E.emit("create",{uid:110});case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return a().createElement("div",{className:"w-full h-full p-8 overflow-auto"},a().createElement("div",{className:"flex"},a().createElement(k,{onClick:function(){t.deskTop?n.current&&(n.current.srcObject.getTracks().forEach((function(e){return e.stop()})),n.current.srcObject=null,e((0,d.deskTopClose)())):o.current=navigator.mediaDevices.getDisplayMedia({video:!0,audio:!0}).then((function(t){n.current.srcObject=t,e((0,d.deskTopOpen)())})).catch((function(e){return console.log(e)}))},status:t.deskTop},"桌面共享开关"),a().createElement(k,{onClick:function(){t.user?e((0,d.userClose)()):(e((0,d.userOpen)()),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(e){l.current&&(l.current.srcObject=e)})).catch((function(e){return console.log(e)})))},status:t.user},"摄像头开关"),a().createElement(k,{onClick:function(){t.push?(e((0,d.pushClose)()),E.disconnect()):r()},status:t.push},"推送开关")),a().createElement("div",{className:"flex flex-col"},a().createElement("div",{className:""},a().createElement("video",{className:"w-full",ref:n,autoPlay:!0,playsInline:!0})),a().createElement("div",{className:""},a().createElement("video",{className:"w-full",ref:l,autoPlay:!0,playsInline:!0}))))})),y=(0,c.memo)((function(){return a().createElement(o.Switch,null,a().createElement(o.Route,{path:"/look",exact:!0,component:s}),a().createElement(o.Route,{path:"/look/my",component:g}))}))}}]);