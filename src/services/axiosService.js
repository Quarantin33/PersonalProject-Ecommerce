import axios from "axios";

let baseUrl = process.env.REACT_APP_URL;

class AxiosService {

    async getAllProducts() {
        const url = `${baseUrl}/products`;

        const response = await axios.get(url);

        return response.data;
    }

    async getUser() {
        const url = `${baseUrl}/users/4`;

        const response = await axios.get(url);

        return response.data;
    }
}

const axiosService = new AxiosService();

export default axiosService;