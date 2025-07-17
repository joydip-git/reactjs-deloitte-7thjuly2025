import type { AxiosResponse } from "axios";
import type { Product } from "../models/product";
//import axios from "axios";
import type { ApiResponse } from "../models/apiresponse";
//import { PRODUCT_API_BASE_URL } from "../config/constants";
import axiosInstance from "../config/axiosconfig";

export const getProducts = (): Promise<AxiosResponse<ApiResponse<Product[]>>> => {
    return axiosInstance.get<ApiResponse<Product[]>>('products')
}

export const getProduct = (id: number): Promise<AxiosResponse<ApiResponse<Product>>> => {
    return axiosInstance.get<ApiResponse<Product>>(`products/${id}`)
}