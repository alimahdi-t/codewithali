import prisma from "@/lib/prisma";

export async function getPurchasedCourseIds(userId: number): Promise<number[]> {
  const boughtOrders = await prisma.order.findMany({
    where: {
      OrderStatus: "PAID",
      user_id: userId,
    },
    select: {
      items: {
        select: {
          course_id: true,
        },
      },
    },
  });

  // Flatten course_ids from all orders into a single array
  const purchasedCourseIds = boughtOrders.flatMap((order) =>
    order.items.map((item) => item.course_id),
  );

  // Optionally, remove duplicates
  return Array.from(new Set(purchasedCourseIds));
}