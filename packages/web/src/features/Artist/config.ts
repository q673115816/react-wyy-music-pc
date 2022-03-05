import Album from "./components/Album";
import Desc from "./components/Desc";
import MV from "./components/MV";
import Similarity from "./components/Similarity";

export type Nav = "Album" | "MV" | "Desc" | "Similarity";

export const navs: [string, Nav][] = [
  ["专辑", "Album"],
  ["MV", "MV"],
  ["歌手详情", "Desc"],
  ["相似歌手", "Similarity"],
];

export const Contents = {
  Album,
  MV,
  Desc,
  Similarity,
};
