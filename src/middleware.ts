import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default function middleware(request: NextRequestWithAuth) {
  return NextResponse.next();
}
