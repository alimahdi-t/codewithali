"use server";

import prisma from "@/lib/prisma";
import {
  GetAllCoursesParams,
  GetCourseByIdParams,
} from "@/lib/actions/shared.types";

export async function getCourseById({ id }: GetCourseByIdParams) {
  try {
    const course = await prisma.course.findFirst({
      where: { id: id }, // Ensure id is a number
    });

    if (!course) {
      console.log("Course not found.");
      return null;
    }

    return course;
  } catch (error) {
    console.log("Error while getting a course.", error);
    return false;
  } finally {
    console.log("Done");
  }
}

export async function getAllCourses({
  orderBy,
  isFree,
  isPreOrder,
  levels,
}: GetAllCoursesParams) {
  try {
    // Build dynamic ORDER BY clause based on sortBy value
    let orderByClause = "";
    switch (orderBy) {
      case "newest":
        orderByClause = "course.createdAt DESC"; // Sort by newest first
        break;
      case "oldest":
        orderByClause = "course.createdAt ASC"; // Sort by oldest first
        break;
      case "cheapest":
        orderByClause = "course.price ASC"; // Sort by cheapest first
        break;
      case "mostExpensive":
        orderByClause = "course.price DESC"; // Sort by most expensive first
        break;
      // case "mostPopular":
      //   orderByClause = "course.enrollments DESC"; // Assuming you have an enrollments field
      //   break;
      default:
        orderByClause = "course.createdAt DESC"; // Default to newest
    }

    // Start building the dynamic WHERE clause
    let whereClause = [];
    if (isFree) {
      whereClause.push("course.price = 0");
    }
    if (isPreOrder) {
      whereClause.push("course.status = 'PREORDER'");
    }
    if (levels && Array.isArray(levels) && levels.length > 0) {
      const levelsList = levels.map((level) => `'${level}'`).join(", ");
      whereClause.push(`course.level IN (${levelsList})`); // Add level array check
    } else if (typeof levels === "string") {
      whereClause.push(`course.level = '${levels}'`);
    }
    console.log(levels);

    // Combine conditions into a single WHERE clause, if any conditions exist
    const whereCondition =
      whereClause.length > 0 ? `WHERE ${whereClause.join(" AND ")}` : "";

    const courses = await prisma.$queryRawUnsafe(`
      SELECT 
        course.id,
        course.title, 
        course.content, 
        course.imageUrl,
        course.createdAt, 
        course.price, 
        course.userId, 
        user.first_name, 
        user.last_name
      FROM 
        course
      JOIN 
        user ON course.userId = user.id
      ${whereCondition}
      ORDER BY 
        ${orderByClause};
    `); // Use dynamic orderByClause

    return courses;
  } catch (error) {
    throw new Error(`Error fetching courses: ${error.message}`);
  }
}
