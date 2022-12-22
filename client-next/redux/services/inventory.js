// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const inventoryApi = createApi({
  reducerPath: 'inventory',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  endpoints: (builder) => ({
    getAllInventoryItems: builder.query({
        query: () => `inventory`,
        transformResponse: (response) => response.data,
      }),
    getInventoryItemById: builder.query({
      query: (id) => `inventory/${id}`,
      transformResponse: (response, meta, arg) => {
        const {
          units,
          unitOfMeasure,
          amountPerUnit
        } = response.data;

        return {
          ...response.data,
          availableQuantity: `${units * amountPerUnit} ${unitOfMeasure}`
        }
      },
      transformErrorResponse: (response) => {
        return response.data.error
      }
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllInventoryItemsQuery, useGetInventoryItemByIdQuery } = inventoryApi