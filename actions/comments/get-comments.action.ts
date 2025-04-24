"use server";

import prisma from "@/lib/prisma";
import { GetCommentsParams } from "@/actions/shared.types";

// Define the enum manually if Prisma's enum import fails
type CommentStatus = "PENDING" | "APPROVED" | "REJECTED";

export async function getComments(params: GetCommentsParams) {
  const { pageSize = 12, page = 1, status } = params;

  try {
    const totalComment = await prisma.comment.count();

    const filteredCommentCount = await prisma.comment.count({
      where: { status },
    });

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
      orderBy: { createdAt: "desc" },
    });

    const statusCounts = await prisma.comment.groupBy({
      by: ["status"],
      _count: { status: true },
    });

    // Properly typed accumulator
    const statusCountMap = statusCounts.reduce(
      (acc: Record<CommentStatus, number>, item) => {
        acc[item.status as CommentStatus] = item._count.status;
        return acc;
      },
      {
        PENDING: 0,
        APPROVED: 0,
        REJECTED: 0,
      },
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