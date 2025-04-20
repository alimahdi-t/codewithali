"use client";

import { GenericTable } from "@/components/shared/GenericTable";
import { convertToPersianNumbers } from "@/utils";
import { ActionGroup } from "@/components/common/ActionGroup";
import { Button } from "@/components/ui/button";

const columns = [
  {
    key: "id",
    header: "شناسه",
    className: "w-24",
    render: (item: Comment) => convertToPersianNumbers(item.id),
  },
  {
    key: "content",
    header: "متن",
  },
  {
    key: "authorName",
    header: "کاربر",
  },
  {
    key: "status",
    header: "وضعیت",
    render: (item: Comment) => (
      <span className="text-xs text-yellow-600">{item.status}</span>
    ),
  },
  {
    key: "createdAt",
    header: "تاریخ شروع",
    render: (item: Comment) => item.createdAt.toLocaleDateString("fa-IR"),
  },
  {
    key: "actions",
    header: "عملیات",
    render: (item: Comment) => (
      <div className="flex gap-2">
        <ActionGroup
          deleteAlertProps={{}}
          onEdit={() => {}}
          onDelete={() => {}}
        />
      </div>
    ),
  },
];

type Comment = {
  id: string;
  content: string;
  authorName: string;
  status: string;
  createdAt: Date;
};

const comments: Comment[] = [
  {
    id: "1",
    content: "این یک نظر تستی است",
    authorName: "علی محمدی",
    status: "PENDING",
    createdAt: new Date(),
  },
  {
    id: "2",
    content: "این یک نظر تستی است",
    authorName: "علی محمدی",
    status: "PENDING",
    createdAt: new Date(),
  },
  {
    id: "3",
    content: "این یک نظر تستی است",
    authorName: "علی محمدی",
    status: "PENDING",
    createdAt: new Date(),
  },
  {
    id: "4",
    content: "این یک نظر تستی است",
    authorName: "علی محمدی",
    status: "PENDING",
    createdAt: new Date(),
  },
  {
    id: "5",
    content: "این یک نظر تستی است",
    authorName: "علی محمدی",
    status: "PENDING",
    createdAt: new Date(),
  },
  {
    id: "6",
    content: "این یک نظر تستی است",
    authorName: "علی محمدی",
    status: "PENDING",
    createdAt: new Date(),
  },
];

export const DiscountTable = () => {
  const handleBulkDelete = async (ids: (string | number)[]) => {
    console.log(ids);
  };

  return (
    <GenericTable
      columns={columns}
      data={comments}
      bulkActions={(selectedIds) => (
        <Button
          size="sm"
          variant="destructive"
          onClick={() => handleBulkDelete(selectedIds)}
        >
          افزودن کد تخفیف
        </Button>
      )}
    />
  );
};