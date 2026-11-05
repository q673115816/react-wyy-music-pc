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
import { apiPost } from "@/shared/api/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { userKeys } from "@/shared/query/keys";
import { useLazyQuery } from "@/shared/query/useLazyQuery";
import { queryClient } from "@/shared/query/client";

export const useGetUserCloudQuery = (arg: { limit: number }) =>
  useQuery({
    queryKey: userKeys.cloud(arg),
    queryFn: () => apiPost<Clouds>("user/cloud", arg as any),
  });

export const useGetDailySignInMutation = (options?: {
  onSuccess?: (
    data: { code: number; point: number },
    variables: void
  ) => void;
}) =>
  useMutation({
    mutationFn: () => apiPost<{ code: number; point: number }>("daily_signin"),
    onSuccess: (data, variables) => {
      options?.onSuccess?.(data, variables);
      queryClient.invalidateQueries();
    },
  });

export const useGetSignInProgressQuery = (arg: { moduleId?: string }) =>
  useQuery({
    queryKey: userKeys.signInProgress(arg),
    queryFn: () =>
      apiPost<SignInProgress | SignInProgressError>(
        "signin/progress",
        arg as any
      ),
  });

export const useGetUserDetailQuery = (arg: { uid: string }) =>
  useQuery({
    queryKey: userKeys.userDetail(arg.uid),
    queryFn: () => apiPost<Details>("user/detail", arg as any),
  });

export const useGetUserAccountQuery = () =>
  useQuery({
    queryKey: userKeys.userAccount,
    queryFn: () => apiPost<Accounts>("user/account"),
  });

export const usePostUserUpdateMutation = (options?: {
  onSuccess?: (data: { code: number }, variables: ReqUpdate) => void;
}) =>
  useMutation({
    mutationFn: (body: ReqUpdate) =>
      apiPost<{ code: number }>("user/update", body as any),
    onSuccess: (data, variables) => {
      options?.onSuccess?.(data, variables);
      queryClient.invalidateQueries();
    },
  });

export const useLazyGetUserEventQuery = () =>
  useLazyQuery<Evnets, { uid: string; lasttime: number }>(
    (body) => userKeys.userEvent(body.uid, body.lasttime),
    (body) => apiPost<Evnets>("user/event", body as any)
  );

export const useGetUserSubCountQuery = () =>
  useQuery({
    queryKey: userKeys.subcount,
    queryFn: () => apiPost<Clouds>("user/subcount"),
  });

export const useGetUserPlaylistQuery = (arg: { uid: string }) =>
  useQuery({
    queryKey: userKeys.userPlaylist(arg.uid),
    queryFn: () => apiPost<Clouds>("user/playlist", arg as any),
  });

export const useGetUserBindingQuery = (arg: { uid: string }) =>
  useQuery({
    queryKey: userKeys.binding(arg.uid),
    queryFn: () => apiPost<Bindings>("user/binding", arg as any),
  });

export const useGetUserRecordQuery = (arg: { uid: number; type: number }) =>
  useQuery({
    queryKey: userKeys.record(arg.uid, arg.type),
    queryFn: () => apiPost<Records>("user/record", arg as any),
  });

export const useGetUserFollowedsQuery = (arg: { uid: string }) =>
  useQuery({
    queryKey: userKeys.followeds(arg.uid),
    queryFn: () => apiPost<Followeds>("user/followeds", arg as any),
  });

export const usePostFollowMutation = (options?: {
  onSuccess?: (data: Followeds, variables: { id: number; t: number }) => void;
}) =>
  useMutation({
    mutationFn: (body: { id: number; t: number }) =>
      apiPost<Followeds>("follow", body as any),
    onSuccess: (data, variables) => {
      options?.onSuccess?.(data, variables);
      queryClient.invalidateQueries();
    },
  });
