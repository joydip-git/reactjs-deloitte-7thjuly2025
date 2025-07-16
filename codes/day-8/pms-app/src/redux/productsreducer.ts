import { createSlice, type ActionReducerMapBuilder, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../models/product";
import fetchProductsAsyncCallbackCreator from "./fetchproductsthunkaction";

interface ProductsStateType {
    products: Product[];
    isLoadingOver: boolean;
    errorInfo: string
}

const initialProductsState: ProductsStateType = {
    products: [],
    isLoadingOver: false,
    errorInfo: ''
}

const productsSlice = createSlice(
    {
        name: 'products',
        initialState: initialProductsState,
        reducers: {
            products_fetch_initiate: (state) => {
                state.products = []
                state.isLoadingOver = false
                state.errorInfo = ''
            },
            products_fetch_sucsess: (state, action: PayloadAction<Product[]>) => {
                state.products = action.payload
                state.isLoadingOver = true
                state.errorInfo = ''
            },
            products_fetch_failed: (state, action: PayloadAction<string>) => {
                state.products = []
                state.isLoadingOver = true
                state.errorInfo = action.payload
            }
        },
        extraReducers: (builder: ActionReducerMapBuilder<ProductsStateType>) => {
            builder
                .addCase(
                    fetchProductsAsyncCallbackCreator.pending,
                    (state) => {
                        state.products = []
                        state.isLoadingOver = false
                        state.errorInfo = ''
                    }
                )
                .addCase(
                    fetchProductsAsyncCallbackCreator.fulfilled,
                    (state, action: PayloadAction<Product[]>) => {
                        state.products = action.payload
                        state.isLoadingOver = true
                        state.errorInfo = ''
                    }
                )
                .addCase(
                    fetchProductsAsyncCallbackCreator.rejected,
                    (state, action) => {
                        state.products = []
                        state.isLoadingOver = true
                        state.errorInfo = action.payload as string
                    }
                )
        }
    }
)

export const productsReducer = productsSlice.reducer
export const {
    products_fetch_initiate: productsFetchActionInitiateCreator,
    products_fetch_sucsess: productsFetchSuccessActionCreator,
    products_fetch_failed: productsFetchFailedActionCreator
} = productsSlice.actions


// { type: 'products/fetch_products/pending' }
// { type: 'products/fetch_products/fulfilled', payload: [] }
// { type: 'products/fetch_products/rejected', payload: '' }
