import axios, { type AxiosResponse } from "axios";
//import type { Canceler } from "axios";
import type { Post } from "./post";
//import { useEffect } from "react";

export async function getPosts(limit = 0, page = 0): Promise<AxiosResponse<Post[]>> {
    if (limit === 0 || page === 0)
        return axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    else
        return axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
}
export async function getPost(id: number): Promise<AxiosResponse<Post>> {
    return axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
}

// useEffect(
//     () => {
//         let canceler: Canceler;
//         axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`,
//             {
//                 cancelToken: new axios.CancelToken(c => canceler = c)
//             },
//         ).then()

//         return () => {
//             canceler()
//         }
//     }, []
// )

// return <></>
