import type { Post } from "./post"

const PostInfo = ({ post: p }: Readonly<{ post: Post }>) => {
    return (
        <li>
            <h3>{p.id}# &nbsp;&nbsp;{p.title}</h3>
        </li>
    )
}

export default PostInfo