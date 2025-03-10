"use client";
import DeleteAlert from "@/components/common/DeleteAlert";
import { deletePost } from "@/actions/posts/delete-post.action";
import { toast } from "sonner";

const DeletePostButton = ({ postId }: { postId: number }) => {
  const handleDelete = async () => {
    const response = await deletePost({ id: postId });
    if (response.success) {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  };

  return <DeleteAlert onConfirm={handleDelete} />;
};

export default DeletePostButton;