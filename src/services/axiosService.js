import { axiosApi } from "./axiosApi";

class AxiosService {

    async getAllProducts() {
        const response = await axiosApi.get('/products');

        return response.data;
    }

    async getUser() {
        const response = await axiosApi.get('/users/4');

        return response.data;
    }

    async getSingleProduct(idProduct) {
        const response = await axiosApi.get(`/products/${idProduct}`);

        return response.data;
    }
}

const axiosService = new AxiosService();

export default axiosService;