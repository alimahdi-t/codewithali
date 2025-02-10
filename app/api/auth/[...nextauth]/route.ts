import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/lib/prisma";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session }) {
      // console.log("session", session);
      // const sessionUser = await prisma.user.findFirst({
      //   where: {
      //     email: session.user?.email as string,
      //   },
      // });
      // session.user.id = sessionUser?.id;

      return session;
    },

    async signIn({
      profile,
    }: {
      profile: {
        email: string;
        email_verified: boolean;
        picture: string;
        given_name: string;
        family_name: string;
      };
    }) {
      // console.log("profile", profile);

      try {
        const isUserExist = await prisma.user.findFirst({
          where: {
            email: profile?.email,
          },
        });
        if (!isUserExist) {
          const user = await prisma.user.create({
            data: {
              firstName: profile.given_name,
              lastName: profile.family_name,
              email: profile.email,
              imageUrl: profile?.picture,
              role: "USER",
            },
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
      // Connect To Database
      // Check if the user exist in database, If not create an account
    },
  },

  // pages: {
  signIn: "/auth/sign-in",
  newUser: "auth/sing-up",
  //   // signOut: "/sign-out",
  // },
});

export { handler as GET, handler as POST };
