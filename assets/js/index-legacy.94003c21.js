!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t){if(null==t)throw new TypeError("Cannot destructure undefined")}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return e};var e={},n=Object.prototype,a=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(E){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),o=new L(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return _()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var c=N(o,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=d(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,o),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(E){return{type:"throw",arg:E}}}e.wrap=u;var f={};function h(){}function p(){}function m(){}var y={};s(y,o,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(S([])));g&&g!==n&&a.call(g,o)&&(y=g);var x=m.prototype=h.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(e,r){function n(i,o,c,l){var s=d(e[i],e,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==t(f)&&a.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,l)}),(function(t){n("throw",t,c,l)})):r.resolve(f).then((function(t){u.value=t,c(u)}),(function(t){return n("throw",t,c,l)}))}l(s.arg)}var i;this._invoke=function(t,e){function a(){return new r((function(r,a){n(t,e,r,a)}))}return i=i?i.then(a,a):a()}}function N(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,N(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=d(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function S(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(a.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=m,s(x,"constructor",m),s(m,"constructor",p),p.displayName=s(m,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},b(w.prototype),s(w.prototype,c,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise);var o=new w(u(t,r,n,a),i);return e.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},b(x),s(x,l,"Generator"),s(x,o,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=S,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return o.type="throw",o.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function n(t,e,r,n,a,i,o){try{var c=t[i](o),l=c.value}catch(s){return void r(s)}c.done?e(l):Promise.resolve(l).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,i){var o=t.apply(e,r);function c(t){n(o,a,i,c,l,"next",t)}function l(t){n(o,a,i,c,l,"throw",t)}c(void 0)}))}}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,a,i=[],o=!0,c=!1;try{for(r=r.call(t);!(o=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);o=!0);}catch(l){c=!0,a=l}finally{try{o||null==r.return||r.return()}finally{if(c)throw a}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./react-legacy.44853401.js","./index-legacy.7e8c6649.js","./react-slick-legacy.400e355e.js","./index-legacy.f5ffdd24.js","./@tabler/icons-legacy.5dfa177d.js","./react-router-dom-legacy.72086173.js","./qrcode.react-legacy.406c3b0d.js","./Rank-legacy.f2eafd32.js","./Download-legacy.c594194f.js","./Album-legacy.1bac377f.js","./Gender-legacy.156f91ad.js","./lodash-legacy.ec9d3690.js","./react-dom-legacy.486e296d.js","./react-redux-legacy.e82faa2a.js","./immer-legacy.91914d19.js","./axios-legacy.0865bd99.js","./store-legacy.6aaf7648.js","./react-transition-group-legacy.c8714733.js","./react-use-legacy.454b4e92.js"],(function(t){"use strict";var n,o,c,l,s,u,d,f,h,p,m,y,v,g,x,b,w,N,j,k,L,S,_,E,O,C,I,P,G,T,A,D,z,F,Y,M,U,R;return{setters:[function(t){n=t.r},function(t){o=t.d,c=t.aE,l=t.t,s=t.M,u=t.H,d=t.N,f=t.A,h=t.aF,p=t.W,m=t.L,y=t.v,v=t.P,g=t.aG,x=t.a,b=t.i,w=t.aH,N=t.ak,j=t.x,k=t.aI},function(t){L=t.c},function(t){S=t.D},function(t){_=t.$,E=t.l,O=t.a0,C=t.G,I=t.V,P=t.T},function(t){G=t.L,T=t.b,A=t.R,D=t.c},function(t){z=t.a,F=t.j},function(t){Y=t.R},function(t){M=t.D},function(t){U=t.A},function(t){R=t.G},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var $=n.exports.memo((function(t){var e=t.tags,r=void 0===e?[]:e;return 0===r.length?null:z("div",{className:"tags",children:[F("span",{children:"标签："}),r.map((function(t,e){return z("span",{children:[e>0&&" / ",F(G,{to:"/home/playlist/".concat(t),className:"tag ui_link",children:t})]},t)}))]})})),H=n.exports.memo((function(t){var e=t.description,r=void 0===e?"":e;if(!r)return null;var a=i(n.exports.useState(!1),2),o=a[0],c=a[1],l=r.match(/^.*$/gm);return F("div",{className:"relative pr-5",children:z("div",{className:"whitespace-pre-line leading-6",children:["简介：",F("span",{className:L("text-gray-500 select-text",!o&&"truncate inline-block max-w-xs align-bottom"),children:o?r:null==l?void 0:l[0]}),F("button",{type:"button",onClick:function(){return c(!o)},className:"absolute top-0 right-0 text-gray-500",children:F(o?_:E,{size:16,className:"fill-current"})})]})})})),q=n.exports.memo((function(t){var e,r,n,a,i=t.data,s=void 0===i?{}:i,u=t.handleSub,d=t.songs;return z("div",{className:"p-8 flex items-start",children:[F("div",{className:"border rounded overflow-hidden flex-none w-92 h-92",children:F("img",{loading:"lazy",className:"w-full h-full",src:"".concat(s.playlist.coverImgUrl,"?param=200y200"),alt:""})}),z("div",{className:"info flex-auto w-0 ml-5",children:[z("div",{className:"name leading-tight",children:[F("span",{className:"whitespace-nowrap text-red-500 border border-current p-0.5 rounded mr-2 align-bottom inline-block",children:"歌单"}),F("span",{className:"h1 select-text",children:s.playlist.name||"我喜欢的音乐"})]}),z("div",{className:"creator flex items-center mt-2",children:[F(G,{to:"/user/".concat(null===(e=s.playlist.creator)||void 0===e?void 0:e.userId),className:"w-6 h-6 rounded-full overflow-hidden mr-2",children:F("img",{className:"",src:"".concat(null===(r=s.playlist.creator)||void 0===r?void 0:r.avatarUrl,"?param=50y50"),alt:""})}),F(G,{to:"/user/".concat(null===(n=s.playlist.creator)||void 0===n?void 0:n.userId),className:"nickname ui_link mr-2",children:null===(a=s.playlist.creator)||void 0===a?void 0:a.nickname}),z("span",{className:"text-gray-500",children:[o(s.playlist.createTime||Date.now()).format("YYYY-MM-DD"),"创建"]})]}),z("div",{className:"actions flex space-x-2 mt-2",children:[F(S,{playlist:d}),z("button",{onClick:function(){return u(s.playlist.subscribed)},type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full btn",children:[s.playlist.subscribed?F(O,{size:20,stroke:1}):F(C,{size:20,stroke:1})," ",s.playlist.subscribed?"已收藏":"收藏","(".concat(c(s.playlist.subscribedCount),")")]}),z("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full btn",children:[F(I,{size:20,stroke:1}),"  分享","(".concat(c(s.playlist.shareCount),")")]}),z("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full btn",children:[F(P,{size:20,stroke:1}),"  下载全部"]})]}),z("div",{className:"space-y-1 mt-2",children:[F($,{tags:s.playlist.tags}),z("div",{children:[z("span",{className:"mr-3",children:["歌曲：",F("span",{className:"text-gray-500",children:s.playlist.trackCount})]}),z("span",{children:["播放：",F("span",{className:"text-gray-500",children:l(s.playlist.playCount)})]})]}),F(H,{description:s.playlist.description})]})]})]})})),V=n.exports.memo((function(t){var e=t.songs,r=void 0===e?[]:e;return r.length?z("div",{style:{"--ui_grid_template":"36px / 30px 30px 30px 36% 4fr 6fr 2fr"},className:"mt-4",children:[z("div",{className:"grid ui_grid_template pl-8",children:[F("div",{}),F("div",{}),F("div",{}),F("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500",children:"音乐标题"}),F("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500",children:"歌手"}),F("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500",children:"专辑"}),F("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500",children:"时长"})]}),r.map((function(t,e){return F(s,{schema:[["评论","播放","下一首播放"],["收藏到歌单","分享","复制链接","不感兴趣","下载"]],type:"song",item:t,children:z("div",{tabIndex:2,className:L("grid items-center focus:outline-none focus:bg-gray-200 hover:bg-gray-100 ui_grid_template pl-8",e%2==0&&"bg-gray-50"),children:[F("div",{className:"px-1",children:F(Y,{index:e,id:t.id})}),F("div",{className:"px-1",children:F(u,{id:t.id})}),F("div",{className:"px-1",children:F(M,{})}),F(d,{className:"px-1",item:t}),F(f,{className:"px-1",artists:t.ar}),F(U,{className:"px-1",name:t.al.name,id:t.al.id}),F("div",{className:"text-gray-500 px-1",children:o(t.dt).format("mm:ss")})]})},t.id)}))]}):F("div",{className:"pt-16 text-center text-sm text-gray-400",children:"暂无音乐"})})),W=n.exports.memo((function(){var t=T().id,e=h({id:t}),r=e.data,a=e.isLoading,i=n.exports.useCallback((function(){}),[]);return z("div",{className:"px-8",children:[F("div",{className:"pt-10 pb-10",children:F(p,{max:140,placeholder:"",onChange:i})}),a?F(m,{}):F(y,{comments:r,type:0,more:t})]})})),B=n.exports.memo((function(){var t=T().id,e=i(n.exports.useState(1),2),o=e[0],c=e[1],l=i(n.exports.useState({}),2),s=l[0],u=l[1],d=i(n.exports.useState(!0),2),f=d[0],h=d[1],p=function(){var e=a(r().mark((function e(){var n,a,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g({id:t,limit:60,offset:60*(o-1)});case 2:n=e.sent,a=n.subscribers,i=n.total,u({subscribers:a,total:i}),h(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.exports.useEffect((function(){p()}),[]),f?F("div",{className:"flex-center pt-32",children:F(m,{})}):z("div",{className:"px-8",children:[F("div",{className:"domPlaylistDetail_subscribers flex justify-between flex-wrap",children:null==s?void 0:s.subscribers.map((function(t){return z("div",{className:"item flex mt-6 w-80 ",children:[F(G,{to:"/user/".concat(t.userId),className:"avatar w-24 h-24 border rounded-full overflow-hidden",children:F("img",{loading:"lazy",src:"".concat(t.avatarUrl,"?param=100y100"),alt:""})}),z("div",{className:"ml-2 flex-auto w-0 flex flex-col justify-center",children:[z("div",{className:"text-sm flex items-center",children:[F(G,{to:"/user/".concat(t.userId),children:t.nickname})," ",F(R,{gender:t.gender,size:16})]}),F("div",{className:"mt-2 truncate",children:t.signature})]})]},t.userId)}))}),F(v,{total:Math.ceil((null==s?void 0:s.total)/60),page:o,func:c})]})})),J=[["歌曲列表","Playlist"],["评论","Comments"],["收藏者","Subscribers"]],K={Playlist:V,Comments:W,Subscribers:B},Q=n.exports.memo((function(){var t=T().id,e=x(),o=i(n.exports.useState(!0),2),c=o[0],l=o[1],s=i(n.exports.useState([]),2),u=s[0],d=s[1],f=i(b({}),2),h=f[0],p=f[1],y=i(n.exports.useState(J[0][1]),2),v=y[0],g=y[1],k=function(){var e=a(r().mark((function e(){var n,a,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N({id:t});case 3:if(n=e.sent,p(n),!(n.playlist.trackCount>0)){e.next=11;break}return e.next=8,j({ids:n.playlist.trackIds.map((function(t){return t.id})).join(",")});case 8:a=e.sent,i=a.songs,d(i);case 11:l(!1),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),S=n.exports.useCallback(function(){var n=a(r().mark((function n(a){var i;return r().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,w({t:a?2:1,id:t});case 3:i=r.sent,200===i.code&&(e(a?"取消收藏成功！":"收藏成功！"),p((function(t){t.playlist.subscribed=!a}))),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.log(r.t0);case 11:case"end":return r.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),[t]);return n.exports.useEffect((function(){k()}),[t]),c?F("div",{className:"w-full h-full flex-center",children:F(m,{})}):z("div",{className:"overflow-auto h-full",children:[F(q,{data:h,handleSub:S,songs:u}),z("div",{className:"mt-4",children:[F("div",{className:"space-x-4 flex items-baseline px-8",children:J.map((function(t){var e=i(t,2),r=e[0],n=e[1];return z("button",{type:"button",className:L("text-sm",v===n&&"font-bold ui_underline"),onClick:function(){return g(n)},children:[r,"评论"===r&&"(".concat(h.playlist.commentCount,")")]},r)}))}),F("div",{children:n.exports.createElement(K[v],{songs:u})})]})]})})),X=n.exports.memo((function(t){var i=t.id,o=function(){var t=a(r().mark((function t(){return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,k({rid:i});case 3:e(t.sent),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return n.exports.useEffect((function(){o()}),[]),z("div",{className:"domPlaylistDetail",children:[F("div",{className:"domPlaylistDetail_header"}),F("div",{className:"domPlaylistDetail_main",children:"TODO"})]})})),Z=function(){return n.exports.useState(0),F("div",{children:"TOTO"})};t("default",(function(){return z(A,{children:[F(D,{path:"music/:id",element:F(Q,{})}),F(D,{path:"dj/:id",element:F(X,{})}),F(D,{path:"album/:id",element:F(Z,{})})]})}))}}}))}();
