import { Playlist, Song, Subscribe, Subscriber } from "./types";
import { apiPost } from "@/shared/api/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { playlistKeys } from "@/shared/query/keys";
import { useLazyQuery } from "@/shared/query/useLazyQuery";
import { queryClient } from "@/shared/query/client";

export const useGetPlaylistDetailQuery = (arg: {
  id: string;
  limit?: number;
}) =>
  useQuery({
    queryKey: playlistKeys.detail(arg),
    queryFn: () => apiPost<Playlist>("playlist/detail", arg as any),
  });

export const useLazyGetPlaylistDetailQuery = () =>
  useLazyQuery<Playlist, { id: string; limit?: number }>(
    (body) => playlistKeys.detail(body),
    (body) => apiPost<Playlist>("playlist/detail", body as any)
  );

export const useGetSongDetailQuery = (arg: { ids: string }) =>
  useQuery({
    queryKey: playlistKeys.songs(arg.ids),
    queryFn: () => apiPost<Song>("song/detail", arg as any),
  });

export const useLazyGetSongDetailQuery = () =>
  useLazyQuery<Song, { ids: string }>(
    (body) => playlistKeys.songs(body.ids),
    (body) => apiPost<Song>("song/detail", body as any)
  );

export const usePostPlaylistSubscribeMutation = (options?: {
  onSuccess?: (data: Subscribe, variables: { id: string; t: number }) => void;
}) =>
  useMutation({
    mutationFn: (body: { id: string; t: number }) =>
      apiPost<Subscribe>("playlist/subscribe", body as any),
    onSuccess: (data, variables) => {
      options?.onSuccess?.(data, variables);
      queryClient.invalidateQueries();
    },
  });

export const useGetPlaylistSubscriberQuery = (arg: {
  id: string;
  limit: number;
  offset: number;
}) =>
  useQuery({
    queryKey: playlistKeys.subscribers(arg),
    queryFn: () => apiPost<Subscriber>("playlist/subscribers", arg as any),
  });
