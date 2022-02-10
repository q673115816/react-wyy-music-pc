import {
  Banner,
  Privatecontent,
  Newsong,
  MV,
  DJProgram,
} from "./types";
import { base } from "../base";

export const api = base.injectEndpoints({
  endpoints: (build) => ({
    getRecommendResource: build.query<Banner, void>({
      query: () => ({
        url: `recommend/resource`,
        method: "POST"
      }),
    }),
    getBanner: build.query<Banner, void>({
      query: () => `banner`,
    }),
    getPersonalizedPrivatecontent: build.query<Privatecontent, void>({
      query: () => `personalized/privatecontent`,
    }),
    getPersonalizedNewsong: build.query<Newsong, void>({
      query: (body) => ({
        url: `personalized/newsong`,
        method: "POST",
        body
      }),
    }),
    getPersonalizedMV: build.query<MV, void>({
      query: () => `personalized/mv`,
    }),
    getPersonalizedDJProgram: build.query<DJProgram, void>({
      query: () => `personalized/djprogram`,
    }),
  }),
});

export const {
  useGetBannerQuery,
  useGetRecommendResourceQuery,
  useGetPersonalizedPrivatecontentQuery,
  useGetPersonalizedNewsongQuery,
  useGetPersonalizedMVQuery,
  useGetPersonalizedDJProgramQuery
} = api;
