"use server";

import { GetPostParams } from "@/actions/shared.types";
import prisma from "@/lib/prisma";

export async function getPost({ slug }: GetPostParams) {
  try {
    return await prisma.post.findFirst({
      where: {
        slug,
      },
      include: {
        author: true,
      },
    });
  } catch (error) {
    console.error("خطا در دریافت پست:", error);
    return null;
  }
}