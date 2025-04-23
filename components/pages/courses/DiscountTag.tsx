import { convertToPersianAndFormat } from "@/utils";

const DiscountTag = ({ discount = 0 }: { discount: number | undefined }) => {
  if (discount === 0) return null;
  return (
    <div className="absolute">
      <span className="relative top-3 right-3 z-40 bg-primary tracking-wider px-3 text-xs text-primary-foreground rounded">
        {`${convertToPersianAndFormat(discount)}%`}
      </span>
    </div>
  );
};

export default DiscountTag;