(()=>{"use strict";function e(e,s){for(var t=0;t<s.length;t++){var n=s[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}self;var s=new(function(){function s(){var e,t;!function(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}(this,s),t="player",(e="targetOrigin")in this?Object.defineProperty(this,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):this[e]=t}var t,n;return t=s,(n=[{key:"init",value:function(e){var s=this;this.send=new XMLHttpRequest,this.send.open("GET",e),this.send.responseType="blob",this.send.addEventListener("progress",(function(e){var s=e.loaded/e.total;console.log("progress","".concat(100*s,"%")),self.postMessage({callback:"progress",progress:s})})),this.send.addEventListener("readystatechange",(function(){4===s.send.readyState&&200===s.send.status&&(self.postMessage({callback:"state",state:"已缓存",response:s.send.response}),self.close())})),this.send.send()}},{key:"abort",value:function(){console.log("终止下载！"),this.send.abort(),self.close()}}])&&e(t.prototype,n),s}());self.addEventListener("message",(function(e){var t=e.data,n=t.method,a=t.url;s[n](a)}))})();
//# sourceMappingURL=download.worker.bcc8e881.worker.js.map