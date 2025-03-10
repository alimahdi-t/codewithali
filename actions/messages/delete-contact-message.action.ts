"use server";

import prisma from "@/lib/prisma";
import { DeleteContactMessageParams } from "@/actions/shared.types";
import { revalidatePath } from "next/cache";

export async function deleteContactMessageAction({
  id,
}: DeleteContactMessageParams) {
  try {
    await prisma.contactMessage.delete({
      where: {
        id,
      },
    });
    revalidatePath("dashboard/admin/messages");
    return { success: "پیام با موفقیت حذف شد!" };
  } catch (error) {
    return {
      error: "خطایی ناشناخته در حدف پیام رخ داد! لطفا دوباره امتحان کنید.",
    };
  }
}