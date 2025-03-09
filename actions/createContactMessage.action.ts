"use server";

import { ContactMessageSchema } from "@/schema";
import { z } from "zod";
import prisma from "@/lib/prisma";

export async function createContactMessage(
  values: z.infer<typeof ContactMessageSchema>,
) {
  const validateFields = ContactMessageSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "ورودی نامعتبر هست!" };
  }

  const { fullName, email, phone, title, message } = validateFields.data;

  try {
    await prisma.contactMessage.create({
      data: {
        title,
        message,
        email,
        fullName,
        phone,
      },
    });

    return { success: "پیام با موفقیت ارسال شد" };
  } catch (error) {
    return {
      error: "خطایی در ارسال پیام رخ داد! لطفا دوباره تلاش کنید.",
    };
  }
}