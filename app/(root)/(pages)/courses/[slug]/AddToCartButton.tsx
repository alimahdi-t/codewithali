"use client";

import { HiShoppingCart } from "react-icons/hi2";

import { Button } from "@/components/ui/button";

export const AddToCartButton = () => {
  return (
    <Button
      size="lg"
      className="text-sm font-semibold dark:text-white flex items-center"
    >
      <HiShoppingCart className="size-4.5 ml-1" />
      <p>افزودن به سبد خرید</p>
    </Button>
  );
};