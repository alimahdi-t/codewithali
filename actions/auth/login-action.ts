import { LoginSchema } from "@/schema";
import { z } from "zod";

export async function login(values: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "ورودی نامعتبر هست!" };
  }

  const { email, password } = validatedFields.data;
}