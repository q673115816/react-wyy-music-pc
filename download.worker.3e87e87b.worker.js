(()=>{const s=new class{constructor(){this.send=null}init(s){this.send=new XMLHttpRequest,this.send.open("GET",s),this.send.responseType="blob",this.send.addEventListener("progress",(({loaded:s,total:e})=>{const t=s/e;console.log("progress",100*t+"%"),postMessage({callback:"progress",progress:t})})),this.send.addEventListener("readystatechange",(()=>{4===this.send.readyState&&200===this.send.status&&(self.postMessage({callback:"state",state:"已缓存",response:this.send.response}),self.close())})),this.send.send()}abort(){console.log("终止下载！"),this.send.abort(),self.close()}};self.addEventListener("message",(e=>{const{method:t,url:n}=e.data;s[t](n)}))})();