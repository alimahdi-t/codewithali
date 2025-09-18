"use server";

import { CreatePostParams } from "@/actions/shared.types";
import prisma from "@/lib/prisma";

export async function createPostAction(params: CreatePostParams) {
  const {
    title,
    slug,
    content,
    imageUrl,
    tags,
    authorId,
    isEditorPick,
    readingTime,
  } = params;
  try {
    // First Check if the slug is already exists
    const doesSlugExists = await prisma.post.findFirst({
      where: {
        slug,
      },
    });

    if (doesSlugExists) {
      return {
        error: "این Slug از قبل وجود دارد.",
      };
    }

    const newPost = await prisma.post.create({
      data: {
        title,
        slug,
        content,
        imageUrl,
        authorId,
        isEditorPick,
        readingTime,
        tags: {
          connect: tags?.map((tagId) => ({ id: tagId })) ?? [],
        },
      },
      include: {
        tags: true,
      },
    });
    return { success: "مقاله با موفقیت ایجاد شد.", newPost };
  } catch (error) {
    console.log("An Error occurred while creating new post.", error);
    return {
      error: "خطایی در هنگام ایجاد پست جدید رخ داد",
    };
  }
}