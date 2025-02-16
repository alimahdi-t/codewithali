import { z } from "zod";
import { Level, CourseStatus } from "@prisma/client";

export const NewCourseSchema = z.object({
  slug: z.string().min(1, "اسلاگ نمی‌تواند خالی باشد."),
  title: z.string().min(1, "عنوان نمی‌تواند خالی باشد."),
  description: z
    .string()
    .min(1, "توضیحات نمی‌تواند خالی باشد.")
    .max(500, "توضیحات نباید بیشتر از ۵۰۰ کاراکتر باشد."),
  content: z
    .string()
    .min(1, "محتوا نمی‌تواند خالی باشد.")
    .max(10000, "محتوا نباید بیشتر از ۱۰۰۰۰ کاراکتر باشد."),
  imageUrl: z.string().url("لینک تصویر معتبر نیست."),
  level: z.nativeEnum(Level, {
    errorMap: () => ({ message: "سطح نامعتبر است." }),
  }),
  status: z.nativeEnum(CourseStatus, {
    errorMap: () => ({ message: "وضعیت نامعتبر است." }),
  }),
  price: z.string().min(1, "قیمت نمی تواند خالی باشد"),
  instructorId: z.string().min(1, "شناسه مدرس نمی تواند خالی باشد"),
});
