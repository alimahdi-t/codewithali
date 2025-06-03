"use client";

import { HiShoppingCart } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
import { toast } from "sonner";
import { addToCart } from "@/actions/cart/add-to-cart.action";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { mutateCartCount } from "@/components/shared/cart/CartButtonWrapper";

interface Props {
  courseId: string;
}

export const AddToCartButton = ({ courseId }: Props) => {
  const user = useCurrentUser();
  const [isPending, setPending] = useState(false);

  const handleOnClick = async () => {
    if (!user) {
      toast.info("لطفا ابتدا وارد حساب خود شوید.");
      return;
    }
    setPending(true);

    const result = await addToCart({ id: Number(courseId) });

    if (result?.error) {
      toast.error(result.error);
    } else if (result?.warning) {
      toast.warning(result.warning);
    } else if (result?.success) {
      toast.success(result.success);
      // ✅ Trigger revalidation of cart count
      mutateCartCount();
    }
    setPending(false);
  };

  return (
    <Button
      size="lg"
      className="text-sm font-semibold dark:text-white flex items-center w-48"
      onClick={handleOnClick}
    >
      {isPending ? (
        <BeatLoader size={8} />
      ) : (
        <span className="flex items-center justify-center gap-x-0.5">
          <HiShoppingCart className="size-4.5 w-4.5 h-4.5 ml-1" />
          <p>افزودن به سبد خرید</p>
        </span>
      )}
    </Button>
  );
};