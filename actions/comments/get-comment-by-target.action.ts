"use server";

import prisma from "@/lib/prisma";
import { getCommentsByCourseIdParams } from "@/actions/shared.types";

export async function getCommentsByCourseId({
  targetId,
  targetType,
}: getCommentsByCourseIdParams) {
  // Initialize the base query filters
  const where: any = {
    status: "APPROVED", // Only approved comments
    parentId: null, // Only top-level comments (not replies)
  };

  // Dynamically add target-specific filter
  if (targetType === "course") {
    where.courseId = targetId;
  } else if (targetType === "post") {
    where.postId = targetId;
  } else {
    // If an unsupported targetType is passed
    return { error: "نوع هدف نامعتبر است." };
  }

  try {
    // Fetch comments from the database
    const comments = await prisma.comment.findMany({
      where,
      include: {
        author: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
        replies: {
          where: { status: "APPROVED" }, // Only approved replies
          include: {
            author: {
              select: {
                firstName: true,
                lastName: true,
                role: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc", // Newest comments first
      },
    });

    // Return the comments
    return { comments };
  } catch (error) {
    console.error(error);
    // Return a user-friendly error message
    return { error: "دریافت کامنت‌ها با خطا مواجه شد." };
  }
}