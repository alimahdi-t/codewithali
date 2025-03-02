"use client";
import DeleteAlert from "@/components/common/DeleteAlert";
import { deletePost } from "@/actions/deletePost";
import { toast } from "@/hooks/use-toast";

const DeletePostButton = ({ postId }: { postId: number }) => {
  const handleDelete = async () => {
    const response = await deletePost({ id: postId });
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

export default DeletePostButton;