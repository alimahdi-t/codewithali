import { z } from "zod";
import { Level, CourseStatus } from "@prisma/client";
import { extractTextFromHTML } from "@/utils";

export const NewCourseSchema = z.object({
  slug: z.string().min(1, "اسلاگ نمی‌تواند خالی باشد."),
  title: z.string().min(1, "عنوان نمی‌تواند خالی باشد."),
  description: z
    .string()
    .min(1, "توضیحات نمی‌تواند خالی باشد.")
    .max(500, "توضیحات نباید بیشتر از ۵۰۰ کاراکتر باشد."),
  content: z
    .string()
    .refine(
      (value) => {
        return extractTextFromHTML(value).trim().length >= 10;
      },
      {
        message: "محتوا باید حداقل ۱۰ کاراکتر باشد",
      },
    )
    .refine(
      (value) => {
        return extractTextFromHTML(value).trim().length <= 20000;
      },
      {
        message: "محتوا باید حداقل ۲۰۰۰۰ کاراکتر باشد",
      },
    ),
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
