"use server";

import { DeletePostParams } from "@/actions/shared.types";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deletePost({ id }: DeletePostParams) {
  try {
    const deletedPost = await prisma.post.delete({
      where: {
        id,
      },
    });
    revalidatePath("/dashboard/admin/posts");
    revalidatePath("/posts");
    return {
      success: true,
      message: "مقاله با موفقیت حذف شد.",
      deletedPost,
    };
  } catch (error: any) {
    return {
      success: false,
      message: "حذف مقاله با خطا مواجه شد.",
      error: error.message,
    };
  }
}