"use server";

import prisma from "@/lib/prisma";

export async function getCourses() {
  try {
    const courses = await prisma.$queryRaw`
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
        JOIN user ON course.userId = user.id;`;

    return courses;
  } catch (error) {
    console.error(error);
    return false;
  } finally {
    console.log("Done");
  }
}
