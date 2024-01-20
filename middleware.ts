import { NextRequest, NextResponse } from 'next/server';


export async function middleware(request: NextRequest) {
    console.log("미들웨어 팜");

    return NextResponse.next();
}

export const config = {
    matcher: ['/pages/:path*','/'],
};