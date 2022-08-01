import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: false
}

// este es el reducer que se encarga de la lógica que se ejecuta al hacer el dispatch
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