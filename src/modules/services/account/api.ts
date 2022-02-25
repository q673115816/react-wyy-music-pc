import { Countries } from "./types";
import { base } from "../base";

export const api = base.injectEndpoints({
  endpoints: (build) => ({
    getCountriesCodeList: build.query<Countries, void>({
      query: () => `countries/code/list`,
    }),
    getLogout: build.mutation<{ code: number }, void>({
      query: () => `logout`,
    }),
  }),
});

export const { useGetCountriesCodeListQuery, useGetLogoutMutation } = api;
