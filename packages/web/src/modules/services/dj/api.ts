import { Banners, DJs } from "./types";
import { apiGet, apiPost } from "@/shared/api/client";
import { useRtkQuery } from "@/shared/query/rtk-compat";

export const useGetDJBannerQuery = () =>
  useRtkQuery<Banners>(["dj/banner"], () => apiGet<Banners>("dj/banner"));

export const useGetDJCategoryRecommendQuery = () =>
  useRtkQuery<Banners>(["dj/category/recommend"], () =>
    apiGet<Banners>("dj/category/recommend")
  );

export const useGetDJCateListQuery = () =>
  useRtkQuery<Banners>(["dj/cateList"], () => apiGet<Banners>("dj/cateList"));

export const useGetDJPersonalizeRecommendQuery = () =>
  useRtkQuery<Banners>(["dj/personalize/recommend"], () =>
    apiGet<Banners>("dj/personalize/recommend")
  );

export const useGetDJRadioHotQuery = (arg: {
  cateId: number;
  limit: number;
  offset?: number;
}) =>
  useRtkQuery<DJs, { cateId: number; limit: number; offset?: number }>(
    (body) => ["dj/radio/hot", body],
    (body) => apiPost<DJs>("dj/radio/hot", body as any),
    arg
  );
