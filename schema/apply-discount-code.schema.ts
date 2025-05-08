import { z } from "zod";

export const ApplyDiscountCodeSchema = z.object({
  code: z.string().min(1, "کد تخفیف را وارد کنید"),
});