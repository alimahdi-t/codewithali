"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LocalizedInput } from "@/components/shared/LocalizedInput";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useTransition } from "react";
import { SubmitButton } from "@/components/forms/SubmitButton";
import { useRouter } from "next/navigation";
import { Role, User } from "@/prisma/client";
import { Select } from "@radix-ui/react-select";
import { UserSchema } from "@/schema/UserSchema.schema";
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { updateUserAction } from "@/actions/users/update-user.action";
import { toast } from "sonner";

interface Props {
  initialData?: User;
}

export const UserForm = ({ initialData }: Props) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const isEdit = Boolean(initialData?.id);
  const FormSchema = UserSchema;
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: isEdit ? initialData?.firstName : "",
      lastName: isEdit ? initialData?.lastName : "",
      username: isEdit ? initialData?.username ?? "" : "",
      phoneNumber: isEdit ? initialData?.phoneNumber ?? "" : "",
      email: isEdit ? initialData?.email ?? "" : "",
      role: isEdit ? initialData?.role : undefined,
      bio: isEdit ? initialData?.bio ?? "" : "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    startTransition(() => {
      if (isEdit && initialData?.id) {
        updateUserAction({ userId: Number(initialData.id), values: data }).then(
          (response) => {
            if (response.error) {
              toast.error(response.error);
            } else if (response.success) {
              toast.success(response.success);
              router.push("/dashboard/admin/users");
            }
          },
        );
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

            <div className="grid grid-cols-2 gap-4">
              <LocalizedInput
                control={form.control}
                name={"phoneNumber"}
                type="text"
                placeholder="09123456789"
                label="شماره موبایل"
                direction="ltr"
              />
              <FormField
                control={form.control}
                name="role"
                render={() => (
                  <FormItem className="grid gap-3">
                    <FormLabel className="block text-sm font-medium leading-6">
                      نقش کاربر
                    </FormLabel>
                    <FormControl>
                      <Select
                        value={form.watch("role")}
                        onValueChange={(value) =>
                          form.setValue("role", value as Role)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="نقش را انتخاب کنید" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="USER">کاربر</SelectItem>
                            <SelectItem value="INSTRUCTOR" disabled>
                              مدرس
                            </SelectItem>
                            <SelectItem value="AUTHOR" disabled>
                              نویسنده
                            </SelectItem>
                            <SelectItem value="INSTRUCTOR_AUTHOR" disabled>
                              مدرس و نویسنده
                            </SelectItem>
                            <SelectItem value="ADMIN">مدیر</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <LocalizedInput
              control={form.control}
              name={"username"}
              type="text"
              placeholder=""
              label="نام کاربری"
              direction="ltr"
            />
            <LocalizedInput
              control={form.control}
              name={"email"}
              type="text"
              placeholder="example@mail.com"
              label="ایمیل"
              direction="ltr"
            />
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>درباره من</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="یک توضیح کوتاه درباره خودتان بنویسید..."
                      className="resize-none"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

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