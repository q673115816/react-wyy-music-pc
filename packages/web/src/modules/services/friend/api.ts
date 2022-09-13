import { Tops, Topics, TopicDetails, Events } from "./types";
import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "../base";

export const reducerPath = "friend/api";

export const api = createApi({
  reducerPath,
  baseQuery,
  endpoints: (build) => ({
    getHotTopic: build.query<Topics, { limit: number }>({
      query: (body) => ({
        url: `hot/topic`,
        method: "POST",
        body,
      }),
    }),
    getTopicDetail: build.query<TopicDetails, { actid: string }>({
      query: (body) => ({
        url: `topic/detail`,
        method: "POST",
        body,
      }),
    }),
    getEvent: build.mutation<Events, { lasttime: number }>({
      query: (body) => ({
        url: `event`,
        method: "POST",
        body,
      }),
    }),
    getTopicDetailEventHot: build.query<Events, { actid: number }>({
      query: (body) => ({
        url: `topic/detail/event/hot`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetHotTopicQuery,
  useGetTopicDetailQuery,
  useLazyGetTopicDetailQuery,
  useGetEventMutation,
  useGetTopicDetailEventHotQuery,
} = api;
