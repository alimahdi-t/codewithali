import { CommentStatus, MessageStatus } from "@prisma/client";

export const COMMENT_STATUSES: {
  value: CommentStatus;
  label: string;
  variant: "info" | "warning" | "success" | "error";
}[] = [
  {
    value: "PENDING", // matches enum
    label: "نظرات در انتظار تایید",
    variant: "warning",
  },
  {
    value: "APPROVED",
    label: "نظرات تأیید شده",
    variant: "success",
  },
  {
    value: "REJECTED",
    label: "نظرات رد شده",
    variant: "error",
  },
];

export const MESSAGE_STATUSES: {
  value: MessageStatus;
  label: string;
  variant: "info" | "warning" | "success" | "error";
}[] = [
  { label: "پیام‌های در انتظار رسیدگی", variant: "warning", value: "PENDING" },
  { label: "پیام‌های در حال بررسی", variant: "success", value: "IN_PROGRESS" },
  { label: "پیام‌های بسته ‌شده", variant: "error", value: "RESOLVED" },
];