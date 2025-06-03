import { CartEmpty } from "@/app/(root)/(shopping)/checkout/_components/CartEmpty";
import { getCartItems } from "@/actions/cart/get-cart-items.action";
import { CartItems } from "@/app/(root)/(shopping)/checkout/_components/CartItems";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Price from "@/components/common/Price";
import { convertToPersianAndFormat } from "@/utils";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ApplyDiscountCodeForm } from "@/components/forms/ApplyDiscountCodeForm";

interface Props {
  discount?: string;
  cart: number[];
}

export const Cart = async ({ discount, cart }: Props) => {
  if (cart.length < 1) return <CartEmpty />;

  const response = await getCartItems({
    cartItems: cart.map((item) => item.toString()),
    discountCode: discount,
  });
  if (!response?.data) {
    return <CartEmpty />;
  }
  const { data, payableAmount, totalDiscount, totalPrice } = response;
  const serverCart = response.data;
  console.log(serverCart);
  return (
    <div className="w-full flex flex-col">
      <h2 className="c-text-h3">ثبت سفارش</h2>
      <div className="grid md:grid-cols-12 grid-cols-1 gap-8 mt-4 max-lg:flex-wrap">
        <div className="md:col-span-8 col-span-1 flex flex-col gap-4">
          <CartItems cartItems={serverCart} />
        </div>
        <div className="md:col-span-4 col-span-1 flex flex-col gap-4 sticky top-4 h-min">
          <Card className="flex flex-col gap-4">
            <CardHeader>
              <CardTitle>سفارش شما</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <div className="flex items-center justify-between text-sm font-medium">
                  <p>مبلغ کل</p>
                  <Price
                    price={totalPrice}
                    // price={calculateTotalPrice(serverCart)}
                    classname="font-normal text-sm gap-1"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-action-error">
                  <p>تخفیف</p>
                  <p className="font-normal text-sm gap-1">
                    {`${convertToPersianAndFormat(
                      totalDiscount,
                      // calculateTotalDiscount(serverCart),
                    )} تومان`}
                  </p>
                </div>
                <Separator className="mt-4" />
                <div className="mt-6 flex items-center justify-between text-sm font-medium">
                  <p className="font-bold">مبلغ قابل پرداخت</p>
                  <p className="font-bold gap-1">
                    {`${convertToPersianAndFormat(
                      payableAmount,
                      // calculatePayableAmount(serverCart),
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
            discount={discount}
          />
        </div>
      </div>
    </div>
  );
};