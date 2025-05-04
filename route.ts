/**
 * An array of routes that are accessible to the public.
 * These routes do not require authentication.
 * @type {string[]}
 */
export const publicRoutes = [
  "/", // Home page
  "/courses", // Course listing (details might be gated)
  "/courses/[slug]", // Individual course page
  "/blog", // Blog listing
  "/blog/[slug]", // Individual blog post
  "/about",
  "/contact",
];

/**
 * Routes used for authentication.
 * These routes will redirect logged-in users to their dashboard.
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/sign-up", "/auth/reset"];

/**
 * Prefix for API authentication routes.
 * Routes that start with this prefix are used for API auth logic.
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Prefix for admin dashboard routes.
 * Used to guard and identify admin-specific pages.
 * @type {string}
 */
export const adminPrefix = "/dashboard/admin";

/**
 * Default redirect paths after login, based on role.
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard/admin"; // General fallback

export const ROLE_LOGIN_REDIRECTS = {
  admin: "/dashboard/admin",
  instructor: "/dashboard/instructor",
  author: "/dashboard/author",
};