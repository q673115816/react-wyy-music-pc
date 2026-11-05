import {
  Banners,
  Privatecontents,
  Newsongs,
  MVs,
  DJPrograms,
  Resources,
  Tags,
  Highqualitys,
  Playlists,
} from "./types";
import { apiGet, apiPost } from "@/shared/api/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { discoverKeys } from "@/shared/query/keys";

export const useGetRecommendResourceQuery = () =>
  useQuery({
    queryKey: discoverKeys.recommendResource,
    queryFn: () => apiPost<Resources>("recommend/resource"),
  });

export const useGetBannerQuery = () =>
  useQuery({
    queryKey: discoverKeys.banner,
    queryFn: () => apiGet<Banners>("banner"),
  });

export const useGetPersonalizedPrivatecontentQuery = () =>
  useQuery({
    queryKey: discoverKeys.privatecontent,
    queryFn: () => apiGet<Privatecontents>("personalized/privatecontent"),
  });

export const useGetPersonalizedNewsongQuery = (arg: { limit: number }) =>
  useQuery({
    queryKey: discoverKeys.newsong(arg.limit),
    queryFn: () => apiPost<Newsongs>("personalized/newsong", arg as any),
  });

export const useGetPersonalizedMVQuery = () =>
  useQuery({
    queryKey: discoverKeys.mv,
    queryFn: () => apiGet<MVs>("personalized/mv"),
  });

export const useGetPersonalizedDJProgramQuery = () =>
  useQuery({
    queryKey: discoverKeys.djprogram,
    queryFn: () => apiGet<DJPrograms>("personalized/djprogram"),
  });

export const useGetPlaylistHighqualityTagsQuery = () =>
  useQuery({
    queryKey: discoverKeys.playlistHighqualityTags,
    queryFn: () => apiGet<Tags>("playlist/highquality/tags"),
  });

export const useGetPlaylistHotQuery = () =>
  useQuery({
    queryKey: discoverKeys.playlistHot,
    queryFn: () => apiGet<Tags>("playlist/hot"),
  });

export const useGetPlaylistCatListQuery = () =>
  useQuery({
    queryKey: discoverKeys.playlistCatList,
    queryFn: () => apiGet<Tags>("playlist/catlist"),
  });

export const useGetTopPlaylistHighqualityMutation = (options?: {
  onSuccess?: (
    data: Highqualitys,
    variables: { cat: string; limit?: number; before?: number }
  ) => void;
}) =>
  useMutation({
    mutationFn: (body: { cat: string; limit?: number; before?: number }) =>
      apiPost<Highqualitys>("top/playlist/highquality", body as any),
    onSuccess: (data, variables) => {
      options?.onSuccess?.(data, variables);
    },
  });

export const useGetTopPlaylistQuery = (arg: {
  order: string;
  cat: string;
  limit: number;
  offset: number;
}) =>
  useQuery({
    queryKey: discoverKeys.topPlaylist(arg),
    queryFn: () => apiPost<Playlists>("top/playlist", arg as any),
  });

export * from "./toplist";
export * from "./newest";
