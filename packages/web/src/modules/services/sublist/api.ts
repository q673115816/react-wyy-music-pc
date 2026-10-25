import { MVs, Albums, Topics, Artists, DJs } from "./types";
import { apiPost } from "@/shared/api/client";
import { useRtkQuery } from "@/shared/query/rtk-compat";

export const useGetMVSubListQuery = () =>
  useRtkQuery<MVs>(["mv/sublist"], () => apiPost<MVs>("mv/sublist"));

export const useGetTopicSubListQuery = () =>
  useRtkQuery<Topics>(["topic/sublist"], () => apiPost<Topics>("topic/sublist"));

export const useGetArtistSubListQuery = () =>
  useRtkQuery<Artists>(["artist/sublist"], () =>
    apiPost<Artists>("artist/sublist")
  );

export const useGetAlbumSubListQuery = () =>
  useRtkQuery<Albums>(["album/sublist"], () => apiPost<Albums>("album/sublist"));

export const useGetDJSublistQuery = () =>
  useRtkQuery<DJs>(["dj/sublist"], () => apiPost<DJs>("dj/sublist"));
