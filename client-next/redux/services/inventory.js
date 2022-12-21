// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const inventoryApi = createApi({
  reducerPath: 'inventory',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  endpoints: (builder) => ({
    getAllInventoryItems: builder.query({
        query: () => `inventory`,
      }),
    getInventoryItemByID: builder.query({
      query: (id) => `inventory/${id}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllInventoryItemsQuery, useGetInventoryItemByIDQuery } = inventoryApi