import prisma from "@/lib/prisma";
import { currentUser } from "@/lib/auth";

export async function getUserPurchasedCoursesAction() {
  try {
    const user = await currentUser();

    if (!user) return null;
    const purchasedCourses = await prisma.orderItem.findMany({
      where: {
        order: {
          user_id: Number(user?.id),
          OrderStatus: "PAID", // Only paid orders
        },
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
      },
    });

    return purchasedCourses.map((item) => item.course);
  } catch (error) {
    console.log(error);
    return null;
  }
}