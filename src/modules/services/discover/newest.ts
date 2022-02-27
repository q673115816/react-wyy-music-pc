import { base } from "../base";
import { Songs } from "./types";
import { limit } from "@/common/config";

interface ReqArtists {
  type: number;
}

interface ResAlbums {
  area: number;
  type: string;
  limit: number;
  offset: number;
}

const api = base.injectEndpoints({
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
  }),
});

export const { useGetTopSongQuery, useGetTopAlbumQuery } = api;
