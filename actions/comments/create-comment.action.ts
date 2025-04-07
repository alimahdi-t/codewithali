"use server";

import { z } from "zod";
import { CreateCommentSchema } from "@/schema/create-comment.schema";
import prisma from "@/lib/prisma";

export async function createComment(
  values: z.infer<typeof CreateCommentSchema>,
) {
  const validatedFields = CreateCommentSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "ورودی نامعتبر هست!" };
  }

  const { content, postId, courseId, authorId, parentId } =
    validatedFields.data;

  try {
    if (courseId) {
      // 🔵 Create a comment for a course
      await prisma.comment.create({
        data: {
          content,
          course: { connect: { id: courseId } },
          author: { connect: { id: authorId } },
          parent: parentId ? { connect: { id: parentId } } : undefined,
        },
      });
    } else if (postId) {
      // 🟣 Create a comment for a post
      await prisma.comment.create({
        data: {
          content,
          post: { connect: { id: postId } },
          author: { connect: { id: authorId } },
          parent: parentId ? { connect: { id: parentId } } : undefined,
        },
      });
    } else {
      return { error: "کامنت باید به یک پست یا دوره تعلق داشته باشد." };
    }

    return { success: "نظر شما با موفقیت ثبت شد و منتظر تایید است." };
  } catch (error) {
    console.error(error);
    return { error: "خطایی هنگام ثبت نظر رخ داد." };
  }
}