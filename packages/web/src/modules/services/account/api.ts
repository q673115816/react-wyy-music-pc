import { Countries, LoginStatus } from "./types";
import { apiGet, apiPost } from "@/shared/api/client";
import {
  useRtkLazyQuery,
  useRtkMutation,
  useRtkQuery,
} from "@/shared/query/rtk-compat";
import { queryClient } from "@/shared/query/client";

export const useGetCountriesCodeListQuery = () =>
  useRtkQuery<Countries>(["countries/code/list"], () =>
    apiGet<Countries>("countries/code/list")
  );

export const useGetLogoutMutation = (options?: {
  onSuccess?: (data: { code: number }, variables: void) => void;
}) =>
  useRtkMutation<{ code: number }, void>(
    () => apiGet<{ code: number }>("logout"),
    {
      onSuccess: (data, variables) => {
        options?.onSuccess?.(data, variables);
        queryClient.invalidateQueries();
      },
    }
  );

export const useGetLoginQRCheckMutation = (options?: {
  onSuccess?: (data: { code: number }, variables: { key: number }) => void;
}) =>
  useRtkMutation<{ code: number }, { key: number }>(
    (body) => apiPost<{ code: number }>("login/qr/check", body as any),
    {
      onSuccess: (data, variables) => {
        options?.onSuccess?.(data, variables);
        queryClient.invalidateQueries();
      },
    }
  );

export const usePostAvatarUploadMutation = (options?: {
  onSuccess?: (
    data: any,
    variables: { imgFile: File; imgSize?: number; imgX?: number; imgY?: number }
  ) => void;
}) =>
  useRtkMutation<
    any,
    { imgFile: File; imgSize?: number; imgX?: number; imgY?: number }
  >((body) => apiPost<any>("/avatar/upload", body as any), {
    onSuccess: (data, variables) => {
      options?.onSuccess?.(data, variables);
      queryClient.invalidateQueries();
    },
  });

export const useGetLoginStatusQuery = () =>
  useRtkQuery<LoginStatus>(["login/status"], () =>
    apiPost<LoginStatus>("login/status")
  );

export const useLazyGetRegisterAnonimousQuery = () => {
  const [trigger, state] = useRtkLazyQuery<unknown, null>(
    (arg) => ["register/anonimous", arg],
    () => apiGet<unknown>("register/anonimous")
  );
  return [() => trigger(null), state] as const;
};
