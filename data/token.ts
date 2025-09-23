import { v4 as uuidV4 } from "uuid";

import { getVerificationTokenByEmail } from "@/data/verification-token";
import prisma from "@/lib/prisma";

/**
 * Generates a new verification token for a given email.
 * - Removes any existing token for the same email (to keep only one active token).
 * - Creates a new token with a 1-hour expiration time.
 *
 * @param email The email address to generate the verification token for.
 * @returns The newly created verification token record.
 */
export const generateVerificationToken = async (email: string) => {
  // Generate a unique random token (UUID v4 here, can replace with nanoid/crypto)
  const token = uuidV4();

  // Set token expiration (1 hour from now)
  const expires = new Date(Date.now() + 3600 * 1000);

  // Check if a token already exists for this email
  const existingToken = await getVerificationTokenByEmail(email);
  if (existingToken) {
    // Delete the old token to avoid multiple active tokens for the same email
    await prisma.verificationToken.delete({
      where: { id: existingToken.id },
    });
  }

  // Create and store the new verification token in the database
  return await prisma.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });
};