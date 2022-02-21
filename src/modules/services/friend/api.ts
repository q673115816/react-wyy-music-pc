import { Tops, Topics, TopicDetails } from "./types";
import { base } from "../base";

export const api = base.injectEndpoints({
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
  }),
});

export const { useGetHotTopicQuery, useGetTopicDetailQuery } = api;
