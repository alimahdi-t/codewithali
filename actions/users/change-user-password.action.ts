"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";
import { ChangeUserPasswordSchema } from "@/schema";
import { hashPassword } from "@/utils/password";
import { currentUser } from "@/lib/auth";

type ActionResponse = {
  success?: string;
  error?: string;
};

export const changeUserPasswordAction = async ({
  userId,
  values,
}: {
  userId: number;
  values: z.infer<typeof ChangeUserPasswordSchema>;
}): Promise<ActionResponse> => {
  try {
    // Check current user is admin
    const existingUser = await currentUser();
    if (!existingUser || existingUser.role !== "ADMIN") {
      return { error: "اجازه دسترسی ندارید!" };
    }

    // Validate schema
    const validatedFields = ChangeUserPasswordSchema.safeParse(values);
    if (!validatedFields.success) {
      return { error: "ورودی نامعتبر هست!" };
    }

    const { password, confirmPassword } = validatedFields.data;

    if (password !== confirmPassword) {
      return { error: "رمز عبور و تکرار آن باید برابر باشد" };
    }

    // Hash new password
    const hashedPassword = await hashPassword(password);

    // Update user password
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });

    return { success: "رمز عبور با موفقیت تغییر یافت." };
  } catch (error: any) {
    console.error("Error updating user:", error);
    if (error.code === "P2025") {
      // Prisma error: record not found
      return { error: "کاربر پیدا نشد." };
    }
    return { error: "خطا در بروزرسانی کاربر. لطفاً دوباره تلاش کنید." };
  }
};