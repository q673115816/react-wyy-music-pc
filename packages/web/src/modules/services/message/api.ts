import { Forwards, Private, Comments, Notices, Recentcontact } from "./types";
import { apiPost } from "@/shared/api/client";
import { useQuery } from "@tanstack/react-query";
import { messageKeys } from "@/shared/query/keys";

export const useGetMsgForwardsQuery = () =>
  useQuery({
    queryKey: messageKeys.forwards,
    queryFn: () => apiPost<Forwards>("msg/forwards"),
  });

export const useGetMsgPrivateQuery = (arg: { limit?: number }) =>
  useQuery({
    queryKey: messageKeys.private(arg.limit),
    queryFn: () => apiPost<Private>("msg/private", arg as any),
  });

export const useGetMsgRecentcontactQuery = () =>
  useQuery({
    queryKey: messageKeys.recentContact,
    queryFn: () => apiPost<Recentcontact>("msg/recentcontact"),
  });

export const useGetMsgCommentsQuery = (arg: { uid: number }) =>
  useQuery({
    queryKey: messageKeys.comments(arg.uid),
    queryFn: () => apiPost<Comments>("msg/comments", arg as any),
  });

export const useGetMsgNoticesQuery = () =>
  useQuery({
    queryKey: messageKeys.notices,
    queryFn: () => apiPost<Notices>("msg/notices"),
  });
