"use client";

import { deleteCourse } from "@/lib/actions/deleteCourse";
import DeleteAlert from "@/components/common/DeleteAlert";
import { revalidatePath } from "next/cache";

const DeleteCourseButton = ({ courseId }: { courseId: number }) => {
  const handleDelete = async () => {
    const response = await deleteCourse({ id: courseId });
    if (response.success) {
    }
  };

  return <DeleteAlert onConfirm={handleDelete} />;
};

export default DeleteCourseButton;
