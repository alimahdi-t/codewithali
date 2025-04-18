"use client";
import { ActionGroup } from "@/components/common/ActionGroup";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { deleteCourseAction } from "@/actions/courses/delete-course.action";

export const CourseActions = ({ courseSlug }: { courseSlug: string }) => {
  const router = useRouter();

  const onView = () => {
    router.push(`/courses/${courseSlug}`);
  };

  const onDelete = async () => {
    await deleteCourseAction({ slug: courseSlug }).then((response) => {
      if (response.success) {
        toast.success(response.success);
      }
      if (response.error) {
        toast.error(response.error);
      }
    });
  };

  const onEdit = () => {
    router.push(`/dashboard/admin/courses/edit/${courseSlug}`);
  };

  return (
    <ActionGroup
      onView={onView}
      onDelete={onDelete}
      onEdit={onEdit}
      deleteAlertProps={{}}
    />
  );
};