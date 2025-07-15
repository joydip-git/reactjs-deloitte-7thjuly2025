import type { AxiosResponse } from "axios";
import type { Product } from "../models/product";
import axios from "axios";
import type { ApiResponse } from "../models/apiresponse";

export const getProducts = (): Promise<AxiosResponse<ApiResponse<Product[]>>> => {
    return axios.get<ApiResponse<Product[]>>('http://localhost:3000/products')
}