!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var r={},n=Object.prototype,i=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(S){s=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var i=t&&t.prototype instanceof h?t:h,a=Object.create(i.prototype),o=new _(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(i,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw a;return E()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var c=w(o,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=d(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,o),a}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}r.wrap=u;var f={};function h(){}function m(){}function p(){}var v={};s(v,o,(function(){return this}));var y=Object.getPrototypeOf,x=y&&y(y(k([])));x&&x!==n&&i.call(x,o)&&(v=x);var g=p.prototype=h.prototype=Object.create(v);function b(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function N(t,r){function n(a,o,c,l){var s=d(t[a],t,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==e(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(e){n("next",e,c,l)}),(function(e){n("throw",e,c,l)})):r.resolve(f).then((function(e){u.value=e,c(u)}),(function(e){return n("throw",e,c,l)}))}l(s.arg)}var a;this._invoke=function(e,t){function i(){return new r((function(r,i){n(e,t,r,i)}))}return a=a?a.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=d(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,f;var i=n.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function k(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(i.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:E}}function E(){return{value:void 0,done:!0}}return m.prototype=p,s(g,"constructor",p),s(p,"constructor",m),m.displayName=s(p,l,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,s(e,l,"GeneratorFunction")),e.prototype=Object.create(g),e},r.awrap=function(e){return{__await:e}},b(N.prototype),s(N.prototype,c,(function(){return this})),r.AsyncIterator=N,r.async=function(e,t,n,i,a){void 0===a&&(a=Promise);var o=new N(u(e,t,n,i),a);return r.isGeneratorFunction(t)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},b(g),s(g,l,"Generator"),s(g,o,(function(){return this})),s(g,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},r.values=k,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],o=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;L(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},r}function r(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t,r,n,i,a,o){try{var c=e[a](o),l=c.value}catch(s){return void r(s)}c.done?t(l):Promise.resolve(l).then(n,i)}function i(e){return function(){var t=this,r=arguments;return new Promise((function(i,a){var o=e.apply(t,r);function c(e){n(o,i,a,c,l,"next",e)}function l(e){n(o,i,a,c,l,"throw",e)}c(void 0)}))}}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,i,a=[],o=!0,c=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(l){c=!0,i=l}finally{try{o||null==r.return||r.return()}finally{if(c)throw i}}return a}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./react-legacy.672c49ac.js","./@tabler/icons-legacy.0859feca.js","./useInfinite-legacy.0307b665.js","./index-legacy.8dacbda5.js","./index-legacy.85eda016.js","./react-router-dom-legacy.c19309a0.js","./Gender-legacy.5ab643c2.js","./qrcode.react-legacy.bb7ea4de.js","./react-slick-legacy.ee08380d.js","./lodash-legacy.4434829e.js","./react-dom-legacy.038bc2ab.js","./react-redux-legacy.7992e80d.js","./immer-legacy.c38810dc.js","./axios-legacy.36e845a7.js","./store-legacy.0145af8a.js","./rxjs-legacy.6204f015.js","./react-use-legacy.e1955c63.js","./react-transition-group-legacy.215f9ff9.js"],(function(e,n){"use strict";var o,c,l,s,u,d,f,h,m,p,v,y,x,g,b,N,w,j,L,_,k,E,S,I;return{setters:[function(e){o=e.r},function(e){c=e.as,l=e.at,s=e.Q},function(e){u=e.u},function(e){d=e.as,f=e.L,h=e.n,m=e.ae,p=e.u,v=e.at,y=e.i,x=e.au,g=e.av,b=e.aw},function(e){N=e.D},function(e){w=e.L,j=e.b,L=e.R,_=e.c},function(e){k=e.G},function(e){E=e.j,S=e.a},function(e){I=e.c},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var n=o.exports.memo((function(e){var t=e.limit,r=d({limit:t}),n=r.data,i=r.isLoading,a=(null==n?void 0:n.hot)||[];return i?E(f,{}):E("div",{className:"list",children:a.map((function(e){return S(w,{to:"/friend/".concat(e.actId),className:"py-1 pl-5 flex hover:bg-gray-100",children:[E("div",{className:"cover w-8 h-8 flex-none",children:E("img",{className:"rounded",src:"".concat(e.sharePicUrl,"?param=50y50"),alt:""})}),S("div",{className:"content px-2 flex-auto w-0",children:[S("div",{className:"title flex items-center",children:["#",E("span",{className:"truncate",children:e.title}),"#"]}),E("div",{className:"participateCount text-gray-300",children:"".concat(e.participateCount,"人参与")})]})]},e.actId)}))})})),O=o.exports.memo((function(){var e=h(m).profile,t=p();return S("div",{className:"flex-none",style:{width:250},children:[E("div",{className:"",children:e.userId?S("div",{className:"h-40 pt-8 bg-gray-100",children:[S("div",{className:"top flex gap-2 px-5 items-start",children:[E(w,{to:"/user/".concat(e.userId),className:"avatar w-12 h-12 rounded-full overflow-hidden flex-none",children:E("img",{className:"",src:"".concat(e.avatarUrl,"?param=100y100"),alt:""})}),S("div",{className:"flex-1 w-0",children:[S("div",{className:"",children:[E(w,{to:"/user/".concat(e.userId),children:e.nickname})," ",E(k,{gender:e.gender,size:14})]}),E("div",{className:"text-gray-500 truncate",children:e.signature})]})]}),S("div",{className:"infos flex divide-x text-center mt-4",children:[S(w,{to:"/user/".concat(e.userId,"/dynamic"),className:"info flex-1 ui_text_black_hover",children:[E("div",{className:"num text-xl",children:e.eventCount}),E("div",{className:"string",children:"动态"})]}),S(w,{to:"/user/".concat(e.userId,"/follow"),className:"info flex-1 ui_text_black_hover",children:[E("div",{className:"num text-xl",children:e.follows}),E("div",{className:"string",children:"关注"})]}),S(w,{to:"/user/".concat(e.userId,"/fans"),className:"info flex-1 ui_text_black_hover",children:[E("div",{className:"num text-xl",children:e.followeds}),E("div",{className:"string",children:"粉丝"})]})]})]}):S("div",{className:"nologin px-5",children:[E("div",{style:{height:170}}),E("div",{className:"tips text-center text-gray-500",children:"登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机"}),E("button",{type:"button",className:"ui_theme_bg_color text-white w-full h-10 mt-4 rounded-full",onClick:function(){return t(v())},children:"立即登录"})]})}),S("div",{className:"mt-5",children:[S("div",{className:"flex px-5 mb-2.5",children:[E("span",{className:"font-bold",children:"热门话题"}),E(w,{className:"text-gray-400 ml-auto",to:"/friend/top",children:"更多 >"})]}),E(n,{limit:5})]}),E("div",{className:"mt-8",children:S("div",{className:"flex px-5 mb-2.5",children:[E("span",{className:"font-bold",children:"认识的人"}),E(w,{className:"text-gray-400 ml-auto",to:"/friend/acquaintance",children:"更多 >"})]})}),E("div",{className:"mt-8",children:E("div",{className:"flex px-5 mb-2.5",children:E("span",{className:"font-bold",children:"添加关注"})})})]})})),A=o.exports.memo((function(){var e=a(y([]),2),n=e[0],l=e[1],s=a(x(),1)[0],d=o.exports.useRef(null),h=o.exports.useRef(null),m=o.exports.useRef(-1),p=function(){var e=i(t().mark((function e(){var n,i,a;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s({lasttime:m.current});case 3:n=e.sent,i=n.data.lasttime,a=n.data.event,m.current=i,l((function(e){e.push.apply(e,r(a))})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return o.exports.useEffect((function(){l([])}),[]),u(p,d,h),E("div",{className:"h-full overflow-auto",ref:d,children:S("div",{className:"flex divide-x min-h-full",children:[S("div",{className:"relative flex-1 w-0",children:[S("div",{className:"h-14 px-8 flex items-center sticky top-0 z-10 bg-white",children:[E("span",{className:"h1",children:"动态"}),S("button",{type:"button",className:"flex-center ml-4 ui_theme_bg_color text-sm text-white h-8 px-4 rounded-full",children:[E(c,{size:20,stroke:1}),"发动态"]})]}),S("div",{className:"domFriend_content",children:[E("div",{className:"px-8",children:E(N,{list:n})}),E("div",{className:"flex-center",ref:h,children:0===n.length?E("div",{className:"empty text-center text-gray-400 pt-48",children:"暂无动态"}):E(f,{})})]})]}),E(O,{})]})})})),G=o.exports.memo((function(){var e,t=j().id,r=g({actid:t}),n=r.data,i=r.isLoading,a=(null==n?void 0:n.act)||{};return i?null:S("div",{className:"border-b",children:[S("div",{className:"rounded overflow-hidden border relative",children:[E("img",{src:a.coverPCUrl,loading:"lazy",className:"h-56 object-cover block",alt:""}),S("div",{className:"absolute inset-0 bg-black bg-opacity-20 flex-center flex-col",children:[S("div",{style:{minWidth:210},className:"relative max-w-sm min-w- border-t border-b border-white border-opacity-60 py-6 text-white text-xl flex-center text-center flex-col ",children:[S("div",{className:"flex",children:["#",E("span",{className:"truncate",children:a.title}),"#"]}),E("span",{className:"absolute inset-x-0 text-xs whitespace-nowrap top-full transform -translate-y-1/2",children:"".concat(a.participateCount,"人参与")})]}),S("button",{type:"button",className:"bg-white flex-center h-9 mt-4 w-52 rounded text-red-500 bg-opacity-90 hover:bg-opacity-100",children:[E(l,{size:16}),"立即参与"]})]}),E("button",{type:"button",className:"absolute m-4 w-8 h-8 flex-center top-0 right-0 border text-white border-current rounded-full bg-black bg-opacity-50",children:E(s,{size:24,stroke:1})})]}),E("ul",{className:"pb-8 text-sm text-gray-500 leading-6",children:null===(e=a.text)||void 0===e?void 0:e.map((function(e,t){return E("li",{children:e},t)}))})]})})),P=o.exports.memo((function(e){var t=e.actid,r=b({actid:t}),n=r.data,i=r.isLoading,a=(null==n?void 0:n.events)||[];return i?E(f,{}):E(N,{list:a})})),C=o.exports.memo((function(){var e=j().id,t=void 0===e?"":e;return E("div",{className:"h-full overflow-auto",children:S("div",{className:"flex divide-x",children:[E("div",{className:"flex-auto w-0",children:S("div",{className:"px-8 pt-4",children:[E(G,{}),E("div",{className:"text-gray-500 mt-4 text-sm",children:"热门动态"}),E(P,{actid:t})]})}),S("div",{className:"flex-none",style:{width:230},children:[E("div",{className:"p-4 text-sm text-gray-700",children:"推荐话题"}),E(n,{limit:10})]})]})})})),T=o.exports.memo((function(){var e=a(o.exports.useState("day"),2),r=e[0],c=e[1],l=a(o.exports.useState([]),2),s=l[0],u=l[1],d=function(){var e=i(t().mark((function e(){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u([{title:"你的恋爱人格是什么",count:916},{title:"你的恋爱人格是什么",count:916}]);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.exports.useEffect((function(){d()}),[r]),E("div",{className:" h-full overflow-auto",children:S("div",{className:"flex divide-x",children:[S("div",{className:"flex-auto w-0",children:[S("div",{className:"h-16 px-8 flex items-center",children:[E("span",{className:"text-lg font-bold",children:"话题飙升榜"}),S("div",{className:"ml-auto space-x-3 text-gray-300",children:[E("button",{type:"button",onClick:function(){return c("day")},className:I("hover:text-gray-700","day"===r&&"text-gray-700"),children:"24小时"}),E("span",{children:"|"}),E("button",{type:"button",onClick:function(){return c("week")},className:I("hover:text-gray-700","week"===r&&"text-gray-700"),children:"7天"})]})]}),E("div",{children:s.map((function(e,t){return S("div",{className:I("flex items-center h-20 hover:bg-gray-100",t%2==1&&"bg-gray-50"),children:[E("div",{className:"w-16 flex-center text-sm ",children:t+1}),E("div",{className:"w-14 h-14",children:E("img",{src:"",alt:""})}),S("div",{children:[E("div",{className:"text-lg",children:e.title}),S("div",{className:"text-gray-300",children:[e.count,"人参与"]})]})]},t)}))})]}),S("div",{className:"domFriend_right flex-none",style:{width:230},children:[E("div",{className:"p-4 text-sm text-gray-700",children:"推荐话题"}),E(n,{limit:10})]})]})})})),F=o.exports.memo((function(){return S("div",{className:"",children:[E("div",{className:"text-xl p-8 font-bold",children:"寻找并邀请好友"}),S("div",{className:"px-8",children:[S("div",{className:"space-x-2 text-gray-500",children:[E("button",{type:"button",children:"已有1位好友加入"}),E("span",{children:"|"}),E("button",{type:"button",children:"邀请另外3位好友加入"})]}),E("div",{children:"TODO"})]})]})}));e("default",(function(){return S(L,{children:[E(_,{index:!0,element:E(A,{})}),E(_,{path:"top",element:E(T,{})}),E(_,{path:"Acquaintance",element:E(F,{})}),E(_,{path:":id",element:E(C,{})})]})}))}}}))}();
