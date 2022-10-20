import { Forwards, Private, Comments, Notices } from "./types";
import { baseApi } from "../base";

export const api = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMsgForwards: build.query<Forwards, void>({
      query: (body) => ({
        url: `msg/forwards`,
        method: "GET",
        body,
      }),
    }),
    getMsgPrivate: build.query<Private, void>({
      query: (body) => ({
        url: `msg/private`,
        method: "GET",
        body,
      }),
    }),
    getMsgComments: build.query<Comments, void>({
      query: (body) => ({
        url: `msg/comments`,
        method: "GET",
        body,
      }),
    }),
    getMsgNotices: build.query<Notices, void>({
      query: (body) => ({
        url: `msg/notices`,
        method: "GET",
        body,
      }),
    }),
  }),
});

export const {
  useGetMsgForwardsQuery,
  useGetMsgPrivateQuery,
  useGetMsgCommentsQuery,
  useGetMsgNoticesQuery,
} = api;
