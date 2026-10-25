import { ResRelated } from "./types";
import { apiPost } from "@/shared/api/client";
import { useRtkQuery } from "@/shared/query/rtk-compat";

export const useGetRelatedAllVideoQuery = (arg: { id: string }) =>
  useRtkQuery<ResRelated, { id: string }>(
    (body) => ["related/allvideo", body],
    (body) => apiPost<ResRelated>("related/allvideo", body as any),
    arg
  );

export const useGetVideoUrlQuery = (arg: { id: string }) =>
  useRtkQuery<ResRelated, { id: string }>(
    (body) => ["video/url", body],
    (body) => apiPost<ResRelated>("video/url", body as any),
    arg
  );

export const useGetVideoDetailQuery = (arg: { id: string }) =>
  useRtkQuery<ResRelated, { id: string }>(
    (body) => ["video/detail", body],
    (body) => apiPost<ResRelated>("video/detail", body as any),
    arg
  );

export const useGetVideoDetailInfoQuery = (arg: { vid: string }) =>
  useRtkQuery<ResRelated, { vid: string }>(
    (body) => ["video/detail/info", body],
    (body) => apiPost<ResRelated>("video/detail/info", body as any),
    arg
  );

export const useGetMVDetailQuery = (arg: { ids: string }) =>
  useRtkQuery<unknown, { ids: string }>(
    (body) => ["mv/detail", body],
    (body) => apiPost<unknown>("mv/detail", body as any),
    arg
  );
