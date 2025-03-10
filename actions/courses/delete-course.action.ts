"use server";

import { DeleteCourseParams } from "@/actions/shared.types";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteCourseAction({ id }: DeleteCourseParams) {
  try {
    const deletedCourse = await prisma.course.delete({
      where: {
        id,
      },
    });
    revalidatePath("/dashboard/admin/courses");
    return {
      success: true,
      message: "دوره با موفقیت حذف شد.",
      deletedCourse,
    };
  } catch (error: any) {
    return {
      success: false,
      message: "حذف دوره با خطا مواجه شد.",
      error: error.message,
    };
  }
}