"use server";

import { z } from "zod";
import { CreateDiscountCodeSchema } from "@/schema/create-discount-code.schema";
import prisma from "@/lib/prisma";

export const createDiscountCodeAction = async (
  values: z.infer<typeof CreateDiscountCodeSchema>,
) => {
  try {
    const validatedFields = CreateDiscountCodeSchema.safeParse(values);

    if (!validatedFields.success) {
      return { error: "ورودی نامعتبر هست!" };
    }

    const {
      code,
      CourseDiscount,
      maxDiscount,
      description,
      percentage,
      flatAmount,
      appliesToAll,
      expiresAt,
      isActive,
      minPurchase,
      usageLimit,
      type,
    } = validatedFields.data;

    // Create the discount code
    const newDiscount = await prisma.discountCode.create({
      data: {
        code,
        percentage,
        flatAmount,
        type,
        expiresAt,
        usageLimit,
        isActive: isActive ?? true,
        appliesToAll: appliesToAll ?? true,
        minPurchase,
        maxDiscount,
        description,
        CourseDiscount: CourseDiscount?.length
          ? {
              create: CourseDiscount.map((cd) => ({
                courseId: cd.courseId,
              })),
            }
          : undefined,
      },
    });

    return { success: "کد تخفیف با موفقیت ایجاد شد" };
  } catch (error) {
    console.error("Error creating discount:", error);
    return {
      error: "خطایی در ایجاد کد تخفیف رخ داد",
    };
  }
};