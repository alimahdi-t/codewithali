import { z } from "zod";

export const DiscountTypeEnum = z.enum(["PERCENTAGE", "FLAT_AMOUNT"]);

export const CreateDiscountCodeSchema = z
  .object({
    code: z.string().min(1, "Code is required"),

    percentage: z.coerce.number().int().min(1).max(100).optional(),

    flatAmount: z.coerce.number().int().min(1).optional(),

    type: DiscountTypeEnum.default("PERCENTAGE"),

    expiresAt: z.coerce.date().optional(),

    usageLimit: z.coerce.number().int().positive().optional(),

    isActive: z.boolean().optional(),
    appliesToAll: z.boolean().optional(),

    minPurchase: z.coerce.number().int().positive().optional(),

    maxDiscount: z.coerce.number().int().positive().optional(),

    description: z.string().optional(),

    CourseDiscount: z
      .array(
        z.object({
          courseId: z.coerce.number().int(), // coerce here too
        }),
      )
      .optional(),
  })
  .refine(
    (data) => {
      return !(data.type === "FLAT_AMOUNT" && data.percentage !== undefined);
    },
    {
      message: "مقدار تخفیف درصدی برای نوع ثابت (FLAT) نباید وارد شود",
      path: ["percentage"],
    },
  )
  .refine(
    (data) => {
      return !(data.type === "PERCENTAGE" && data.percentage === undefined);
    },
    {
      message: "درصد تخفیف را وارد کنید",
      path: ["percentage"],
    },
  );