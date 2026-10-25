import { Tops, Topics, TopicDetails, Events } from "./types";
import { apiPost } from "@/shared/api/client";
import { useRtkLazyQuery, useRtkQuery } from "@/shared/query/rtk-compat";

export const useGetHotTopicQuery = (arg: { limit: number }) =>
  useRtkQuery<Topics, { limit: number }>(
    (body) => ["hot/topic", body],
    (body) => apiPost<Topics>("hot/topic", body as any),
    arg
  );

export const useGetTopicDetailQuery = (arg: { actid: string }) =>
  useRtkQuery<TopicDetails, { actid: string }>(
    (body) => ["topic/detail", body],
    (body) => apiPost<TopicDetails>("topic/detail", body as any),
    arg
  );

export const useLazyGetTopicDetailQuery = () =>
  useRtkLazyQuery<TopicDetails, { actid: string }>(
    (body) => ["topic/detail", body],
    (body) => apiPost<TopicDetails>("topic/detail", body as any)
  );

export const useGetEventQuery = (arg: { lasttime: number }) =>
  useRtkQuery<Events, { lasttime: number }>(
    (body) => ["event", body],
    (body) => apiPost<Events>("event", body as any),
    arg
  );

export const useLazyGetEventQuery = () =>
  useRtkLazyQuery<Events, { lasttime: number }>(
    (body) => ["event", body],
    (body) => apiPost<Events>("event", body as any)
  );

export const useGetTopicDetailEventHotQuery = (arg: { actid: number }) =>
  useRtkQuery<Events, { actid: number }>(
    (body) => ["topic/detail/event/hot", body],
    (body) => apiPost<Events>("topic/detail/event/hot", body as any),
    arg
  );
