/**
 * An array of routes that are accessible to public
 * These routes do not require authentication
 * @types {string[]}
 */
export const publicRoutes = [
  "/", // Home page
  "/courses", // Course listing (details might be gated)
  "/courses/[slug]", // Individual course page (details public, content locked)
  "/blog", // Blog listing
  "/blog/[slug]", // Individual blog post
  "/about",
  "/contact",
];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged-in users to /settings
 * @type {string[]}
 */
export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * The prefix for API authentication routes.
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/my-account";

/**
 * The default redirect path after logging in for admin
 * @type {string}
 */
export const ADMIN_DEFAULT_LOGIN_REDIRECT = "/dashboard/admin";

/**
 * The default redirect path after logging in for instructor
 * @type {string}
 */
export const INSTRUCTOR_DEFAULT_LOGIN_REDIRECT = "/dashboard/instructor";

/**
 * The default redirect path after logging in for author
 * @type {string}
 */
export const AUTHOR_DEFAULT_LOGIN_REDIRECT = "/dashboard/author";