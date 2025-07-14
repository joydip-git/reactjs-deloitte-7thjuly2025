import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Post } from "../post";

interface PostsStateType {
    posts: Post[];
    isLoading: boolean;
    errorInfo: string
}

const initialPostsState: PostsStateType = {
    posts: [],
    isLoading: true,
    errorInfo: ''
}

const postsSlice = createSlice({
    name: 'postsState',
    initialState: initialPostsState,
    reducers: {
        fetch_initiate: (state) => {
            state.isLoading = true
            state.errorInfo = ''
            state.posts = []
        },
        fetch_success: (state, action: PayloadAction<Post[]>) => {
            state.isLoading = false
            state.errorInfo = ''
            state.posts = action.payload
        },
        fetch_failed: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.errorInfo = action.payload
            state.posts = []
        }
    }
})

export const postsReducer = postsSlice.reducer;
export const { fetch_initiate: initiateActionCreator, fetch_success: successActionCreator, fetch_failed: failedActionCreator } = postsSlice.actions;


// fetch_initiate() -> { type: 'postsState/fetch_initiate', }
// fetch_success() -> { type: 'postsState/fetch_success', payload: Post[] }
// fetch_failed() -> { type: 'postsState/fetch_success', payload:string }