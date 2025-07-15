import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./productsreducer";
import { createLogger } from "redux-logger";
import { productReducer } from "./productreducer";

const rootReducer = combineReducers({
    productsState: productsReducer,
    productState: productReducer
})
const logger = createLogger()
const AppStore = configureStore({
    reducer: rootReducer,
    middleware: (dm) => dm().concat([logger])
})

export type AppStateType = ReturnType<typeof AppStore.getState>
export type AppStoreDispatchType = typeof AppStore.dispatch
export default AppStore