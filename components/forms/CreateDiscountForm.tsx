"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
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
import Loader from "@/components/common/Loader";
import { CreateDiscountSchema } from "@/schema/create-discount.schema";
import Calender from "@/components/shared/Calender/Calender";
import { useEffect, useTransition } from "react";
import { toast } from "sonner";
import { createDiscounts } from "@/actions/discount/create-discounts.action";

interface Props {
  ids: string[];
}

export default function CreateDiscountForm({ ids }: Props) {
  const [isPending, startTransition] = useTransition();
  const FormSchema = CreateDiscountSchema;
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onTouched",
    defaultValues: {
      courseIds: ids,
      percentage: 0,
      startsAt: new Date(),
      expiresAt: new Date(),
    },
  });

  // 👇 Sync courseIds if `ids` prop changes
  useEffect(() => {
    form.setValue(
      "courseIds",
      ids.map((id) => String(id)),
    );
  }, [ids]);

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    console.log(data);
    try {
      startTransition(() => {
        createDiscounts(data)
          .then((response) => {
            if (response?.error) {
              toast.error(response.error);
            }
            if (response.success) {
              toast.success(response.success);
            }
          })
          .catch(() => {
            toast.error("Something went wrong!");
          });
      });
    } catch (error) {}
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-3xl px-4">
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex items-center gap-4 flex-wrap">
              <FormField
                control={form.control}
                name="percentage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>مقدار تخفیف</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        className="leading-6 w-32"
                        placeholder="درصد تخفیف"
                        {...field}
                        min={0}
                        max={100}
                        onChange={(event) => {
                          console.log(event.target.value);
                          form.setValue(
                            "percentage",
                            Number(event.target.value),
                          );
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="startsAt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>تاریخ شروع</FormLabel>
                    <FormControl>
                      <Calender
                        onDateSelect={(date) => {
                          form.setValue("expiresAt", date.toDate());
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="expiresAt"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>تاریخ انقضا</FormLabel>
                    <FormControl>
                      <Calender
                        onDateSelect={(date) => {
                          form.setValue("expiresAt", date.toDate());
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="relative mt-6">
                <Button
                  // disabled={!form.formState.isValid}
                  type="submit"
                  size="sm"
                >
                  {form.formState.isSubmitting ? <Loader /> : "افزودن"}
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}