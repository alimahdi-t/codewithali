"use server";

import prisma from "@/lib/prisma";
import { MessageStatus } from "@prisma/client";
import { GetContactMessages } from "@/actions/shared.types";

export async function getContactMessages(params: GetContactMessages) {
  const { pageSize = 12, page = 1, status } = params;

  try {
    // Get the total number of messages (regardless of filter)
    const totalMessages = await prisma.contactMessage.count();

    // Get the total count of filtered messages (for pagination)
    const filteredMessagesCount = await prisma.contactMessage.count({
      where: {
        status,
      },
    });

    // Fetch paginated messages
    const messages = await prisma.contactMessage.findMany({
      where: {
        status,
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    // Get the count of each status
    const statusCounts = await prisma.contactMessage.groupBy({
      by: ["status"],
      _count: { status: true },
    });

    // Format status counts correctly
    const statusCountMap = statusCounts.reduce(
      (acc, item) => {
        acc[item.status] = item._count.status;
        return acc;
      },
      {
        [MessageStatus.PENDING]: 0,
        [MessageStatus.IN_PROGRESS]: 0,
        [MessageStatus.RESOLVED]: 0,
      },
    );

    return {
      totalMessages, // Total count of all messages
      filteredMessagesCount, //  Total count of filtered messages (for pagination)
      statusCountMap,
      messages,
    };
  } catch (error) {
    return { error: "خطایی در دریافت پیام‌ها رخ داد! لطفا دوباره تلاش کنید." };
  }
}