"use server";

import { CommentStatus } from "@/prisma/client";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

interface Props {
  status: CommentStatus;
  ids: string[];
}

export async function changeCommentsStatus({ status, ids }: Props) {
  try {
    if (!ids.length) {
      throw new Error("هیچ کامنتی برای تغییر انتخاب نشده است.");
    }
    console.log(ids);
    await prisma.comment.updateMany({
      where: {
        id: {
          in: ids,
        },
      },
      data: {
        status: status,
      },
    });

    revalidatePath("/dashboard/admin/comments");

    return { success: true, message: "وضعیت کامنت‌ها با موفقیت تغییر کرد." };
  } catch (error) {
    console.error(error);
    return { success: false, message: "خطایی در تغییر وضعیت کامنت‌ها رخ داد." };
  }
}