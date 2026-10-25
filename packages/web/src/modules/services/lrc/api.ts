import { SimiSongs } from "./types";
import { apiPost } from "@/shared/api/client";
import { useRtkQuery } from "@/shared/query/rtk-compat";

export const useGetSimiSongQuery = (arg: { id: number }) =>
  useRtkQuery<SimiSongs, { id: number }>(
    (body) => ["simi/song", body],
    (body) => apiPost<SimiSongs>("simi/song", body as any),
    arg
  );
