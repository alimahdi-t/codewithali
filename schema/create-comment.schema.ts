import { z } from "zod";

export const CreateCommentSchema = z.object({
  content: z
    .string()
    .min(1, "متن نظر نمی‌تواند خالی باشد")
    .max(1000, "متن نظر نمی‌تواند بیشتر از ۱۰۰۰ کاراکتر باشد"),
  authorId: z.number(),
  parentId: z.string().optional(), // for replies
  targetId: z.number(),
  targetType: z.enum(["course", "post"]),
});