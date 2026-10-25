import { Artists, Details } from "./types";
import { apiGet, apiPost } from "@/shared/api/client";
import { useRtkMutation, useRtkQuery } from "@/shared/query/rtk-compat";

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
  useRtkMutation<Artists, ReqArtists>(
    (body) => apiPost<Artists>("artist/list", body as any),
    {
      onSuccess: (data, variables) => {
        options?.onSuccess?.(data, variables);
      },
    }
  );

export const useGetTopListDetailQuery = () =>
  useRtkQuery<Details>(["topList/detail"], () =>
    apiGet<Details>("topList/detail")
  );
