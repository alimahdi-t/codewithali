"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

/**
 * Deletes one or more discount codes by their IDs.
 *
 * Steps:
 * 1. Remove related records from DiscountCodeCourse for all given discount codes.
 * 2. Delete the discount codes themselves.
 * 3. Revalidate the discount codes admin page.
 *
 * @param {Object} params - The input parameters.
 * @param {string[]} params.discountCodeId - An array of discount code IDs to delete.
 *
 * @returns {Promise<{ success?: string; error?: string; deletedDiscount?: any }>}
 */
export const deleteDiscountCodeAction = async ({
  discountCodeId,
}: {
  discountCodeId: string[];
}) => {
  try {
    // Step 1: Remove relations (does NOT delete courses themselves)
    await prisma.discountCodeCourse.deleteMany({
      where: { discountCodeId: { in: discountCodeId } },
    });

    // Step 2: Delete discount codes
    const deletedDiscount = await prisma.discountCode.deleteMany({
      where: { id: { in: discountCodeId } },
    });

    // Step 3: Revalidate page
    revalidatePath("/admin/discount-codes");

    return {
      success:
        discountCodeId.length > 1
          ? "کدهای تخفیف با موفقیت حذف شدند."
          : "کد تخفیف با موفقیت حذف شد.",
      deletedDiscount,
    };
  } catch (error) {
    console.error("Error deleting discount code(s):", error);

    return {
      error: "خطا در حذف کد تخفیف. لطفاً دوباره تلاش کنید.",
    };
  }
};