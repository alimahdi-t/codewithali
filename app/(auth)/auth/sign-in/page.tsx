"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Logo } from "@/components/Logo";
import { SignInSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const SignInPage = () => {
  const FormSchema = SignInSchema;
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
    <div className="flex h-full w-[600px] flex-col justify-center py-12 sm:px-6 lg:px-8 shadow-xs">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Logo iconClassName="mx-auto w-16 h-16" showText={false} />
        <h2 className="mt-6 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
          ورود به حساب کاربری
        </h2>
      </div>

      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-[480px] ">
        <div className="bg-white px-6 py-12 shadow-sm sm:rounded-lg sm:px-12">
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
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

              <div className="flex items-center justify-between">
                <div className="text-sm leading-6">
                  <a
                    href="#"
                    className="font-semibold text-brand-600 hover:text-brand-700 text-xs"
                  >
                    فراموشی رمز عبور
                  </a>
                </div>
              </div>

              <div>
                <Button
                  disabled={!form.formState.isValid}
                  type="submit"
                  className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm
                  text-white bg-brand-500 hover:bg-brand-600
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
                >
                  ورود
                </Button>
              </div>
            </form>
          </Form>

          <div>
            <div className="relative mt-10">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-xs font-medium leading-6">
                <span className="bg-white px-6 text-gray-900">یا ادامه با</span>
              </div>
            </div>

            <div className="mt-6 w-full">
              <Button
                className="w-full hover:bg-brand-50"
                variant="outline"
                onClick={() => signIn("google", { callbackUrl: "/" })}
              >
                <Link href={"#"} className="flex gap-2">
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                      fill="#EA4335"
                    ></path>
                    <path
                      d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                      fill="#4285F4"
                    ></path>
                    <path
                      d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                      fill="#FBBC05"
                    ></path>
                    <path
                      d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                      fill="#34A853"
                    ></path>
                  </svg>
                  <span className="text-xs leading-6">ورود با Google</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-gray-500">
          حساب کاربری ندارید؟{" "}
          <Link
            href="/auth/sign-up"
            className="font-semibold leading-6 text-brand-600 hover:text-brand-700"
          >
            ساخت حساب
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;