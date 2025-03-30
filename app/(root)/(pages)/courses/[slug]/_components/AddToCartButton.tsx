"use client";

import { HiShoppingCart } from "react-icons/hi2";

import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartProvider";

interface Props {
  courseId: string;
}

export const AddToCartButton = ({ courseId }: Props) => {
  const { addToCart } = useCart();
  return (
    <Button
      size="lg"
      className="text-sm font-semibold dark:text-white flex items-center"
      onClick={() => addToCart({ id: courseId })}
    >
      <HiShoppingCart className="size-4.5 ml-1" />
      <p>افزودن به سبد خرید</p>
    </Button>
  );
};