import { MVs, Albums, Topics, Artists, DJs } from "./types";
import { apiPost } from "@/shared/api/client";
import { useQuery } from "@tanstack/react-query";
import { sublistKeys } from "@/shared/query/keys";

export const useGetMVSubListQuery = () =>
  useQuery({
    queryKey: sublistKeys.mv,
    queryFn: () => apiPost<MVs>("mv/sublist"),
  });

export const useGetTopicSubListQuery = () =>
  useQuery({
    queryKey: sublistKeys.topic,
    queryFn: () => apiPost<Topics>("topic/sublist"),
  });

export const useGetArtistSubListQuery = () =>
  useQuery({
    queryKey: sublistKeys.artist,
    queryFn: () => apiPost<Artists>("artist/sublist"),
  });

export const useGetAlbumSubListQuery = () =>
  useQuery({
    queryKey: sublistKeys.album,
    queryFn: () => apiPost<Albums>("album/sublist"),
  });

export const useGetDJSublistQuery = () =>
  useQuery({
    queryKey: sublistKeys.dj,
    queryFn: () => apiPost<DJs>("dj/sublist"),
  });
