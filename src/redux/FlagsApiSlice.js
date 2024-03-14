import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const flagsApiSlice = createApi({
  reducerPath: 'flagsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1' }),
  endpoints: (builder) => ({
    getAllFlags: builder.query({
      query: () => '/all',
    }),
    getDetails: builder.query({
      query: (name) => `/name/${name}`,
    }),
    getRegion: builder.query({
      query: (region) => `/region/${region}`,
    }),
  }),
});

export const { useGetAllFlagsQuery, useGetDetailsQuery, useGetRegionQuery } = flagsApiSlice;
