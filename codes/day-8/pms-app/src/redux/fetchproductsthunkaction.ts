import type { AxiosResponse } from "axios"
import type { ApiResponse } from "../models/apiresponse"
import type { Product } from "../models/product"
import { getProducts } from "../services/productservice"
import { createAsyncThunk } from "@reduxjs/toolkit"

const fetchProducts = async () => {
    try {
        const axiosResponse: AxiosResponse<ApiResponse<Product[]>> =
            await getProducts()
        const apiResponse: ApiResponse<Product[]> = axiosResponse.data

        if (apiResponse.data) {
            return apiResponse.data
        } else {
            throw new Error(apiResponse.message)
        }
    } catch (error: any) {
        throw new Error(error.message)
    }
}

const fetchProductsAsyncCallbackCreator = createAsyncThunk('products/fetch_products', fetchProducts)
export default fetchProductsAsyncCallbackCreator