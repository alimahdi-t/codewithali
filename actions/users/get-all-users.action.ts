"use server";

import prisma from "@/lib/prisma";

/**
 * Fetches all users from the database.
 *
 * This server action queries the `user` table and retrieves all user records.
 *
 * @returns {Promise<{ users?: any[]; error?: string }>}
 * - `users`: Array of user objects if the query succeeds.
 * - `error`: Persian error message if the query fails.
 */
export const getAllUsersAction = async () => {
  try {
    // Query all users from the database
    const users = await prisma.user.findMany({});

    // Return structured response with user data
    return { success: true, users };
  } catch (error) {
    console.error("Error fetching users:", error);

    // Return structured response with Persian error message
    return {
      error: "خطا در دریافت کاربران. لطفاً دوباره تلاش کنید.",
    };
  }
};