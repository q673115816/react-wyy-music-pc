import { FC } from "react";
import Download from "./Download";
import Local from "./Local";
interface Nav {
  path: string;
  Element: FC;
}

export const navs: Nav[] = [
  {
    path: "下载管理",
    Element: Download,
  },
  {
    path: "本地音乐",
    Element: Local,
  },
];
