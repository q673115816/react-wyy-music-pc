!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e){if(null==e)throw new TypeError("Cannot destructure undefined")}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return t};var t={},n=Object.prototype,a=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(E){s=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof h?t:h,i=Object.create(a.prototype),o=new L(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return _()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var c=N(o,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=d(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,o),i}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(E){return{type:"throw",arg:E}}}t.wrap=u;var f={};function h(){}function p(){}function m(){}var y={};s(y,o,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(S([])));g&&g!==n&&a.call(g,o)&&(y=g);var x=m.prototype=h.prototype=Object.create(y);function b(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function w(t,r){function n(i,o,c,l){var s=d(t[i],t,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==e(f)&&a.call(f,"__await")?r.resolve(f.__await).then((function(e){n("next",e,c,l)}),(function(e){n("throw",e,c,l)})):r.resolve(f).then((function(e){u.value=e,c(u)}),(function(e){return n("throw",e,c,l)}))}l(s.arg)}var i;this._invoke=function(e,t){function a(){return new r((function(r,a){n(e,t,r,a)}))}return i=i?i.then(a,a):a()}}function N(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=d(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,f;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=m,s(x,"constructor",m),s(m,"constructor",p),p.displayName=s(m,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,s(e,l,"GeneratorFunction")),e.prototype=Object.create(x),e},t.awrap=function(e){return{__await:e}},b(w.prototype),s(w.prototype,c,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var o=new w(u(e,r,n,a),i);return t.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},b(x),s(x,l,"Generator"),s(x,o,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function n(e,t,r,n,a,i,o){try{var c=e[i](o),l=c.value}catch(s){return void r(s)}c.done?t(l):Promise.resolve(l).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,i){var o=e.apply(t,r);function c(e){n(o,a,i,c,l,"next",e)}function l(e){n(o,a,i,c,l,"throw",e)}c(void 0)}))}}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,i=[],o=!0,c=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(l){c=!0,a=l}finally{try{o||null==r.return||r.return()}finally{if(c)throw a}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}System.register(["./react-legacy.132817e3.js","./index-legacy.79ad6051.js","./react-slick-legacy.ee54945a.js","./index-legacy.6a5c26ac.js","./@tabler/icons-legacy.81d90f6c.js","./react-router-dom-legacy.d30db004.js","./qrcode.react-legacy.4058aa06.js","./MenuCreate-legacy.87829b82.js","./Rank-legacy.4fcf312d.js","./Download-legacy.96ab4d69.js","./Name-legacy.c8d8207b.js","./Album-legacy.6bce906c.js","./api-legacy.327d9a89.js","./Gender-legacy.4e443aef.js","./react-dom-legacy.7fe488f9.js","./react-redux-legacy.801f9a56.js","./immer-legacy.67f89522.js","./axios-legacy.e15c8cdf.js","./lodash-legacy.f584c299.js","./store-legacy.4efcd8f3.js","./react-transition-group-legacy.73cef0bd.js","./react-use-legacy.0040e9dc.js","./index-legacy.019e2604.js"],(function(e){"use strict";var n,o,c,l,s,u,d,f,h,p,m,y,v,g,x,b,w,N,j,k,L,S,_,E,O,C,P,D,I,T,G,z,A,M,Y,F,U,R;return{setters:[function(e){n=e.r},function(e){o=e.d,c=e.ad,l=e.t,s=e.H,u=e.D,d=e.W,f=e.L,h=e.z,p=e.P,m=e.ae,y=e.a,v=e.i,g=e.af,x=e._,b=e.B,w=e.ag},function(e){N=e.c},function(e){j=e.D},function(e){k=e.$,L=e.l,S=e.a0,_=e.D,E=e.U,O=e.S},function(e){C=e.L,P=e.b,D=e.R,I=e.c},function(e){T=e.a,G=e.j},function(e){z=e.M},function(e){A=e.R},function(e){M=e.D},function(e){Y=e.N},function(e){F=e.D},function(e){U=e.a},function(e){R=e.G},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var $=n.exports.memo((function(e){var t=e.tags,r=void 0===t?[]:t;return 0===r.length?null:T("div",{className:"tags",children:[G("span",{children:"标签："}),r.map((function(e,t){return T("span",{children:[t>0&&" / ",G(C,{to:"/home/playlist/".concat(e),className:"tag ui_link",children:e})]},e)}))]})})),q=n.exports.memo((function(e){var t=e.description,r=void 0===t?"":t;if(!r)return null;var a=i(n.exports.useState(!1),2),o=a[0],c=a[1],l=r.match(/^.*$/gm);return G("div",{className:"relative pr-5",children:T("div",{className:"whitespace-pre-line leading-6",children:["简介：",G("span",{className:N("text-gray-500 select-text",!o&&"truncate inline-block max-w-xs align-bottom"),children:o?r:null==l?void 0:l[0]}),G("button",{type:"button",onClick:function(){return c(!o)},className:"absolute top-0 right-0 text-gray-500",children:G(o?k:L,{size:16,className:"fill-current"})})]})})})),B=n.exports.memo((function(e){var t,r,n,a,i=e.data,s=void 0===i?{}:i,u=e.handleSub,d=e.songs;return T("div",{className:"p-8 flex items-start",children:[G("div",{className:"border rounded overflow-hidden flex-none w-92 h-92",children:G("img",{loading:"lazy",className:"w-full h-full",src:"".concat(s.playlist.coverImgUrl,"?param=200y200"),alt:""})}),T("div",{className:"info flex-auto w-0 ml-5",children:[T("div",{className:"name leading-tight",children:[G("span",{className:"whitespace-nowrap text-red-500 border border-current p-0.5 rounded mr-2 align-bottom inline-block",children:"歌单"}),G("span",{className:"h1 select-text",children:s.playlist.name||"我喜欢的音乐"})]}),T("div",{className:"creator flex items-center mt-2",children:[G(C,{to:"/user/".concat(null===(t=s.playlist.creator)||void 0===t?void 0:t.userId),className:"w-6 h-6 rounded-full overflow-hidden mr-2",children:G("img",{className:"",src:"".concat(null===(r=s.playlist.creator)||void 0===r?void 0:r.avatarUrl,"?param=50y50"),alt:""})}),G(C,{to:"/user/".concat(null===(n=s.playlist.creator)||void 0===n?void 0:n.userId),className:"nickname ui_link mr-2",children:null===(a=s.playlist.creator)||void 0===a?void 0:a.nickname}),T("span",{className:"text-gray-500",children:[o(s.playlist.createTime||Date.now()).format("YYYY-MM-DD"),"创建"]})]}),T("div",{className:"actions flex space-x-2 mt-2",children:[G(j,{playlist:d}),T("button",{onClick:function(){return u(s.playlist.subscribed)},type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full btn",children:[s.playlist.subscribed?G(S,{size:20,stroke:1}):G(_,{size:20,stroke:1})," ",s.playlist.subscribed?"已收藏":"收藏","(".concat(c(s.playlist.subscribedCount),")")]}),T("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full btn",children:[G(E,{size:20,stroke:1}),"  分享","(".concat(c(s.playlist.shareCount),")")]}),T("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full btn",children:[G(O,{size:20,stroke:1}),"  下载全部"]})]}),T("div",{className:"space-y-1 mt-2",children:[G($,{tags:s.playlist.tags}),T("div",{children:[T("span",{className:"mr-3",children:["歌曲：",G("span",{className:"text-gray-500",children:s.playlist.trackCount})]}),T("span",{children:["播放：",G("span",{className:"text-gray-500",children:l(s.playlist.playCount)})]})]}),G(q,{description:s.playlist.description})]})]})]})})),H=n.exports.memo((function(e){var t=e.songs,r=void 0===t?[]:t;return r.length?T("div",{style:{"--ui_grid_template":"36px / 30px 30px 30px 36% 4fr 6fr 2fr"},className:"mt-4",children:[T("div",{className:"grid ui_grid_template pl-8",children:[G("div",{}),G("div",{}),G("div",{}),G("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500",children:"音乐标题"}),G("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500",children:"歌手"}),G("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500",children:"专辑"}),G("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500",children:"时长"})]}),r.map((function(e,t){return G(z,{schema:[["评论","播放","下一首播放"],["收藏到歌单","分享","复制链接","不感兴趣","下载"]],type:"song",item:e,children:T("div",{tabIndex:2,className:N("grid items-center focus:outline-none focus:bg-gray-200 hover:bg-gray-100 ui_grid_template pl-8",t%2==0&&"bg-gray-50"),children:[G("div",{className:"px-1",children:G(A,{index:t,id:e.id})}),G("div",{className:"px-1",children:G(s,{id:e.id})}),G("div",{className:"px-1",children:G(M,{})}),G(Y,{className:"px-1",item:e}),G(u,{className:"px-1",artists:e.ar}),G(F,{className:"px-1",name:e.al.name,id:e.al.id}),G("div",{className:"text-gray-500 px-1",children:o(e.dt).format("mm:ss")})]})},e.id)}))]}):G("div",{className:"pt-16 text-center text-sm text-gray-400",children:"暂无音乐"})})),W=n.exports.memo((function(){var e=P().id,t=U({id:e}),r=t.data,a=t.isLoading,i=n.exports.useCallback((function(){}),[]);return T("div",{className:"px-8",children:[G("div",{className:"pt-10 pb-10",children:G(d,{max:140,placeholder:"",onChange:i})}),a?G(f,{}):G(h,{comments:r,type:0,more:e})]})})),J=n.exports.memo((function(){var e=P().id,t=i(n.exports.useState(1),2),o=t[0],c=t[1],l=i(n.exports.useState({}),2),s=l[0],u=l[1],d=i(n.exports.useState(!0),2),h=d[0],y=d[1],v=function(){var t=a(r().mark((function t(){var n,a,i;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m({id:e,limit:60,offset:60*(o-1)});case 2:n=t.sent,a=n.subscribers,i=n.total,u({subscribers:a,total:i}),y(!1);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return n.exports.useEffect((function(){v()}),[]),h?G("div",{className:"flex-center pt-32",children:G(f,{})}):T("div",{className:"px-8",children:[G("div",{className:"domPlaylistDetail_subscribers flex justify-between flex-wrap",children:null==s?void 0:s.subscribers.map((function(e){return T("div",{className:"item flex mt-6 w-80 ",children:[G(C,{to:"/user/".concat(e.userId),className:"avatar w-24 h-24 border rounded-full overflow-hidden",children:G("img",{loading:"lazy",src:"".concat(e.avatarUrl,"?param=100y100"),alt:""})}),T("div",{className:"ml-2 flex-auto w-0 flex flex-col justify-center",children:[T("div",{className:"text-sm flex items-center",children:[G(C,{to:"/user/".concat(e.userId),children:e.nickname})," ",G(R,{gender:e.gender,size:16})]}),G("div",{className:"mt-2 truncate",children:e.signature})]})]},e.userId)}))}),G(p,{total:Math.ceil((null==s?void 0:s.total)/60),page:o,func:c})]})})),K=[["歌曲列表","Playlist"],["评论","Comments"],["收藏者","Subscribers"]],Q={Playlist:H,Comments:W,Subscribers:J},V=n.exports.memo((function(){var e=P().id,t=y(),o=i(n.exports.useState(!0),2),c=o[0],l=o[1],s=i(n.exports.useState([]),2),u=s[0],d=s[1],h=i(v({}),2),p=h[0],m=h[1],w=i(n.exports.useState(K[0][1]),2),j=w[0],k=w[1],L=function(){var t=a(r().mark((function t(){var n,a,i;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x({id:e});case 3:if(n=t.sent,m(n),!(n.playlist.trackCount>0)){t.next=11;break}return t.next=8,b({ids:n.playlist.trackIds.map((function(e){return e.id})).join(",")});case 8:a=t.sent,i=a.songs,d(i);case 11:l(!1),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.log(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(){return t.apply(this,arguments)}}(),S=n.exports.useCallback(function(){var n=a(r().mark((function n(a){var i;return r().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,g({t:a?2:1,id:e});case 3:i=r.sent,200===i.code&&(t(a?"取消收藏成功！":"收藏成功！"),m((function(e){e.playlist.subscribed=!a}))),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.log(r.t0);case 11:case"end":return r.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),[e]);return n.exports.useEffect((function(){L()}),[e]),c?G("div",{className:"w-full h-full flex-center",children:G(f,{})}):T("div",{className:"overflow-auto h-full",children:[G(B,{data:p,handleSub:S,songs:u}),T("div",{className:"mt-4",children:[G("div",{className:"space-x-4 flex items-baseline px-8",children:K.map((function(e){var t=i(e,2),r=t[0],n=t[1];return T("button",{type:"button",className:N("text-sm",j===n&&"font-bold ui_underline"),onClick:function(){return k(n)},children:[r,"评论"===r&&"(".concat(p.playlist.commentCount,")")]},r)}))}),G("div",{children:n.exports.createElement(Q[j],{songs:u})})]})]})})),X=n.exports.memo((function(e){var i=e.id,o=function(){var e=a(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w({rid:i});case 3:t(e.sent),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return n.exports.useEffect((function(){o()}),[]),T("div",{className:"domPlaylistDetail",children:[G("div",{className:"domPlaylistDetail_header"}),G("div",{className:"domPlaylistDetail_main",children:"TODO"})]})})),Z=function(){return n.exports.useState(0),G("div",{children:"TOTO"})};e("default",(function(){return T(D,{children:[G(I,{path:"music/:id",element:G(V,{})}),G(I,{path:"dj/:id",element:G(X,{})}),G(I,{path:"album/:id",element:G(Z,{})})]})}))}}}))}();
