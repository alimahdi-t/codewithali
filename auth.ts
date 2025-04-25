import NextAuth from "next-auth";
import authConfig from "./auth.config";

import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import { getUserById } from "@/data/user";
import { Role } from "@/prisma/client";

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: {
    signIn: "auth/login",
  },

  events: {
    async linkAccount({ user }) {
      if (user.id)
        await prisma.user.update({
          where: { id: parseInt(user.id) },
          data: {
            emailVerified: new Date(),
          },
        });
    },
  },

  callbacks: {
    async jwt({ token }) {
      if (!token.sub) return token; // It means that the user is logged out

      const existingUser = await getUserById(parseInt(token.sub));
      if (!existingUser) return token;
      token.name = existingUser.firstName.concat(" ", existingUser.lastName);

      token.image = existingUser.imageUrl;
      token.email = existingUser.email;
      token.role = existingUser.role;
      return token;
    },

    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as Role;
      }

      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email ?? "";
      }

      return session;
    },
  },

  // async signIn({ user, account }) {
  //   // Allow OAuth without email verification
  //   if (account?.provider !== "credentials") return true;
  //
  //   const existingUser = await getUserById(user.id as string);
  //
  //   // Prevent Sign in without email verification
  //   if (!existingUser || !existingUser.emailVerified) {
  //     return false;
  //   }
  //   //TODO: handle two factor confirmation if need
  //
  //
  //   return true;
  // },

  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});