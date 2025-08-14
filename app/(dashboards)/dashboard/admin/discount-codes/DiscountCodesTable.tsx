"use client";

import { GenericTable } from "@/components/shared/Table/GenericTable";
import { toPersianNumber } from "@/utils";
import { ActionGroup } from "@/components/common/ActionGroup";
import { Button } from "@/components/ui/button";
import { Prisma } from "@/prisma/client";
import { TruncatedTooltipText } from "@/components/shared/Tooltips/TruncatedTooltipText";
import { DateTooltip } from "@/components/shared/Tooltips/DateTooltip";
import CreateDiscountForm from "@/components/forms/CreateDiscountForm";
import DayCountdown from "@/components/common/DayCountdown";
import { deleteDiscount } from "@/actions/discount/delete-discount.action";
import { DiscountBadge } from "@/components/common/DiscountBadge";
import { toast } from "sonner";
import { deleteAllDiscount } from "@/actions/discount/delete-all-discount.action";

type DiscountCodeWithCourses = Prisma.DiscountCodeGetPayload<{
  include: {
    CourseDiscount: {
      include: {
        course: {
          select: {
            id: true;
            title: true;
            slug: true;
          };
        };
      };
    };
  };
}>;

export const DiscountCodesTable = ({
  data,
}: {
  data: DiscountCodeWithCourses[];
}) => {
  const columns = [
    {
      key: "id",
      header: "شناسه",
      className: "w-24",
      render: (item: DiscountCodeWithCourses) => toPersianNumber(item.id),
    },

    {
      key: "title",
      header: "کد",
      render: (item: DiscountCodeWithCourses) => (
        <TruncatedTooltipText text={item.code} />
      ),
    },
    {
      key: "discountType",
      header: "نوع",
      render: (item: DiscountCodeWithCourses) => <span>{item.type}</span>,
    },
    {
      key: "usageLimit",
      header: "دفعات قابل استفاده",
      render: (item: DiscountCodeWithCourses) => (
        <span>{toPersianNumber(item.usageLimit ?? "بی‌نهایت")}</span>
      ),
    },
    {
      key: "usageLimit",
      header: "استفاده شده",
      render: (item: DiscountCodeWithCourses) => (
        <span>{toPersianNumber(item.usedCount ?? 0)}</span>
      ),
    },
    {
      key: "status",
      header: "میزان تخفیف",
      render: (item: DiscountCodeWithCourses) => (
        <DiscountBadge percentage={Number(item?.percentage)} />
      ),
    },
    // {
    //   key: "startsDate",
    //   header: "تاریخ شروع",
    //   render: (item: DiscountCodeWithCourses) => (
    //     <span className="text-sm">
    //       {item?. ? (
    //         <DateTooltip date={item.startsAt} />
    //       ) : (
    //         ""
    //       )}
    //     </span>
    //   ),
    // },
    {
      key: "expiresDate",
      header: "تاریخ انقضا",
      render: (item: DiscountCodeWithCourses) => (
        <span className="text-sm">
          {item.expiresAt ? (
            <DateTooltip date={item.expiresAt}>
              <DayCountdown date={item.expiresAt} />
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
      render: (item: DiscountCodeWithCourses) => (
        <div className="flex gap-2">
          <ActionGroup
            deleteAlertProps={{}}
            onDelete={async () => {
              if (item?.id) {
                try {
                  const res = await deleteDiscount({ id: item.id });

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
      .map((course) => course?.id)
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