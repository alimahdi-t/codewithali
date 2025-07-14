"use server";

import prisma from "@/lib/prisma";
import { calculateDiscount } from "@/utils";

interface Props {
  cartItems: string[];
  discountCode: string | undefined;
}

export async function getCartItems({ cartItems, discountCode }: Props) {
  try {
    console.log("server", discountCode);
    //TODO:Prevent getting cart items if user not logged in

    // Fetch selected cart items
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

    // Initialize global discount
    let globalDiscount: { percentage: number } | null = null;

    // If a discount code exists, fetch it
    if (discountCode) {
      const foundCode = await prisma.discountCode.findUnique({
        where: { code: discountCode },
      });

      if (
        foundCode &&
        (!foundCode.expiresAt || new Date(foundCode.expiresAt) > new Date())
      ) {
        globalDiscount = { percentage: foundCode.percentage ?? 0 };
      }
    }

    // Apply discount logic
    const data = items.map((item) => {
      const courseDiscountValid =
        item.discount &&
        (!item.discount.expiresAt ||
          new Date(item.discount.expiresAt) > new Date());
      const itemDiscount =
        globalDiscount?.percentage ??
        (courseDiscountValid ? item.discount?.percentage : 0);

      const discountedPrice = calculateDiscount(item.price, {
        percentage: itemDiscount,
      });

      return {
        ...item,
        discountAmount: item.price - discountedPrice,
      };
    });

    return {
      success: "اطلاعات سبد خرید با موفقیت دریافت شد.",
      data: data,
      totalPrice: data.reduce((sum, item) => sum + item.price, 0),
      totalDiscount: data.reduce((sum, item) => sum + item.discountAmount, 0),
      payableAmount: data.reduce(
        (sum, item) => sum + item.price - item.discountAmount,
        0,
      ),
    };
  } catch (error) {
    console.error("Error fetching cart items:", error);
    return { error: "خطایی در دریافت اطلاعات سبد خرید رخ داد!" };
  }
}