"use server";

import { DeleteCommentsParams } from "@/actions/shared.types";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteComments({ ids }: DeleteCommentsParams) {
  try {
    const result = await prisma.comment.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });

    revalidatePath("/dashboard/admin/comments");
    return { success: `${result.count} نظر با موفقیت حذف شد.` };
  } catch (error) {
    // console.log(error);
    return {
      error: "خطایی ناشناخته در حذف نظرات رخ داد! لطفا دوباره امتحان کنید.",
    };
  }
}