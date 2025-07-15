import type { AxiosResponse } from "axios"
import type { ApiResponse } from "../models/apiresponse"
import type { Product } from "../models/product"
import { getProduct } from "../services/productservice"
import { createAsyncThunk } from "@reduxjs/toolkit"

const fetchProductById = async (id: number) => {
    try {
        const axiosResponse: AxiosResponse<ApiResponse<Product>> =
            await getProduct(id)
        const apiResponse: ApiResponse<Product> = axiosResponse.data

        if (apiResponse.data) {
            return apiResponse.data
        } else {
            throw new Error(apiResponse.message)
        }
    } catch (error: any) {
        throw new Error(error.message)
    }
}

const fetchProductByIdAsyncCallbackCreator = createAsyncThunk('product/fetch_product', fetchProductById)
export default fetchProductByIdAsyncCallbackCreator