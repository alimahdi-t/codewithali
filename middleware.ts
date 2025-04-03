import NextAuth from "next-auth";
import authConfig from "./auth.config";
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from "@/route";

export const { auth } = NextAuth(authConfig);

//@ts-ignore
export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth; // Returns true if user signed in

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

  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  // Redirect the user to login page if user not signed in and the route isn't public
  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/auth/login", nextUrl));
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