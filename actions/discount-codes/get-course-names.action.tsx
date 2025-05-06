"use server";

import prisma from "@/lib/prisma";

export const getCourseNames = async () => {
  try {
    const response = await prisma.course.findMany({
      select: {
        id: true,
        title: true,
      },
    });

    return { success: true, data: response };
  } catch (error) {
    console.error("Error fetching course names:", error);
    return { success: false, error: "خطا در دریافت لیست دوره‌ها" };
  }
};