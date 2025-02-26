"use server";

import prisma from "@/lib/prisma";
import { Post, Tag, User } from "@prisma/client";

type PostWithRelations = Post & {
  author: User;
  tags: Tag[];
};

type GetPostsResponse = PostWithRelations[] | null;

export async function getPosts(): Promise<GetPostsResponse> {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
        tags: true,
      },
    });
    return posts; // حالا تایپ خروجی با `GetPostsResponse` هماهنگ است.
  } catch (error) {
    console.error("خطا در دریافت پست‌ها:", error);
    return null;
  }
}
