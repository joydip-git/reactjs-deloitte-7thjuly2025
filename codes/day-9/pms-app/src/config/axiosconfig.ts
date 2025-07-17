import axios from "axios";
import { getToken } from "../services/tokenservice";

const axiosInstance = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
    baseURL: 'http://localhost:3000/',
    timeout: 5000,
    timeoutErrorMessage: 'Sorry! Request timed out...',
})

axiosInstance.interceptors.request.use(
    (reqConfig) => {
        reqConfig.headers.Authorization = `Bearer ${getToken()}`
        return reqConfig
    },
    (err) => {
        Promise.reject(err)
    }
)

export default axiosInstance