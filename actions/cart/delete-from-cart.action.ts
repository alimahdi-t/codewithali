"use server";

import { currentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { DeleteFromCartParams } from "@/actions/shared.types";
import { revalidatePath } from "next/cache";

export async function deleteFromCart({ courseId }: DeleteFromCartParams) {
  try {
    const user = await currentUser();

    if (!user) {
      return { warning: "لطفا ابتدا وارد حساب خود شوید." };
    }

    await prisma.cartItem.deleteMany({
      where: {
        userId: Number(user.id),
        courseId: courseId,
      },
    });

    revalidatePath("/checkout");

    return { success: "دوره با موفقیت از سبد خرید حذف شد." };
  } catch (error) {
    return {
      error: "مشکلی در حذف آیتم از سبد خرید پیش آمد.",
    };
  }
}