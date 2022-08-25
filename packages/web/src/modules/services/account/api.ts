import { Countries } from "./types";
import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "../base";

export const reducerPath = "account/api";

export const api = createApi({
  reducerPath,
  baseQuery,
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
        headers: { "Content-Type": "multipart/form-data" },
        body,
      }),
    }),
  }),
});

export const {
  useGetCountriesCodeListQuery,
  useGetLogoutMutation,
  useGetLoginQRCheckMutation,
  usePostAvatarUploadMutation,
} = api;
