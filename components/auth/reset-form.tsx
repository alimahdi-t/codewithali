"use client";

import { useFormStatus } from "@/hooks/use-form-status";
import { ResetSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { Form } from "@/components/ui/form";
import FormSuccess from "@/components/FormSuccess";
import FormError from "@/components/FormError";
import { useTransition } from "react";
import { LocalizedInput } from "@/components/shared/LocalizedInput";
import { SubmitButton } from "@/components/forms/SubmitButton";
import { resetPasswordAction } from "@/actions/auth/reset-password-action";

export const ResetForm = () => {
  // ✅ Form status state for success/error messages
  const { success, setSuccess, error, setError } = useFormStatus();

  // ✅ Transition state to handle async submission
  const [isPending, startTransition] = useTransition();

  const FormSchema = ResetSchema;

  // ✅ Initialize react-hook-form with Zod schema and default values
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
    },
  });

  // ✅ Submit handler for reset password
  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    startTransition(() => {
      resetPasswordAction(data).then((response) => {
        if (response.success) {
          setSuccess(response.success); // Show success message
          setError(""); // Clear previous error
        } else if (response.error) {
          setError(response.error); // Show error message
          setSuccess(""); // Clear previous success
        }
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="بازیابی رمز عبور"
      backButtonLabel="برگشت به صحفه ورود"
      backButtonHref="/auth/login"
      showLogo
      description="لطفاً آدرس ایمیلی که با حساب کاربری شما مرتبط است را وارد کنید تا لینک بازیابی رمز عبور به ایمیل شما ارسال شود."
    >
      {/* Form wrapper */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {/* Email input */}
            <LocalizedInput
              control={form.control}
              name="email"
              label="ایمیل"
              direction="ltr"
              textAlign="left"
              type="text"
            />

            {/* Display success or error messages */}
            <FormSuccess message={success} />
            <FormError message={error} />

            {/* Submit button */}
            <div className="mt-8">
              <SubmitButton pending={isPending} label="ارسال" />
            </div>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};