import moment from "jalali-moment";
import { toPersianNumber } from "@/utils";
import { StudentIcon } from "@/public/assets/icons/hugeIcons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CommentReply } from "@/components/shared/Comment/CommentReply";

interface CommentProps {
  content: string;
  author: string;
  date: Date;
  commentId: string;
  targetId: number;
  targetType: "course" | "post";
  children?: React.ReactNode;
  replyAllowed?: boolean;
  isReply?: boolean;
}
//Todo: based of rule must show different profile
export const Comment = ({
  content,
  author,
  date,
  commentId,
  targetType,
  targetId,
  isReply = false,
  replyAllowed = true,
  children,
  ...props
}: CommentProps) => {
  return (
    <div
      className={`p-4.5 md:p-5 ${
        isReply
          ? "mt-4 bg-gray-200/80 dark:bg-gray-100/10"
          : "bg-gray-100 dark:bg-gray-100/5"
      } dark:bg-dark rounded-lg group duration-500 transition-[height]`}
      {...props}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-1.5">
          <div className="size-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
            <StudentIcon className="size-4.5 fill-gray-500 dark:fill-gray-400" />
          </div>
          <p className="text-sm font-medium text-dark-900_light-25">{author}</p>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <p className="text-xs text-dark-400_light-600">
                {toPersianNumber(
                  moment(date).locale("fa").format("YYYY/MM/DD"),
                )}
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-[10px]">
                {toPersianNumber(
                  moment(date).locale("fa").format("DD MMM YYYY, HH:mm"),
                )}
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      <p className="mt-3 text-sm font-normal text-dark-700_light-300 leading-5">
        {content}
      </p>
      {children}
      {replyAllowed && (
        <CommentReply
          parentId={commentId}
          targetId={targetId}
          targetType={targetType}
        />
      )}
    </div>
  );
};