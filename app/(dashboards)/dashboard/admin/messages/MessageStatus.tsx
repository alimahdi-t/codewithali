import { MessageStatus as Status } from "@prisma/client";

interface MessageStatusProps {
  status: Status;
}

const statusVariants: Record<Status, { text: string; className: string }> = {
  PENDING: {
    text: "در انتظار رسیدگی",
    className: "text-action-warning bg-action-light-warning",
  },
  IN_PROGRESS: {
    text: "در حال بررسی",
    className: "text-action-success bg-action-light-success",
  },
  RESOLVED: {
    text: "بسته شده",
    className: "text-action-error bg-action-light-error",
  },
};

export const MessageStatus = ({ status }: MessageStatusProps) => {
  const variant = statusVariants[status];

  return (
    <span
      className={`${variant.className} px-2 py-1 rounded-xl text-xs font-light leading-5 `}
    >
      {variant.text}
    </span>
  );
};