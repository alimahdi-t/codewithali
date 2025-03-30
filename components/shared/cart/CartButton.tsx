"use client";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartProvider";
import { convertToPersianNumbers } from "@/utils";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export const CartButton = () => {
  const { cart } = useCart();

  return (
    <Link href="/checkout">
      <Button size="icon" variant="ghost" className="rounded-full relative">
        {cart.length > 0 && (
          <span className="absolute flex items-center justify-center p-2.5 bottom-px -right-1.5 w-4 h-4 rounded-full text-white text-center bg-primary  text-[10px]">
            {convertToPersianNumbers(cart.length)}
          </span>
        )}

        <ShoppingCart className="size-5" />
      </Button>
    </Link>
  );
};