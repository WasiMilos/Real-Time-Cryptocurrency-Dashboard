
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coingecko.com/api/v3' }),
  endpoints: (builder) => ({
    getCurrentPrice: builder.query({
      query: (cryptoId) => `/simple/price?ids=${cryptoId}&vs_currencies=usd&include_24hr_change=true`,
    }),
    getHistoricalData: builder.query({
      query: (cryptoId) => `/coins/${cryptoId}/market_chart?vs_currency=usd&days=7`,
    }),
    getOverviewData: builder.query({
      query: (cryptoId) => `/coins/${cryptoId}`,
    }),
  }),
});

export const {
  useGetCurrentPriceQuery,
  useGetHistoricalDataQuery,
  useGetOverviewDataQuery,
} = cryptoApi;
