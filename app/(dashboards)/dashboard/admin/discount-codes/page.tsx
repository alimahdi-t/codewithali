import { DashboardPageHeader } from "@/components/dashboard/DashboardPageHeader";
import { getAllDiscountCodes } from "@/actions/discount-codes/get-all-discount-codes.action";
import { DiscountCodesTable } from "@/components/tables/DiscountCodesTable";
import { ClientToastWrapper } from "@/components/common/ClientToastWrapper";

const DiscountCodesPage = async () => {
  const response = await getAllDiscountCodes();

  if (response.warning) {
    return <ClientToastWrapper message={response.warning} variant={"info"} />;
  }
  if (response.error) {
    return <ClientToastWrapper message={response.error} variant={"error"} />;
  }

  const { data } = response;

  return (
    <div className="w-full py-6">
      <div className="mb-4">
        <DashboardPageHeader
          title="لیست کدهای تخفیف"
          description="لیست تمام کدهای تخفیف، برای مشاهده جزئیات هر یک بر روی آن کلیک کنید."
        />
      </div>
      <DiscountCodesTable data={data ?? []} />
    </div>
  );
};

export default DiscountCodesPage;