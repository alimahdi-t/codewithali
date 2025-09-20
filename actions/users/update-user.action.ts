"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";
import { UserSchema } from "@/schema/UserSchema.schema";
import { revalidatePath } from "next/cache";

export const updateUserAction = async ({
  userId,
  values,
}: {
  userId: number;
  values: z.infer<typeof UserSchema>;
}) => {
  try {
    const validated = UserSchema.safeParse(values);
    if (!validated.success) {
      return { error: "ورودی نامعتبر است!" };
    }

    const { bio, email, firstName, lastName, username, phoneNumber, role } =
      validated.data;

    // Get current user
    const currentUser = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!currentUser) {
      return { error: "کاربر پیدا نشد." };
    }

    // Check for conflicts only if the field has changed and is not empty
    const conflict = await prisma.user.findFirst({
      where: {
        OR: [
          email && email !== currentUser.email ? { email } : undefined,
          username && username !== currentUser.username
            ? { username }
            : undefined,
          phoneNumber && phoneNumber !== currentUser.phoneNumber
            ? { phoneNumber }
            : undefined,
        ].filter(Boolean) as any[],
        NOT: { id: userId },
      },
    });

    if (conflict) {
      return {
        error: "ایمیل، نام کاربری یا شماره تلفن قبلاً استفاده شده است.",
      };
    }

    // Build the update object dynamically
    const updateData: any = {
      bio: bio || null,
      firstName,
      lastName,
      role,
      email: email === "" ? null : email,
      username: username === "" ? null : username,
      phoneNumber: phoneNumber === "" ? null : phoneNumber,
    };

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
    });

    revalidatePath("/dashboard/admin/users");

    return { success: "کاربر با موفقیت بروزرسانی شد.", updatedUser };
  } catch (error) {
    console.error("Error updating user:", error);
    return { error: "خطا در بروزرسانی کاربر. لطفاً دوباره تلاش کنید." };
  }
};