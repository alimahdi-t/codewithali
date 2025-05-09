"use server";

import prisma from "@/lib/prisma";
import { calculateDiscount } from "@/utils";

interface Props {
  cartItems: string[];
  discountCode: string | undefined;
}

export async function getCartItems({ cartItems, discountCode }: Props) {
  try {
    //TODO:Prevent getting cart items if user not logged in
    const items = await prisma.course.findMany({
      where: { id: { in: cartItems.map(Number) } },
      select: {
        id: true,
        title: true,
        price: true,
        imageUrl: true,
        discount: true,
      },
    });
    console.log("DISCOUNT", discountCode);

    if (discountCode) {
      const d = prisma.discountCode.findUnique({
        where: { code: discountCode },
      });
    }

    const data = items.map((item) => {
      return {
        ...item,
        discountAmount:
          item.price -
          calculateDiscount(item.price, {
            percentage: item.discount?.percentage,
          }),
      };
    });
    return { success: "اطلاعات سبد خرید با موفقیت دریافت شد.", data: data };
  } catch (error) {
    console.error("Error fetching cart items:", error);
    return { error: "خطایی در دریافت اطلاعات سبد خرید رخ داد!" };
  }
}