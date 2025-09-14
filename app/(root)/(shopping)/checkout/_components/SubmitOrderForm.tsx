"use client";

import { useTransition } from "react";

import { Button } from "@/components/ui/button";
import { makeOrder } from "@/actions/order/makeOrder";

interface Props {
  courseIds: number[];
  discountCode?: string;
}

export const SubmitOrderForm = ({ courseIds, discountCode }: Props) => {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(() => {
      makeOrder({ courseIds, discountCode });
      console.log(courseIds, discountCode);
    });
  };

  return (
    <Button
      onClick={handleSubmit}
      className="w-full mt-8 text-base font-medium"
      disabled={isPending}
    >
      {isPending ? "در حال پردازش..." : "پرداخت"}
    </Button>
  );
};