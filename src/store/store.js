import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slices/cart/cartSlice";
import { tokenSlice } from "./slices/token/tokenSlice";
import { userSlice } from "./slices/user/userSlice"

export const store = configureStore({
    reducer: {
        tokenBox: tokenSlice.reducer,
        userBox: userSlice.reducer,
        cartBox: cartSlice.reducer
    }
});