import { useEffect, useState } from "react"
import type { Post } from "./post"
import type { AxiosResponse } from "axios"
import { getPosts } from "./postservice"

const usePostsInfiniteScroll = (pageNo: number = 0) => {
    const [posts, setPosts] = useState<Post[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorInfo, setErrorInfo] = useState('')

    const limit = 10
    const fetchPosts = async () => {
        setIsLoading(true)
        setErrorInfo('')
        try {
            const response: AxiosResponse<Post[]> = await getPosts(limit, pageNo)
            if (response.status === 200) {
                const postRecords: Post[] = response.data
                setPosts(
                    (oldPosts) => {
                        return [...oldPosts, ...postRecords]
                    }
                )
                setIsLoading(false)
                setErrorInfo('')
            } else {
                setPosts([])
                setIsLoading(false)
                setErrorInfo(response.statusText)
            }
        } catch (error: any) {
            setPosts([])
            setIsLoading(false)
            setErrorInfo(error.message)
        }
    }

    useEffect(
        function () {
            fetchPosts()
        }, [pageNo]
    )

    return { isLoading, posts, errorInfo }
}

export default usePostsInfiniteScroll