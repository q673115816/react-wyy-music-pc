import {
  ResCommentVideo,
  ResCommentMV,
  Events,
  reqComment,
  resComment,
  Comments,
} from "./types";
import { apiPost } from "@/shared/api/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useLazyQuery } from "@/shared/query/useLazyQuery";
import { commentKeys } from "@/shared/query/keys";
import { queryClient } from "@/shared/query/client";

export const useGetCommentVideoQuery = (arg: { id: string }) =>
  useQuery({
    queryKey: commentKeys.video(arg.id),
    queryFn: () => apiPost<ResCommentVideo>("comment/video", arg as any),
  });

export const useGetCommentMusicQuery = (arg: {
  id: number;
  limit: number;
  offset: number;
}) =>
  useQuery({
    queryKey: commentKeys.music(arg),
    queryFn: () => apiPost<ResCommentVideo>("comment/music", arg as any),
  });

export const useGetCommentMVQuery = (arg: { id: string }) =>
  useQuery({
    queryKey: commentKeys.mv(arg.id),
    queryFn: () => apiPost<ResCommentMV>("comment/mv", arg as any),
  });

export const useGetCommentEventQuery = (arg: { threadId: number }) =>
  useQuery({
    queryKey: commentKeys.event(arg.threadId),
    queryFn: () => apiPost<Events>("comment/event", arg as any),
  });

export const useGetCommentPlaylistQuery = (arg: { id: number }) =>
  useQuery({
    queryKey: commentKeys.playlist(arg.id),
    queryFn: () => apiPost<Comments>("comment/playlist", arg as any),
  });

export const useGetCommentHotQuery = (arg: {
  id: number;
  type: number;
  offset: number;
  limit: number;
}) =>
  useQuery({
    queryKey: commentKeys.hot(arg),
    queryFn: () => apiPost<Comments>("comment/hot", arg as any),
  });

export const useLazyGetCommentHotQuery = () =>
  useLazyQuery<
    Comments,
    { id: number; type: number; offset: number; limit: number }
  >(
    (body) => commentKeys.hot(body),
    (body) => apiPost<Comments>("comment/hot", body as any)
  );

export const usePostCommentMutation = (options?: {
  onSuccess?: (data: resComment, variables: reqComment) => void;
}) =>
  useMutation({
    mutationFn: (body: reqComment) => apiPost<resComment>("comment", body as any),
    onSuccess: async (data, variables) => {
      options?.onSuccess?.(data, variables);
      await queryClient.invalidateQueries();
    },
  });
