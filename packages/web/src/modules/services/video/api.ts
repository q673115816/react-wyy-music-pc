import { Alls } from "./types";
import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "../base";

export const reducerPath = "video/api";

export const api = createApi({
  reducerPath,
  baseQuery,
  endpoints: (build) => ({
    getMVAll: build.mutation<Alls, void>({
      query: (body) => ({
        url: `mv/all`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetMVAllMutation } = api;
