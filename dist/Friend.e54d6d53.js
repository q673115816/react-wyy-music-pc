(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{93:function(e,t,a){"use strict";a.r(t);var n=a(11),c=a.n(n),r=a(17),l=a.n(r),s=a(9),m=a.n(s),i=a(7),o=a.n(i),u=a(0),d=a.n(u),E=a(12),p=a(5),v=a(27),N=a.n(v),b=(a(75),a(21)),f=a(15),h=a(10),g=function(e){var t=e.item,a=void 0===t?{}:t,n=e.handleGetComment,c=e.actThreadId,r=JSON.parse(a.json),l=Object(E.c)((function(e){return e.friend})).comments;return d.a.createElement("div",{className:"item",key:a.id},d.a.createElement("div",{className:"avator"},d.a.createElement("img",{className:"containimg",src:"".concat(a.user.avatarUrl,"?param=100y100"),alt:""})),d.a.createElement("div",{className:"content"},d.a.createElement("div",{className:"name"},d.a.createElement(p.b,{className:"ui_link",to:"/user/".concat(a.user.userId)},a.user.nickname)," ",d.a.createElement("span",null,"分享单曲")),d.a.createElement("div",{className:"time"},d.a.createElement("span",{className:"gray"},N()(a.eventTime).locale("zh-cn").format("MM月DD日 hh:mm"))),d.a.createElement("div",{className:"article"},d.a.createElement("p",{className:"text"},r.msg),r.song&&d.a.createElement("button",{type:"button",className:"song"},d.a.createElement("div",{className:"img"},d.a.createElement("img",{className:"containimg",src:r.song.img80x80,alt:""})),d.a.createElement("div",{className:"aside"},d.a.createElement("div",{className:"name"},r.song.name),d.a.createElement("div",{className:"artist text-overflow"},r.song.artists.map((function(e){return d.a.createElement("span",{className:"gray"},e.name)}))))),d.a.createElement("div",{className:"info"},d.a.createElement("div",{className:"right"},d.a.createElement("button",{type:"button",className:"action"},d.a.createElement("i",{className:"material-icons"},"thumb_up")," ",d.a.createElement("span",null,"(",a.info.likedCount,")")),d.a.createElement("i",{className:"vert"}),d.a.createElement("button",{type:"button",className:"action"},d.a.createElement("i",{className:"material-icons"},"share")),d.a.createElement("i",{className:"vert"}),d.a.createElement("button",{type:"button",className:"action",onClick:function(){return n(a.info.threadId)}},d.a.createElement("i",{className:"material-icons"},"chat")," ",d.a.createElement("span",null,a.info.commentCount)),d.a.createElement("i",{className:"vert"}),d.a.createElement("button",{type:"button",className:"action"},d.a.createElement("i",{className:"material-icons"},"more_horiz")))),a.info.threadId===c&&d.a.createElement("div",{className:"comment"},d.a.createElement("div",{className:"write"},d.a.createElement("textarea",null),d.a.createElement("div",{className:"help"},d.a.createElement("div",{className:"left"},d.a.createElement("button",{type:"button"},d.a.createElement("i",{className:"material-icons"},"sentiment_satisfied_alt")),d.a.createElement("button",{type:"button"},d.a.createElement("i",{className:"material-icons"},"alternate_email")),d.a.createElement("button",{type:"button"},d.a.createElement("i",{className:"material-icons"},"title"))),d.a.createElement("div",{className:"right"},d.a.createElement("button",{className:"ui_btn",type:"button"},"评论")))),d.a.createElement("div",null,"最新评论(",l.length,")"),d.a.createElement("ul",null,l.slice(0,10).map((function(e){return d.a.createElement("li",null,d.a.createElement("div",{className:"avatar"},d.a.createElement("img",{className:"containimg",src:e.user.avatarUrl,alt:""})),d.a.createElement("div",{className:"commentContent"},d.a.createElement("div",null,e.content),d.a.createElement("div",null,N()(e.time).format("[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]"))))})))))))};function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(Object(a),!0).forEach((function(t){o()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.default=function(){var e=Object(E.c)((function(e){var t=e.friend,a=e.common;return O(O({},t),a)})),t=e.hot,a=e.isLogin,n=e.event,r=Object(h.i)().url,s=Object(E.b)(),i=Object(u.useState)(""),o=m()(i,2),v=o[0],N=o[1],y=function(){var e=l()(c.a.mark((function e(){var t,n,r,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(b.k)({limit:5});case 3:if(t=e.sent,n=t.hot,!a){e.next=11;break}return e.next=8,Object(b.j)();case 8:r=e.sent,l=r.event,s(Object(f.h)({event:l}));case 11:s(Object(f.i)({hot:n})),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=l()(c.a.mark((function e(t){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v!==t){e.next=3;break}return N(""),e.abrupt("return");case 3:return e.prev=3,e.next=6,Object(b.d)({threadId:t});case 6:a=e.sent,n=a.comments,N(t),s(Object(f.f)({comments:n})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){y()}),[]),d.a.createElement("div",{className:"domFriend overflow-auto"},d.a.createElement("div",{className:"domFriend_left"},d.a.createElement("div",{className:"domFriend_header"},d.a.createElement("span",{className:"h1"},"动态"),d.a.createElement("button",{type:"button",className:"ui_btn_small"},d.a.createElement("i",{className:"material-icons"},"add"),"写动态")),d.a.createElement("div",{className:"domFriend_content"},a?d.a.createElement("div",{className:"domFriend_dynamic"},n.map((function(e){return d.a.createElement(g,{actThreadId:v,key:e.id,item:e,handleGetComment:j})}))):d.a.createElement("div",{className:"empty insetCenter center"},d.a.createElement("span",{className:"gray"},"暂无动态")))),d.a.createElement("div",{className:"domFriend_split"}),d.a.createElement("div",{className:"domFriend_right"},d.a.createElement("div",{className:"domFriend_user"},d.a.createElement("div",{className:"nologin"},d.a.createElement("div",{style:{height:170}}),d.a.createElement("div",{className:"tips"},"登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机"),d.a.createElement("button",{type:"button",className:"login"},"立即登录"))),d.a.createElement("div",{className:"domFriend_hotTopic"},d.a.createElement("div",{className:"header"},d.a.createElement("span",null,"热门话题"),d.a.createElement(p.b,{className:"gray",to:"".concat(r,"/hotTopic")},"更多 >")),d.a.createElement("div",{className:"list"},t.map((function(e){return d.a.createElement(p.b,{to:"/",key:e.actId,className:"item"},d.a.createElement("div",{className:"cover"},d.a.createElement("img",{className:"containimg",src:"".concat(e.sharePicUrl,"?param=50y50"),alt:""})),d.a.createElement("div",{className:"content"},d.a.createElement("div",{className:"title"},"#",e.title,"#"),d.a.createElement("div",{className:"participateCount"},d.a.createElement("span",{className:"gray"},e.participateCount,"人参与"))))}))))))}}}]);