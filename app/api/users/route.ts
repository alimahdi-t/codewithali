import { NextRequest, NextResponse } from "next/server";
import { getUsers } from "@/actions/getUsers";
import { currentRole } from "@/lib/auth";

export async function GET(request: NextRequest) {
  const r = await currentRole();
  // if (r !== "ADMIN") return NextResponse.json({}, { status: 401 });

  const users = await getUsers({});

  const filteredUsers = users?.filter(
    (user) => user.role === "ADMIN" || user.role === "INSTRUCTOR",
  );

  return NextResponse.json(users);
}