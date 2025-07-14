import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsReducer } from "./postsreducer";
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()
const rootReducer = combineReducers({
    postsDataState: postsReducer,
})

const appStore = configureStore({
    reducer: rootReducer,
    middleware: (gdm) => {
        return gdm().concat([loggerMiddleware])
    }
})
export type AppStateType = ReturnType<typeof rootReducer>
//export type AppStateType = ReturnType<typeof appStore.getState>
export type AppDispatchType = typeof appStore.dispatch

export default appStore


/**
 * {
        postsDataState:PostsStateType {
            posts:Post[],
            isLoading:boolean,
            errorInfo:string
        },
        counterState:{
            counter:number
        }
    }
 */
