import { useCallback, useRef, useState } from "react"
import usePostsInfiniteScroll from "./usePostsInfiniteScroll"

const Posts = () => {

    const [pageNo, setPageNo] = useState(1)
    const { isLoading, errorInfo, posts } = usePostsInfiniteScroll(pageNo)

    const observerRef = useRef<IntersectionObserver>(null)
    // const lastLiElementRef = useRef<HTMLLIElement>(null)

    const lastLiElementRef = useCallback((node: HTMLLIElement | null) => {

        if (isLoading) return;

        let observer = observerRef.current
        if (observer) observer.disconnect()

        observer = new IntersectionObserver(
            (entries: IntersectionObserverEntry[]) => {
                const observableElement: IntersectionObserverEntry = entries[0]
                console.log('loading more...');
                if (observableElement.isIntersecting)
                    setPageNo((currentPageNo) => currentPageNo + 1)
            }
        )

        if (node)
            observer.observe(node)

    }, [isLoading])


    //design
    let design;
    if (isLoading) {
        design = <span>Loading...</span>
    } else if (errorInfo !== '') {
        design = <span>{errorInfo}</span>
    } else if (!posts || posts.length === 0) {
        design = <span>No records found</span>
    } else {
        design = (
            <>
                <h2>List of {posts.length} Posts</h2>
                <br />
                <ul>
                    {
                        posts
                            .map(
                                (p, index) => {
                                    if (posts.length === index + 1)
                                        // return <li ref={lastLiRef} key={p.id}>{p.id}# &nbsp;&nbsp;{p.title}</li>
                                        return (
                                            <li ref={lastLiElementRef} key={p.id}>
                                                <h3>{p.id}# &nbsp;&nbsp;{p.title}</h3>
                                            </li>
                                        )
                                    else
                                        return (
                                            <li key={p.id}>
                                                <h3>{p.id}# &nbsp;&nbsp;{p.title}</h3>
                                            </li>
                                        )
                                })
                    }
                </ul>
            </>
        )
    }
    return design
}

export default Posts