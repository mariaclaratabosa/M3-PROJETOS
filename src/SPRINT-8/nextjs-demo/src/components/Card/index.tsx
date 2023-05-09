import { IPost } from "@/app/posts/page"
import Link from "next/link"
import styles from "./styles.module.scss"

interface ICardProps {
    post: IPost
}
export default function Card({ post }: ICardProps) {
    return (
        <li className={styles.container}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <Link href={`/posts/${post.id}`}>Acessar</Link>
        </li>
    )
}