import axiosService from "../../../services/axiosService";
import { loadingUser, setUser } from "./userSlice";

export const getUser = () => {
    return async (dispatch, /* getState*/ ) => {
        dispatch( loadingUser() );

        const res = await axiosService.getUser();
        
        dispatch( setUser(res) );
    }
}