import {
  HiOutlineAcademicCap,
  HiOutlineArrowRightStartOnRectangle,
  HiOutlineHome,
  HiOutlineTicket,
  HiOutlineUser,
} from "react-icons/hi2";

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

export const adminDashboardLinks = [
  { label: "لیست دوره ها", path: "" },
  { label: "لیست مدرس ها", path: "" },
  { label: "لیست کاربران", path: "" },
  { label: "لیست کاربران", path: "" },
];
