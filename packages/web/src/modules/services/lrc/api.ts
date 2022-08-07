import { SimiSongs } from "./types";
import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery, { base } from "../base";

export const reducerPath = "lrc";

export const api = createApi({
  reducerPath,
  baseQuery,
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
