"use server";

import { GetPostParams } from "@/actions/shared.types";
import prisma from "@/lib/prisma";
import { Post } from "@prisma/client";

export async function getPost({ slug }: GetPostParams): Promise<Post | null> {
  try {
    return await prisma.post.findFirst({
      where: {
        slug,
      },
    });
  } catch (error) {
    console.error("خطا در دریافت پست:", error);
    return null;
  }
}