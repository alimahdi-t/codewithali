"use server";

import { AddToCartParams } from "@/actions/shared.types";
import { currentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";

export const addToCart = async ({ id }: AddToCartParams) => {
  try {
    const user = await currentUser();

    if (!user) {
      return { warning: "لطفا ابتدا وارد حساب خود شوید." };
    }

    const existing = await prisma.cartItem.findUnique({
      where: {
        userId_courseId: {
          userId: Number(user.id),
          courseId: id,
        },
      },
    });

    if (existing) {
      return { warning: "این دوره در حال حاضر در سبد خرید شماست." };
    }

    await prisma.cartItem.create({
      data: {
        userId: Number(user.id),
        courseId: id,
      },
    });

    return { success: "دوره با موفقیت به سبد خرید اضافه شد." };
  } catch (error) {
    console.error("[AddToCart Error]", error);
    return { error: "مشکلی در افزودن به سبد خرید پیش آمد." };
  }
};