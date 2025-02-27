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

interface DeleteAlertProps {
  title?: string;
  description?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  triggerText?: string;
  triggerClassName?: string;
  confirmClassName?: string;
}

const DeleteAlert = ({
  title = "آیا مطمئن هستید؟",
  description = "این عملیات غیرقابل بازگشت است و باعث حذف دائمی این مورد می‌شود.",
  confirmText = "ادامه",
  cancelText = "لغو",
  onConfirm,
  triggerText = "حذف",
  triggerClassName = "w-full text-start rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-red-500/10 text-red-500",
  confirmClassName = "bg-red-500",
}: DeleteAlertProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className={triggerClassName}>
        {triggerText}
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
          <AlertDialogAction onClick={onConfirm} className={confirmClassName}>
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteAlert;
