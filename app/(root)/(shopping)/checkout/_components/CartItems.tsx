"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { convertToPersianNumbers } from "@/utils";
import { CourseItem } from "@/app/(root)/(shopping)/checkout/_components/CourseItem";
import { Prisma } from "@/prisma/client";
import { deleteFromCart } from "@/actions/cart/delete-from-cart.action";
import { mutateCartCount } from "@/components/shared/cart/CartButtonWrapper";
import { toast } from "sonner";

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

interface Props {
  cartItems: CourseType[];
}

export const CartItems = ({ cartItems }: Props) => {
  const removeFromCart = async (id: number) => {
    await deleteFromCart({ courseId: id }).then((response) => {
      if (response.success) {
        mutateCartCount();
      } else if (response.error) {
        toast.error(response.error);
      }
    });
  };

  return (
    <Card className="flex">
      <CardHeader>
        <CardTitle>
          {convertToPersianNumbers(`آموزش‌ها (${cartItems.length})`)}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full overflow-hidden space-y-4">
          {cartItems?.map((cartItem) => (
            <CourseItem
              key={cartItem.id}
              title={cartItem.title}
              imageUrl={cartItem.imageUrl}
              price={cartItem.price}
              discountAmount={cartItem.discountAmount}
              onClick={() => removeFromCart(Number(cartItem.id))}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};