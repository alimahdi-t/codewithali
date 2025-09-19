"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

/**
 * Deletes a discount code by its ID.
 *
 * This server action removes the discount code record from the database,
 * triggers revalidation of the discount codes admin page, and returns
 * a structured response with a success or error message.
 *
 * @param {Object} params - The input parameters.
 * @param {string} params.discountCodeId - The unique identifier of the discount code to delete.
 *
 * @returns {Promise<{ success?: string; error?: string; deletedDiscount?: any }>}
 * Returns an object containing either:
 * - `success` (Persian message) and the deleted discount code object, OR
 * - `error` (Persian message) if deletion fails.
 */
export const deleteDiscountCodeAction = async ({
  discountCodeId,
}: {
  discountCodeId: string;
}) => {
  try {
    // Attempt to delete the discount code from the database
    const deletedDiscount = await prisma.discountCode.delete({
      where: {
        id: discountCodeId,
      },
    });

    // Revalidate the discount codes admin page to reflect changes
    revalidatePath("/admin/discount-codes");

    return {
      success: "کد تخفیف با موفقیت حذف شد.",
      deletedDiscount,
    };
  } catch (error) {
    console.error("Error deleting discount code:", error);

    return {
      error: "خطا در حذف کد تخفیف. لطفاً دوباره تلاش کنید.",
    };
  }
};