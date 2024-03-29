import { Songs, Lyrics } from "./types";
import { baseApi } from "../base";

export const api = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSongUrl: build.mutation<Songs, { id: number }>({
      query: (body) => ({
        url: `song/url`,
        method: "POST",
        body,
      }),
    }),
    getSongDetail: build.query<Songs, { ids: string }>({
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
  useGetSongDetailQuery,
  useLazyGetSongDetailQuery,
  useGetPersonalFMMutation,
} = api;
