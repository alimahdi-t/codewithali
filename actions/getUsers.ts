"use server";

import prisma from "@/lib/prisma";
import { getUsersParams } from "@/actions/shared.types";

export async function getUsers({ role }: getUsersParams) {
  try {
    return await prisma.user.findMany({
      where: { role },
    });
  } catch (error) {
    console.error("خطا در دریافت کاربران:", error);
  }
}