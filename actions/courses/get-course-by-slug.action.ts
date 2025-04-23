import prisma from "@/lib/prisma";
import { GetCourseBySlugParams } from "@/actions/shared.types";

export async function getCourseBySlug({ slug }: GetCourseBySlugParams) {
  try {
    return await prisma.course.findFirst({
      where: {
        slug: slug,
      },
      include: {
        instructor: true,
        discount: true,
      },
    });
  } catch (error) {
    console.log(error);
    return null;
  }
}