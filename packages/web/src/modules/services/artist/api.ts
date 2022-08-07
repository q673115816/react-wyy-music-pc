import {
  Artists,
  Detail,
  Albums,
  TopSongs,
  Desc,
  Req,
  ArtistMV,
  Sub,
} from "./types";
import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery, { base } from "../base";

export const reducerPath = "artist";

export const api = createApi({
  reducerPath,
  baseQuery,
  endpoints: (build) => ({
    getArtistDetail: build.query<Detail, Req>({
      query: (body) => ({
        url: `artist/detail`,
        method: "POST",
        body,
      }),
      providesTags: (result, error, { id }) => [{ type: "artist/detail", id }],
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
    postArtistSub: build.mutation<Sub, Req & { t?: number }>({
      query: (body) => ({
        url: `artist/sub`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "artist/detail", id },
      ],
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
