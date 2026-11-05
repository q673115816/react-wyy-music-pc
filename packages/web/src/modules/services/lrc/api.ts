import { SimiSongs } from "./types";
import { apiPost } from "@/shared/api/client";
import { useQuery } from "@tanstack/react-query";
import { lrcKeys } from "@/shared/query/keys";

export const useGetSimiSongQuery = (arg: { id: number }) =>
  useQuery({
    queryKey: lrcKeys.simiSong(arg.id),
    queryFn: () => apiPost<SimiSongs>("simi/song", arg as any),
  });
