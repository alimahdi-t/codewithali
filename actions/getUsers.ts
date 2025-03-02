"use server";

import prisma from "@/lib/prisma";

export async function getUsers() {
  try {
    return await prisma.user.findMany({});
  } catch (error) {
    console.error("خطا در دریافت کاربران:", error);
  }
}
