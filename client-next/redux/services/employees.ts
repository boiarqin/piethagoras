// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type {Employee, LegacySystemError} from '../../types/kitchen.types'

// Define a service using a base URL and expected endpoints
export const employeesApi = createApi({
  reducerPath: 'employees',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  endpoints: (builder) => ({
    getAllEmployees: builder.query<Employee[], null>({
        query: () => `employees`,
        transformResponse: (response : {data: Employee[]}) => response.data,
      }),
    getEmployeeById: builder.query<Employee, number>({
      query: (id) => `employees/${id}`,
      transformResponse: (response : {data : Employee}) => response.data,
      transformErrorResponse: (response : {status: number, data: LegacySystemError}) => {
        return {
            status: response.status,
            statusText: response.data.error.message,
            data: response.data,
        }
      }
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllEmployeesQuery, useGetEmployeeByIdQuery } = employeesApi