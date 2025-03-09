"use client";
import { useFormStatus } from "@/hooks/use-form-status";
import { ResetSchema } from "@/schema";
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
import FormSuccess from "@/components/FormSuccess";
import FormError from "@/components/FormError";
import Loader from "@/components/common/Loader";
import { useTransition } from "react";

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
    console.log(data);
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
          </div>

          <FormSuccess message={success} />
          <FormError message={error} />
          <Button
            disabled={!form.formState.isValid}
            type="submit"
            className="w-full mt-4"
          >
            {isPending ? <Loader /> : "ارسال"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};