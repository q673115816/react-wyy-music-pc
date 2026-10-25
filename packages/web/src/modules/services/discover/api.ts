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
import { useRtkMutation, useRtkQuery } from "@/shared/query/rtk-compat";

export const useGetRecommendResourceQuery = () =>
  useRtkQuery<Resources>(["recommend/resource"], () =>
    apiPost<Resources>("recommend/resource")
  );

export const useGetBannerQuery = () =>
  useRtkQuery<Banners>(["banner"], () => apiGet<Banners>("banner"));

export const useGetPersonalizedPrivatecontentQuery = () =>
  useRtkQuery<Privatecontents>(["personalized/privatecontent"], () =>
    apiGet<Privatecontents>("personalized/privatecontent")
  );

export const useGetPersonalizedNewsongQuery = (arg: { limit: number }) =>
  useRtkQuery<Newsongs, { limit: number }>(
    (body) => ["personalized/newsong", body],
    (body) => apiPost<Newsongs>("personalized/newsong", body as any),
    arg
  );

export const useGetPersonalizedMVQuery = () =>
  useRtkQuery<MVs>(["personalized/mv"], () =>
    apiGet<MVs>("personalized/mv")
  );

export const useGetPersonalizedDJProgramQuery = () =>
  useRtkQuery<DJPrograms>(["personalized/djprogram"], () =>
    apiGet<DJPrograms>("personalized/djprogram")
  );

export const useGetPlaylistHighqualityTagsQuery = () =>
  useRtkQuery<Tags>(["playlist/highquality/tags"], () =>
    apiGet<Tags>("playlist/highquality/tags")
  );

export const useGetPlaylistHotQuery = () =>
  useRtkQuery<Tags>(["playlist/hot"], () => apiGet<Tags>("playlist/hot"));

export const useGetPlaylistCatListQuery = () =>
  useRtkQuery<Tags>(["playlist/catlist"], () =>
    apiGet<Tags>("playlist/catlist")
  );

export const useGetTopPlaylistHighqualityMutation = (options?: {
  onSuccess?: (
    data: Highqualitys,
    variables: { cat: string; limit?: number; before?: number }
  ) => void;
}) =>
  useRtkMutation<
    Highqualitys,
    { cat: string; limit?: number; before?: number }
  >((body) => apiPost<Highqualitys>("top/playlist/highquality", body as any), {
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
  useRtkQuery<
    Playlists,
    { order: string; cat: string; limit: number; offset: number }
  >(
    (body) => ["top/playlist", body],
    (body) => apiPost<Playlists>("top/playlist", body as any),
    arg
  );

export * from "./toplist";
export * from "./newest";
