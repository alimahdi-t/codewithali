"use server";

import prisma from "@/lib/prisma";
import { Prisma } from "@/prisma/client";

export async function getEditorPickPosts() {
  try {
    const editorPickPosts = await prisma.post.findMany({
      select: {
        id: true,
        slug: true,
        title: true,
        imageUrl: true,
        createAt: true,
      },
      where: {
        isEditorPick: true,
      },
      take: 10,
    });
    return { editorPickPosts };
  } catch (error) {
    console.error("خطا در دریافت پست‌ها:", error);
    return { error: "خطا در دریافت پست‌های منتخب" };
  }
}

export type EditorPickPostType = Prisma.PostGetPayload<{
  select: {
    id: true;
    slug: true;
    title: true;
    imageUrl: true;
    createAt: true;
  };
}>;