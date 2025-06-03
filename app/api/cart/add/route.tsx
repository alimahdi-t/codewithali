import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { currentUser } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const user = await currentUser();

  // If there's no user logged in, return a count of 0
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { courseId } = await req.json();

  await prisma.cartItem.upsert({
    where: {
      userId_courseId: {
        userId: Number(user.id),
        courseId,
      },
    },
    update: {},
    create: {
      userId: Number(user.id),
      courseId,
    },
  });

  return NextResponse.json({ success: true });
}