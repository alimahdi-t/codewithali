"use client";
import { useCart } from "@/context/CartProvider";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { convertToPersianAndFormat, convertToPersianNumbers } from "@/utils";
import Price from "@/components/common/Price";
import { HiOutlineGift, HiOutlineXMark } from "react-icons/hi2";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { getCartItems } from "@/actions/cart/get-cart-items.action";
import { toast } from "sonner";

const Checkout = () => {
  const { cart, removeFromCart } = useCart();
  const [serverCart, setServerCart] =
    useState<
      { id: number; title: string; imageUrl: string; price: number }[]
    >();
  const [isMounted, setIsMounted] = useState(false);

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

    setIsMounted(true);
  }, [cart]);

  if (!isMounted) return null; // از رندر در سرور جلوگیری می‌کند
  const length = cart.length;

  if (length < 1)
    return (
      <div className="w-full flex flex-col">
        <div className="flex justify-center flex-col items-center relative bottom-16">
          <Image
            src={"svg/empty-cart.svg"}
            width={320}
            height={320}
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

  return (
    <div className="w-full flex flex-col">
      <h2 className="c-text-h3">ثبت سفارش</h2>
      <div className="flex flex-row gap-8 mt-4 max-lg:flex-wrap">
        <div className="flex-1 flex flex-col gap-4">
          <Card className="flex">
            <CardHeader>
              <CardTitle>
                {convertToPersianNumbers(`آموزش‌ها (${cart.length})`)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full overflow-hidden space-y-4">
                {serverCart?.map((cartItem) => (
                  <div
                    key={cartItem.id}
                    className="flex justify-between items-center"
                  >
                    <div className="flex-1 flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Image
                          width={80}
                          height={40}
                          src={cartItem.imageUrl}
                          alt={"item image"}
                          className="rounded"
                        />
                        <p className="text-sm font-light">{cartItem.title}</p>
                      </div>
                      <div>
                        <p className="text-sm">
                          {`${convertToPersianAndFormat(cartItem.price)} تومان`}
                        </p>
                      </div>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full mr-2"
                      onClick={() => removeFromCart(cartItem.id.toString())}
                    >
                      <HiOutlineXMark className="size-5" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
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
                <input className="outline-none group-hover:bg-red-500" />
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
        <Card className="w-[360px] flex flex-col gap-4 c-card">
          <CardHeader>
            <CardTitle>سفارش شما</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="">
              <div className="flex items-center justify-between text-sm font-medium">
                <p>مبلغ کل</p>
                <Price
                  price={2400000}
                  classname="font-normal text-base gap-1"
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-action-error">
                <p>تخفیف</p>
                <Price price={800000} classname="font-normal text-base gap-1" />
              </div>
              <Separator className="my-3" />
              <div className="flex items-center justify-between text-sm font-medium">
                <p>مبلغ قابل پرداخت</p>
                <Price
                  price={2400000}
                  classname="font-normal text-base gap-1"
                />
              </div>
              <Button className="w-full mt-4">پرداخت</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Checkout;