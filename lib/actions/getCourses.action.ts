"use server";

import prisma from "@/lib/prisma";

export async function getCourses() {
  try {
    return await prisma.course.findMany({ include: { instructor: true } });
  } catch (error) {
    {
      console.log(error);
    }
  }
}
