"use server";

import prisma from "@/lib/prisma";

export const getAdminStatsAction = async () => {
  try {
    const [usersCount, coursesCount, ordersCount, postCount] =
      await Promise.all([
        prisma.user.count(), // total users
        prisma.course.count(), // total courses
        prisma.order.count(), // total orders
        prisma.post.count(), // total posts
      ]);

    return {
      usersCount,
      coursesCount,
      ordersCount,
      postCount,
    };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch admin stats");
  }
};