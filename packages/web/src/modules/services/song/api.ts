import { Songs, Lyrics } from "./types";
import { apiGet, apiPost } from "@/shared/api/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { songKeys } from "@/shared/query/keys";
import { useLazyQuery } from "@/shared/query/useLazyQuery";

export const useGetSongUrlMutation = (options?: {
  onSuccess?: (data: Songs, variables: { id: number }) => void;
}) =>
  useMutation({
    mutationFn: (body: { id: number }) =>
      apiPost<Songs>("song/url", body as any),
    onSuccess: (data, variables) => {
      options?.onSuccess?.(data, variables);
    },
  });

export const useGetSongDetailQuery = (arg: { ids: string }) =>
  useQuery({
    queryKey: songKeys.detail(arg.ids),
    queryFn: () => apiPost<Songs>("song/detail", arg as any),
  });

export const useLazyGetSongDetailQuery = () =>
  useLazyQuery<Songs, { ids: string }>(
    (body) => songKeys.detail(body.ids),
    (body) => apiPost<Songs>("song/detail", body as any)
  );

export const useGetLyricMutation = (options?: {
  onSuccess?: (data: Lyrics, variables: { id: number }) => void;
}) =>
  useMutation({
    mutationFn: (body: { id: number }) =>
      apiPost<Lyrics>("lyric", body as any),
    onSuccess: (data, variables) => {
      options?.onSuccess?.(data, variables);
    },
  });

export const useGetPersonalFMMutation = (options?: {
  onSuccess?: (data: Lyrics, variables: void) => void;
}) =>
  useMutation({
    mutationFn: () => apiGet<Lyrics>("personal_fm"),
    onSuccess: (data, variables) => {
      options?.onSuccess?.(data, variables);
    },
  });
