"use server";

import { z } from "zod";
import { ChangePasswordSchema } from "@/schema";
import { currentUser } from "@/lib/auth";
import { comparePassword, hashPassword } from "@/utils/password";
import { getUserById } from "@/data/user";
import prisma from "@/lib/prisma";

export async function changePassword(
  values: z.infer<typeof ChangePasswordSchema>,
) {
  const validatedFields = ChangePasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "ورودی نامعتبر هست!" };
  }

  const existingUser = await currentUser();

  if (!existingUser || !existingUser.id) {
    return { error: "اجازه دسترسی ندارید!" };
  }

  const { currentPassword, password, confirmPassword } = validatedFields.data;

  if (password !== confirmPassword) {
    return { error: "رمز عبور و تکرار آن باید برابر باشد" };
  }

  const user = await getUserById(parseInt(existingUser.id));

  if (!user) {
    return { error: "کاربری با این ایمیل یافت نشد!" };
  }

  if (!user.password) {
    return { error: "امکان تغییر رمز عبور وجود ندارد." };
  }

  const samePassword = await comparePassword(currentPassword, user.password);

  if (!samePassword) {
    return { error: "رمز عبور نادرست است" };
  }

  const hashedPassword = await hashPassword(password);

  try {
    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
      },
    });
    return { success: "رمز عبور با موفقیت تغییر یافت." };
  } catch (error) {
    console.error("Error updating password:", error);
    return {
      error: "خطایی در تغییر رمز عبور رخ داد. لطفاً دوباره امتحان کنید.",
    };
  }
}