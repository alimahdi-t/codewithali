"use server";

import prisma from "@/lib/prisma";
import { z } from "zod";
import { CreateDiscountSchema } from "@/schema/create-discount.schema";
import { revalidatePath } from "next/cache";

export async function createDiscounts(
  values: z.infer<typeof CreateDiscountSchema>,
) {
  try {
    const validatedFields = CreateDiscountSchema.safeParse(values);
    if (!validatedFields.success) {
      return { error: "ورودی نامعتبر است!" };
    }

    const { percentage, startsAt, expiresAt, courseIds } = validatedFields.data;

    const expiresDate = new Date(expiresAt as Date);
    expiresDate.setHours(23, 59, 59, 999);

    // 1. Create new discount
    const discount = await prisma.discount.create({
      data: {
        percentage,
        expiresAt: expiresDate,
      },
    });

    // 2. Update selected courses with new discount
    const result = await prisma.course.updateMany({
      where: {
        id: { in: courseIds.map(Number) },
      },
      data: {
        discountId: discount.id,
      },
    });

    // 3. Find unused discount IDs
    const unusedDiscounts = await prisma.discount.findMany({
      where: {
        Course: {
          none: {}, // No courses attached
        },
        id: {
          not: discount.id, // Don't delete the one we just created
        },
      },
    });

    // 4. Delete those unused discounts
    const deletedDiscounts = await prisma.discount.deleteMany({
      where: {
        id: {
          in: unusedDiscounts.map((d) => d.id),
        },
      },
    });

    // 5. Revalidate cache
    revalidatePath("/dashboard/admin/discount-codes");

    return {
      success: `تخفیف جدید برای ${result.count} دوره ثبت شد و ${deletedDiscounts.count} تخفیف قدیمی حذف شد.`,
    };
  } catch (error) {
    console.error("خطا در ایجاد یا اعمال تخفیف:", error);
    return {
      error: "خطایی در ثبت تخفیف رخ داده است.",
    };
  }
}