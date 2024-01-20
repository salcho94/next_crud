import {pool} from "../db.config";

export const insertBoard = async (body) => {
    const conn = await pool.getConnection();
    let result ;
    try{
        result = await conn.query(`INSERT INTO 
             board (title,contents,writer,reg_date)
             VALUE ('${body.title}','${body.contents}','${body.writer}',now())`);
    }catch{
        console.log("db 연결 실패 경로 : /api/board  insertBoard 요청");
    }finally {
        await conn.release();
    }
    return result;
}