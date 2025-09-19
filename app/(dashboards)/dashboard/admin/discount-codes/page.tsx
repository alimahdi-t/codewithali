import { DashboardPageHeader } from "@/components/dashboard/DashboardPageHeader";
import { getAllDiscountCodes } from "@/actions/discount-codes/get-all-discount-codes.action";
import { DiscountCodesTable } from "@/app/(dashboards)/dashboard/admin/discount-codes/DiscountCodesTable";
import { ClientToastWrapper } from "@/components/common/ClientToastWrapper";

const DiscountCodesPage = async () => {
  const response = await getAllDiscountCodes();
  // console.log(response);

  if (response.warning) {
    return <ClientToastWrapper message={response.warning} variant={"info"} />;
  }
  if (response.error) {
    return <ClientToastWrapper message={response.error} variant={"error"} />;
  }

  const { data } = response;

  return (
    <div className="rounded-xl p-4 bg-card shadow-sm">
      <DashboardPageHeader
        title="لیست کدهای تخفیف"
        description="لیست تمام کدهای تخفیف، برای مشاهده جزئیات هر یک بر روی آن کلیک کنید."
        buttonHref={""}
      />
      <div className="mt-12">
        <DiscountCodesTable data={data ?? []} />
      </div>
    </div>
  );
};

export default DiscountCodesPage;