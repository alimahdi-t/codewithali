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
import { DiscountBadge } from "@/components/common/DiscountBadge";
import { toast } from "sonner";
import { deleteDiscountCodeAction } from "@/actions/discount-codes/delete-discount-code.action";

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
  const handleDelete = async (ids: string[]) => {
    if (ids.length === 0) {
      toast.error("هیچ کد تخفیفی برای حذف وجود ندارد.");
      return;
    }

    const response = await deleteDiscountCodeAction({
      discountCodeId: ids,
    });

    if (response.success) {
      toast.success(response.success);
    } else if (response.error) {
      toast.error(response.error);
    }
  };

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
            onDelete={() => handleDelete([item.id])}
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

    // 3. Call delete action with discount IDs
    handleDelete(discountIds as string[]);
  };

  return (
    <GenericTable
      columns={columns}
      data={data}
      addButton={{
        href: "/admin/discount-codes/new",
        label: "افزودن کد تخفیف",
      }}
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