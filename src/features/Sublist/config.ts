import Album from "./layouts/Album";
import Artist from "./layouts/Artist";
import MV from "./layouts/MV";
import Topic from "./layouts/Topic";
import { ReactNode } from "react";
import {
  useGetAlbumSubListQuery,
  useGetArtistSubListQuery,
  useGetMVSubListQuery,
  useGetTopicSubListQuery,
} from "@/modules/services/sublist";

export type ConfigName = "专辑" | "歌手" | "视频" | "专栏";
export const navs: ConfigName[] = ["专辑", "歌手", "视频", "专栏"];

export const elements: { [key in ConfigName]: ReactNode } = {
  专辑: Album,
  歌手: Artist,
  视频: MV,
  专栏: Topic,
};

export const apis = {
  专辑: useGetAlbumSubListQuery,
  歌手: useGetArtistSubListQuery,
  视频: useGetMVSubListQuery,
  专栏: useGetTopicSubListQuery,
};
