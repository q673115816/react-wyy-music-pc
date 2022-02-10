import {
  Artists,
  Detail,
  Albums,
  TopSongs,
  Desc,
  Req,
  ArtistMV,
} from "./types";
import { base } from "../base";

export const api = base.injectEndpoints({
  endpoints: (build) => ({
    getArtistDetail: build.query<Detail, Req>({
      query: (body) => ({
        url: `artist/detail`,
        method: "POST",
        body,
      }),
    }),
    postArtistSub: build.mutation<Detail, Req & { t: number }>({
      query: (body) => ({
        url: `artist/sub`,
        method: "POST",
        body,
      }),
    }),
    getSimiArtist: build.query<Artists, Req>({
      query: (body) => ({
        url: `simi/artist`,
        method: "POST",
        body,
      }),
    }),
    getArtistAlbum: build.query<Albums, Req>({
      query: (body) => ({
        url: `artist/album`,
        method: "POST",
        body,
      }),
    }),
    getArtistTopSong: build.query<TopSongs, Req>({
      query: (body) => ({
        url: `artist/top/song`,
        method: "POST",
        body,
      }),
    }),
    getArtistDesc: build.query<Desc, Req>({
      query: (body) => ({
        url: `artist/desc`,
        method: "POST",
        body,
      }),
    }),
    getArtistMV: build.mutation<
      ArtistMV,
      Req & { limit: number; offset: number }
    >({
      query: (body) => ({
        url: `artist/mv`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetArtistDetailQuery,
  useGetSimiArtistQuery,
  useGetArtistAlbumQuery,
  useGetArtistTopSongQuery,
  useGetArtistDescQuery,
  useGetArtistMVMutation,
  usePostArtistSubMutation,
} = api;
