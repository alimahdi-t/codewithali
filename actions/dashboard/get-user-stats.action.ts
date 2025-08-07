import prisma from "@/lib/prisma";
import { currentUser } from "@/lib/auth";

/**
 * Fetches statistics for the currently authenticated user:
 * - Total number of unique purchased courses.
 * - Latest 4 purchased courses.
 *
 * A course is considered "purchased" if it's included in a PAID order.
 *
 * @returns {Promise<{ count: number, latest: typeof course[] } | null>}
 *          Object with total count and latest 4 courses, or null if unauthenticated or error occurs.
 */
export async function getUserStatsAction() {
  try {
    const user = await currentUser();
    if (!user) {
      console.warn("[UserStats] No user logged in.");
      return { error: "برای مشاهده آمار، لطفاً وارد حساب کاربری خود شوید." };
    }

    // Fetch all order items with PAID status for the current user
    const paidOrderItems = await prisma.orderItem.findMany({
      where: {
        order: {
          user_id: Number(user.id),
          OrderStatus: "PAID",
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      select: {
        course: {
          select: {
            id: true,
            title: true,
            imageUrl: true,
            slug: true,
            description: true,
            instructor: {
              select: {
                imageUrl: true,
                firstName: true,
                lastName: true,
                username: true,
              },
            },
          },
        },
        createdAt: true,
      },
    });

    // Remove potential duplicate courses (in case user purchased the same course multiple times)
    const uniqueCoursesMap = new Map<
      number,
      (typeof paidOrderItems)[0]["course"]
    >();
    for (const item of paidOrderItems) {
      if (!uniqueCoursesMap.has(item.course.id)) {
        uniqueCoursesMap.set(item.course.id, item.course);
      }
    }
    const uniqueCourses = Array.from(uniqueCoursesMap.values());

    return {
      success: "success",
      count: uniqueCourses.length,
      latest: uniqueCourses.slice(0, 4),
    };
  } catch (error) {
    console.error("[UserStats] Failed to fetch stats:", error);
    return { error: "خطا در دریافت اطلاعات. لطفاً بعداً دوباره تلاش کنید." };
  }
}