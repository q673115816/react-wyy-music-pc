import { ResRelated } from "./types";
import { apiPost } from "@/shared/api/client";
import { useQuery } from "@tanstack/react-query";
import { playerKeys } from "@/shared/query/keys";

export const useGetRelatedAllVideoQuery = (arg: { id: string }) =>
  useQuery({
    queryKey: playerKeys.relatedAllVideo(arg.id),
    queryFn: () => apiPost<ResRelated>("related/allvideo", arg as any),
  });

export const useGetVideoUrlQuery = (arg: { id: string }) =>
  useQuery({
    queryKey: playerKeys.videoUrl(arg.id),
    queryFn: () => apiPost<ResRelated>("video/url", arg as any),
  });

export const useGetVideoDetailQuery = (arg: { id: string }) =>
  useQuery({
    queryKey: playerKeys.videoDetail(arg.id),
    queryFn: () => apiPost<ResRelated>("video/detail", arg as any),
  });

export const useGetVideoDetailInfoQuery = (arg: { vid: string }) =>
  useQuery({
    queryKey: playerKeys.videoDetailInfo(arg.vid),
    queryFn: () => apiPost<ResRelated>("video/detail/info", arg as any),
  });

export const useGetMVDetailQuery = (arg: { ids: string }) =>
  useQuery({
    queryKey: playerKeys.mvDetail(arg.ids),
    queryFn: () => apiPost<unknown>("mv/detail", arg as any),
  });
