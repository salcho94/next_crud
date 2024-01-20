
import React from "react";
import Link from "next/link";



export default function Home() {
    return (
        <>
            <ol>
                <li><Link href="/board/create">글작성</Link> </li>
            </ol>
        </>
    )
}
