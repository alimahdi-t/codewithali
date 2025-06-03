"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ApplyDiscountCodeSchema } from "@/schema/apply-discount-code.schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useTransition } from "react";
import { toast } from "sonner";
import { HiTrash } from "react-icons/hi2";
import { applyDiscountCodeAction } from "@/actions/discount-codes/apply-discount-code.action";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { BeatLoader } from "react-spinners";
import { Prisma } from "@/prisma/client";
import { useRouter, useSearchParams } from "next/navigation";

type discountType = Prisma.DiscountCodeGetPayload<{
  include: { CourseDiscount: true };
}>;

interface Props {
  courseIds: number[];
  onSuccess?: (discount: discountType) => void;
  discount?: string;
}

export const ApplyDiscountCodeForm = ({
  courseIds,
  onSuccess,
  discount,
}: Props) => {
  const [appliedCode, setAppliedCode] = useState<string | null>(null);
  const [accordionValue, setAccordionValue] = useState<string | undefined>(
    discount ? "item-1" : undefined,
  );
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const searchParams = useSearchParams();

  const form = useForm<z.infer<typeof ApplyDiscountCodeSchema>>({
    resolver: zodResolver(ApplyDiscountCodeSchema),
    mode: "onSubmit",
    defaultValues: {
      code: "",
      courseIds: courseIds,
    },
  });

  useEffect(() => {
    if (discount) {
      setAppliedCode(discount);
      setAccordionValue("item-1");
    }
  }, [discount]);

  const onSubmit = async (data: z.infer<typeof ApplyDiscountCodeSchema>) => {
    startTransition(() => {
      applyDiscountCodeAction(data).then((response) => {
        if (response.error) {
          form.setError("code", {
            type: "manual",
            message: response.error,
          });
        }

        if (response.success) {
          form.reset();
          setAppliedCode(response.discount.code);
          toast.success(response.success);
          onSuccess?.(response.discount);

          const params = new URLSearchParams(searchParams);
          params.set("discount", response.discount.code);
          router.push(`?${params.toString()}`);
        }
      });
    });
  };

  const handleCancel = () => {
    setAppliedCode(null);
    form.reset();
    toast.info("کد تخفیف لغو شد");

    const params = new URLSearchParams(searchParams);
    params.delete("discount");
    router.push(`?${params.toString()}`);
  };

  return (
    <Card>
      <CardContent>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          value={accordionValue}
          onValueChange={setAccordionValue}
        >
          <AccordionItem value="item-1">
            <AccordionTrigger className="p-1">
              <span className="text-sm font-medium">کد تخفیف دارید؟</span>
            </AccordionTrigger>
            <AccordionContent className="p-1">
              <div className="w-full">
                {appliedCode ? (
                  <div className="flex items-center justify-between py-1.5 rounded-md text-green-600 dark:text-green-400">
                    <span className="text-sm font-normal">
                      کد <strong>{appliedCode}</strong> اعمال شد
                    </span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleCancel}
                      className="rounded-full"
                    >
                      <HiTrash className="size-5 text-action-error" />
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                      <FormField
                        control={form.control}
                        name="code"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="w-full flex gap-2 items-center mt-2">
                                <Input
                                  type="text"
                                  placeholder="مثلاً: SUMMER2025"
                                  className="leading-6"
                                  {...field}
                                />
                                <Button
                                  disabled={!form.formState.isValid}
                                  type="submit"
                                  className="flex justify-self-end"
                                >
                                  {isPending ? <BeatLoader size={8} /> : "ثبت"}
                                </Button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </form>
                  </Form>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};