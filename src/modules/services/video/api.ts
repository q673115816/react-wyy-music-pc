import { Alls } from "./types";
import { base } from "../base";

export const api = base.injectEndpoints({
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
