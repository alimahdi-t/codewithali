import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { convertToPersianNumbers } from "@/utils";
import moment from "jalali-moment";
import { ReactNode } from "react";

interface Props {
  date: Date;
  children?: ReactNode;
}

export const DateTooltip = ({ date, children }: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          {children
            ? children
            : convertToPersianNumbers(
                moment(date).locale("fa").format("YYYY/MM/DD"),
              )}
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-xs">
            {convertToPersianNumbers(
              moment(date).locale("fa").format("DD MMM YYYY, HH:mm"),
            )}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};