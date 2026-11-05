import { Countries, LoginStatus } from "./types";
import { apiGet, apiPost } from "@/shared/api/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { accountKeys } from "@/shared/query/keys";
import { useLazyQuery } from "@/shared/query/useLazyQuery";
import { queryClient } from "@/shared/query/client";

export const useGetCountriesCodeListQuery = () =>
  useQuery({
    queryKey: accountKeys.countries,
    queryFn: () => apiGet<Countries>("countries/code/list"),
  });

export const useGetLogoutMutation = (options?: {
  onSuccess?: (data: { code: number }, variables: void) => void;
}) =>
  useMutation({
    mutationFn: () => apiGet<{ code: number }>("logout"),
    onSuccess: (data, variables) => {
      options?.onSuccess?.(data, variables);
      queryClient.invalidateQueries();
    },
  });

export const useGetLoginQRCheckMutation = (options?: {
  onSuccess?: (data: { code: number }, variables: { key: number }) => void;
}) =>
  useMutation({
    mutationFn: (body: { key: number }) =>
      apiPost<{ code: number }>("login/qr/check", body as any),
    onSuccess: (data, variables) => {
      options?.onSuccess?.(data, variables);
      queryClient.invalidateQueries();
    },
  });

export const usePostAvatarUploadMutation = (options?: {
  onSuccess?: (
    data: any,
    variables: { imgFile: File; imgSize?: number; imgX?: number; imgY?: number }
  ) => void;
}) =>
  useMutation({
    mutationFn: (body: {
      imgFile: File;
      imgSize?: number;
      imgX?: number;
      imgY?: number;
    }) => apiPost<any>("/avatar/upload", body as any),
    onSuccess: (data, variables) => {
      options?.onSuccess?.(data, variables);
      queryClient.invalidateQueries();
    },
  });

export const useGetLoginStatusQuery = () =>
  useQuery({
    queryKey: accountKeys.loginStatus,
    queryFn: () => apiPost<LoginStatus>("login/status"),
  });

export const useLazyGetRegisterAnonimousQuery = () => {
  const [trigger, state] = useLazyQuery<unknown, null>(
    () => accountKeys.registerAnonymous,
    () => apiGet<unknown>("register/anonimous")
  );
  return [() => trigger(null), state] as const;
};
