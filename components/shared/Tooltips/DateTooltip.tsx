import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { convertToPersianNumbers } from "@/utils";
import moment from "jalali-moment";

interface Props {
  date: Date;
}

export const DateTooltip = ({ date }: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          {convertToPersianNumbers(
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