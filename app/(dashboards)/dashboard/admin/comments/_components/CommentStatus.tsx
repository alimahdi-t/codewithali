"use client";

import { CommentStatus as commentStatus } from "@/prisma/client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { PulseLoader } from "react-spinners";
import { changeCommentsStatus } from "@/actions/comments/change-comments-status.action";

interface Props {
  status: commentStatus;
  id: string;
}

const statusVariants: Record<
  commentStatus,
  { text: string; className: string; color: string }
> = {
  PENDING: {
    text: "در انتظار تایید",
    className:
      "text-action-warning bg-action-light-warning dark:bg-action-warning/50",
    color: "#ffae1f", // warning
  },
  APPROVED: {
    text: "تأیید شده",
    className:
      "text-action-success bg-action-light-success dark:bg-action-success/50",
    color: "#31d9b3", // success
  },
  REJECTED: {
    text: "رد شده",
    className:
      "text-action-error bg-action-light-error dark:bg-action-error/50",
    color: "#e57050", // error
  },
};

const statusOptions: { label: string; value: commentStatus }[] = [
  { label: "در انتظار تایید", value: "PENDING" },
  { label: "تأیید", value: "APPROVED" },
  { label: "رد", value: "REJECTED" },
];

export const CommentStatus = ({ status, id }: Props) => {
  const [selectedStatus, setSelectedStatus] = useState<commentStatus>(status);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelect = async (value: commentStatus) => {
    if (isLoading) {
      toast.warning("در حال تغییر وضعیت هستید، لطفاً صبر کنید...");
      return;
    }

    setIsLoading(true);

    try {
      const res = await changeCommentsStatus({
        status: value,
        ids: [id],
      });

      if (res.success) {
        setSelectedStatus(value);
        toast.success("وضعیت با موفقیت تغییر کرد.");
      } else {
        toast.error("خطایی در تغییر وضعیت رخ داد.");
      }
    } catch (error) {
      toast.error("مشکلی پیش آمده است!");
    } finally {
      setIsLoading(false);
    }
  };

  const currentVariant = statusVariants[selectedStatus];

  return (
    <Select
      dir="rtl"
      value={selectedStatus}
      onValueChange={handleSelect}
      disabled={isLoading}
    >
      <SelectTrigger
        className={`w-[140px] ${
          currentVariant.className
        } border-none rounded-xl text-xs ${
          isLoading ? "cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? (
          <span className="w-full h-full flex justify-center items-center">
            <PulseLoader size={10} color={currentVariant.color} />
          </span>
        ) : (
          <span className="truncate">{currentVariant.text}</span>
        )}
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          {statusOptions.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              disabled={isLoading}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};