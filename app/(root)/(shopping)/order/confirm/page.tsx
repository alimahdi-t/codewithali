import { HiOutlineCheckCircle, HiOutlineXCircle } from "react-icons/hi2";

const OrderConfirmPage = () => {
  const orderStatus = "success";
  return (
    <div className="flex items-center justify-center py-24">
      <div className="flex flex-col items-center px-8 py-4">
        {orderStatus === "success" ? (
          <HiOutlineCheckCircle className="size-28 text-action-success" />
        ) : (
          <HiOutlineXCircle className="size-28 text-action-error" />
        )}
        <div className="mt-4">
          <h1 className="text-center font-bold text-base">
            متاسفانه پرداخت شما ناموفق بود.
          </h1>
          <p className="max-w-md text-center text-base font-light text-dark-400_light-600 mt-2">
            در صورتی که مبلغی از حساب شما کسر شده باشد، نهایتا تا ۷۲ ساعت کاری،
            به صورت خودکار به حساب شما برگشت خواهد خورد.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmPage;