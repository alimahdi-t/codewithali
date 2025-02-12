"use server";

import { CreateCourseParams } from "@/lib/actions/shared.types";
import prisma from "@/lib/prisma";

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

    const existingCourse = await prisma.course.findUnique({
      where: { slug: slug },
    });

    if (existingCourse) {
      return {
        error: "این Slug از قبل وجود دارد.",
      };
    }

    const course = await prisma.course.create({
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
