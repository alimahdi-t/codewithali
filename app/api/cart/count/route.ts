import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Prisma client for database access
import { currentUser } from "@/lib/auth"; // Custom function to get the currently authenticated user

// GET /api/cart/count
// Returns the number of cart items for the currently logged-in user
export async function GET(request: NextRequest) {
  // Get the current authenticated user
  const user = await currentUser();

  // If there's no user logged in, return a count of 0
  if (!user) {
    return NextResponse.json({ count: 0 });
  }

  // Query the database to count the number of cart items for this user
  const count = await prisma.cartItem.count({
    where: {
      userId: Number(user.id),
    },
  });

  // Return the count as JSON
  return NextResponse.json({ count });
}