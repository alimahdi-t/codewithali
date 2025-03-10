"use server";

import { GetContactMessageParams } from "@/actions/shared.types";
import prisma from "@/lib/prisma";

export async function getContactMessage({ id }: GetContactMessageParams) {
  try {
    const message = await prisma.contactMessage.findUnique({
      where: { id },
    });
    return {
      message: message,
    };
  } catch {
    return { error: "خطایی در دریافت پیام رخ داد! لطفا دوباره تلاش کنید." };
  }
}