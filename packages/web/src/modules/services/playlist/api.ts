import { Playlist, Song, Subscribe, Subscriber } from "./types";
import { apiPost } from "@/shared/api/client";
import {
  useRtkLazyQuery,
  useRtkMutation,
  useRtkQuery,
} from "@/shared/query/rtk-compat";
import { queryClient } from "@/shared/query/client";

export const useGetPlaylistDetailQuery = (arg: {
  id: string;
  limit?: number;
}) =>
  useRtkQuery<Playlist, { id: string; limit?: number }>(
    (body) => ["playlist/detail", body],
    (body) => apiPost<Playlist>("playlist/detail", body as any),
    arg
  );

export const useLazyGetPlaylistDetailQuery = () =>
  useRtkLazyQuery<Playlist, { id: string; limit?: number }>(
    (body) => ["playlist/detail", body],
    (body) => apiPost<Playlist>("playlist/detail", body as any)
  );

export const useGetSongDetailQuery = (arg: { ids: string }) =>
  useRtkQuery<Song, { ids: string }>(
    (body) => ["song/detail", body],
    (body) => apiPost<Song>("song/detail", body as any),
    arg
  );

export const useLazyGetSongDetailQuery = () =>
  useRtkLazyQuery<Song, { ids: string }>(
    (body) => ["song/detail", body],
    (body) => apiPost<Song>("song/detail", body as any)
  );

export const usePostPlaylistSubscribeMutation = (options?: {
  onSuccess?: (data: Subscribe, variables: { id: string; t: number }) => void;
}) =>
  useRtkMutation<Subscribe, { id: string; t: number }>(
    (body) => apiPost<Subscribe>("playlist/subscribe", body as any),
    {
      onSuccess: (data, variables) => {
        options?.onSuccess?.(data, variables);
        queryClient.invalidateQueries();
      },
    }
  );

export const useGetPlaylistSubscriberQuery = (arg: {
  id: string;
  limit: number;
  offset: number;
}) =>
  useRtkQuery<
    Subscriber,
    { id: string; limit: number; offset: number }
  >(
    (body) => ["playlist/subscribers", body],
    (body) => apiPost<Subscriber>("playlist/subscribers", body as any),
    arg
  );
