import { DashboardPageHeader } from "@/components/dashboard/DashboardPageHeader";

import { DiscountTable } from "@/app/(dashboards)/dashboard/admin/discounts/DiscountTable";
import { getCourses } from "@/actions/courses/get-courses.action";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DiscountCodesPage = async () => {
  const response = await getCourses({});
  console.log(response);
  // const { data } = response;
  // if (!data) return null;
  return (
    <div className="rounded-xl p-4 bg-card shadow-sm">
      <DashboardPageHeader
        title="لیست کدهای تخفیف"
        description="لیست تمام کدهای تخفیف، برای مشاهده جزئیات هر یک بر روی آن کلیک کنید."
        buttonHref={""}
      />
      <Link href={"/dashboard/admin/discount-codes/new"}>
        <Button>ساخت کد تخفیف جدید</Button>
      </Link>
      <div className="mt-12">
        <DiscountTable data={[]} />
      </div>
    </div>
  );
};

export default DiscountCodesPage;