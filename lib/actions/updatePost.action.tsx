"use server";

import prisma from "@/lib/prisma";
import { UpdatePostParams } from "@/lib/actions/shared.types";
import { Post } from "@prisma/client";

export async function updatePost(
  params: UpdatePostParams,
): Promise<Post | { error: string }> {
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

    return await prisma.post.update({
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
  } catch (error) {
    console.log("An Error occurred while updating post.", error);
    return {
      error: "خطایی در هنگام ویرایش مقاله رخ داد",
    };
  }
}
