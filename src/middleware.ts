import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
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
