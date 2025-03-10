import { z } from "zod";

export const SendMessageAnswerSchema = z.object({
  subject: z.string().min(1, "عنوان نمی تواند خالی باشد"),
  message: z.string().min(10, "متن پیام باید حداقل شامل ۱۰ حرف باشد."),
});