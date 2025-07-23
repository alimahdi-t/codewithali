"use server";

import prisma from "@/lib/prisma";
import { Post, Tag, User } from "@/prisma/client";
import { GetAllPostsParams } from "@/actions/shared.types";

type PostWithRelations = Post & {
  author: User;
  tags: Tag[];
};

type GetPostsResponse = PostWithRelations[] | null;

export async function getPostsAction(
  params: GetAllPostsParams,
): Promise<GetPostsResponse> {
  try {
    const {
      page = 1,
      pageSize = 12,
      orderBy = "newest",
      searchQuery,
      categories,
    } = params;

    const skip = (page - 1) * pageSize;
    const take = pageSize;

    const whereClause: any = {};

    if (searchQuery) {
      whereClause.OR = [
        { title: { contains: searchQuery, mode: "insensitive" } },
        { content: { contains: searchQuery, mode: "insensitive" } },
      ];
    }

    if (categories && categories.length > 0) {
      whereClause.tags = {
        some: {
          slug: {
            in: categories,
          },
        },
      };
    }

    let orderByClause: any = {};

    switch (orderBy) {
      // case "comments":
      //   orderByClause = { _count: { Comment: "desc" } };
      //   break;
      case "oldest":
        orderByClause = { createAt: "asc" };
        break;
      case "newest":
      default:
        orderByClause = { createAt: "desc" };
        break;
    }

    const posts = await prisma.post.findMany({
      where: whereClause,
      include: {
        author: true,
        tags: true,
      },
      orderBy: orderByClause,
      skip,
      take,
    });

    return posts;
  } catch (error) {
    console.error("خطا در دریافت پست‌ها:", error);
    return null;
  }
}