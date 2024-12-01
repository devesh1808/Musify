import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-api6.p.rapidapi.com",
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "f30b13464cmsh7749cee0c64078bp1dfa09jsnb7c7114f1c49"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => "/shazam/top_tracks_country?country_code=UZ&limit=10",
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
