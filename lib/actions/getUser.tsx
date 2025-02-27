"use server";

import { GetUserParams } from "@/lib/actions/shared.types";
import prisma from "@/lib/prisma";

export async function getUser({ id, username, email }: GetUserParams) {
  try {
    return await prisma.user.findFirst({
      where: id ? { id } : username ? { username } : { email },
    });
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}
