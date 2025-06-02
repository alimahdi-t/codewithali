"use server";

import { currentUser } from "@/lib/auth"; // Helper to get the currently authenticated user
import prisma from "@/lib/prisma"; // Prisma client instance

// This function retrieves all discount codes from the database
// Only accessible by an authenticated admin user
export async function getAllDiscountCodes() {
  try {
    // Get the currently logged-in user
    const user = await currentUser();

    // If no user is logged in, return a warning
    if (!user) {
      return { warning: "لطفا ابتدا وارد حساب خود شوید." };
    }

    // Only admin users are allowed to access discount codes
    if (user.role !== "ADMIN") {
      return { warning: "شما اجازه دسترسی به کد‌های تخفیف رو ندارید." };
    }

    // Fetch all discount codes along with their applicable courses
    const discountCodes = await prisma.discountCode.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        CourseDiscount: {
          include: {
            course: {
              select: {
                id: true,
                title: true,
                slug: true,
              },
            },
          },
        },
      },
    });

    // Return success response with the discount codes
    return {
      success: "کدهای تخفیف با موفقیت دریافت شدند.",
      data: discountCodes,
    };
  } catch (error) {
    // Handle any unexpected errors
    return { error: "خطایی در دریافت کد‌های تخفیف به وجود آمد." };
  }
}