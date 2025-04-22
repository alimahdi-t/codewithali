import { DashboardPageHeader } from "@/components/dashboard/DashboardPageHeader";

import { DiscountTable } from "@/app/(dashboards)/dashboard/admin/discount-codes/DiscountTable";
import { getDiscount } from "@/actions/discount/get-discount.action";

const DiscountCodesPage = async () => {
  const response = await getDiscount();

  const { data } = response;
  if (!data) return null;
  return (
    <div className="rounded-xl p-4 bg-card shadow-sm">
      <DashboardPageHeader
        title="لیست کدهای تخفیف"
        description="لیست تمام کدهای تخفیف، برای مشاهده جزئیات هر یک بر روی آن کلیک کنید."
        buttonHref={""}
      />

      <div className="mt-12">
        <DiscountTable data={data} />
      </div>
    </div>
  );
};

export default DiscountCodesPage;