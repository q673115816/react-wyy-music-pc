import { Clouds, Bindings, Followeds } from "./types";
import { base } from "../base";

export const api = base.injectEndpoints({
  endpoints: (build) => ({
    getUserCloud: build.query<Clouds, { limit: number }>({
      query: (body) => ({
        url: `user/cloud`,
        method: "POST",
        body,
      }),
    }),
    getUserDetail: build.query<Clouds, { uid: string }>({
      query: (body) => ({
        url: `user/detail`,
        method: "POST",
        body,
      }),
    }),
    getUserPlaylist: build.query<Clouds, { uid: string }>({
      query: (body) => ({
        url: `user/playlist`,
        method: "POST",
        body,
      }),
    }),
    getUserBinding: build.query<Bindings, { uid: string }>({
      query: (body) => ({
        url: `user/binding`,
        method: "POST",
        body,
      }),
    }),
    getUserFolloweds: build.query<Followeds, { uid: string }>({
      query: (body) => ({
        url: `user/followeds`,
        method: "POST",
        body,
      }),
      providesTags: (result, error, { uid }) => [
        { type: "user/followeds", id: uid },
      ],
    }),
    postFollow: build.mutation<Followeds, { id: string; t: number }>({
      query: (body) => ({
        url: `follow`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "user/followeds", id },
      ],
    }),
  }),
});

export const {
  useGetUserCloudQuery,
  useGetUserDetailQuery,
  useGetUserBindingQuery,
  useGetUserPlaylistQuery,
  useGetUserFollowedsQuery,

  usePostFollowMutation,
} = api;
