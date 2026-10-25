import {
  Artists,
  Detail,
  Albums,
  TopSongs,
  Desc,
  Req,
  ArtistMV,
  Sub,
} from "./types";
import { apiPost } from "@/shared/api/client";
import { useRtkMutation, useRtkQuery } from "@/shared/query/rtk-compat";
import { queryClient } from "@/shared/query/client";

export const useGetArtistDetailQuery = (arg: Req) =>
  useRtkQuery<Detail, Req>(
    (body) => ["artist/detail", body],
    (body) => apiPost<Detail>("artist/detail", body as any),
    arg
  );

export const useGetSimiArtistQuery = (arg: Req) =>
  useRtkQuery<Artists, Req>(
    (body) => ["simi/artist", body],
    (body) => apiPost<Artists>("simi/artist", body as any),
    arg
  );

export const useGetArtistAlbumQuery = (arg: Req) =>
  useRtkQuery<Albums, Req>(
    (body) => ["artist/album", body],
    (body) => apiPost<Albums>("artist/album", body as any),
    arg
  );

export const useGetArtistTopSongQuery = (arg: Req) =>
  useRtkQuery<TopSongs, Req>(
    (body) => ["artist/top/song", body],
    (body) => apiPost<TopSongs>("artist/top/song", body as any),
    arg
  );

export const useGetArtistDescQuery = (arg: Req) =>
  useRtkQuery<Desc, Req>(
    (body) => ["artist/desc", body],
    (body) => apiPost<Desc>("artist/desc", body as any),
    arg
  );

export const useGetArtistMVMutation = (options?: {
  onSuccess?: (
    data: ArtistMV,
    variables: Req & { limit: number; offset: number }
  ) => void;
}) =>
  useRtkMutation<ArtistMV, Req & { limit: number; offset: number }>(
    (body) => apiPost<ArtistMV>("artist/mv", body as any),
    {
      onSuccess: (data, variables) => {
        options?.onSuccess?.(data, variables);
      },
    }
  );

export const usePostArtistSubMutation = (options?: {
  onSuccess?: (data: Sub, variables: Req & { t?: number }) => void;
}) =>
  useRtkMutation<Sub, Req & { t?: number }>(
    (body) => apiPost<Sub>("artist/sub", body as any),
    {
      onSuccess: (data, variables) => {
        options?.onSuccess?.(data, variables);
        queryClient.invalidateQueries();
      },
    }
  );
