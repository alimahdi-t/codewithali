import React from "react";
import Image from "next/image";

interface DashboardStatBoxProps {
  iconSrc: string;
  value: React.ReactNode;
  label: string;
}

export const DashboardStatBox: React.FC<DashboardStatBoxProps> = ({
  iconSrc,
  value,
  label,
}) => {
  return (
    <div className="w-32 sm:w-38 flex items-center gap-x-3 sm:gap-x-5">
      <Image
        width={44}
        height={44}
        className="size-9 sm:size-11 md:size-12"
        src={iconSrc}
        alt=""
      />
      <div className="flex flex-col gap-y-1 text-label sm:text-caption">
        <span className="font-bold">{value}</span>
        <span className="font-regular text-secondary">{label}</span>
      </div>
    </div>
  );
};