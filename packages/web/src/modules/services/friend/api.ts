import { Tops, Topics, TopicDetails, Events } from "./types";
import { baseApi } from "../base";

export const api = baseApi.injectEndpoints({
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
    getEvent: build.query<Events, { lasttime: number }>({
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
  useGetEventQuery,
  useLazyGetEventQuery,
  useGetTopicDetailEventHotQuery,
} = api;
