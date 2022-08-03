import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    user: {}
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loadingUser: (state) => {
            state.isLoading = true;
        },
        setUser: (state, action) => {
            console.log(action);
        }
    }
});

export const { loadingUser, setUser } = userSlice.actions;