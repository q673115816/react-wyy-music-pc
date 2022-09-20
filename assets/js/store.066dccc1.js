import{c}from"./lodash.f41ef0b4.js";var g={exports:{}};/*! store2 - v2.14.2 - 2022-07-18
* Copyright (c) 2022 Nathan Bubna; Licensed (MIT OR GPL-3.0) */(function(_){(function(h,u){var i={version:"2.14.2",areas:{},apis:{},nsdelim:".",inherit:function(t,e){for(var n in t)e.hasOwnProperty(n)||Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n));return e},stringify:function(t,e){return t===void 0||typeof t=="function"?t+"":JSON.stringify(t,e||i.replace)},parse:function(t,e){try{return JSON.parse(t,e||i.revive)}catch(n){return t}},fn:function(t,e){i.storeAPI[t]=e;for(var n in i.apis)i.apis[n][t]=e},get:function(t,e){return t.getItem(e)},set:function(t,e,n){t.setItem(e,n)},remove:function(t,e){t.removeItem(e)},key:function(t,e){return t.key(e)},length:function(t){return t.length},clear:function(t){t.clear()},Store:function(t,e,n){var r=i.inherit(i.storeAPI,function(a,o,l){return arguments.length===0?r.getAll():typeof o=="function"?r.transact(a,o,l):o!==void 0?r.set(a,o,l):typeof a=="string"||typeof a=="number"?r.get(a):typeof a=="function"?r.each(a):a?r.setAll(a,o):r.clear()});r._id=t;try{var s="__store2_test";e.setItem(s,"ok"),r._area=e,e.removeItem(s)}catch(a){r._area=i.storage("fake")}return r._ns=n||"",i.areas[t]||(i.areas[t]=r._area),i.apis[r._ns+r._id]||(i.apis[r._ns+r._id]=r),r},storeAPI:{area:function(t,e){var n=this[t];return(!n||!n.area)&&(n=i.Store(t,e,this._ns),this[t]||(this[t]=n)),n},namespace:function(t,e,n){if(n=n||this._delim||i.nsdelim,!t)return this._ns?this._ns.substring(0,this._ns.length-n.length):"";var r=t,s=this[r];if((!s||!s.namespace)&&(s=i.Store(this._id,this._area,this._ns+r+n),s._delim=n,this[r]||(this[r]=s),!e))for(var a in i.areas)s.area(a,i.areas[a]);return s},isFake:function(t){return t?(this._real=this._area,this._area=i.storage("fake")):t===!1&&(this._area=this._real||this._area),this._area.name==="fake"},toString:function(){return"store"+(this._ns?"."+this.namespace():"")+"["+this._id+"]"},has:function(t){return this._area.has?this._area.has(this._in(t)):this._in(t)in this._area},size:function(){return this.keys().length},each:function(t,e){for(var n=0,r=i.length(this._area);n<r;n++){var s=this._out(i.key(this._area,n));if(s!==void 0&&t.call(this,s,this.get(s),e)===!1)break;r>i.length(this._area)&&(r--,n--)}return e||this},keys:function(t){return this.each(function(e,n,r){r.push(e)},t||[])},get:function(t,e){var n=i.get(this._area,this._in(t)),r;return typeof e=="function"&&(r=e,e=null),n!==null?i.parse(n,r):e!=null?e:n},getAll:function(t){return this.each(function(e,n,r){r[e]=n},t||{})},transact:function(t,e,n){var r=this.get(t,n),s=e(r);return this.set(t,s===void 0?r:s),this},set:function(t,e,n){var r=this.get(t),s;return r!=null&&n===!1?e:(typeof n=="function"&&(s=n,n=void 0),i.set(this._area,this._in(t),i.stringify(e,s),n)||r)},setAll:function(t,e){var n,r;for(var s in t)r=t[s],this.set(s,r,e)!==r&&(n=!0);return n},add:function(t,e,n){var r=this.get(t);if(r instanceof Array)e=r.concat(e);else if(r!==null){var s=typeof r;if(s===typeof e&&s==="object"){for(var a in e)r[a]=e[a];e=r}else e=r+e}return i.set(this._area,this._in(t),i.stringify(e,n)),e},remove:function(t,e){var n=this.get(t,e);return i.remove(this._area,this._in(t)),n},clear:function(){return this._ns?this.each(function(t){i.remove(this._area,this._in(t))},1):i.clear(this._area),this},clearAll:function(){var t=this._area;for(var e in i.areas)i.areas.hasOwnProperty(e)&&(this._area=i.areas[e],this.clear());return this._area=t,this},_in:function(t){return typeof t!="string"&&(t=i.stringify(t)),this._ns?this._ns+t:t},_out:function(t){return this._ns?t&&t.indexOf(this._ns)===0?t.substring(this._ns.length):void 0:t}},storage:function(t){return i.inherit(i.storageAPI,{items:{},name:t})},storageAPI:{length:0,has:function(t){return this.items.hasOwnProperty(t)},key:function(t){var e=0;for(var n in this.items)if(this.has(n)&&t===e++)return n},setItem:function(t,e){this.has(t)||this.length++,this.items[t]=e},removeItem:function(t){this.has(t)&&(delete this.items[t],this.length--)},getItem:function(t){return this.has(t)?this.items[t]:null},clear:function(){for(var t in this.items)this.removeItem(t)}}},f=i.Store("local",function(){try{return localStorage}catch(t){}}());f.local=f,f._=i,f.area("session",function(){try{return sessionStorage}catch(t){}}()),f.area("page",i.storage("page")),typeof u=="function"&&u.amd!==void 0?u("store2",[],function(){return f}):_.exports?_.exports=f:(h.store&&(i.conflict=h.store),h.store=f)})(c,c&&c.define)})(g);const p=g.exports;export{p as s};
