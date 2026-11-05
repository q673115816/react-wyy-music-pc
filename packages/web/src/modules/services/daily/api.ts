import { Daily } from "./types";
import { apiPost } from "@/shared/api/client";
import { useQuery } from "@tanstack/react-query";
import { dailyKeys } from "@/shared/query/keys";

export const useGetRecommendSongsQuery = () =>
  useQuery({
    queryKey: dailyKeys.recommendSongs,
    queryFn: () => apiPost<Daily>("recommend/songs"),
  });
