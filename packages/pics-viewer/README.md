# 用react实现网易云图片浏览插件

[示例](https://neteasecloudmusic.fun/user/46636813/dynamic)

---

install
<pre>npm i <a href="https://www.npmjs.com/package/@q673115816/pics-viewer">@q673115816/pics-viewer</a></pre>

use

<pre>
import PicsViewer from "@q673115816/pics-viewer"

const srcList = [
  {
    width: 560,
    height: 560,
    originUrl: "https://cdn.jsdelivr.net/gh/q673115816/cdn/image/佐菲.jpg",
  }
]

<PicsViewer srcList={srcList}></PicsViewer>
</pre>
