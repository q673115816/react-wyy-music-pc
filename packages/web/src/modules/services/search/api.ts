import { Searchs, SearchHotDetails, Suggests, Multimatchs } from "./types";
import { apiGet, apiPost } from "@/shared/api/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { searchKeys } from "@/shared/query/keys";

interface ReqSearch {
  keywords: string;
  limit: number;
  type: number;
  offset: number;
}

export const useGetSearchQuery = (arg: ReqSearch) =>
  useQuery({
    queryKey: searchKeys.search(arg),
    queryFn: () => apiPost<Searchs>("search", arg as any),
  });

export const useGetCloudSearchMutation = (options?: {
  onSuccess?: (data: Searchs, variables: ReqSearch) => void;
}) =>
  useMutation({
    mutationFn: (body: ReqSearch) =>
      apiPost<Searchs>("cloudSearch", body as any),
    onSuccess: (data, variables) => {
      options?.onSuccess?.(data, variables);
    },
  });

export const useGetSearchMultimatchQuery = (arg: { keywords: string }) =>
  useQuery({
    queryKey: searchKeys.multimatch(arg.keywords),
    queryFn: () => apiPost<Multimatchs>("search/multimatch", arg as any),
  });

export const useGetSearchSuggestQuery = (arg: { keywords: string }) =>
  useQuery({
    queryKey: searchKeys.suggest(arg.keywords),
    queryFn: () => apiPost<Suggests>("search/suggest", arg as any),
  });

export const useGetSearchHotDetailQuery = () =>
  useQuery({
    queryKey: searchKeys.hotDetail,
    queryFn: () => apiGet<SearchHotDetails>("search/hot/detail"),
  });
