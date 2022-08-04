import axios from "axios";

 export const axiosApi = axios.create({
    baseURL: process.env.REACT_APP_URL
 })