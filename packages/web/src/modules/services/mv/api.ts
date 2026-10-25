import { MVAll } from "./types";
import { apiPost } from "@/shared/api/client";
import { useRtkLazyQuery, useRtkQuery } from "@/shared/query/rtk-compat";

export const filter = (arr: any[] = []) =>
  arr.map(({ id, playCount, cover, name, artists, briefDesc }: any) => ({
    type: 0,
    id,
    cover,
    briefDesc,
    playCount,
    title: name,
    creator: artists.map(({ id: userId, name: userName }: any) => ({
      userId,
      userName,
    })),
  }));

interface ReqMVAll {
  area?: string;
  type?: string;
  order?: string;
  limit?: number;
  offset?: number;
}

export const useGetMVAllQuery = (arg: ReqMVAll) =>
  useRtkQuery<MVAll, ReqMVAll>(
    (body) => ["mv/all", body],
    (body) => apiPost<MVAll>("mv/all", body as any),
    arg
  );

export const useLazyGetMVAllQuery = () =>
  useRtkLazyQuery<MVAll, ReqMVAll>(
    (body) => ["mv/all", body],
    (body) => apiPost<MVAll>("mv/all", body as any)
  );

export const useGetMVExclusiveRcmdQuery = (arg: { limit: number }) =>
  useRtkQuery<MVAll, { limit: number }>(
    (body) => ["mv/exclusive/rcmd", body],
    (body) => apiPost<MVAll>("mv/exclusive/rcmd", body as any),
    arg
  );

export const useGetMVFirstQuery = (arg: { area: string; limit: number }) =>
  useRtkQuery<MVAll, { area: string; limit: number }>(
    (body) => ["mv/first", body],
    (body) => apiPost<MVAll>("mv/first", body as any),
    arg
  );

export const useGetTopMVQuery = (arg: { area: string; limit: number }) =>
  useRtkQuery<MVAll, { area: string; limit: number }>(
    (body) => ["top/mv", body],
    (body) => apiPost<MVAll>("top/mv", body as any),
    arg
  );
