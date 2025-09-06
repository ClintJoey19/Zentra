import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

const authRoutes = ["/auth/sign-in", "/auth/sign-up"];
const protectedRoutes = ["/dashboard/organizations"];

export const middleware = async (request: NextRequest) => {
  // todo
  const pathname = request.nextUrl.pathname;

  if (pathname === "/auth") {
    return NextResponse.redirect(new URL("/auth/sign-in", request.nextUrl));
  }

  if (pathname === "/dashboard") {
    return NextResponse.redirect(
      new URL("/dashboard/organizations", request.nextUrl)
    );
  }

  const sessionCookie = getSessionCookie(request);
  const isAuthRoute = authRoutes.includes(pathname);
  const isProtectedRoute = protectedRoutes.includes(pathname);

  if (sessionCookie && isAuthRoute) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!sessionCookie && isProtectedRoute) {
    return NextResponse.redirect(new URL("/auth/sign-in", request.nextUrl));
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
