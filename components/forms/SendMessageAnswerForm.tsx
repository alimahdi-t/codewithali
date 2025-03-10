"use client";

import { useTransition } from "react";
import { SendMessageAnswerSchema } from "@/schema";
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
} from "../ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Loader from "@/components/common/Loader";

export const SendMessageAnswerForm = () => {
  const [isPending, startTransition] = useTransition();
  const FormSchema = SendMessageAnswerSchema;
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onTouched",
    defaultValues: {
      subject: "",
      message: "",
    },
  });
  //TODO: Implement this form
  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    startTransition(() => {});
  };

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm font-medium leading-6 text-gray-900">
                عنوان
                <span className="text-red-500 px-1">*</span>
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
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-sm font-medium leading-6 text-gray-900">
                توضیحات
                <span className="text-red-500 px-1">*</span>
              </FormLabel>
              <FormControl>
                <Textarea {...field} className="h-40" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={!form.formState.isValid} type="submit">
          {isPending ? <Loader /> : "ارسال پاسخ"}
        </Button>
      </form>
    </Form>
  );
};