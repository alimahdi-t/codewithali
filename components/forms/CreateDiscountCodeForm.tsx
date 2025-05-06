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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loader from "@/components/common/Loader";
import Calender from "@/components/shared/Calender/Calender";
import { useState, useTransition } from "react";
import { CreateDiscountCodeSchema } from "@/schema/create-discount-code.schema";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { MultiSelect } from "@/components/MultiSelect";
import { Prisma } from "@/prisma/client";

type course = Prisma.CourseGetPayload<{
  select: {
    id: true;
    title: true;
  };
}>;
interface Props {
  courses: course[];
}

export default function CreateDiscountCodeForm({ courses }: Props) {
  const [isPending, startTransition] = useTransition();
  const [hasExpireDate, setHasExpireDate] = useState(false);
  const FormSchema = CreateDiscountCodeSchema;

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: "onTouched",
    defaultValues: {
      code: "",
      percentage: undefined,
      flatAmount: undefined,
      usageLimit: undefined,
      minPurchase: undefined,
      maxDiscount: undefined,
      isActive: true,
      appliesToAll: true,
      description: "",
      expiresAt: undefined,
      type: "PERCENTAGE",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    console.log(data);
    try {
      startTransition(() => {
        // Call your API function here
      });
    } catch (error) {
      console.error(error);
    }
  };
  const options = courses.map((course) => ({
    label: course.title,
    value: course.id.toString(),
  }));
  if (!courses) return null;
  const discountType = form.watch("type");
  const appliesToAll = form.watch("appliesToAll");
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-3xl px-4">
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="leading-6">کد تخفیف</FormLabel>
                    <FormControl>
                      <Input
                        value={field.value.toUpperCase()}
                        onChange={field.onChange}
                        placeholder="مثلاً: SUMMER2025"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>نوع تخفیف</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        form.setValue("flatAmount", undefined);
                        form.setValue("percentage", undefined);
                      }}
                      defaultValue={field.value}
                      dir="rtl"
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="نوع" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="PERCENTAGE">درصدی</SelectItem>
                        <SelectItem value="FLAT">مقدار ثابت</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {discountType === "PERCENTAGE" && (
                <FormField
                  control={form.control}
                  name="percentage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>درصد تخفیف</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="مثلاً: 25 (درصد)"
                          value={field.value ?? ""}
                          onChange={(e) => field.onChange(e.target.value)}
                          min={1}
                          max={100}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              {discountType === "FLAT" && (
                <FormField
                  control={form.control}
                  name="flatAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>مقدار تخفیف</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="مثلاً: 500000 تومان"
                          value={field.value ?? ""}
                          onChange={(e) => field.onChange(e.target.value)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              <FormField
                control={form.control}
                name="minPurchase"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>حداقل مقدار خرید</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="کف سبد خرید به تومان"
                        value={field.value ?? ""}
                        onChange={(e) => field.onChange(e.target.value)}
                        min={1}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="maxDiscount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>حداکثر مقدار تخفیف</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="حداکثر تخفیف قابل اعمال"
                        value={field.value ?? ""}
                        onChange={(e) => field.onChange(e.target.value)}
                        min={1}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="usageLimit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>حداکثر استفاده از کد تخفیف</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="مثلاً: 1000 بار"
                        value={field.value ?? ""}
                        onChange={(e) => field.onChange(e.target.value)}
                        min={1}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-4 items-start">
              <FormField
                control={form.control}
                name="isActive"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-x-1 flex-row-reverse">
                    <FormLabel className="text-sm">فعال</FormLabel>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="appliesToAll"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-x-1 flex-row-reverse">
                    <FormLabel className="text-sm">
                      اعمال به تمام دوره ها
                    </FormLabel>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center text-sm gap-x-1">
                <Switch
                  id="has-expire-date"
                  checked={hasExpireDate}
                  onCheckedChange={() => setHasExpireDate(!hasExpireDate)}
                />
                <Label htmlFor="has-expire-date">دارای تاریخ انقضا</Label>
              </div>
            </div>
            {hasExpireDate && (
              <FormField
                control={form.control}
                name="expiresAt"
                render={() => (
                  <FormItem>
                    <FormLabel>تاریخ انقضا</FormLabel>
                    <FormControl>
                      <Calender
                        triggerClassName="w-full"
                        onDateSelect={(date) => {
                          form.setValue("expiresAt", date.toDate());
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            {!appliesToAll && (
              <FormField
                control={form.control}
                name="CourseDiscount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>انتخاب دوره‌ها</FormLabel>
                    <FormControl>
                      <MultiSelect
                        options={options}
                        onValueChange={(selectedIds) => {
                          // Set value as array of objects: [{ courseId: number }]
                          const courseDiscount = selectedIds.map((id) => ({
                            courseId: parseInt(id, 10),
                          }));
                          field.onChange(courseDiscount);
                        }}
                        value={
                          field.value?.map((item) =>
                            item.courseId.toString(),
                          ) ?? []
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>توضیحات</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="توضیحات دلخواه" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="mt-6 flex items-center gap-x-2">
              <Button type="submit" disabled={isPending}>
                {isPending ? <Loader /> : "افزودن کد تخفیف"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}