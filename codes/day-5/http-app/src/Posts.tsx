import type { AxiosResponse } from "axios"
import { getPosts } from "./postservice"
import type { Post } from "./post"
import { useEffect, useState } from "react"

const Posts = (props: Readonly<{ countData: number }>) => {
    console.log('Posts...');
    const [posts, setPosts] = useState<Post[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [errorInfo, setErrorInfo] = useState('')

    const fetchPosts = async () => {
        try {
            const response: AxiosResponse<Post[]> = await getPosts()
            if (response.status === 200) {
                const postRecords: Post[] = response.data.slice(0, 10)
                setPosts(postRecords)
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
            console.log('effect...');
            // setTimeout(
            //     () => fetchPosts(), 3000
            // )
            fetchPosts()

            const cleanUp = function () {
                console.log('unmounting....');
            }
            return cleanUp

        }, []
    )

    useEffect(
        () => {
            console.log('alltime effect');
            return () => {
                console.log('alltime cleanup in the next cycle first');
            }
        }
    )

    useEffect(
        () => {
            console.log('conditional effect');
            return () => {
                console.log('conditional cleanup in the next cycle first');
            }
        }, [props.countData]
    )

    let design;
    if (isLoading) {
        design = <span>Loading...</span>
    } else if (errorInfo !== '') {
        design = <span>{errorInfo}</span>
    } else if (!posts || posts.length === 0) {
        design = <span>No records found</span>
    } else {
        design = (
            <ul>
                {
                    posts.map(p => {
                        return <li>{p.id}# &nbsp;&nbsp;{p.title}</li>
                    })
                }
            </ul>
        )
    }
    return (
        <div>
            <span>Count: &nbsp;{props.countData}</span>
            <br />
            {

                design
            }
        </div>
    )
}

export default Posts