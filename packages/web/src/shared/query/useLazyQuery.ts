import { useCallback, useState } from "react";
import { useQuery, useQueryClient, type QueryKey } from "@tanstack/react-query";

/**
 * 按需查询：使用 TanStack Query 实现，替代 useRtkLazyQuery。
 * trigger 返回 { data }，并保留 isUninitialized 供现有调用点判断。
 */
export function useLazyQuery<T, TArg = void>(
  keyFn: (arg: TArg) => QueryKey,
  queryFn: (arg: TArg) => Promise<T>
) {
  const client = useQueryClient();
  const [arg, setArg] = useState<TArg>();

  const query = useQuery({
    queryKey: arg === undefined ? ["__lazy__"] : keyFn(arg),
    queryFn: () => queryFn(arg as TArg),
    enabled: arg !== undefined,
  });

  const trigger = useCallback(
    async (next: TArg) => {
      setArg(next);
      const data = await client.fetchQuery({
        queryKey: keyFn(next),
        queryFn: () => queryFn(next),
      });
      return { data };
    },
    [client, keyFn, queryFn]
  );

  return [trigger, { ...query, isUninitialized: !query.isFetched }] as const;
}
