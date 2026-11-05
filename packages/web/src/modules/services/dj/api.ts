import { Banners, DJs } from "./types";
import { apiGet, apiPost } from "@/shared/api/client";
import { useQuery } from "@tanstack/react-query";
import { djKeys } from "@/shared/query/keys";

export const useGetDJBannerQuery = () =>
  useQuery({
    queryKey: djKeys.banner,
    queryFn: () => apiGet<Banners>("dj/banner"),
  });

export const useGetDJCategoryRecommendQuery = () =>
  useQuery({
    queryKey: djKeys.categoryRecommend,
    queryFn: () => apiGet<Banners>("dj/category/recommend"),
  });

export const useGetDJCateListQuery = () =>
  useQuery({
    queryKey: djKeys.cateList,
    queryFn: () => apiGet<Banners>("dj/cateList"),
  });

export const useGetDJPersonalizeRecommendQuery = () =>
  useQuery({
    queryKey: djKeys.personalizeRecommend,
    queryFn: () => apiGet<Banners>("dj/personalize/recommend"),
  });

export const useGetDJRadioHotQuery = (arg: {
  cateId: number;
  limit: number;
  offset?: number;
}) =>
  useQuery({
    queryKey: djKeys.radioHot(arg),
    queryFn: () => apiPost<DJs>("dj/radio/hot", arg as any),
  });
