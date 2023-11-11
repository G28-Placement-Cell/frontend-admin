import { apislice } from "./apislice";

const admin_url = 'api/admin'
const student_url = 'api/student'
const company_url = 'api/company'
const reset_url = 'api/reset'

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
        verify: builder.mutation({
            query: (data) => ({
                url: `${student_url}/verify`,
                method: 'POST',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: data,
                message: "ok"
            })
        }),
        reject: builder.mutation({
            query: (data) => ({
                url: `${student_url}/reject`,
                method: 'POST',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: data,
                message: "ok"
            })
        }),
        verifycomp: builder.mutation({
            query: (data) => ({
                url: `${company_url}/verify`,
                method: 'POST',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: data,
                message: "ok"
            })
        }),
        rejectcomp: builder.mutation({
            query: (data) => ({
                url: `${company_url}/reject`,
                method: 'POST',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: data,
                message: "ok"
            })
        }),
        change_password: builder.mutation({
            query: (data) => ({
                url: `${admin_url}/change_password`,
                method: 'POST',
                headers: {
                    authorization: 'Bearer ' + localStorage.getItem('token')
                },
                body: data,
                message: "ok"
            })
        }),
        reset_pass: builder.mutation({
            query: (data) => ({
                url: `${reset_url}/admin`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                message: "ok"
            })
        }),
        reset_apply: builder.mutation({
            query: (data) => ({
                url: `${reset_url}/applyAdmin`,
                method: 'POST',
                body: data,
                message: "ok"
            })
        }),
    })
})

export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useVerifyMutation, useRejectMutation, useVerifycompMutation, useRejectcompMutation, useChange_passwordMutation, useReset_passMutation, useReset_applyMutation } = companyApislice;