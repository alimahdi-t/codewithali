"use server";

import prisma from "@/lib/prisma";

export async function getTags() {
  // TODO: Add types
  try {
    const tags = await prisma.tag.findMany({});
    return tags;
  } catch (error) {
    console.log("Error fetching tags", error);
  }
}
