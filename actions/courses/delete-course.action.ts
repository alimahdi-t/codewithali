"use server";

import { DeleteCourseParams } from "@/actions/shared.types";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteCourseAction({ slug }: DeleteCourseParams) {
  try {
    const deletedCourse = await prisma.course.delete({
      where: {
        slug,
      },
    });
    revalidatePath("/dashboard/admin/courses");
    return {
      success: "دوره با موفقیت حذف شد.",
      deletedCourse,
    };
  } catch (error: any) {
    return {
      error: "حذف دوره با خطا مواجه شد.",
    };
  }
}