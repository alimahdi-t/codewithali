"use server";

import { EditCourseParams } from "@/actions/shared.types";
import prisma from "@/lib/prisma";

/**
 * Edit a course in the database.
 *
 * @param {EditCourseParams} params - The input parameters containing course ID and updated fields.
 * @returns {Promise<{ success: boolean; message: string; course?: any }>}
 * - success: Indicates whether the operation was successful
 * - message: A Persian message to display to the user
 * - course: The updated course object (if successful)
 *
 * @example
 * const response = await editCourse({
 *   id: 1,
 *   title: "New Course",
 *   slug: "new-course",
 *   description: "Description",
 *   content: "Content",
 *   imageUrl: "/images/course.png",
 *   price: 200000,
 *   level: "beginner",
 *   status: "published",
 *   instructorId: 5,
 * });
 *
 * if (response.success) {
 *   console.log(response.message);
 * } else {
 *   console.error(response.message);
 * }
 */
export async function editCourse(params: EditCourseParams) {
  try {
    const {
      id,
      title,
      slug,
      description,
      content,
      imageUrl,
      price,
      level,
      status,
      instructorId,
    } = params;

    // Update course in the database
    const course = await prisma.course.update({
      where: { id },
      data: {
        title,
        slug,
        description,
        content,
        imageUrl,
        price: Number(price),
        level,
        status,
        instructorId: Number(instructorId),
      },
    });

    // Return a success response with Persian message
    return {
      success: "دوره با موفقیت ویرایش شد.",
      course,
    };
  } catch (error: any) {
    console.error("Error editing course:", error);

    // Return an error response with Persian message
    return {
      error: error.message
        ? `خطا در ویرایش دوره: ${error.message}`
        : "خطا در ویرایش دوره. لطفاً دوباره تلاش کنید.",
    };
  }
}