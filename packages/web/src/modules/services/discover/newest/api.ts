import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "../../base";
import { Songs } from "./types";

interface ReqArtists {
  type: number;
}

interface ResAlbums {
  area: number;
  type: string;
  limit: number;
  offset: number;
}

export const reducerPath = "discover/newest/api";

export const api = createApi({
  reducerPath,
  baseQuery,
  endpoints: (build) => ({
    getTopSong: build.query<Songs, ReqArtists>({
      query: (body) => ({
        url: `top/song`,
        method: "POST",
        body,
      }),
    }),
    getTopAlbum: build.query<Songs, ResAlbums>({
      query: (body) => ({
        url: `top/album`,
        method: "POST",
        body,
      }),
    }),
    getAlbumNew: build.query<Songs, ResAlbums>({
      query: (body) => ({
        url: `album/new`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetTopSongQuery, useGetTopAlbumQuery, useGetAlbumNewQuery } =
  api;
