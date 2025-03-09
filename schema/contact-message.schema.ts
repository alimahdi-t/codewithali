import { z } from "zod";

export const ContactMessageSchema = z.object({
  fullName: z
    .string()
    .min(3, "نام باید حداقل ۳ کاراکتر باشد")
    .max(50, "نام نباید بیش از ۵۰ کاراکتر باشد"),
  email: z.string().email("ایمیل معتبر نیست"),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^09\d{9}$/.test(val), {
      message: "شماره موبایل معتبر نیست",
    }),
  title: z
    .string()
    .min(5, "موضوع باید حداقل ۵ کاراکتر باشد")
    .max(100, "موضوع نباید بیش از ۱۰۰ کاراکتر باشد"),
  message: z
    .string()
    .min(10, "پیام باید حداقل ۱۰ کاراکتر باشد")
    .max(1000, "پیام نباید بیش از ۱۰۰۰ کاراکتر باشد"),
});