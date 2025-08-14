import { toPersianNumber } from "@/utils";

export const DiscountBadge = ({ percentage }: { percentage?: number }) => {
  const noDiscount = !percentage || percentage <= 0;
  let className = "";
  if (noDiscount) {
    className =
      "text-gray-700 bg-gray-100 dark:text-gray-300 dark:bg-gray-500/20";
  } else if (percentage >= 50) {
    className = "text-red-700 bg-red-100 dark:text-red-300 dark:bg-red-500/20";
  } else if (percentage > 30) {
    className =
      "text-yellow-700 bg-yellow-100 dark:text-yellow-300 dark:bg-yellow-500/20";
  } else {
    className =
      "text-green-700 bg-green-100 dark:text-green-300 dark:bg-green-500/20";
  }

  return (
    <span
      className={`${className} px-2 inline-block py-1 rounded-xl text-xs font-light leading-5 text-center text-nowrap`}
    >
      {noDiscount ? "بدون تخفیف" : toPersianNumber(`${percentage}% تخفیف`)}
    </span>
  );
};