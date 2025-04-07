"use server";

import { DeleteCommentParams } from "@/actions/shared.types";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteComment({ id }: DeleteCommentParams) {
  try {
    await prisma.comment.delete({
      where: {
        id,
      },
    });
    revalidatePath("/dashboard/admin/comments");
    return { success: "این نظر با موفقیت حذف شد!" };
  } catch (error) {
    // console.log(error);
    return {
      error: "خطایی ناشناخته در حذف این نظر رخ داد! لطفا دوباره امتحان کنید.",
    };
  }
}