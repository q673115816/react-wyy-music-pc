import Album from "./Album";
import Artist from "./Artist";
import MV from "./MV";
import Topic from "./Topic";
import { FC, ReactNode } from "react";

export type Path = "专辑" | "歌手" | "视频" | "专栏";
export const navs: Path[] = ["专辑", "歌手", "视频", "专栏"];

export const nodes: { [key in Path]: FC } = {
  专辑: Album,
  歌手: Artist,
  视频: MV,
  专栏: Topic,
};
