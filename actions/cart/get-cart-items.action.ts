"use server";

import prisma from "@/lib/prisma";

interface Props {
  cartItems: string[];
}

export async function getCartItems({ cartItems }: Props) {
  try {
    //TODO:Prevent getting cart items if user not logged in

    //TODO:include discount
    const items = await prisma.course.findMany({
      where: { id: { in: cartItems.map(Number) } },
      select: { id: true, title: true, price: true, imageUrl: true },
    });

    return { success: "اطلاعات سبد خرید با موفقیت دریافت شد.", data: items };
  } catch (error) {
    console.error("Error fetching cart items:", error);
    return { error: "خطایی در دریافت اطلاعات سبد خرید رخ داد!" };
  }
}