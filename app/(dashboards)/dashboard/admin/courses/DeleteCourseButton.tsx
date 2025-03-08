"use client";

import { deleteCourse } from "@/actions/deleteCourse";
import DeleteAlert from "@/components/common/DeleteAlert";
import { toast } from "sonner";

const DeleteCourseButton = ({ courseId }: { courseId: number }) => {
  const handleDelete = async () => {
    const response = await deleteCourse({ id: courseId });
    if (response.success) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  };

  return <DeleteAlert onConfirm={handleDelete} />;
};

export default DeleteCourseButton;