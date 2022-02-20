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

export type Path = "专辑" | "歌手" | "视频" | "专栏";
export const navs: Path[] = ["专辑", "歌手", "视频", "专栏"];

export const nodes = [Album, Artist, MV, Topic];

export interface Rule<T> {
  (data: T[], search: string): T;
}

export const elements: [Path, FC<any>][] = navs.map((nav, index) => [
  encodeURIComponent(nav),
  nodes[index],
]);

export const apis: { [key in Path]: any } = {
  专辑: useGetAlbumSubListQuery,
  歌手: useGetArtistSubListQuery,
  视频: useGetMVSubListQuery,
  专栏: useGetTopicSubListQuery,
};

export const rules: { [key in Path]: Rule<unknown> } = {
  专辑: (data, search, reg = new RegExp(search)) =>
    data.filter(
      ({ name, artists }) =>
        reg.test(name) || artists.some(({ name }) => reg.test(name))
    ),
  歌手: (data, search, reg = new RegExp(search)) =>
    data.filter(
      ({ name, trans = "", alias }) =>
        reg.test(name) ||
        reg.test(trans) ||
        alias.some((alia) => reg.test(alia))
    ),
  视频: (data, search, reg = new RegExp(search)) =>
    data.filter(
      ({ title, creator }) =>
        reg.test(title) || creator.some(({ userName }) => reg.test(userName))
    ),
  专栏: (data, search, reg = new RegExp(search)) =>
    data.filter(
      ({ name, artists }) =>
        reg.test(name) || artists.some(({ name }) => reg.test(name))
    ),
};
