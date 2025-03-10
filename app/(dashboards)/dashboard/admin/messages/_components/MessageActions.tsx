"use client";
import { ActionGroup } from "@/components/common/ActionGroup";
import { ContactMessage } from "@prisma/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { deleteContactMessageAction } from "@/actions/messages/delete-contact-message.action";

export const MessageActions = ({ message }: { message: ContactMessage }) => {
  const route = useRouter();
  const onView = () => {
    route.push(`/dashboard/admin/messages/${message.id}`);
  };
  const onDelete = async () => {
    await deleteContactMessageAction({ id: message.id }).then((response) => {
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