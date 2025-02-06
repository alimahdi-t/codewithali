import {
  HiOutlineAcademicCap,
  HiOutlineArrowRightStartOnRectangle,
  HiOutlineHome,
  HiOutlineTicket,
  HiOutlineUser,
  HiOutlineUsers,
} from "react-icons/hi2";

import {
  Mail01Icon,
  UserMultipleIcon,
  BookOpen01Icon,
  TeacherIcon,
  TaskEdit02Icon,
  Task01Icon,
  Comment02Icon,
  DiscountIcon,
  Tag01Icon,
  CreditCardValidationIcon,
  DashboardSquare02Icon,
} from "@/public/assets/icons/hugeIcons";

import React, { ReactElement } from "react";

export const navLinks = [
  { label: "دوره ها", href: "/courses" },
  { label: "وبلاگ", href: "/blog" },
  { label: "تماس با ما", href: "/contact" },
  { label: "درباره ما", href: "/about" },
  { label: "داشبورد", href: "/my-account" },
];

export const profileDropDownLinks = [
  { label: "Profile", href: "" },
  { label: "Courses", href: "" },
  { label: "Profile", href: "" },
  { label: "Logout", href: "" },
];

export const footerNavigation = [
  { name: "About", href: "#" },
  { name: "Blog", href: "#" },
  { name: "Jobs", href: "#" },
  { name: "Press", href: "#" },
  { name: "Accessibility", href: "#" },
  { name: "Partners", href: "#" },
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
  {
    label: "نویسندگان",
    path: "/dashboard/admin/authors",
    icon: TaskEdit02Icon,
  },
  { label: "مدرس‌ها", path: "/dashboard/admin/instructors", icon: TeacherIcon },
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
    path: "/admin/payments",
    icon: CreditCardValidationIcon,
  },
];
