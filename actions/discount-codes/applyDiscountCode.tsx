"use server";

import { ApplyDiscountCodeSchema } from "@/schema/apply-discount-code.schema";
import prisma from "@/lib/prisma";

export const applyDiscountCodeAction = async (values: { code: string }) => {
  const validatedFields = ApplyDiscountCodeSchema.safeParse(values);
  if (!validatedFields.success) {
    return {
      error:
        validatedFields.error.flatten().fieldErrors.code?.[0] ||
        "کد نامعتبر است",
    };
  }
  const { code } = validatedFields.data;
  const discount = await prisma.discountCode.findUnique({
    where: { code: code.toUpperCase() },
    include: { CourseDiscount: true },
  });

  if (!discount || !discount.isActive) {
    return { error: "کد تخفیف نامعتبر یا غیرفعال است" };
  }

  if (discount.expiresAt && new Date() > discount.expiresAt) {
    return { error: "تاریخ انقضای کد تخفیف گذشته است" };
  }

  if (discount.usageLimit && discount.usedCount >= discount.usageLimit) {
    return { error: "کد تخفیف به حداکثر استفاده رسیده است" };
  }

  return { success: "کد تخفیف اعمال شد", discount };
};