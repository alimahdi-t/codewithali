"use server";

import prisma from "@/lib/prisma";

export async function getComments() {
  try {
    const comments = await prisma.comment.findMany({
      //TODO: only select needed column
      include: {
        author: true,
        course: true,
        post: true,
        replies: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return { comments };
  } catch (error) {
    console.error(error);
    return { error: "خطایی در دریافت نظرات رخ داده است." };
  }
}