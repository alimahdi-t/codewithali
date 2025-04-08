import { z } from "zod";

export const CreateCommentSchema = z
  .object({
    content: z
      .string()
      .min(1, "متن نظر نمی‌تواند خالی باشد")
      .max(1000, "متن نظر نمی‌تواند بیشتر از ۱۰۰۰ کاراکتر باشد"),

    authorId: z.number(),
    courseId: z.number().optional(),
    postId: z.number().optional(),
    parentId: z.string().optional(), // for replies
  })
  .refine(
    (data) =>
      (data.courseId && !data.postId) || (!data.courseId && data.postId),
    {
      message: "نظر باید فقط به یکی از دوره یا پست مربوط باشد",
      path: ["courseId"], // This will mark courseId or postId depending on use
    },
  );