"use server";

import { LoginSchema } from "@/schema";
import { z } from "zod";
import { getUserByEmail } from "@/data/user";
import { comparePassword } from "@/utils/password";
import { signIn } from "@/auth";
import { ROLE_LOGIN_REDIRECTS } from "@/route";
import { AuthError } from "next-auth";

export async function login(values: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "ورودی نامعتبر هست!" };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    {
      return { error: "کاربری با این ایمیل یافت نشد!" };
    }
  }

  //TODO: if email not verified send verification token

  const samePassword = await comparePassword(password, existingUser.password);

  if (!samePassword) {
    return { error: "ایمیل یا رمز عبور نادرست است" };
  }

  //TODO: if two factor confirmation is enabled, validate the confirmation

  // TODO: Redirect user based of its type
  try {
    await signIn("credentials", {
      email,
      password,
      redirect: true,
      redirectTo: ROLE_LOGIN_REDIRECTS[existingUser.role],
    });
    return {
      success: `${
        existingUser.firstName + " " + existingUser.lastName + " "
      }عزیز، با موفقیت وارد شدید. `,
    };
  } catch (error) {
    if (error instanceof AuthError) {
      //@ts-ignore
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };

        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
}