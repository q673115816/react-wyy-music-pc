(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{84:function(e,a,t){"use strict";t.r(a);var l=t(11),n=t.n(l),r=t(9),c=t.n(r),m=t(17),i=t.n(m),s=t(0),u=t.n(s),o=t(10),E=t(5),d=t(21),v=t(15),p=t(12),b=t(18),N=Object(b.a)((function(){return t.e(14).then(t.bind(null,102))}));a.default=function(){var e=Object(p.c)((function(e){return e})),a=e.account,t=e.user,l=t.profile,r=t.level,m=t.playlist,b=e.common.isLogin,f=Object(o.i)().url,y=Object(o.h)().uid,w=!!b&&String(a.profile.userId)===y,g=Object(p.b)(),j=m.filter((function(e){return String(e.userId)===y})),O=(m.filter((function(e){return String(e.userId)!==y})),function(){var e=i()(n.a.mark((function e(){var a,t,l,r,m,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([Object(d.C)(y),Object(d.D)(y)]);case 3:a=e.sent,t=c()(a,2),l=t[0],r=l.profile,m=l.level,i=t[1].playlist,g(Object(v.w)({profile:r,level:m,playlist:i})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}());return Object(s.useEffect)((function(){O()}),[y]),b?u.a.createElement("div",{className:"overflow-auto"},u.a.createElement("div",{className:"domUser"},u.a.createElement("div",{className:"domUser_header"},u.a.createElement("div",{className:"avatar"},u.a.createElement("img",{src:"".concat(l.avatarUrl,"?param=200y200"),alt:"",className:"containimg"})),u.a.createElement("div",{className:"content"},u.a.createElement("div",{className:"name"},l.nickname),u.a.createElement("div",null,u.a.createElement("span",null,r),u.a.createElement("span",null,l.gender)),u.a.createElement("div",null,u.a.createElement("button",{type:"button"},"编辑个人信息"),u.a.createElement("button",{type:"button"},"发私信"),u.a.createElement("button",{type:"button"},"关注")),u.a.createElement("br",null),u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement("div",null,"27"),u.a.createElement("div",null,"动态")),u.a.createElement("div",null,u.a.createElement("div",null,"27"),u.a.createElement("div",null,"关注")),u.a.createElement("div",null,u.a.createElement("div",null,"27"),u.a.createElement("div",null,"粉丝"))),u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement("span",null,"所在地区："),u.a.createElement("span",null,"浙江省 温州市")),u.a.createElement("li",null,u.a.createElement("span",null,"社交网络："),u.a.createElement("span",null,"xixi")),u.a.createElement("li",null,u.a.createElement("span",null,"个人介绍："),u.a.createElement("span",null,"66"))))),u.a.createElement("div",{className:"domUser_main"},u.a.createElement("div",null,u.a.createElement("span",null,"歌单"),u.a.createElement("div",null,u.a.createElement("button",{type:"button",title:"大图模式"},u.a.createElement("i",{className:"material-icons"},"widgets")),u.a.createElement("button",{type:"button",title:"列表模式"},u.a.createElement("i",{className:"material-icons"},"menu")),u.a.createElement("button",{type:"button",title:"图列模式"},u.a.createElement("i",{className:"material-icons"},"list")))),u.a.createElement("div",{className:"domUser_list ui_grid square col_4"},u.a.createElement("div",{className:"item"},u.a.createElement(E.b,{to:"".concat(f,"/record")},u.a.createElement("div",{className:"cover"},u.a.createElement("div",{className:"inner"},u.a.createElement(N,null)),u.a.createElement("div",{className:"rb"},u.a.createElement("span",{className:"playArrow"},u.a.createElement("i",{className:"material-icons"},"play_arrow"))))),u.a.createElement("div",{className:"footer"},u.a.createElement(E.b,{to:"/",className:"name"},w?"我的听歌排行":"听歌排行"))),j.map((function(e){return u.a.createElement("div",{className:"item",key:e.id},u.a.createElement(E.b,{to:"/"},u.a.createElement("div",{className:"cover"},u.a.createElement("div",{className:"inner"},u.a.createElement("img",{src:"".concat(e.coverImgUrl,"?param=200y200"),className:"containimg",alt:""})),u.a.createElement("div",{className:"rb"},u.a.createElement("span",{className:"playArrow"},u.a.createElement("i",{className:"material-icons"},"play_arrow"))))),u.a.createElement("div",{className:"footer"},u.a.createElement(E.b,{to:"/"},e.name)))})))))):u.a.createElement("div",null,"查看个人信息请先登录")}}}]);