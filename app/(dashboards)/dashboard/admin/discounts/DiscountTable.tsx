"use client";

import { GenericTable } from "@/components/shared/Table/GenericTable";
import { convertToPersianNumbers } from "@/utils";
import { ActionGroup } from "@/components/common/ActionGroup";
import { Button } from "@/components/ui/button";
import { Prisma } from "@/prisma/client";
import Image from "next/image";
import { TruncatedTooltipText } from "@/components/shared/Tooltips/TruncatedTooltipText";
import { DateTooltip } from "@/components/shared/Tooltips/DateTooltip";
import CreateDiscountForm from "@/components/forms/CreateDiscountForm";
import DayCountdown from "@/components/common/DayCountdown";
import { deleteDiscount } from "@/actions/discount/delete-discount.action";
import { DiscountBadge } from "@/components/common/DiscountBadge";
import { toast } from "sonner";
import { deleteAllDiscount } from "@/actions/discount/delete-all-discount.action";

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
          priority={false}
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
      header: "میزان تخفیف",
      render: (item: CourseWithDiscount) => (
        <DiscountBadge percentage={item.discount?.percentage} />
      ),
    },
    {
      key: "startsDate",
      header: "تاریخ شروع",
      render: (item: CourseWithDiscount) => (
        <span className="text-sm">
          {item.discount?.startsAt ? (
            <DateTooltip date={item.discount.startsAt} />
          ) : (
            ""
          )}
        </span>
      ),
    },
    {
      key: "expiresDate",
      header: "تاریخ انقضا",
      render: (item: CourseWithDiscount) => (
        <span className="text-sm">
          {item.discount?.expiresAt ? (
            <DateTooltip date={item.discount.expiresAt}>
              <DayCountdown date={item.discount.expiresAt} />
            </DateTooltip>
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
            onDelete={async () => {
              if (item.discount?.id) {
                try {
                  const res = await deleteDiscount({ id: item.discount.id });

                  if (res.success) {
                    toast.success(res.message);
                  } else {
                    toast.error(res.message || "خطایی در حذف تخفیف رخ داد.");
                  }
                } catch (error) {
                  toast.error("خطایی در حذف تخفیف رخ داد.");
                }
              } else {
                toast.error("کد تخفیفی برای حذف وجود ندارد.");
              }
            }}
          />
        </div>
      ),
    },
  ];

  const handleBulkDelete = async (ids: (string | number)[]) => {
    // 1. Filter selected courses
    const selectedCourses = data.filter((item) => ids.includes(item.id));

    // 2. Get discount IDs from selected courses
    const discountIds = selectedCourses
      .map((course) => course.discount?.id)
      .filter(Boolean); // Remove undefined/null

    if (discountIds.length === 0) {
      toast.error("هیچ کد تخفیفی برای حذف وجود ندارد.");
      return;
    }
    try {
      // 3. Call delete action with discount IDs
      const res = await deleteAllDiscount({ ids: discountIds as string[] });

      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message || "خطایی رخ داد.");
      }
    } catch (error) {
      toast.error("خطایی رخ داد.");
    }
  };

  return (
    <GenericTable
      columns={columns}
      data={data}
      bulkActions={(selectedIds) => (
        <div className="flex items-center flex-wrap">
          <CreateDiscountForm ids={selectedIds.map(String)} />
          <div className="relative mt-6">
            <Button
              size="sm"
              variant="destructive"
              onClick={() => handleBulkDelete(selectedIds)}
            >
              حذف همه کد‌های تخفیف
            </Button>
          </div>
        </div>
      )}
    />
  );
};