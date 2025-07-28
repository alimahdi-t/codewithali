"use server";

import { currentUser } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { Prisma } from "@/prisma/client";

interface MakeOrderProps {
  courseIds: number[];
  discountCode?: string;
}

type OrderItemInput = Prisma.OrderItemCreateInput;

export const makeOrder = async ({
  courseIds,
  discountCode,
}: MakeOrderProps) => {
  try {
    const user = await currentUser();
    if (!user || !user.id) {
      throw new Error("User not authenticated");
    }

    const userId = user.id;

    // 1. Retrieve discount info if provided
    let appliedDiscount = null;
    if (discountCode) {
      appliedDiscount = await prisma.discountCode.findUnique({
        where: { code: discountCode },
        include: {
          CourseDiscount: {
            select: { courseId: true },
          },
        },
      });

      if (!appliedDiscount) {
        console.warn(`Invalid discount code: ${discountCode}`);
      }
    }

    // 2. Load course data
    const courses = await prisma.course.findMany({
      where: {
        id: { in: courseIds },
      },
      select: {
        id: true,
        title: true,
        price: true,
      },
    });

    if (!courses.length) {
      throw new Error("No valid courses found in cart");
    }

    // 3. Prepare discount-eligible course IDs
    const discountCourseIds =
      appliedDiscount?.CourseDiscount?.map((cd) => cd.courseId) || [];

    // 4. Calculate final prices
    const orderItems = courses.map((course) => {
      let finalPrice = course.price;

      // Apply percentage discount
      if (
        appliedDiscount &&
        appliedDiscount.type === "PERCENTAGE" &&
        (appliedDiscount.appliesToAll || discountCourseIds.includes(course.id))
      ) {
        finalPrice = Math.floor(
          finalPrice * (1 - (appliedDiscount.percentage || 0) / 100),
        );
      }

      // // Apply flat amount discount
      // if (
      //   appliedDiscount &&
      //   appliedDiscount.type === "FLAT_AMOUNT" &&
      //   (appliedDiscount.appliesToAll || discountCourseIds.includes(course.id))
      // ) {
      //   finalPrice = Math.max(
      //     0,
      //     finalPrice - (appliedDiscount.flatAmount || 0),
      //   );
      // }

      return {
        course_id: course.id,
        name: course.title,
        price: course.price,
        discountPercentage: appliedDiscount?.percentage ?? 0,
        finalPrice: finalPrice,
      };
    });

    console.log(orderItems);
    const totalAmount = orderItems.reduce(
      (sum, item) => sum + item.finalPrice,
      0,
    );
    // 5. Create order and related order items
    const order = await prisma.order.create({
      data: {
        user_id: parseInt(userId),
        OrderStatus: "PENDING",
        amount: totalAmount,
        items: {
          create: orderItems,
        },
      },
      include: {
        items: true,
      },
    });

    console.log("✅ Order created:", order.id);

    // Optional: Clear user's cart if needed
    // await clearUserCart(userId);
    //
    // return redirect(`/checkout/confirm?orderId=${order.id}`);
  } catch (error) {
    console.error("❌ Failed to make order:", error);
    throw error;
  }
};