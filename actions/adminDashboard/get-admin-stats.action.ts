"use server";

import prisma from "@/lib/prisma";
import { CommentStatus, MessageStatus } from "@/prisma/client";

export const getAdminStatsAction = async (): Promise<AdminStats> => {
  try {
    const [usersCount, coursesCount, ordersCount, postCount] =
      await Promise.all([
        prisma.user.count(), // total users
        prisma.course.count(), // total courses
        prisma.order.count(), // total orders
        prisma.post.count(), // total posts
      ]);

    // Get the count of each status
    const commentStatusCounts = await prisma.comment.groupBy({
      by: ["status"],
      _count: { status: true },
    });

    // Format status counts correctly
    const commentStatusCountMap = commentStatusCounts.reduce(
      (acc, item) => {
        acc[item.status] = item._count.status;
        return acc;
      },
      {
        [CommentStatus.PENDING]: 0,
        [CommentStatus.APPROVED]: 0,
        [CommentStatus.REJECTED]: 0,
      },
    );

    // Get the count of each status
    const messageStatusCounts = await prisma.contactMessage.groupBy({
      by: ["status"],
      _count: { status: true },
    });

    // Format status counts correctly
    const messageStatusCountMap = messageStatusCounts.reduce(
      (acc, item) => {
        acc[item.status] = item._count.status;
        return acc;
      },
      {
        [MessageStatus.PENDING]: 0,
        [MessageStatus.IN_PROGRESS]: 0,
        [MessageStatus.RESOLVED]: 0,
      },
    );

    return {
      usersCount,
      coursesCount,
      ordersCount,
      postCount,
      commentStatusCountMap,
      messageStatusCountMap,
    };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch admin stats");
  }
};

export type AdminStats = {
  usersCount: number;
  coursesCount: number;
  ordersCount: number;
  postCount: number;
  commentStatusCountMap: Record<CommentStatus, number>;
  messageStatusCountMap: Record<MessageStatus, number>;
};