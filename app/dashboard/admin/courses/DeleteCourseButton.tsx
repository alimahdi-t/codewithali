"use client";

import { deleteCourse } from "@/actions/deleteCourse";
import DeleteAlert from "@/components/common/DeleteAlert";
import { toast } from "@/hooks/use-toast";

const DeleteCourseButton = ({ courseId }: { courseId: number }) => {
  const handleDelete = async () => {
    const response = await deleteCourse({ id: courseId });
    if (response.success) {
      toast({
        title: response.message,
      });
    } else {
      toast({
        title: response.message,
        variant: "destructive",
      });
    }
  };

  return <DeleteAlert onConfirm={handleDelete} />;
};

export default DeleteCourseButton;