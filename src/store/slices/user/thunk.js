import axiosService from "../../../services/axiosService";
import { loadingUser, setUser } from "./userSlice";

export const getUser = () => {
    return async (dispatch, getState) => {
        dispatch( loadingUser() );

        // dispatch( setUser() );

        
    }
}