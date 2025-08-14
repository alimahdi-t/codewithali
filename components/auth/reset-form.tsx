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

export const ResetForm = () => {
  const { success, setSuccess, error, setError } = useFormStatus();
  const [isPending, startTransition] = useTransition();

  const FormSchema = ResetSchema;
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    startTransition(() => {
      // TODO: complete here
      console.log(data);
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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <LocalizedInput
              control={form.control}
              name="email"
              label="ایمیل"
              direction="ltr"
              textAlign="left"
              type="text"
            />

            <FormSuccess message={success} />
            <FormError message={error} />
            <div className="mt-8">
              <SubmitButton pending={isPending} label="ارسال" />
            </div>
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};