import fs from "fs";
import path from "path";

const resolve = (src: string) => path.resolve(process.cwd(), src);

interface Options {
  template?: string;
  filename?: string;
}

export default (options?: Options) => {
  const defineProps: Options = {
    template: "index.html",
    filename: "404.html",
  };
  const userOptions = Object.assign(defineProps, options);
  const { template, filename } = userOptions;
  const templatePath = resolve(template as string);
  const targetPath = resolve(filename as string);
  fs.copyFile(templatePath, targetPath, (err: NodeJS.ErrnoException | null) => {
    if (err) throw err;
    console.log("copyFile complete!");
  });

  return {
    input: {
      index: targetPath,
    },
  };
};
