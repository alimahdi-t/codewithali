import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { convertToPersianNumbers } from "@/utils";
import { CourseItem } from "@/app/(root)/(shopping)/checkout/_components/CourseItem";
import { Prisma } from "@/prisma/client";

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
  onRemove: (id: string) => void;
}

export const CartItems = ({ cartItems, onRemove }: Props) => {
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
              onClick={() => onRemove(cartItem.id.toString())}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};