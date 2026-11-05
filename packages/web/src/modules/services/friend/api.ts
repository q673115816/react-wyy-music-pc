import { Tops, Topics, TopicDetails, Events } from "./types";
import { apiPost } from "@/shared/api/client";
import { useQuery } from "@tanstack/react-query";
import { useLazyQuery } from "@/shared/query/useLazyQuery";
import { friendKeys } from "@/shared/query/keys";

export const useGetHotTopicQuery = (arg: { limit: number }) =>
  useQuery({
    queryKey: friendKeys.hotTopic(arg.limit),
    queryFn: () => apiPost<Topics>("hot/topic", arg as any),
  });

export const useGetTopicDetailQuery = (arg: { actid: string }) =>
  useQuery({
    queryKey: friendKeys.topicDetail(arg.actid),
    queryFn: () => apiPost<TopicDetails>("topic/detail", arg as any),
  });

export const useLazyGetTopicDetailQuery = () =>
  useLazyQuery<TopicDetails, { actid: string }>(
    (body) => friendKeys.topicDetail(body.actid),
    (body) => apiPost<TopicDetails>("topic/detail", body as any)
  );

export const useGetEventQuery = (arg: { lasttime: number }) =>
  useQuery({
    queryKey: friendKeys.event(arg.lasttime),
    queryFn: () => apiPost<Events>("event", arg as any),
  });

export const useLazyGetEventQuery = () =>
  useLazyQuery<Events, { lasttime: number }>(
    (body) => friendKeys.event(body.lasttime),
    (body) => apiPost<Events>("event", body as any)
  );

export const useGetTopicDetailEventHotQuery = (arg: { actid: number }) =>
  useQuery({
    queryKey: friendKeys.userEvent(arg.actid),
    queryFn: () => apiPost<Events>("topic/detail/event/hot", arg as any),
  });
