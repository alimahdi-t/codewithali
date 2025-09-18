import { getPostsAction } from "@/actions/posts/get-posts.action";
import { DashboardPageHeader } from "@/components/dashboard/DashboardPageHeader";
import { PostsTable } from "@/components/tables/PostsTabel";
import { ClientToastWrapper } from "@/components/common/ClientToastWrapper";

const PostsPage = async () => {
  const response = await getPostsAction({});

  if (response.error) {
    return <ClientToastWrapper message={response.error} variant="error" />;
  }
  const { posts } = response;
  return (
    <div className="w-full py-6">
      <div className="mb-4">
        <DashboardPageHeader
          title="لیست مقاله‌ها"
          description="لیست تمام مقاله‌ها، برای مشاهده مشخصات آنها با کلیک بر روی آن وارد صحفه آن مقاله شوید."
          buttonLabel="افزودن مقاله"
        />
      </div>

      <PostsTable data={posts ?? []} />
    </div>
  );
};

export default PostsPage;