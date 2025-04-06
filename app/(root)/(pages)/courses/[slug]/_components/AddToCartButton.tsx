"use client";

import { HiShoppingCart } from "react-icons/hi2";

import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartProvider";
import { useCurrentUser } from "@/hooks/use-current-user";
import { toast } from "sonner";

interface Props {
  courseId: string;
}

export const AddToCartButton = ({ courseId }: Props) => {
  const user = useCurrentUser();
  const handleOnClick = () => {
    if (!user) {
      toast.info("لطفا ابتدا وارد حساب خود شوید.");
      return;
    }
    addToCart(courseId);
  };
  const { addToCart } = useCart();
  return (
    <Button
      size="lg"
      className="text-sm font-semibold dark:text-white flex items-center"
      onClick={handleOnClick}
    >
      <HiShoppingCart className="size-4.5 ml-1" />
      <p>افزودن به سبد خرید</p>
    </Button>
  );
};