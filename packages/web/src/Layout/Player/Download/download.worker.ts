const ctx: Worker = self as any;
class Module {
  send: any;
  targetOrigin = "player";
  constructor() {
    // this.url = null;
    // this.send = null;
  }

  init(url: string) {
    // this.url = url;
    this.send = new XMLHttpRequest();
    this.send.open("GET", url);

    // this.send.setRequestHeader('Content-Type', 'blob');
    this.send.responseType = "blob";
    this.send.addEventListener("progress", ({ loaded, total }) => {
      const progress = loaded / total;
      console.log("progress", `${progress * 100}%`);
      self.postMessage({ callback: "progress", progress });
      // setDownloadProcess(progress);
    });
    this.send.addEventListener("readystatechange", () => {
      // console.log(this.send);
      if (!(this.send.readyState === 4 && this.send.status === 200)) return;
      // console.log('finish', this.send.response);
      // setDownloadState('已缓存');
      self.postMessage({
        callback: "state",
        state: "已缓存",
        response: this.send.response,
      });
      // RefAjax.current = null;
      // handleCreateFile();
      // this.create();
      self.close();
    });
    this.send.send();
  }

  abort() {
    console.log("终止下载！");
    this.send.abort();
    self.close();
  }
}

const methods = new Module();

self.addEventListener("message", (req) => {
  const { method, url } = req.data;
  methods[method](url);
});
