"use client";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { SignUpSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormStatus } from "@/hooks/use-form-status";
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
import FormError from "@/components/FormError";
import FormSuccess from "@/components/FormSuccess";
import { signUp } from "@/actions/auth/sign-up-action";
import Loader from "@/components/common/Loader";

export const RegisterForm = () => {
  const { success, setSuccess, error, setError } = useFormStatus();

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

    await signUp(data).then((response) => {
      if (response.error) {
        setError(response.error);
      }
      if (response.success) {
        setSuccess(response.success);
      }
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
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-medium leading-6 text-gray-900">
                          نام
                        </FormLabel>
                        <FormControl>
                          <Input type="text" autoComplete="name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="block text-sm font-medium leading-6 text-gray-900">
                          نام خانوادگی
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            autoComplete="family-name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
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
              <FormField
                control={form.control}
                name="retypePassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-sm font-medium leading-6 text-gray-900">
                      تکرار رمز عبور
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
            <div>
              <Button
                disabled={!form.formState.isValid}
                type="submit"
                className="w-full mt-6"
              >
                {form.formState.isSubmitting ? <Loader /> : " ثبت نام"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </CardWrapper>
  );
};