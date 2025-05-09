import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const CartEmpty = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-center flex-col items-center">
        <Image
          src={"svg/empty-cart.svg"}
          width={400}
          height={400}
          alt=""
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
};