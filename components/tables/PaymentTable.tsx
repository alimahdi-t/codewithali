"use client";

import { GenericTable } from "@/components/shared/Table/GenericTable";
import { toPersianNumber } from "@/utils";
import { Prisma } from "@/prisma/client";
import { DateTooltip } from "@/components/shared/Tooltips/DateTooltip";
import Price from "@/components/common/Price";

type PaymentType = Prisma.OrderGetPayload<{
  include: {
    items: true;
  };
  orderBy: {
    createdAt: "desc"; // optional: latest orders first
  };
}>;

export const PaymentTable = ({ data }: { data: PaymentType[] }) => {
  const columns = [
    {
      key: "id",
      header: "شناسه",
      className: "w-24",
      render: (item: PaymentType) => toPersianNumber(item.id),
    },

    {
      key: "explanation",
      header: "توضیحات",
      render: (item: PaymentType) =>
        item.OrderStatus === "PAID" ? (
          item.items.length > 1 ? (
            <span>خرید {toPersianNumber(item.items.length)} دوره</span>
          ) : (
            <span>خرید {item.items[0].name}</span>
          )
        ) : (
          "_____"
        ),
    },
    {
      key: "status",
      header: "وضعیت",
      render: (item: PaymentType) => <span>{item.OrderStatus}</span>,
    },

    {
      key: "amount",
      header: "مبلغ",
      render: (item: PaymentType) => <Price price={item.amount} />,
    },
    {
      key: "createdAt",
      header: "تاریخ خرید",
      render: (item: PaymentType) => (
        <span className="text-sm">
          <DateTooltip date={item.createdAt} />
        </span>
      ),
    },
  ];

  return <GenericTable columns={columns} data={data} />;
};