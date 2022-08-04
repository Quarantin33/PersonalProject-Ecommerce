import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    product:{
        id: null,
        image: '',
        title: '',
        price: ''
    }
}

export const cartSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addCart: (state, { payload } ) => {
            // console.log(payload.price);
            state.product = payload;
            console.log(state.product);
        }
    }
})

export const { addCart } = cartSlice.actions;
