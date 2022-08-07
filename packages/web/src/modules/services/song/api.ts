import { Songs, Lyrics } from "./types";
import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery, { base } from "../base";

export const reducerPath = "song";

export const api = createApi({
  reducerPath,
  baseQuery,
  endpoints: (build) => ({
    getSongUrl: build.mutation<Songs, { id: number }>({
      query: (body) => ({
        url: `song/url`,
        method: "POST",
        body,
      }),
    }),
    getSongDetail: build.mutation<Songs, { ids: string }>({
      query: (body) => ({
        url: `song/detail`,
        method: "POST",
        body,
      }),
    }),
    getLyric: build.mutation<Lyrics, { id: number }>({
      query: (body) => ({
        url: `lyric`,
        method: "POST",
        body,
      }),
    }),
    getPersonalFM: build.mutation<Lyrics, void>({
      query: () => `personal_fm`,
    }),
  }),
});

export const {
  useGetSongUrlMutation,
  useGetLyricMutation,
  useGetSongDetailMutation,
  useGetPersonalFMMutation,
} = api;
