"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";
import { UserSchema } from "@/schema/UserSchema.schema";
import { revalidatePath } from "next/cache";

/**
 * Update an existing user in the database.
 *
 * @param userId - ID of the user to update
 * @param values - User fields to update, validated against UserSchema
 * @returns {Promise<{success?: string; error?: string; updatedUser?: any}>}
 *          - success: message when update is successful
 *          - error: message when validation or DB operation fails
 *          - updatedUser: the updated user object (if success)
 */
export const updateUserAction = async ({
  userId,
  values,
}: {
  userId: number;
  values: z.infer<typeof UserSchema>;
}): Promise<{ success?: string; error?: string; updatedUser?: any }> => {
  try {
    // Validate incoming data against schema
    const validatedFields = UserSchema.safeParse(values);

    if (!validatedFields.success) {
      return { error: "ورودی نامعتبر هست!" };
    }

    // Extract validated fields (only safe data goes to DB)
    const { bio, email, firstName, lastName, username, phoneNumber, role } =
      validatedFields.data;

    // Perform database update
    const updatedUser = await prisma.user.update({
      where: {
        id: Number(userId),
      },
      data: {
        bio,
        email,
        firstName,
        lastName,
        username,
        phoneNumber,
        role,
      },
    });
    revalidatePath("/dashboard/admin/users");
    // Return structured success response
    return {
      success: "کاربر با موفقیت بروزرسانی شد.",
      updatedUser,
    };
  } catch (error) {
    console.error("Error updating user:", error);

    // Return structured error response
    return {
      error: "خطا در بروزرسانی کاربر. لطفاً دوباره تلاش کنید.",
    };
  }
};