import { getCookie } from "cookies-next";
import { NextResponse, type NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const res = NextResponse.next();
  const accessToken = getCookie("accessToken", { req: request, res });
  const url = new URL(request.url);
  const origin = url.origin;

  if (!accessToken) {
    return NextResponse.redirect(`${origin}/auth/login`);
  }

  if (url.pathname.startsWith("/auth") && accessToken) {
    return NextResponse.redirect(`${origin}/dashboard`);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard:path*",
    "/onboarding:path*",
    "/swipe:path*",
  ],
};
