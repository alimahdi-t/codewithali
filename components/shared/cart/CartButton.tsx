"use client";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartProvider";
import { convertToPersianNumbers } from "@/utils";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useCurrentUser } from "@/hooks/use-current-user";

export const CartButton = () => {
  const { cart } = useCart();
  const user = useCurrentUser();
  if (!user) return null;
  return (
    <Link href="/checkout">
      <Button size="icon" variant="ghost" className="rounded-full relative">
        {cart.length > 0 && (
          <span className="absolute opacity-60 dark:opacity-80 dark:text-black flex items-center justify-center p-2.5 bottom-px -right-1.5 w-4 h-4 rounded-full text-white text-center bg-primary  text-[10px]">
            {convertToPersianNumbers(cart.length)}
          </span>
        )}

        <ShoppingCart className="size-5" />
      </Button>
    </Link>
  );
};