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
import { useMutation, useQuery } from "@tanstack/react-query";
import { artistKeys } from "@/shared/query/keys";
import { queryClient } from "@/shared/query/client";

export const useGetArtistDetailQuery = (arg: Req) =>
  useQuery({
    queryKey: artistKeys.detail(arg),
    queryFn: () => apiPost<Detail>("artist/detail", arg as any),
  });

export const useGetSimiArtistQuery = (arg: Req) =>
  useQuery({
    queryKey: artistKeys.simiArtist(arg),
    queryFn: () => apiPost<Artists>("simi/artist", arg as any),
  });

export const useGetArtistAlbumQuery = (arg: Req) =>
  useQuery({
    queryKey: artistKeys.albums(arg),
    queryFn: () => apiPost<Albums>("artist/album", arg as any),
  });

export const useGetArtistTopSongQuery = (arg: Req) =>
  useQuery({
    queryKey: artistKeys.topSongs(arg),
    queryFn: () => apiPost<TopSongs>("artist/top/song", arg as any),
  });

export const useGetArtistDescQuery = (arg: Req) =>
  useQuery({
    queryKey: artistKeys.desc(arg),
    queryFn: () => apiPost<Desc>("artist/desc", arg as any),
  });

export const useGetArtistMVMutation = (options?: {
  onSuccess?: (
    data: ArtistMV,
    variables: Req & { limit: number; offset: number }
  ) => void;
}) =>
  useMutation({
    mutationFn: (body: Req & { limit: number; offset: number }) =>
      apiPost<ArtistMV>("artist/mv", body as any),
    onSuccess: (data, variables) => {
      options?.onSuccess?.(data, variables);
    },
  });

export const usePostArtistSubMutation = (options?: {
  onSuccess?: (data: Sub, variables: Req & { t?: number }) => void;
}) =>
  useMutation({
    mutationFn: (body: Req & { t?: number }) =>
      apiPost<Sub>("artist/sub", body as any),
    onSuccess: (data, variables) => {
      options?.onSuccess?.(data, variables);
      queryClient.invalidateQueries();
    },
  });
