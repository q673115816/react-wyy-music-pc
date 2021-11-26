import { FC } from "react";
import Download from "./Download";
import Local from "./Local";
interface Nav {
  name: string;
  path: string;
  Element: FC;
}

export const navs: Nav[] = [
  {
    name: "下载管理",
    path: "download",
    Element: Download,
  },
  {
    name: "本地音乐",
    path: "local",
    Element: Local,
  },
];
