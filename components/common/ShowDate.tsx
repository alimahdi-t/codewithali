import moment from "jalali-moment";
import { toPersianNumber } from "@/utils";
import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  date?: Date;
  format?: string;
  className?: string;
}

const ShowDate = ({
  date = new Date(),
  className,
  format = "YYYY/MM/DD",
}: Props) => {
  const m = moment(date).locale("fa");
  return (
    <div className={cn("text-gray-500", className)}>
      <time dateTime={m.toString()}>{toPersianNumber(m.format(format))}</time>
    </div>
  );
};

export default ShowDate;