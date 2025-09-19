"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function deleteDiscount({ id }: { id: string }) {
  try {
    await prisma.discount.delete({
      where: { id: id },
    });

    revalidatePath("/dashboard/admin/discounts");
    revalidatePath("/courses");

    return { success: true, message: "تخفیف با موفقیت حذف شد" };
  } catch (error) {
    console.error("خطا در حذف تخفیف:", error);
    return { success: false, message: "خطایی در حذف تخفیف رخ داد." };
  }
}