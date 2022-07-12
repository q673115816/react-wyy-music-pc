import fs from "fs";
import path from "path";

const resolve = (src: string) => path.resolve(process.cwd(), src);

export default () => {
  fs.copyFile(
    resolve("index.html"),
    resolve("404.html"),
    (err: NodeJS.ErrnoException | null) => {
      if (err) throw err;
      console.log("copyFile complete!");
    }
  );

  return {
    input: {
      index: resolve("404.html"),
    },
  };
};
