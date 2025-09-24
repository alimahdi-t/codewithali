"use server";

import { z } from "zod";
import { ResetSchema } from "@/schema";
import { getUserByEmail } from "@/data/user";
import { generatePasswordResetToken } from "@/data/token";
import { sendResetPasswordEmail } from "@/emails/mail";

/**
 * Handles the "Forgot Password" reset flow.
 *
 * - Validates the submitted email using Zod schema.
 * - Checks if a user exists with the given email.
 * - Generates a password reset token (valid for 1 hour).
 * - Sends the password reset email with a reset link containing the token.
 *
 * @param values - Form data containing the email field.
 * @returns An object with a success or error message (in Persian).
 */
export const reset = async (values: z.infer<typeof ResetSchema>) => {
  try {
    // Validate the form input against the ResetSchema
    const validatedFields = ResetSchema.safeParse(values);

    if (!validatedFields.success) {
      return { error: "ایمیل وارد شده معتبر نیست!" }; // Invalid email format
    }

    const { email } = validatedFields.data;

    // Check if a user exists with the given email
    const existingUser = await getUserByEmail(email);

    if (!existingUser) {
      return { error: "کاربری با این ایمیل یافت نشد!" }; // No user found with this email
    }

    // Generate a unique password reset token for this email
    const passwordResetToken = await generatePasswordResetToken(email);

    // Send a reset password email containing the token link
    await sendResetPasswordEmail(
      passwordResetToken.email,
      passwordResetToken.token,
    );

    // Return success message in Persian
    return { success: "ایمیل بازیابی رمز عبور با موفقیت ارسال شد!" };
  } catch (error) {
    console.error("خطا در فرآیند بازیابی رمز عبور:", error);

    // Return a generic error message for unexpected failures
    return { error: "خطایی در ارسال ایمیل بازیابی رمز عبور رخ داد!" };
  }
};