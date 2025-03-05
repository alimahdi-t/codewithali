"use client";
import { useFormStatus } from "@/hooks/use-form-status";
import { LoginSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardWrapper } from "@/components/auth/card-wrapper";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FormSuccess from "@/components/FormSuccess";
import FormError from "@/components/FormError";

export const LoginForm = () => {
  const { success, setSuccess, error, setError } = useFormStatus();

  const FormSchema = LoginSchema;
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onTouched",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    console.log(data);
    // const response = await authorize({});
  };

  return (
    <CardWrapper
      headerLabel="ورود به حساب"
      backButtonLabel="حساب کاربری ندارید؟"
      backButtonHref="/auth/register"
      showSocial
      showLogo
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium leading-6 text-gray-900">
                    ایمیل
                  </FormLabel>
                  <FormControl>
                    <Input type="email" autoComplete="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium leading-6 text-gray-900">
                    رمز عبور
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      autoComplete="current-password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormSuccess message={success} />
            <FormError message={error} />
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
          <Button
            disabled={!form.formState.isValid}
            type="submit"
            className="w-full mt-4"
          >
            ورود
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};