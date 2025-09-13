"use server";

import prisma from "@/lib/prisma";
import { GetAllCoursesParams } from "@/actions/shared.types";
import { Level } from "@/prisma/client";

export async function getCourses(params: GetAllCoursesParams) {
  try {
    const {
      page = 1,
      pageSize = 12,
      categories,
      isFree,
      isPreOrder,
      orderBy = "newest",
      levels,
      searchQuery,
    } = params;

    const orderOptions: Record<string, any> = {
      newest: { createdAt: "desc" },
      oldest: { createdAt: "asc" },
      cheapest: { price: "asc" },
      mostExpensive: { price: "desc" },
    };

    const filters: any = {};

    if (isFree) filters.price = 0;
    if (isPreOrder) filters.status = "PREORDER";
    if (levels)
      filters.level = { in: Array.isArray(levels) ? levels : [levels] };
    if (categories)
      filters.tag = {
        some: {
          tagId: { in: Array.isArray(categories) ? categories : [categories] },
        },
      };
    if (searchQuery) {
      filters.OR = [
        { title: { contains: searchQuery, mode: "insensitive" } },
        { description: { contains: searchQuery, mode: "insensitive" } },
      ];
    }

    const [courses, totalCoursesCount] = await Promise.all([
      prisma.course.findMany({
        where: filters,
        orderBy: orderOptions[orderBy] || { createdAt: "desc" },
        include: {
          instructor: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              username: true,
              imageUrl: true,
            },
          },
          discount: {
            where: {
              OR: [
                { expiresAt: null }, // تخفیف بدون تاریخ انقضا
                { expiresAt: { gte: new Date() } }, // تخفیف هنوز منقضی نشده
              ],
            },
          },
        },

        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
      prisma.course.count({
        where: filters,
      }),
    ]);

    // Get the count of each status
    const levelCounts = await prisma.course.groupBy({
      by: ["level"],
      _count: { level: true },
    });

    // Format status counts correctly
    const levelCountMap = levelCounts.reduce(
      (acc, item) => {
        acc[item.level] = item._count.level;
        return acc;
      },
      {
        [Level.BEGINNER]: 0,
        [Level.ADVANCED]: 0,
        [Level.EXPERT]: 0,
      },
    );

    return { courses, totalCoursesCount, levelCountMap };
  } catch (error) {
    throw new Error(`Error fetching courses: ${error}`);
  }
}