"use server";

import prisma from "@/lib/prisma";
import { Role } from "@prisma/client";

interface Props {
  role?: Role;
}

export async function getUsers({ role }: Props) {
  try {
    return await prisma.user.findMany({
      where: { role },
    });
  } catch (error) {
    console.error("خطا در دریافت کاربران:", error);
  }
}