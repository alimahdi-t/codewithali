import { getUserOrdersAction } from "@/actions/order/get-user-orders.action";
import { ClientToastWrapper } from "@/components/common/ClientToastWrapper";
import { PaymentTable } from "@/components/tables/PaymentTable";

export default async function UserPaymentPage() {
  const response = await getUserOrdersAction();
  if (response.error) {
    return <ClientToastWrapper message={response.error} />;
  }
  const { orders } = response;
  return (
    <>
      <div className="py-6">
        <h2 className="text-lg font-bold mb-4">لیست پرداخت‌ها</h2>

        <PaymentTable data={orders ?? []} />
      </div>
      {/*<SectionBlock*/}
      {/*  title="تیکت های من"*/}
      {/*  addButton={{ label: "ایجاد تیکت جدید", href: "#" }}*/}
      {/*/>*/}
    </>
  );
}