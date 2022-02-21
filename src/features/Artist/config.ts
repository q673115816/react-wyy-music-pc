import Album from "./components/Album";
import Detail from "./components/Detail";
import MV from "./components/MV";
import Similarity from "./components/Similarity";

export type Nav = "Album" | "MV" | "Detail" | "Similarity";

export const navs: [string, Nav][] = [
  ["专辑", "Album"],
  ["MV", "MV"],
  ["歌手详情", "Detail"],
  ["相似歌手", "Similarity"],
];

export const Contents = {
  Album,
  MV,
  Detail,
  Similarity,
};
