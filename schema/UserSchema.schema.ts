import { z } from "zod";
import { Role } from "@/prisma/client";

export const UserSchema = z.object({
  username: z
    .string()
    .optional()
    .refine((val) => !val || /^[a-zA-Z0-9][a-zA-Z0-9_]*$/.test(val), {
      message:
        "نام کاربری باید فقط شامل حروف انگلیسی، اعداد و _ باشد و نباید با عدد شروع شود.",
    }),

  firstName: z
    .string()
    .min(1, "نام نباید خالی باشد")
    .max(32, "نام نباید بیشتر از ۳۲ کاراکتر باشد"),

  lastName: z
    .string()
    .min(1, "نام خانوادگی نباید خالی باشد")
    .max(32, "نام خانوادگی نباید بیشتر از ۳۲ کاراکتر باشد"),

  email: z.string().email("ایمیل معتبر نیست"),

  phoneNumber: z
    .optional(z.string())
    .refine((val) => !val || (val.startsWith("09") && val.length === 11), {
      message: "شماره تلفن باید شروع با 09 و طول آن باید ۱۱ رقم باشد.",
    }),

  bio: z
    .optional(z.string())
    .refine((val) => !val || (val.length > 20 && val.length < 500), {
      message: "بیو باید بیشتر از ۲۰ و کمتر از ۵۰۰ کاراکتر باشد.",
    }),
  role: z.nativeEnum(Role),
});