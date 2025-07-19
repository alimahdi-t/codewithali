import { z } from "zod";
import { extractTextFromHTML } from "@/utils";

// TODO add rule the slug can have question mark

export const CreatePostSchema = z.object({
  slug: z
    .string()
    .min(5, "Slug باید حداقل ۵ کاراکتر باشد")
    .max(100, "Slug نباید بیشتر از ۱۰۰ کاراکتر باشد")
    .refine((value) => !/\s/.test(value), {
      message: "اسلاگ نباید شامل فاصله باشد",
    })
    .refine((value) => /^[a-z0-9-]+$/.test(value), {
      message:
        "اسلاگ فقط می‌تواند شامل حروف کوچک انگلیسی، اعداد و خط تیره باشد",
    })
    .refine((value) => !value.startsWith("-") && !value.endsWith("-"), {
      message: "اسلاگ نمی‌تواند با خط تیره شروع یا تمام شود",
    })
    .refine((value) => !value.includes("--"), {
      message: "اسلاگ نمی‌تواند شامل دو خط تیره پشت سر هم باشد",
    }),

  title: z
    .string()
    .min(3, "عنوان باید حداقل ۳ کاراکتر باشد")
    .max(255, "عنوان نباید بیشتر از ۲۵۵ کاراکتر باشد"),
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
        return extractTextFromHTML(value).trim().length <= 10000;
      },
      {
        message: "محتوا باید حداقل ۱۰۰۰۰ کاراکتر باشد",
      },
    ),
  imageUrl: z.string().url("آدرس تصویر معتبر نیست"),
  authorId: z.string().min(1, "شناسه نویسنده باید عدد صحیح باشد"),
  tags: z.array(z.number().int().positive()).optional(),
  readingTime: z
    .string()
    .min(1, "زمان مطالیه نباید خالی باشد")
    .regex(/^[0-9-]+$/, "فقط میتواند شامل اعداد باشد"),
  isEditorPick: z.boolean(),
});