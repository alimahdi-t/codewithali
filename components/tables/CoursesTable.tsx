// ADMIN TABLE
"use client";

import { GenericTable } from "@/components/shared/Table/GenericTable";
import { toPersianNumber } from "@/utils";
import { Prisma } from "@/prisma/client";
import { DateTooltip } from "@/components/shared/Tooltips/DateTooltip";
import Price from "@/components/common/Price";
import { TruncatedTooltipText } from "@/components/shared/Tooltips/TruncatedTooltipText";
import Link from "next/link";
import CourseLevel from "@/components/CourseLevel";
import { CourseStatusBadge } from "@/app/(dashboards)/dashboard/admin/courses/_components/CourseStatusBadge";
import { CourseActions } from "@/app/(dashboards)/dashboard/admin/courses/_components/CourseAction";
import { DiscountBadge } from "@/components/common/DiscountBadge";
import { StatusBadge } from "@/components/common/StatusBadge";

type CourseType = Prisma.CourseGetPayload<{
  include: {
    instructor: {
      select: {
        id: true;
        firstName: true;
        lastName: true;
        username: true;
        imageUrl: true;
      };
    };
    discount: {
      select: {
        percentage: true;
      };
    };
  };
}>;

export const CoursesTable = ({ data }: { data: CourseType[] }) => {
  const columns = [
    {
      key: "id",
      header: "شناسه",
      className: "w-24",
      render: (item: CourseType) => toPersianNumber(item.id),
    },

    {
      key: "title",
      header: "عنوان",
      render: (item: CourseType) => <TruncatedTooltipText text={item.title} />,
    },
    {
      key: "instructor",
      header: "مدرس",
      render: (item: CourseType) => (
        <Link href="#" className="hover:text-brand-700 text-dark-400_light-600">
          {`${item.instructor.firstName} ${item.instructor.lastName}`}
        </Link>
      ),
    },
    {
      key: "price",
      header: "قیمت",
      render: (item: CourseType) => (
        <Price price={item.price} classname="text-xs font-semibold" />
      ),
    },
    {
      key: "discount",
      header: "تخفیف",
      render: (item: CourseType) =>
        item.discountId ? (
          <DiscountBadge percentage={item.discount?.percentage} />
        ) : (
          <StatusBadge variant="undefined" text={"یافت نشد!"} />
        ),
    },
    {
      key: "level",
      header: "سطح دوره",
      render: (item: CourseType) => <CourseLevel value={item.level} />,
    },
    {
      key: "courseStatus",
      header: "وضعیت دوره",
      render: (item: CourseType) => <CourseStatusBadge status={item.status} />,
    },
    {
      key: "date",
      header: "تاریخ",
      render: (item: CourseType) => (
        <span className="text-dark-400_light-300">
          <DateTooltip date={item.createdAt} />
        </span>
      ),
    },
    {
      key: "Actions",
      header: "عملیات",
      render: (item: CourseType) => <CourseActions courseSlug={item.slug} />,
    },
  ];

  return (
    <GenericTable
      columns={columns}
      data={data}
      addButton={{
        href: "/dashboard/admin/courses/new",
        label: "افزودن دوره",
      }}
    />
  );
};