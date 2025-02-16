import { z } from "zod";

export const CreatePostSchema = z.object({
  slug: z
    .string()
    .min(3, "Slug باید حداقل ۳ کاراکتر باشد")
    .max(100, "Slug نباید بیشتر از ۱۰۰ کاراکتر باشد")
    .regex(/^[a-z0-9-]+$/, "Slug فقط می‌تواند شامل حروف کوچک، اعداد و - باشد"),
  title: z
    .string()
    .min(3, "عنوان باید حداقل ۳ کاراکتر باشد")
    .max(255, "عنوان نباید بیشتر از ۲۵۵ کاراکتر باشد"),
  content: z
    .string()
    .min(10, "محتوا باید حداقل ۱۰ کاراکتر باشد")
    .max(10000, "محتوا باید حداقل ۱۰۰۰۰ کاراکتر باشد"),
  imageUrl: z.string().url("آدرس تصویر معتبر نیست"),
  authorId: z.string().min(1, "شناسه نویسنده باید عدد صحیح باشد"),
  tags: z.array(z.number().int().positive()).optional(),
});
