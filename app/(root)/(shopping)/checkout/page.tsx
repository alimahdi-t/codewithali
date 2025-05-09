"use client";

import { useCart } from "@/context/CartProvider";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  calculatePayableAmount,
  calculateTotalDiscount,
  calculateTotalPrice,
  convertToPersianAndFormat,
} from "@/utils";
import Price from "@/components/common/Price";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getCartItems } from "@/actions/cart/get-cart-items.action";
import { toast } from "sonner";
import { Prisma } from "@/prisma/client";
import CheckOutPageLoading from "./loading";
import { ApplyDiscountCodeForm } from "@/components/forms/ApplyDiscountCodeForm";
import { CartEmpty } from "@/app/(root)/(shopping)/checkout/_components/CartEmpty";
import { CartItems } from "@/app/(root)/(shopping)/checkout/_components/CartItems";

type CourseWithDiscount = Prisma.CourseGetPayload<{
  select: {
    id: true;
    title: true;
    price: true;
    imageUrl: true;
    discount: true;
  };
}>;

type CourseType = CourseWithDiscount & {
  discountAmount: number;
};

const Checkout = () => {
  const { cart, removeFromCart } = useCart(); // Ids of courses, example: [1, 2]
  const [serverCart, setServerCart] = useState<CourseType[]>([]);
  const [isLoading, setIsLoading] = useState(true); // 👈 loading state
  const [appliedDiscount, setAppliedDiscount] = useState<string>();

  useEffect(() => {
    const getCart = async () => {
      setIsLoading(true);
      const response = await getCartItems({
        cartItems: cart,
        discountCode: appliedDiscount,
      });
      if (response.error) {
        toast.error(response.error);
      }
      if (response.success) {
        setServerCart(response.data);
      }
      setIsLoading(false);
    };

    getCart();
  }, [cart]);

  const length = cart.length;

  // 👇 Show loading UI while fetching data
  if (isLoading) {
    return <CheckOutPageLoading />;
  }

  if (length < 1) return <CartEmpty />;

  if (!serverCart) return null;

  return (
    <div className="w-full flex flex-col">
      <h2 className="c-text-h3">ثبت سفارش</h2>
      <div className="grid md:grid-cols-12 grid-cols-1 gap-8 mt-4 max-lg:flex-wrap">
        <div className="md:col-span-8 col-span-1 flex flex-col gap-4">
          <CartItems
            cartItems={serverCart}
            onRemove={(id) => {
              removeFromCart(id);
            }}
          />
        </div>
        <div className="md:col-span-4 col-span-1 flex flex-col gap-4 sticky top-4 h-min">
          <Card className="flex flex-col gap-4">
            <CardHeader>
              <CardTitle>سفارش شما</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="">
                <div className="flex items-center justify-between text-sm font-medium">
                  <p>مبلغ کل</p>
                  <Price
                    price={calculateTotalPrice(serverCart)}
                    classname="font-normal text-sm gap-1"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-action-error">
                  <p>تخفیف</p>
                  <p className="font-normal text-sm gap-1">
                    {`${convertToPersianAndFormat(
                      calculateTotalDiscount(serverCart),
                    )} تومان`}
                  </p>
                </div>
                <Separator className="mt-4" />
                <div className="mt-6 flex items-center justify-between text-sm font-medium">
                  <p className="font-bold">مبلغ قابل پرداخت</p>
                  <p className="font-bold gap-1">
                    {`${convertToPersianAndFormat(
                      calculatePayableAmount(serverCart),
                    )} تومان`}
                  </p>
                </div>
                <Button className="w-full mt-8 text-base font-medium">
                  پرداخت
                </Button>
                <p className="text-xs font-normal mt-2.5 text-muted-foreground">
                  پرداخت و ثبت سفارش، به منزله مطالعه و پذیرفتن
                  <Link className="text-primary" href="#">
                    {" "}
                    قوانین و مقررات
                  </Link>{" "}
                  استفاده از خدمات فرادرس است.
                </p>
              </div>
            </CardContent>
          </Card>
          <ApplyDiscountCodeForm
            courseIds={serverCart.map((c) => c.id)}
            onSuccess={(discount) => {
              console.log("Received discount in parent:", discount);
              setAppliedDiscount(discount.code);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;