import axiosService from "../../../services/axiosService"
import { addCart } from "./cartSlice";

export const getProduct = (id) => {
    // console.log('ID product '+ id);
    return async (dispatch) => {
        const prod = await axiosService.getSingleProduct( id );

        dispatch( addCart(prod) );
    }
}