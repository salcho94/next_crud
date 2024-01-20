"use client"

import React, {FormEvent, useState} from "react";
import axios from "axios";

interface BoardData {
    title : string,
    contents: string,
    writer: string
}
export default function Page(){

    const [boardData, setBoardData] = useState<BoardData>({
        title: '',
        contents: '',
        writer:''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setBoardData({...boardData,[e.target.name]:e.target.value,});
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/board',boardData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            alert(response.data.msg);
        } catch (error) {
            console.error('에러 발생:', error);
        }
    }

    return(
        <>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <label>글 제목</label>  <input type="text" name="title" onChange={(e) => handleChange(e)}/>
                </div>
                <div>
                    <label>작 성자</label>  <input type="text" name="writer" onChange={(e) => handleChange(e)}/>
                </div>
                <div>
                    <label>글 내용</label>  <input type="text" name="contents" onChange={(e) => handleChange(e)}/>
                </div>
                <button type="submit">글 등록</button>
            </form>
        </>
    )
}