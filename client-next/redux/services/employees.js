// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const employeesApi = createApi({
  reducerPath: 'employees',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  endpoints: (builder) => ({
    getAllEmployees: builder.query({
        query: () => `employees`,
      }),
    getEmployeeByID: builder.query({
      query: (id) => `employees/${id}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllEmployeesQuery, useGetEmployeeByIDQuery } = employeesApi