import { Artists, Details } from "./types";
import { apiGet, apiPost } from "@/shared/api/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { discoverKeys } from "@/shared/query/keys";

interface ReqArtists {
  type: number;
  area: number;
  initial: number;
  limit: number;
  offset: number;
}

export const useGetArtistListMutation = (options?: {
  onSuccess?: (data: Artists, variables: ReqArtists) => void;
}) =>
  useMutation({
    mutationFn: (body: ReqArtists) =>
      apiPost<Artists>("artist/list", body as any),
    onSuccess: (data, variables) => {
      options?.onSuccess?.(data, variables);
    },
  });

export const useGetTopListDetailQuery = () =>
  useQuery({
    queryKey: discoverKeys.topListDetail,
    queryFn: () => apiGet<Details>("topList/detail"),
  });
