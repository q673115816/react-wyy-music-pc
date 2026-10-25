import { Forwards, Private, Comments, Notices, Recentcontact } from "./types";
import { apiPost } from "@/shared/api/client";
import { useRtkQuery } from "@/shared/query/rtk-compat";

export const useGetMsgForwardsQuery = () =>
  useRtkQuery<Forwards>(["msg/forwards"], () =>
    apiPost<Forwards>("msg/forwards")
  );

export const useGetMsgPrivateQuery = (arg: { limit?: number }) =>
  useRtkQuery<Private, { limit?: number }>(
    (body) => ["msg/private", body],
    (body) => apiPost<Private>("msg/private", body as any),
    arg
  );

export const useGetMsgRecentcontactQuery = () =>
  useRtkQuery<Recentcontact>(["msg/recentcontact"], () =>
    apiPost<Recentcontact>("msg/recentcontact")
  );

export const useGetMsgCommentsQuery = (arg: { uid: number }) =>
  useRtkQuery<Comments, { uid: number }>(
    (body) => ["msg/comments", body],
    (body) => apiPost<Comments>("msg/comments", body as any),
    arg
  );

export const useGetMsgNoticesQuery = () =>
  useRtkQuery<Notices>(["msg/notices"], () => apiPost<Notices>("msg/notices"));
