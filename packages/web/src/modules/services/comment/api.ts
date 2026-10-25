import {
  ResCommentVideo,
  ResCommentMV,
  Events,
  reqComment,
  resComment,
  Comments,
} from "./types";
import { apiPost } from "@/shared/api/client";
import {
  useRtkLazyQuery,
  useRtkMutation,
  useRtkQuery,
} from "@/shared/query/rtk-compat";
import { queryClient } from "@/shared/query/client";

export const useGetCommentVideoQuery = (arg: { id: string }) =>
  useRtkQuery<ResCommentVideo, { id: string }>(
    (body) => ["comment/video", body],
    (body) => apiPost<ResCommentVideo>("comment/video", body as any),
    arg
  );

export const useGetCommentMusicQuery = (arg: {
  id: number;
  limit: number;
  offset: number;
}) =>
  useRtkQuery<
    ResCommentVideo,
    { id: number; limit: number; offset: number }
  >(
    (body) => ["comment/music", body],
    (body) => apiPost<ResCommentVideo>("comment/music", body as any),
    arg
  );

export const useGetCommentMVQuery = (arg: { id: string }) =>
  useRtkQuery<ResCommentMV, { id: string }>(
    (body) => ["comment/mv", body],
    (body) => apiPost<ResCommentMV>("comment/mv", body as any),
    arg
  );

export const useGetCommentEventQuery = (arg: { threadId: number }) =>
  useRtkQuery<Events, { threadId: number }>(
    (body) => ["comment/event", body],
    (body) => apiPost<Events>("comment/event", body as any),
    arg
  );

export const useGetCommentPlaylistQuery = (arg: { id: number }) =>
  useRtkQuery<Comments, { id: number }>(
    (body) => ["comment/playlist", body],
    (body) => apiPost<Comments>("comment/playlist", body as any),
    arg
  );

export const useGetCommentHotQuery = (arg: {
  id: number;
  type: number;
  offset: number;
  limit: number;
}) =>
  useRtkQuery<
    Comments,
    { id: number; type: number; offset: number; limit: number }
  >(
    (body) => ["comment/hot", body],
    (body) => apiPost<Comments>("comment/hot", body as any),
    arg
  );

export const useLazyGetCommentHotQuery = () =>
  useRtkLazyQuery<
    Comments,
    { id: number; type: number; offset: number; limit: number }
  >(
    (body) => ["comment/hot", body],
    (body) => apiPost<Comments>("comment/hot", body as any)
  );

export const usePostCommentMutation = (options?: {
  onSuccess?: (data: resComment, variables: reqComment) => void;
}) =>
  useRtkMutation<resComment, reqComment>(
    (body) => apiPost<resComment>("comment", body as any),
    {
      onSuccess: (data, variables) => {
        options?.onSuccess?.(data, variables);
        queryClient.invalidateQueries();
      },
    }
  );
