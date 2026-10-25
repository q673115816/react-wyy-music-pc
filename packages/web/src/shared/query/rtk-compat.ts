import { useCallback, useState } from "react";
import {
  useMutation,
  useQuery,
  useQueryClient,
  type QueryKey,
} from "@tanstack/react-query";

/**
 * 迁移期兼容层：保留 RTK Query 的返回形状（{ data, isLoading, ... } / [trigger, state]），
 * 底层使用 TanStack Query。服务端状态迁移完成后可逐步替换为原生 useQuery / useMutation。
 */

export interface RtkQueryResult<T> {
  data: T | undefined;
  isLoading: boolean;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: unknown;
  isUninitialized: boolean;
  refetch: () => Promise<unknown>;
}

const toResult = <T,>(query: {
  data: T | undefined;
  isPending: boolean;
  isFetching: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: unknown;
  fetchStatus: string;
  refetch: () => Promise<unknown>;
}): RtkQueryResult<T> => ({
  data: query.data,
  isLoading: query.isPending && query.fetchStatus !== "idle",
  isFetching: query.isFetching,
  isSuccess: query.isSuccess,
  isError: query.isError,
  error: query.error,
  isUninitialized: query.isPending && query.fetchStatus === "idle",
  refetch: query.refetch,
});

export function useRtkQuery<T>(
  queryKey: QueryKey,
  queryFn: () => Promise<T>
): RtkQueryResult<T>;
export function useRtkQuery<T, TArg>(
  queryKey: (arg: TArg) => QueryKey,
  queryFn: (arg: TArg) => Promise<T>,
  arg: TArg
): RtkQueryResult<T>;
export function useRtkQuery<T, TArg = void>(
  queryKey: QueryKey | ((arg: TArg) => QueryKey),
  queryFn: ((arg: TArg) => Promise<T>) | (() => Promise<T>),
  arg?: TArg
): RtkQueryResult<T> {
  const key = typeof queryKey === "function" ? queryKey(arg as TArg) : queryKey;
  const query = useQuery({
    queryKey: key,
    queryFn: () => (queryFn as (arg: TArg) => Promise<T>)(arg as TArg),
  });
  return toResult<T>(query);
}

export function useRtkLazyQuery<T, TArg = void>(
  queryKey: (arg: TArg) => QueryKey,
  queryFn: (arg: TArg) => Promise<T>
) {
  const client = useQueryClient();
  const [arg, setArg] = useState<TArg>();

  const query = useQuery({
    queryKey: arg === undefined ? ["__lazy_pending__"] : queryKey(arg),
    queryFn: () => queryFn(arg as TArg),
    enabled: arg !== undefined,
  });

  const trigger = useCallback(
    async (next: TArg) => {
      setArg(next);
      const data = await client.fetchQuery({
        queryKey: queryKey(next),
        queryFn: () => queryFn(next),
      });
      return { data };
    },
    [client, queryKey, queryFn]
  );

  return [trigger, toResult<T>(query)] as const;
}

export function useRtkMutation<TData, TVariables = void>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: {
    onSuccess?: (data: TData, variables: TVariables) => void;
    invalidate?: QueryKey | QueryKey[];
  }
) {
  const client = useQueryClient();
  const mutation = useMutation({
    mutationFn,
    onSuccess: async (data, variables) => {
      options?.onSuccess?.(data, variables);
      if (options?.invalidate) {
        const keys = Array.isArray(options.invalidate[0])
          ? (options.invalidate as QueryKey[])
          : [options.invalidate as QueryKey];
        await Promise.all(
          keys.map((key) => client.invalidateQueries({ queryKey: key }))
        );
      }
    },
  });

  const trigger = useCallback(
    async (variables: TVariables) => {
      const data = await mutation.mutateAsync(variables);
      return { data };
    },
    [mutation.mutateAsync]
  );

  return [
    trigger,
    {
      data: mutation.data,
      isLoading: mutation.isPending,
      isSuccess: mutation.isSuccess,
      isError: mutation.isError,
      error: mutation.error,
    },
  ] as const;
}
