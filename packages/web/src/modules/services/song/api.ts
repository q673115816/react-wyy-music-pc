import { Songs, Lyrics } from "./types";
import { apiGet, apiPost } from "@/shared/api/client";
import {
  useRtkLazyQuery,
  useRtkMutation,
  useRtkQuery,
} from "@/shared/query/rtk-compat";

export const useGetSongUrlMutation = (options?: {
  onSuccess?: (data: Songs, variables: { id: number }) => void;
}) =>
  useRtkMutation<Songs, { id: number }>(
    (body) => apiPost<Songs>("song/url", body as any),
    {
      onSuccess: (data, variables) => {
        options?.onSuccess?.(data, variables);
      },
    }
  );

export const useGetSongDetailQuery = (arg: { ids: string }) =>
  useRtkQuery<Songs, { ids: string }>(
    (body) => ["song/detail", body],
    (body) => apiPost<Songs>("song/detail", body as any),
    arg
  );

export const useLazyGetSongDetailQuery = () =>
  useRtkLazyQuery<Songs, { ids: string }>(
    (body) => ["song/detail", body],
    (body) => apiPost<Songs>("song/detail", body as any)
  );

export const useGetLyricMutation = (options?: {
  onSuccess?: (data: Lyrics, variables: { id: number }) => void;
}) =>
  useRtkMutation<Lyrics, { id: number }>(
    (body) => apiPost<Lyrics>("lyric", body as any),
    {
      onSuccess: (data, variables) => {
        options?.onSuccess?.(data, variables);
      },
    }
  );

export const useGetPersonalFMMutation = (options?: {
  onSuccess?: (data: Lyrics, variables: void) => void;
}) =>
  useRtkMutation<Lyrics, void>(() => apiGet<Lyrics>("personal_fm"), {
    onSuccess: (data, variables) => {
      options?.onSuccess?.(data, variables);
    },
  });
