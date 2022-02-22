"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[487],{9361:(e,t,n)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function s(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?g(e):t}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=n(7363),m=(n(5697),n(4450)),b=n(8176);function w(e){for(var t="",n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t+=String.fromCharCode(r):r<2048?(t+=String.fromCharCode(192|r>>6),t+=String.fromCharCode(128|63&r)):r<55296||r>=57344?(t+=String.fromCharCode(224|r>>12),t+=String.fromCharCode(128|r>>6&63),t+=String.fromCharCode(128|63&r)):(n++,r=65536+((1023&r)<<10|1023&e.charCodeAt(n)),t+=String.fromCharCode(240|r>>18),t+=String.fromCharCode(128|r>>12&63),t+=String.fromCharCode(128|r>>6&63),t+=String.fromCharCode(128|63&r))}return t}var C={size:128,level:"L",bgColor:"#FFFFFF",fgColor:"#000000",includeMargin:!1};function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=[];return e.forEach((function(e,r){var o=null;e.forEach((function(i,a){if(!i&&null!==o)return n.push("M".concat(o+t," ").concat(r+t,"h").concat(a-o,"v1H").concat(o+t,"z")),void(o=null);if(a!==e.length-1)i&&null===o&&(o=a);else{if(!i)return;null===o?n.push("M".concat(a+t,",").concat(r+t," h1v1H").concat(a+t,"z")):n.push("M".concat(o+t,",").concat(r+t," h").concat(a+1-o,"v1H").concat(o+t,"z"))}}))})),n.join("")}function S(e,t){return e.slice().map((function(e,n){return n<t.y||n>=t.y+t.h?e:e.map((function(e,n){return(n<t.x||n>=t.x+t.w)&&e}))}))}function P(e,t){var n=e.imageSettings,r=e.size,o=e.includeMargin;if(null==n)return null;var i=o?4:0,a=t.length+2*i,l=Math.floor(.1*r),c=a/r,u=(n.width||l)*c,f=(n.height||l)*c,s=null==n.x?t.length/2-u/2:n.x*c,h=null==n.y?t.length/2-f/2:n.y*c,g=null;if(n.excavate){var p=Math.floor(s),v=Math.floor(h);g={x:p,y:v,w:Math.ceil(u+s-p),h:Math.ceil(f+h-v)}}return{x:s,y:h,h:f,w:u,excavation:g}}var j=function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}return!0}(),x=function(e){function t(){var e,n;c(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return d(g(n=s(this,(e=h(t)).call.apply(e,[this].concat(o)))),"_canvas",void 0),d(g(n),"_image",void 0),d(g(n),"state",{imgLoaded:!1}),d(g(n),"handleImageLoad",(function(){n.setState({imgLoaded:!0})})),n}return p(t,e),f(t,[{key:"componentDidMount",value:function(){this._image&&this._image.complete&&this.handleImageLoad(),this.update()}},{key:"componentWillReceiveProps",value:function(e){var t,n;(null===(t=this.props.imageSettings)||void 0===t?void 0:t.src)!==(null===(n=e.imageSettings)||void 0===n?void 0:n.src)&&this.setState({imgLoaded:!1})}},{key:"componentDidUpdate",value:function(){this.update()}},{key:"update",value:function(){var e=this.props,t=e.value,n=e.size,r=e.level,o=e.bgColor,i=e.fgColor,a=e.includeMargin,l=e.imageSettings,c=new m(-1,b[r]);if(c.addData(w(t)),c.make(),null!=this._canvas){var u=this._canvas,f=u.getContext("2d");if(!f)return;var s=c.modules;if(null===s)return;var h=a?4:0,g=s.length+2*h,p=P(this.props,s);null!=l&&null!=p&&null!=p.excavation&&(s=S(s,p.excavation));var v=window.devicePixelRatio||1;u.height=u.width=n*v;var d=n/g*v;f.scale(d,d),f.fillStyle=o,f.fillRect(0,0,g,g),f.fillStyle=i,j?f.fill(new Path2D(O(s,h))):s.forEach((function(e,t){e.forEach((function(e,n){e&&f.fillRect(n+h,t+h,1,1)}))})),this.state.imgLoaded&&this._image&&null!=p&&f.drawImage(this._image,p.x+h,p.y+h,p.w,p.h)}}},{key:"render",value:function(){var e=this,t=this.props,n=(t.value,t.size),r=(t.level,t.bgColor,t.fgColor,t.style),i=(t.includeMargin,t.imageSettings),c=l(t,["value","size","level","bgColor","fgColor","style","includeMargin","imageSettings"]),u=a({height:n,width:n},r),f=null,s=i&&i.src;return null!=i&&null!=s&&(f=y.createElement("img",{src:s,style:{display:"none"},onLoad:this.handleImageLoad,ref:function(t){return e._image=t}})),y.createElement(y.Fragment,null,y.createElement("canvas",o({style:u,height:n,width:n,ref:function(t){return e._canvas=t}},c)),f)}}]),t}(y.PureComponent);d(x,"defaultProps",C);var E=function(e){function t(){return c(this,t),s(this,h(t).apply(this,arguments))}return p(t,e),f(t,[{key:"render",value:function(){var e=this.props,t=e.value,n=e.size,r=e.level,i=e.bgColor,a=e.fgColor,c=e.includeMargin,u=e.imageSettings,f=l(e,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]),s=new m(-1,b[r]);s.addData(w(t)),s.make();var h=s.modules;if(null===h)return null;var g=c?4:0,p=h.length+2*g,v=P(this.props,h),d=null;null!=u&&null!=v&&(null!=v.excavation&&(h=S(h,v.excavation)),d=y.createElement("image",{xlinkHref:u.src,height:v.h,width:v.w,x:v.x+g,y:v.y+g,preserveAspectRatio:"none"}));var C=O(h,g);return y.createElement("svg",o({shapeRendering:"crispEdges",height:n,width:n,viewBox:"0 0 ".concat(p," ").concat(p)},f),y.createElement("path",{fill:i,d:"M0,0 h".concat(p,"v").concat(p,"H0z")}),y.createElement("path",{fill:a,d:C}),d)}}]),t}(y.PureComponent);d(E,"defaultProps",C);var _=function(e){var t=e.renderAs,n=l(e,["renderAs"]),r="svg"===t?E:x;return y.createElement(r,n)};_.defaultProps=a({renderAs:"canvas"},C),e.exports=_}}]);
//# sourceMappingURL=qrcode.js.map?version=e0b2fbf4