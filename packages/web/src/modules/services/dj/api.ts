import { Banners, DJs } from "./types";
import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery, { base } from "../base";

export const reducerPath = "dj";

export const api = createApi({
  reducerPath,
  baseQuery,
  endpoints: (build) => ({
    getDJBanner: build.query<Banners, void>({
      query: () => `dj/banner`,
    }),
    getDJCategoryRecommend: build.query<Banners, void>({
      query: () => `dj/category/recommend`,
    }),
    getDJCateList: build.query<Banners, void>({
      query: () => `dj/cateList`,
    }),
    getDJPersonalizeRecommend: build.query<Banners, void>({
      query: () => `dj/personalize/recommend`,
    }),
    getDJRadioHot: build.query<
      DJs,
      { cateId: number; limit: number; offset?: number }
    >({
      query: (body) => ({
        url: `dj/radio/hot`,
        method: "POST",
        body,
      }),
    }),
    getRecommendSongs: build.query<DJs, void>({
      query: (body) => ({
        url: `recommend/songs`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetDJBannerQuery,
  useGetDJCategoryRecommendQuery,
  useGetDJCateListQuery,
  useGetDJRadioHotQuery,
  useGetDJPersonalizeRecommendQuery,
} = api;
