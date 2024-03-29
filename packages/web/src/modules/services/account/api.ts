import { Countries, LoginStatus } from "./types";
import { baseApi } from "../base";

export const api = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCountriesCodeList: build.query<Countries, void>({
      query: () => `countries/code/list`,
    }),
    getLogout: build.mutation<{ code: number }, void>({
      query: () => `logout`,
    }),
    getLoginQRKey: build.mutation<{ code: number }, void>({
      query: () => `login/qr/key`,
    }),
    getLoginQRCheck: build.mutation<{ code: number }, { key: number }>({
      query: (body) => ({
        url: `login/qr/check`,
        method: "POST",
        body,
      }),
    }),
    postAvatarUpload: build.mutation<
      { imgFile: File; imgSize?: number; imgX?: number; imgY?: number },
      { key: number }
    >({
      query: (body) => ({
        url: `/avatar/upload`,
        method: "POST",
        // headers: { "Content-Type": "multipart/form-data" },
        body,
      }),
    }),
    getRegisterAnonimous: build.query({
      query: () => "register/anonimous",
    }),
    getLoginStatus: build.query<LoginStatus, void>({
      query: () => ({
        url: "login/status",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetCountriesCodeListQuery,
  useGetLogoutMutation,
  useGetLoginQRCheckMutation,
  usePostAvatarUploadMutation,

  useGetLoginStatusQuery,
  useLazyGetRegisterAnonimousQuery,
} = api;
