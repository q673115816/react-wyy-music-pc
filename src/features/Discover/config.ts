import Artist from "./Artist";
import DJ from "./DJ";
import Newest from "./Newest";
import Playlist from "./Playlist";
import Recommend from "./Recommend";
import TopList from "./TopList";
import { FC } from "react";

export const navs = [
  "个性推荐",
  "专属定制",
  "歌单",
  "排行榜",
  "歌手",
  "最新音乐",
];

export const nodes = [Recommend, DJ, Playlist, TopList, Artist, Newest];

export const elements: [string, FC][] = navs.map((nav, index) => [
  encodeURIComponent(nav),
  nodes[index],
]);
