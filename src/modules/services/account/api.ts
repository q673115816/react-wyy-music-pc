import { Countries } from "./types";
import { base } from "../base";

export const api = base.injectEndpoints({
  endpoints: (build) => ({
    getCountriesCodeList: build.query<Countries, void>({
      query: () => `countries/code/list`,
    }),
  }),
});

export const { useGetCountriesCodeListQuery } = api;
