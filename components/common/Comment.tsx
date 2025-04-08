import moment from "jalali-moment";
import { convertToPersianNumbers } from "@/utils";
import { StudentIcon } from "@/public/assets/icons/hugeIcons";
import { HiOutlineArrowUturnLeft } from "react-icons/hi2";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CommentProps {
  content: string;
  author: string;
  date: Date;
}

export const Comment = ({ content, author, date, ...props }: CommentProps) => {
  return (
    <div
      className="p-4.5 md:p-5 bg-gray-100 dark:bg-gray-100/5 dark:bg-dark rounded-lg group"
      {...props}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-1.5">
          <div className="size-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
            <StudentIcon className="size-4.5 fill-gray-500 dark:fill-gray-400" />
          </div>
          <p className="text-sm font-medium text-dark-900_light-25">{author}</p>
          <HiOutlineArrowUturnLeft />
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <p className="text-xs text-dark-400_light-600">
                {convertToPersianNumbers(
                  moment(date).locale("fa").format("YYYY/MM/DD"),
                )}
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-[10px]">
                {convertToPersianNumbers(
                  moment(date).locale("fa").format("DD MMM YYYY, HH:mm"),
                )}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <p className="mt-3 text-sm font-normal text-dark-900_light-200">
        {content}
      </p>
    </div>
  );
};