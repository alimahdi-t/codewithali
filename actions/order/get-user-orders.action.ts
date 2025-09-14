import prisma from "@/lib/prisma";
import { currentUser } from "@/lib/auth";

/**
 * Fetches all orders for the currently authenticated user.
 *
 * Each order includes only the purchased course IDs.
 *
 * @returns {Promise<{ orders?: { items: { course_id: number }[] }[], error?: string }>}
 *          - `orders` : Array of user's orders with purchased courses.
 *          - `error`  : Error message if user not found or other failure occurs.
 */
export async function getUserOrdersAction() {
  try {
    const user = await currentUser();
    if (!user) {
      return { error: "کاربری پیدا نشد." };
    }

    const boughtOrders = await prisma.order.findMany({
      where: {
        user_id: Number(user.id),
      },
      include: {
        items: true,
      },
      orderBy: {
        createdAt: "desc", // optional: latest orders first
      },
    });

    return { orders: boughtOrders };
  } catch (error) {
    console.error("❌ Failed to fetch user orders:", error);
    return { error: "مشکلی در دریافت سفارشات شما رخ داد." };
  }
}