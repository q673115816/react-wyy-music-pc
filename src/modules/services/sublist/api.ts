import { MVs, Albums, Topics, Artists } from "./types";
import { base } from "../base";

export const api = base.injectEndpoints({
  endpoints: (build) => ({
    getMVSubList: build.query<MVs, void>({
      query: (body) => ({
        url: `mv/sublist`,
        method: "POST",
        body,
      }),
    }),
    getTopicSubList: build.query<Topics, void>({
      query: (body) => ({
        url: `topic/sublist`,
        method: "POST",
        body,
      }),
    }),
    getArtistSubList: build.query<Artists, void>({
      query: (body) => ({
        url: `artist/sublist`,
        method: "POST",
        body,
      }),
    }),
    getAlbumSubList: build.query<Albums, void>({
      query: (body) => ({
        url: `album/sublist`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetAlbumSubListQuery,
  useGetArtistSubListQuery,
  useGetMVSubListQuery,
  useGetTopicSubListQuery,
} = api;
