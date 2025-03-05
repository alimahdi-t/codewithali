import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email("ایمیل نامعتبر است"),
  password: z.string().min(1, "رمز عبور نمی تواند خالی باشد"),
});