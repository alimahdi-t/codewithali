import { DashboardPageHeader } from "@/components/dashboard/DashboardPageHeader";
import { ClientToastWrapper } from "@/components/common/ClientToastWrapper";
import { getAllTagsAction } from "@/actions/tags/get-all-tags.action";
import { TagsTable } from "@/components/tables/TagsTable";

const TagsPage = async () => {
  const response = await getAllTagsAction();

  if (response.error) {
    return <ClientToastWrapper message={response.error} variant="error" />;
  }
  const { tags } = response;
  return (
    <div className="w-full py-6">
      <div className="mb-4">
        <DashboardPageHeader
          title="لیست تگ‌ها"
          description="لیست تمام مقاله‌ها، برای مشاهده مشخصات آنها با کلیک بر روی آن وارد صحفه آن مقاله شوید."
          buttonLabel="افزودن مقاله"
        />
      </div>

      <TagsTable data={tags ?? []} />
    </div>
  );
};

export default TagsPage;