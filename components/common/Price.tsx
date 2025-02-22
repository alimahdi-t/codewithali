import { calculateDiscount, convertToPersianAndFormat } from "@/utils";
import TomanIcon from "@/components/common/TomanIcon";
import { number } from "zod";
import { cn } from "@/lib/utils";

interface Props {
  price: number;
  discount?: number;
  classname?: string;
}

const Price = ({ price, discount, classname }: Props) => {
  return (
    <p className={cn("`text-sm font-semibold flex gap-1`", classname)}>
      {price === 0 || discount === 100 ? (
        "رایگان!"
      ) : (
        <>
          {convertToPersianAndFormat(
            calculateDiscount(price, {
              amount: 0,
              percentage: discount,
            }),
          )}
          <TomanIcon className=" stroke-gray-800" />
        </>
      )}
    </p>
  );
};

export default Price;
