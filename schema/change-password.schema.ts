import { z } from "zod";

export const ChangePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "رمز عبور نمیتواند خالی باشد"),
    password: z
      .string()
      .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")
      .max(32, "رمز عبور نباید بیشتر از ۳۲ کاراکتر باشد")
      .regex(/[A-Z]/, "رمز عبور باید حداقل یک حرف بزرگ داشته باشد")
      .regex(/[a-z]/, "رمز عبور باید حداقل یک حرف کوچک داشته باشد")
      .regex(/\d/, "رمز عبور باید حداقل یک عدد داشته باشد")
      .regex(/[^A-Za-z0-9]/, "رمز عبور باید حداقل یک کاراکتر خاص داشته باشد"),
    retypePassword: z.string(),
  })
  .refine((data) => data.password === data.retypePassword, {
    message: "رمز عبور و تکرار آن باید یکسان باشند",
    path: ["retypePassword"],
  });