import { z } from "zod";

export const SignUpSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "نام باید حداقل ۳ کاراکتر باشد")
      .max(50, "نام نباید بیشتر از ۵۰ کاراکتر باشد"),
    lastName: z
      .string()
      .min(2, "نام خانوادگی باید حداقل ۳ کاراکتر باشد")
      .max(50, "نام خانوادگی نباید بیشتر از ۵۰ کاراکتر باشد"),
    email: z.string().email("ایمیل نامعتبر است"),
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
