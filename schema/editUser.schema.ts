import { z } from "zod";

export const EditUserSchema = z.object({
  username: z
    .string()
    .min(3, "نام کاربری باید حداقل ۳ کاراکتر باشد")
    .max(32, "نام کاربری نباید بیشتر از ۳۲ کاراکتر باشد")
    .optional(),
  firstName: z
    .string()
    .min(1, "نام نباید خالی باشد")
    .max(32, "نام نباید بیشتر از ۳۲ کاراکتر باشد")
    .optional(),
  lastName: z
    .string()
    .min(1, "نام خانوادگی نباید خالی باشد")
    .max(32, "نام خانوادگی نباید بیشتر از ۳۲ کاراکتر باشد")
    .optional(),
  imageUrl: z.string().url("آدرس تصویر معتبر نیست").optional(),
  email: z.string().email("ایمیل معتبر نیست").optional(),
  phoneNumber: z
    .string()
    .min(10, "شماره تلفن باید حداقل ۱۰ رقم باشد")
    .max(15, "شماره تلفن نباید بیشتر از ۱۵ رقم باشد")
    .optional(),
  bio: z
    .string()
    .max(500, "بیوگرافی نباید بیشتر از ۵۰۰ کاراکتر باشد")
    .optional(),
});