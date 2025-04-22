"use client";

import { GenericTable } from "@/components/shared/Table/GenericTable";
import { convertToPersianNumbers } from "@/utils";
import { ActionGroup } from "@/components/common/ActionGroup";
import { Button } from "@/components/ui/button";
import { Prisma } from "@prisma/client";
import Image from "next/image";
import { TruncatedTooltipText } from "@/components/shared/Tooltips/TruncatedTooltipText";
import { DateTooltip } from "@/components/shared/Tooltips/DateTooltip";
import CreateDiscountForm from "@/components/forms/CreateDiscountForm";

const columns = [
  {
    key: "id",
    header: "شناسه",
    className: "w-24",
    render: (item: CourseWithDiscount) => convertToPersianNumbers(item.id),
  },
  {
    key: "image",
    header: "تصویر",
    render: (item: CourseWithDiscount) => (
      <Image
        width={80}
        height={40}
        className="rounded"
        src={item.imageUrl}
        alt={""}
      />
    ),
  },
  {
    key: "title",
    header: "عنوان",
    render: (item: CourseWithDiscount) => (
      <TruncatedTooltipText text={item.title} />
    ),
  },
  {
    key: "authorName",
    header: "مدرس",
    render: (item: CourseWithDiscount) =>
      item.instructor.firstName.concat(" ", item.instructor.lastName),
  },
  {
    key: "status",
    header: "تخفیف",
    render: (item: CourseWithDiscount) => (
      <span className="text-sm">
        {item.discount ? item.discount.percentage : "بدون تخفیف"}
      </span>
    ),
  },
  {
    key: "expireDate",
    header: "تاریخ انقضا",
    render: (item: CourseWithDiscount) => (
      <span className="text-sm">
        {item.discount?.expiresAt ? (
          <DateTooltip date={item.discount.expiresAt} />
        ) : (
          ""
        )}
      </span>
    ),
  },
  {
    key: "actions",
    header: "عملیات",
    render: (item: CourseWithDiscount) => (
      <div className="flex gap-2">
        <ActionGroup
          deleteAlertProps={{}}
          onAddDiscount={() => {}}
          onDelete={() => {}}
        />
      </div>
    ),
  },
];

type CourseWithDiscount = Prisma.CourseGetPayload<{
  select: {
    id: true;
    title: true;
    imageUrl: true;
    slug: true;
    instructor: {
      select: {
        firstName: true;
        lastName: true;
        username: true;
      };
    };
    discount: true;
  };
}>;

export const DiscountTable = ({ data }: { data: CourseWithDiscount[] }) => {
  const handleBulkDelete = async (ids: (string | number)[]) => {
    console.log(ids);
  };

  const handleBulkAddDiscount = async (ids: (string | number)[]) => {
    console.log();
  };
  console.log(data);

  return (
    <GenericTable
      columns={columns}
      data={data}
      bulkActions={(selectedIds) => (
        <div className="flex items-center">
          <CreateDiscountForm ids={selectedIds.map(String)} />
          <Button
            size="sm"
            variant="destructive"
            onClick={() => handleBulkDelete(selectedIds)}
          >
            افزودن کد تخفیف
          </Button>
        </div>
      )}
    />
  );
};