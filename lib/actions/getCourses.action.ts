"use server";

import prisma from "@/lib/prisma";
import { GetAllCoursesParams } from "@/lib/actions/shared.types";

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

    // تنظیم نوع مرتب‌سازی
    const orderOptions: Record<string, any> = {
      newest: { createdAt: "desc" },
      oldest: { createdAt: "asc" },
      cheapest: { price: "asc" },
      mostExpensive: { price: "desc" },
    };

    // فیلترهای داینامیک
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

    // دریافت داده‌ها از دیتابیس
    const courses = await prisma.course.findMany({
      where: filters,
      orderBy: orderOptions[orderBy] || { createdAt: "desc" },
      include: {
        instructor: true,
        tag: true,
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    return courses;
  } catch (error) {
    throw new Error(`Error fetching courses: ${error}`);
  }
}
