import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    user: {
        id: null,
        email: '',
        username: '',
        password: '',
        name: {
            firstname: '',
            lastname: ''
        },
        phone: ''
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loadingUser: (state) => {
            state.isLoading = true;
        },
        setUser: (state, { payload }) => {
            state.isLoading = false;
            state.user = payload;
            // console.log(payload);
        }
    }
});

export const { loadingUser, setUser } = userSlice.actions;