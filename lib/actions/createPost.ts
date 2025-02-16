"use server";

import { CreatePostParams } from "@/lib/actions/shared.types";
import prisma from "@/lib/prisma";
import { Post } from "@prisma/client";

export async function createPost(
  params: CreatePostParams,
): Promise<Post | { error: string }> {
  const { title, slug, content, imageUrl, tags, authorId } = params;
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

    return await prisma.post.create({
      data: {
        title,
        slug,
        content,
        imageUrl,
        authorId,
      },
    });
    // TODO: Add tags later
    // // If there are tags, link them in the PostTag table
    // if (tags?.length) {
    //   const tagConnections = tags.map((tagId) => ({
    //     post_id: post.id,
    //     tag_id: tagId,
    //   }));
    //
    //   await prisma.postTag.createMany({
    //     data: tagConnections,
    //   });
    // }
  } catch (error) {
    console.log("An Error occurred while creating new post.", error);
    return {
      error: "خطایی در هنگام ایجاد پست جدید رخ داد",
    };
  }
}
