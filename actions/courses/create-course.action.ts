"use server";

import { CreateCourseParams } from "@/actions/shared.types";
import prisma from "@/lib/prisma";

/**
 * Create a new course in the database.
 *
 * @param {CreateCourseParams} params - The input parameters for creating a course.
 * @returns {Promise<{ success?: boolean; error?: string; course?: any }>}
 * - success: Indicates whether the operation was successful
 * - error: Persian error message if creation fails
 * - course: The created course object (if successful)
 *
 * @example
 * const response = await createCourse({
 *   title: "New Course",
 *   slug: "new-course",
 *   description: "Course description",
 *   content: "Course content",
 *   imageUrl: "/images/course.png",
 *   price: 200000,
 *   level: "beginner",
 *   status: "published",
 *   instructorId: 5,
 * });
 *
 * if (response.success) {
 *   console.log(response.course);
 * } else {
 *   console.error(response.error);
 * }
 */
export async function createCourse(params: CreateCourseParams) {
  try {
    const {
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

    // Check if a course with the same slug already exists
    const existingCourse = await prisma.course.findUnique({
      where: { slug },
    });

    if (existingCourse) {
      return {
        error: "این Slug از قبل وجود دارد.",
      };
    }

    // Create the course in the database
    const course = await prisma.course.create({
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

    // Return success response with Persian message
    return {
      success: "دوره با موفقیت ایجاد شد.",
      course,
    };
  } catch (error: any) {
    console.error("Error creating course:", error);

    // Return a generic Persian error message
    return {
      error: error.message
        ? `خطا در ایجاد دوره: ${error.message}`
        : "خطا در ایجاد دوره. لطفاً دوباره تلاش کنید.",
    };
  }
}