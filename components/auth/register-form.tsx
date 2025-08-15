"use client";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { SignUpSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormStatus } from "@/hooks/use-form-status";
import { Form } from "@/components/ui/form";

import FormError from "@/components/FormError";
import FormSuccess from "@/components/FormSuccess";
import { signUp } from "@/actions/auth/sign-up-action";
import { SubmitButton } from "@/components/forms/SubmitButton";
import { useState, useTransition } from "react";
import { LocalizedInput } from "@/components/shared/LocalizedInput";
import { CheckPassword } from "../forms/CheckPassword";

export const RegisterForm = () => {
  const { success, setSuccess, error, setError } = useFormStatus();
  const [isPending, startTransition] = useTransition();
  const [isFocused, setIsFocused] = useState(false);

  const FormSchema = SignUpSchema;
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onTouched",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setSuccess("");
    setError("");
    startTransition(() => {
      signUp(data).then((response) => {
        if (response.error) {
          setError(response.error);
        }
        if (response.success) {
          setSuccess(response.success);
        }
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="ساخت حساب کاربری"
      backButtonLabel="حساب کاربری دارید؟"
      backButtonHref="/auth/login"
      showSocial
      showLogo
    >
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div className="flex gap-2">
                <div className="flex flex-col gap-2 w-full">
                  <LocalizedInput
                    control={form.control}
                    name="firstName"
                    label="نام"
                    direction="rtl"
                    textAlign="right"
                    type="text"
                    autoComplete="firstName"
                  />
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <LocalizedInput
                    control={form.control}
                    name="lastName"
                    label="نام خانوادگی"
                    direction="rtl"
                    textAlign="right"
                    type="text"
                  />
                </div>
              </div>
              <LocalizedInput
                control={form.control}
                name="email"
                label="ایمیل"
                direction="ltr"
                textAlign="left"
                type="text"
              />
              <LocalizedInput
                control={form.control}
                name="password"
                label="رمز عبور"
                direction="ltr"
                textAlign="left"
                type="password"
                showErrorMessage={false}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              {(isFocused || form.formState.errors["password"]) && (
                <CheckPassword password={form.watch("password")} />
              )}
              <LocalizedInput
                control={form.control}
                name="retypePassword"
                label="تکرار رمز عبور"
                direction="ltr"
                textAlign="left"
                type="password"
                passwordButton={false}
              />

              <FormSuccess message={success} />
              <FormError message={error} />
            </div>
            <div>
              <SubmitButton
                className="w-full mt-6"
                pending={isPending}
                label="ثبت نام"
              />
            </div>
          </form>
        </Form>
      </div>
    </CardWrapper>
  );
};