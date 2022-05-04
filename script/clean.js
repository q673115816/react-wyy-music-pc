import fs from "fs-extra";
import path from "path";
async function main() {
  await clean();
}
export default async function clean() {
  // await fs.remove(path.resolve(__dirname, "../.cache"));
  // await fs.remove(path.resolve(__dirname, "../.tmp"));
  // await fs.remove(path.resolve(__dirname, "../lib"));
  // await fs.remove(path.resolve(__dirname, "../build"));
  await fs.remove(path.resolve(__dirname, "../build"));
}
if (typeof require !== "undefined" && require.main === module) {
  main();
}
