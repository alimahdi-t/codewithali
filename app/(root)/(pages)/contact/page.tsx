"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateContactMessageSchema } from "@/schema";
import Loader from "@/components/common/Loader";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Call02Icon,
  Clock01Icon,
  Mail01Icon,
  MapsLocation01Icon,
} from "@/public/assets/icons/hugeIcons";
import { useTransition } from "react";
import { createContactMessage } from "@/actions/messages/create-contact-message.action";
import { toast } from "sonner";

const Contact = () => {
  const [isPending, startTransition] = useTransition();
  const FormSchema = CreateContactMessageSchema;
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      title: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    startTransition(() => {
      createContactMessage(data).then((response) => {
        if (response.error) {
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
    <div
      className="px-12 py-20 c-card mx-auto
      grid max-w-7xl grid-cols-1 lg:grid-cols-3 gap-12"
    >
      <div className="col-span-1">
        <div className=" max-w-xl lg:mx-0 lg:max-w-lg">
          <h2 className="c-text-h2">تماس با ما</h2>
          <p className="mt-6 leading-8 text-gray-600">
            اگر سوال، پیشنهاد یا مشکلی دارید، تیم ما آماده‌ی پاسخگویی به شماست.
            از طریق فرم زیر پیام خود را ارسال کنید یا با اطلاعات تماس ما در
            ارتباط باشید.
          </p>
          <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Address</span>
                <MapsLocation01Icon />
              </dt>
              <dd>آدرس: تهران، خیابان ولیعصر، پلاک 123</dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only"></span>

                <Clock01Icon />
              </dt>
              <dd>
                ساعات پاسخگویی
                <br />
                شنبه تا پنجشنبه، 9:00 الی 18:00
              </dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Telephone</span>
                <Call02Icon />
              </dt>
              <dd>
                <a href="tel:+1 (555) 234-5678" className="hover:text-gray-900">
                  ۰۹۰۳۰۵۷۹۰۷۴
                </a>
              </dd>
            </div>
            <div className="flex gap-x-4">
              <dt className="flex-none">
                <span className="sr-only">Email</span>
                <Mail01Icon />
              </dt>
              <dd>
                <a
                  href="mailto:hello@example.com"
                  className="hover:text-gray-900"
                >
                  seyyedalimehdi@gmail.com
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      {/* Form */}
      <div className="col-span-2 max-md:mt-20 max-md:border-t">
        <Form {...form}>
          <form
            className="space-y-6 mt-12"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-sm font-medium leading-6">
                      نام و نام‌خانوادگی
                      <span className="text-action-error px-1">*</span>
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
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="block text-sm font-medium leading-6">
                      شماره تماس
                    </FormLabel>
                    <FormControl>
                      <Input type="text" className="leading-6" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium leading-6">
                    ایمیل
                    <span className="text-action-error px-1">*</span>
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
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="block text-sm font-medium leading-6">
                    عنوان
                    <span className="text-action-error px-1">*</span>
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
                  <FormLabel className="block text-sm font-medium leading-6">
                    توضیحات
                    <span className="text-action-error px-1">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea {...field} className="h-40" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={!form.formState.isValid} type="submit">
              {isPending ? <Loader /> : "ارسال پیام"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Contact;