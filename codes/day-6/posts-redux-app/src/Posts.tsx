import type { AxiosResponse } from "axios"
import { getPosts } from "./postservice"
import type { Post } from "./post"
import { useEffect } from "react"
import { failedActionCreator, initiateActionCreator, successActionCreator } from "./redux/postsreducer";
import { useAppStateSelector, useAppStoreDispatch } from "./redux/typedhooks";

const Posts = (props: Readonly<{ countData: number }>) => {
    console.log('Posts...');

    // const selectedState = useSelector((stateMap: any) => { return stateMap.postsDataState })
    const selectedState = useAppStateSelector((stateMap) => stateMap.postsDataState)
    const { posts, isLoading, errorInfo } = selectedState

    // const dispatch = useDispatch()
    const dispatch = useAppStoreDispatch()

    const fetchPosts = async () => {
        //resettinbg to default
        //send a request (dispatch an action) without any payload
        //{type:'fetch_initiate'}      
        const initiateAction = initiateActionCreator()
        dispatch(initiateAction)

        try {
            const response: AxiosResponse<Post[]> = await getPosts()
            if (response.status === 200) {
                const postRecords: Post[] = response.data.slice(0, 10)
                //send a request (dispatch an action) with postRecords (Post[]) as payload to the redux store
                //{type:'fetch_success', payload:postRecords}
                const successAction = successActionCreator(postRecords)
                dispatch(successAction)
            } else {
                //send a request (dispatch an action) with response.statusText (string) as payload to the redux store
                //{type:'fetch_failed', payload:response.statusText}
                const failedAction = failedActionCreator(response.statusText)
                dispatch(failedAction)
            }
        } catch (error: any) {
            //send a request (dispatch an action) with error.message (string) as payload to the redux store
            //{type:'fetch_failed', payload:error.message}
            const failedAction = failedActionCreator(error.message)
            dispatch(failedAction)
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
                        return <li key={p.id}>{p.id}# &nbsp;&nbsp;{p.title}</li>
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