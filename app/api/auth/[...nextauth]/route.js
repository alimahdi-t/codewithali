import { handlers } from "@/auth"; // Referring to the auth.ts we just created
export const { GET, POST } = handlers;

//
//
// {
//   providers: [
//     // GoogleProvider({
//     //   clientId: process.env.GOOGLE_CLIENT_ID,
//     //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     // }),
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
//     }),
//   ],
//       callbacks: {
//   async session({ session }) {
//     return session;
//   },
//
//   async signIn({ profile, user, account }) {
//     try {
//       const isUserExist = await prisma.user.findFirst({
//         where: {
//           email: profile?.email,
//         },
//       });
//
//       if (!isUserExist) {
//         await prisma.user.create({
//           data: {
//             firstName: profile?.given_name || "",
//             lastName: profile?.family_name || "",
//             email: profile?.email || "",
//             imageUrl: profile?.picture || "",
//             role: "USER",
//           },
//         });
//       }
//
//       return true;
//     } catch (error) {
//       console.error("Error during sign-in:", error);
//       return false;
//     }
//   },
// },
//
//   // pages: {
//   //   signIn: "/auth/sign-in",
//   //   newUser: "/auth/sign-up",
//   // },
// }