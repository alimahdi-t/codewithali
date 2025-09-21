// This form is for admin to change password of any user.

"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LocalizedInput } from "@/components/shared/LocalizedInput";
import { Form } from "@/components/ui/form";
import { useState, useTransition } from "react";
import { SubmitButton } from "@/components/forms/SubmitButton";
import { useRouter } from "next/navigation";

import { ChangePasswordSchema } from "@/schema";
import { CheckPassword } from "@/components/forms/CheckPassword";

import { toast } from "sonner";
import { changePassword } from "@/actions/auth/change-password-action";

export const ChangePasswordForm = () => {
  const [isPending, startTransition] = useTransition();
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const FormSchema = ChangePasswordSchema;
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      currentPassword: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    startTransition(() => {
      changePassword(data).then((response) => {
        if (response.error) {
          toast.error(response.error);
        } else if (response.success) {
          toast.success(response.success);
        }
      });
    });
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <LocalizedInput
              control={form.control}
              name="currentPassword"
              type="password"
              direction="ltr"
              label="رمز عبور فعلی"
              maxLength={255}
              showErrorMessage={false}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <LocalizedInput
              control={form.control}
              name="password"
              type="password"
              direction="ltr"
              label="رمز عبور"
              maxLength={255}
              showErrorMessage={false}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            {(isFocused || form.formState.errors["password"]) && (
              <CheckPassword password={form.watch("password")} />
            )}
            <LocalizedInput
              control={form.control}
              name="confirmPassword"
              type="password"
              direction="ltr"
              label="تکرار رمز عبور"
              maxLength={255}
            />

            <div className="flex flex-col gap-3">
              <SubmitButton pending={isPending} label={"تغییر رمز عبور"} />
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};