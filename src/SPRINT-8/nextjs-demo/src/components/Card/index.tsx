"use client"

import { IPost } from "@/app/posts/page"
import Link from "next/link"
import styles from "./styles.module.scss"
import { useEffect, useRef } from "react";

interface ICardProps {
    post: IPost;
    color: "first" | "second"
}
export default function Card({ post, color }: ICardProps) {
    const liElement = useRef<HTMLLIElement>(null)

    useEffect(() => {
        const liCurrent = liElement.current
        if(!liCurrent){
            return
        }

        const sizeRow = liCurrent.offsetHeight / 8
        const sizeRowFloor = Math.floor(sizeRow)
        liCurrent.style.gridRowEnd = `span ${sizeRowFloor}`
    }, [])
    return (
        <li ref={liElement} className={styles.container} data-color={color}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <Link href={`/posts/${post.id}`}>Acessar</Link>
        </li>
    )
}