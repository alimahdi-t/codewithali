import {
  BookOpen01Icon,
  Comment02Icon,
  CreditCardValidationIcon,
  DashboardSquare02Icon,
  DiscountIcon,
  Mail01Icon,
  Tag01Icon,
  Task01Icon,
  UserMultipleIcon,
} from "@/public/assets/icons/hugeIcons";
import {
  HiOutlineAcademicCap,
  HiOutlineCog8Tooth,
  HiOutlineHome,
  HiOutlineTicket,
  HiOutlineUser,
} from "react-icons/hi2";
import { Role } from "@/prisma/client";

const userDashboardLinks: {
  label: string;
  path: string;
  icon: React.ElementType;
}[] = [
  {
    label: "پنل کابری",
    path: "/my-account",
    icon: HiOutlineHome,
  },
  {
    label: "دوره های من",
    path: "/my-account/courses",
    icon: HiOutlineAcademicCap,
  },
  {
    label: "خدمات پرداخت",
    path: "/my-account/payments",
    icon: HiOutlineTicket,
  },
  {
    label: "ویرایش حساب",
    path: "/my-account/edit-account",
    icon: HiOutlineUser,
  },
];

const authorDashboardLinks: {
  label: string;
  path: string;
  icon: React.ElementType;
}[] = [
  { label: "داشبورد", path: "/dashboard/admin", icon: DashboardSquare02Icon },
  {
    label: "دوره های من",
    path: "/my-account/courses",
    icon: HiOutlineAcademicCap,
  },
  {
    label: "خدمات پرداخت",
    path: "/edit-account/payments",
    icon: HiOutlineTicket,
  },
  {
    label: "ویرایش حساب",
    path: "/my-account/edit-account",
    icon: HiOutlineUser,
  },
];

const adminDashboardLinks: {
  label: string;
  path: string;
  icon: React.ElementType;
}[] = [
  { label: "داشبورد", path: "/dashboard/admin", icon: DashboardSquare02Icon },
  { label: "دوره‌ها", path: "/dashboard/admin/courses", icon: BookOpen01Icon },
  { label: "پست‌ها", path: "/dashboard/admin/posts", icon: Task01Icon },
  { label: "کاربران", path: "/dashboard/admin/users", icon: UserMultipleIcon },
  { label: "پیام", path: "/dashboard/admin/messages", icon: Mail01Icon },
  { label: "کامنت ها", path: "/dashboard/admin/comments", icon: Comment02Icon },
  {
    label: "کدهای تخفیف",
    path: "/dashboard/admin/discount-codes",
    icon: DiscountIcon,
  },
  { label: "تگ‌ها", path: "/dashboard/admin/tags", icon: Tag01Icon },
  {
    label: "پرداخت‌ها",
    path: "/dashboard/admin/payments",
    icon: CreditCardValidationIcon,
  },
  {
    label: "تنظیمات حساب",
    path: "/dashboard/admin/settings",
    icon: HiOutlineCog8Tooth,
  },
];

export const getDashboardLinks = (role: Role | undefined) => {
  if (!role) return [];
  switch (role) {
    case "ADMIN":
      return adminDashboardLinks;
    default:
      return userDashboardLinks;
  }
};