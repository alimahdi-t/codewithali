import { StatisticsCard } from "@/app/(dashboards)/dashboard/admin/messages/_components/StatisticsCard";
import { getComments } from "@/actions/comments/get-comments.action";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { convertToPersianNumbers } from "@/utils";
import moment from "jalali-moment";
import { CommentStatus } from "@/app/(dashboards)/dashboard/admin/comments/_components/CommentStatus";
import { CommentAction } from "@/app/(dashboards)/dashboard/admin/comments/_components/CommentAction";
import Pagination from "@/components/shared/Pagination";
import { CommentType } from "@/app/(dashboards)/dashboard/admin/comments/_components/CommentType";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CommentsPage = async () => {
  const pageSize = 2;
  const response = await getComments();

  const { comments } = response;
  return (
    <div className="rounded-xl p-4 bg-card shadow-sm">
      <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-6">
        <StatisticsCard count={15} label="همه نظرات" variant="info" />
        <StatisticsCard
          count={3}
          label="نظرات در انتظار تایید"
          variant="warning"
          status="PENDING"
        />
        <StatisticsCard
          count={2}
          label="نظرات تأیید شده"
          variant="success"
          status="IN_PROGRESS"
        />
        <StatisticsCard
          count={10}
          label="نظرات رد شده"
          variant="error"
          status="RESOLVED"
        />
      </div>
      <div className="mt-12">
        {comments?.length === 0 ? (
          <p className="text-base font-normal">نظری یافت نشد!</p>
        ) : (
          <Table>
            <TableHeader className="align-middle">
              <TableRow className="text-start">
                <TableHead className="w-24 text-start">ردیف</TableHead>
                <TableHead className="text-start">عنوان</TableHead>
                <TableHead className="text-start">کاربر</TableHead>
                <TableHead className="text-start">نوع</TableHead>
                <TableHead className="text-start">وضعیت</TableHead>
                <TableHead className="text-start">تاریخ</TableHead>
                <TableHead className="text-start">عملیات</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text[#5A6A85]">
              {comments?.map((comment, index) => (
                <TableRow
                  key={index}
                  className="h-[72px] text[#5A6A85] text-sm"
                >
                  <TableCell className="text-xs font-normal">
                    {convertToPersianNumbers(index + 1)}
                  </TableCell>
                  <TableCell>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <p className="truncate max-w-60">{comment.content}</p>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="text-wrap max-w-md text-sm leading-6">
                            {comment.content}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </TableCell>
                  <TableCell className="text-dark-400_light-600">
                    {comment.author.firstName.concat(
                      " ",
                      comment.author.lastName,
                    )}
                  </TableCell>
                  <TableCell>
                    <CommentType
                      type={comment.postId ? "post" : "course"}
                      title={
                        comment.courseId
                          ? comment.course?.title
                          : comment.post?.title
                      }
                      slug={
                        comment.courseId
                          ? comment.course?.slug
                          : comment.post?.slug
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <CommentStatus status={comment.status} />
                  </TableCell>
                  <TableCell className="text-dark-400_light-300">
                    {convertToPersianNumbers(
                      moment(comment.createdAt)
                        .locale("fa")
                        .format("YYYY/MM/DD"),
                    )}
                  </TableCell>
                  <TableCell>
                    <CommentAction comment={comment} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
        <div>
          <Pagination pageSize={pageSize} itemCount={comments?.length ?? 0} />
        </div>
      </div>
    </div>
  );
};

export default CommentsPage;