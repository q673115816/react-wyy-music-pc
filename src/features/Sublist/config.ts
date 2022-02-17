import Album from "./layouts/Album";
import Artist from "./layouts/Artist";
import MV from "./layouts/MV";
import Topic from "./layouts/Topic";
import { ReactNode } from "react";

export type ConfigName = "专辑" | "歌手" | "视频" | "专栏";
export const navs: ConfigName[] = ["专辑", "歌手", "视频", "专栏"];

export const elements: [ConfigName, ReactNode][] = [
  ['专辑', Album],
  ['歌手', Artist],
  ['视频', MV],
  ['专栏', Topic],
]
