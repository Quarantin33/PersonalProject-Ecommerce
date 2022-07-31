import { configureStore } from "@reduxjs/toolkit";
import { tokenSlice } from "./slices/token/tokenSlice";

export const store = configureStore({
    reducer: {
        tokenBox: tokenSlice.reducer
    }
});