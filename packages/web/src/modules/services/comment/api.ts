import {
  ResCommentVideo,
  ResCommentMV,
  Events,
  reqComment,
  resComment,
  Comments,
} from "./types";
import { baseApi } from "../base";

export const api = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCommentVideo: build.query<ResCommentVideo, { id: string }>({
      query: (body) => ({
        url: `comment/video`,
        method: "POST",
        body,
      }),
    }),
    getCommentMusic: build.query<
      ResCommentVideo,
      { id: number; limit: number; offset: number }
    >({
      query: (body) => ({
        url: `comment/music`,
        method: "POST",
        body,
      }),
    }),
    getCommentMV: build.query<ResCommentMV, { id: string }>({
      query: (body) => ({
        url: `comment/mv`,
        method: "POST",
        body,
      }),
    }),
    getCommentEvent: build.query<Events, { threadId: number }>({
      query: (body) => ({
        url: `comment/event`,
        method: "POST",
        body,
      }),
    }),
    getCommentPlaylist: build.query<Comments, { id: number }>({
      query: (body) => ({
        url: `comment/playlist`,
        method: "POST",
        body,
      }),
      providesTags: (result, error, { id }) => {
        return [{ type: "comment/playlist", id }];
      },
    }),
    getCommentHot: build.query<
      Comments,
      { id: number; type: number; offset: number; limit: number }
    >({
      query: (body) => ({
        url: `comment/hot`,
        method: "POST",
        body,
      }),
    }),
    postComment: build.mutation<resComment, reqComment>({
      query: (body) => ({
        url: `comment`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "comment/playlist", id },
      ],
    }),
    postCommentLike: build.mutation<resComment, reqComment>({
      query: (body) => ({
        url: `comment/like`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetCommentHotQuery,
  useLazyGetCommentHotQuery,
  useGetCommentVideoQuery,
  useGetCommentMusicQuery,
  useGetCommentMVQuery,
  useGetCommentEventQuery,
  useGetCommentPlaylistQuery,
  usePostCommentMutation,
} = api;
