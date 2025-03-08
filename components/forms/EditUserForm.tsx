"use client";
import { EditUserSchema } from "@/schema/editUser.schema";
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
import { Textarea } from "@/components/ui/textarea";

export const EditUserForm = () => {
  const FormSchema = EditUserSchema;
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onTouched",
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      imageUrl: "",
      phoneNumber: "",
      email: "",
      bio: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center">
      <div className="w-full">
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-x-4 gap-y-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="c-form-label!">نام</FormLabel>
                    <FormControl>
                      <Input type="text" className="leading-6" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="c-form-label!">
                      نام‌خانوادگی
                    </FormLabel>
                    <FormControl>
                      <Input type="text" className="leading-6" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="c-form-label!">
                      شماره موبایل
                    </FormLabel>
                    <FormControl>
                      <Input type="text" className="leading-6" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="c-form-label!">نام کابری</FormLabel>
                    <FormControl>
                      <Input type="text" className="leading-6" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="c-form-label!">ایمیل</FormLabel>
                    <FormControl>
                      <Input type="email" className="leading-6" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="c-form-label!">بیو</FormLabel>
                  <FormControl>
                    <Textarea className="leading-6 min-h-28" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <Button type="submit" className="flex justify-self-end">
                ویرایش
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};