var i=Object.defineProperty;var l=(t,s,e)=>s in t?i(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e;var r=(t,s,e)=>(l(t,typeof s!="symbol"?s+"":s,e),e);(function(){"use strict";class t{constructor(){r(this,"send");r(this,"targetOrigin","player")}init(n){this.send=new XMLHttpRequest,this.send.open("GET",n),this.send.responseType="blob",this.send.addEventListener("progress",({loaded:o,total:d})=>{const a=o/d;console.log("progress",`${a*100}%`),self.postMessage({callback:"progress",progress:a})}),this.send.addEventListener("readystatechange",()=>{this.send.readyState===4&&this.send.status===200&&(self.postMessage({callback:"state",state:"\u5DF2\u7F13\u5B58",response:this.send.response}),self.close())}),this.send.send()}abort(){console.log("\u7EC8\u6B62\u4E0B\u8F7D\uFF01"),this.send.abort(),self.close()}}const s=new t;self.addEventListener("message",e=>{const{method:n,url:o}=e.data;s[n](o)})})();