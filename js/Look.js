"use strict";(this.webpackChunk_wyy_web=this.webpackChunk_wyy_web||[]).push([[113],{5599:(e,t,n)=>{n.r(t),n.d(t,{default:()=>X});var r=n(7363),a=n.n(r),c=n(6711),o=n(2342),i=n(643),u=n(2924),l=n.n(u)()("https://enigmatic-forest-38434.herokuapp.com",{autoConnect:!1});l.on("create-success",(function(e){console.log("create-success",e)})),l.on("create-error",(function(e){console.log("create-error",e)})),l.on("join-success",(function(e){console.log("join-success",e)})),l.on("join-info",(function(e){console.log("join-info",e)})),l.on("disconnect-success",(function(e){console.log("disconnect-success",e)})),l.on("private",(function(e){console.log("private",e)})),l.on("publish",(function(e){console.log("publish",e,l)}));const s=l;var f=n(458),d=n.n(f),p="SOCKET_CONNECT",m="SOCKET_DISCONNECT";console.log((new(d())).getResult());var v=function(e,t){var n=t.type;switch(t.payload,n){case p:return void s.connect();case m:return void s.disconnect();default:return e}},h={socket:s};function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=(0,r.createContext)(null);const b=(0,r.memo)((function(){(0,i.T)();var e,t,n=(e=(0,o.C)(v,h),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,c=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=n[0],l=n[1];return(0,r.useEffect)((function(){return l({type:p}),function(){l({type:m})}}),[]),a().createElement(y.Provider,{value:{lookReducer:u,lookDispatch:l}},a().createElement(c.Outlet,null))}));var k=n(6319),w=n.n(k),x=function(e){var t=e.list;return a().createElement("div",{className:"grid grid-cols-3 gap-5"},t.map((function(e){var t=e.uid,n=void 0===t?"":t,r=e.title,o=void 0===r?"":r,i=e.banner,u=void 0===i?"":i,l=e.user,s=void 0===l?"":l;return a().createElement("div",{key:n},a().createElement(c.Link,{to:n},a().createElement("img",{className:"aspect-video cursor-pointer",loading:"lazy",src:u,alt:""})),a().createElement(c.Link,{to:n,className:"cursor-pointer"},o),a().createElement("div",null,a().createElement(c.Link,{to:"/user/".concat(n)},s)))})))};const E=(0,r.memo)(x);function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function j(e,t,n,r,a,c,o){try{var i=e[c](o),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,c=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return C(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const O=(0,r.memo)((function(){var e,t,n=S((0,r.useState)(20),2),o=(n[0],n[1],(0,r.useContext)(y)),i=(o.lookReducer.socket,o.lookDispatch,(0,r.useRef)(null)),u=(0,r.useRef)(null),l=S((0,r.useState)([]),2),s=(l[0],l[1],S((0,r.useState)([]),2)),f=s[0],d=s[1],p=(e=w().mark((function e(){var t;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://enigmatic-forest-38434.herokuapp.com","/list")).then((function(e){return e.json()}));case 2:t=e.sent.data,d(t);case 4:case"end":return e.stop()}}),e)})),t=function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function o(e){j(c,r,a,o,i,"next",e)}function i(e){j(c,r,a,o,i,"throw",e)}o(void 0)}))},function(){return t.apply(this,arguments)});return(0,r.useEffect)((function(){p()}),[]),a().createElement("div",{className:"domLook overflow-auto max-h-full flex-auto",ref:i},a().createElement("div",{className:"domLook_header ui_header"},a().createElement("span",{className:"title h1"},"LOOK直播"),a().createElement("span",{className:"text-gray-400 slogan ml-2"},"在这里，看见音乐"),a().createElement(c.Link,{to:"my",className:"ml-2 py-1 px-2 rounded bg-red-500 text-white"},"我的直播"),a().createElement("a",{href:"https://look.163.com/hot",className:"text-gray-400 ml-auto"},"更多 >")),a().createElement("div",{className:"px-8"},a().createElement(E,{list:f}),a().createElement("div",{ref:u})))}));var A=n(3849),N=n.n(A),D=n(2611);function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function P(e,t,n,r,a,c,o){try{var i=e[c](o),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,c=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return R(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var F={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"turn:192.158.29.39:3478?transport=udp",credential:"JZEOEt2V3Qb0y27GRntt2u2PAYA=",username:"28224511:1379330808"},{urls:"turn:192.158.29.39:3478?transport=tcp",credential:"JZEOEt2V3Qb0y27GRntt2u2PAYA=",username:"28224511:1379330808"}]};function T(e,t,n,r,a,c,o){try{var i=e[c](o),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function L(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function o(e){T(c,r,a,o,i,"next",e)}function i(e){T(c,r,a,o,i,"throw",e)}o(void 0)}))}}function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _,q,U=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.candidate=null,this.id=null;var n=t.iceCandidateCallback,r=t.negotiationneededCallback,a=t.trackCallback;this.pc=new RTCPeerConnection(F),this.iceCandidateCallback=n,this.negotiationneededCallback=r,this.trackCallback=a,this.init()}var t,n,r=e.prototype;return r.init=function(){var e=this;this.pc.onicecandidate=function(t){console.log("pc onicecandidate","id: ",e.id);var n=t.candidate;n&&(e.candidate=n,e.iceCandidateCallback(n))},this.pc.onconnectionstatechange=function(t){console.log("pc onconnectionstatechange",e.pc.connectionState),e.pc.connectionState},this.pc.ondatachannel=function(e){console.log("Data channel is created!"),e.channel.onopen=function(){console.log("Data channel is open and ready to be used.")}},this.pc.onicecandidateerror=function(e){console.log("pc onicecandidateerror"),e.errorCode>=300&&e.errorCode<=699||e.errorCode>=700&&e.errorCode},this.pc.oniceconnectionstatechange=function(t){console.log("pc oniceconnectionstatechange",e.pc.iceConnectionState),"failed"===e.pc.iceConnectionState||"disconnected"===e.pc.iceConnectionState||e.pc.iceConnectionState},this.pc.onicegatheringstatechange=function(t){console.log("pc onicegatheringstatechange",e.pc.iceGatheringState);var n="Unknown";switch(e.pc.iceGatheringState){case"new":case"complete":n="Idle";break;case"gathering":n="Determining route"}console.log("label",n)};var t,n=this;this.pc.onnegotiationneeded=(t=L(w().mark((function e(t){return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("pc onnegotiationneeded"),e.prev=1,e.t0=n.pc,e.next=5,n.pc.createOffer();case 5:return e.t1=e.sent,e.next=8,e.t0.setLocalDescription.call(e.t0,e.t1);case 8:n.negotiationneededCallback(n.pc.localDescription),e.next=14;break;case 11:e.prev=11,e.t2=e.catch(1),console.log("onnegotiationneeded error \n",e.t2);case 14:case"end":return e.stop()}}),e,null,[[1,11]])}))),function(e){return t.apply(this,arguments)}),this.pc.onsignalingstatechange=function(t){console.log("pc onsignalingstatechange",e.pc.signalingState),e.pc.signalingState},this.pc.ontrack=function(t){e.trackCallback(t)}},r.addTrack=function(e,t){this.pc.addTrack(e,t)},r.start=function(){var e=this;return L(w().mark((function t(){var n;return w().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.pc.createOffer();case 3:return n=t.sent,t.next=6,e.pc.setLocalDescription(n);case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("createOffer error \n",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},r.gotDescription=function(e){var t=this;return L(w().mark((function n(){return w().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.pc.setRemoteDescription(e);case 3:return n.t0=t.pc,n.next=6,t.pc.createAnswer();case 6:return n.t1=n.sent,n.next=9,n.t0.setLocalDescription.call(n.t0,n.t1);case 9:n.next=14;break;case 11:n.prev=11,n.t2=n.catch(0),console.log("createAnswer error \n",n.t2);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))()},r.gotIceCandidate=function(e){var t=this;return L(w().mark((function n(){return w().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.pc.addIceCandidate(e);case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.log("addIceCandidate error \n",n.t0);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})))()},t=e,(n=[{key:"localDescription",get:function(){return this.pc.localDescription}},{key:"remoteDescription",get:function(){return this.pc.remoteDescription}},{key:"iceCandidate",get:function(){return this.candidate}}])&&M(t.prototype,n),e}();function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function G(e,t,n,r,a,c,o){try{var i=e[c](o),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,a)}function Z(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function o(e){G(c,r,a,o,i,"next",e)}function i(e){G(c,r,a,o,i,"throw",e)}o(void 0)}))}}function $(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){$(e,t,n[t])}))}return e}function J(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,c=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return c}}(e,t)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Q=function(e){var t=e.onClick,n=e.children,r=e.status,c=void 0!==r&&r;return a().createElement("button",{type:"button",className:N()("text-white rounded px-2 h-8 flex-center",c?"bg-red-500":"bg-blue-500"),onClick:t},n)},V=function(e){var t=e.name,n=e.children,r=e.checked,c=e.onChange;return a().createElement("label",{htmlFor:t},a().createElement("input",{type:"checkbox",id:t,name:t,checked:r,onChange:function(){return c(t)}}),n)},W=[{key:"desktop",name:"桌面"},{key:"video",name:"摄像头-画面"},{key:"audio",name:"摄像头-声音"},{key:"face",name:"摄像头-人脸识别"}],Y=[{key:"audioinput",name:"音频输入"},{key:"videoinput",name:"视频输入"}];const B=(0,r.memo)((function(){var e,t=(0,r.useContext)(y),n=t.lookReducer.socket,c=(t.lookDispatch,function(){var e=I((0,r.useState)([]),2),t=e[0],n=e[1],a=I((0,r.useState)([]),2),c=a[0],o=a[1];return(0,r.useEffect)((function(){var e;(e=w().mark((function e(){var t,r,a,c,i,u,l,s,f;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.enumerateDevices();case 2:t=e.sent,r=[],a=[],c=!0,i=!1,u=void 0,e.prev=6,l=t[Symbol.iterator]();case 8:if(c=(s=l.next()).done){e.next=24;break}f=s.value,e.t0=f.kind,e.next="audioinput"===e.t0?13:"videoinput"===e.t0?15:"audiooutput"===e.t0?17:19;break;case 13:return r.push(f),e.abrupt("break",21);case 15:return a.push(f),e.abrupt("break",21);case 17:return console.log("audiooutput: ",f),e.abrupt("break",21);case 19:return console.log("default device"),e.abrupt("break",21);case 21:c=!0,e.next=8;break;case 24:e.next=30;break;case 26:e.prev=26,e.t1=e.catch(6),i=!0,u=e.t1;case 30:e.prev=30,e.prev=31,c||null==l.return||l.return();case 33:if(e.prev=33,!i){e.next=36;break}throw u;case 36:return e.finish(33);case 37:return e.finish(30);case 38:n(r),o(a);case 40:case"end":return e.stop()}}),e,null,[[6,26,30,38],[31,,33,37]])})),function(){var t=this,n=arguments;return new Promise((function(r,a){var c=e.apply(t,n);function o(e){P(c,r,a,o,i,"next",e)}function i(e){P(c,r,a,o,i,"throw",e)}o(void 0)}))})()}),[]),{audioinput:t,videoinput:c}}()),i=J((0,o.x)({desktop:!1,audio:!1,video:!1,face:!1}),2),u=i[0],l=i[1],s=(0,r.useRef)(null),f=(0,r.useRef)(null),d=(0,r.useRef)(new U({iceCandidateCallback:function(e){console.log("emit publish candidate"),n.emit("publish",{to:"337845818",candidate:e})},negotiationneededCallback:function(e){console.log("emit publish localDescription"),n.emit("publish",{to:"337845818",localDescription:e})}})),p=((0,r.useRef)(null),(0,r.useRef)(null)),m=J((0,o.x)({desktop:{},user:{}}),2),v=(m[0],m[1]),h=J((0,r.useState)({desktop:null,user:null,mixin:null}),2),g=h[0],b=h[1],k=(0,r.useRef)(),x=(0,r.useRef)(null),E=(0,r.useRef)(null),C=(0,r.useRef)(null),j=(0,r.useRef)(new FaceDetector),S=function(e){var t=e.current;return function(e){var n=e.target,r=n.clientWidth,a=n.clientHeight;t.width=r,t.height=a}},O=(e=Z(w().mark((function e(){var t,n,r,a,c,o,i,u,l,f,d,m;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return requestAnimationFrame(O),t=p.current,n=E.current,r=t.width,a=t.height,e.next=6,j.current.detect(s.current).catch((function(e){return console.log(e)}));case 6:for(c=e.sent,n.clearRect(0,0,r,a),n.beginPath(),n.lineWidth=3,n.strokeStyle="lime",n.setLineDash([5]),o=!0,i=!1,u=void 0,e.prev=13,l=c[Symbol.iterator]();!(o=(f=l.next()).done);o=!0)d=f.value,m=d.boundingBox,n.strokeRect(m.x,m.y,m.width,m.height);e.next=21;break;case 17:e.prev=17,e.t0=e.catch(13),i=!0,u=e.t0;case 21:e.prev=21,e.prev=22,o||null==l.return||l.return();case 24:if(e.prev=24,!i){e.next=27;break}throw u;case 27:return e.finish(24);case 28:return e.finish(21);case 29:case"end":return e.stop()}}),e,null,[[13,17,21,29],[22,,24,28]])}))),function(){return e.apply(this,arguments)});(0,r.useEffect)((function(){E.current=p.current.getContext("2d")}),[p]),(0,r.useEffect)((function(){C.current=x.current.getContext("2d")}),[x]);var A=function(){if(g.desktop){var e=x.current,t=e.width,n=e.height;requestAnimationFrame(A),C.current.drawImage(f.current,0,0,t,n)}},N=function(){if(g.user){requestAnimationFrame(N);var e=C.current,t=s.current;e.save(),e.scale(-1,1),e.drawImage(t,0,0,-200,200/k.current.aspectRatio),e.restore()}};(0,r.useEffect)((function(){console.log("streams desktop effect"),A()}),[g.desktop]),(0,r.useEffect)((function(){console.log("streams user effect"),N()}),[g.user]);var R=function(e,t){var n=e.kind;v((function(r){var a;null!==(a=(_=r[t])[q=n])&&void 0!==a||(_[q]=new Set),r[t][n].add(e)}))},F=function(){var e=Z(w().mark((function e(){var t,n,r,a,c,o,i,u,l;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.current,e.prev=1,e.next=4,navigator.mediaDevices.getDisplayMedia({audio:!0,video:!0});case 4:for(n=e.sent,b((function(e){return t=K({},e),r=null!=(r={desktop:n})?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n}(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})),t;var t,r})),t.srcObject=n,r=n.getTracks(),a=!0,c=!1,o=void 0,e.prev=9,i=r[Symbol.iterator]();!(a=(u=i.next()).done);a=!0)l=u.value,R(l,"desktop"),d.current.addTrack(l,n);e.next=17;break;case 13:e.prev=13,e.t0=e.catch(9),c=!0,o=e.t0;case 17:e.prev=17,e.prev=18,a||null==i.return||i.return();case 20:if(e.prev=20,!c){e.next=23;break}throw o;case 23:return e.finish(20);case 24:return e.finish(17);case 25:r[0].onended=function(){},e.next=31;break;case 28:e.prev=28,e.t1=e.catch(1),console.log("桌面捕捉",e.t1);case 31:case"end":return e.stop()}}),e,null,[[1,28],[9,13,17,25],[18,,20,24]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Z(w().mark((function e(){return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.current.start();case 2:n.emit("create",{detail:{title:"6666",user:"337845818",uid:"337845818",banner:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp03%2F1Z9211616415M2-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642140129&t=1cd7e5653b612ffbe71c1f461c5cb387"}}),F();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=(Z(w().mark((function e(){return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.current.start();case 2:n.emit("create",{detail:{title:"6666",user:"337845818",uid:"337845818",banner:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp03%2F1Z9211616415M2-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1642140129&t=1cd7e5653b612ffbe71c1f461c5cb387"}});case 3:case"end":return e.stop()}}),e)}))),function(){var e=Z(w().mark((function e(t){return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.current.gotIceCandidate(t.description);case 2:n.emit("private",{to:t.from,description:d.current.localDescription});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),M=function(e){e.description&&d.current.gotDescription(e.description),e.iceCandidate&&d.current.gotIceCandidate(e.iceCandidate)};(0,r.useEffect)((function(){return n.on("join-success",L),n.on("private",M),function(){n.off("join-success",L),n.off("private",L)}}),[]);var z=(0,r.useCallback)((function(e){l((function(t){var n=(0,D.get)(t,e);(0,D.set)(t,e,!n)}))}),[]);return a().createElement("div",{className:"w-full h-full p-8 overflow-auto"},a().createElement("div",{className:"flex"},a().createElement(Q,{onClick:T},"开始捕获并推送"),a().createElement("div",{className:"border ml-auto"},a().createElement("div",{className:"flex flex-col flex-wrap"},W.map((function(e){var t=e.key,n=e.name;return a().createElement(V,{key:t,name:t,onChange:z,checked:u[t]},a().createElement("span",null,n))})),Y.map((function(e){var t=e.key,n=e.name;return a().createElement("div",{key:t},a().createElement("span",null,n),a().createElement("select",{className:"border",disabled:!0},c[t].map((function(e,t){return a().createElement("option",{value:"",key:t},e.label)}))))}))))),a().createElement("div",{className:"flex flex-col"},a().createElement("div",{className:""},a().createElement("video",{className:"w-full",ref:f,autoPlay:!0,playsInline:!0,onLoadedMetadata:S(x)})),a().createElement("hr",null),a().createElement("div",{className:"relative"},a().createElement("video",{className:"w-full",ref:s,autoPlay:!0,playsInline:!0,style:{transform:"scale(-1, 1)"},onLoadedMetadata:S(p)}),a().createElement("canvas",{className:"absolute inset-0 w-full h-full",style:{transform:"scale(-1, 1)"},ref:p}))),a().createElement("hr",null),a().createElement("div",null,a().createElement("canvas",{className:"w-full",ref:x})))})),H=(0,r.memo)((function(){var e=(0,c.useParams)().uid,t=(0,r.useContext)(y),n=t.lookReducer.socket,o=(t.lookDispatch,(0,r.useRef)(new MediaStream),(0,r.useRef)(null)),i=(0,r.useRef)(new U({iceCandidateCallback:function(e){n.emit("private",{to:i.current.id,iceCandidate:e})},negotiationneededCallback:function(e){console.log("重发 description"),n.emit("private",{to:i.current.id,description:e})},trackCallback:function(e){console.log("get track",e),o.current.srcObject=e.streams[0]}})),u=function(e){e.from&&(i.current.id=e.from),e.description&&i.current.gotDescription(e.description),e.iceCandidate&&i.current.gotIceCandidate(e.iceCandidate)};return(0,r.useEffect)((function(){return n.on("private",u),n.on("publish",u),n.emit("join",{detail:{uid:e}}),function(){n.off("join-success",u)}}),[]),a().createElement("div",{className:"p-8 flex"},a().createElement("div",{className:"relative flex-1"},a().createElement("video",{ref:o,className:"w-full",autoPlay:!0,playsInline:!0})),a().createElement("div",{className:"w-1/4 flex flex-col ml-2 border"},a().createElement("div",{className:"flex-1 overflow-auto"}),a().createElement("hr",null),a().createElement("div",{className:""},a().createElement("textarea",{className:"resize-none p-1 h-16 w-full block",placeholder:"say something"}))))})),X=function(){return a().createElement(c.Routes,null,a().createElement(c.Route,{element:a().createElement(b,null)},a().createElement(c.Route,{index:!0,element:a().createElement(O,null)}),a().createElement(c.Route,{path:"my",element:a().createElement(B,null)}),a().createElement(c.Route,{path:":uid",element:a().createElement(H,null)})))}}}]);
//# sourceMappingURL=Look.js.map?version=5f0d7169