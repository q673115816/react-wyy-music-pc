import { MV } from "./types";
import { base } from "../base";

export const api = base.injectEndpoints({
  endpoints: (build) => ({
    getMVSubList: build.query<MV, void>({
      query: (body) => ({
        url: `mv/sublist`,
        method: "POST",
        body,
      }),
    }),
    getTopicSubList: build.query<MV, void>({
      query: (body) => ({
        url: `topic/sublist`,
        method: "POST",
        body,
      }),
    }),
    getArtistSubList: build.query<MV, void>({
      query: (body) => ({
        url: `artist/sublist`,
        method: "POST",
        body,
      }),
    }),
    getAlbumSubList: build.query<MV, void>({
      query: (body) => ({
        url: `album/sublist`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetMVSubListQuery,
  useGetTopicSubListQuery,
  useGetArtistSubListQuery,
  useGetAlbumSubListQuery,
} = api;
