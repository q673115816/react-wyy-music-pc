import {
  Banners,
  Privatecontents,
  Newsongs,
  MVs,
  DJPrograms,
  Resources,
} from "./types";
import { base } from "../base";

export const api = base.injectEndpoints({
  endpoints: (build) => ({
    getRecommendResource: build.query<Resources, void>({
      query: () => ({
        url: `recommend/resource`,
        method: "POST",
      }),
    }),
    getBanner: build.query<Banners, void>({
      query: () => `banner`,
    }),
    getPersonalizedPrivatecontent: build.query<Privatecontents, void>({
      query: () => `personalized/privatecontent`,
    }),
    getPersonalizedNewsong: build.query<Newsongs, { limit: number }>({
      query: (body) => ({
        url: `personalized/newsong`,
        method: "POST",
        body,
      }),
    }),
    getPersonalizedMV: build.query<MVs, void>({
      query: () => `personalized/mv`,
    }),
    getPersonalizedDJProgram: build.query<DJPrograms, void>({
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
  useGetPersonalizedDJProgramQuery,
} = api;
