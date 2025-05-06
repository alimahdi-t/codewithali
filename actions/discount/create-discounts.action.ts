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

    let updateCount = 0;

    // 1. Create a discount for each course
    for (const courseId of courseIds) {
      const discount = await prisma.discount.create({
        data: {
          percentage,
          startsAt: startsAt,
          expiresAt: expiresDate,
        },
      });

      await prisma.course.update({
        where: { id: Number(courseId) },
        data: {
          discountId: discount.id,
        },
      });

      updateCount++;
    }

    // 2. Delete unused discounts (not attached to any course)
    const unusedDiscounts = await prisma.discount.findMany({
      where: {
        Course: {
          none: {},
        },
      },
    });

    const deleted = await prisma.discount.deleteMany({
      where: {
        id: { in: unusedDiscounts.map((d) => d.id) },
      },
    });

    // 3. Revalidate
    revalidatePath("/dashboard/admin/discounts");

    return {
      success: `برای ${updateCount} دوره تخفیف جدید ثبت شد و ${deleted.count} تخفیف قدیمی حذف شد.`,
    };
  } catch (error) {
    console.error("خطا در ایجاد یا اعمال تخفیف:", error);
    return {
      error: "خطایی در ثبت تخفیف رخ داده است.",
    };
  }
}