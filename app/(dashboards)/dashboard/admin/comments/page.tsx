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
import { CommentStatus } from "@/app/(dashboards)/dashboard/admin/comments/_components/CommentStatus";
import { CommentAction } from "@/app/(dashboards)/dashboard/admin/comments/_components/CommentAction";
import Pagination from "@/components/shared/Pagination";
import { CommentType } from "@/app/(dashboards)/dashboard/admin/comments/_components/CommentType";
import Link from "next/link";
import { COMMENT_STATUSES } from "@/constants/dashboard";
import { GetCommentsParams } from "@/actions/shared.types";
import { toast } from "sonner";
import { DateTooltip } from "@/components/shared/Tooltips/DateTooltip";
import { TruncatedTooltipText } from "@/components/shared/Tooltips/TruncatedTooltipText";
import { DashboardPageHeader } from "@/components/dashboard/DashboardPageHeader";
import { NoComment } from "@/components/shared/Comment/NoComment";

interface Props {
  searchParams: Promise<GetCommentsParams>;
}

const CommentsPage = async (props: Props) => {
  const searchParams = await props.searchParams;
  const pageSize = 6;
  const response = await getComments({
    page: searchParams.page,
    pageSize,
    status: searchParams.status,
  });
  if (response.error) {
    toast.error(response.error);
    return null;
  }
  if (!response) {
    return;
  }

  const { comments, statusCountMap, totalComment, filteredCommentCount } =
    response;

  if (!statusCountMap) return;
  return (
    <div className="rounded-xl p-4 bg-card shadow-sm">
      <DashboardPageHeader
        title="لیست نظرات"
        description="لیست تمام نظرات، برای مشاهدهٔ جزئیات هر نظر، بر روی گزینه مشاهده کلیک کنید."
      />
      <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-6 mt-8">
        <StatisticsCard count={totalComment} label="همه نظرات" variant="info" />
        {COMMENT_STATUSES.map((cs, index) => (
          <StatisticsCard
            key={index}
            count={statusCountMap[cs.value] || 0}
            label={cs.label}
            variant={cs.variant}
            status={cs.value}
          />
        ))}
      </div>
      <div className="mt-12">
        {comments?.length === 0 ? (
          <NoComment />
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
                    <TruncatedTooltipText text={comment.content} />
                  </TableCell>
                  <TableCell className="text-dark-400_light-600">
                    <Link href={"#"}>
                      {comment.author.firstName.concat(
                        " ",
                        comment.author.lastName,
                      )}
                    </Link>
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
                    <CommentStatus status={comment.status} id={comment.id} />
                  </TableCell>
                  <TableCell className="text-dark-400_light-300">
                    <DateTooltip date={comment.createdAt} />
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
          <Pagination
            pageSize={pageSize}
            itemCount={filteredCommentCount ?? 0}
          />
        </div>
      </div>
    </div>
  );
};

export default CommentsPage;