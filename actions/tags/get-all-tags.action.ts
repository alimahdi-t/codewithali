"use server";

import prisma from "@/lib/prisma";

/**
 * Fetch all tags from the database.
 *
 * @returns {Promise<{ success?: boolean; error?: string; tags?: any[] }>}
 * - success: Indicates if the operation was successful
 * - error: Persian error message if fetching fails
 * - tags: Array of tags retrieved from the database
 *
 * @example
 * const response = await getAllTagsAction();
 * if (response.success) {
 *   console.log(response.tags);
 * } else {
 *   console.error(response.error);
 * }
 */
export const getAllTagsAction = async () => {
  try {
    // Retrieve all tags from the database
    const tags = await prisma.tag.findMany();

    return {
      success: true,
      tags,
    };
  } catch (error: any) {
    console.error("Error fetching tags:", error);

    return {
      success: false,
      error: error.message
        ? `خطا در دریافت برچسب‌ها: ${error.message}`
        : "خطایی در دریافت برچسب‌ها رخ داد. لطفاً دوباره تلاش کنید.",
    };
  }
};