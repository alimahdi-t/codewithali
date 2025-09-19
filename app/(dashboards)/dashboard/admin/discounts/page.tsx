import { DashboardPageHeader } from "@/components/dashboard/DashboardPageHeader";

import { DiscountTable } from "@/app/(dashboards)/dashboard/admin/discounts/DiscountTable";
import { getDiscount } from "@/actions/discount/get-discount.action";

const DiscountsPage = async () => {
  const response = await getDiscount();

  const { data } = response;
  if (!data) return null;
  return (
    <div className="w-full py-6">
      <div className="mb-4">
        <DashboardPageHeader
          title="لیست تخفیف ها"
          description="لیست تمام تخفیف ها برای دوره ها، برای مشاهده جزئیات هر یک بر روی آن کلیک کنید."
          buttonHref={""}
        />
      </div>
      <DiscountTable data={data} />
    </div>
  );
};

export default DiscountsPage;