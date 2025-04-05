"use client";
import { EditUserSchema } from "@/schema/edit-user.schema";
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
import { useCurrentRole } from "@/hooks/use-cuurent-role";
import { useTransition } from "react";
import Loader from "@/components/common/Loader";
import { editUser } from "@/actions/editUser";
import { toast } from "sonner";
import { useSession } from "next-auth/react";

interface EditUserFormProps {
  initialData?: z.infer<typeof EditUserSchema>;
}

export const EditUserForm = ({ initialData }: EditUserFormProps) => {
  const [isPending, startTransition] = useTransition();
  const role = useCurrentRole();
  const { update } = useSession();

  const FormSchema = EditUserSchema;
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
    defaultValues: initialData || {
      username: "",
      firstName: "",
      lastName: "",
      imageUrl: "",
      email: "",
      phoneNumber: "",
      bio: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    startTransition(() => {
      editUser(data).then((response) => {
        if (response.error) {
          toast.error(response.error);
        }
        if (response.success) {
          toast.success(response.success);
          update();
        }
      });
    });
  };

  return (
    <div className="flex justify-center">
      <div className="w-full">
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>نام</FormLabel>
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
                    <FormLabel>نام‌خانوادگی</FormLabel>
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
                    <FormLabel>شماره موبایل</FormLabel>
                    <FormControl>
                      <Input type="text" className="leading-6" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {role !== "USER" && (
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>نام کابری</FormLabel>
                      <FormControl>
                        <Input type="text" className="leading-6" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ایمیل</FormLabel>
                    <FormControl>
                      <Input
                        disabled={true}
                        type="email"
                        className="leading-6"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {role !== "USER" && (
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>بیو</FormLabel>
                    <FormControl>
                      <Textarea
                        className="leading-6 min-h-28 max-h-48"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <div>
              <Button
                type="submit"
                // disabled={!form.formState.isValid}
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