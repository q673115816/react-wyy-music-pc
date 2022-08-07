import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery, { base } from "../base";
import { Alls } from "./types";

export const reducerPath = "video";

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
