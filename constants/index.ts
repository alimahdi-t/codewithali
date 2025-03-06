import {
  HiOutlineAcademicCap,
  HiOutlineArrowRightStartOnRectangle,
  HiOutlineHome,
  HiOutlineTicket,
  HiOutlineUser,
} from "react-icons/hi2";

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

import { CourseStatus, Level, Role } from "@prisma/client";

export const navLinks = [
  { label: "دوره ها", href: "/courses" },
  { label: "وبلاگ", href: "/blog" },
  { label: "تماس با ما", href: "/contact" },
  { label: "درباره ما", href: "/about" },
];

export const profileDropDownLinks = [
  { label: "Profile", href: "" },
  { label: "Courses", href: "" },
  { label: "Profile", href: "" },
  { label: "Logout", href: "" },
];

export const CourseLevels: { value: Level; label: string }[] = [
  { value: "BEGINNER", label: "مبتدی" },
  { value: "ADVANCED", label: "پیشرفته" },
  { value: "EXPERT", label: "تخصصی" },
];

export const CourseStatusValue: { value: CourseStatus; label: string }[] = [
  { value: "COMPLETED", label: "تکمیل شده" },
  { value: "PREORDER", label: "پیش ‌خرید" },
  { value: "ONGOING", label: "در حال برگزاری" },
  { value: "CANCELLED", label: "لغو شده" },
  { value: "UPCOMING", label: "انتشار به زودی" },
];

export const dashboardLink = [
  {
    label: "پیشخوان",
    path: "/my-account",
    icon: HiOutlineHome,
  },
  {
    label: "اطلاعات کاربری",
    path: "/my-account/edit-account",
    icon: HiOutlineUser,
  },
  {
    label: "دوره های من",
    path: "/edit-account",
    icon: HiOutlineAcademicCap,
  },
  {
    label: "خدمات پرداخت",
    path: "/edit-account",
    icon: HiOutlineTicket,
  },
  {
    label: "خروج از حساب",
    path: "/edit-account",
    icon: HiOutlineArrowRightStartOnRectangle,
  },
];

export const adminDashboardLinks: {
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
];

// Define all dashboard links
const allDashboardLinks = [
  // Common links (for normal users, writers, authors)
  {
    label: "پیشخوان",
    path: "/my-account",
    icon: HiOutlineHome,
    roles: ["USER", "WRITER", "AUTHOR"],
  },
  {
    label: "اطلاعات کاربری",
    path: "/my-account/edit-account",
    icon: HiOutlineUser,
    roles: ["USER", "WRITER", "AUTHOR"],
  },
  {
    label: "دوره های من",
    path: "/my-account/courses",
    icon: HiOutlineAcademicCap,
    roles: ["USER", "WRITER", "AUTHOR"],
  },
  {
    label: "خدمات پرداخت",
    path: "/my-account/payments",
    icon: HiOutlineTicket,
    roles: ["USER", "WRITER", "AUTHOR"],
  },
  {
    label: "خروج از حساب",
    path: "/logout", // Handled separately
    icon: HiOutlineArrowRightStartOnRectangle,
    roles: ["USER", "WRITER", "AUTHOR", "ADMIN"],
  },

  // Admin-only links
  {
    label: "داشبورد",
    path: "/dashboard/admin",
    icon: DashboardSquare02Icon,
    roles: ["ADMIN"],
  },
  {
    label: "دوره‌ها",
    path: "/dashboard/admin/courses",
    icon: BookOpen01Icon,
    roles: ["AUTHOR", "ADMIN"],
  },
  {
    label: "پست‌ها",
    path: "/dashboard/admin/posts",
    icon: Task01Icon,
    roles: ["WRITER", "AUTHOR", "ADMIN"],
  },
  {
    label: "کاربران",
    path: "/dashboard/admin/users",
    icon: UserMultipleIcon,
    roles: ["ADMIN"],
  },
  {
    label: "پیام",
    path: "/dashboard/admin/messages",
    icon: Mail01Icon,
    roles: ["ADMIN"],
  },
  {
    label: "کامنت‌ها",
    path: "/dashboard/admin/comments",
    icon: Comment02Icon,
    roles: ["ADMIN"],
  },
  {
    label: "کدهای تخفیف",
    path: "/dashboard/admin/discount-codes",
    icon: DiscountIcon,
    roles: ["ADMIN"],
  },
  {
    label: "تگ‌ها",
    path: "/dashboard/admin/tags",
    icon: Tag01Icon,
    roles: ["WRITER", "AUTHOR", "ADMIN"],
  },
  {
    label: "پرداخت‌ها",
    path: "/dashboard/admin/payments",
    icon: CreditCardValidationIcon,
    roles: ["ADMIN"],
  },
];

// Function to get links based on user role
export const getDashboardLinks = (role: Role) => {
  return allDashboardLinks.filter((link) => link.roles.includes(role));
};