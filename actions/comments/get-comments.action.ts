"use server";

import prisma from "@/lib/prisma";
import { GetCommentsParams } from "@/actions/shared.types";

export async function getComments(params: GetCommentsParams) {
  const { pageSize = 12, page = 1, status } = params;
  try {
    // Get the total number of Comments (regardless of filter)
    const totalComment = await prisma.comment.count();

    // Get the total count of filtered comments (for pagination)
    const filteredCommentCount = await prisma.comment.count({
      where: {
        status,
      },
    });

    const comments = await prisma.comment.findMany({
      //TODO: only select needed column
      where: {
        status,
      },
      include: {
        author: true,
        course: true,
        post: true,
        replies: true,
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: {
        createdAt: "desc",
      },
    });

    // Get the count of each status
    const statusCounts = await prisma.comment.groupBy({
      by: ["status"],
      _count: { status: true },
    });

    // Format status counts correctly
    const statusCountMap = statusCounts.reduce(
      (acc, item) => {
        acc[item.status] = item._count.status;
        return acc;
      },
      {
        PENDING: 0,
        APPROVED: 0,
        REJECTED: 0,
      },
    );

    return { totalComment, filteredCommentCount, statusCountMap, comments };
  } catch (error) {
    console.error(error);
    return { error: "خطایی در دریافت نظرات رخ داده است." };
  }
}