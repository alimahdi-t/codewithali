import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import {
  adminPrefix,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
  ROLE_LOGIN_REDIRECTS,
} from "@/route";
import { Role } from "@/prisma/client";

export async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const pathname = nextUrl.pathname;

  // ✅ Skip NextAuth API routes
  if (pathname.startsWith(apiAuthPrefix)) return NextResponse.next();

  // ✅ Skip static files
  if (
    pathname.startsWith("/_next") ||
    pathname.match(/\.(css|js|jpg|jpeg|png|gif|svg|ico|woff2?|ttf|json|map)$/)
  ) {
    return NextResponse.next();
  }

  // ✅ Get token (important: secureCookie handling)
  const token = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
    secureCookie: process.env.NODE_ENV === "production",
  });

  const isLoggedIn = !!token;
  const role = token?.role as Role | undefined;

  // Determine route types
  const isPublicRoute = publicRoutes.some((route) => {
    const dynamicSegmentRegex = /\[([^\]]+)\]/;
    if (dynamicSegmentRegex.test(route)) {
      const baseRoute = route.split(dynamicSegmentRegex)[0];
      return pathname.startsWith(baseRoute);
    }
    return route === pathname;
  });

  const isAuthRoute = authRoutes.includes(pathname);
  const isAdminRoute = pathname.startsWith(adminPrefix);

  // 🔒 Redirect logged-in users from auth pages
  if (isAuthRoute && isLoggedIn && role) {
    const redirectUrl = ROLE_LOGIN_REDIRECTS[role];
    if (redirectUrl && pathname !== redirectUrl) {
      return NextResponse.redirect(new URL(redirectUrl, req.url));
    }
    return NextResponse.next();
  }

  // 🔑 Force login for protected pages (skip public routes)
  if (!isLoggedIn && !(isPublicRoute || isAuthRoute)) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  // 🚫 Admin access control
  if (isAdminRoute && role !== "ADMIN") {
    return NextResponse.redirect(new URL("/contact", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};