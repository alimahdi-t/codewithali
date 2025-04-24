"use server";

import prisma from "@/lib/prisma";
import { GetCommentsParams } from "@/actions/shared.types";

// Define the enum inline (fallback for deployment issues)
type CommentStatus = "PENDING" | "APPROVED" | "REJECTED";

export async function getComments(params: GetCommentsParams) {
  const { pageSize = 12, page = 1, status } = params;

  try {
    // Get total comment count
    const totalComment = await prisma.comment.count();

    // Count filtered comments
    const filteredCommentCount = await prisma.comment.count({
      where: { status },
    });

    // Get paginated filtered comments
    const comments = await prisma.comment.findMany({
      where: { status },
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

    // Group by status
    const statusCounts = await prisma.comment.groupBy({
      by: ["status"],
      _count: { status: true },
    });

    // Create status count map
    const statusCountMap = statusCounts.reduce(
      (acc, item) => {
        acc[item.status as CommentStatus] = item._count.status;
        return acc;
      },
      {
        PENDING: 0,
        APPROVED: 0,
        REJECTED: 0,
      } as Record<CommentStatus, number>,
    );

    return {
      totalComment,
      filteredCommentCount,
      statusCountMap,
      comments,
    };
  } catch (error) {
    console.error(error);
    return { error: "خطایی در دریافت نظرات رخ داده است." };
  }
}