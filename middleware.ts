import NextAuth from "next-auth";
import authConfig from "./auth.config";
import {
  adminPrefix,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
  ROLE_LOGIN_REDIRECTS,
} from "@/route";
import { getToken } from "next-auth/jwt";
import { Role } from "@/prisma/client";

export const { auth } = NextAuth(authConfig);

//@ts-ignore
export default auth(async (req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth; // Returns true if user signed in
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  const role = token?.role;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix); // prefix of api for auth routes
  const isPublicRoute = publicRoutes.some((route) => {
    // Check if route is a dynamic route (like /courses/[slug], /blog/[slug], /profile/[userId])
    const dynamicSegmentRegex = /\[([^\]]+)\]/; // Matches any dynamic segment, e.g., [slug], [id], [userId], etc.
    if (dynamicSegmentRegex.test(route)) {
      const baseRoute = route.split(dynamicSegmentRegex)[0]; // Get the base route before the dynamic segment (e.g., "/courses", "/blog", "/profile")
      return nextUrl.pathname.startsWith(baseRoute); // Match base route
    }
    return route === nextUrl.pathname; // Exact match for static routes
  });
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  const isAdminRoute = nextUrl.pathname.startsWith(adminPrefix);

  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(
        new URL(ROLE_LOGIN_REDIRECTS[role as Role], nextUrl),
      );
    }
    return null;
  }

  // Redirect the user to login page if user not signed in and the route isn't public
  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/auth/login", nextUrl));
  }

  // Prevent not admin user to access admin dashboard
  if (isAdminRoute && role !== "ADMIN") {
    return Response.redirect(new URL("/contact", nextUrl));
  }

  return null;
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};