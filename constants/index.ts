import {
  CommentStatus as commentStatus,
  CourseStatus,
  Level,
} from "@/prisma/client";

export const navLinks = [
  { label: "دوره ها", href: "/courses" },
  { label: "وبلاگ", href: "/blog" },
  { label: "تماس با ما", href: "/contact" },
  { label: "درباره ما", href: "/about" },
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

export const daysOfWeek = [
  { full: "شنبه", short: "ش", enShort: "Sa" },
  { full: "یک‌شنبه", short: "ی", enShort: "Su" },
  { full: "دوشنبه", short: "د", enShort: "Mo" },
  { full: "سه‌شنبه", short: "س", enShort: "Tu" },
  { full: "چهارشنبه", short: "چ", enShort: "We" },
  { full: "پنجشنبه", short: "پ", enShort: "Th" },
  { full: "جمعه", short: "ج", enShort: "Fr" },
];

export const commentStatusOptions: { label: string; value: commentStatus }[] = [
  { label: "در انتظار تایید", value: "PENDING" },
  { label: "تأیید", value: "APPROVED" },
  { label: "رد", value: "REJECTED" },
];