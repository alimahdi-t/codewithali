import { ClientToastWrapper } from "@/components/common/ClientToastWrapper";
import { getAllOrdersAction } from "@/actions/order/get-all-orders.action";
import { AllPaymentTable } from "@/components/tables/AllPaymentTable";

const PaymentsPage = async () => {
  const response = await getAllOrdersAction();
  if (response.error) {
    return <ClientToastWrapper message={response.error} />;
  }
  const { orders } = response;
  console.log(orders);
  return (
    <>
      <div className="py-6">
        <h2 className="text-lg font-bold mb-4">لیست پرداخت‌ها</h2>

        <AllPaymentTable data={orders ?? []} />
      </div>
      {/*<SectionBlock*/}
      {/*  title="تیکت های من"*/}
      {/*  addButton={{ label: "ایجاد تیکت جدید", href: "#" }}*/}
      {/*/>*/}
    </>
  );
};

export default PaymentsPage;