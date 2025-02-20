import { NextRequest, NextResponse } from "next/server";
import { getTags } from "@/lib/actions/getTags.action";

export async function GET(request: NextRequest) {
  const tags = await getTags();
  return NextResponse.json(tags);
}
