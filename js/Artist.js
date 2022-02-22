"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[9],{3703:(e,t,n)=>{n.r(t),n.d(t,{default:()=>W});var r=n(7363),a=n.n(r),l=n(6711),o=n(4184),i=n.n(o),c=n(5666),s=n.n(c),u=n(6719),m=n(5583),d=n(4837),f=n(553);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e,t,n,r,a,l,o){try{var i=e[l](o),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}function p(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var l=e.apply(t,n);function o(e){y(l,r,a,o,i,"next",e)}function i(e){y(l,r,a,o,i,"throw",e)}o(void 0)}))}}var b=function(){var e,t,n,r,o,i,c,y,b,h,E,x=(0,l.useParams)().id,g=void 0===x?"":x,N=(0,d.T)(),w=(h=(0,f.UN)(),E=2,function(e){if(Array.isArray(e))return e}(h)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}}(h,E)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(h,E)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),A=w[0],k=(w[1].isLoading,(0,f.UD)({id:g}).data),S=(null==k?void 0:k.data)||{},I=(null==S||null===(e=S.user)||void 0===e?void 0:e.followed)||!1,_=(b=p(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A({id:g,t:1});case 3:N((0,m.setToast)("收藏成功！")),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),function(){return b.apply(this,arguments)}),j=function(){var e=p(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!I){e.next=4;break}N((0,m.setDialogUnSubscriptionShow)({artistId:g})),e.next=6;break;case 4:return e.next=6,_();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a().createElement("div",{className:"domArtist_header flex p-8"},a().createElement("div",{className:"w-44 h-44 border overflow-hidden rounded"},a().createElement("img",{src:"".concat(null===(t=S.artist)||void 0===t?void 0:t.cover,"?param=200y200"),alt:""})),a().createElement("div",{className:"content flex-auto px-5"},a().createElement("div",{className:"name h1 select-text"},null===(n=S.artist)||void 0===n?void 0:n.name),a().createElement("div",{className:"enname my-3 select-text"},null===(r=S.alias)||void 0===r?void 0:r.map((function(e){return e}))),a().createElement("div",{className:"actions mt-3 flex space-x-2"},a().createElement("button",{onClick:j,type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full flex items-center text-sm"},I?a().createElement(a().Fragment,null,a().createElement(u.IconCheckbox,{size:20,stroke:1}),"已收藏"):a().createElement(a().Fragment,null,a().createElement(u.IconFolderPlus,{size:20,stroke:1}),"收藏")),S.user&&a().createElement(l.Link,{to:"/user/".concat(null===(o=S.user)||void 0===o?void 0:o.userId),className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full flex items-center text-sm"},"个人主页")),a().createElement("div",{className:"info mt-5 space-x-5"},a().createElement("span",{className:"size"},"单曲数:",null==S||null===(i=S.artist)||void 0===i?void 0:i.musicSize),a().createElement("span",{className:"size"},"专辑数:",null===(c=S.artist)||void 0===c?void 0:c.albumSize),a().createElement("span",{className:"size"},"MV数:",null===(y=S.artist)||void 0===y?void 0:y.mvSize))))};const h=(0,r.memo)(b);var E=n(7484),x=n.n(E),g=function(e){var t=e.hotAlbums,n=void 0===t?[]:t;return a().createElement("div",{className:"grid grid-cols-4 p-8 gap-x-20 gap-y-5"},n.map((function(e){return a().createElement("div",{className:"item",key:e.id},a().createElement("div",{className:"cover rounded overflow-hidden relative group"},a().createElement(l.Link,{to:"/playlist/album/".concat(e.id)},a().createElement("img",{className:"",src:"".concat(e.picUrl,"?param=200y200"),alt:""})),a().createElement("button",{type:"button",className:"absolute inset-0 ui_themeColor flex-center m-auto w-10 h-10 rounded-full bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"},a().createElement(u.IconPlayerPlay,{size:20,className:"fill-current"}))),a().createElement("div",{className:"name text-sm mt-2"},a().createElement(l.Link,{to:"/playlist/album/".concat(e.id),className:"ui_ellipse"},a().createElement("span",{className:"ui_text_black_hover"},e.name),e.alias.map((function(e){return a().createElement("span",{className:"text-gray-500",key:e},"（".concat(e,"）"))})))),a().createElement("div",{className:"text-gray-400 mt-2"},x()(e.publishTime).format("YYYY-MM-DD")))})))};const N=(0,r.memo)(g);var w=function(e){var t=e.hotAlbums,n=void 0===t?[]:t;return a().createElement("div",{className:"list pt-4"},n.map((function(e,t){var n;return a().createElement("div",{className:i()("list_item pl-5 flex items-center h-20 hover:bg-gray-100",{"bg-gray-50":t%2==0}),key:e.id},a().createElement(l.Link,{className:"cover border rounded flex-none w-14 h-14",to:"/playlist/album/".concat(e.id)},a().createElement("img",{className:"ui_containimg",src:"".concat(e.picUrl,"?param=100y100"),alt:""})),a().createElement(l.Link,{className:"name truncate px-2.5",to:"/playlist/album/".concat(e.id)},e.name," ",(null===(n=e.alias)||void 0===n?void 0:n.length)>0&&a().createElement("span",{className:"text-gray-400"},"(",e.alias.map((function(e){return e})),")")),a().createElement("span",{className:"size text-gray-400"},e.size,"首"),a().createElement("span",{className:"publishTime text-gray-400"},"发行时间：",x()(e.publishTime).format("YYYY-MM-DD")))})))};const A=(0,r.memo)(w);var k=n(623),S=n(6129);function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var _=function(){var e=(0,l.useParams)().id,t=void 0===e?"":e;console.log("artist_column");var n,o,c=(n=(0,r.useState)(10),o=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}}(n,o)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=c[0],m=c[1],d=(0,f.rW)({id:t}).data,v=(null==d?void 0:d.songs)||[];return a().createElement("div",{className:"column p-8"},a().createElement("div",{className:"column_item"},a().createElement("div",{className:"cover"},a().createElement("div",{className:"Top50 flex-none bg-black bg-opacity-50 flex-center flex-col font-bold rounded w-full h-full text-white"},a().createElement("div",{className:"text-4xl"},"TOP"),a().createElement("div",{className:"text-6xl"},"50"))),a().createElement("div",{className:"aside flex-auto ml-20 w-0"},a().createElement("div",{className:"flex"},a().createElement("span",{className:"font-bold text-base"},"热门50首"),a().createElement("div",{className:"flex items-center"},a().createElement("button",{type:"button",className:"flex-none border rounded-full flex-center mx-3 p-1"},a().createElement(u.IconPlayerPlay,{size:10,className:"fill-current"})),a().createElement("span",{className:"text-gray-300"},"|"),a().createElement("button",{type:"button",className:"mx-3"},a().createElement(u.IconFolderPlus,{size:20,stroke:1})))),a().createElement("div",{className:"list mt-2"},v.slice(0,s).map((function(e,t){return a().createElement("div",{className:i()("item hover:bg-gray-100 focus:outline-none focus:bg-gray-200",{"bg-gray-50":t%2==0}),tabIndex:2,key:e.id},a().createElement("div",{className:"index flex-none text-right text-gray-400"},String(t+1).padStart(2,"0")),a().createElement("div",{className:"heart flex-none text-center"},a().createElement(S.Z,{id:e.id})),a().createElement("div",{className:"download flex-none text-center"},a().createElement("button",{type:"button",className:"text-gray-500 hover:text-black"},a().createElement(u.IconDownload,{size:16,stroke:1}))),a().createElement("div",{className:"name flex-auto flex flex-auto min-w-0 px-2.5"},a().createElement("span",{className:"truncate",title:"".concat(e.name,"(").concat(e.alia.map((function(e){return e})),")")},e.name," ",a().createElement("span",{className:"text-gray-400"},e.alia.map((function(e){return e})))),a().createElement(k.Z,{item:e,className:"flex-none"})),a().createElement("div",{className:"duration text-gray-400 flex-none"},x()(e.dt).format("mm:ss")))})),10===s&&v.length>10&&a().createElement("button",{type:"button",className:"seeMore",onClick:function(){return m(50)}},"查看全部",v.length,"首 >")))))};const j=(0,r.memo)(_);var C=n(30),z=n(4719);function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?L(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var M=[["Grid",u.IconLayoutGrid],["List",u.IconList],["Column",u.IconLayout]],T={Grid:N,List:A,Column:j};const U=(0,r.memo)((function(){var e=(0,l.useParams)().id,t=void 0===e?"":e,n=P((0,C.Z)("layout",M[0][0]),3),o=n[0],c=void 0===o?"Grid":o,s=n[1],u=(n[2],(0,f.U6)({id:t})),m=u.data,d=u.isLoading,v=(null==m?void 0:m.hotAlbums)||[];return null==m||m.more,d?a().createElement(z.Z,null):a().createElement("div",{className:"domArtist_section relative"},a().createElement("div",{className:"absolute right-8 bottom-full actions ml-auto space-x-0.5 flex rounded-sm overflow-hidden"},M.map((function(e){var t=P(e,2),n=t[0],r=t[1];return a().createElement("button",{key:n,type:"button",className:i()("px-1.5 py-0.5 bg-gray-200","handle",n===c&&"bg-gray-400 text-white"),onClick:function(){return s(n)}},a().createElement(r,{size:14,stroke:1}))}))),a().createElement("div",{className:"domArtist_section_layout"},(0,r.createElement)(T[c],{hotAlbums:v,id:t})))}));var O=n(534),D=n(9227),Y=n(57);function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function R(e,t,n,r,a,l,o){try{var i=e[l](o),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}}(e,t)||F(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){if(e){if("string"==typeof e)return Z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(e,t):void 0}}var G=function(){var e=(0,l.useParams)().id,t=void 0===e?"":e,n=(0,f.Qe)({id:t}),r=n.data;if(n.isLoading)return a().createElement("div",{className:"flex justify-center pt-12"},a().createElement(z.Z,null));var o=(null==r?void 0:r.artists)||[];return 0===o.length?a().createElement("div",{className:"text-center text-gray-400 text-sm pt-16"},"没有相似歌手"):a().createElement("div",{className:"domArtist_section p-8"},a().createElement("div",{className:"grid grid-cols-5 gap-5"},o.map((function(e){return a().createElement("div",{className:"item",key:e.id},a().createElement("div",{className:"cover rounded overflow-hidden border"},a().createElement(l.Link,{to:"/artist/".concat(e.id),className:""},a().createElement("img",{loading:"lazy",className:"aspect-square",src:"".concat(e.picUrl,"?param=200y200"),alt:""}))),a().createElement("div",{className:"footer text-sm mt-2"},a().createElement(l.Link,{to:"/artist/".concat(e.id),className:""},e.name)))}))))},V=[["专辑","Album"],["MV","MV"],["歌手详情","Detail"],["相似歌手","Similarity"]],q={Album:U,MV:(0,r.memo)((function(){var e,t,n=(0,l.useParams)().id,o=void 0===n?"":n,i=$((0,Y.x)([]),2),c=i[0],u=i[1],m=$((0,f.HK)(),2),d=m[0],v=m[1].isLoading,y=(0,r.useRef)(!0),p=(0,r.useRef)(0),b=(0,r.useRef)(null),h=(0,r.useRef)(null),E=(e=s().mark((function e(){var t,n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y.current){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,d({id:o,limit:24,offset:p.current});case 5:t=e.sent.data,p.current+=24,n=(null==t?void 0:t.mvs)||[],r=(null==t?void 0:t.hasMore)||!1,y.current=r,u((function(e){var t,r;(t=e).push.apply(t,function(e){if(Array.isArray(e))return Z(e)}(r=n.map((function(e){var t=e.id,n=e.imgurl,r=e.duration,a=e.name;return{id:t,duration:r,playCount:e.playCount,cover:n,title:a,type:"0"}})))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||F(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})),t=function(){var t=this,n=arguments;return new Promise((function(r,a){var l=e.apply(t,n);function o(e){R(l,r,a,o,i,"next",e)}function i(e){R(l,r,a,o,i,"throw",e)}o(void 0)}))},function(){return t.apply(this,arguments)});return(0,O.Z)(E,b,h),a().createElement("div",{className:"domArtist_section p-8"},a().createElement(D.Z,{list:c}),a().createElement("div",{ref:h,className:"flex-center"},v&&a().createElement(z.Z,null)))})),Detail:h,Similarity:(0,r.memo)(G)};function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function K(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const Q=(0,r.memo)((function(){var e=K((0,r.useState)(V[0][1]),2),t=e[0],n=e[1];return a().createElement("div",{className:"domArtist overflow-auto max-h-full flex-auto"},a().createElement(h,null),a().createElement("div",{className:"domArtist_main"},a().createElement("div",{className:"domArtist_nav flex mx-8"},a().createElement("div",{className:"flex space-x-4 text-sm"},V.map((function(e){var r=K(e,2),l=r[0],o=r[1];return a().createElement("button",{key:o,onClick:function(){return n(o)},type:"button",className:i()("domArtist_nav_link",t===o&&"font-bold ui_underline")},l)}))),a().createElement("div",{className:"domArtist_album_layout relative ml-auto"})),(0,r.createElement)(q[t])))})),W=function(){return a().createElement(l.Routes,null,a().createElement(l.Route,{path:":id",element:a().createElement(Q,null)}))}}}]);
//# sourceMappingURL=Artist.js.map?version=b27cc63e