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
import {
  useRtkLazyQuery,
  useRtkMutation,
  useRtkQuery,
} from "@/shared/query/rtk-compat";
import { queryClient } from "@/shared/query/client";

export const useGetUserCloudQuery = (arg: { limit: number }) =>
  useRtkQuery<Clouds, { limit: number }>(
    (body) => ["user/cloud", body],
    (body) => apiPost<Clouds>("user/cloud", body as any),
    arg
  );

export const useGetDailySignInMutation = (options?: {
  onSuccess?: (
    data: { code: number; point: number },
    variables: void
  ) => void;
}) =>
  useRtkMutation<{ code: number; point: number }, void>(
    () => apiPost<{ code: number; point: number }>("daily_signin"),
    {
      onSuccess: (data, variables) => {
        options?.onSuccess?.(data, variables);
        queryClient.invalidateQueries();
      },
    }
  );

export const useGetSignInProgressQuery = (arg: { moduleId?: string }) =>
  useRtkQuery<SignInProgress | SignInProgressError, { moduleId?: string }>(
    (body) => ["signin/progress", body],
    (body) => apiPost<SignInProgress | SignInProgressError>("signin/progress", body as any),
    arg
  );

export const useGetUserDetailQuery = (arg: { uid: string }) =>
  useRtkQuery<Details, { uid: string }>(
    (body) => ["user/detail", body],
    (body) => apiPost<Details>("user/detail", body as any),
    arg
  );

export const useGetUserAccountQuery = () =>
  useRtkQuery<Accounts>(["user/account"], () =>
    apiPost<Accounts>("user/account")
  );

export const usePostUserUpdateMutation = (options?: {
  onSuccess?: (data: { code: number }, variables: ReqUpdate) => void;
}) =>
  useRtkMutation<{ code: number }, ReqUpdate>(
    (body) => apiPost<{ code: number }>("user/update", body as any),
    {
      onSuccess: (data, variables) => {
        options?.onSuccess?.(data, variables);
        queryClient.invalidateQueries();
      },
    }
  );

export const useLazyGetUserEventQuery = () =>
  useRtkLazyQuery<Evnets, { uid: string; lasttime: number }>(
    (body) => ["user/event", body],
    (body) => apiPost<Evnets>("user/event", body as any)
  );

export const useGetUserSubCountQuery = () =>
  useRtkQuery<Clouds>(["user/subcount"], () =>
    apiPost<Clouds>("user/subcount")
  );

export const useGetUserPlaylistQuery = (arg: { uid: string }) =>
  useRtkQuery<Clouds, { uid: string }>(
    (body) => ["user/playlist", body],
    (body) => apiPost<Clouds>("user/playlist", body as any),
    arg
  );

export const useGetUserBindingQuery = (arg: { uid: string }) =>
  useRtkQuery<Bindings, { uid: string }>(
    (body) => ["user/binding", body],
    (body) => apiPost<Bindings>("user/binding", body as any),
    arg
  );

export const useGetUserRecordQuery = (arg: { uid: number; type: number }) =>
  useRtkQuery<Records, { uid: number; type: number }>(
    (body) => ["user/record", body],
    (body) => apiPost<Records>("user/record", body as any),
    arg
  );

export const useGetUserFollowedsQuery = (arg: { uid: string }) =>
  useRtkQuery<Followeds, { uid: string }>(
    (body) => ["user/followeds", body],
    (body) => apiPost<Followeds>("user/followeds", body as any),
    arg
  );

export const usePostFollowMutation = (options?: {
  onSuccess?: (data: Followeds, variables: { id: number; t: number }) => void;
}) =>
  useRtkMutation<Followeds, { id: number; t: number }>(
    (body) => apiPost<Followeds>("follow", body as any),
    {
      onSuccess: (data, variables) => {
        options?.onSuccess?.(data, variables);
        queryClient.invalidateQueries();
      },
    }
  );
