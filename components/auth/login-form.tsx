"use client";
import { useFormStatus } from "@/hooks/use-form-status";
import { LoginSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FormSuccess from "@/components/FormSuccess";
import FormError from "@/components/FormError";
import { login } from "@/actions/auth/login-action";
import { useTransition } from "react";
import { toast } from "sonner";
import { LocalizedInput } from "@/components/shared/LocalizedInput";
import { SubmitButton } from "@/components/forms/SubmitButton";

export const LoginForm = () => {
  const { success, setSuccess, error, setError } = useFormStatus();
  const [isPending, startTransition] = useTransition();

  const FormSchema = LoginSchema;
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setSuccess("");
    setError("");
    startTransition(() => {
      login(data).then((response) => {
        if (response?.error) {
          setError(response.error);
        }
        if (response?.success) {
          toast.success(response.success);
        }
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="ورود به حساب"
      backButtonLabel="حساب کاربری ندارید؟"
      backButtonHref="/auth/sign-up"
      showSocial
      showLogo
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
            <LocalizedInput
              control={form.control}
              name="password"
              label="رمز عبور"
              direction="ltr"
              textAlign="left"
              type="password"
            />
          </div>

          <Button
            size="sm"
            variant="link"
            asChild
            className="justify-start px-0 font-normal mt-2"
          >
            <Link href={"/auth/reset"} className="">
              فراموشی رمز عبور
            </Link>
          </Button>

          <FormSuccess message={success} />
          <FormError message={error} />
          <SubmitButton pending={isPending} label="ورود" />
        </form>
      </Form>
    </CardWrapper>
  );
};