!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return r};var r={},n=Object.prototype,a=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(S){s=function(e,t,r){return e[t]=r}}function d(e,t,r,n){var a=t&&t.prototype instanceof h?t:h,i=Object.create(a.prototype),o=new k(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return E()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var c=w(o,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,o),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}r.wrap=d;var m={};function h(){}function f(){}function v(){}var p={};s(p,o,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(L([])));g&&g!==n&&a.call(g,o)&&(p=g);var x=v.prototype=h.prototype=Object.create(p);function N(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function b(t,r){function n(i,o,c,l){var s=u(t[i],t,o);if("throw"!==s.type){var d=s.arg,m=d.value;return m&&"object"==e(m)&&a.call(m,"__await")?r.resolve(m.__await).then((function(e){n("next",e,c,l)}),(function(e){n("throw",e,c,l)})):r.resolve(m).then((function(e){d.value=e,c(d)}),(function(e){return n("throw",e,c,l)}))}l(s.arg)}var i;this._invoke=function(e,t){function a(){return new r((function(r,a){n(e,t,r,a)}))}return i=i?i.then(a,a):a()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,m;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function k(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function L(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:E}}function E(){return{value:void 0,done:!0}}return f.prototype=v,s(x,"constructor",v),s(v,"constructor",f),f.displayName=s(v,l,"GeneratorFunction"),r.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},r.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s(e,l,"GeneratorFunction")),e.prototype=Object.create(x),e},r.awrap=function(e){return{__await:e}},N(b.prototype),s(b.prototype,c,(function(){return this})),r.AsyncIterator=b,r.async=function(e,t,n,a,i){void 0===i&&(i=Promise);var o=new b(d(e,t,n,a),i);return r.isGeneratorFunction(t)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},N(x),s(x,l,"Generator"),s(x,o,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),r.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},r.values=L,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),l=a.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},r}function r(e,t,r,n,a,i,o){try{var c=e[i](o),l=c.value}catch(s){return void r(s)}c.done?t(l):Promise.resolve(l).then(n,a)}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,i=[],o=!0,c=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);o=!0);}catch(l){c=!0,a=l}finally{try{o||null==r.return||r.return()}finally{if(c)throw a}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var i=document.createElement("style");i.innerHTML="._lrc_1aibo_1{grid-column:4/9}._content_1aibo_5{white-space:pre-line;word-break:break-all}._content_1aibo_5:first-line{font-size:larger;margin-bottom:.2em}._content_1aibo_5 b{color:var(--linkColor);font-weight:400}.domSearch_multimatch .item{width:366px}.domSearch ._list .item{grid-template-columns:var(--grid-template-columns);padding:10px 30px}.domSearch ._list .item .cover{border:1px solid #ccc;border-radius:4px;height:60px;overflow:hidden;width:60px}\n",document.head.appendChild(i),System.register(["./react-legacy.44853401.js","./react-router-dom-legacy.d2393ac0.js","./react-slick-legacy.400e355e.js","./index-legacy.d9189f10.js","./Rank-legacy.a9353889.js","./Download-legacy.c594194f.js","./Album-legacy.7fa17eff.js","./qrcode.react-legacy.406c3b0d.js","./@tabler/icons-legacy.5dfa177d.js","./Home-legacy.217f521e.js","./Gender-legacy.156f91ad.js","./lodash-legacy.ec9d3690.js","./react-transition-group-legacy.c5e0da65.js","./react-dom-legacy.486e296d.js","./react-redux-legacy.f50658c5.js","./immer-legacy.91914d19.js","./axios-legacy.0865bd99.js","./store-legacy.6aaf7648.js","./react-use-legacy.b7eb106c.js"],(function(e){"use strict";var a,i,o,c,l,s,d,u,m,h,f,v,p,y,g,x,N,b,w,_,j,k,L,E,S,C,I,O,A,U,G,P,z,T,R;return{setters:[function(e){a=e.r},function(e){i=e.L,o=e.b,c=e.N,l=e.O,s=e.R,d=e.c,u=e.d},function(e){m=e.c},function(e){h=e.M,f=e.H,v=e.N,p=e.A,y=e.d,g=e.ai,x=e.L,N=e.ae,b=e.u,w=e.n,_=e.aj,j=e.ak,k=e.al,L=e.am,E=e.an,S=e.U,C=e.P},function(e){I=e.R},function(e){O=e.D},function(e){A=e.A},function(e){U=e.j,G=e.a,P=e.F},function(e){z=e.i},function(e){T=e.G},function(e){R=e.G},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var F=a.exports.memo((function(e){var t=e.pop;return U("div",{className:"range w-20 h-1.5 rounded bg-gray-200",children:U("div",{className:"h-full bg-gray-300 rounded",style:{width:"".concat(void 0===t?0:t,"%")}})})})),M=a.exports.memo((function(e){var t=e.songs,r=void 0===t?[]:t;return G("div",{className:"songs_list",children:[U("div",{className:"thead",children:G("div",{className:"item grid items-center text-gray-400 ui_grid_template_song",children:[U("div",{className:"index"}),U("div",{className:"heart"}),U("div",{className:"download"}),U("div",{className:"name flex-auto px-2",children:"音乐标题"}),U("div",{className:"artist flex-none px-2",children:"歌手"}),U("div",{className:"album flex-none px-2",children:"专辑"}),U("div",{className:"duration flex-none px-2",children:"时长"}),U("div",{className:"flex-none px-2",children:"热度"})]})}),U("div",{className:"tbody",children:r.map((function(e,t){return U(h,{schema:[["评论","播放","下一首播放"],["收藏到歌单","分享","复制链接","下载"]],item:e,type:"song",children:G("div",{tabIndex:2,className:m("item grid items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none ui_grid_template_song",{"bg-gray-50":t%2==0}),children:[U("div",{className:"index px-2",children:U(I,{index:t,id:e.id})}),U("div",{className:"heart text-center",children:U(f,{id:e.id})}),U("div",{className:"download text-center",children:U(O,{})}),U("div",{className:"name px-2",children:U(v,{item:e})}),U("div",{className:"artist flex-none px-2 truncate text-gray-400",children:U(p,{artists:e.ar})}),U("div",{className:"album truncate flex-none px-2",children:U(A,{name:e.al.name,id:e.al.name})}),U("div",{className:"duration text-gray-400 truncate flex-none px-2",children:y(e.dt).format("mm:ss")}),U("div",{className:"",children:U(F,{pop:e.pop})})]})},e.id)}))})]})})),H={"--grid-template-columns":"60px 6fr min-content"},D={"--grid-template-columns":"60px 1fr 1fr"},Y=a.exports.memo((function(e){var t=e.albums;return U("div",{className:"albums_list _list",style:D,children:(void 0===t?[]:t).map((function(e,t){return G("div",{tabIndex:2,className:m("item grid items-center relative hover:bg-gray-100",{"bg-gray-50":t%2==1}),children:[U(i,{className:"absolute inset-0 z-0",to:"/playlist/album/".concat(e.id)}),U("div",{className:"cover",children:U("img",{src:"".concat(e.picUrl,"?param=60y60"),alt:""})}),G("div",{className:"name px-5 text-sm",children:[e.name,e.alias.length>0&&U("span",{className:"text-gray-400",children:"（".concat(e.alias,"）")})]}),U("div",{className:"artist truncate",children:G(i,{to:"/artist/".concat(e.artist.id),className:"ui_text_gray_hover relative z-10",children:[e.artist.name,e.artist.alias.length>0&&U("span",{className:"text-gray-400",children:"（".concat(e.artist.alias,"）")})]})})]},e.id)}))})})),q=a.exports.memo((function(e){var t=e.videos,r=(void 0===t?[]:t).map((function(e){var t=e.type,r=e.title,n=e.coverUrl,a=e.playTime,i=e.creator;return{id:e.vid,type:t,title:r,creator:i,playCount:a,duration:e.durationms,cover:n}}));return U("div",{className:"videos_list py-5 px-10",children:U(T,{list:r})})})),$={"--grid-template-columns":"60px 6fr 2fr 5fr"},B="_lrc_1aibo_1",J="_content_1aibo_5",K=a.exports.memo((function(e){var t=e.lyrics,r=void 0===t?[]:t,i=a.exports.useRef(),o=n(a.exports.useState(!1),2),c=o[0],l=o[1];a.exports.useEffect((function(){i.current=r.join("\n").replace(/<b>|<\/b>/gm,"")}),[r]);var s=function(){var e=document.createElement("textarea");e.setAttribute("readonly","readonly"),e.textContent=i.current,document.body.appendChild(e),e.select(),document.execCommand("copy")&&(document.execCommand("copy"),console.log("复制成功")),document.body.removeChild(e)};return G("div",{className:m(B,"flex pb-2"),children:[U("div",{className:m(J,"w-2/3 px-2 text-gray-500"),children:r.slice(0,c?1/0:4).map((function(e,t){return U("div",{dangerouslySetInnerHTML:{__html:e}},e+t)}))}),G("div",{className:"actions w-1/3 flex flex-col justify-between",children:[G("div",{className:"flex space-x-2.5",children:[G("button",{type:"button",className:"flex-center border border-gray-400 px-3 h-6 hover:bg-gray-300 rounded-full",onClick:function(){return l(!c)},children:[c?"收起":"展开","歌词"]}),U("button",{type:"button",className:"flex-center border border-gray-400 px-3 h-6 hover:bg-gray-300 rounded-full clip",onClick:s,children:"复制歌词"})]}),c&&G("div",{className:"flex space-x-2.5",children:[U("button",{type:"button",className:"flex-center border border-gray-400 px-3 h-6 hover:bg-gray-300 rounded-full",onClick:function(){return l(!1)},children:"收起歌词"}),U("button",{type:"button",className:"flex-center border border-gray-400 px-3 h-6 hover:bg-gray-300 rounded-full clip",onClick:s,children:"复制歌词"})]})]})]})})),Q=a.exports.memo((function(e){var t=e.songs,r=void 0===t?[]:t;return G("div",{className:"lyrics_list",children:[U("div",{className:"thead",children:G("div",{className:"item grid items-center text-gray-400 ui_grid_template_song",children:[U("div",{className:"index"}),U("div",{className:"heart"}),U("div",{className:"download"}),U("div",{className:"name",children:"音乐标题"}),U("div",{className:"artist",children:"歌手"}),U("div",{className:"album",children:"专辑"}),U("div",{className:"duration",children:"时长"}),U("div",{className:"text-gray-400",children:"热度"})]})}),U("div",{className:"tbody",children:r.map((function(e,t){return U(h,{schema:[["评论","播放","下一首播放"],["收藏到歌单","分享","复制链接","下载"]],item:e,type:"song",children:G("div",{tabIndex:2,className:m("item grid items-center hover:bg-gray-100 focus:outline-none focus:bg-gray-200 ui_grid_template_song",{"bg-gray-50":t%2==0}),children:[U("div",{className:"index pr-2",children:U(I,{index:t,id:e.id})}),U("div",{className:"heart",children:U(f,{id:e.id})}),U("div",{className:"download",children:U(O,{})}),U("div",{className:"name flex",children:U(v,{item:e})}),U("div",{className:"artist truncate",children:U(p,{artists:e.ar})}),U("div",{className:"album truncate",children:U(A,{name:e.al.name,id:e.al.id})}),U("div",{className:"duration text-gray-400 truncate",children:y(e.dt).format("mm:ss")}),U("div",{children:U(F,{pop:e.pop})}),U(K,{lyrics:e.lyrics})]})},e.id)}))})]})})),V={"--grid-template-columns":"60px 5fr 2fr"},W=a.exports.memo((function(e){var t=e.djRadios;return U("div",{className:"djRadios_list _list",style:V,children:(void 0===t?[]:t).map((function(e,t){return G("div",{className:m("item grid items-center hover:bg-gray-100",{"bg-gray-50":t%2==0}),children:[U(i,{to:"/playlist/dj/".concat(e.id),className:"cover",children:U("img",{className:"",src:"".concat(e.picUrl,"?param=60y60"),alt:""})}),U("div",{className:"px-5",children:U(i,{to:"/playlist/dj/".concat(e.id),className:"name",children:e.name})}),G("div",{className:"dj text-gray-300",children:["by  ",U(i,{to:"/user/".concat(e.dj.userId),className:"ui_text_gray_hover",children:e.dj.nickname})]})]},e.id)}))})})),X={"--grid-template-columns":"60px 5fr 2fr"},Z=a.exports.memo((function(e){var t=e.userprofiles;return U("div",{className:"userprofiles_list _list",style:X,children:(void 0===t?[]:t).map((function(e,t){return G(i,{to:"/user/".concat(e.userId),className:m("item grid items-center hover:bg-gray-100",{"bg-gray-50":t%2==1}),children:[U("div",{className:"rounded-full overflow-hidden",children:U("img",{src:"".concat(e.avatarUrl,"?param=60y60"),alt:""})}),G("div",{className:"name px-5",children:[e.nickname," ",U(R,{size:16,gender:e.gender})]}),U("div",{className:"signature text-gray-400 ml-auto",children:e.signature})]},e.userId)}))})})),ee=["单曲","歌手","专辑","视频","歌单","歌词","主播电台","用户"],te={"单曲":{code:1,unit:"首",limit:100,Node:M,countName:"songCount"},"歌手":{code:100,unit:"位",limit:20,Node:function(e){var t=e.artists;return U("div",{className:"artists_list _list",style:H,children:(void 0===t?[]:t).map((function(e,t){return G("div",{className:m("item relative grid items-center hover:bg-gray-100",{"bg-gray-50":t%2==1}),children:[U(i,{to:"/artist/".concat(e.id),className:"absolute inset-0"}),U("div",{className:"cover",children:U("img",{className:"",src:"".concat(e.img1v1Url,"?param=60y60"),alt:""})}),G("div",{className:"name px-2.5 text-sm",children:[e.name,e.alia&&G("span",{className:"text-gray-400",children:["(",null==e?void 0:e.alias[0],")"]})]}),e.accountId&&U("span",{className:"account bg-red-500 w-4 h-4 rounded-full text-white flex-center",children:U(z,{size:12,stroke:3})})]},e.id)}))})},countName:"artistCount"},"专辑":{code:10,unit:"张",limit:20,Node:Y,countName:"albumCount"},"视频":{code:1014,unit:"个",limit:24,Node:q,countName:"videoCount"},"歌单":{code:1e3,unit:"个",limit:20,Node:function(e){var t=e.playlists;return U("div",{className:"playlists_list _list",style:$,children:(void 0===t?[]:t).map((function(e,t){return G("div",{className:m("item grid items-center relative hover:bg-gray-100",{"bg-gray-50":t%2==1}),children:[U(i,{className:"absolute inset-0 z-0",to:"/playlist/music/".concat(e.id)}),U("div",{className:"cover",children:U("img",{className:"",src:"".concat(e.coverImgUrl,"?param=60y60"),alt:""})}),U("div",{className:"name px-3",children:e.name}),G("div",{className:"trackCount text-gray-400",children:[e.trackCount,"首"]}),G("div",{className:"creator text-gray-300",children:["by  ",U(i,{to:"/user/".concat(e.creator.userId),className:"ui_text_black_hover relative z-10",children:e.creator.nickname})]})]},e.id)}))})},countName:"playlistCount"},"歌词":{code:1006,unit:"首",limit:20,Node:Q,countName:"songCount"},"主播电台":{code:1009,unit:"个",limit:100,Node:W,countName:"djRadiosCount"},"用户":{code:1002,unit:"位",limit:20,Node:Z,countName:"userprofileCount"}},re={artist:function(e){var t,r=e.item;return G(i,{to:"/artist/".concat(r.id),className:"h-16 w-1/3 flex items-center bg-gray-100 rounded overflow-hidden px-2",children:[U("img",{className:"h-10 object-fit rounded-full",src:"".concat(r.picUrl,"?param=60y60"),alt:""}),G("div",{className:"px-2 flex-1 w-0",children:[G("div",{className:"truncate text-sm",children:["歌手：",r.name,(null===(t=r.alias)||void 0===t?void 0:t.length)>0&&U("span",{className:"text-gray-400",children:"(".concat(r.alias,")")})]}),G("div",{className:"text-gray-400",children:["粉丝数:",N(r.fansSize),",歌曲:",r.musicSize]})]})]})},album:function(e){var t,r=e.item;return G(i,{to:"/playlist/album/".concat(r.id),className:"h-16 w-1/3 flex items-center bg-gray-100 rounded overflow-hidden px-2",children:[U("img",{className:"h-10",src:"".concat(r.blurPicUrl,"?param=60y60"),alt:""}),G("div",{className:"px-2 flex-1 w-0",children:[G("div",{className:"text-sm truncate",children:["专辑：",r.name,(null===(t=r.alias)||void 0===t?void 0:t.length)>0&&U("span",{className:"text-gray-400",children:"(".concat(r.alias,")")})]}),U("div",{className:"text-gray-400",children:r.artist.name})]})]})},orpheus:function(e){e.item;return null},new_mlog:function(e){e.item;return null},playlist:function(e){var t=e.item;return G(i,{to:"/playlist/music/".concat(t.id),className:"h-16 w-1/3 flex items-center bg-gray-100 rounded overflow-hidden px-2",title:t.name,children:[U("img",{className:"h-10",src:"".concat(t.coverImgUrl,"?param=60y60"),alt:""}),G("div",{className:"px-2 flex-1 w-0",children:[G("div",{className:"text-sm truncate",children:["歌单：",t.name]}),U("div",{className:"text-gray-400",children:t.creator.name})]})]})},concert:function(e){var t=e.item;return G("a",{target:"_blank",href:t.url,className:"h-16 w-1/3 flex items-center bg-gray-100 rounded overflow-hidden px-2",title:t.title,children:[U("img",{className:"h-10",src:"".concat(t.cover,"?param=60y60"),alt:""}),G("div",{className:"px-2 flex-1 w-0",children:[G("div",{className:"text-sm truncate",children:["演唱会：",t.title]}),U("div",{className:"text-gray-400 truncate",children:t.artists})]})]})}},ne=a.exports.memo((function(e){var t,r=e.keywords,n=g({keywords:r}),i=n.data,o=n.isLoading,c=(null==i?void 0:i.result)||{};return 0===(null==c||null===(t=c.orders)||void 0===t?void 0:t.length)?null:o?U(x,{}):G("div",{className:"py-4",children:[U("div",{className:"text-gray-500",children:"你可能感兴趣"}),U("div",{className:"mt-2 flex gap-3",children:c.orders.map((function(e){return a.exports.createElement(re[e],{item:c[e][0],key:e})}))})]})})),ae=a.exports.memo((function(){var e,t=o(),r=t.keywords,n=void 0===r?"":r,i=t.type,s=void 0===i?"":i,d=b(),u=w(_).count,h=void 0===u?0:u;a.exports.useEffect((function(){d(j({keywords:n}))}),[n]);var f=(null===(e=te[s])||void 0===e?void 0:e.unit)||"";return G("div",{className:"domSearch overflow-auto max-h-full flex-auto",children:[G("div",{className:"px-8 py-5",children:[G("div",{className:"h1",children:["搜索 ",n]}),U(ne,{keywords:n}),G("div",{className:"mt-5 flex items-center",children:[U("div",{className:"flex gap-4",children:ee.map((function(e){return U(c,{to:encodeURIComponent(e),className:function(e){var t=e.isActive;return m("text-sm",t&&"font-bold ui_underline")},children:e},e)}))}),G("div",{className:"ml-auto text-gray-400",children:["找到 ",h,f," ",s]})]})]}),U(l,{})]})})),ie=a.exports.memo((function(){console.log("entry search");var e=o(),i=e.keywords,c=void 0===i?"":i,l=e.type,s=void 0===l?"":l,d=b(),u=n(a.exports.useState(1),2),m=u[0],h=u[1],f=n(a.exports.useState({}),2),v=f[0],p=f[1],y=n(a.exports.useState(0),2),g=y[0],N=y[1],j=te[s],I=j.code,O=j.limit,A=j.Node,z=j.countName,T=w(_).keywords,R=n(k(),2),F=R[0],M=R[1].isLoading;a.exports.useEffect((function(){d(L({count:g}))}),[g]),a.exports.useEffect((function(){T||d(E({keywords:c}))}),[c]);var H=function(){var e,n=(e=t().mark((function e(r){var n,a,i;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F({keywords:c,limit:O,type:I,offset:(r-1)*O});case 2:a=e.sent,i=(null==a||null===(n=a.data)||void 0===n?void 0:n.result)||{},p(i),N(i[z]);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,i){var o=e.apply(t,n);function c(e){r(o,a,i,c,l,"next",e)}function l(e){r(o,a,i,c,l,"throw",e)}c(void 0)}))});return function(e){return n.apply(this,arguments)}}(),D=function(e){h(e),H(e)};return a.exports.useEffect((function(){d(S()),D(1)}),[c,s]),M?U("div",{className:"pt-48 flex-center",children:U(x,{})}):G(P,{children:[a.exports.createElement(A,v),U(C,{total:Math.ceil(g/O),page:m,func:D})]})}));e("default",a.exports.memo((function(){return U(s,{children:G(d,{path:":keywords",element:U(ae,{}),children:[U(d,{path:":type",element:U(ie,{})}),U(d,{index:!0,element:U(u,{to:"单曲",replace:!0})})]})})})))}}}))}();