"use server";

import prisma from "@/lib/prisma";
import { GetAllPostsParams } from "@/actions/shared.types";

export async function getPostsAction(params: GetAllPostsParams) {
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
      case "oldest":
        orderByClause = { createAt: "asc" };
        break;
      case "newest":
      default:
        orderByClause = { createAt: "desc" };
        break;
    }

    const [posts, totalCount] = await Promise.all([
      prisma.post.findMany({
        where: whereClause,
        include: {
          author: true,
          tags: true,
        },
        orderBy: orderByClause,
        skip,
        take,
      }),
      prisma.post.count({
        where: whereClause,
      }),
    ]);

    return { posts, totalCount };
  } catch (error) {
    console.error("خطا در دریافت پست‌ها:", error);
    return { error: "خطا در دریافت پست‌ها" };
  }
}