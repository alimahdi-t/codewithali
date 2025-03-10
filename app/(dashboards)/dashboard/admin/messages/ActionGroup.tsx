"use client";
import {
  HiOutlineEye,
  HiOutlinePencilSquare,
  HiOutlineTrash,
} from "react-icons/hi2";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ActionGroupProps {
  onEdit?: () => void;
  onView?: () => void;
  onDelete?: () => void;
  deleteAlertProps: {
    title?: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
  };
}

export const ActionGroup = ({
  onEdit,
  onView,
  onDelete,
  deleteAlertProps,
}: ActionGroupProps) => {
  const {
    title = "آیا مطمئن هستید؟",
    description = "این عملیات غیرقابل بازگشت است و باعث حذف دائمی این مورد می‌شود.",
    confirmText = "ادامه",
    cancelText = "لغو",
  } = deleteAlertProps;
  return (
    <span className="flex items-center gap-x-1">
      {/* Edit Action */}
      {onEdit && (
        <span
          className="cursor-pointer text-action-success hover:text-white hover:bg-action-success p-2 rounded-full transition-all hover:scale-110 duration-200 flex items-center justify-center"
          onClick={onEdit}
        >
          <HiOutlinePencilSquare className="size-5" />
        </span>
      )}

      {/* View Action */}
      {onView && (
        <span
          className="cursor-pointer text-action-info hover:text-white hover:bg-action-info p-2 rounded-full transition-all hover:scale-110 duration-200 flex items-center justify-center"
          onClick={onView}
        >
          <HiOutlineEye className="size-5" />
        </span>
      )}

      {/* Delete Action */}
      {onDelete && (
        <AlertDialog>
          <AlertDialogTrigger>
            <span className="cursor-pointer text-action-error hover:text-white hover:bg-action-error p-2 rounded-full transition-all hover:scale-110 duration-200 flex items-center justify-center">
              <HiOutlineTrash className="size-5" />
            </span>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="w-full text-start">
                {title}
              </AlertDialogTitle>
              <AlertDialogDescription className="w-full text-start">
                {description}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter className="flex items-center gap-2">
              <AlertDialogCancel>{cancelText}</AlertDialogCancel>
              <AlertDialogAction
                onClick={onDelete}
                className="bg-red-500 hover:bg-red-400"
              >
                {confirmText}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </span>
  );
};