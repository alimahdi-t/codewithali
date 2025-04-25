import { CourseStatus } from "@/prisma/client";

interface CourseStatusBadgeProps {
  status: CourseStatus;
}

const courseStatusVariants: Record<
  CourseStatus,
  { text: string; className: string }
> = {
  COMPLETED: {
    text: "تکمیل شده",
    className: "text-green-600 bg-green-100 dark:bg-green-600/20",
  },
  PREORDER: {
    text: "پیش ‌خرید",
    className: "text-blue-600 bg-blue-100 dark:bg-blue-600/20",
  },
  ONGOING: {
    text: "در حال برگزاری",
    className: "text-lime-600 bg-lime-100 dark:bg-lime-600/20",
  },
  CANCELLED: {
    text: "لغو شده",
    className: "text-red-600 bg-red-100 dark:bg-red-600/20",
  },
  UPCOMING: {
    text: "انتشار به زودی",
    className: "text-purple-600 bg-purple-100 dark:bg-purple-600/20",
  },
};

export const CourseStatusBadge = ({ status }: CourseStatusBadgeProps) => {
  const variant = courseStatusVariants[status];

  return (
    <span
      className={`${variant.className} px-2  inline-block py-1 rounded-xl text-xs font-light leading-5 text-center text-nowrap`}
    >
      {variant.text}
    </span>
  );
};