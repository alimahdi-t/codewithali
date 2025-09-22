import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/schema";
import { getUserByEmail } from "@/data/user";
import { comparePassword } from "@/utils/password";
import Google from "next-auth/providers/google";

export default {
  providers: [
    Credentials({
      //@ts-ignore
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);
        //
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);

          if (!user || !user.password) return null;

          const samePassword = await comparePassword(password, user.password);

          if (samePassword) return user;
        }

        return null;
      },
    }),
    //
    // GitHub({
    //   allowDangerousEmailAccountLinking: true,
    // }),
    Google({
      allowDangerousEmailAccountLinking: true,
    }),
  ],
} satisfies NextAuthConfig;