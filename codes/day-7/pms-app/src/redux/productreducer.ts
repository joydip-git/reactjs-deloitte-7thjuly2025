import { createSlice, type ActionReducerMapBuilder, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../models/product";
import fetchProductByIdAsyncCallbackCreator from "./fetchproductthunkaction";

interface ProductStateType {
    product: Product | undefined;
    isLoadingOver: boolean;
    errorInfo: string
}

const initialProductState: ProductStateType = {
    product: undefined,
    isLoadingOver: false,
    errorInfo: ''
}

const productSlice = createSlice(
    {
        name: 'product',
        initialState: initialProductState,
        reducers: {
            product_fetch_initiate: (state) => {
                state.product = undefined
                state.isLoadingOver = false
                state.errorInfo = ''
            },
            product_fetch_sucsess: (state, action: PayloadAction<Product>) => {
                state.product = action.payload
                state.isLoadingOver = true
                state.errorInfo = ''
            },
            product_fetch_failed: (state, action: PayloadAction<string>) => {
                state.product = undefined
                state.isLoadingOver = true
                state.errorInfo = action.payload
            }
        },
        extraReducers: (builder: ActionReducerMapBuilder<ProductStateType>) => {
            builder
                .addCase(
                    fetchProductByIdAsyncCallbackCreator.pending,
                    (state) => {
                        state.product = undefined
                        state.isLoadingOver = false
                        state.errorInfo = ''
                    }
                )
                .addCase(
                    fetchProductByIdAsyncCallbackCreator.fulfilled,
                    (state, action: PayloadAction<Product>) => {
                        state.product = action.payload
                        state.isLoadingOver = true
                        state.errorInfo = ''
                    }
                )
                .addCase(
                    fetchProductByIdAsyncCallbackCreator.rejected,
                    (state, action) => {
                        state.product = undefined
                        state.isLoadingOver = true
                        state.errorInfo = action.payload as string
                    }
                )
        }
    }
)

export const productReducer = productSlice.reducer
export const {
    product_fetch_initiate: productFetchActionInitiateCreator,
    product_fetch_sucsess: productFetchSuccessActionCreator,
    product_fetch_failed: productFetchFailedActionCreator
} = productSlice.actions


// { type: 'product/fetch_product/pending' }
// { type: 'product/fetch_product/fulfilled', payload: {} }
// { type: 'product/fetch_product/rejected', payload: '' }
