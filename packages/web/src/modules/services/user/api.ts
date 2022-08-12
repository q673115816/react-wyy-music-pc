import {
  Clouds,
  Bindings,
  Followeds,
  Details,
  ReqUpdate,
  Accounts,
  SignInProgress,
  Records,
  Evnets,
  SignInProgressError,
} from "./types";
import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "../base";

export const reducerPath = "user/api";

export const api = createApi({
  reducerPath,
  baseQuery,
  tagTypes: ["user"],
  endpoints: (build) => ({
    getUserCloud: build.query<Clouds, { limit: number }>({
      query: (body) => ({
        url: `user/cloud`,
        method: "POST",
        body,
      }),
    }),
    getDailySignIn: build.mutation<{ code: number; point: number }, void>({
      query: () => ({
        url: `daily_signin`,
        method: "POST",
      }),
      invalidatesTags: [{ type: "user", id: "dailySignIn" }],
    }),
    getSignInProgress: build.query<
      SignInProgress | SignInProgressError,
      { moduleId?: string }
    >({
      query: (body) => ({
        url: `signin/progress`,
        method: "POST",
        body,
      }),
      providesTags: [{ type: "user", id: "dailySignIn" }],
    }),
    getUserDetail: build.query<Details, { uid: string }>({
      query: (body) => ({
        url: `user/detail`,
        method: "POST",
        body,
      }),
    }),
    getUserAccount: build.query<Accounts, void>({
      query: () => ({
        url: `user/account`,
        method: "POST",
      }),
      providesTags: (result, error) => [{ type: "user", id: "account" }],
    }),
    postUserUpdate: build.mutation<{ code: number }, ReqUpdate>({
      query: (body) => ({
        url: `user/update`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error) => [{ type: "user", id: "account" }],
    }),
    getUserEvent: build.mutation<Evnets, { uid: string; lasttime: number }>({
      query: (body) => ({
        url: `user/event`,
        method: "POST",
        body,
      }),
    }),
    getUserSubCount: build.query<Clouds, void>({
      query: (body) => ({
        url: `user/subcount`,
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
    getUserRecord: build.query<Records, { uid: number; type: number }>({
      query: (body) => ({
        url: `user/record`,
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
      providesTags: (result, error, { uid }) => [{ type: "user", id: uid }],
    }),
    postFollow: build.mutation<Followeds, { id: string; t: number }>({
      query: (body) => ({
        url: `follow`,
        method: "POST",
        body,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "user", id }],
    }),
  }),
});

export const {
  useGetDailySignInMutation,
  useGetUserCloudQuery,
  useGetUserDetailQuery,
  useGetUserAccountQuery,
  usePostUserUpdateMutation,
  useGetUserEventMutation,
  useGetSignInProgressQuery,
  useGetUserSubCountQuery,
  useGetUserBindingQuery,
  useGetUserRecordQuery,
  useGetUserPlaylistQuery,
  useGetUserFollowedsQuery,

  usePostFollowMutation,
} = api;
