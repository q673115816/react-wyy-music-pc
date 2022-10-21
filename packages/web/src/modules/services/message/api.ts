import { Forwards, Private, Comments, Notices, Recentcontact } from "./types";
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
    getMsgPrivate: build.query<Private, { limit?: number }>({
      query: (body) => ({
        url: `msg/private`,
        method: "POST",
        body,
      }),
    }),
    getMsgRecentcontact: build.query<Recentcontact, void>({
      query: (body) => ({
        url: `msg/recentcontact`,
        method: "GET",
        body,
      }),
    }),
    getMsgComments: build.query<Comments, { uid: number }>({
      query: (body) => ({
        url: `msg/comments`,
        method: "POST",
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
  useGetMsgRecentcontactQuery,
  useGetMsgForwardsQuery,
  useGetMsgPrivateQuery,
  useGetMsgCommentsQuery,
  useGetMsgNoticesQuery,
} = api;
