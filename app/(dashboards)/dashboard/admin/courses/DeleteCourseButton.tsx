"use client";

import { deleteCourseAction } from "@/actions/courses/delete-course.action";
import DeleteAlert from "@/components/common/DeleteAlert";
import { toast } from "sonner";

const DeleteCourseButton = ({ courseId }: { courseId: number }) => {
  const handleDelete = async () => {
    const response = await deleteCourseAction({ id: courseId });
    if (response.success) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  };

  return <DeleteAlert onConfirm={handleDelete} />;
};

export default DeleteCourseButton;