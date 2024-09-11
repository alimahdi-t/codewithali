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
    href: "/my-account",
    icon: HiOutlineHome,
  },
  {
    label: "اطلاعات کاربری",
    href: "/my-account/edit-account",
    icon: HiOutlineUser,
  },
  {
    label: "دوره های من",
    href: "/edit-account",
    icon: HiOutlineAcademicCap,
  },
  {
    label: "خدمات پرداخت",
    href: "/edit-account",
    icon: HiOutlineTicket,
  },
  {
    label: "خروج از حساب",
    href: "/edit-account",
    icon: HiOutlineArrowRightStartOnRectangle,
  },
];
