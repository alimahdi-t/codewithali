"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LocalizedInput } from "@/components/shared/LocalizedInput";
import { Form } from "@/components/ui/form";
import { useState, useTransition } from "react";
import { SubmitButton } from "@/components/forms/SubmitButton";
import { useRouter } from "next/navigation";

import { ChangeUserPasswordSchema } from "@/schema";
import { CheckPassword } from "@/components/forms/CheckPassword";

interface Props {
  userId: number;
}

export const ChangeUserPasswordForm = ({ userId }: Props) => {
  const [isPending, startTransition] = useTransition();
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  const FormSchema = ChangeUserPasswordSchema;
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    startTransition(() => {
      // updateUserAction({ userId: Number(initialData.id), values: data }).then(
      //   (response) => {
      //     if (response.error) {
      //       toast.error(response.error);
      //     } else if (response.success) {
      //       toast.success(response.success);
      //       router.push("/dashboard/admin/users");
      //     }
      //   },
      // );
    });
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-6">
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