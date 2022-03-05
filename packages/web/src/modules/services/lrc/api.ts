import { SimiSongs } from "./types";
import { base } from "../base";

export const api = base.injectEndpoints({
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
