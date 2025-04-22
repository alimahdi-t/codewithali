"use server";

import prisma from "@/lib/prisma";

export async function getDiscount() {
  try {
    const data = await prisma.course.findMany({
      select: {
        id: true,
        title: true,
        imageUrl: true,
        slug: true,
        instructor: {
          select: {
            firstName: true,
            lastName: true,
            username: true,
          },
        },
        discount: true,
      },
      orderBy: {
        id: "asc",
      },
    });
    return { data };
  } catch (error) {
    console.error(error);
    return { error: "خطایی در دریافت رخ داده است." };
  }
}