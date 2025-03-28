import { calculateDiscount, convertToPersianAndFormat } from "@/utils";
import TomanIcon from "@/components/common/TomanIcon";
import { cn } from "@/lib/utils";

interface Props {
  price: number;
  discount?: number;
  classname?: string;
  iconClassName?: string;
}

const Price = ({ price, discount, classname, iconClassName }: Props) => {
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
          <TomanIcon
            className={cn(
              "dark:stroke-gray-100 stroke-gray-800",
              iconClassName,
            )}
          />
        </>
      )}
    </p>
  );
};

export default Price;