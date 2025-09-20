"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LocalizedInput } from "@/components/shared/LocalizedInput";
import { Form } from "@/components/ui/form";
import { useTransition } from "react";
import { SubmitButton } from "@/components/forms/SubmitButton";
import { useRouter } from "next/navigation";
import { User } from "@/prisma/client";
import { EditUserSchema } from "@/schema";

interface Props {
  initialData?: User;
}

export const UserForm = ({ initialData }: Props) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const isEdit = Boolean(initialData?.id);

  const FormSchema = EditUserSchema;
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: isEdit ? initialData?.firstName : "",
      lastName: isEdit ? initialData?.lastName : "",
      username: isEdit ? initialData?.username ?? "" : "",
      phoneNumber: isEdit ? initialData?.phoneNumber ?? "" : "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    startTransition(() => {
      if (isEdit) {
      } else {
      }
    });
  };
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <LocalizedInput
                control={form.control}
                name="firstName"
                type="text"
                direction="rtl"
                textAlign="right"
                label="نام"
              />
              <LocalizedInput
                control={form.control}
                name="lastName"
                type="text"
                direction="rtl"
                textAlign="right"
                label="نام‌خانوادگی"
              />
            </div>
            <LocalizedInput
              control={form.control}
              name={"phoneNumber"}
              type="text"
              placeholder="09123456789"
              label="شماره موبایل"
              direction="ltr"
            />
            {/*<LocalizedInput*/}
            {/*  control={form.control}*/}
            {/*  name="address"*/}
            {/*  type="text"*/}
            {/*  direction="rtl"*/}
            {/*  textAlign="right"*/}
            {/*  label="آدرس"*/}
            {/*/>*/}

            {/*<FormField*/}
            {/*  control={form.control}*/}
            {/*  name="is_active"*/}
            {/*  render={() => (*/}
            {/*    <FormItem className="grid gap-3">*/}
            {/*      <FormLabel className="block text-sm font-medium leading-6">*/}
            {/*        وضعیت*/}
            {/*      </FormLabel>*/}
            {/*      <FormControl>*/}
            {/*        <Select*/}
            {/*          value={form.watch("is_active") ? "active" : "in_active"}*/}
            {/*          onValueChange={(value) =>*/}
            {/*            form.setValue("is_active", value === "active")*/}
            {/*          }*/}
            {/*        >*/}
            {/*          <SelectTrigger className="w-[180px]">*/}
            {/*            <SelectValue placeholder="وضعیت را انتخاب کنید" />*/}
            {/*          </SelectTrigger>*/}
            {/*          <SelectContent>*/}
            {/*            <SelectGroup>*/}
            {/*              <SelectItem value="active">فعال</SelectItem>*/}
            {/*              <SelectItem value="in_active">غیرفعال</SelectItem>*/}
            {/*            </SelectGroup>*/}
            {/*          </SelectContent>*/}
            {/*        </Select>*/}
            {/*      </FormControl>*/}
            {/*    </FormItem>*/}
            {/*  )}*/}
            {/*/>*/}

            <div className="flex flex-col gap-3">
              <SubmitButton
                pending={isPending}
                label={isEdit ? "ویرایش کاربر" : "ساخت کاربر"}
              />
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};