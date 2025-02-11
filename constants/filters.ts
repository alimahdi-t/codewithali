import { Level } from "@prisma/client";

export const courseSortFilter = [
  { name: "جدید ترین", value: "newest" },
  { name: "قدیمی ترین", value: "oldest" },
  { name: "ارزان ترین", value: "cheapest" },
  { name: "گران ترین", value: "mostExpensive" },
  { name: "پر مخاطب ترین", value: "mostPopular" },
];

export const courseLevelFilter: { value: Level; name: string }[] = [
  { name: "مقدماتی", value: "BEGINNER" },
  { name: "پیشرفته", value: "ADVANCED" },
  { name: "تخصصی", value: "EXPERT" },
];

export const courseGroupFilter = [
  { name: "فرانت اند", value: "frontend" },
  { name: "بک اند", value: "backend" },
  { name: "پایتون", value: "python" },
  { name: "پایگاه داده", value: "database" },
  { name: "عمومی", value: "public" },
];
