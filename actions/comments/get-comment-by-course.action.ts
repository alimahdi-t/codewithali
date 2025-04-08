"use server";

import prisma from "@/lib/prisma";
import { getCommentsByCourseIdParams } from "@/actions/shared.types";

export async function getCommentsByCourseId({
  courseId,
}: getCommentsByCourseIdParams) {
  try {
    const comments = await prisma.comment.findMany({
      where: {
        courseId: Number(courseId), // Make sure courseId is a number
        status: "APPROVED",
      },
      include: {
        author: true,
        replies: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return { comments };
  } catch (error) {
    console.error(error);
    return { error: "دریافت کامنت‌های دوره با خطا مواجه شد." };
  }
}