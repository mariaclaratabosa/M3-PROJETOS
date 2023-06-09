import { api } from "@/services/api"
import { IPost } from "../page"

interface IPageProps{
    params: {id: string}
}

export const revalidate = 30

export async function generateStaticParams(){
    const response = await api.get<IPost[]>("/posts", {
        params:{
            _limit: 5,
            _page: 1
        }
    })
    return response.data.map(post => ({...post, id: post.id + "" }))
}

export default async function PostPage({ params }: IPageProps) {
    const response = await api.get<IPost>(`/posts/${params.id}`)
    const post = response.data

    return(
        <>
        <h1>{post.title}</h1>
        {post.content.map(paragraph => <p key={paragraph.slice(0, 15)}>{paragraph}</p>)}
        </>
    )
}