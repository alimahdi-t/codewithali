import Image from "next/image";
import { calculateDiscount, convertToPersianAndFormat } from "@/utils";
import { Button } from "@/components/ui/button";
import { HiOutlineXMark } from "react-icons/hi2";

interface Props {
  title: string;
  imageUrl: string;
  price: number;
  discountPercent: number;
  onClick: () => void;
}

export const CourseItem = ({
  title,
  imageUrl,
  price,
  discountPercent,
  onClick,

  ...props
}: Props) => {
  return (
    <div className="flex justify-between items-center" {...props}>
      <div className="flex-1 flex items-center space-x-2">
        <Image
          width={120}
          height={60}
          src={imageUrl}
          alt={"item image"}
          className="rounded"
          loading="eager"
        />
        <div className="flex-1 flex items-center max-md:items-start justify-between gap-2 max-md:flex-col">
          <p className="text-sm font-light">{title}</p>
          <div className="flex flex-col md:items-end gap-1">
            <p className="text-sm font-light whitespace-nowrap">
              {`${convertToPersianAndFormat(price)} تومان`}
            </p>
            <p className="text-sm font-light whitespace-nowrap text-action-error">
              {`${convertToPersianAndFormat(
                price -
                  calculateDiscount(price, { percentage: discountPercent }),
              )} تومان تخفیف`}
            </p>
          </div>
        </div>
      </div>
      <Button
        size="icon"
        variant="ghost"
        className="rounded-full mr-2"
        onClick={onClick}
      >
        <HiOutlineXMark className="size-5" />
      </Button>
    </div>
  );
};