import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(request: NextRequestWithAuth) {
        const { pathname } = request.nextUrl;
        const { token } = request.nextauth;

        console.log("Requested Path:", pathname);
        console.log("Token Info:", token);

        // Deny access to /adminPanel if the user is not an admin
        if (pathname.startsWith("/adminPanel") && token?.role !== "admin") {
            return NextResponse.rewrite(new URL("/denied", request.url));
        }

        // Deny access to /userPanel if the user is not a user
        if (pathname.startsWith("/userPanel") && token?.role !== "user") {
            return NextResponse.rewrite(new URL("/denied", request.url));
        }

        // Redirect based on role when accessing the home page or events page
        if (pathname === "/" || pathname === "/events") {
            if (token?.role === "admin") {
                return NextResponse.redirect(new URL("/adminPanel", request.url));
            } else if (token?.role !== "user") {
                return NextResponse.rewrite(new URL("/denied", request.url));
            }
        }

        // Allow access if none of the above conditions are met
        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    }
);

export const config = { matcher: ["/", "/events", "/adminPanel", "/userPanel"] };
