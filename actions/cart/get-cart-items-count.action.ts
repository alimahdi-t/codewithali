"use server";
// TODO: this not used currently
import { currentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";

export const getCartItemsCount = async () => {
  try {
    // Get the current authenticated user
    const user = await currentUser();

    // If there's no user logged in, return a count of 0
    if (!user) {
      return 0; // or null if you want to indicate "not logged in"
    }

    // Query the database to count the number of cart items for this user
    return await prisma.cartItem.count({
      where: {
        userId: Number(user.id),
      },
    });
  } catch (error) {
    console.error("[getCartItemsCountAction ERROR]", error);
    return 0;
  }
};