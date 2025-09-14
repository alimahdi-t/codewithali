import prisma from "@/lib/prisma";
import { HiOutlineCheckCircle, HiOutlineXCircle } from "react-icons/hi2";
import { Card } from "@/components/ui/card";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function OrderConfirmPage(props: Props) {
  const { id: orderId } = await props.params;
  if (!orderId) {
    return <p>شناسه سفارش نامعتبر است.</p>;
  }

  const order = await prisma.order.findUnique({
    where: { id: Number(orderId) },
    select: {
      id: true,
      OrderStatus: true,
    },
  });

  if (!order) {
    return <p>سفارش پیدا نشد.</p>;
  }

  const isSuccess = order.OrderStatus === "PAID";

  const orderConfirmMessage = isSuccess
    ? "پرداخت شما با موفقیت انجام شد."
    : "متاسفانه پرداخت شما ناموفق بود.";

  const orderConfirmExplanation = isSuccess
    ? "دوره‌های خریداری شده به حساب کاربری شما افزوده شد."
    : "در صورتی که مبلغی از شما کسر شده باشد، نهایت تا ۷۲ ساعت کاری به صورت خودکار به حساب شما برگشت داده خواهد شد.";

  return (
    <Card>
      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center py-4">
          {isSuccess ? (
            <HiOutlineCheckCircle className="size-28 text-action-success" />
          ) : (
            <HiOutlineXCircle className="size-28 text-action-error" />
          )}

          <div className="mt-4">
            <h1 className="text-center font-bold text-base">
              {orderConfirmMessage}
            </h1>
            <p className="max-w-md text-center text-base font-light text-dark-400_light-600 mt-2">
              {orderConfirmExplanation}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}