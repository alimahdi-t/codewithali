// import type { NextAuthConfig } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
//
// export const options: NextAuthConfig = {
//   secret: process.env.NEXTAUTH_SECRET, // Add this line
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         username: {
//           label: "Username",
//           placeholder: "your username",
//           type: "text",
//         },
//         password: {
//           label: "Password",
//           placeholder: "password",
//           type: "password",
//         },
//       },
//
//       async authorize(credentials, req: Request) {
//         const admin = { username: "alimahdi", password: "5dec2001" };
//
//         if (!credentials?.username || !credentials?.password) {
//           throw new Error("نام کاربری یا رمز عبور وارد نشده است");
//         }
//
//         try {
//           if (
//             credentials?.username === admin.username &&
//             credentials?.password === admin.password
//           ) {
//             return {
//               username: "alimahdi",
//               role: "admin",
//             };
//           } else {
//             throw new Error("رمز عبور نامعتبر است");
//           }
//         } catch (error) {
//           console.error("Authorization error:", error);
//           throw new Error("خطایی در فرآیند ورود رخ داده است");
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async session({ session, token }) {
//       if (token.user) {
//         session.user = token.user; // Store the entire gallery object in session.user
//       }
//       return session;
//     },
//
//     async jwt({ token, user }) {
//       if (user) {
//         token.user = user; // Store user data in token
//       }
//       return token;
//     },
//     async redirect({ url, baseUrl }) {
//       return url.startsWith(baseUrl) ? url : `${baseUrl}/dashboard`; // Redirect to /dashboard after sign-in
//     },
//   },
//
//   pages: {
//     // signIn: "/auth/sign-in",
//     // signOut: "",
//     // error: "/auth/sign-in",
//     // newUser: "",
//     // verifyRequest: "",
//   },
//
//   theme: { colorScheme: "light" },
// };