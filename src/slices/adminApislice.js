import { apislice } from "./apislice";

const admin_url = 'api/admin'
const student_url = 'api/student'

export const companyApislice = apislice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${admin_url}/login`,
                method: 'POST',
                body: data,
                message: "ok"
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${admin_url}/logout`,
                method: 'POST',
                message: "logged out"
            })
        }),
        register: builder.mutation({
            query: (data) => ({
                url: `${admin_url}/register`,
                method: 'POST',
                body: data,
                message: "ok"
            })
        }),
        getpenstudent: builder.mutation({
            query: () => ({
                url: `${student_url}/getpenstudent`,
                method: 'GET',
                message: "ok"
            })
        }),
    })
})

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } = companyApislice;