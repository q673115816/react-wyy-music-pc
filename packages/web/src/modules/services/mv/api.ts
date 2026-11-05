import { MVAll } from "./types";
import { apiPost } from "@/shared/api/client";
import { useQuery } from "@tanstack/react-query";
import { useLazyQuery } from "@/shared/query/useLazyQuery";
import { mvKeys } from "@/shared/query/keys";

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
  useQuery({
    queryKey: mvKeys.allList(arg),
    queryFn: () => apiPost<MVAll>("mv/all", arg as any),
  });

export const useLazyGetMVAllQuery = () =>
  useLazyQuery<MVAll, ReqMVAll>(
    (body) => mvKeys.allList(body),
    (body) => apiPost<MVAll>("mv/all", body as any)
  );

export const useGetMVExclusiveRcmdQuery = (arg: { limit: number }) =>
  useQuery({
    queryKey: mvKeys.exclusiveRcmd(arg.limit),
    queryFn: () => apiPost<MVAll>("mv/exclusive/rcmd", arg as any),
  });

export const useGetMVFirstQuery = (arg: { area: string; limit: number }) =>
  useQuery({
    queryKey: mvKeys.first(arg.area, arg.limit),
    queryFn: () => apiPost<MVAll>("mv/first", arg as any),
  });

export const useGetTopMVQuery = (arg: { area: string; limit: number }) =>
  useQuery({
    queryKey: mvKeys.topMV(arg.area, arg.limit),
    queryFn: () => apiPost<MVAll>("top/mv", arg as any),
  });
