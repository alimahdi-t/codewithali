"use server";

import { SignUpSchema } from "@/schema";
import { z } from "zod";
import { getUserByEmail } from "@/data/user";
import prisma from "@/lib/prisma";
import { hashPassword } from "@/utils/password";

export async function signUp(values: z.infer<typeof SignUpSchema>) {
  const validatedFields = SignUpSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "ورودی نامعتبر هست!" };
  }

  const { firstName, lastName, email, password, retypePassword } =
    validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return {
      error: "آدرس ایمیل وارد شده از قبل وجود دارد",
    };
  }

  const hashedPassword = await hashPassword(password);

  await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      password: hashedPassword,
    },
  });

  //TODO: Send verification email

  return {
    success:
      "ثبت‌نام با موفقیت انجام شد. لطفاً ایمیل خود را بررسی کنید. لینک تأیید حساب کاربری برای شما ارسال شده است.",
  };
}