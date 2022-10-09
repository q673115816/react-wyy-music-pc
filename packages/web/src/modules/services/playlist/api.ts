import { Details, Subscribe, Subscriber } from "./types";
import { baseApi } from "../base";

export const api = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPlaylistDetail: build.query<Details, { id: string; limit?: number }>({
      query: (body) => ({
        url: `playlist/detail`,
        method: "POST",
        body,
      }),
    }),
    getSongDetail: build.query<Details, { ids: string }>({
      query: (body) => ({
        url: `song/detail`,
        method: "POST",
        body,
      }),
    }),
    postPlaylistSubscribe: build.mutation<Subscribe, { id: string; t: number }>(
      {
        query: (body) => ({
          url: `playlist/subscribe`,
          method: "POST",
          body,
        }),
      }
    ),
    getPlaylistSubscriber: build.query<
      Subscriber,
      { id: string; limit: number; offset: number }
    >({
      query: (body) => ({
        url: `playlist/subscribers`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetPlaylistDetailQuery,
  useLazyGetPlaylistDetailQuery,
  useGetSongDetailQuery,
  useLazyGetSongDetailQuery,
  usePostPlaylistSubscribeMutation,
  useGetPlaylistSubscriberQuery,
} = api;
