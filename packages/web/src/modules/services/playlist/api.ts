import { Details } from "./types";
import { baseApi } from "../base";

export const api = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPlaylistDetail: build.query<Details, { id: number; limit?: number }>({
      query: (body) => ({
        url: `playlist/detail`,
        method: "POST",
        body,
      }),
    }),
    getSongDetail: build.query<Details, { ids: string }>({
      query: (body) => ({
        url: `song/detail`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetPlaylistDetailQuery, useGetSongDetailQuery } = api;
