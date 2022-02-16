import { MV } from "./types";
import { base } from "../base";

export const api = base.injectEndpoints({
  endpoints: (build) => ({
    getMVSubList: build.query<MV, void>({
      query: (body) => ({
        url: `mv/sublist`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetMVSubListQuery } = api;
