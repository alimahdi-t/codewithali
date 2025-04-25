import { AddToCartButton } from "@/app/(root)/(pages)/courses/[slug]/_components/AddToCartButton";
import Price from "@/components/common/Price";
import Image from "next/image";
import { TimerCountdown } from "@/app/(root)/(pages)/courses/[slug]/_components/TimerCountdown";
import { Discount } from "@/prisma/client";

interface Props {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  discount: Discount | null;
}

export const CourseHeader = (props: Props) => {
  const { id, title, description, imageUrl, price, discount } = props;
  return (
    <div className="grid grid-cols-7 gap-4 max-lg:grid-cols-1">
      <div className="lg:col-span-4 flex flex-col justify-between max-lg:order-2 overflow-hidden max-lg:mt-3">
        <div>
          <h1 className="c-text-h3">{title}</h1>
          <p className="leading-7 mt-4 line-clamp-4">
            {description} {description} {description}
          </p>
        </div>
        <TimerCountdown
          date={discount?.expiresAt}
          percentage={discount?.percentage}
        />
        <div className="flex justify-between items-center mt-4 flex-wrap gap-4">
          <AddToCartButton courseId={id} />
          <div className="flex items-center gap-2">
            {discount && (
              <Price
                price={price}
                classname="line-through text-dark-400_light-300 text-lg"
                iconClassName="hidden"
              />
            )}
            <Price
              price={price}
              classname="text-2xl font-bold"
              iconClassName="w-6 h-6 mr-1.5"
              discount={discount?.percentage}
            />
          </div>
        </div>
      </div>
      <div className="lg:col-span-3 overflow-hidden rounded-lg max-lg:order-1">
        <Image
          src={imageUrl}
          width={1200}
          height={1200}
          alt={""}
          className="object-cover"
        />
      </div>
    </div>
  );
};