import axiosService from "../../../services/axiosService"
import { /* addCart,*/ addProductsToCart } from "./cartSlice";

export const getProduct = (id) => {
    // console.log('ID product '+ id);
    return async (dispatch) => {
        const prod = await axiosService.getSingleProduct( id );

        //sirve para agregrar un sólo producto
        //dispatch( addCart(prod) );

        dispatch( addProductsToCart(prod))
    }
}