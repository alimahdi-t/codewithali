import {
  HiOutlineAcademicCap,
  HiOutlineCog8Tooth,
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

import { CourseStatus, Level } from "@prisma/client";

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

export const userDashboardLink: {
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
    path: "/my-account/my-courses",
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

export const authorDashboardLinks: {
  label: string;
  path: string;
  icon: React.ElementType;
}[] = [
  { label: "داشبورد", path: "/dashboard/admin", icon: DashboardSquare02Icon },
  {
    label: "دوره های من",
    path: "/my-account/my-courses",
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
  {
    label: "تنظیمات حساب",
    path: "/dashboard/admin/settings",
    icon: HiOutlineCog8Tooth,
  },
];

export const daysOfWeek = [
  { full: "شنبه", short: "ش", enShort: "Sa" },
  { full: "یک‌شنبه", short: "ی", enShort: "Su" },
  { full: "دوشنبه", short: "د", enShort: "Mo" },
  { full: "سه‌شنبه", short: "س", enShort: "Tu" },
  { full: "چهارشنبه", short: "چ", enShort: "We" },
  { full: "پنجشنبه", short: "پ", enShort: "Th" },
  { full: "جمعه", short: "ج", enShort: "Fr" },
];