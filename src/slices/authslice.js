// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     studentInfo: localStorage.getItem('studentInfo') ? JSON.parse(localStorage.getItem('studentInfo')) : null,
// }

// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         setcred(state, action) {
//             state.studentInfo = action.payload;
//             localStorage.setItem('studentInfo', JSON.stringify(action.payload));
//         },
//         logout(state) {
//             state.studentInfo = null;
//             localStorage.removeItem('studentInfo');
//         }
//     }
// })

// export const { setcred, logout } = authSlice.actions;
// export default authSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    studentInfo: localStorage.getItem('email')
        ? JSON.parse(localStorage.getItem('email'))
        : null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.studentInfo = action.payload;
            state.token = action.payload.token;
            localStorage.setItem('email', JSON.stringify(action.payload));
            localStorage.setItem('token', action.payload.token);
        },
        logout: (state, action) => {
            state.studentInfo = null;
            localStorage.removeItem('email');
            localStorage.removeItem('token');
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;