import {NextResponse,NextRequest} from "next/server";
import { loggerMiddleware } from '../../../loggerMiddleware';
import {insertBoard} from "./query";
import { pool } from "@/app/api/db.config";




export async function POST(req: NextRequest) {
    await loggerMiddleware(req);
    let rows: any   =  await insertBoard(await req.json());
    let msg = (rows.affectedRows > 0 )? "글 등록에 성공하였습니다." : "글 등록에 실패하였습니다.";
    return NextResponse.json({"msg":msg})
}








