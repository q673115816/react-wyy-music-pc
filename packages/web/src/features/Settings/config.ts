import { FC, ReactNode } from "react";
import Account from "./Account";
import Normal from "./Normal";
import Play from "./Play";
import Message from "./Message";
import Keyboard from "./Keyboard";
import Download from "./Download";
import Lyric from "./Lyric";
import Tool from "./Tool";
import About from "./About";

export const navs = [
  "账号",
  "常规",
  "播放",
  "消息与隐私",
  "快捷键",
  "下载设置",
  "歌词",
  "工具",
  "关于网易云音乐",
];

export const Nodes: FC[] = [
  Account,
  Normal,
  Play,
  Message,
  Keyboard,
  Download,
  Lyric,
  Tool,
  About,
];

export const Elements: [string, FC][] = navs.map((nav, index) => [
  nav,
  Nodes[index],
]);

export const fonts = [
  ["inherit", "默认"],
  ["仿宋", "仿宋"],
  ["宋体", "宋体"],
  ["微软雅黑", "微软雅黑"],
  ["微软雅黑 Light", "微软雅黑 Light"],
  ["新宋体", "新宋体"],
  ["方正兰亭超细黑简体", "方正兰亭超细黑简体"],
  ["方正粗黑宋简体", "方正粗黑宋简体"],
  ["楷体", "楷体"],
  ["等线", "等线"],
  ["等线 Light", "等线 Light"],
  ["黑体", "黑体"],
];
