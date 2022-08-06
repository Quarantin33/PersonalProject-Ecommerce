import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
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
            state.product = payload;
            console.log(state.product);
        },
        addProductsToCart: (state, { payload } ) => {
            state.products.push(payload);
        },
    }
})

export const { addCart, addProductsToCart } = cartSlice.actions;
