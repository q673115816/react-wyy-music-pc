import Album from "./Album";
import Artist from "./Artist";
import MV from "./MV";
import Topic from "./Topic";
import { ReactNode } from "react";
import { useGetMVSubListQuery } from "@/modules/services/sublist";

export type ConfigName = "专辑" | "歌手" | "视频" | "专栏";
export const navs: ConfigName[] = ["专辑", "歌手", "视频", "专栏"];

export const elements: { [key in ConfigName]: ReactNode } = {
  专辑: Album,
  歌手: Artist,
  视频: MV,
  专栏: Topic,
};

export const apis = {
  专辑: Album,
  歌手: Artist,
  视频: useGetMVSubListQuery,
  专栏: Topic,
};
