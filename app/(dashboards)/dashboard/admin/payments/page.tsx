import { ClientToastWrapper } from "@/components/common/ClientToastWrapper";
import { getAllOrdersAction } from "@/actions/order/get-all-orders.action";
import { AllPaymentTable } from "@/components/tables/AllPaymentTable";

const PaymentsPage = async () => {
  const response = await getAllOrdersAction();
  if (response.error) {
    return <ClientToastWrapper message={response.error} />;
  }
  const { orders } = response;
  return (
    <div className="py-6">
      <h2 className="text-lg font-bold mb-4">لیست پرداخت‌ها</h2>

      <AllPaymentTable data={orders ?? []} />
    </div>
  );
};

export default PaymentsPage;