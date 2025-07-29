"use server";

import { AddToCartParams } from "@/actions/shared.types";
import { currentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { getPurchasedCourseIds } from "@/actions/order/get-purchased-course-ids.action";

/**
 * Adds a course to the authenticated user's cart.
 *
 * Prevents adding a course if:
 * - The user is not authenticated.
 * - The course is already in the cart.
 * - The user has already purchased the course.
 *
 * @param {AddToCartParams} params - Object containing the course ID to add.
 * @returns {Promise<{success?: string; warning?: string; error?: string}>} - Result message.
 */
export const addToCart = async ({ id }: AddToCartParams) => {
  try {
    // 1. Get the currently logged-in user
    const user = await currentUser();

    // 2. If no user logged in, return a warning message
    if (!user || !user.id) {
      return { warning: "لطفا ابتدا وارد حساب خود شوید." };
    }

    const userId = Number(user.id);

    // 3. Check if the course is already in the user's cart
    const existing = await prisma.cartItem.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId: id,
        },
      },
    });

    // 4. Retrieve the list of courses the user has already purchased
    const purchasedCourses = await getPurchasedCourseIds(userId);

    // 5.1 If the course is already purchased, prevent adding it to the cart
    if (purchasedCourses.includes(id)) {
      // Optional: could also return a warning that the course was already purchased
      return { warning: "شما قبلا این دوره را خریداری کرده‌اید." };
    }
    // 5.2 If the course is already purchased, prevent adding it to the cart
    if (existing) {
      // Course already in cart, inform user
      return { warning: "این دوره در حال حاضر در سبد خرید شماست." };
    }
    // 6. If the course is already in the cart, return a warning
    if (existing) {
      return { warning: "این دوره در حال حاضر در سبد خرید شماست." };
    }

    // 7. Add the course to the user's cart
    await prisma.cartItem.create({
      data: {
        userId,
        courseId: id,
      },
    });

    // 8. Return success message
    return { success: "دوره با موفقیت به سبد خرید اضافه شد." };
  } catch (error) {
    // 9. Log and return error message if something goes wrong
    console.error("[AddToCart Error]", error);
    return { error: "مشکلی در افزودن به سبد خرید پیش آمد." };
  }
};