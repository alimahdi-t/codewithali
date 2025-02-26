"use server";

import { EditCourseParams } from "@/lib/actions/shared.types";
import prisma from "@/lib/prisma";

//TODO: Add types

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

    return await prisma.course.update({
      where: { id: id },
      data: {
        title: title,
        slug: slug,
        description: description,
        content: content,
        imageUrl: imageUrl,
        price: Number(price),
        level: level,
        status: status,
        instructorId: Number(instructorId),
      },
    });
  } catch (error) {
    console.log("Error", error);
  }
}
