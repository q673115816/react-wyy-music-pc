"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[113],{4474:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var r=n(7363),a=n.n(r),c=n(6711),l=n(885),o=n(57),s=n(9638),u=n(2924),i=n.n(u)()("https://enigmatic-forest-38434.herokuapp.com",{autoConnect:!1});i.on("create-success",(function(e){console.log(e)})),i.on("join-success",(function(e){console.log(e)})),i.on("disconnect-success",(function(e){console.log(e)}));const m=i;var f="SOCKET_DESKTOP_START",d="SOCKET_DESKTOP_END",v="SOCKET_USER_START",p="SOCKET_USER_END",E="SOCKET_PUSH_START",h="SOCKET_PUSH_END",y=function(e,t){switch(t.type){case"SOCKET_CONNECT":return m.connect(),void(e.status.connect=!0);case"SOCKET_DISCONNECT":return m.disconnect(),void(e.status.connect=!1);case f:return void(e.status.deskTop=!0);case d:return void(e.status.deskTop=!1);case v:return void(e.status.user=!0);case p:return void(e.status.user=!1);case E:return m.emit("create",{user:"user",title:"title"}),void(e.status.push=!0);case h:return void(e.status.push=!1);default:return e}},g={status:{connect:!1,deskTop:!1,user:!1,push:!1,faceDetector:!1}},k=(0,r.createContext)(null);const b=(0,r.memo)((function(){(0,s.T)();var e=(0,o.C)(y,g),t=(0,l.Z)(e,2),n=t[0],u=t[1];return(0,r.useEffect)((function(){}),[]),a().createElement(k.Provider,{value:{lookReducer:n,lookDispatch:u}},a().createElement(c.Outlet,null))}));var N=n(5861),w=n(7757),x=n.n(w),T=n(7467),C=n.n(T),S=n(7453),R=n(8157);n(1249),n(2222);const O=(0,r.memo)((function(e){var t=e.list,n=(0,c.useLocation)().pathname;return a().createElement("div",{className:"grid grid-cols-3 gap-5"},t.map((function(e){var t=(0,l.Z)(e,2),r=t[0],o=t[1];return a().createElement("div",{key:r},a().createElement(c.Link,{to:"".concat(n,"/").concat(r)},a().createElement("img",{className:"ui_aspect-ratio-16/9 cursor-pointer",loading:"lazy",src:o.banner,alt:""})),a().createElement(c.Link,{to:"".concat(n,"/").concat(r),className:"cursor-pointer"},o.title),a().createElement("div",null,a().createElement(c.Link,{to:"/"},o.user)))})))})),D=(0,r.memo)((function(){var e=(0,r.useState)(20),t=(0,l.Z)(e,2),n=(t[0],t[1],(0,r.useRef)(null)),o=(0,r.useRef)(null),s=(0,r.useState)([]),u=(0,l.Z)(s,2),i=(u[0],u[1],(0,S.useQuery)("look",(0,N.Z)(x().mark((function e(){var t,n;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C().get("".concat("https://enigmatic-forest-38434.herokuapp.com","/list")).then((function(e){return e.data}));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)}))))),m=i.data,f=(i.error,i.isLoading),d=i.isSuccess;return i.status,a().createElement("div",{className:"domLook overflow-auto max-h-full flex-auto",ref:n},a().createElement("div",{className:"domLook_header ui_header"},a().createElement("span",{className:"title h1"},"LOOK直播"),a().createElement("span",{className:"text-gray-400 slogan ml-2"},"在这里，看见音乐"),a().createElement(c.Link,{to:"my",className:"ml-2 py-1 px-2 rounded bg-red-500 text-white"},"我的直播"),a().createElement("a",{href:"https://look.163.com/hot",className:"text-gray-400 ml-auto"},"更多 >")),a().createElement("div",{className:"px-8"},f&&a().createElement("div",{className:"pt-48 flex-center"},a().createElement(R.Z,null)),d&&a().createElement(O,{list:m}),a().createElement("div",{ref:o})))}));n(7042),n(8309),n(1038),n(8783),n(2526),n(1817),n(2165),n(6992),n(3948),n(2772),n(4916),n(4723),n(1539),n(4747);var _=n(4184),L=n.n(_);function P(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){o=!0,c=e},f:function(){try{l||null==n.return||n.return()}finally{if(o)throw c}}}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var K=function(e){var t=e.onClick,n=e.children,r=e.status;return a().createElement("button",{type:"button",className:L()("text-white rounded p-2",r?"bg-red-500":"bg-blue-500"),onClick:t},n)};const A=(0,r.memo)((function(){var e=(0,r.useContext)(k),t=e.lookReducer,n=t.status,c=(t.socket,e.lookDispatch),o=(0,r.useState)([]),s=(0,l.Z)(o,2),u=s[0],i=s[1],m=(0,r.useState)([]),y=(0,l.Z)(m,2),g=y[0],b=y[1];(0,r.useEffect)((function(){(0,N.Z)(x().mark((function e(){var t,n,r,a,c,l;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.enumerateDevices();case 2:t=e.sent,n=[],r=[],a=P(t);try{for(a.s();!(c=a.n()).done;)"audioinput"===(l=c.value).kind?n.push(l):"videoinput"===l.kind?r.push(l):console.log("other kind: ",l)}catch(e){a.e(e)}finally{a.f()}i(n),b(r);case 9:case"end":return e.stop()}}),e)})))()}),[]);var w=(0,r.useRef)(null),T=(0,r.useRef)(null),C=((0,r.useRef)(null),(0,r.useRef)(null)),S=(0,r.useRef)(null),R=(0,r.useRef)(new FaceDetector);return(0,r.useEffect)((function(){S.current=C.current.getContext("2d")}),[C]),a().createElement("div",{className:"w-full h-full p-8 overflow-auto"},a().createElement("div",{className:"flex"},a().createElement(K,{onClick:function(){if(!navigator.mediaDevices||!navigator.mediaDevices.getDisplayMedia)return!1;var e=T.current;n.deskTop?(e.srcObject.getTracks().forEach((function(e){return e.stop()})),e.srcObject=null,c({type:d})):navigator.mediaDevices.getDisplayMedia({audio:!0,video:!0}).then((function(t){e.srcObject=t,c({type:f})}))},status:n.deskTop},"桌面共享开关"),a().createElement(K,{onClick:function(){var e=w.current;n.user?(e.srcObject.getTracks().forEach((function(e){return e.stop()})),e.srcObject=null,c({type:p})):navigator.mediaDevices.getUserMedia({video:{width:{ideal:1280},height:{ideal:720}}}).then((function(t){console.log(t),e.srcObject=t,c({type:v})}))},status:n.user},"摄像头开关"),a().createElement(K,{onClick:function e(){requestAnimationFrame(e);var t=C.current,n=t.width,r=t.height;R.current.detect(w.current).then((function(e){S.current.clearRect(0,0,n,r),S.current.beginPath(),S.current.lineWidth=3,S.current.strokeStyle="lime",S.current.setLineDash([5]);var t,a=P(e);try{for(a.s();!(t=a.n()).done;){var c=t.value.boundingBox;S.current.strokeRect(c.x,c.y,c.width,c.height)}}catch(e){a.e(e)}finally{a.f()}})).catch((function(e){return console.log(e)}))},status:n.faceDetector},"人脸识别"),a().createElement(K,{onClick:function(){n.push?c({type:h}):(c({type:E}),new RTCPeerConnection({}).addEventListener("icecandidate",(function(e){e.target;var t=e.candidate;t&&new RTCIceCandidate(t)})))},status:n.push},"推送")),a().createElement("div",{className:"flex"},a().createElement("span",null,"音频输入"),a().createElement("select",{className:"border"},u.map((function(e,t){return a().createElement("option",{value:"",key:t},e.label)}))),a().createElement("span",null,"视频输入"),a().createElement("select",{className:"border"},g.map((function(e,t){return a().createElement("option",{value:"",key:t},e.label)})))),a().createElement("div",{className:"flex flex-col"},a().createElement("div",{className:""},a().createElement("video",{className:"w-full",ref:T,autoPlay:!0,playsInline:!0})),a().createElement("hr",null),a().createElement("div",{className:"relative"},a().createElement("video",{className:"w-full",ref:w,autoPlay:!0,playsInline:!0,style:{transform:"scale(-1, 1)"},onLoadedMetadata:function(e){var t=e.target,n=t.videoWidth,r=t.videoHeight;C.current.width=n,C.current.height=r}}),a().createElement("canvas",{className:"absolute inset-0 w-full h-full",style:{transform:"scale(-1, 1)"},ref:C}))))})),Z=(0,r.memo)((function(){(0,c.useParams)().id;var e=(0,r.useRef)(null),t=function(){var t=(0,N.Z)(x().mark((function t(){var n,r;return x().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.current){t.next=2;break}return t.abrupt("return");case 2:return n=e.current,t.next=5,navigator.mediaDevices.getDisplayMedia({video:!0});case 5:r=t.sent,console.log(r.getTracks()),r.getTracks().forEach((function(e){return e.addEventListener("ended",(function(){return console.log("停止共享回调")}))})),n.srcObject=r;case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,r.useEffect)((function(){t()}),[]),a().createElement("div",{className:"p-8 flex"},a().createElement("div",{className:"relative flex-1"},a().createElement("video",{ref:e,className:"w-full bg-black ui_aspect-ratio-16/9",autoPlay:!0,playsInline:!0}),a().createElement("video",{className:"absolute bottom-0 right-0 w-36 border m-4 ui_aspect-ratio-16/9",autoPlay:!0,playsInline:!0,muted:!0})),a().createElement("div",{className:"w-1/4 flex flex-col ml-2 border"},a().createElement("div",{className:"flex-1 overflow-auto"}),a().createElement("hr",null),a().createElement("div",{className:""},a().createElement("textarea",{className:"resize-none p-1 h-16 w-full block",placeholder:"say something"}))))})),I=function(){return a().createElement(c.Routes,null,a().createElement(c.Route,{element:a().createElement(b,null)},a().createElement(c.Route,{index:!0,element:a().createElement(D,null)}),a().createElement(c.Route,{path:"my",element:a().createElement(A,null)}),a().createElement(c.Route,{path:":id",element:a().createElement(Z,null)})))}}}]);
//# sourceMappingURL=Look.js.map?version=beda9a9c