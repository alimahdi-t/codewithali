"use client";
import { useCart } from "@/context/CartProvider";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  calculatePayableAmount,
  calculateTotalDiscount,
  calculateTotalPrice,
  convertToPersianAndFormat,
  convertToPersianNumbers,
} from "@/utils";
import Price from "@/components/common/Price";
import { HiOutlineGift } from "react-icons/hi2";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { getCartItems } from "@/actions/cart/get-cart-items.action";
import { toast } from "sonner";
import { CourseItem } from "@/app/(root)/(shopping)/checkout/_components/CourseItem";

const Checkout = () => {
  const { cart, removeFromCart } = useCart();
  const [serverCart, setServerCart] =
    useState<
      { id: number; title: string; imageUrl: string; price: number }[]
    >();

  useEffect(() => {
    const getCart = async () => {
      await getCartItems({ cartItems: cart }).then((response) => {
        if (response.error) {
          toast.error(response.error);
        }
        if (response.success) {
          setServerCart(response.data);
        }
      });
    };

    getCart();
  }, [cart]);

  const length = cart.length;

  if (length < 1)
    return (
      <div className="w-full flex flex-col">
        <div className="flex justify-center flex-col items-center">
          <Image
            src={"svg/empty-cart.svg"}
            width={400}
            height={400}
            alt={""}
            className="object-contain aspect-2/1"
          />
          <div className="relative  text-center">
            <h1 className="font-medium text-xl text-secondary-foreground">
              سبد خرید شما خالی است.
            </h1>
            <p className="text-base mt-2 text-muted-foreground">
              می‌توانید با مراجعه به فهرست دوره‌ها، دوره مورد نظر خود را انتخاب
              کنید.
            </p>
            <Link href="/courses">
              <Button className="mt-3">رفتن به به فهرست دوره‌ها</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  if (!serverCart) return null;
  return (
    <div className="w-full flex flex-col">
      <h2 className="c-text-h3">ثبت سفارش</h2>
      <div className="grid md:grid-cols-12 grid-cols-1 gap-8 mt-4 max-lg:flex-wrap">
        <div className="md:col-span-8 col-span-1 flex flex-col gap-4">
          <Card className="flex">
            <CardHeader>
              <CardTitle>
                {convertToPersianNumbers(`آموزش‌ها (${cart.length})`)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full overflow-hidden space-y-4">
                {serverCart?.map((cartItem) => (
                  <CourseItem
                    key={cartItem.id}
                    title={cartItem.title}
                    imageUrl={cartItem.imageUrl}
                    price={cartItem.price}
                    discountPercent={35}
                    onClick={() => removeFromCart(cartItem.id.toString())}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
          {/*TODO: complete discount section*/}
          <Card className="flex">
            <CardHeader>
              <div className="flex items-center gap-1 text-gray-600">
                <HiOutlineGift className="size-5 relative mb-1" />
                <CardTitle className="text-sm font-semibold">
                  کد تخفیف
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative w-full max-w-[325px] group border py-4 flex items-center rounded-2xl">
                <button
                  className="flex items-center rounded-lg top-1 left-1 !h-10 w-[118px]
                disabled:cursor-not-allowed focus:outline-none bg-none justify-center
                absolute   disabled:text-zinc-300 disabled:bg-zinc-50 bg-zinc-100 text-zinc-600 border-[#E3E3E3] text-sm font-normal"
                >
                  اعمال کد تخفیف
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
        <Card className="md:col-span-4 col-span-1 flex flex-col gap-4 sticky top-4 h-min">
          <CardHeader>
            <CardTitle>سفارش شما</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="">
              <div className="flex items-center justify-between text-sm font-medium">
                <p>مبلغ کل</p>
                <Price
                  price={calculateTotalPrice(serverCart || [])}
                  classname="font-normal text-sm gap-1"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-action-error">
                <p>تخفیف</p>
                <p className="font-normal text-sm gap-1">
                  {`${convertToPersianAndFormat(
                    calculateTotalDiscount(serverCart || []),
                  )} تومان`}
                </p>
              </div>
              <Separator className="mt-4" />
              <div className="mt-6 flex items-center justify-between text-sm font-medium">
                <p className="font-bold">مبلغ قابل پرداخت</p>
                <p className="font-bold gap-1">
                  {`${convertToPersianAndFormat(
                    calculatePayableAmount(serverCart || []),
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
      </div>
    </div>
  );
};

export default Checkout;