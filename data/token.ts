import { v4 as uuidV4 } from "uuid";
import prisma from "@/lib/prisma";

import { getVerificationTokenByEmail } from "@/data/verification-token";
import { getPasswordResetTokenByEmail } from "@/data/password-reset-token";

/**
 * ✅ Generates a **verification token** for email confirmation.
 *
 * 🧠 Logic:
 * 1. Creates a random unique token (UUID v4).
 * 2. Checks if a token already exists for the given email.
 * 3. If yes, deletes the old one (to keep only one active token per email).
 * 4. Creates and stores a new token with a 1-hour expiration.
 *
 * @param email - The email address to associate with the verification token.
 * @returns The newly created verification token record.
 */
export const generateVerificationToken = async (email: string) => {
  // Generate a unique random token
  const token = uuidV4();

  // Set the expiration time to 1 hour from now
  const expires = new Date(Date.now() + 3600 * 1000);

  // Check if there’s already a token for this email
  const existingToken = await getVerificationTokenByEmail(email);

  if (existingToken) {
    // Remove the previous token so we don’t have multiple active ones
    await prisma.verificationToken.delete({
      where: { id: existingToken.id },
    });
  }

  // Create a new token entry in the database
  return await prisma.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });
};

/**
 * ✅ Generates a **password reset token** for resetting forgotten passwords.
 *
 * 🧠 Logic:
 * 1. Creates a random unique token (UUID v4).
 * 2. Checks for an existing token for the email and removes it.
 * 3. Creates and stores a new token that expires in 1 hour.
 *
 * @param email - The email address requesting a password reset.
 * @returns The newly created password reset token record.
 */
export const generatePasswordResetToken = async (email: string) => {
  // Generate a unique token string
  const token = uuidV4();

  // Expire after 1 hour
  const expires = new Date(Date.now() + 3600 * 1000);

  // Check if there’s already a token for this email
  const existingToken = await getPasswordResetTokenByEmail(email);

  if (existingToken) {
    // Delete the old token
    await prisma.passwordResetToken.delete({
      where: { id: existingToken.id },
    });
  }

  // Create and return the new password reset token
  return await prisma.passwordResetToken.create({
    data: {
      email,
      token,
      expires,
    },
  });
};