import { CommentStatus as commentStatus } from "@prisma/client";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

interface Props {
  status: commentStatus;
}

const statusVariants: Record<
  commentStatus,
  { text: string; className: string }
> = {
  PENDING: {
    text: "در انتظار تایید",
    className:
      "text-action-warning bg-action-light-warning dark:bg-action-warning/50",
  },
  APPROVED: {
    text: "تأیید شده",
    className:
      "text-action-success bg-action-light-success dark:bg-action-success/50",
  },
  REJECTED: {
    text: "رد شده",
    className:
      "text-action-error bg-action-light-error dark:bg-action-error/50",
  },
};

export const CommentStatus = ({ status }: Props) => {
  const variant = statusVariants[status];
  return (
    <Menubar
      asChild
      className={`relative border-none shadow-none p-2 w-12`}
      dir="rtl"
    >
      <MenubarMenu>
        <MenubarTrigger className="rounded-xl p-0">
          <span
            className={`${variant.className} px-2 inline-block py-1 rounded-xl text-xs font-light leading-5 text-center text-nowrap`}
          >
            {variant.text}
          </span>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem className="flex items-center gap-1 px-2.5 py-2 cursor-pointer">
            بدون تغییر
          </MenubarItem>
          <MenubarItem className="flex items-center gap-1 px-2.5 py-2 cursor-pointer">
            تأیید
          </MenubarItem>
          <MenubarItem className="flex items-center gap-1 px-2.5 py-2 cursor-pointer">
            رد
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};