// app/api/verify-payment/route.ts

import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const orderId = Number(searchParams.get("orderId"));
  const status = searchParams.get("status"); // e.g., "OK", "FAILED"

  if (status === "OK") {
    await prisma.order.update({
      where: { id: orderId },
      data: { OrderStatus: "PAID" },
    });

    // Optional: Enroll user in purchased courses here

    return new Response("پرداخت موفقیت آمیز بود");
  }

  return new Response("پرداخت ناموفق بود", { status: 400 });
}