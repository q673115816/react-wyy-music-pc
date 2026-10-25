import { Searchs, SearchHotDetails, Suggests, Multimatchs } from "./types";
import { apiGet, apiPost } from "@/shared/api/client";
import { useRtkMutation, useRtkQuery } from "@/shared/query/rtk-compat";

interface ReqSearch {
  keywords: string;
  limit: number;
  type: number;
  offset: number;
}

export const useGetSearchQuery = (arg: ReqSearch) =>
  useRtkQuery<Searchs, ReqSearch>(
    (body) => ["search", body],
    (body) => apiPost<Searchs>("search", body as any),
    arg
  );

export const useGetCloudSearchMutation = (options?: {
  onSuccess?: (data: Searchs, variables: ReqSearch) => void;
}) =>
  useRtkMutation<Searchs, ReqSearch>(
    (body) => apiPost<Searchs>("cloudSearch", body as any),
    {
      onSuccess: (data, variables) => {
        options?.onSuccess?.(data, variables);
      },
    }
  );

export const useGetSearchMultimatchQuery = (arg: { keywords: string }) =>
  useRtkQuery<Multimatchs, { keywords: string }>(
    (body) => ["search/multimatch", body],
    (body) => apiPost<Multimatchs>("search/multimatch", body as any),
    arg
  );

export const useGetSearchSuggestQuery = (arg: { keywords: string }) =>
  useRtkQuery<Suggests, { keywords: string }>(
    (body) => ["search/suggest", body],
    (body) => apiPost<Suggests>("search/suggest", body as any),
    arg
  );

export const useGetSearchHotDetailQuery = () =>
  useRtkQuery<SearchHotDetails>(["search/hot/detail"], () =>
    apiGet<SearchHotDetails>("search/hot/detail")
  );
