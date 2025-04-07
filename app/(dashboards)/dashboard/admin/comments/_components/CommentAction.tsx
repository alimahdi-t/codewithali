"use client";
import { ActionGroup } from "@/components/common/ActionGroup";
import { Comment } from "@prisma/client";
import { useRouter } from "next/navigation";
import { deleteComment } from "@/actions/comments/delete-comment.action";
import { toast } from "sonner";

export const CommentAction = ({ comment }: { comment: Comment }) => {
  const route = useRouter();
  const onView = () => {
    // route.push(`/dashboard/admin/messages/${message.id}`);
  };
  const onDelete = async () => {
    await deleteComment({ id: comment.id }).then((response) => {
      if (response.success) {
        toast.success(response.success);
      }
      if (response.error) {
        toast.error(response.error);
      }
    });
  };

  return (
    <ActionGroup onView={onView} onDelete={onDelete} deleteAlertProps={{}} />
  );
};