import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: false
}

export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        login: (state) => {
            state.token = true;
        },
        logout : (state) => {
            state.token = false;
        }
    }
});

export const { login, logout } = tokenSlice.actions;