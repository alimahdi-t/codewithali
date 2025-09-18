"use server";

import prisma from "@/lib/prisma";
import { UpdatePostParams } from "@/actions/shared.types";

export async function updatePost(params: UpdatePostParams) {
  try {
    const {
      id,
      title,
      slug,
      content,
      imageUrl,
      readingTime,
      isEditorPick,
      tags,
      authorId,
    } = params;

    const updatedPost = await prisma.post.update({
      where: {
        id,
      },
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
    return { success: `مقاله با موفقیت ویرایش شد.`, updatedPost };
  } catch (error) {
    console.log("An Error occurred while updating post.", error);
    return {
      error: "خطایی در هنگام ویرایش مقاله رخ داد.",
    };
  }
}