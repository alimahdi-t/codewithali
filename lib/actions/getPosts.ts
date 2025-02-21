"use server";

import prisma from "@/lib/prisma";
// TODO: Add params
// TODO: Add fetching tags functionality
// TODO: error handling
// TODO: handle advanced query
export async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      include: {
        author: true,
        tags: true,
      },
    });
    return posts;
  } catch (error) {
    console.log("Error fetching posts", error);
  }
}
