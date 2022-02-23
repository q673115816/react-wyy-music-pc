import {
  IconLayoutGrid,
  IconLayoutList,
  IconList,
  TablerIcon,
} from "@tabler/icons";

import Grid from "./components/Grid";
import List from "./components/List";
import Column from "./components/Column";

export const layouts = ["Grid", "List", "Column"];

export const layoutsBtn: [string, string, TablerIcon][] = [
  ["Grid", "大图模式", IconLayoutGrid],
  ["List", "列表模式", IconLayoutList],
  ["Column", "图列模式", IconList],
];

export const Mains = {
  Grid,
  List,
  Column,
};

export const navs = [
  "创建的歌单",
  "收藏的歌单",
  "创建的播客",
  "收藏的播客",
  "创建的音乐专栏",
];
