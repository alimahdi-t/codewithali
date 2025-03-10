"use server";

import { z } from "zod";
import { EditUserSchema } from "@/schema/edit-user.schema";

import { currentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";

export const editUser = async (values: z.infer<typeof EditUserSchema>) => {
  const user = await currentUser();

  if (!user?.id) {
    return { error: "اجازه دسترسی ندارید!" };
  }

  const validatedFields = EditUserSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "ورودی نامعتبر هست!" };
  }

  const { email, bio, phoneNumber, lastName, firstName, username, imageUrl } =
    validatedFields.data;
  try {
    const existingEmail = await prisma.user.findUnique({
      where: { email: email },
    });
    if (user.email !== email) {
      if (existingEmail) {
        return { error: "ایمیل از قبل وجود دارد" };
      }
    }

    const updatedUser = await prisma.user.update({
      where: { id: parseInt(user.id) },
      data: validatedFields.data, // فقط فیلدهای معتبر به‌روزرسانی می‌شوند
    });

    return {
      success: "اطلاعات شما با موفقیت به‌روزرسانی شد!",
      data: updatedUser,
    };
  } catch (error) {
    return { error: "خطایی رخ داد! لطفاً دوباره تلاش کنید." };
  }
};