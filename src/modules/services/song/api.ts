import { Songs, Lyrics } from "./types";
import { base } from "../base";

export const api = base.injectEndpoints({
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
  }),
});

export const {
  useGetSongUrlMutation,
  useGetLyricMutation,
  useGetSongDetailMutation,
} = api;
