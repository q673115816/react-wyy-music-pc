import {
  Banners,
  Privatecontents,
  Newsongs,
  MVs,
  DJPrograms,
  Resources,
  Tags,
  Highqualitys,
  Playlists,
} from "./types";
import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "../base";

export const reducerPath = "discover/api";

export const api = createApi({
  reducerPath,
  baseQuery,
  endpoints: (build) => ({
    getRecommendResource: build.query<Resources, void>({
      query: () => ({
        url: `recommend/resource`,
        method: "POST",
      }),
    }),
    getBanner: build.query<Banners, void>({
      query: () => `banner`,
    }),
    getPersonalizedPrivatecontent: build.query<Privatecontents, void>({
      query: () => `personalized/privatecontent`,
    }),
    getPersonalizedNewsong: build.query<Newsongs, { limit: number }>({
      query: (body) => ({
        url: `personalized/newsong`,
        method: "POST",
        body,
      }),
    }),
    getPersonalizedMV: build.query<MVs, void>({
      query: () => `personalized/mv`,
    }),
    getPersonalizedDJProgram: build.query<DJPrograms, void>({
      query: () => `personalized/djprogram`,
    }),

    getPlaylistHighqualityTags: build.query<Tags, void>({
      query: () => `playlist/highquality/tags`,
    }),
    getPlaylistHot: build.query<Tags, void>({
      query: () => `playlist/hot`,
    }),
    getPlaylistCatList: build.query<Tags, void>({
      query: () => `playlist/catlist`,
    }),

    getTopPlaylistHighquality: build.mutation<
      Highqualitys,
      { cat: string; limit?: number; before?: number }
    >({
      query: (body) => ({
        url: `top/playlist/highquality`,
        method: "POST",
        body,
      }),
    }),
    getTopPlaylist: build.query<
      Playlists,
      { order: string; cat: string; limit: number; offset: number }
    >({
      query: (body) => ({
        url: `top/playlist`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetBannerQuery,
  useGetRecommendResourceQuery,
  useGetPersonalizedPrivatecontentQuery,
  useGetPersonalizedNewsongQuery,
  useGetPersonalizedMVQuery,
  useGetPersonalizedDJProgramQuery,

  useGetPlaylistHotQuery,
  useGetPlaylistCatListQuery,
  useGetTopPlaylistQuery,
  useGetPlaylistHighqualityTagsQuery,
  useGetTopPlaylistHighqualityMutation,
} = api;

export * from "./toplist";
export * from "./newest";