import { getCookie } from "cookies-next";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const accessToken = getCookie("accessToken", { req: request, res });
  const url = new URL(request.url);
  const origin = url.origin;

  if (url.pathname.startsWith("/auth") && accessToken) {
    return NextResponse.redirect(`${origin}/dashboard`);
  }

  if (url.pathname.startsWith("/dashboard") && !accessToken) {
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/auth/:path*",
    "/dashboard/:path*",
    "/onboarding/:path*",
    "/swipe/:path*",
    "/evaluate/:path*",
  ],
};
