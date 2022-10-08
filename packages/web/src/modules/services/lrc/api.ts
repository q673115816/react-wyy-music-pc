import { SimiSongs } from "./types";
import { baseApi } from "../base";

export const api = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSimiSong: build.query<SimiSongs, { id: number }>({
      query: (body) => ({
        url: `simi/song`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetSimiSongQuery } = api;
