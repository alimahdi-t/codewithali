import { CommentStatus as status } from "@prisma/client";

interface Props {
  status: status;
}

const statusVariants: Record<status, { text: string; className: string }> = {
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
    text: "بسته شده",
    className:
      "text-action-error bg-action-light-error dark:bg-action-error/50",
  },
};

export const CommentStatus = ({ status }: Props) => {
  const variant = statusVariants[status];

  return (
    <span
      className={`${variant.className} px-2 inline-block py-1 rounded-xl text-xs font-light leading-5 text-center text-nowrap`}
    >
      {variant.text}
    </span>
  );
};