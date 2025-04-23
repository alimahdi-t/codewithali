"use server";

import { revalidatePath } from "next/cache";

import { convertToPersianNumbers } from "@/utils";
import prisma from "@/lib/prisma";

export async function deleteAllDiscount({ ids }: { ids: string[] }) {
  try {
    // 4. Revalidate pages

    const deleted = await prisma.discount.deleteMany({
      where: { id: { in: ids } },
    });

    revalidatePath("/dashboard/admin/discount-codes");
    revalidatePath("/courses");

    return {
      success: true,
      message: `${convertToPersianNumbers(
        deleted.count.toString(),
      )} تخفیف با موفقیت حذف شد.`,
    };
  } catch (error) {
    console.error("خطا در حذف تخفیف:", error);
    return { success: false, message: "خطایی در حذف تخفیف‌ها رخ داد." };
  }
}