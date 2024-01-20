import {NextResponse,NextRequest} from "next/server";
import { loggerMiddleware } from '../../../../loggerMiddleware';
import jwt from "jsonwebtoken";
import { pool } from "@/app/api/db.config";




export async function POST(req: NextRequest) {
    await loggerMiddleware(req);
    let rows: any   =  await insertBoard(await req.json());
    let msg = (rows.affectedRows > 0 )? "글 등록에 성공하였습니다." : "글 등록에 실패하였습니다.";

    return NextResponse.json({"msg":msg})
}


const insertBoard = async (body: any) => {
    const conn = await pool.getConnection();
    let result = "";
    try{
        result = await conn.query(`INSERT INTO 
             board (title,contents,writer,reg_date)
             VALUE ('${body.title}','${body.contents}','${body.writer}',now())`);
    }catch{
        console.log("db 연결 실패 경로 : /api/board  insertBoard 요청");
    }finally {
        await conn.release();
    }
    return result[0];
}





