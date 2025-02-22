import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/lib/prisma";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      return session;
    },

    async signIn({ profile, user, account }) {
      try {
        const isUserExist = await prisma.user.findFirst({
          where: {
            email: profile?.email,
          },
        });

        if (!isUserExist) {
          await prisma.user.create({
            data: {
              firstName: profile?.given_name || "",
              lastName: profile?.family_name || "",
              email: profile?.email || "",
              imageUrl: profile?.picture || "",
              role: "USER",
            },
          });
        }

        return true;
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false;
      }
    },
  },

  // pages: {
  //   signIn: "/auth/sign-in",
  //   newUser: "/auth/sign-up",
  // },
});

export { handler as GET, handler as POST };
