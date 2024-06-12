// reserved name middleware.js

import { NextResponse } from "next/server";

export function middleware(request) {
    return  NextResponse.next();
}

// reserved config name
export const config = {
    matcher: "/news"
}