# 用react实现网易云图片浏览插件
##### image viewer component built with React.
[示例](https://neteasecloudmusic.fun/user/46636813/dynamic)

---

### Installation
**npm**
<pre>npm i <a href="https://www.npmjs.com/package/@q673115816/pics-viewer">@q673115816/pics-viewer</a></pre>

### [Example](https://codesandbox.io/s/pics-viewer-demo-bv1ynq)

```jsx
import React from "react";
import PicsViewer from "@q673115816/pics-viewer"

const srcList = [
  {
    width: 560,
    height: 560,
    originUrl: "https://cdn.jsdelivr.net/gh/q673115816/cdn/image/佐菲.jpg",
  }
]

const App = () => {
  return (
    <PicsViewer srcList={srcList} />
  )
}
```

### Props
```typescript
interface PicsViewer {
  srcList: {
    width: number | string;
    height: number | string;
    originUrl: string;
  }[];
  className: string;
}

```
