import { z } from "zod";

export const CreateDiscountSchema = z.object({
  percentage: z
    .number({ required_error: "درصد تخفیف الزامی است." })
    .min(1, "حداقل مقدار باید ۱ باشد.")
    .max(100, "حداکثر مقدار باید ۱۰۰ باشد."),
  startsAt: z
    .union([z.string().datetime("فرمت تاریخ معتبر نیست."), z.date(), z.null()])
    .optional(),
  expiresAt: z
    .union([z.string().datetime("فرمت تاریخ معتبر نیست."), z.date(), z.null()])
    .optional(),
  courseIds: z
    .array(z.string(), {
      required_error: "انتخاب حداقل یک دوره الزامی است.",
    })
    .min(1, "حداقل یک دوره باید انتخاب شود."),
});