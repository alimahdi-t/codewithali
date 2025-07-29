import prisma from "@/lib/prisma";
import { GetCourseBySlugParams } from "@/actions/shared.types";
import { currentUser } from "@/lib/auth";

/**
 * Fetches a course by its slug including its instructor and discount information.
 * Also determines if the currently authenticated user has purchased this course.
 *
 * @param {GetCourseBySlugParams} params - Object containing the course slug.
 * @param {string} params.slug - The unique slug identifier of the course.
 *
 * @returns {Promise<{ course: object; purchased: boolean } | null>}
 * Returns an object containing the course data and a boolean `purchased` flag
 * indicating if the current user has purchased the course.
 * Returns null if the course is not found or an error occurs.
 */
export async function getCourseBySlug({ slug }: GetCourseBySlugParams) {
  try {
    const user = await currentUser();

    // Fetch course with instructor and discount
    const course = await prisma.course.findFirst({
      where: { slug },
      include: {
        instructor: true,
        discount: true,
      },
    });

    if (!course) return null;

    // Check purchase status if user is logged in
    let purchased = false;
    if (user?.id) {
      const bought = await prisma.orderItem.findFirst({
        where: {
          course_id: course.id,
          order: {
            user_id: Number(user.id),
            OrderStatus: "PAID",
          },
        },
      });
      purchased = Boolean(bought);
    }

    return { course, purchased };
  } catch (error) {
    console.log(error);
    return null;
  }
}