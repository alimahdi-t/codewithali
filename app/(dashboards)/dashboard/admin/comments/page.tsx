import { StatisticsCard } from "@/app/(dashboards)/dashboard/admin/messages/_components/StatisticsCard";
import { getComments } from "@/actions/comments/get-comments.action";
import { COMMENT_STATUSES } from "@/constants/dashboard";
import { GetCommentsParams } from "@/actions/shared.types";
import { toast } from "sonner";
import { DashboardPageHeader } from "@/components/dashboard/DashboardPageHeader";
import { NoComment } from "@/components/shared/Comment/NoComment";
import { CommentsTable } from "@/components/shared/Table/CommentsTable";

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
          <CommentsTable comments={comments} />
        )}
      </div>
    </div>
  );
};

export default CommentsPage;