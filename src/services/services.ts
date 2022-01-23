import {createApi, fetchBaseQuery, retry} from "@reduxjs/toolkit/query/react";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('authentication', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 2 });

export const api =  createApi({
  reducerPath: 'daily',
  baseQuery: baseQueryWithRetry,
  endpoints: (builder) =>  ({
    getRecommendSongs: builder.query({
      query: () => `/recommend/songs`
    })
  })
})

export const {useGetRecommendSongsQuery} = api
