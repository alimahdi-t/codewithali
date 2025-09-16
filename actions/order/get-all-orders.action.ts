import prisma from "@/lib/prisma";

export async function getAllOrdersAction() {
  try {
    const boughtOrders = await prisma.order.findMany({
      include: {
        user: true,
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