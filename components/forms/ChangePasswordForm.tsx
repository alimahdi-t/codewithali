"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useTransition } from "react";
import Loader from "@/components/common/Loader";
import { ChangePasswordSchema } from "@/schema";
import { changePassword } from "@/actions/auth/change-password-action";
import { toast } from "sonner";

export const ChangePasswordForm = () => {
  const [isPending, startTransition] = useTransition();

  const FormSchema = ChangePasswordSchema;
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onTouched",
    defaultValues: {
      password: "",
      currentPassword: "",
      retypePassword: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    console.log(data);

    startTransition(() => {
      changePassword(data).then((response) => {
        if (response.error) {
          form.reset();
          toast.error(response.error);
        }
        if (response.success) {
          form.reset();
          toast.success(response.success);
        }
      });
    });
  };

  return (
    <div className="flex justify-center">
      <div className="w-full">
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid sm:grid-cols-3 grid-cols-2 gap-x-4">
              <FormField
                control={form.control}
                name="currentPassword"
                render={({ field }) => (
                  //TODO: hide this if user doesn't have a password at first because he\she used a OAuth provider
                  <FormItem>
                    <FormLabel className="c-form-label!">
                      رمزعبور فعلی
                    </FormLabel>
                    <FormControl>
                      <Input type="password" className="leading-6" {...field} />
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
                    <FormLabel className="c-form-label!">
                      رمز عبور جدید
                    </FormLabel>
                    <FormControl>
                      <Input type="password" className="leading-6" {...field} />
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
                    <FormLabel className="c-form-label!">
                      تایید رمز عبور
                    </FormLabel>
                    <FormControl>
                      <Input type="password" className="leading-6" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <Button
                disabled={!form.formState.isValid}
                type="submit"
                className="flex justify-self-end"
              >
                {isPending ? <Loader /> : "ویرایش"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};