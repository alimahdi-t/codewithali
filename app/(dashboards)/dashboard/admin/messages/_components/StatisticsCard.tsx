"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { convertToPersianNumbers } from "@/utils";

interface StatisticsCardProps {
  count: string | number;
  label: string;
  variant?: "info" | "warning" | "success" | "error";
  status?: "PENDING" | "IN_PROGRESS" | "RESOLVED";
}

export const StatisticsCard: React.FC<StatisticsCardProps> = ({
  count,
  label,
  variant = "info",
  status,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const variants = {
    info: "text-action-info bg-action-light-info",
    warning: "text-action-warning bg-action-light-warning",
    success: "text-action-success bg-action-light-success",
    error: "text-action-error bg-action-light-error",
  };

  const handleClick = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (variant === "info") {
      // Remove status if "info" (total messages)
      params.delete("status");
    } else if (status) {
      // Set or update status filter
      params.set("status", status);
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div
      onClick={handleClick}
      className={`${variants[variant]} c-stat-card c-scale-animation cursor-pointer`}
    >
      <h3 className="font-black text-2xl leading-7">
        {convertToPersianNumbers(count)}
      </h3>
      <p className="text-base font-medium truncate max-w-full">{label}</p>
    </div>
  );
};