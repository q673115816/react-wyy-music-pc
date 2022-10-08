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

import { baseApi } from "../../base";

export const api = baseApi.injectEndpoints({
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
