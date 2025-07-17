//import { AUTH_API_BASE_URL } from "../config/constants";
import axiosInstance from "../config/axiosconfig";
import type { ApiResponse } from "../models/apiresponse";
import type { User } from "../models/user";
import { type AxiosResponse } from "axios";

export const authenticate = (user: User): Promise<AxiosResponse<ApiResponse<string>>> => {
    // return axios.post(`${AUTH_API_BASE_URL}/login`, user)
    return axiosInstance.post(`auth/login`, user)
}

export const register = (user: User): Promise<AxiosResponse<ApiResponse<User>>> => {
    //return axios.post(`${AUTH_API_BASE_URL}/register`, user)
    return axiosInstance.post(`auth/register`, user)
}