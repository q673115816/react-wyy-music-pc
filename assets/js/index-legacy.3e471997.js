System.register(["./react-legacy.b3bc90c5.js","./classnames-legacy.82f93ed6.js","./useLoginStatus-legacy.1f93aef4.js","./index-legacy.8e22e50d.js","./index-legacy.a7c631d5.js","./Rank-legacy.e331984d.js","./dayjs-legacy.7dd3aa6c.js","./lodash-legacy.4434829e.js","./qrcode.react-legacy.685a2ddb.js","./react-router-legacy.983234a4.js","./@tabler/icons-legacy.70165014.js","./react-dom-legacy.c211300b.js","./react-redux-legacy.c7a29beb.js","./immer-legacy.c24b5c0e.js","./redux-persist-legacy.af414400.js","./axios-legacy.6d9fa2e4.js","./rxjs-legacy.4711c62e.js","./react-use-legacy.597098f4.js","./react-router-dom-legacy.02c0d312.js","./react-transition-group-legacy.04c7c2c7.js","./color-legacy.6099eccf.js","./history-legacy.13b73ead.js"],(function(e,t){"use strict";var r,a,s,l,n,c,i,d,o,m,u,h,y,f,g,_,p,x,Y;return{setters:[e=>{r=e.r},e=>{a=e.a},e=>{s=e.u},e=>{l=e.G},e=>{n=e.m,c=e.aB,i=e.M,d=e.W,o=e.A,m=e.u,u=e.aC},e=>{h=e.R},e=>{y=e.a,f=e.d},e=>{e.c},e=>{g=e.j,_=e.a,p=e.F},e=>{x=e.R,Y=e.f},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){!function(e,t){e.exports=function(e){function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=t(e),a={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(e,t){return"W"===t?e+"周":e+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(e,t){var r=100*e+t;return r<600?"凌晨":r<900?"早上":r<1100?"上午":r<1300?"中午":r<1800?"下午":"晚上"}};return r.default.locale(a,null,!0),a}(y.exports)}({exports:{}});var t={exports:{}};!function(e,t){e.exports=function(e,t,r){e=e||{};var a=t.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function l(e,t,r,s){return a.fromToBase(e,t,r,s)}r.en.relativeTime=s,a.fromToBase=function(t,a,l,n,c){for(var i,d,o,m=l.$locale().relativeTime||s,u=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=u.length,y=0;y<h;y+=1){var f=u[y];f.d&&(i=n?r(t).diff(l,f.d,!0):l.diff(t,f.d,!0));var g=(e.rounding||Math.round)(Math.abs(i));if(o=i>0,g<=f.r||!f.r){g<=1&&y>0&&(f=u[y-1]);var _=m[f.l];c&&(g=c(""+g)),d="string"==typeof _?_.replace("%d",g):_(g,a,f.l,o);break}}if(a)return d;var p=o?m.future:m.past;return"function"==typeof p?p(d):p.replace("%s",d)},a.to=function(e,t){return l(e,t,this,!0)},a.from=function(e,t){return l(e,t,this)};var n=function(e){return e.$u?r.utc():r()};a.toNow=function(e){return this.to(n(this),e)},a.fromNow=function(e){return this.from(n(this),e)}}}(t);const v=t.exports;f.extend(v),f.locale("zh-cn");const j=r.exports.memo((()=>{const{history:e}=n(c);return console.log(e),0===e.length?g("div",{className:"text-center pt-40 text-gray-400",children:"你还没播放任何音乐"}):g("div",{className:"pb-8",style:{"--ui_grid_template":"36px / 54px 45% 5fr 3fr"},children:_("div",{children:[_("div",{className:"grid items-center text-gray-500 ui_grid_template",children:[g("div",{className:"col-start-2 px-2",children:"音乐标题"}),g("div",{className:"px-2",children:"歌手"}),g("div",{className:"px-2",children:"播放时间"})]}),e.map(((e,t)=>g(i,{schema:[["评论","播放","下一首播放"],["收藏到歌单","分享","复制链接","不感兴趣","下载"]],type:"song",item:e,tabIndex:2,className:a("grid h-9 items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none ui_grid_template",{"bg-gray-50":t%2==0}),children:_(p,{children:[g("div",{className:"index pr-3 text-right",children:g(h,{index:t})}),g(d,{item:e,className:"px-2"}),g(o,{artists:e.ar,className:"px-2"}),g("div",{className:"duration text-gray-400 truncate px-2",children:f(e.lastTime).fromNow()})]})},e.name+e.id)))]})})})),M=r.exports.memo((()=>{s();const e=m();return _("div",{className:"w-full overflow-auto max-h-full flex-auto",children:[_("div",{className:"px-8 pb-2.5 pt-6",children:[_("div",{className:"flex items-center pb-8",children:[g("div",{className:"h1",children:"最近播放"}),"   ",g("div",{className:"text-gray-400",children:`共${history.length}首`}),g("button",{onClick:()=>{if(0===history.length)return!1;e(u())},type:"button",className:a("ml-auto text-sm",0===history.length?"text-gray-300":"ui_link"),children:"清空列表"})]}),g(l,{playlist:history})]}),g(j,{})]})}));e("default",(()=>g(x,{children:g(Y,{index:!0,element:g(M,{})})})))}}}));
