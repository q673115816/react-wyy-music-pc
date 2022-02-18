import Album from "./Album";
import Artist from "./Artist";
import MV from "./MV";
import Topic from "./Topic";
import { FC, ReactNode } from "react";
import {
  useGetAlbumSubListQuery,
  useGetArtistSubListQuery,
  useGetMVSubListQuery,
  useGetTopicSubListQuery,
} from "@/modules/services/sublist";

export type ConfigName = "专辑" | "歌手" | "视频" | "专栏";
export const navs: ConfigName[] = ["专辑", "歌手", "视频", "专栏"];

export interface Rule<T> {
  (data: T[], search: string): T;
}

export interface iContentProps {
  path: string;
}

export const elements: [ConfigName, ReactNode][] = [
  ["专辑", Album],
  ["歌手", Artist],
  ["视频", MV],
  ["专栏", Topic],
];

export const apis: { [key in ConfigName]: ReactNode } = {
  专辑: useGetAlbumSubListQuery,
  歌手: useGetArtistSubListQuery,
  视频: useGetMVSubListQuery,
  专栏: useGetTopicSubListQuery,
};

export const rules: { [key in ConfigName]: Rule<unknown> } = {
  专辑: (data, search) =>
    data.filter(
      (item) =>
        item.name.indexOf(search) >= 0 ||
        item.artists.find((artist) => artist.name.indexOf(search) >= 0)
    ),
  歌手: (data, search) =>
    data.filter(
      (item) =>
        item.name.indexOf(search) >= 0 ||
        item?.trans?.indexOf(search) >= 0 ||
        item.alias.find((alia) => alia.indexOf(search) >= 0)
    ),
  视频: (data, search) =>
    data.filter(
      (item) =>
        item.title.indexOf(search) >= 0 ||
        item.creator.find((creator) => creator.userName.indexOf(search) >= 0)
    ),
  专栏: (data, search) =>
    data.filter(
      (item) =>
        item.name.indexOf(search) >= 0 ||
        item.artists.find((artist) => artist.name.indexOf(search) >= 0)
    ),
};
