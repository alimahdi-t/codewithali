import prisma from "@/lib/prisma";
import { GetCourseBySlugParams } from "@/lib/actions/shared.types";

export async function getCourseBySlug({ slug }: GetCourseBySlugParams) {
  try {
    return await prisma.course.findFirst({
      where: {
        slug: slug,
      },
    });
  } catch (error) {
    console.log(error);
  }
}
