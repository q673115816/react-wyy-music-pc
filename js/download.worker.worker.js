(()=>{self;var e=new(function(){"use strict";function e(){!function(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}(this,e),this.targetOrigin="player"}var s=e.prototype;return s.init=function(e){var s=this;this.send=new XMLHttpRequest,this.send.open("GET",e),this.send.responseType="blob",this.send.addEventListener("progress",(function(e){var s=e.loaded/e.total;console.log("progress","".concat(100*s,"%")),self.postMessage({callback:"progress",progress:s})})),this.send.addEventListener("readystatechange",(function(){4===s.send.readyState&&200===s.send.status&&(self.postMessage({callback:"state",state:"已缓存",response:s.send.response}),self.close())})),this.send.send()},s.abort=function(){console.log("终止下载！"),this.send.abort(),self.close()},e}());self.addEventListener("message",(function(s){var t=s.data,n=t.method,o=t.url;e[n](o)}))})();
//# sourceMappingURL=download.worker.worker.js.map?version=abe670c8