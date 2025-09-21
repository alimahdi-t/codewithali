import { z } from "zod";

export const ChangeUserPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد.")
      .refine((val) => /[a-z]/.test(val), {
        message: "رمز عبور باید حداقل یک حرف کوچک انگلیسی داشته باشد.",
      })
      .refine((val) => /[A-Z]/.test(val), {
        message: "رمز عبور باید حداقل یک حرف بزرگ انگلیسی داشته باشد.",
      })
      .refine((val) => /\d/.test(val), {
        message: "رمز عبور باید حداقل یک عدد داشته باشد.",
      })
      .refine((val) => /[!@#$%^&*()_+=\-]/.test(val), {
        message:
          "رمز عبور باید حداقل یک کاراکتر خاص مجاز (!@#$%^&*()_+=-) داشته باشد.",
      })
      .refine((val) => !/[^A-Za-z0-9!@#$%^&*()_+=\-]/.test(val), {
        message:
          "رمز عبور فقط باید شامل حروف انگلیسی، عدد و این کاراکترهای خاص باشد: !@#$%^&*()_+=-",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "رمز عبور و تکرار آن یکسان نیستند.",
    path: ["confirmPassword"],
  });