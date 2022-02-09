import { ResRelated } from "./types";
import { base } from "../base";

export const api = base.injectEndpoints({
  endpoints: (build) => ({
    getRelatedAllVideo: build.query<ResRelated, { id: string }>({
      query: (body) => ({
        url: `related/allvideo`,
        method: "POST",
        body,
      }),
    }),
    getVideoUrl: build.query<ResRelated, { id: string }>({
      query: (body) => ({
        url: `video/url`,
        method: "POST",
        body,
      }),
    }),
    getVideoDetail: build.query<ResRelated, { id: string }>({
      query: (body) => ({
        url: `video/detail`,
        method: "POST",
        body,
      }),
    }),
    getVideoDetailInfo: build.query<ResRelated, { vid: string }>({
      query: (body) => ({
        url: `video/detail/info`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetRelatedAllVideoQuery,
  useGetVideoUrlQuery,
  useGetVideoDetailQuery,
  useGetVideoDetailInfoQuery,
} = api;
