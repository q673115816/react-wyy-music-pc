import { Daily } from "./types";
import { apiPost } from "@/shared/api/client";
import { useRtkQuery } from "@/shared/query/rtk-compat";

export const useGetRecommendSongsQuery = () =>
  useRtkQuery<Daily>(["recommend/songs"], () =>
    apiPost<Daily>("recommend/songs")
  );
