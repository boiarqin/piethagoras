// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {InventoryItem, LegacySystemError} from '../../types/kitchen.types'

// Define a service using a base URL and expected endpoints
export const inventoryApi = createApi({
  reducerPath: 'inventory',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  endpoints: (builder) => ({
    getAllInventoryItems: builder.query<InventoryItem[], void>({
        query: () => `inventory`,
        transformResponse: (response : { data: InventoryItem[]}) => response.data,
      }),
    getInventoryItemById: builder.query<InventoryItem, number>({
      query: (id) => `inventory/${id}`,
      transformResponse: (response : {data: InventoryItem}, meta, arg) => {
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
      transformErrorResponse: (response : {status: number, data: LegacySystemError}) => {
        return {
          status: response.status,
          data: response.data.error.message,
      }
      }
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllInventoryItemsQuery, useGetInventoryItemByIdQuery } = inventoryApi