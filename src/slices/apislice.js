import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({ baseUrl: 'https://back-end-production-3140.up.railway.app/' });

export const apislice = createApi({
    baseQuery,
    tagTypes: ['Admin'],
    endpoints: (builder) => ({

    }),
})
